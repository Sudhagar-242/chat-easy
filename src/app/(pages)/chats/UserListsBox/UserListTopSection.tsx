"use client";
import React, { useState } from "react";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

import Image, { StaticImageData } from "next/image";

type MenuItemProps = {
  icon: string | StaticImageData;
  contentName: string;
  id: string;
};

const MenuItems: MenuItemProps[] = [
  {
    icon: "/assets/ChatSvgs/ChatPersonList.svg",
    contentName: "HOME",
    id: "01_MenuItem",
  },
  {
    icon: "/assets/ChatSvgs/ChatContatctIcon.svg",
    contentName: "Contact",
    id: "02_MenuItem",
  },
  {
    icon: "/assets/ChatSvgs/ChatStarred.svg",
    contentName: "Starred Message",
    id: "03_MenuItem",
  },
  {
    icon: "/assets/ChatSvgs/ChatMessages.svg",
    contentName: "Messages",
    id: "04_MenuItem",
  },
  {
    icon: "/assets/ChatSvgs/ChatReadIcon.svg",
    contentName: "Read Messages",
    id: "05_MenuItem",
  },
  {
    icon: "/assets/ChatSvgs/ChatTimerIcon.svg",
    contentName: "Timer",
    id: "06_MenuItem",
  },
];

function SearchBar() {
  const [onClick, setOnClick] = useState(false);

  const OnClickHandler = () => setOnClick((prev) => !prev);

  return (
    <div className="w-full max-w-[300px]">
      {!onClick ? (
        <div
          onClick={OnClickHandler}
          className="not-active-search-parent w-full h-8.5"
        >
          <InputText
            placeholder="Search"
            disabled
            pt={{
              root: {
                className:
                  "!focus:ring-0 !border-none w-full flex-1 !shadow-none !outline-none !ring-0 !h-full !bg-transparent",
              },
            }}
          />
          <InputIcon className="pi pi-search text-gray-500" />
        </div>
      ) : (
        <div className="active-search-parent flex items-center gap-2 h-9 w-full border-2 border-indigo-400 rounded-2xl px-3 py-1 bg-white shadow-sm">
          <select name="Filter" id="Filter">
            <option value="Contacts">Contacts</option>
            <option value="Starred">Starred</option>
            <option value="Opened">Opened</option>
            <option value="Unread">Unread</option>
          </select>

          <InputText
            autoFocus
            placeholder="Search"
            pt={{
              root: {
                className:
                  "!focus:ring-0 !border-none flex-1 w-full !shadow-none !outline-none !ring-0 !h-full",
              },
            }}
          />

          <i
            className="pi pi-times text-gray-500 cursor-pointer hover:text-black"
            onClick={OnClickHandler}
          />
        </div>
      )}
    </div>
  );
}

export default function UserListsTopSection({
  chatUpdater,
}: {
  chatUpdater: (a: string) => void;
}) {
  const [selectedItem, setSelectedItem] = useState<string>("01_MenuItem");
  const [menuItems, setMenuItems] = useState<string>("");

  const handleClick = (content: string) => {
    setMenuItems((prev) => (prev === content ? "" : content));
  };

  function onClickHandler(item: MenuItemProps) {
    console.log("Clicked:", item.contentName);
    chatUpdater(item.contentName);
    setSelectedItem(item.id);
  }

  return (
    <>
      <div className="user-list-top-parent">
        <SearchBar />
        <div
          onClick={(ev) => {
            ev.preventDefault();
            handleClick("filter");
          }}
          className={`filter-icon ${
            menuItems === "filter"
              ? "bg-[#6366F1] text-white"
              : "hover:bg-[#eaeafd] text-[#48535B]"
          }`}
        >
          {/* <FilterIcon /> */}
          <Image
            src="/assets/ChatSvgs/FilterIcon.svg"
            alt="FilterIcon"
            width={30}
            height={30}
          />
        </div>
        <div
          onClick={(ev) => {
            ev.preventDefault();
            handleClick("Add");
          }}
          className={`add-icon ${
            menuItems === "Add"
              ? "bg-[#6366F1] text-white"
              : "hover:bg-[#eaeafd] text-[#48535B]"
          }`}
        >
          {/* <AddBox /> */}
          <Image
            src="/assets/ChatSvgs/AddBox.svg"
            alt="AddBox"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="user-list-menu-parent">
        {MenuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onClickHandler(item)}
            className={`user-list-menu-item ${
              selectedItem === item.id
                ? "user-list-menu-selected"
                : "hover:bg-[#eaeafd] rounded-lg"
            }`}
          >
            {/* {item.icon} */}
            <Image src={item.icon} alt={item.icon} width={55} height={45} />
          </div>
        ))}
      </div>
    </>
  );
}
