"use client";

import React, { useState } from "react";
import OrderBox from "./OrderContainer";
import { usePathname } from "next/navigation";

import Image from "next/image";

type ItemType = {
  icon: string;
  label: string;
};

export default function RightSideNav() {
  const path = usePathname().split("/");

  const initialItems: ItemType[] = [
    { icon: "/assets/RightSideNav/ContactBook.svg", label: "Contact" },
    { icon: "/assets/RightSideNav/Building.svg", label: "Company" },
    { icon: "/assets/RightSideNav/InfoIcon.svg", label: "Info" },
    { icon: "/assets/RightSideNav/Notes.svg", label: "Notes" },
    { icon: "/assets/RightSideNav/CartIcon.svg", label: "Orders" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function clickHandler(idx: number) {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  }

  return (
    <section className="chat-user-menu-bar">
      {activeIndex !== null &&
        (initialItems[activeIndex].label &&
        initialItems[activeIndex].label === "Orders" ? (
          <OrderBox CID={+path[path.length - 1]} />
        ) : (
          <section className=" w-89.5 h-full bg-white border-l border-gray-300 shadow-lg p-4">
            <h2 className="text-lg font-semibold">
              {initialItems[activeIndex].label} Panel
            </h2>
            <p>This is content for {initialItems[activeIndex].label}</p>
          </section>
        ))}
      <aside className="w-17.5 h-full pt-3">
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
                  {/* {item.icon} */}
                  <Image
                    src={item.icon}
                    alt={item.icon}
                    width={20}
                    height={20}
                  />
                </div>

                {isActive && (
                  <div className="absolute w-full h-full top-0 left-0">
                    <div className="grid w-10 h-10 place-items-center bg-[#000000CC] rounded-lg m-auto">
                      {/* <CloseIcon /> */}
                      <Image
                        src="/assets/RightSideNav/closeover.svg"
                        alt="closeOver"
                        width={20}
                        height={20}
                      />
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
      </aside>
    </section>
  );
}
