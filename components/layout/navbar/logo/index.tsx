import Link from "next/link";
import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="h-full flex items-center justify-start">
      <Link href="/">
        <Image src="/images/logo.png" width={90} height={65} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
