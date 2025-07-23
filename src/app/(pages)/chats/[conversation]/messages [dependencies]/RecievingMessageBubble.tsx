import PopUpMenu from "../../ChatMenu/PopUpMenu";
import Image from "next/image";

export type RecievedMessageType = {
  message: string;
  time: string;
  imageArray?: string[];
};

export default function LeftMessageBubble({
  message,
  time,
  imageArray,
}: RecievedMessageType) {
  return (
    <article className="max-w-79 self-start relative">
      {imageArray && (
        <PopUpMenu MenuItems={[{ label: "Information", icon: "pi pi-info" }]} />
      )}
      <div className="flex">
        <span className="border-8 border-[#F2F2F7] border-l-transparent border-b-transparent border-r-0"></span>
        <div className="w-fit  bg-[#F2F2F7] rounded-tr-[6px] rounded-b-[6px] pl-1.5 py-1 pr-2 ">
          <p className="mr-14 font-normal text-sm text-[#2C2C2E] leading-[20px]">
            {message.split(" ").map((word, index) => {
              if (word.startsWith("@")) {
                return (
                  <span key={index} className="text-indigo-500 cursor-pointer">
                    {word}{" "}
                  </span>
                );
              }
              return word + " ";
            })}
          </p>
          <div className="text-end w-full font-normal text-xs text-[#666668] -m-1">
            {time}
          </div>
        </div>
      </div>

      {imageArray && (
        <div className={`${imageArray && "flex gap-x-2.5 pt-2.5 pl-4"}`}>
          {imageArray.map((item, index) => (
            <Image
              src={item}
              key={item + index}
              alt=""
              width={90}
              height={90}
              className="rounded-lg bg-red-600 "
            />
          ))}
        </div>
      )}
    </article>
  );
}
