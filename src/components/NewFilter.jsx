import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function NewFilter({ region, setRegion }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setRegion(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    { value: "", label: "Filter by Region" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  return (
    <div className="relative w-60 md:max-w-[200px] max-w-xs shadow dark:shadow-Light-Mode-Text">
      <div
        className="h-14 bg-White dark:bg-Dark-Mode-Elements flex items-center px-6 font-semibold rounded-md relative cursor-pointer"
        onClick={toggleDropdown}
      >
        {options.find((option) => option.value === region)?.label ||
          "Filter by Region"}
        <IoIosArrowDown className="text-Light-Mode-Text dark:text-White absolute right-5" />
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-3 py-4 bg-white dark:bg-Dark-Mode-Elements rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-6 py-2 text-Light-Mode-Text dark:text-White hover:brightness-125 first-of-type:rounded-t-md last-of-type:rounded-b-md grid items-center font-semibold h-10 cursor-pointer bg-White dark:bg-Dark-Mode-Elements "
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
