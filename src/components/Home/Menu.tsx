import React from "react";
import { HomeIcon, Bookmark, AlertCircleIcon, Settings } from "lucide-react";

type Props = {};

const links = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "Discover", path: "/Discover", icon: HomeIcon },
  { name: "Bookmark", path: "/Bookmark", icon: Bookmark },
  { name: "Settings", path: "/Settings", icon: Settings },
  { name: "Help", path: "/Help", icon: AlertCircleIcon },
];

const Menu = (props: Props) => {
  return (
    <div className="md:w-1/5 ">
      <div className="bg-white h-full flex flex-col md:items-center">
        <div className="h-full flex flex-col md:items-center">
          <div className="h-full flex flex-col md:items-center justify-around md:justify-start mt-5">
            {links.map((link, index) => (
              <div
                key={index}
                className="flex items-center justify-start w-full space-x-4 p-2 rounded-md hover:bg-gray-200"
              >
                <link.icon size={15} className="" />
                <a href={link.path} className="hidden md:block ml-2 font-bold text-xl">
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
