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
      <section className="chat-layout">
        <UserListsBox />
        <main className="chat-user-conversation">{children}</main>
        <RightSideNav />
      </section>
    </ContextProvider>
  );
}
