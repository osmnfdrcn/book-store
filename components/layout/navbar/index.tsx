import Wrapper from "../wrapper";
import IconNav from "./icon-nav";
import Logo from "./logo";

const Navbar = () => {
  return (
    <div className="fixed z-20 w-full h-[90px]  bg-slate-50 ">
      <Wrapper>
        <div className="flex items-center justify-between h-full ">
          <Logo />
          <IconNav />
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
