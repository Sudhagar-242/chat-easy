import { ContextProvider } from "@/app/Context/Context";
import UserListsBox from "./UserListsBox/page";
import RightSideNav from "./ChatMenu/RightSideNav";

export default function ChatBoxLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextProvider>
      <main className="chat-layout">
        <UserListsBox />
        <section className="chat-user-conversation">{children}</section>
        <RightSideNav />
      </main>
    </ContextProvider>
  );
}
