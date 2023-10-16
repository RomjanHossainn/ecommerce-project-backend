import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {


  

  const [toggle,setToggle] = useState(false)
  const [logged,setLogged] = useState(false)
    
  return (
    <div>
      <nav className="bg-white dark:bg-gray-800  shadow py-4 ">
        <div className=" px-6 lg:px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className=" flex  items-center">
              <a className="flex-shrink-0 font-semibold text-2xl" href="/">
                BODU BRAND
              </a>
              <div className="hidden lg:block">
                <div className="flex items-baseline ml-3 xl:ml-10 space-x-4">
                  <NavLink
                    to="/"
                    className="hover:text-gray-400  text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    href="/#"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/customerreview"
                    className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    href="/#"
                  >
                    Customer Reveiw
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="hover:text-gray-400  text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    href="/#"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="hover:text-gray-400  text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    href="/#"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/addtocard"
                    className="hover:text-gray-400  text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    href="/#"
                  >
                    Add To Card
                  </NavLink>
                  <NavLink
                    to="/admindashboard"
                    className="hover:text-gray-400  text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    href="/#"
                  >
                    Admin Dashboard
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="flex items-center ml-4 md:ml-6">
                <div className="relative ml-3">
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        onClick={() => setLogged(!logged)}
                        type="button"
                        className="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                        id="options-menu"
                      >
                        <svg
                          width="26"
                          fill="currentColor"
                          height="26"
                          className="text-gray-800"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className={logged ? "block" : "hidden"}>
                      <div className="absolute  right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1 "
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <NavLink
                            href="#"
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>Settings</span>
                            </span>
                          </NavLink>
                          <NavLink
                            href="#"
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900  dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>Account</span>
                            </span>
                          </NavLink>
                          <NavLink
                            href="#"
                            className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>Logout</span>
                            </span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex -mr-2 lg:hidden">
              <button
                onClick={() => setToggle(!toggle)}
                className="text-gray-800 dark:text-white hover:text-gray-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={toggle ? "block transition-all" : "hidden lg:hidden"}>
          <div className="px-5  pt-2 pb-3 space-y-1 sm:px-5 lg:hidden">
            <NavLink
              className=" hover:text-gray-400 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Home
            </NavLink>
            <NavLink
              className=" hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Customer Reveiw
            </NavLink>
            <NavLink
              className=" hover:text-gray-400 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Login
            </NavLink>
            <NavLink
              className=" hover:text-gray-400 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Register
            </NavLink>
            <NavLink
              className=" hover:text-gray-400 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Add To Card
            </NavLink>
            <NavLink
              className=" hover:text-gray-400 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Admin Dashboard
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
