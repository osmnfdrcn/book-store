"use client";
import React from "react";
import { ThemeProvider as TP } from "next-themes";

type Props = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  return (
    <>
      <TP attribute="class">{children}</TP>
    </>
  );
};

export default ThemeProvider;
