"use client";
import React, { useState, useContext } from "react";
import ChatDataContext from "@/app/Context/Context";

import { Badge } from "primereact/badge";
import OrderCard from "./OrderCard";

export default function OrderBox({ CID }: { CID: number }) {
  const OrderItems = useContext(ChatDataContext).getOrders(CID);
  const UnderLine =
    "absolute bottom-0 left-0 mt-6.5 bg-indigo-500 inline-block h-[1px] w-1/2 group-hover:bg-indigo-500";
  const Tab = "-mb-[2px] h-full w-full group cursor-pointer";
  const TabActive = "text-indigo-500";

  const [whichTab, setwhichTab] = useState("Order");

  return (
    <>
      <section className="w-84.5 border border-[#E5E9EB] gap-y-3.5 box-border p-5 flex flex-col overflow-y-scroll overflow-x-hidden no-scrollbar scroll-smooth">
        <header className="relative flex w-74.5 h-6.5 gap-x-6 mb-1.5 pb-2 border-b border-b-[#E5E9EB] font-medium text-[14px] text-black cursor-pointer">
          <div
            className={Tab + (whichTab === "Order" && TabActive)}
            onClick={() => {
              setwhichTab("Order");
            }}
          >
            Order History
            <span
              className={whichTab === "Order" ? UnderLine : "hidden"}
            ></span>
          </div>
          <div
            className={Tab + (whichTab === "Abondon" && TabActive)}
            onClick={() => {
              setwhichTab("Abondon");
            }}
          >
            Abandon cart <Badge value={0} size="normal"></Badge>
            <span
              className={
                whichTab === "Abondon" ? UnderLine + " ml-[50%]" : "hidden"
              }
            ></span>
          </div>
        </header>
        {whichTab === "Order" ? (
          OrderItems.map((item) => (
            <OrderCard
              key={item.OID}
              Items={item.Items}
              ProductNames={item.ProductNames}
              OID={item.OID}
              ViewLink={item.ViewLink}
              OrderPlacedDate={item.OrderPlacedDate}
              OrderStatus={item.OrderStatus}
              Amount={item.Amount}
              OrderTime={item.OrderTime}
              ImageArray={item.ImageArray}
              isHasIssue={item.isHasIssue}
            />
          ))
        ) : whichTab === "Abandon" ? (
          <h1>Abondoned Card</h1>
        ) : (
          <h1>No Items Exist</h1>
        )}
      </section>
    </>
  );
}
