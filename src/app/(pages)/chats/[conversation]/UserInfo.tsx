"use client";

import React, { useState, useEffect, useRef } from "react";
import { TieredMenu } from "primereact/tieredmenu";
import PopUpMenu from "../ChatMenu/PopUpMenu";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { SplitButton } from "primereact/splitbutton";
import { Toast } from "primereact/toast";

import Assign from "../../../../../public/assets/ChatSvgs/AssignOrder.svg";
import TimerSmall from "../../../../../public/assets/ChatSvgs/ChatTimerIconSmall.svg";

import "@/app/globals.css";
import Image, { StaticImageData } from "next/image";
import { placeholder } from "@/app/constant/placeholder";

type UserInfoProps = {
  userName?: string;
  userDp?: string | StaticImageData;
};

function SearchBar({
  width,
  className = "",
}: {
  width: string;
  className?: string;
}) {
  const [onClick, setOnClick] = useState(false);

  function OnClickHandler() {
    setOnClick((prev) => !prev);
  }

  return (
    <>
      <div className={className}>
        {!onClick && (
          <div onClick={OnClickHandler}>
            <div className={`${width} not-active-userInfo-search-parent group`}>
              <InputText
                placeholder={placeholder.search}
                className="not-active-userInfo-search-input"
                disabled={true}
                pt={{
                  root: {
                    className:
                      "!focus:ring-0 !border-none flex-1 w-20 !shadow-none !outline-none !ring-0 !h-full !bg-transparent",
                  },
                }}
              />
              <InputIcon className="pi pi-search not-active-userInfo-search-icon">
                {" "}
              </InputIcon>
            </div>
          </div>
        )}
        {onClick && (
          <div className={`${width} active-userInfo-search-parent`}>
            <InputText
              pt={{
                root: {
                  className:
                    "!focus:ring-0 !border-none flex-1 w-20 !shadow-none !outline-none !ring-0 !h-full",
                },
              }}
              unstyled={true}
              autoFocus
            />

            <i
              className="pi pi-times active-userInfo-search-icon"
              onClick={OnClickHandler}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default function UserInfo({
  userDp = "/assets/UserListSvg/User1.svg",
  userName = "user1",
}: UserInfoProps) {
  const [isSearchClicked, setisSearchClicked] = useState(false);
  const [visible, setVisible] = useState(false);
  const menu = useRef<TieredMenu>(null);

  useEffect(() => {
    const showTimeout = setInterval(() => {
      setVisible(true);
    }, 3000);

    const hideTimeout = setTimeout(() => {
      setVisible(false);
    }, 3300);

    return () => {
      clearInterval(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [visible]);

  const toast = useRef(null);
  const items = [
    {
      label: "Assign",
      icon: "pi pi-refresh",
      command: () => {
        toast.current.show({
          severity: "success",
          summary: "Updated",
          detail: "Data Updated",
        });
      },
    },
    {
      label: "Persons",
      icon: "pi pi-times",
      command: () => {
        toast.current.show({
          severity: "warn",
          summary: "Delete",
          detail: "Data Deleted",
        });
      },
    },
    {
      label: "Employees",
      icon: "pi pi-external-link",
      command: () => {
        window.location.href = "https://reactjs.org/";
      },
    },
    {
      label: "Timer",
      icon: "pi pi-upload",
      command: () => {
        //router.push('/fileupload');
      },
    },
  ];

  const save = () => {
    toast.current.show({
      severity: "success",
      summary: "Assigned",
      detail: "Person Assigned",
    });
  };

  return (
    <header className="conversation-user-info-parent">
      <div className="flex relative min-w-64">
        <div className=".conversation-user-info-image">
          <Image
            src={userDp}
            alt="user"
            width={42}
            height={42}
            style={{ width: "auto", height: "auto" }}
          />
          {visible && (
            <Image
              src="/assets/ChatSvgs/TimerBlinking.svg"
              alt="TimerBlink"
              width={42}
              height={42}
              className="top-[1px] left-[1px] absolute bg-white scale-[1.1] rounded-full transition-all"
            />
          )}
        </div>

        <div className="gap-x-2">
          <h1 className="conversation-user-info-user-name">{userName}</h1>
          <div className="flex justify-between gap-x-3">
            <a className="conversation-user-info-whatsapp" href="#">
              <Image
                src="/assets/ChatSvgs/logos_whatsapp-icon.svg"
                alt="whatsapp icon"
                width={16}
                height={16}
              />
              <span>Primary Number</span>
            </a>
            <div className="conversation-user-info-addtag">
              <Image
                src="/assets/ChatSvgs/AddTag.svg"
                alt="Add Tag"
                width={16}
                height={16}
              />
              <span>Add Tag</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-x-2">
        <div className="relative inline-block">
          <TieredMenu
            model={items}
            popup
            ref={menu}
            pt={{
              menu: { className: "bg-transparent rounded-lg p-2 mt-2" },
              menuitem: {
                className:
                  "text-white font-poppins text-sm px-3 py-2 hover:bg-black/30 rounded",
              },
              icon: { className: "mr-2" },
            }}
          />
          <Toast ref={toast}></Toast>
          <SplitButton
            label="Assign"
            icon={<Assign />}
            model={items}
            onClick={save}
            className="conversation-user-info-split-button"
            pt={{
              root: {
                className:
                  "flex items-center w-29px h-8.5 !p-0  m-0 !bg-[#6366f1] rounded-[0px] !hover:bg-[#6366f1]",
              },
              icon: { className: "!bg-transparent" },
              button: {
                root: {
                  className:
                    "!w-29 !h-8.5 !p-0 !px-1 !border-none !text-xs !bg-[#6366f1]",
                },
              },
              menu: { className: "bg-white  rounded-lg shadow-lg mt-1" },
              menuItem: {
                className:
                  "text-black font-poppins text-sm px-3 py-2 hover:bg-gray-100 rounded",
              },
            }}
          />
        </div>
        <div className="conversation-user-info-timer">
          <Image
            src="/assets/ChatSvgs/ChatTimerIconSmall.svg"
            alt="Timer"
            width={28}
            height={28}
          />
        </div>
        <div className="conversation-user-info-search">
          <Image
            src="/assets/ChatSvgs/SearchButton.svg"
            alt="Search"
            width={28}
            height={28}
            onClick={() => setisSearchClicked((prev) => !prev)}
          />
          {isSearchClicked && (
            <SearchBar
              width="w-50"
              // haveFilter={false}
              className="absolute -ml-40 mt-5 rounded-lg"
            />
          )}
        </div>

        <PopUpMenu
          MenuItems={[
            {
              label: "Information",
              icon: <TimerSmall />,
            },
          ]}
          className="w-7 h-7 p-1 py-1.5 cursor-pointer hover:bg-[#eaeafd] rounded"
          parentDivClassName="w-7 h-7 cursor-pointer hover:bg-[#eaeafd] rounded"
        />
      </div>
    </header>
  );
}
