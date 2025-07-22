import React from "react";
import { StaticImageData } from "next/image";

export type UserListType = {
  UserLogo: React.ReactNode;
  UserName: string;
  CID: number;
  lastMessage: string;
  isForwardedMessage?: boolean;
  time: string;
  value?: number;
  starred?: boolean;
  isActive?: boolean;
  isTyping?: boolean;
};

export type OrderCardType = {
  Items: number;
  ProductNames: string[];
  OID: string;
  ViewLink: string;
  OrderPlacedDate: string;
  OrderTime: string;
  OrderStatus: "Delivered" | "Pending";
  Amount: number;
  isHasIssue: boolean;
  ImageArray: (string | StaticImageData)[];
};

export type userMessageType = {
  date: string;
  id: string;
  messages: (RecievedMessageType | SendingMessageType)[];
};

export type RecievedMessageType = {
  message: string;
  time: string;
  status?: "recieved";
  imageArray?: string[];
};

export type SendingMessageType = {
  sender: string;
  profile: React.ReactNode;
  position: string;
  message?: string;
  status?: "sent";
  time: string;
  FileSent?: "Image" | "Video" | "Audio" | "Files";
  seconds?: number;
  isOnline?: boolean;
};

export type UserDataType = {
  UserLogo: React.ReactNode;
  UserName: string;
  CID: number;
  lastMessage: string;
  isForwardedMessage?: boolean;
  time: string;
  value?: number;
  starred?: boolean;
  isActive?: boolean;
  isTyping?: boolean;
  coversation: userMessageType[];
  orders: OrderCardType[];
};

export type ConversationDataType = (UserDataType | { seperator: string })[];
