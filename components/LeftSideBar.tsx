"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSideBar = () => {
  const pathname = usePathname();
  return (
    <section className="static top-0 left-0 flex min-h-screen flex-col w-fit p-6 pt-28 text-white bg-dark-1 max-sm:hidden lg:w-[264px]">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "flex gap-4 p-4 justify-start items-center rounded-lg",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              <Image
                alt={item.label}
                src={item.imgURL}
                height={24}
                width={24}
              />
              <p className="max-lg:hidden text-lg font-semibold">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LeftSideBar;
