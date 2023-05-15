"use client";
import Wrapper from "../../layout/wrapper";
import Search from "./search";
import Icons from "./icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <div className="fixed z-20 w-full  shadow-sm h-[70px] border-b-[1px] bg-slate-50 ">
      <Wrapper>
        <div className="flex  items-center justify-center ">
          <div className=" flex items-center justify-between w-full relative z-50">
            <Link href="/">
              <Image src="/images/logo.png" width={65} height={50} alt="logo" />
            </Link>
            {showSearchBar ? <Search /> : null}
            <Icons
              showSearchBar={showSearchBar}
              setShowSearchBar={setShowSearchBar}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
