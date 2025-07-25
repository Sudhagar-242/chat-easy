"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

import SideNavBar from "../SideBarMenu/SideNavBar";

import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

import Notification from "../../../public/assets/notification.svg";
import { placeholder } from "../constant/placeholder";
import { sideNavMenu } from "../constant/sideNav";
import Link from "next/link";

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
                placeholder={placeholder.search}
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
  const [isExpanded, setIsExpanded] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const sideNav = document.getElementById("side-nav");
    if (sideNav) {
      if (isExpanded) {
        sideNav.classList.add("nav-bar");
      } else {
        sideNav.classList.remove("nav-bar");
      }
    }
  }, [isExpanded, mounted]);

  const toast = useRef<Toast>(null);

  const show = () => {
    if (toast.current) {
      toast?.current.show({
        severity: "info",
        summary: "Alerts",
        detail: "No Messages",
      });
    }
  };

  function onExpandHandler() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <PrimeReactProvider>
      <header className="header">
        <div className="flex gap-x-10">
          {/* <Logo className="cursor-pointer" /> */}
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </Link>
          <Image
            src={
              isExpanded
                ? "/assets/ExpandedFrame.svg"
                : "/assets/ExpandFrame.svg"
            }
            alt="ExpandFrame"
            width={20}
            height={20}
            style={{ width: "auto", height: "auto" }}
            className="cursor-pointer"
            onClick={() => onExpandHandler()}
          />

          {mounted &&
            isExpanded &&
            document.getElementById("side-nav") &&
            createPortal(
              <SideNavBar sideNavMenu={sideNavMenu} />,
              document.getElementById("side-nav") as HTMLDivElement
            )}
        </div>
        <div className="search-bar">
          <SearchBar width="w-94 h-7" haveFilter={false} />
        </div>
        <div className="flex gap-x-1.5 h-7">
          <div className="upgrade-button">
            {/* <UpgradeCrown /> */}
            <Image
              src="/assets/UpgradeCrown.svg"
              alt="UpgradeCrown"
              width={18}
              height={18}
            />
            <p className="upgrade-text">Upgrade to Pro</p>
          </div>
          {/* <Notification className="cursor-pointer" /> */}
          <div className="navigation-button">
            <Toast ref={toast} />
            <Button
              onClick={show}
              icon={<Notification />}
              unstyled={true}
              className="cursor-pointer "
            />
          </div>
          <div className="user-dropdown">
            <Image
              src="/assets/MenuLogoSmall.svg"
              alt="MenuLogoSmall"
              width={24}
              height={24}
            />
            {/* <MenuLogoSmall /> */}
            <Image
              src="/assets/UserLogoDownArrow.svg"
              alt="UserAngleDown"
              width={14}
              height={14}
            />
            {/* <UserAngleDown /> */}
          </div>
        </div>
      </header>
    </PrimeReactProvider>
  );
}
