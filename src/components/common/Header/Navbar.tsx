import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { size } from "lodash";
import {
  ChevronLeft,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "react-feather";
import { useDebounce } from "@/hooks/useDebounce";
import { addSearchData, addSelectedSearchData } from "@/redux/app/appSlice";
import { useGetSearchFoodQuery } from "@/redux/apiSlice/apiSlice";
import { navData } from "@/data/navData";
import { useAppDispatch } from "@/redux/hooks/hooks";
import HighLightMatchText from "./HighLightMatchText";
import useMediaQuery from "@/hooks/useMediaQuery";
import AppButton from "@/helpers/ui/AppButton";

const Navbar = ({ from = "" }) => {
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isMobileScreen = useMediaQuery("(max-width: 768px)");

  // states
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSearchExpand = () => {
    setIsExpanded(true);
  };

  const handleSearchCollapse = () => {
    setIsExpanded(false);
    setSearchQuery("");
  };

  const debouncedSearch = useDebounce(searchQuery, 500);

  // Fetch data only when debouncedSearch changes
  const searchParam = isExpanded && debouncedSearch ? debouncedSearch : "";

  const { data, isLoading } = useGetSearchFoodQuery(searchParam, {
    skip: !searchParam,
  });

  // handle search input change
  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setIsExpanded(value.trim() !== "");
  };

  const handleSearchFoodItem = (data) => {
    setIsExpanded(false);
    dispatch(addSelectedSearchData(data));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAuthRedirect = () => {
    router.push("/login");
  };

  // set search data into the redux state
  useEffect(() => {
    if (size(searchQuery)) {
      dispatch(addSearchData(data));
    }
  }, [searchQuery, data, dispatch]);

  // when search input is expanded, focus on the input field
  useEffect(() => {
    if (isMobileScreen) {
      setTimeout(() => inputRef.current.focus(), 300);
    } else {
      if (isExpanded && inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [isExpanded, isMobileScreen]);

  // scroll down to color change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed ${
        from === "globalProvider" ? "-top-[12px]" : "top-0"
      } left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-secondary shadow-lg" : "bg-transparent mt-12"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src={"/assets/logo.png"}
            alt="logo"
            width={175}
            height={80}
            quality={100}
            priority={true}
            className="w-32 h-28 object-contain"
          />
        </Link>

        {/* Navigation Links for web*/}
        <div className="hidden md:flex items-center gap-8 relative">
          {navData.slice(0, 5).map((item) => (
            <Link
              key={item?.link}
              href={item?.link}
              prefetch={true}
              id="Navbar_animatedUnderline__pGbA3"
              className={`hover:text-brand transition-colors uppercase relative lg:text-16 font-semibold ${
                pathname === item?.link ? "text-brand" : "text-white "
              }`}
            >
              {item?.label}
            </Link>
          ))}
        </div>

        {/* cta button for mobile */}
        <div className="flex gap-3 justify-between items-center md:hidden">
          <div className="relative flex items-center">
            <form>
              <div
                className={`flex items-center transition-all duration-300 ease-in-out rounded-md ${
                  isExpanded ? "w-[300px] bg-white" : "w-10"
                }`}
              >
                <button
                  type="button"
                  onClick={
                    isExpanded ? handleSearchCollapse : handleSearchExpand
                  }
                  className={`p-2 hover:text-gray-600 ${
                    isExpanded ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {isExpanded ? (
                    <ChevronLeft className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Search className="h-6 w-6 text-white" />
                  )}
                </button>
                <div className="relative w-[250px]" ref={dropdownRef}>
                  <input
                    type="text"
                    ref={inputRef}
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Search..."
                    className={`w-full bg-transparent outline-none text-gray-700 ${
                      isExpanded ? "opacity-100 px-2" : "opacity-0 w-0 p-0"
                    } transition-all duration-300 ease-in-out`}
                  />
                  {/* Dropdown Box */}
                  {isExpanded && (
                    <ul className="absolute left-0 top-full mt-1 w-full bg-white border border-gray-300 shadow-lg rounded max-h-60 overflow-y-auto">
                      {isLoading ? (
                        <div className="flex justify-center items-center py-10">
                          <p className="text-brand font-medium">Loading....</p>
                        </div>
                      ) : (
                        data?.items?.map((food) => (
                          <li
                            key={food?.id}
                            role="button"
                            tabIndex={0}
                            onClick={() => handleSearchFoodItem(food)}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {HighLightMatchText(food?.name, searchQuery)}
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </div>
              </div>
            </form>
          </div>
          <button
            onClick={toggleSidebar}
            className={`md:hidden transition-colors ${
              isScrolled ? "text-brand" : "text-white"
            }`}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* cta button for web */}
        <div className="hidden md:flex items-center space-x-2 md:space-x-4">
          <div className="relative flex items-center">
            <form className="relative flex items-center">
              <div
                className={`flex items-center transition-all duration-300 ease-in-out rounded-md ${
                  isExpanded ? "w-[300px] bg-white" : "w-10"
                }`}
              >
                <button
                  type="button"
                  onClick={
                    isExpanded ? handleSearchCollapse : handleSearchExpand
                  }
                  className={`p-2 cursor-pointer hover:text-gray-600 ${
                    isExpanded ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {isExpanded ? (
                    <ChevronLeft className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Search className="h-6 w-6 text-white" />
                  )}
                </button>
                <div className="relative w-[250px]" ref={dropdownRef}>
                  <input
                    type="text"
                    ref={inputRef}
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Search..."
                    className={`w-full bg-transparent outline-none text-gray-700 ${
                      isExpanded ? "opacity-100 px-2" : "opacity-0 w-0 p-0"
                    } transition-all duration-300 ease-in-out`}
                  />
                  {/* Dropdown Box */}
                  {isExpanded && (
                    <ul className="absolute left-0 top-full mt-1 w-full bg-white border border-gray-300 shadow-lg rounded max-h-60 overflow-y-auto">
                      {isLoading ? (
                        <div className="flex justify-center items-center py-10">
                          <p className="text-brand font-medium">Loading....</p>
                        </div>
                      ) : (
                        data?.items?.map((food) => (
                          <li
                            key={food?.id}
                            role="button"
                            tabIndex={0}
                            onClick={() => handleSearchFoodItem(food)}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {HighLightMatchText(food?.name, searchQuery)}
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </div>
              </div>
              {isExpanded && (
                <button
                  type="button"
                  onClick={handleSearchCollapse}
                  className="absolute cursor-pointer right-0 p-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </form>
          </div>
          <div
            className="relative flex flex-col items-center"
            role="button"
            tabIndex={0}
          >
            <span className="absolute flex items-center justify-center -mt-5 ms-6 w-5 h-5 text-12 bg-white text-brand rounded-full ">
              0
            </span>
            <ShoppingCart className="w-5 h-5 text-white cursor-pointer" />
          </div>
          <User
            onClick={() => handleAuthRedirect()}
            className="w-5 h-5 text-white cursor-pointer"
          />

          <AppButton title="VISIT SHOP" link="/products" />
        </div>

        {/* nav links for mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4">
            <button onClick={toggleSidebar} className="text-brand mb-8">
              <X size={24} />
            </button>
            <div className="flex flex-col gap-4">
              {navData?.map((item) => (
                <Link
                  key={item?.label}
                  href={item?.link}
                  id="Navbar_animatedUnderline__pGbA3"
                  className={`hover:text-brand transition-colors ${
                    pathname === item?.link ? "text-brand" : "text-gray-800"
                  }`}
                  onClick={toggleSidebar}
                >
                  {item?.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
