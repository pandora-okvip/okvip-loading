import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/pages/component/Header/Header.module.css";
import logo from "../../../../public/images/logo.png";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div>
            <div className={styles.main_menu}>
              <div>
                <Image
                  className={styles.logo}
                  src={logo}
                  width={180}
                  height={63}
                />
              </div>
              <div className={styles.navi}>
                <Link className={styles.link_item} href="">
                  Bắn Cá
                </Link>
                <Link className={styles.link_item} href="">
                  Casino
                </Link>
                <Link className={styles.link_item} href="">
                  Đá Gà
                </Link>
                <Link className={styles.link_item} href="">
                  Khuyến Mãi
                </Link>
                <Link className={styles.link_item} href="">
                  Thể Thao
                </Link>
                <Link className={styles.link_item} href="">
                  Tin Tức
                </Link>
                <Link className={styles.link_item} href="">
                  World Cup
                </Link>
                <Link className={styles.link_item} href="">
                  Xổ Số Lô Đề
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
