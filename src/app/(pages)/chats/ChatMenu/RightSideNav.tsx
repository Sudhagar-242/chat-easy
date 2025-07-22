"use client";

import React, { useState } from "react";
import OrderBox from "./OrderContainer";
import { usePathname } from "next/navigation";

import ContactIcon from "@/assets/RightSideNav/ContactBook.svg";
import Company from "@/assets/RightSideNav/Building.svg";
import InfoIcon from "@/assets/RightSideNav/InfoIcon.svg";
import Notes from "@/assets/RightSideNav/Notes.svg";
import CartIcon from "@/assets/RightSideNav/CartIcon.svg";
import CloseIcon from "@/assets/RightSideNav/closeover.svg";

type ItemType = {
  icon: React.ReactNode;
  label: string;
};

export default function RightSideNav() {
  const path = usePathname().split("/");

  const initialItems: ItemType[] = [
    { icon: <ContactIcon />, label: "Contact" },
    { icon: <Company />, label: "Company" },
    { icon: <InfoIcon />, label: "Info" },
    { icon: <Notes />, label: "Notes" },
    { icon: <CartIcon />, label: "Orders" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function clickHandler(idx: number) {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  }

  return (
    <div className="chat-user-menu-bar">
      {activeIndex !== null &&
        (initialItems[activeIndex].label &&
        initialItems[activeIndex].label === "Orders" ? (
          <OrderBox CID={+path[path.length - 1]} />
        ) : (
          <div className=" w-89.5 h-full bg-white border-l border-gray-300 shadow-lg p-4">
            <h2 className="text-lg font-semibold">
              {initialItems[activeIndex].label} Panel
            </h2>
            <p>This is content for {initialItems[activeIndex].label}</p>
          </div>
        ))}
      <div className="w-17.5 h-full">
        <div className="w-full h-83.5 flex flex-col items-center gap-y-5">
          {initialItems.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={item.label}
                className="w-17.5 group relative cursor-pointer"
                onClick={() => clickHandler(idx)}
              >
                <div className="w-10 h-10 grid place-items-center m-auto">
                  {item.icon}
                </div>

                {isActive && (
                  <div className="absolute w-full h-full top-0 left-0">
                    <div className="grid w-10 h-10 place-items-center bg-[#000000CC] rounded-lg m-auto">
                      <CloseIcon />
                    </div>
                    <span className="h-full w-1 bg-[#6366f1] absolute top-0 left-0"></span>
                  </div>
                )}

                <p className="text-center text-[10px] font-poppins font-light">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
