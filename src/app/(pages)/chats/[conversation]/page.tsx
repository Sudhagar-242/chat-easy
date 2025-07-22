import { getChats, getUserInfo } from "@/app/Context/chatData";
import {
  userMessageType,
  SendingMessageType,
  RecievedMessageType,
} from "@/app/Context/types";

import LeftMessageBubble from "./messages [dependencies]/RecievingMessageBubble";
import RightMessageBubble from "./messages [dependencies]/SendingMessageBubble";
import UserInfo from "./UserInfo";

// const Messages: userMessageType[] = [
//   {
//     date: "08/20/2020",
//     id: "hfvj",
//     messages: [
//       {
//         message: "I’m down! Any ideas??",
//         time: "11:35 AM",
//         status: "recieved",
//       },
//       {
//         sender: "Winson Joseph",
//         profile: <User6 />,
//         position: "Category",
//         message: "I was thinking the cafe downtown",
//         time: "11:36AM",
//         status: "sent",
//       },
//       {
//         message: "I was thinking the cafe downtown",
//         time: "11:45 AM",
//         status: "recieved",
//       },
//       {
//         message: `But limited vegan options @Janet!`,
//         time: "11:45 AM",
//         status: "recieved",
//       },
//     ],
//   },
//   {
//     date: "Today",
//     id: "sjhhbf",
//     messages: [
//       {
//         status: "recieved",
//         message: `That works- I was actually planning to
// get a smoothie anyways 👍`,
//         time: "12:03 PM",
//         imageArray: [
//           "/ComplainedImages/UserSent1.png",
//           "/ComplainedImages/UserSent2.png",
//         ],
//       },
//       {
//         sender: "John",
//         profile: <User7 />,
//         position: "Sales EX",
//         message: "Agreed",
//         time: "11:36 AM",
//         status: "sent",
//       },
//       {
//         sender: "John",
//         profile: <User7 />,
//         position: "Sales EX",
//         FileSent: "Audio",
//         time: "11:36 AM",
//         status: "sent",
//       },
//     ],
//   },
// ];

type conversationProps = {
  ConversationId: Promise<{ ConversationID: string }>;
  userName: string;
  userDp: any;
};

const generateMessageKey = (
  msg: RecievedMessageType | SendingMessageType,
  index: number
) => {
  const base = (msg.message || "") + (msg.time || "") + index;

  return btoa(encodeURIComponent(base)).slice(0, 12); // short base64
};

export default async function UserConversation({
  params,
}: {
  params: { conversation: string };
}) {
  const CID = await params;
  console.log(CID);
  console.log(CID.conversation);
  const Messages = getChats(+CID.conversation);
  const userInfo = getUserInfo(+CID.conversation);

  if (!CID) {
    return <h1>CID not found</h1>;
  }

  return (
    <>
      <UserInfo userName={userInfo.userName} userDp={userInfo.userDP} />
      <div className=" w-full h-[calc(100vh-114px)] inline-block p-4 overflow-y-scroll no-scrollbar scroll-smooth">
        {Messages.map((item, idx) => (
          <div
            key={`${item.id} ${generateMessageKey(item.messages[idx], idx)}`}
            className=" w-full flex flex-col gap-y-4"
          >
            <h1 className="text-center font-normal text-xs text-[#666668]">
              {item.date}
            </h1>
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
                  />
                );
              }
            })}
          </div>
        ))}
      </div>
    </>
  );
}
