import Image, { StaticImageData } from "next/image";
import { OrderCardType } from "@/app/Context/types";
import { Button } from "primereact/button";
import PopUpMenu, { PopUpMenuType } from "./PopUpMenu";

import ReviewStar from "../../../../../public/assets/OrderedImages/RatingStars.svg";
import HalfReviewStar from "../../../../../public/assets/OrderedImages/HalfRattingStar.svg";

// const generateMessageKey = (msg: string | StaticImageData, index: number) => {
//   const base =
//     typeof msg === "string"
//       ? (msg.slice(0, 7) || "") + index * Math.random() * 10 + index
//       : Math.floor(Math.random() * 1000).toString();
//   console.log(base);

//   return btoa(encodeURIComponent(base)).slice(0, 20); // short base64
// };

const generateMessageKey = (msg: string | StaticImageData, index: number) => {
  const src =
    typeof msg === "string"
      ? msg.split("?")[0]
      : (msg as StaticImageData).src || "";

  return `img-${index}-${src}`;
};

function OrderImageAligner({
  ImageArray,
}: {
  ImageArray: (string | StaticImageData)[];
}) {
  let WhichStyle: string;

  switch (ImageArray.length) {
    case 0:
      WhichStyle = "bg-blue-500";
      break;
    case 1:
      WhichStyle = "inline-grid";
      break;
    case 2:
      WhichStyle = "inline-grid grid-cols-2 grid-rows-1";
      break;
    default:
      WhichStyle = "inline-grid grid-cols-2 grid-rows-2";
      break;
  }

  return (
    <>
      <div
        className={`rounded-lg w-16.5 h-16.5 overflow-hidden gap-1 ${WhichStyle} border-[]`}
      >
        {ImageArray.map((MenuItemIcon, index) => {
          if (ImageArray.length === 3 && index === 2) {
            return (
              <Image
                key={generateMessageKey(ImageArray[index], index)}
                className="inline-block bg-blue-900 col-span-2"
                src={MenuItemIcon}
                alt=""
              ></Image>
            );
          }
          if (ImageArray.length > 4 && index === 3) {
            return (
              <div
                key={generateMessageKey(ImageArray[index], index)}
                className="inline-block bg-pink-300 text-white box-border py-1.5 text-center"
              >
                + {ImageArray.length - 3}
              </div>
            );
          }
          if (ImageArray.length > 4 && index > 3) {
            return null;
          }
          return (
            <Image
              key={generateMessageKey(ImageArray[index], index)}
              className="inline-block bg-blue-900 w-full"
              src={MenuItemIcon}
              alt=""
            ></Image>
          );
        })}
      </div>
    </>
  );
}

export default function OrderCard({
  Items,
  OID,
  ViewLink,
  OrderPlacedDate,
  OrderTime,
  Amount,
  OrderStatus,
  isHasIssue,
  ImageArray,
  ProductNames,
}: OrderCardType) {
  const OrderedPopUPMenu: PopUpMenuType[] = ProductNames.map((item) => ({
    label: item.slice(0, 6) + "...",
  }));

  return (
    <article className="w-74.5 h-49.5 rounded-lg border relative box-border p-3 flex flex-col justify-between gap-y-2.5">
      <div className="absolute top-0 right-0">
        <PopUpMenu MenuItems={OrderedPopUPMenu} />
      </div>
      <div className="pb-3 border-b-[#E5E9EB] w-full text-[smaller] inline-flex gap-x-3.5 justify-start">
        <div className="">
          <OrderImageAligner ImageArray={ImageArray} />
        </div>
        <div className="flex flex-col font-medium text-[14px] ">
          {ProductNames.length > 1 && <h1>{Items} Items</h1>}
          {ProductNames.length === 1 && <h1>{ProductNames[0]}</h1>}
          <p className="text-[12px] text-[#666668]">OID: {OID}</p>
          <a href={ViewLink} className="text-[12px] text-[#6366f1]">
            View Order
          </a>
        </div>
      </div>
      <div className="flex justify-between h-12.5 w-full border-b-[#E5E9EB] items-center text-[12px] text-[#666668] border-b-2 border-[#666668]">
        <div>
          <h1>Order Placed on {OrderPlacedDate}</h1>
          <h1>
            {OrderTime} | {OrderStatus}
          </h1>
        </div>
        <h1 className="font-medium text-xs text-black">{Amount}₹</h1>
      </div>
      {isHasIssue && (
        <div className="flex justify-between w-full">
          <Button
            label="Review"
            pt={{
              root: {
                className:
                  "!w-15.5 !h-6 !rounded-[8px] !box-border !border-none !p-0 !bg-[#6366F10D]",
              },
              label: {
                className:
                  "!text-xs !font-normal !tracking-[-0.24%] !font-poppins !text-black",
              },
            }}
          />
          <Button
            label="Open"
            pt={{
              root: {
                className:
                  "!w-15.5 !h-6 !rounded-[8px] !border-none !box-border !p-0 !bg-[#F1A76326]",
              },
              label: {
                className:
                  "!text-xs !font-normal !tracking-[-0.24%] font-poppins text-black",
              },
            }}
          />
        </div>
      )}
      {!isHasIssue && (
        <div className="flex justify-between w-full">
          <div className="w-25.5 h-4.5 flex gap-x-[3px]">
            <ReviewStar />
            <ReviewStar />
            <ReviewStar />
            <ReviewStar />
            <HalfReviewStar />
          </div>
          <Button
            label="Solved"
            pt={{
              root: {
                className:
                  "!w-15.5 !h-6 !rounded-[8px] !box-border !p-0 !bg-[#34C759] !text-white",
              },
              label: {
                className:
                  "!text-xs !font-normal !tracking-[-0.24%] !font-poppins !text-white",
              },
            }}
          />
          <Button
            label="info"
            pt={{
              root: {
                className:
                  "!w-17 !h-6 !rounded-[8px] !box-border !p-0 !border-none !bg-[#6366F10D]",
              },
              label: {
                className:
                  "!text-xs !font-normal !w-full !tracking-[-0.24%] !font-poppins !text-black",
              },
            }}
          />
        </div>
      )}
    </article>
  );
}
