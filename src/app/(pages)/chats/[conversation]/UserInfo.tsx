// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { TieredMenu } from "primereact/tieredmenu";
// import PopUpMenu from "../ChatMenu/PopUpMenu";
// import { InputIcon } from "primereact/inputicon";
// import { InputText } from "primereact/inputtext";
// import { SplitButton } from "primereact/splitbutton";
// import { Toast } from "primereact/toast";

// import Assign from "@/assets/ChatSvgs/AssignOrder.svg";
// import DownArrow from "@/assets/angleDown.svg";
// import TimerSmall from "@/assets/ChatSvgs/ChatTimerIconSmall.svg";
// import Search from "@/assets/ChatSvgs/SearchButton.svg";
// import ThreeDots from "@/assets/ChatSvgs/ThreeDots.svg";
// import WhatsappLogo from "@/assets/ChatSvgs/logos_whatsapp-icon.svg";
// import AddTag from "@/assets/ChatSvgs/AddTag.svg";
// import TimerBlinking from "@/assets/ChatSvgs/TimerBlinking.svg";

// import "@/app/globals.css";

// type UserInfoProps = {
//   userName: string;
//   userDp: any;
// };

// function SearchBar({
//   width,
//   className = "",
// }: {
//   width: string;
//   haveFilter?: boolean;
//   className?: string;
// }) {
//   const [onClick, setOnClick] = useState(false);

//   function OnClickHandler() {
//     setOnClick((prev) => !prev);
//   }

//   return (
//     <>
//       <div className={className}>
//         {!onClick && (
//           <div onClick={OnClickHandler}>
//             <div
//               className={`${width} m-auto border-2 border-gray-400 bg-[#eaeafd] rounded-4xl box-border hover:bg-[#F0F0FE] overflow-hidden cursor-pointer
//                  px-3 py-1 flex items-center justify-between group`}
//             >
//               <InputText
//                 placeholder="Search"
//                 className="w-full h-full border-0 m-auto border-none rounded-4xl px-[12px] py-[2px] "
//                 disabled={true}
//                 pt={{
//                   root: {
//                     className:
//                       "!focus:ring-0 !border-none flex-1 w-20 !shadow-none !outline-none !ring-0 !h-full !bg-transparent",
//                   },
//                 }}
//               />
//               <InputIcon className="pi pi-search top-1.5 text-gray-500 group-hover:text-black  cursor-pointer">
//                 {" "}
//               </InputIcon>
//             </div>
//           </div>
//         )}
//         {onClick && (
//           <div
//             className={`${width} m-auto px-3 h-full py-1 border-2 bg-[#eaeafd] border-gray-400 rounded-full box-border flex items-center gap-2`}
//           >
//             <InputText
//               pt={{
//                 root: {
//                   className:
//                     "!focus:ring-0 !border-none flex-1 w-20 !shadow-none !outline-none !ring-0 !h-full",
//                 },
//               }}
//               unstyled={true}
//               autoFocus
//             />

//             <i
//               className="pi pi-times cursor-pointer text-gray-500 hover:text-black"
//               onClick={OnClickHandler}
//             />
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default function UserInfo({ userDp, userName }: UserInfoProps) {
//   const [isSearchClicked, setisSearchClicked] = useState(false);
//   const [visible, setVisible] = useState(false);
//   const menu = useRef<TieredMenu>(null);

//   useEffect(() => {
//     const showTimeout = setInterval(() => {
//       setVisible(true);
//     }, 3000);

//     const hideTimeout = setTimeout(() => {
//       setVisible(false);
//     }, 3300);

//     return () => {
//       clearInterval(showTimeout);
//       clearTimeout(hideTimeout);
//     };
//   }, [visible]);

//   // const items = [
//   //   { label: "Component", icon: "pi pi-bolt" },
//   //   { label: "Blocks", icon: "pi pi-server" },
//   //   { label: "UI Kit", icon: "pi pi-pencil" },
//   // ];

//   const toast = useRef(null);
//   const items = [
//     {
//       label: "Update",
//       icon: "pi pi-refresh",
//       command: () => {
//         toast.current.show({
//           severity: "success",
//           summary: "Updated",
//           detail: "Data Updated",
//         });
//       },
//     },
//     {
//       label: "Delete",
//       icon: "pi pi-times",
//       command: () => {
//         toast.current.show({
//           severity: "warn",
//           summary: "Delete",
//           detail: "Data Deleted",
//         });
//       },
//     },
//     {
//       label: "React Website",
//       icon: "pi pi-external-link",
//       command: () => {
//         window.location.href = "https://reactjs.org/";
//       },
//     },
//     {
//       label: "Upload",
//       icon: "pi pi-upload",
//       command: () => {
//         //router.push('/fileupload');
//       },
//     },
//   ];

//   const save = () => {
//     toast.current.show({
//       severity: "success",
//       summary: "Success",
//       detail: "Data Saved",
//     });
//   };

//   return (
//     <div className="w-full h-18.5 flex justify-between items-center p-4 border-b border-[#EAEAEB]">
//       <div className="flex relative min-w-64">
//         <div className="w-10.5 h-10.5 relative mr-2">
//           {userDp}
//           {visible && (
//             <TimerBlinking className="w-10.5 h-10.5 top-[1px] left-[1px] absolute bg-white scale-[1.1] rounded-full transition-all" />
//           )}
//         </div>

//         <div className="gap-x-2">
//           <h1 className="font-poppins font-medium text-[15px] text-black">
//             {userName}
//           </h1>
//           <div className="flex justify-between gap-x-3">
//             <a
//               className="p-0.5 font-poppins font-medium text-[12px] text-[#48535B] flex items-center gap-x-1.5 cursor-pointer"
//               href="#"
//             >
//               <WhatsappLogo />
//               <span>Primary Number</span>
//             </a>
//             <div className="px-0.5 font-poppins font-medium text-[12px] text-[#48535B] flex hover:border hover:border-[#6366f1] items-center hover:text-[#6366f1] gap-x-1.5 cursor-pointer">
//               <AddTag />
//               <span>Add Tag</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-between gap-x-2">
//         <div className="relative inline-block">
//           <TieredMenu
//             model={items}
//             popup
//             ref={menu}
//             pt={{
//               menu: { className: "bg-transparent rounded-lg p-2 mt-2" },
//               menuitem: {
//                 className:
//                   "text-white font-poppins text-sm px-3 py-2 hover:bg-black/30 rounded",
//               },
//               icon: { className: "mr-2" },
//             }}
//           />
//           {/* <button
//             onClick={(e) => menu.current!.toggle(e)}
//             className="w-29 h-8.5 flex items-center px-2 bg-[#6366f1] text-white rounded-lg"
//           >
//             <Assign className="w-5 mr-0.5" />
//             <span className="w-11.5 text-sm font-medium font-poppins">
//               Assign
//             </span>
//             <DownArrow className="ml-2.5" />
//           </button> */}
//           <Toast ref={toast}></Toast>
//           <SplitButton
//             label="Assign"
//             icon={<Assign />}
//             model={items}
//             onClick={save}
//             className="!bg-[#6366f1] w-29 !border-[#6366f1] hover:!bg-[#4f46e5] text-white font-poppins text-sm rounded-lg px-3 h-8.5 flex items-center overflow-hidden"
//             pt={{
//               root: {
//                 className:
//                   "flex items-center w-29px h-8.5 !p-0 m-0 !bg-[#6366f1] rounded-[0px]",
//               },
//               icon: { className: "mr-1 !text-xs !bg-[#6366f1]" },
//               button: {
//                 root: {
//                   className: "w-29 h-8.5 !p-0 !border-none !bg-[#6366f1]",
//                 },
//               },
//               menu: { className: "bg-white  rounded-lg shadow-lg mt-1" },
//               menuItem: {
//                 className:
//                   "text-black font-poppins text-sm px-3 py-2 hover:bg-gray-100 rounded",
//               },
//             }}
//           />
//         </div>
//         <div className="w-7 h-7 p-1 py-1.5 cursor-pointer hover:bg-[#eaeafd] rounded">
//           <TimerSmall />
//         </div>
//         <div className="relative w-7 h-7 p-1 py-1.5 cursor-pointer hover:bg-[#eaeafd] rounded">
//           <Search onClick={() => setisSearchClicked((prev) => !prev)} />
//           {isSearchClicked && (
//             <SearchBar
//               width="w-50"
//               haveFilter={false}
//               className="absolute -ml-40 mt-5 rounded-lg"
//             />
//           )}
//         </div>

//         <PopUpMenu
//           MenuItems={[
//             {
//               label: "Timer",
//               icon: <TimerSmall />,
//             },
//           ]}
//           className="w-7 h-7 p-1 py-1.5 cursor-pointer hover:bg-[#eaeafd] rounded"
//           parentDivClassName="w-7 h-7 cursor-pointer hover:bg-[#eaeafd] rounded"
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect, useRef } from "react";
import { TieredMenu } from "primereact/tieredmenu";
import PopUpMenu from "../ChatMenu/PopUpMenu";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { SplitButton } from "primereact/splitbutton";
import { Toast } from "primereact/toast";

import User1 from "@/assets/UserListSvg/User1.svg";
import Assign from "@/assets/ChatSvgs/AssignOrder.svg";
import DownArrow from "@/assets/angleDown.svg";
import TimerSmall from "@/assets/ChatSvgs/ChatTimerIconSmall.svg";
import Search from "@/assets/ChatSvgs/SearchButton.svg";
import ThreeDots from "@/assets/ChatSvgs/ThreeDots.svg";
import WhatsappLogo from "@/assets/ChatSvgs/logos_whatsapp-icon.svg";
import AddTag from "@/assets/ChatSvgs/AddTag.svg";
import TimerBlinking from "@/assets/ChatSvgs/TimerBlinking.svg";

import "@/app/globals.css";

type UserInfoProps = {
  userName?: string;
  userDp?: any;
};

function SearchBar({
  width,
  className = "",
}: {
  width: string;
  haveFilter?: boolean;
  className?: string;
}) {
  const [onClick, setOnClick] = useState(false);

  function OnClickHandler() {
    setOnClick((prev) => !prev);
  }

  return (
    <>
      <div className={className}>
        {!onClick && (
          <div onClick={OnClickHandler}>
            <div
              className={`${width} h-8.5 m-auto border-2 border-gray-400 bg-[#eaeafd] rounded-4xl box-border hover:bg-[#F0F0FE] overflow-hidden cursor-pointer 
                 px-3 py-1 flex items-center justify-between group`}
            >
              <InputText
                placeholder="Search"
                className="w-full h-full border-0 m-auto border-none rounded-4xl px-[12px] py-[2px] "
                disabled={true}
                pt={{
                  root: {
                    className:
                      "!focus:ring-0 !border-none flex-1 w-20 !shadow-none !outline-none !ring-0 !h-full !bg-transparent",
                  },
                }}
              />
              <InputIcon className="pi pi-search top-1.5 text-gray-500 group-hover:text-black  cursor-pointer">
                {" "}
              </InputIcon>
            </div>
          </div>
        )}
        {onClick && (
          <div
            className={`${width} m-auto px-3 h-8.5 py-1 border-2 bg-[#eaeafd] border-gray-400 rounded-full box-border flex items-center gap-2`}
          >
            <InputText
              pt={{
                root: {
                  className:
                    "!focus:ring-0 !border-none flex-1 w-20 !shadow-none !outline-none !ring-0 !h-full",
                },
              }}
              unstyled={true}
              autoFocus
            />

            <i
              className="pi pi-times cursor-pointer text-gray-500 hover:text-black"
              onClick={OnClickHandler}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default function UserInfo({
  userDp = <User1 />,
  userName = "user1",
}: UserInfoProps) {
  const [isSearchClicked, setisSearchClicked] = useState(false);
  const [visible, setVisible] = useState(false);
  const menu = useRef<TieredMenu>(null);

  useEffect(() => {
    const showTimeout = setInterval(() => {
      setVisible(true);
    }, 3000);

    const hideTimeout = setTimeout(() => {
      setVisible(false);
    }, 3300);

    return () => {
      clearInterval(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [visible]);

  // const items = [
  //   { label: "Component", icon: "pi pi-bolt" },
  //   { label: "Blocks", icon: "pi pi-server" },
  //   { label: "UI Kit", icon: "pi pi-pencil" },
  // ];

  const toast = useRef(null);
  const items = [
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => {
        toast.current.show({
          severity: "success",
          summary: "Updated",
          detail: "Data Updated",
        });
      },
    },
    {
      label: "Delete",
      icon: "pi pi-times",
      command: () => {
        toast.current.show({
          severity: "warn",
          summary: "Delete",
          detail: "Data Deleted",
        });
      },
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
      command: () => {
        window.location.href = "https://reactjs.org/";
      },
    },
    {
      label: "Upload",
      icon: "pi pi-upload",
      command: () => {
        //router.push('/fileupload');
      },
    },
  ];

  const save = () => {
    toast.current.show({
      severity: "success",
      summary: "Assigned",
      detail: "Person Assigned",
    });
  };

  return (
    <div className="w-full h-18.5 flex justify-between items-center p-4 border-b border-[#EAEAEB]">
      <div className="flex relative min-w-64">
        <div className="w-10.5 h-10.5 relative mr-2">
          {userDp}
          {visible && (
            <TimerBlinking className="w-10.5 h-10.5 top-[1px] left-[1px] absolute bg-white scale-[1.1] rounded-full transition-all" />
          )}
        </div>

        <div className="gap-x-2">
          <h1 className="font-poppins font-medium text-[15px] text-black">
            {userName}
          </h1>
          <div className="flex justify-between gap-x-3">
            <a
              className="p-0.5 font-poppins font-medium text-[12px] text-[#48535B] flex items-center gap-x-1.5 cursor-pointer"
              href="#"
            >
              <WhatsappLogo />
              <span>Primary Number</span>
            </a>
            <div className="px-0.5 font-poppins font-medium text-[12px] text-[#48535B] flex hover:border hover:border-[#6366f1] items-center hover:text-[#6366f1] gap-x-1.5 cursor-pointer">
              <AddTag />
              <span>Add Tag</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-x-2">
        <div className="relative inline-block">
          <TieredMenu
            model={items}
            popup
            ref={menu}
            pt={{
              menu: { className: "bg-transparent rounded-lg p-2 mt-2" },
              menuitem: {
                className:
                  "text-white font-poppins text-sm px-3 py-2 hover:bg-black/30 rounded",
              },
              icon: { className: "mr-2" },
            }}
          />
          {/* <button
            onClick={(e) => menu.current!.toggle(e)}
            className="w-29 h-8.5 flex items-center px-2 bg-[#6366f1] text-white rounded-lg"
          >
            <Assign className="w-5 mr-0.5" />
            <span className="w-11.5 text-sm font-medium font-poppins">
              Assign
            </span>
            <DownArrow className="ml-2.5" />
          </button> */}
          <Toast ref={toast}></Toast>
          <SplitButton
            label="Assign"
            icon={<Assign />}
            model={items}
            onClick={save}
            className="!bg-[#6366f1] w-29 !border-[#6366f1] hover:!bg-[#6366f1] text-white font-poppins text-xs rounded-lg px-3 h-8.5 flex items-center overflow-hidden"
            pt={{
              root: {
                className:
                  "flex items-center w-29px h-8.5 !p-0  m-0 !bg-[#6366f1] rounded-[0px] !hover:bg-[#6366f1]",
              },
              icon: { className: "!bg-transparent" },
              button: {
                root: {
                  className:
                    "!w-29 !h-8.5 !p-0 !px-1 !border-none !text-xs !bg-[#6366f1]",
                },
              },
              menu: { className: "bg-white  rounded-lg shadow-lg mt-1" },
              menuItem: {
                className:
                  "text-black font-poppins text-sm px-3 py-2 hover:bg-gray-100 rounded",
              },
            }}
          />
        </div>
        <div className="w-7 h-7 p-1 py-1.5 cursor-pointer hover:bg-[#eaeafd] rounded">
          <TimerSmall />
        </div>
        <div className="relative w-7 h-7 p-1 py-1.5 cursor-pointer hover:bg-[#eaeafd] rounded">
          <Search onClick={() => setisSearchClicked((prev) => !prev)} />
          {isSearchClicked && (
            <SearchBar
              width="w-50"
              haveFilter={false}
              className="absolute -ml-40 mt-5 rounded-lg"
            />
          )}
        </div>

        <PopUpMenu
          MenuItems={[
            {
              label: "Timer",
              icon: <TimerSmall />,
            },
          ]}
          className="w-7 h-7 p-1 py-1.5 cursor-pointer hover:bg-[#eaeafd] rounded"
          parentDivClassName="w-7 h-7 cursor-pointer hover:bg-[#eaeafd] rounded"
        />
      </div>
    </div>
  );
}
