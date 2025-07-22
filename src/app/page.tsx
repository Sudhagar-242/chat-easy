"use client";
import Logo from "../assets/logo.svg";

export default function Home() {
  return (
    <div className="w-full h-full bg-cyan-200 flex flex-col justify-center gap-y-20 items-center">
      <Logo className="scale-500" />
      <h1 className="text-center text-indigo-500 text-6xl">
        Welcome To ChatEasy
      </h1>
    </div>
  );
}
