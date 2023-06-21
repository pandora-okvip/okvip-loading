import React from "react";
import { Image } from "next/image";
import { Link } from "next/link";
import logo from "../../../../public/images/logo.png";
const Header = () => {
  return (
    <>
      <div className="flex justify-between h-[104px] bg-black text-white text-xl">
        <div>
          <Link href="/">
            <Image src={logo} />
          </Link>
        </div>
        <div>
          <Link href="#">Bắn Cá</Link>
          <Link href="#">Casino</Link>
          <Link href="#">Đá Gà</Link>
          <Link href="#">Khuyến Mãi</Link>
          <Link href="#">Thể Thao</Link>
          <Link href="#">Tin Tức</Link>
          <Link href="#">World Cup</Link>
          <Link href="#">Xổ Số Lô Đề</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
