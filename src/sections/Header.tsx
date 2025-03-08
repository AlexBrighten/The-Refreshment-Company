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

      <div className="flex items-center justify-between bg-white py-2">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="logo" width={40} height={40} />
            <MenuIcon className="h-5 w-5" />
          </div>
        </div>
      </div>

    </header>
  );
};
