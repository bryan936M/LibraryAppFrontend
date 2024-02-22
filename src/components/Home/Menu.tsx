import React from "react";
import { HomeIcon } from "lucide-react";

type Props = {};

const links = [{name: "Home", path: "/", icon: HomeIcon}]

const Menu = (props: Props) => {
  return (<div className="w-1/5 ">
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Menu</h1>
        <div className="flex flex-col items-center justify-center mt-5">
          {links.map((link, index) => (
            <div key={index} className="flex items-center justify-center w-1/2 p-2 rounded-md bg-gray-200">
              <link.icon size={24} />
              <a href={link.path} className="ml-2">{link.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>);
};

export default Menu;
