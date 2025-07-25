import { StaticImageData } from "next/image";

export interface RecievedMessageType {
  message: string;
  time: string;
  imageArray?: string[];
}
export interface MenuItemProps {
  icon: string | StaticImageData;
  contentName: string;
  id: string;
}
