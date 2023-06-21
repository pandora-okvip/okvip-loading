import React from "react";
import Image from "next/image";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
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
            <div
              className={styles.search_form}
              // style={{ margin: "auto", maxWidth: "350px" }}
            >
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
          <div className={styles.okvip}>
            <Image src={okvip} width={1200} height={675} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Link;
