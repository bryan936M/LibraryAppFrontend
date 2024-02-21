"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Auth from "./Auth";

type Props = {};

const Nav = (props: Props) => {
  const { setTheme } = useTheme();
  return (
    <div className="flex justify-between p-3">
      <div className="flex space-x-20 items-center w-1/3">
        <div className="flex items-center space-x-5">
          <Avatar>
            <AvatarImage src="https://icon-library.com/images/photo-library-icon/photo-library-icon-3.jpg" />
            <AvatarFallback>Logo</AvatarFallback>
          </Avatar>
          <p className="font-bold min-w-fit">E-Book</p>
        </div>
        <Input type="text" placeholder="Search" />
      </div>
      <div className="flex p-5 space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Auth />
      </div>
    </div>
  );
};

export default Nav;
