import {
  ConversationDataType,
  UserDataType,
  UserListType,
  userMessageType,
  OrderCardType,
} from "./types";

// import User1 from "@/assets/UserListSvg/User1.svg";
// import User2 from "@/assets/UserListSvg/User2.svg";
// import User3 from "@/assets/UserListSvg/User3.svg";
// import User4 from "@/assets/UserListSvg/User4.svg";
// import User5 from "@/assets/UserListSvg/User5.svg";
// import User6 from "@/assets/UserListSvg/User6.svg";
// import User7 from "@/assets/UserListSvg/User7.svg";

import Image1 from "../../../public/assets/OrderedImages/001.png";
import Image2 from "../../../public/assets/OrderedImages/002.png";
import Image3 from "../../../public/assets/OrderedImages/003.png";
import { StaticImageData } from "next/image";

export function getUserList() {
  const UserList = UserData.map(
    (item: UserDataType | { seperator: string }) => {
      if ("seperator" in item) {
        return item;
      }
      return {
        UserLogo: item.UserName,
        UserName: item.UserLogo,
        CID: item.CID,
        lastMessage: item.lastMessage,
        isForwardedMessage: item.lastMessage,
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

export function getChats(ID: number): userMessageType[] {
  const chat = UserData.find((item: UserDataType | { seperator: string }) => {
    return "CID" in item && item.CID === ID;
  });
  if (chat && "coversation" in chat) {
    return chat.coversation;
  }

  return [];
}

export function getOrders(ID: number): OrderCardType[] {
  const order = UserData.find((item: UserDataType | { seperator: string }) => {
    return "CID" in item && item.CID === ID;
  });
  if (order && "orders" in order) {
    return order.orders;
  }

  return [];
}

export function setStar(ID: number) {
  const userIndex = UserData.findIndex(
    (item: UserDataType | { seperator: string }) => {
      return "CID" in item && item.CID === ID;
    }
  );
  if (userIndex !== -1 && "starred" in UserData[userIndex]) {
    UserData[userIndex].starred = !UserData[userIndex].starred;
  }
}

export function getUserInfo(ID: number): {
  userDP: string | StaticImageData;
  userName: string;
} {
  const user = UserData.find((item) => {
    if ("seperator" in item) {
      return null;
    }
    return item.CID === ID;
  });
  if (user && "seperator" in user) {
    return {} as { userDP: string | StaticImageData; userName: string };
  }
  if (!user) return { userDP: "", userName: "" };

  return {
    userDP: user.UserLogo,
    userName: user.UserName,
  };
}

export const UserData: ConversationDataType = [
  {
    UserLogo: "/assets/UserListSvg/User1.svg",
    UserName: "John Kennedy",
    CID: 1001,
    lastMessage: "Done!",
    time: "04:31 PM",
    value: 2,
    coversation: [
      {
        date: "07/15/2024",
        id: "conv001",
        messages: [
          {
            message: "Hey! My order just came in.",
            time: "9:10 AM",
            status: "recieved",
          },
          {
            sender: "Samantha Lee",
            profile: "/assets/UserListSvg/User7.svg",
            position: "Designer",
            message: "But I got the wrong color for the jacket.",
            time: "9:12 AM",
            status: "sent",
          },
          {
            message: "Can you share a picture?",
            time: "9:13 AM",
            status: "recieved",
          },
          {
            sender: "Samantha Lee",
            profile: "/assets/UserListSvg/User7.svg",
            position: "Designer",
            message: "Sue, attaching now.",
            time: "9:14 AM",
            status: "sent",
          },
        ],
      },
    ],
    orders: [
      {
        Items: 2,
        ProductNames: ["Winter Jacket - Blue", "Wool Scarf - Black"],
        OID: "ORD987654321",
        ViewLink: "https://www.w3schools.com",
        OrderPlacedDate: "14th July 2024",
        OrderTime: "08:44 AM",
        Amount: 342.5,
        OrderStatus: "Delivered",
        isHasIssue: true,
        ImageArray: [Image3, Image1],
      },
    ],
  },
  {
    UserLogo: "/assets/UserListSvg/User2.svg",
    UserName: "Dwight Mitchel",
    CID: 1002,
    lastMessage: "Awsome! Thanks bro. Ill Take c...",
    time: "10:39 AM",
    isActive: true,
    coversation: [
      {
        date: "08/20/2020",
        id: "hfvj",
        messages: [
          {
            message: "I’m down! Any ideas??",
            time: "11:35 AM",
            status: "recieved",
          },
          {
            sender: "Winson Joseph",
            profile: "/assets/UserListSvg/User6.svg",
            position: "Category",
            message: "I was thinking the cafe downtown",
            time: "11:36AM",
            status: "sent",
          },
          {
            message: "I was thinking the cafe downtown",
            time: "11:45 AM",
            status: "recieved",
          },
          {
            message: `But limited vegan options @Janet!`,
            time: "11:45 AM",
            status: "recieved",
          },
        ],
      },
      {
        date: "Today",
        id: "sjhhbf",
        messages: [
          {
            status: "recieved",
            message: `That works- I was actually planning to
get a smoothie anyways 👍`,
            time: "12:03 PM",
            imageArray: [
              "/ComplainedImages/UserSent1.png",
              "/ComplainedImages/UserSent2.png",
            ],
          },
          {
            sender: "John",
            profile: "/assets/UserListSvg/User7.svg",
            position: "Sales EX",
            message: "Agreed",
            time: "11:36 AM",
            status: "sent",
          },
          {
            sender: "John",
            profile: "/assets/UserListSvg/User7.svg",
            position: "Sales EX",
            FileSent: "Audio",
            seconds: 38,
            time: "11:36 AM",
            status: "sent",
          },
        ],
      },
    ],
    orders: [
      {
        Items: 5,
        ProductNames: [
          "Nike Air Max 270",
          "Adidas Ultraboost 23",
          "Converse Chuck Taylor All Star",
          "Dr. Martens 1460 Boots",
          "New Balance 990v6",
        ],
        OID: "54465694685",
        ViewLink: "https://www.w3schools.com",
        OrderPlacedDate: "12th July 2024",
        OrderTime: "12:34 PM",
        Amount: 342.5,
        OrderStatus: "Delivered",
        isHasIssue: true,
        ImageArray: [Image1, Image2, Image3, Image1, Image2],
      },
      {
        Items: 1,
        ProductNames: ["Nike Deep.."],
        OID: "54465694687",
        ViewLink: "https://www.w3schools.com",
        OrderPlacedDate: "12th July 2024",
        OrderTime: "12:34 PM",
        Amount: 342.5,
        OrderStatus: "Delivered",
        isHasIssue: false,
        ImageArray: [Image1],
      },
    ],
  },
  {
    UserLogo: "/assets/UserListSvg/User3.svg",
    UserName: "Henri Berquel",
    CID: 1003,
    lastMessage: "Yes, it is radioactive!!",
    time: "10:39 AM",
    starred: true,
    isForwardedMessage: true,
    coversation: [
      {
        date: "Today",
        id: "conv002",
        messages: [
          {
            sender: "Carlos Rivera",
            profile: "/assets/UserListSvg/User4.svg",
            position: "Sound Tech",
            message: "Just finished mixing the audio.",
            time: "01:20 PM",
            status: "sent",
          },
          {
            sender: "Carlos Rivera",
            profile: "/assets/UserListSvg/User4.svg",
            position: "Sound Tech",
            FileSent: "Audio",
            seconds: 130,
            time: "01:21 PM",
            status: "sent",
          },
          {
            message: "Listening now. Will give feedback soon.",
            time: "01:23 PM",
            status: "recieved",
          },
        ],
      },
    ],
    orders: [
      {
        Items: 3,
        ProductNames: ["Studio Mic", "Sound Card", "Foam Panels"],
        OID: "ORD1122334455",
        ViewLink: "https://www.w3schools.com",
        OrderPlacedDate: "13th July 2024",
        OrderTime: "11:20 AM",
        Amount: 342.5,
        OrderStatus: "Delivered",
        isHasIssue: false,
        ImageArray: [Image2, Image1, Image3],
      },
    ],
  },
  {
    UserLogo: "/assets/UserListSvg/User4.svg",
    UserName: "+91 55426 79465",
    CID: 1004,
    lastMessage: "Sent an Audio",
    time: "10:39 AM",
    coversation: [
      {
        date: "07/16/2024",
        id: "conv003",
        messages: [
          {
            message: "Hi! I want to exchange my order.",
            time: "2:55 PM",
            status: "recieved",
          },
          {
            sender: "Priya Menon",
            profile: "/assets/UserListSvg/User5.svg",
            position: "HR Manager",
            message: "The shoes are too small.",
            time: "2:56 PM",
            status: "sent",
          },
          {
            message: "No problem, we’ll help process the exchange.",
            time: "3:00 PM",
            status: "recieved",
          },
        ],
      },
    ],
    orders: [
      {
        Items: 1,
        ProductNames: ["Nike Deep Canvas Sneakers - Size 6"],
        OID: "ORD6677889900",
        ViewLink: "https://www.w3schools.com",
        OrderPlacedDate: "12th July 2024",
        OrderTime: "10:05 AM",
        Amount: 342.5,
        OrderStatus: "Delivered",
        isHasIssue: true,
        ImageArray: [Image2],
      },
    ],
  },
  {
    seperator: "From Tommorow",
  },
  {
    UserLogo: "/assets/UserListSvg/User5.svg",
    UserName: "+91 55426 79460",
    CID: 1006,
    lastMessage: "Alright!",
    time: "10:39 AM",
    coversation: [
      {
        date: "Today",
        id: "awe912",
        messages: [
          {
            sender: "Carlos Rivera",
            profile: "/assets/UserListSvg/User4.svg",
            position: "Audio Engineer",
            message: "Here's the demo track",
            time: "01:20 PM",
            status: "sent",
            FileSent: "Audio",
            seconds: 47,
          },
          {
            message: "Sounds good! Just need some tweaks.",
            time: "01:21 PM",
            status: "recieved",
          },
        ],
      },
    ],
    orders: [
      {
        Items: 2,
        ProductNames: ["Studio Mic", "XLR Cable"],
        OID: "2456841235",
        ViewLink: "https://www.w3schools.com",
        OrderPlacedDate: "10th July 2024",
        OrderTime: "10:15 AM",
        Amount: 342.5,
        OrderStatus: "Delivered",
        isHasIssue: false,
        ImageArray: [Image2, Image3],
      },
    ],
  },
];
