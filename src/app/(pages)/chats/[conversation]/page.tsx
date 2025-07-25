import { Suspense } from "react";
import { getChats, getUserInfo } from "@/app/Context/chatData";
import { RecievedMessageType, SendingMessageType } from "@/app/types/types";

import LeftMessageBubble from "./messages [dependencies]/RecievingMessageBubble";
import RightMessageBubble from "./messages [dependencies]/SendingMessageBubble";
import UserInfo from "./UserInfo";

// Key generator (unchanged)
const generateMessageKey = (
  msg: RecievedMessageType | SendingMessageType,
  index: number
) => {
  const base = (msg.message || "") + (msg.time || "") + index;
  return btoa(encodeURIComponent(base)).slice(0, 12);
};

export default async function UserConversation({
  params,
}: {
  params: { conversation: string };
}) {
  const CID = await params;
  const Messages = getChats(+CID.conversation);
  const userInfo = getUserInfo(+CID.conversation);

  return (
    <>
      <Suspense
        fallback={
          <div className="p-4 animate-pulse text-sm">Loading user info...</div>
        }
      >
        <UserInfo userName={userInfo.userName} userDp={userInfo.userDP} />
      </Suspense>
      <main className="conversation-parent no-scrollbar">
        <Suspense
          fallback={
            <div className="text-center text-sm">Loading messages...</div>
          }
        >
          {Messages.map((item, idx) => (
            <section
              key={`${item.id} ${generateMessageKey(item.messages[idx], idx)}`}
              className="conversation-message-container"
            >
              <h1 className="conversation-message-date">{item.date}</h1>
              {item.messages.map((item, index) => {
                const generatedKey = generateMessageKey(item, index);

                if (item.status === "recieved") {
                  return (
                    <LeftMessageBubble
                      key={`left - ${generatedKey}`}
                      message={item.message}
                      time={item.time}
                      imageArray={item.imageArray}
                    />
                  );
                }

                if (item.status === "sent") {
                  return (
                    <RightMessageBubble
                      key={`right - ${generatedKey}`}
                      profile={item.profile}
                      message={item.message}
                      time={item.time}
                      position={item.position}
                      sender={item.sender}
                      FileSent={item.FileSent}
                      seconds={item.seconds}
                    />
                  );
                }
              })}
            </section>
          ))}
        </Suspense>
      </main>
    </>
  );
}
