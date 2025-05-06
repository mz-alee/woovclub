"use client";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { RiArrowDropDownLine } from "react-icons/ri";

export const DropDown = ({ list, value, onChange }) => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e) => {
    const selected = e?.anchorKey;
    if (onChange) onChange(selected);
  };
  // console.log("value from dropdown", value);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          onClick={() => setIsActive(!isActive)}
          className="capitalize rounded-4xl text-[12px] h-fit px-0 w-[90px] lg:w-[7vw] py-2 lg:text-[0.8vw]  bg-[#45b7db]"
          variant="bordered"
        >
          {!value ? "select type" : value}
          <RiArrowDropDownLine
            className={`text-lg ${isActive && "rotate-180"}`}
          />
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        className="max-h-[20vh] overflow-y-scroll px-2 scrollbar-hide  bg-[#45b7db]"
        disallowEmptySelection
        aria-label="Single selection example"
        selectedKeys={new Set([value])}
        selectionMode="single"
        variant="flat"
        onSelectionChange={handleChange}
      >
        {list?.map((item) => (
          <DropdownItem
            key={item}
            textValue={item}
            className="hover:bg-white/30 text-[12px] capitalize lg:text-[0.8vw]"
          >
            {item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
