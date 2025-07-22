"use client";
import React, { useState } from "react";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

import UsersChatList from "@/assets/ChatSvgs/ChatPersonList.svg";
import ChatContatctIcon from "@/assets/ChatSvgs/ChatContatctIcon.svg";
import ChatStarred from "@/assets/ChatSvgs/ChatStarred.svg";
import ChatMessages from "@/assets/ChatSvgs/ChatMessages.svg";
import ChatReadIcon from "@/assets/ChatSvgs/ChatReadIcon.svg";
import ChatTimerIcon from "@/assets/ChatSvgs/ChatTimerIcon.svg";
import FilterIcon from "@/assets/ChatSvgs/FilterIcon.svg";
import AddBox from "@/assets/ChatSvgs/AddBox.svg";

type MenuItemProps = {
  icon: React.ReactNode;
  contentName: string;
  id: string;
};

const MenuItems: MenuItemProps[] = [
  {
    icon: <UsersChatList />,
    contentName: "HOME",
    id: "01_MenuItem",
  },
  {
    icon: <ChatContatctIcon />,
    contentName: "Contact",
    id: "02_MenuItem",
  },
  {
    icon: <ChatStarred />,
    contentName: "Starred Message",
    id: "03_MenuItem",
  },
  {
    icon: <ChatMessages />,
    contentName: "Messages",
    id: "04_MenuItem",
  },
  {
    icon: <ChatReadIcon />,
    contentName: "Read Messages",
    id: "05_MenuItem",
  },
  {
    icon: <ChatTimerIcon />,
    contentName: "Timer",
    id: "06_MenuItem",
  },
];

function SearchBar({
  width,
  haveFilter = true,
  className = "",
}: {
  width: string;
  haveFilter?: boolean;
}) {
  const [onClick, setOnClick] = useState(false);

  function OnClickHandler() {
    setOnClick((prev) => !prev);
  }

  return (
    <>
      <div className="w-full">
        {!onClick && (
          <div onClick={OnClickHandler}>
            <div
              className={`${width} m-auto border-2 border-gray-400 rounded-4xl box-border hover:bg-[#F0F0FE] overflow-hidden cursor-pointer 
                 px-3 py-1 flex items-center justify-between group`}
            >
              <InputText
                placeholder="Search"
                className="w-full h-full border-0 m-auto border-none rounded-4xl px-[12px] py-[2px] "
                disabled={true}
                pt={{
                  root: {
                    className:
                      "!focus:ring-0 !border-none flex-1 w-20 !shadow-none !outline-none !ring-0 !h-full !bg-transparent",
                  },
                }}
              />
              <InputIcon className="pi pi-search top-1.5 text-gray-500 group-hover:text-black  cursor-pointer">
                {" "}
              </InputIcon>
            </div>
          </div>
        )}
        {onClick && (
          <div
            className={`${width} h-8.5 m-auto px-3 py-1 border-2 border-gray-400 rounded-full box-border flex items-center gap-2`}
          >
            {haveFilter && (
              <select name="Filter" id="Filter">
                <option value="Contacts">Contacts</option>
                <option value="Starred">Starred</option>
                <option value="Opened">Opened</option>
                <option value="Unread">Unread</option>
              </select>
            )}

            <InputText
              pt={{
                root: {
                  className:
                    "!focus:ring-0 !border-none flex-1 w-20 !shadow-none !outline-none !ring-0 !h-full",
                },
              }}
              autoFocus
            />

            <i
              className="pi pi-times cursor-pointer text-gray-500 hover:text-black"
              onClick={OnClickHandler}
            />
          </div>
        )}
      </div>
    </>
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
      <div className="flex items-center gap-x-1 py-4">
        <SearchBar width="w-full h-8.5" />
        <div
          onClick={(ev) => {
            ev.preventDefault();
            handleClick("filter");
          }}
          className={`rounded-lg p-2 cursor-pointer transition-colors ${
            menuItems === "filter"
              ? "bg-[#6366F1] text-white"
              : "hover:bg-[#eaeafd] text-[#48535B]"
          }`}
        >
          <FilterIcon />
        </div>
        <div
          onClick={(ev) => {
            ev.preventDefault();
            handleClick("Add");
          }}
          className={`rounded-lg p-2 mr-1 cursor-pointer transition-colors ${
            menuItems === "Add"
              ? "bg-[#6366F1] text-white"
              : "hover:bg-[#eaeafd] text-[#48535B]"
          }`}
        >
          <AddBox />
        </div>
      </div>
      <div className="flex w-full justify-between py-0.5 border-b-2 border-b-[#D7D7D7]">
        {MenuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onClickHandler(item)}
            className={`flex items-center justify-center cursor-pointer ${
              selectedItem === item.id
                ? "text-indigo-500 border-t-2 box-border border-[#6366F1] rounded-t-lg bg-gradient-to-b from-[#eaeafd] to-[#ffffff]"
                : "hover:bg-[#eaeafd] rounded-lg"
            }`}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </>
  );
}
