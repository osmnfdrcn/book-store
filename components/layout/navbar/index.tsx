import Wrapper from "../wrapper";
import CartMenu from "./cart-menu";
import Icons from "./icons";
import Logo from "./logo";

const Navbar = () => {
  return (
    <div className="fixed z-20 w-full h-[90px]  bg-slate-100 ">
      <Wrapper>
        <div className="flex items-center justify-between h-full ">
          <Logo />
          <Icons />
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
