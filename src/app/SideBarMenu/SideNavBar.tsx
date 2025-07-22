"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { MenuItemProps } from "../../Components/UI/MenuIconCard";

import SideNavHome from "@/assets/SideNav/SideNavHome.svg";
import SideNavMessage from "@/assets/SideNav/SideNavMessage.svg";
import SideNavContacts from "@/assets/SideNav/SideNavContacts.svg";
import SideNavSpeaker from "@/assets/SideNav/SideNavSpeaker.svg";
import SideNavGit from "@/assets/SideNav/SideNavGit.svg";
import SideNavWaves from "@/assets/SideNav/SideNavWaves.svg";
import Link from "next/link";

export default function SideNavBar(): React.ReactNode {
  const pathName = usePathname().split("/");

  const SideNavMenu: MenuItemProps[] = [
    { icon: <SideNavHome />, contentName: "HOME", id: "1top", href: "/home" },
    {
      icon: <SideNavMessage />,
      contentName: "MESSAGE",
      Isclicked: true,
      id: "2top",
      href: "/chats",
    },
    {
      icon: <SideNavContacts />,
      contentName: "CONTACTS",
      id: "3top",
      href: "/contacts",
    },
    {
      icon: <SideNavSpeaker />,
      contentName: "SPEAKER",
      id: "1bot",
      href: "/speaker",
    },
    { icon: <SideNavGit />, contentName: "GIT", id: "2bot", href: "/git" },
    {
      icon: <SideNavWaves />,
      contentName: "WAVES",
      id: "3bot",
      href: "/waves",
    },
  ];

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        {SideNavMenu.map((item, index) => {
          const isActive = pathName.includes(item.href!.slice(1));
          return (
            <React.Fragment key={item.id}>
              {index === 3 && (
                <div key={"seperator"} className="seperator"></div>
              )}
              <Link href={item.href!}>
                <div
                  className={`nav-item ${isActive ? "active" : "not-active"}`}
                >
                  {item.icon}
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
