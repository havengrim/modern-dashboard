import images from "@/assets/images"
import { HiHome } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { RiContactsBook2Fill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsFillGridFill } from "react-icons/bs";
import { HiNewspaper } from "react-icons/hi";
import { TbCashBanknoteFilled } from "react-icons/tb";
import { FaTicket } from "react-icons/fa6";
import { ModeToggle } from "./mode-toggle";
const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20  sm:flex hidden justify-center px-4 py-6 bg-background border">
       <div className="flex flex-col items-center gap-10">
        <img src={images.logo} alt="" className="h-8 w-8" />
            <ul className="flex flex-col gap-5 items-center">
                <li>
                    <HiHome className="h-10 w-6 text-foreground" />
                </li>
                <li>
                    <MdEmail className="h-10 w-6 text-foreground" />
                </li>
                <li>
                    <RiContactsBook2Fill className="h-10 w-6 text-foreground" />
                </li>
                <li>
                    <RiMoneyDollarCircleFill className="h-10 w-7 text-foreground" />
                </li>
                <li>
                    <BsFillGridFill className="h-10 w-5 text-foreground" />
                </li>
                <li>
                    <HiNewspaper className="h-10 w-6 text-foreground" />
                </li>
                <li>
                    <TbCashBanknoteFilled className="h-10 w-6 text-foreground" />
                </li>
                   <li>
                    <FaTicket className="h-10 w-6 text-foreground" />
                </li>
                <ModeToggle />
            </ul>
       </div>
    </div>
  )
}

export default Sidebar