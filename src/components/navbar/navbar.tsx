'use client'

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed container z-10 top-6 inset-x-4 h-14 xs:h-16 bg-background/50 backdrop-blur-sm border dark:border-slate-700/70 mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Link href="/" className="flex gap-3 items-center">
          <Avatar className="size-10">
            <AvatarImage alt="@misterlobo" src="https://github.com/misterlobo.png"></AvatarImage>
            <AvatarFallback>misterlobo</AvatarFallback>
          </Avatar>
          <div className="inline-flex flex-col">
            <span className="font-semibold text-xl">misterlobo</span>
            <span className="leading-none">Software Developer</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;