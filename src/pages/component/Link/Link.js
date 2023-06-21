import React from "react";
import Image from "next/image";
// import { SearchOutlined } from "@ant-design/icons";
// import { Button, Space, Tooltip } from "antd";
import okvip from "../../../../public/images/okvip.png";
import styles from "@/pages/component/Link/Link.module.css";
import Head from "next/head";

const Link = () => {
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
        <div className={styles.container}>
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
