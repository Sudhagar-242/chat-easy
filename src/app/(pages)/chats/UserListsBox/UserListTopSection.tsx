"use client";
import React, { useState } from "react";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import Image from "next/image";
import { MenuItemProps } from "@/app/types/RecievedMessageType";
import { placeholder } from "@/app/constant/placeholder";
import { MenuItems } from "@/app/constant/menu";

// function SearchBar() {
//   const [onClick, setOnClick] = useState(false);

//   const OnClickHandler = () => setOnClick((prev) => !prev);

//   return (
//     <div className="w-4/5 box-border">
//       {!onClick ? (
//         <div
//           onClick={OnClickHandler}
//           className="w-full border-2 border-gray-400 rounded-3xl box-border hover:bg-[#F0F0FE] overflow-hidden cursor-pointer px-3 py-1 flex items-center justify-between"
//         >
//           <InputText
//             placeholder={placeholder.search}
//             disabled
//             pt={{
//               root: {
//                 className:
//                   "!focus:ring-0 !border-none w-full flex-1 !shadow-none !outline-none !ring-0 !h-full !bg-transparent",
//               },
//             }}
//           />
//           <InputIcon className="pi pi-search text-gray-500" />
//         </div>
//       ) : (
//         <div className="w-full h-8.5 px-3 py-1 border-2 border-gray-400 box-border flex items-center gap-2">
//           <select
//             name="Filter"
//             id="Filter"
//             className="text-xs border-none outline-none focus:ring-0 w-[90px] shrink-0"
//           >
//             <option value="Contacts">Contacts</option>
//             <option value="Starred">Starred</option>
//             <option value="Opened">Opened</option>
//             <option value="Unread">Unread</option>
//           </select>

//           <InputText
//             autoFocus
//             placeholder={placeholder.search}
//             pt={{
//               root: {
//                 className:
//                   "!focus:ring-0 !border-none text-xs flex-1 !shadow-none !outline-none !ring-0 !h-full",
//               },
//             }}
//           />

//           <i
//             className="pi pi-times text-gray-500 cursor-pointer hover:text-black"
//             onClick={OnClickHandler}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// (
//           <>
//             <select
//               name="Filter"
//               id="Filter"
//               className="text-xs border-none outline-none focus:ring-0 w-[90px] shrink-0 bg-transparent"
//             >
//               <option value="Contacts">Contacts</option>
//               <option value="Starred">Starred</option>
//               <option value="Opened">Opened</option>
//               <option value="Unread">Unread</option>
//             </select>
//             <InputText
//               autoFocus
//               placeholder={placeholder.search}
//               pt={{
//                 root: {
//                   className:
//                     "!focus:ring-0 !border-none text-xs flex-1 !shadow-none !outline-none !ring-0 !h-full max-w-1/5 !bg-transparent",
//                 },
//               }}
//             />
//             <i
//               className="pi pi-times text-gray-500 cursor-pointer hover:text-black ml-2"
//               onClick={OnClickHandler}
//             />
//           </>
//         )

function SearchBar() {
  const [onClick, setOnClick] = useState(false);
  const OnClickHandler = () => setOnClick((prev) => !prev);

  return (
    <div className="w-4/5 h-10 px-3 py-1 border-2 border-gray-400 box-border flex items-center justify-between rounded-3xl">
      {onClick ? (
        <div className="flex w-[-webkit-fill-available] items-center justify-between cursor-pointer">
          <select
            name="Filter"
            id="Filter"
            className="text-xs border-none outline-none focus:ring-0 w-[90px] shrink-0 bg-transparent cursor-pointer"
          >
            <option value="Contacts">Contacts</option>
            <option value="Starred">Starred</option>
            <option value="Opened">Opened</option>
            <option value="Unread">Unread</option>
          </select>
          <InputText
            placeholder={placeholder.search}
            autoFocus
            pt={{
              root: {
                className:
                  "!focus:ring-0 !border-none !shadow-none !outline-none !ring-0 !w-[calc(100%-90px-30%)] !h-full !bg-transparent cursor-auto",
              },
            }}
          />
          <InputIcon
            className="pi pi-times text-gray-500 hover:text-black cursor-pointer"
            onClick={OnClickHandler}
          />
        </div>
      ) : (
        <div
          onClick={OnClickHandler}
          className="flex w-full items-center justify-between cursor-pointer"
        >
          <InputText
            placeholder={placeholder.search}
            disabled
            pt={{
              root: {
                className:
                  "!focus:ring-0 !border-none w-[inherit] !shadow-none !outline-none !ring-0 !h-full !bg-transparent",
              },
            }}
          />
          <InputIcon className="pi pi-search text-gray-500" />
        </div>
      )}
    </div>
  );
}

export default function UserListsTopSection({
  chatUpdater,
}: {
  chatUpdater: (a: string) => void;
}) {
  const [selectedItem, setSelectedItem] = useState<string>("01_MenuItem");
  const [menuItems, setMenuItems] = useState<string>("");

  const handleClick = (content: string) => {
    setMenuItems((prev) => (prev === content ? "" : content));
  };

  function onClickHandler(item: MenuItemProps) {
    console.log("Clicked:", item.contentName);
    chatUpdater(item.contentName);
    setSelectedItem(item.id);
  }

  return (
    <>
      <div className="user-list-top-parent">
        <SearchBar />
        <Image
          src="/assets/ChatSvgs/FilterIcon.svg"
          alt="FilterIcon"
          width={30}
          height={30}
          onClick={(ev) => {
            ev.preventDefault();
            handleClick("filter");
          }}
          className={`filter-icon ${
            menuItems === "filter"
              ? "bg-[#6366F1] text-white"
              : "hover:bg-[#eaeafd] text-[#48535B]"
          }`}
        />
        <Image
          src="/assets/ChatSvgs/AddBox.svg"
          alt="AddBox"
          width={30}
          height={30}
          onClick={(ev) => {
            ev.preventDefault();
            handleClick("Add");
          }}
          className={`add-icon ${
            menuItems === "Add"
              ? "bg-[#6366F1] text-white"
              : "hover:bg-[#eaeafd] text-[#48535B]"
          }`}
        />
      </div>
      <div className="user-list-menu-parent">
        {MenuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onClickHandler(item)}
            className={`user-list-menu-item ${
              selectedItem === item.id
                ? "user-list-menu-selected"
                : "hover:bg-[#eaeafd] rounded-lg"
            }`}
          >
            <Image src={item.icon} alt={item.icon} width={55} height={45} />
          </div>
        ))}
      </div>
    </>
  );
}
