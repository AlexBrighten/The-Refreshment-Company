import Image from "next/image";
import ArrowRight from "../assets/arrow-right.svg";
import Logo from "../assets/logosaas.png";


export const Header = () => {
  return (
    <header>

      <div className="flex justify-center items-center bg-black text-yellow-500 py-3 text-sm font-bold">
        <div className="inline-flex justify-center items-center gap-2">
          <p>Lets arrange your refreshments now!</p>
          <ArrowRight className="h-5 w-5 inline-flex justify-center items-center"/>
        </div>
      </div>

      <div className="flex items-center justify-between bg-white py-2">
      <div className="container flex items-center gap-2 font-bold">
        <Image src={Logo} alt="logo" width={40} height={40} />
        <p>
          The Refreshment <br /> Company
        </p>
      </div>

      </div>

    </header>
  );
};
