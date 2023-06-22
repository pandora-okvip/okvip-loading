import React , {useState} from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

import logomobi from "../../../../public/images/logo.png";
// import { SearchOutlined } from "@ant-design/icons";
// import { Button, Space, Tooltip } from "antd";
import okvip from "../../../../public/images/okvip.png";
import styles from "@/pages/component/Link/Link.module.css";
import Head from "next/head";
import logos from "../../../../public/images/logo.png";
import back from "../../../../public/images/icon_back.png";
import navbar from "../../../../public/images/icon_navbar.png";

import banca from "../../../../public/images/icon_banca.png";
import casino from "../../../../public/images/icon_casino.png";
import daga from "../../../../public/images/icon_daga.png";
import khuyenmai from "../../../../public/images/icon_khuyenmai.png";
import thethao from "../../../../public/images/icon_thethao.png";
import tintuc from "../../../../public/images/icon_tintuc.png";
import worldcup from "../../../../public/images/icon_worldcup.png";
import xoso from "../../../../public/images/icon_xoso.png";



const Link = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=2" />
        <link
          rel="styleSheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className={styles.wrapper}>
      <div className="relative top-0">
        <nav className="fixed max-w-[1920px]	mb-24 w-full mx-auto">
        <div className="mx-auto lg:px-8 width_mobile ">
          <div className="flex items-center justify-between h-26 mx-auto w-full max-w-[1200px] bg_mobile">
            <div className="w-[1200px]  mx-auto flex justify-between items-center">
              <div className="w-full  flex justify-between h-16 pl-4 pr-4 items-center py-2 bg-black img_logo">
                <span className="sr-only">Open main menu</span>
                <div className="-mr-2 flex lg:hidden ">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className=" inline-flex items-center justify-center p-2 rounded-md "
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                      <Image className="absolute icon_navbar"  src={navbar} width={40} height={40} alt="" />
                    ) : (
                      <Image
                        className=" right-0 icon_back z-50"
                        src={back}
                        width={40}
                        height={40}
                        alt=""
                      />
                    )}
                  </button>
                </div> 
                <div className="flex-shrink-0">
                  <Image className="absolute left-0 logo_mobi top-1 p-1" src={logos} width={150} alt="" />
                </div>
              </div>
              <div className="hidden lg:block">
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
            <div className="lg:hidden flex" id="mobile-menu">
            
              <div
                ref={ref}
                className=" px-2 pt-2 pb-3 space-y-1 sm:px-3 w-[230px] bg-black h-[100vh] menu_mobile"
              >
                                
                <Image className="icon_logos left-0 mr-0 top-0 p-4" src={logos} width={150} height={60} alt="" />
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
        </div>
        <div className={styles.container}>
        
        <div>
          <Image src={logomobi} width={250} height={156} className="m-auto pt-8 dm:block lg:hidden"/>
        </div>
          <div className={styles.search}>
            <div className={styles.search_form}>
              <input
                type="text"
                placeholder="Xác Minh Trang Web OKVIP"
                className={styles.input}
              />
              <button className={styles.btnSearch} type="submit">
                <i class="fa fa-search"></i> Tìm Kiếm
              </button>
            </div>
          </div>
          <div></div>
          <div className={styles.LinkContainer}>
            <div className={styles.link_item_container}>
              <div className={styles.link_item}>
                <span className={styles.sp1}>1</span>
                <a href="" target="_blank">
                  LINK 1
                </a>
                <span className={styles.sp2}>
                  <a href="">TRUY CẬP</a>
                </span>
              </div>
            </div>
            <div className={styles.link_item_container}>
              <div className={styles.link_item}>
                <span className={styles.sp1}>2</span>
                <a href="" target="_blank">
                  LINK 2
                </a>
                <span className={styles.sp2}>
                  <a href="">TRUY CẬP</a>
                </span>
              </div>
            </div>
            <div className={styles.link_item_container}>
              <div className={styles.link_item}>
                <span className={styles.sp1}>3</span>
                <a href="" target="_blank">
                  LINK 3
                </a>
                <span className={styles.sp2}>
                  <a href="">TRUY CẬP</a>
                </span>
              </div>
            </div>
            <div className={styles.link_item_container}>
              <div className={styles.link_item}>
                <span className={styles.sp1}>4</span>
                <a href="" target="_blank">
                  LINK 4
                </a>
                <span className={styles.sp2}>
                  <a href="">TRUY CẬP</a>
                </span>
              </div>
            </div>
            <div className={styles.link_item_container}>
              <div className={styles.link_item}>
                <span className={styles.sp1}>5</span>
                <a href="" target="_blank">
                  LINK 5
                </a>
                <span className={styles.sp2}>
                  <a href="">TRUY CẬP</a>
                </span>
              </div>
            </div>
            <div className={styles.link_item_container}>
              <div className={styles.link_item}>
                <span className={styles.sp1}>6</span>
                <a href="" target="_blank">
                  LINK 6
                </a>
                <span className={styles.sp2}>
                  <a href="">TRUY CẬP</a>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.okvip}>
            <Image src={okvip} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Link;
