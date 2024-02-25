import React from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

type Props = {};

const SelectionBar = (props: Props) => {
  return (
    <div className="flex justify-between m-3 md:m-0 md:mb-2">
      <div className="flex gap-4">
        <Button size={"sm"} className="rounded-xl">
          Popular
        </Button>
        <Button variant={"secondary"} size={"sm"} className="rounded-xl">
          Top Selling
        </Button>
        <Button variant={"secondary"} size={"sm"} className="rounded-xl">
          Following
        </Button>
        <Button variant={"secondary"} size={"sm"} className="rounded-xl">
          New
        </Button>
      </div>

      <div>
        <Button
          size={"sm"}
          variant={"ghost"}
          className="flex justify-center items-center rounded-xl"
        >
          <p>Next</p>
          <ArrowRightIcon size={10} className="text-blue-900" />
        </Button>
      </div>
    </div>
  );
};

export default SelectionBar;
