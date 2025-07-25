"use client";
import React from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { sideNavMenu } from "../constant/sideNav";

type SideNavBarProps = {
  sideNavMenu: typeof sideNavMenu; // Ideally replace `any` with a specific type
};

export default function SideNavBar({ sideNavMenu }: SideNavBarProps) {
  const pathName = usePathname().split("/");

  return (
    <>
      <nav className="nav-container">
        {sideNavMenu.map((item, index) => {
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
    </>
  );
}
