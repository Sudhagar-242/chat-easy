"use client";
import React, { useState, useEffect, useContext } from "react";
import { usePathname } from "next/navigation";

import ChatDataContext from "@/app/Context/Context";
import { UserListType } from "@/app/Context/types";

import Link from "next/link";
import Image from "next/image";

export type ForUserListPropsType = {
  UserList: (UserListType | { seperator: string })[];
};

export default function UserListContainer({
  UserList,
}: ForUserListPropsType): React.ReactNode {
  const path = usePathname().split("/");
  const currentPathCID = path[path.length - 1];

  const [activeCID, setActiveCID] = useState<string>(currentPathCID);
  const [hoveredUser, setHoveredUser] = useState("");
  const [_, setupdateState] = useState(false);
  const setStar = useContext(ChatDataContext).setStar;

  useEffect(() => {
    setActiveCID(currentPathCID);
  }, [currentPathCID]);

  function OnStarred(event: React.MouseEvent, item: UserListType) {
    event.preventDefault();
    event.stopPropagation();
    setStar(item.CID, item.starred!);
    item.starred = !item.starred;
    setupdateState((prev) => !prev);
  }

  return (
    <>
      {UserList ? (
        <main className="user-list-container no-scrollbar">
          {UserList.map((item, index) => {
            if ("seperator" in item) {
              return (
                <h1 key={`sep-${index}`} className="user-list-seperator">
                  {item.seperator}
                </h1>
              );
            }

            const isActive = item.CID.toString() === activeCID;

            return (
              <Link href={`/chats/${item.CID}`} key={item.UserName}>
                <div
                  className={`user-list ${isActive ? "user-list-active" : ""} `}
                  onClick={() => setActiveCID(item.CID.toString())}
                  onMouseOver={() => setHoveredUser(item.UserName)}
                  onMouseOut={() => setHoveredUser("")}
                >
                  <div className="flex h-full items-center-safe">
                    <Image
                      src={item.UserLogo}
                      alt="userLogo"
                      width={44}
                      height={44}
                    />
                    <div className="user-list-details-div">
                      <h1 className="user-list-name">{item.UserName}</h1>
                      <div className="user-list-last-message">
                        {item.isForwardedMessage &&
                          hoveredUser !== item.UserName && (
                            <Image
                              src="/assets/ChatSvgs/Forwarded.svg"
                              alt="ForwardIcon"
                              width={14}
                              height={14}
                              className="mr-1"
                              style={{ width: "auto", height: "auto" }}
                            />
                          )}
                        <p>{item.lastMessage}</p>
                      </div>
                    </div>
                  </div>

                  <div className="user-list-info-container">
                    <p className="user-list-info-time">{item.time}</p>
                    <div className="user-list-info-stars-div">
                      {item.starred && (
                        <Image
                          src="/assets/ChatSvgs/StarredMessage.svg"
                          alt="Starred Image"
                          width={16}
                          height={16}
                          style={{ width: "auto", height: "auto" }}
                          onClick={(event: React.MouseEvent) => {
                            OnStarred(event, item);
                          }}
                          className="cursor-pointer"
                        />
                      )}
                      {!item.starred && hoveredUser === item.UserName && (
                        <Image
                          src="/assets/ChatSvgs/NotStarred.svg"
                          alt="Starred Image"
                          width={16}
                          height={16}
                          onClick={(event: React.MouseEvent) => {
                            OnStarred(event, item);
                          }}
                          className="cursor-pointer"
                        />
                      )}
                      {item.value && (
                        <div className="user-list-info-unread">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </main>
      ) : (
        <h1>Failed to Fetch</h1>
      )}
    </>
  );
}
