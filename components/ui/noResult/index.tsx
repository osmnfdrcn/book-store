"use client";

import { useRouter } from "next/navigation";
import { Button } from "../../base";
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
          text="ANASAYFA"
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
};

export default NoResult;
