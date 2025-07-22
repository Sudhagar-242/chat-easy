"use client";
import React, { useState, useEffect, useContext } from "react";
import { usePathname } from "next/navigation";

import ChatDataContext from "@/app/Context/Context";
import { UserListType } from "@/app/Context/types";

import StareedIcon from "@/assets/ChatSvgs/StarredMessage.svg";
import NotStarredIcon from "@/assets/ChatSvgs/NotStarred.svg";
import ForwardIcon from "@/assets/ChatSvgs/Forwarded.svg";
import Link from "next/link";

export type ForUserListPropsType = {
  UserList: (UserListType | { seperator: string })[];
};

export default function UserListContainer({
  UserList,
}: ForUserListPropsType): React.ReactNode {
  const path = usePathname().split("/");
  const ActiveElement = path[path.length - 1];

  const [UserListArray, setUserListArray] =
    useState<ForUserListPropsType["UserList"]>(UserList);
  const [hoveredUser, setHoveredUser] = useState("");
  const [_, setupdateState] = useState(false);
  const setStar = useContext(ChatDataContext).setStar;

  useEffect(() => {}, [UserList]);

  // function OnClickHandler(UserName: string) {
  //   setUserListArray((prevArray) => {
  //     return prevArray.map((item) => {
  //       if ("UserName" in item) {
  //         if (item.UserName === UserName) {
  //           return {
  //             ...item,
  //             isActive: true,
  //           };
  //         }
  //       }
  //       return {
  //         ...item,
  //         isActive: false,
  //       };
  //     });
  //   });
  // }

  function OnStarred(event: React.MouseEvent, item: UserListType) {
    event.preventDefault();
    event.stopPropagation();
    console.log(item);
    setStar(item.CID, item.starred!);
    item.starred = !item.starred;
    setupdateState((prev) => !prev);
  }

  return (
    <>
      {UserList ? (
        <div className="mt-3 h-[calc(100vh-182.2px)] overflow-y-scroll scroll-smooth no-scrollbar ">
          {UserList.map((item, index) => {
            if ("seperator" in item) {
              return (
                <h1
                  key={`sep-${index}`}
                  className="text-xs text-gray-400 px-3 py-1 cursor-pointer"
                >
                  {item.seperator}
                </h1>
              );
            }

            return (
              //               <div href={`chats/${item.UserName}`} key={item.UserName}>
              //                 <div
              //                   className={`cursor-grab h-[70px] w-4/5 box-border mb-1 p-3 pb-3.5 ${
              //                     item.isActive &&
              //                     "pl-2 bg-gradient-to-r from-[#EAEAFD]  to-[#ffffff] border-l-4 border-[#6366F1] rounded-l-lg"
              //                   }w-full h-full rounded-lg flex justify-between box-border items-center hover:bg-[#EAEAFD]`}
              //                   onClick={() => {
              //                     OnClickHandler(item.UserName);
              //                   }}
              //                   onMouseOver={() => setHoveredUser(item.UserName)}
              //                   onMouseOut={() => setHoveredUser("")}
              //                 >
              //                   <div className={`flex h-full items-center-safe`}>
              //                     {item.UserLogo}
              //                     <div className="flex flex-col justify-between pl-[14px]">
              //                       <h1 className="font-poppins font-medium text-[14px] text-black">
              //                         {item.UserName}
              //                       </h1>
              //                       <div className="flex justify-between font-poppins font-medium text-[12px] overflow-hidden text-[#8C8C8C]">
              //                         {item.isForwardedMessage &&
              //                           hoveredUser !== item.UserName && (
              //                             <ForwardIcon className="mr-1" />
              //                           )}
              //                         <p>{item.lastMessage}</p>
              //                       </div>
              //                     </div>
              //                   </div>
              //                   <div className="flex flex-col justify-between pl-[14px] items-end font-poppins font-medium text-[12px] text-[#000000] gap-y-2.5">
              //                     <p className="font-medium text-[10px] text-[#8c8c8c] w-full h-2.5">
              //                       {item.time}
              //                     </p>
              //                     <div className="flex justify-end w-full h-[16px] gap-1.5 ">
              //                       {item.starred && (
              // <StareedIcon
              //   onClick={(event: React.MouseEvent) => {
              //     event.stopPropagation();
              //     setUserListArray((prevArray) =>
              //       prevArray.map((user) =>
              //         "UserName" in user && user.UserName === item.UserName
              //           ? { ...user, starred: false }
              //           : user
              //       )
              //     );
              //   }}
              //   className="cursor-pointer"
              // />
              //                       )}
              //                       {!item.starred && hoveredUser === item.UserName && (
              // <NotStarredIcon
              //   onClick={(event: React.MouseEvent) => {
              //     event.stopPropagation();
              //     setUserListArray((prevArray) =>
              //       prevArray.map((user) =>
              //         "UserName" in user && user.UserName === item.UserName
              //           ? { ...user, starred: true }
              //           : user
              //       )
              //     );
              //   }}
              //   className="cursor-pointer"
              // />
              //                       )}
              //                       {item.value && (
              //                         <div className="w-4 h-4 text-[10px] bg-[#6366f1] rounded-full text-center box-border text-white pt-[1.1px]">
              //                           {item.value}
              //                         </div>
              //                       )}
              //                     </div>
              //                   </div>
              //                 </div>
              //               </div>
              // <Link
              //   href={`chats/${item.UserName}`}
              //   passHref
              //   key={item.UserName}
              // >
              //   <a
              //     className={`cursor-grab h-[70px] w-4/5 box-border mb-1 p-3 pb-3.5 ${
              //       item.isActive &&
              //       "pl-2 bg-gradient-to-r from-[#EAEAFD] to-[#ffffff] border-l-4 border-[#6366F1] rounded-l-lg"
              //     } w-full h-full rounded-lg flex justify-between items-center hover:bg-[#EAEAFD]`}
              //     onClick={() => {
              //       OnClickHandler(item.UserName);
              //     }}
              //     onMouseOver={() => setHoveredUser(item.UserName)}
              //     onMouseOut={() => setHoveredUser("")}
              //   >
              //     <div className="flex h-full items-center-safe">
              //       {item.UserLogo}
              //       <div className="flex flex-col justify-between pl-[14px]">
              //         <h1 className="font-poppins font-medium text-[14px] text-black">
              //           {item.UserName}
              //         </h1>
              //         <div className="flex justify-between font-poppins font-medium text-[12px] overflow-hidden text-[#8C8C8C]">
              //           {item.isForwardedMessage &&
              //             hoveredUser !== item.UserName && (
              //               <ForwardIcon className="mr-1" />
              //             )}
              //           <p>{item.lastMessage}</p>
              //         </div>
              //       </div>
              //     </div>

              //     <div className="flex flex-col justify-between pl-[14px] items-end font-poppins font-medium text-[12px] text-[#000000] gap-y-2.5">
              //       <p className="font-medium text-[10px] text-[#8c8c8c] w-full h-2.5">
              //         {item.time}
              //       </p>
              //       <div className="flex justify-end w-full h-[16px] gap-1.5">
              //         {item.starred && (
              //           <StareedIcon
              //             onClick={(event: React.MouseEvent) => {
              //               event.preventDefault(); // <-- Prevent link navigation
              //               event.stopPropagation(); // <-- Stop bubbling to link
              //               setUserListArray((prevArray) =>
              //                 prevArray.map((user) =>
              //                   "UserName" in user &&
              //                   user.UserName === item.UserName
              //                     ? { ...user, starred: false }
              //                     : user
              //                 )
              //               );
              //             }}
              //             className="cursor-pointer"
              //           />
              //         )}
              //         {!item.starred && hoveredUser === item.UserName && (
              //           <NotStarredIcon
              //             onClick={(event: React.MouseEvent) => {
              //               event.preventDefault(); // <-- Prevent link navigation
              //               event.stopPropagation(); // <-- Stop bubbling to link
              //               setUserListArray((prevArray) =>
              //                 prevArray.map((user) =>
              //                   "UserName" in user &&
              //                   user.UserName === item.UserName
              //                     ? { ...user, starred: true }
              //                     : user
              //                 )
              //               );
              //             }}
              //             className="cursor-pointer"
              //           />
              //         )}
              //         {item.value && (
              //           <div className="w-4 h-4 text-[10px] bg-[#6366f1] rounded-full text-center text-white pt-[1.1px]">
              //             {item.value}
              //           </div>
              //         )}
              //       </div>
              //     </div>
              //   </a>
              // </Link>
              // <Link
              //   href={`chats/${item.UserName}`}
              //   key={item.UserName}
              //   className={`cursor-grab h-[70px] w-4/5 box-border mb-1 p-3 pb-3.5 ${
              //     item.isActive &&
              //     "pl-2 bg-gradient-to-r from-[#EAEAFD] to-[#ffffff] border-l-4 border-[#6366F1] rounded-l-lg"
              //   } w-full h-full rounded-lg flex justify-between items-center hover:bg-[#EAEAFD]`}
              //   onClick={() => {
              //     OnClickHandler(item.UserName);
              //   }}
              // >
              //   <div
              //     className="flex h-full items-center-safe"
              //     onMouseOver={() => setHoveredUser(item.UserName)}
              //     onMouseOut={() => setHoveredUser("")}
              //   >
              //     {item.UserLogo}
              //     <div className="flex flex-col justify-between pl-[14px]">
              //       <h1 className="font-poppins font-medium text-[14px] text-black">
              //         {item.UserName}
              //       </h1>
              //       <div className="flex justify-between font-poppins font-medium text-[12px] overflow-hidden text-[#8C8C8C]">
              //         {item.isForwardedMessage &&
              //           hoveredUser !== item.UserName && (
              //             <ForwardIcon className="mr-1" />
              //           )}
              //         <p>{item.lastMessage}</p>
              //       </div>
              //     </div>
              //   </div>

              //   <div className="flex flex-col justify-between pl-[14px] items-end font-poppins font-medium text-[12px] text-[#000000] gap-y-2.5">
              //     <p className="font-medium text-[10px] text-[#8c8c8c] w-full h-2.5">
              //       {item.time}
              //     </p>
              //     <div className="flex justify-end w-full h-[16px] gap-1.5">
              //       {item.starred && (
              //         <StareedIcon
              //           onClick={(event) => {
              //             event.preventDefault(); // ✅ Prevent Link navigation
              //             event.stopPropagation(); // ✅ Prevent Link trigger
              //             setUserListArray((prevArray) =>
              //               prevArray.map((user) =>
              //                 "UserName" in user &&
              //                 user.UserName === item.UserName
              //                   ? { ...user, starred: false }
              //                   : user
              //               )
              //             );
              //           }}
              //           className="cursor-pointer"
              //         />
              //       )}
              //       {!item.starred && hoveredUser === item.UserName && (
              //         <NotStarredIcon
              //           onClick={(event) => {
              //             event.preventDefault();
              //             event.stopPropagation();
              //             setUserListArray((prevArray) =>
              //               prevArray.map((user) =>
              //                 "UserName" in user &&
              //                 user.UserName === item.UserName
              //                   ? { ...user, starred: true }
              //                   : user
              //               )
              //             );
              //           }}
              //           className="cursor-pointer"
              //         />
              //       )}
              //       {item.value && (
              //         <div className="w-4 h-4 text-[10px] bg-[#6366f1] rounded-full text-center text-white pt-[1.1px]">
              //           {item.value}
              //         </div>
              //       )}
              //     </div>
              //   </div>
              // </Link>
              <Link href={`/chats/${item.CID}`} key={item.UserName}>
                <div
                  className={`cursor-grab !h-[70px] w-4/5 box-border mb-1 p-3 pb-3.5 ${
                    item.CID === +ActiveElement
                      ? "pl-2 bg-gradient-to-r from-[#EAEAFD] to-[#ffffff] border-l-4 border-[#6366F1] rounded-l-lg"
                      : ""
                  } w-full h-full rounded-lg flex justify-between items-center hover:bg-[#EAEAFD]`}
                  // onClick={() => OnClickHandler(item.UserName)}
                  onMouseOver={() => setHoveredUser(item.UserName)}
                  onMouseOut={() => setHoveredUser("")}
                >
                  <div className="flex h-full items-center-safe">
                    {item.UserLogo}
                    <div className="flex flex-col justify-between pl-[14px]">
                      <h1 className="font-poppins font-medium text-[14px] text-black">
                        {item.UserName}
                      </h1>
                      <div className="flex justify-between font-poppins font-medium text-[12px] overflow-hidden text-[#8C8C8C]">
                        {item.isForwardedMessage &&
                          hoveredUser !== item.UserName && (
                            <ForwardIcon className="mr-1" />
                          )}
                        <p>{item.lastMessage}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between pl-[14px] items-end font-poppins font-medium text-[12px] text-[#000000] gap-y-2.5">
                    <p className="font-medium text-[10px] text-[#8c8c8c] w-full h-2.5">
                      {item.time}
                    </p>
                    <div className="flex justify-end w-full h-[16px] gap-1.5">
                      {item.starred && (
                        <StareedIcon
                          onClick={(event: React.MouseEvent) => {
                            OnStarred(event, item);
                          }}
                          className="cursor-pointer"
                        />
                      )}
                      {!item.starred && hoveredUser === item.UserName && (
                        <NotStarredIcon
                          onClick={(event: React.MouseEvent) => {
                            OnStarred(event, item);
                          }}
                          className="cursor-pointer"
                        />
                      )}
                      {item.value && (
                        <div className="w-4 h-4 text-[10px] bg-[#6366f1] rounded-full text-center text-white pt-[1.1px]">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h1>Failed to Fetch</h1>
      )}{" "}
    </>
  );
}
