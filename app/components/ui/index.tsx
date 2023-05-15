import dynamic from "next/dynamic";

export const Home = dynamic(() => import("./home"));
export const Navbar = dynamic(() => import("./navbar"));
export const NoResult = dynamic(() => import("./noResult"));
export const Title = dynamic(() => import("./title"));
