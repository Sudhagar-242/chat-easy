"use client";
import React from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

export default function SideNavBar(): React.ReactNode {
  const pathName = usePathname().split("/");

  const SideNavMenu = [
    {
      icon: "/assets/SideNav/SideNavHome.svg",
      contentName: "HOME",
      id: "1top",
      href: "/home",
    },
    {
      icon: "/assets/SideNav/SideNavMessage.svg",
      contentName: "MESSAGE",
      Isclicked: true,
      id: "2top",
      href: "/chats",
    },
    {
      icon: "/assets/SideNav/SideNavContacts.svg",
      contentName: "CONTACTS",
      id: "3top",
      href: "/contacts",
    },
    {
      icon: "/assets/SideNav/SideNavSpeaker.svg",
      contentName: "SPEAKER",
      id: "1bot",
      href: "/speaker",
    },
    {
      icon: "/assets/SideNav/SideNavGit.svg",
      contentName: "GIT",
      id: "2bot",
      href: "/git",
    },
    {
      icon: "/assets/SideNav/SideNavWaves.svg",
      contentName: "WAVES",
      id: "3bot",
      href: "/waves",
    },
  ];

  return (
    <aside className="nav-bar">
      <nav className="nav-container">
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
                  {/* {item.icon} */}
                  <Image
                    src={item.icon}
                    alt={item.icon}
                    width={40}
                    height={36}
                  />
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </nav>
    </aside>
  );
}
