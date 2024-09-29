import { IoIosSearch, IoMdSettings } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Navbar = () => {
  return (
    <div className="w-full px-6 py-4 border-b">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 border items-center p-2 rounded-full">
          <IoIosSearch className="text-foreground w-10 h-5" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent text-foreground"
          />
        </div>
        <ul className="flex gap-5">
            <li>
                <IoChatbox className="h-6 w-5"/>
            </li>
            <li>
                <FaBell  className="h-6 w-4" />
            </li>
            <li>
                <IoMdSettings  className="h-6 w-5" />
            </li>
            <li className="flex gap-2">
                <Avatar className="!h-8 !w-8" >
                    <AvatarImage src="https://github.com/shadcn.png"  />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-between">
                    <span className="text-xs">Angelo Guiao</span>
                    <span className="text-xs">Admin</span>
                </div>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
