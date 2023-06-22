import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Home from "./home";
import logos from "../../public/images/logo.png";
import back from "../../public/images/icon_back.png";
import navbar from "../../public/images/icon_navbar.png";

import banca from "../../public/images/icon_banca.png";
import casino from "../../public/images/icon_casino.png";
import daga from "../../public/images/icon_daga.png";
import khuyenmai from "../../public/images/icon_khuyenmai.png";
import thethao from "../../public/images/icon_thethao.png";
import tintuc from "../../public/images/icon_tintuc.png";
import worldcup from "../../public/images/icon_worldcup.png";
import xoso from "../../public/images/icon_xoso.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="absolute max-w-[1920px]	mb-24 w-full mx-auto">
        <div className="mx-auto  sm:px-6 lg:px-8 width_mobile ">
          <div className="flex items-center justify-between h-26 mx-auto w-full max-w-[1200px] bg_mobile">
            <div className="w-[1200px] mx-auto flex justify-between items-center">
              <div className="w-full flex justify-center items-center py-2 bg-black img_logo">
                <span className="sr-only">Open main menu</span>
                <div className="-mr-2 flex md:hidden ">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className=" inline-flex items-center justify-center p-2 rounded-md "
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                      <Image className="absolute left-1"  src={navbar} width={40} height={40} alt="" />
                    ) : (
                      <Image
                        className=" absolute right-[0rem]  top-[0.85rem]"
                        src={back}
                        width={40}
                        height={40}
                        alt=""
                      />
                    )}
                  </button>
                </div>
                <div className="flex-shrink-0">
                  <Image className="logo_mobi mr-2" src={logos} width={150} alt="" />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-[-50rem] flex justify-between  items-baseline space-x-4">
                  <div>
                    <a
                      href="#"
                      className="text-white hover:text-slate-300 block  py-2  rounded-md text-[1.3rem] font-medium"
                    >
                      Bắn Cá
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-white hover:text-slate-300 block  py-2 rounded-md text-[1.3rem] font-medium"
                    >
                      Casino
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-white hover:text-slate-300 block  py-2 rounded-md text-[1.3rem] font-medium"
                    >
                      Đá Gà
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-white hover:text-slate-300 block  py-2 rounded-md text-[1.3rem] font-medium"
                    >
                      Khuyến Mãi
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-white hover:text-slate-300 block  py-2 rounded-md text-[1.3rem] font-medium"
                    >
                      Thể Thao
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-white hover:text-slate-300 block  py-2 rounded-md text-[1.3rem] font-medium"
                    >
                      Tin Tức
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-white hover:text-slate-300 block  py-2 rounded-md text-[1.3rem] font-medium"
                    >
                      World Cup
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-white hover:text-slate-300 block  py-2 rounded-md text-[1.3rem] font-medium"
                    >
                      Xổ Số Lô Đề
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <Image src={navbar} width={40} height={40} alt="" />
                ) : (
                  <Image src={back} width={40} height={40} alt="" />
                )}
              </button>
            </div> */}
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-[230px] bg-black h-[100vh]"
              >
                <div className="flex justify-start item-midle mt-2">
                  <Image  className="h-6 w-6 mt-2" src={banca} width={30} heidth={25} />
                  <a
                    href="#"
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-[23px]  font-medium"
                  >
                    Bắn Cá
                  </a>
                </div>

                <div className="flex justify-start items-center  mt-2">
                  <Image 
                  className="h-6 w-6 mt-2" 
                  src={casino} width={30} heidth={25} />
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-[23px]  font-medium"
                  >
                    Casino
                  </a>
                </div>

                <div className="flex justify-start  mt-2">
                  <Image
                    className="h-6 w-6 mt-2"
                    src={daga}
                    width={30}
                    heidth={25}
                  />
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-[23px]  font-medium"
                  >
                    Đá Gà
                  </a>
                </div>

                <div className="flex justify-start  mt-2">
                  <Image
                     className="h-6 w-6 mt-2"
                    src={khuyenmai}
                    width={30}
                    heidth={25}
                  />
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-[23px]  font-medium"
                  >
                    Khuyến Mãi
                  </a>
                </div>

                <div className="flex justify-start  mt-2">
                  <Image
                    className="h-6 w-6 mt-2"
                    src={thethao}
                    width={30}
                    heidth={25}
                  />
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-[23px]  font-medium"
                  >
                    Thể Thao
                  </a>
                </div>
                <div className="flex justify-start  mt-2">
                  <Image
                     className="h-6 w-6 mt-2"
                    src={tintuc}
                    width={30}
                    heidth={25}
                  />
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-[23px]  font-medium"
                  >
                    Tin Tức
                  </a>
                </div>
                <div className="flex justify-start  mt-2">
                  <Image
                   className="h-6 w-6 mt-2"
                    src={worldcup}
                    width={30}
                    heidth={25}
                  />
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-[23px] font-medium"
                  >
                    World Cup
                  </a>
                </div>
                <div className="flex justify-start  mt-2">
                  <Image
                    className="h-6 w-6 mt-2"
                    src={xoso}
                    width={30}
                    heidth={25}
                  />
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-[23px]  font-medium"
                  >
                    Xổ Số Lô Đề
                  </a>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <main>
        <div className="max-w-full mx-auto">
          <Home />
        </div>
      </main>
    </div>
  );
}

export default Nav;
