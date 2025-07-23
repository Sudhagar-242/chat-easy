"use client";

import React, { useState, useEffect, useContext } from "react";
import ChatDataContext from "@/app/Context/Context";
import { UserListType } from "@/app/Context/types";
import UserListContainer from "./UserListContainer";
import UserListsTopSection from "./UserListTopSection";

export default function UserListsBox() {
  const Chat = useContext(ChatDataContext);

  const [UserListData, setUserListData] = useState(Chat.getUserList());

  useEffect(() => {
    console.log(UserListData);
  }, [UserListData]);

  function StarredFilter(item: UserListType | { seperator: string }) {
    if ("seperator" in item) {
      return true;
    }
    if (item.starred) {
      return true;
    }
    return false;
  }

  function OnUserList(name: string) {
    console.log("onUserWorks");
    switch (name) {
      case "Starred Message":
        setUserListData((prev) => prev.filter(StarredFilter));
        break;

      default:
        setUserListData(Chat.getUserList());
        break;
    }
  }

  return (
    <section className="chat-user-list-container overflow-hidden">
      <UserListsTopSection chatUpdater={OnUserList} />
      <UserListContainer UserList={UserListData} />
    </section>
  );
}
