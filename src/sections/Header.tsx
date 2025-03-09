import Image from "next/image";
import ArrowRight from "../assets/arrow-right.svg";
import Logo from "../assets/logosaas.png";
import MenuIcon from "../assets/menu.svg";


export const Header = () => {
  return (
    <header className="sticky top-0">

      <div className="flex justify-center items-center bg-black text-yellow-500 py-3 text-sm font-bold">
        <div className="inline-flex justify-center items-center gap-2">
          <p>Lets arrange your refreshments now!</p>
          <ArrowRight className="h-5 w-5 inline-flex justify-center items-center"/>
        </div>
      </div>

      <div className="container flex bg-white justify-between items-center mt-5 py-5 rounded-xl">
        <div>
          <Image src={Logo} alt="Logo" width={35} height={35} />
        </div>
        <div className="font-bold text-2xl">
          The Refreshment Company
        </div>
        <div className="flex">
          <Image src={Logo} alt="Logo" width={30} height={30} />
          <Image src={Logo} alt="Logo" width={30} height={30} />
          <Image src={Logo} alt="Logo" width={30} height={30} />
        </div>
      </div>

    </header>
  );
};
