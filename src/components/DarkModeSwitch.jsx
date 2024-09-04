"use client";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted && currentTheme === "dark" ? (
        <span
          onClick={() => setTheme("light")}
          className="text-xl cursor-pointer hover:brightness-125 flex items-center gap-2"
        >
          <IoMoon />
          <p className="font-semibold text-base">Dark Mode</p>
        </span>
      ) : (
        <span
          onClick={() => setTheme("dark")}
          className="text-xl cursor-pointer hover:brightness-125 flex items-center gap-2"
        >
          <IoMoonOutline />
          <p className="font-semibold text-base">Dark Mode</p>
        </span>
      )}
    </div>
  );
}
