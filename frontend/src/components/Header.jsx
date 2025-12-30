import Logo from "../assets/bb logo.png";
import { Link } from "react-router";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from "./Button";

export default function Header() {
  return (
    <>
      <div className=" header relative w-full h-18">
        <div className=" w-full h-full  flex justify-around items-center border-b border-brand-border py-4">
          {" "}
          <Link to={"/"}>
            <div className="logo cursor-pointer">
              <img src={Logo} className="w-36" />
            </div>
          </Link>
          <div
            className="flex items-center space-x-6
        "
          >
            <div className="search w-48 h-12">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full border-2 border-[#00AEEF] focus:outline-none px-2.5 rounded-2xl"
              />
            </div>
            <Link to={"/login"}>
              <div className="login">
                <Button buttonName={"Login"} />
              </div>
            </Link>
            <Link to={"/cart"}>
              <div className="relative cursor-pointer">
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  0
                </span>

                <MdOutlineShoppingCart size={36} color="#00AEEF" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
