import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/pages/Home.module.css";
import logo from "../../public/images/logo.png";
import cauthu from "../../public/images/cauthu.png";
import sologain from "../../public/images/1ty.png";
import messager from "../../public/images/message.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Image src={logo} width={350} height={120} alt="OKVip" />
          </div>
          <div className={styles.imgContainer}>
            <Image src={cauthu} width={865} height={540} />
          </div>
          <div className={styles.sologain}>
            <Image
              className={styles.sologain}
              src={sologain}
              width={1000}
              height={265}
            />
          </div>
          <div className={styles.btnthamgiangay}>
            <Link className={styles.btnThamGia} href="./home">
              THAM GIA NGAY
            </Link>
          </div>
          <div>
            <div className={styles.message}>
              <Image src={messager} width={83} height={83} />
              <p>admin@OKVIP.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
