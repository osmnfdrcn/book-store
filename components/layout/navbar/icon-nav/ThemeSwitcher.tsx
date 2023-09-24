"use client";
import { useTheme } from "next-themes";
import React from "react";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
type Props = {};

const ThemeSwitcher = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="flex">
      {currentTheme === "dark" ? (
        <BsFillSunFill
          className=" text-yellow-500 cursor-pointer"
          onClick={() => setTheme("light")}
          size={30}
        />
      ) : (
        <BsFillMoonFill
          className=" cursor-pointer"
          onClick={() => setTheme("dark")}
          size={30}
        />
      )}
    </div>
  );
};

export default React.memo(ThemeSwitcher);
