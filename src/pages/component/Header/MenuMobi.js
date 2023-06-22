import React from "react";
import logo from "../../public/images/logo.png";
import navbar from "../../public/images/icon_navbar.png";
import banca from "../../public/images/icon_banca.png";
import casino from "../../public/images/icon_casino.png";
import daga from "../../public/images/icon_daga.png";
import khuyenmai from "../../public/images/icon_khuyenmai.png";
import thethao from "../../public/images/icon_thethao.png";
import tintuc from "../../public/images/icon_tintuc.png";
import worldcup from "../../public/images/icon_worldcup.png";
import xoso from "../../public/images/icon_xoso.png";
import Image from "next/image";
import Home from "./home";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black ">
        <div className="max-w-[1200px] m-auto relative">
          {/* <div className="container px-4 left-0 top-0  flex flex-wrap items-center justify-between bg-black"> */}
          <div className="container px-4 left-0 top-0  flex flex-wrap items-center justify-between bg-black ">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <div
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <Image src={navbar} width={94} height={94} alt="" />
              </div>
              <Image src={logo} alt="" />
            </div>
            <div
              className={
                "lg:flex flex-grow items-center " +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className=" flex flex-col lg:flex-row list-none lg:ml-auto ">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href=""
                  >
                    {/* <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i> */}
                    <Image src={banca} width={36} height={36} />
                    <span className="ml-2">Bắn Cá</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href=""
                  >
                    {/* <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i> */}
                    <Image src={casino} width={36} height={36} />
                    <span className="ml-2">Casino</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href=""
                  >
                    {/* <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i> */}
                    <Image src={daga} width={36} height={36} />
                    <span className="ml-2">Đá Gà</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href=""
                  >
                    {/* <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i> */}
                    <Image src={khuyenmai} width={36} height={36} />
                    <span className="ml-2">Khuyến Mãi</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href=""
                  >
                    {/* <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i> */}
                    <Image src={thethao} width={36} height={36} />
                    <span className="ml-2">Thể Thao</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href=""
                  >
                    {/* <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i> */}
                    <Image src={tintuc} width={36} height={36} />
                    <span className="ml-2">Tin Tức</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href=""
                  >
                    {/* <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i> */}
                    <Image src={worldcup} width={36} height={36} />
                    <span className="ml-2">World Cup</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href=""
                  >
                    {/* <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i> */}
                    <Image src={xoso} width={36} height={36} />
                    <span className="ml-2">Xổ Số Lô Đề</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Home />
    </>
  );
}
