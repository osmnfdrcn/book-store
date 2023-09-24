"use client";

import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
interface EmptyStateProps {
  title?: string;
  buttonText?: string;
}

const NoResult = ({ title, buttonText = "ANASAYFA" }: EmptyStateProps) => {
  const router = useRouter();

  return (
    <div className="h-[70vh] md:h[20vh] flex flex-col gap-2 justify-center  lg:justify-start items-center w-full ">
      <div className="w-48 mt-4 flex flex-col items-center justify-center gap-4">
        <p className="text-sm font-light dark:text-white text-slate-500">
          {title}
        </p>
        <Button
          variant="primary"
          onClick={() => router.push("/")}
          className="bg-slate-800 hover:bg-slate-600 duration-100 transition  text-white px-2 py-2 text-sm font-semibold dark:border dark:border-white"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default NoResult;
