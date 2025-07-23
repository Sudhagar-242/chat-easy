"use client";
import React, { ReactElement, useRef } from "react";
import { Button } from "primereact/button";
import { TieredMenu } from "primereact/tieredmenu";

import ThreeDots from "../../../../../public/assets/ChatSvgs/ThreeDots.svg";

type LabelAndIconType = {
  label: string;
  icon?: ReactElement | string;
  items?: LabelAndIconType[];
};

export type PopUpMenuType = LabelAndIconType | { separator?: boolean };

const Items: PopUpMenuType[] = [
  {
    label: "File",
    icon: <ThreeDots />,
    items: [
      {
        label: "New",
        icon: "pi pi-plus",
        items: [
          {
            label: "Document",
            icon: "pi pi-file",
          },
          {
            label: "Image",
            icon: "pi pi-image",
          },
          {
            label: "Video",
            icon: "pi pi-video",
          },
        ],
      },
      {
        label: "Open",
        icon: "pi pi-folder-open",
      },
      {
        label: "Print",
        icon: "pi pi-print",
      },
    ],
  },
  {
    label: "Edit",
    icon: "pi pi-file-edit",
    items: [
      {
        label: "Copy",
        icon: "pi pi-copy",
      },
      {
        label: "Delete",
        icon: "pi pi-times",
      },
    ],
  },
  {
    label: "Search",
    icon: "pi pi-search",
  },
  {
    separator: true,
  },
  {
    label: "Share",
    icon: "pi pi-share-alt",
    items: [
      {
        label: "Slack",
        icon: "pi pi-slack",
      },
      {
        label: "Whatsapp",
        icon: "pi pi-whatsapp",
      },
    ],
  },
];

export default function PopUpMenu({
  MenuItems = Items,
  className = "w-6 h-6 rounded-full bg-[#f0f0fd] text-[#48535B] py-0.5 px-0.5 cursor-pointer",
  parentDivClassName = "card flex justify-center absolute -mt-2 -mr-2 right-0 cursor-pointer",
}: {
  MenuItems: PopUpMenuType[];
  className?: string;
  parentDivClassName?: string;
}) {
  const menu = useRef<TieredMenu>(null!);

  return (
    <div className={parentDivClassName}>
      <TieredMenu model={MenuItems} popup ref={menu} breakpoint="767px" />
      <Button
        icon={<ThreeDots />}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          menu.current.toggle(e)
        }
        pt={{
          root: {
            className: className,
          },
        }}
        unstyled={true}
      />
    </div>
  );
}
