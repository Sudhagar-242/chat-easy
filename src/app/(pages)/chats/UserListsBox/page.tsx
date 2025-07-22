"use client";

import React, { useState, useEffect, useContext } from "react";
import ChatDataContext from "@/app/Context/Context";
import { UserListType } from "@/app/Context/types";
import UserListContainer from "./UserListContainer";
import UserListsTopSection from "./UserListTopSection";
// import { UserType, propstype } from "./UserListsContainer/UserListContainer";

// import UserListContainer from "./UserListsContainer/UserListContainer";
// import UserListSearchBar from "./UserListsMenu/UserLIstsSearchBar";
// import UserListsMenuItem from "./UserListsMenu/UserListsMenuItems";

// import User1 from "@/assets//UserListSvg/User1.svg";
// import User2 from "@/assets//UserListSvg/User2.svg";
// import User3 from "@/assets//UserListSvg/User3.svg";
// import User4 from "@/assets//UserListSvg/User4.svg";
// import User5 from "@/assets//UserListSvg/User5.svg";

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
