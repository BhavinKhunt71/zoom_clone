import LeftSideBar from "@/components/LeftSideBar";
import NavBar from "@/components/NavBar";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "YOOM",
  description: "A workspace for your team, powered by Stream Chat and Clerk.",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="relative">
      <NavBar />
      <div className="flex">
        <LeftSideBar />
        <section className="flex min-h-screen flex-1 px-6 pb-6 max-md:pb-14 sm:px-14 pt-28 ">
          {children}
        </section>
      </div>
    </div>
  );
};

export default RootLayout;
