"use client";
import React, { useState } from "react";
import { UserData } from "./chatData";
import {
  ConversationDataType,
  UserDataType,
  UserListType,
  userMessageType,
  OrderCardType,
} from "./types";

type ContextValueProps = {
  Data: ConversationDataType;
  getUserList(): (UserListType | { seperator: string })[];
  getChats(ID: number): userMessageType[];
  getOrders(ID: number): OrderCardType[];
  setStar(ID: number, state: boolean): void;
};

const ChatDataContext = React.createContext<ContextValueProps>(
  {} as ContextValueProps
);
export default ChatDataContext;

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [Data, setData] = useState(UserData);

  function getUserList() {
    const UserList: (UserListType | { seperator: string })[] = Data.map(
      (item: UserDataType | { seperator: string }) => {
        if ("seperator" in item) {
          return item;
        }
        return {
          UserLogo: item.UserLogo,
          UserName: item.UserName,
          CID: item.CID,
          lastMessage: item.lastMessage,
          isForwardedMessage: item.isForwardedMessage,
          time: item.time,
          value: item.value,
          starred: item.starred,
          isActive: item.isActive,
          isTyping: item.isTyping,
        };
      }
    );
    return UserList;
  }

  function getChats(ID: number): userMessageType[] {
    const chat = Data.find((item: UserDataType | { seperator: string }) => {
      return "CID" in item && item.CID === ID;
    });
    if (chat && "coversation" in chat) {
      return chat.coversation;
    }

    return [];
  }

  // function getUserInfo(ID: number): {
  //   userDP: React.ReactNode;
  //   userName: string;
  // } {
  //   const user = Data.find((item) => {
  //     if ("seperator" in item) {
  //       return null;
  //     }
  //     return item.CID === ID;
  //   });
  //   if ("seperator" in user!) {
  //     return {} as { userDP: React.ReactNode; userName: string };
  //   }
  //   return { userDP: user!.UserLogo, userName: user!.UserName };
  // }

  function getOrders(ID: number): OrderCardType[] {
    const order = Data.find((item: UserDataType | { seperator: string }) => {
      return "CID" in item && item.CID === ID;
    });
    if (order && "orders" in order) {
      return order.orders;
    }

    return [];
  }

  function setStar(ID: number, state: boolean) {
    setData((prev) => {
      const updated = prev.map((item) => {
        if ("CID" in item && item.CID === ID) {
          console.log("Updating star for:", item.UserName);
          return {
            ...item,
            starred: !state,
          };
        }
        return item;
      });

      return updated;
    });
  }

  return (
    <ChatDataContext.Provider
      value={{ Data, getUserList, getChats, getOrders, setStar }}
    >
      {children}
    </ChatDataContext.Provider>
  );
}
