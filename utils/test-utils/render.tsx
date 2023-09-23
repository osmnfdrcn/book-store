import React, { ReactElement } from "react";
import { render, RenderOptions, screen } from "@testing-library/react";
import { StateProvider } from "@/providers/StateProvider";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <StateProvider>{children}</StateProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render, screen };
