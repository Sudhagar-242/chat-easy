"use client";

import React, { useState, useRef } from "react";

import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

import Logo from "@/assets/logo.svg";
import ExpandFrame from "@/assets/ExpandFrame.svg";
import UpgradeCrown from "@/assets/upgradeCrown.svg";
import Notification from "@/assets/notification.svg";
import MenuLogoSmall from "@/assets/menuLogoSmall.svg";
import UserAngleDown from "@/assets/UserLogoDownArrow.svg";

import "../globals.css";

function SearchBar({
  width,
  className = "",
}: {
  width: string;
  haveFilter?: boolean;
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
            className={`${width} m-auto px-3 py-1 border-2 border-gray-400 rounded-full box-border flex items-center gap-2`}
          >
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

export default function TopHeader() {
  const toast = useRef(null);

  const show = () => {
    toast.current.show({
      severity: "info",
      summary: "Info",
      detail: "Message Content",
    });
  };

  return (
    <PrimeReactProvider>
      <header className="header">
        <div className="flex gap-x-10">
          <Logo className="cursor-pointer" />
          <ExpandFrame className="cursor-pointer" />
        </div>
        <div className="search-bar">
          <SearchBar width="w-94 h-7" haveFilter={false} />
        </div>
        <div className="flex gap-x-1.5 h-7">
          <div className="upgrade-button">
            <UpgradeCrown />
            <p className="upgrade-text">Upgrade to Pro</p>
          </div>
          {/* <Notification className="cursor-pointer" /> */}
          <div className="w-8 h-8 cursor-pointer">
            <Toast ref={toast} />
            <Button onClick={show} icon={<Notification />} unstyled={true} />
          </div>
          <div className="user-dropdown">
            <MenuLogoSmall />
            <UserAngleDown />
          </div>
        </div>
      </header>
    </PrimeReactProvider>
  );
}
