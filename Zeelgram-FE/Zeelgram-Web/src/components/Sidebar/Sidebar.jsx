import logoText from "../../assets/images/InsText.png";
import { FaInstagram, FaThreads } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { FaRegCompass, FaRegHeart } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";


const navigation = [
    { name: "Home", to: "/", icon: GoHomeFill, current: true },
    { name: "Search", to: "/search", icon: FiSearch, current: false },
    { name: "Explore", to: "/explore", icon: FaRegCompass, current: false },
    { name: "Reels", to: "/reels", icon: BiMoviePlay, current: false },
    { name: "Messages", to: "/message", icon: RiMessengerLine, current: false },
    { name: "Notifications", to: "/notifications", icon: FaRegHeart, current: false },
    { name: "Create", to: "#", icon: CgAddR, current: false },
  ];


const Sidebar = () => {
    return ( 
        <>
        <div>
      <div className="fixed mr-4 hidden h-screen content-around border-r lg:block xl:w-[160px]">
        <div className="logo py-10">
          <Link to={"/"}><img src={logoText} alt="" className="hidden w-[100px] xl:block" /></Link>
          <FaInstagram className=" ml-1 mr-3 block h-6 w-6  xl:hidden" />
        </div>

        <nav
          aria-label="Sidebar"
          className="sticky top-4 divide-y divide-gray-300"
        >
          <div className="space-y-1 pb-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="font-regular group flex items-center rounded-md px-2 py-3.5 text-sm hover:scale-110 hover:bg-gray-100"
                aria-current={item.current ? "page" : undefined}
              >
                <item.icon
                  className="-ml-1 mr-3 h-6 w-6 flex-shrink-0 "
                  aria-hidden="true"
                />
                <span className="hidden truncate font-[400] xl:flex">
                  {item.name}
                </span>
              </Link>
            ))}
            <div className="font-regular  group  flex items-center rounded-md px-1 py-3.5 text-sm hover:scale-110 hover:bg-gray-100">
              <img
                className="mr-3 h-6 w-6 flex-shrink-0 rounded-full"
                src="https://images.unsplash.com/photo-1701839339549-c19ef662105f?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <span className="hidden truncate font-[400] xl:flex">
                Profile
              </span>
            </div>
          </div>
        </nav>
        <div className="mt-44">
          <FaThreads className=" ml-1 h-6 w-6 " />
          <div className="flex">
            <Bars3Icon className=" ml-1 mt-4 h-6 w-6" />
            <span className="ml-2 mt-4 hidden truncate font-[400] xl:inline">
              More
            </span>
          </div>
        </div>
      </div>
    </div>
        </>
     );
}
 
export default Sidebar;