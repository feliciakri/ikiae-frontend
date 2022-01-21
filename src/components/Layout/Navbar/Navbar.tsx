import ButtonSignIn from "../../UI/Button/ButtonSignIn";
import SearhButton from "../../UI/Button/SearchButton";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import ProfileDropdown from "../../UI/Dropdown/ProfileDropdown";
import { ReactComponent as IconMenu } from "../../assets/logo/IKIAE-Logo.svg";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-14 py-5 bg-white">
      <span className="w-1/3">
        <IconMenu width="10rem" />
      </span>
      <SearhButton />
      <div className="w-1/2 md:w-1/3 flex justify-end">
        <div className="flex justify-between items-center space-x-3 md:space-x-6">
          {/* Logic Auth */}
          {/*<ButtonSignIn />*/}
          <ProfileDropdown />
          <span className="border border-gray-200 h-full"></span>
          <div className="flex flex-rol items-center space-x-2 md:space-x-3">
            <ShoppingCartIcon className="text-gray-400 w-5 h-5 md:w-6 md:h-6" />
            <span>0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
