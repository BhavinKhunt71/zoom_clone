import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
