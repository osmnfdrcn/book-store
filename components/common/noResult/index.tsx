"use client";

import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
interface EmptyStateProps {
  title?: string;
  subtitle?: string;
}

const NoResult = ({ title, subtitle }: EmptyStateProps) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center w-full ">
      <div className="w-48 mt-4 flex flex-col items-center justify-center gap-4">
        <p className="text-sm font-light text-slate-500">{title}</p>
        <Button
          variant="primary"
          onClick={() => router.push("/")}
          className="bg-slate-800 hover:bg-slate-600 duration-100 transition  text-white px-2 py-2 text-sm font-semibold"
        >
          ANASAYFA
        </Button>
      </div>
    </div>
  );
};

export default NoResult;
