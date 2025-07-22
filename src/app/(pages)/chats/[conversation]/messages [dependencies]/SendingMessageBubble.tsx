import User1 from "@/assets/UserListSvg/User1.svg";
import ReadReciept from "@/assets/ChatSvgs/ReadREciept.svg";
import AudioPlayer from "./AudioMessage";
import { SendingMessageType } from "@/app/Context/types";

export default function RightMessageBubble({
  sender,
  profile,
  position,
  message,
  time,
  FileSent,
  seconds,
  isOnline = true,
}: SendingMessageType) {
  return (
    <div className="max-w-100 break-words self-end text-[#2C2C2E] font-segoe">
      <div className="flex ">
        <div className="w-fit bg-[#6366f1]/20 rounded-tl-[6px] rounded-b-[6px] py-1 pl-2 pr-1.5">
          <div>
            <span className="font-semibold text-[14px] align-middle ">
              {sender}
            </span>
            <span className="font-normal text-[12px] align-middle ml-2.5">
              {position}
            </span>
          </div>
          <span className="mr-18 font-normal text-[14px] leading-[20px] align-middle">
            {FileSent && (
              <span>
                <AudioPlayer seconds={seconds!} />
              </span>
            )}
            {message &&
              message.split(" ").map((word, index) => {
                if (word.startsWith("@")) {
                  return (
                    <span key={index} className="text-indigo-500">
                      {word}{" "}
                    </span>
                  );
                }
                return word + " ";
              })}
          </span>
          <div className="text-end w-full h-4 font-normal text-[12px] -mt-1.5 align-middle">
            <span>
              {time}{" "}
              <span className="w-4">
                <ReadReciept className="inline-block" />
              </span>
            </span>
          </div>
        </div>
        <span className="border-8 border-r-transparent border-b-transparent border-l-0 border-[#6366F1]/20"></span>
        <div className="relative h-9.5">
          {profile}
          {isOnline && (
            <span className="bottom-0 left-6 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          )}
        </div>
      </div>
    </div>
  );
}
