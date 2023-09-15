import dynamic from "next/dynamic";

export const Wrapper = dynamic(() => import("./wrapper"));
export const Spinner = dynamic(() => import("./spinner"));
export const Skeleton = dynamic(() => import("./skeleton"));
