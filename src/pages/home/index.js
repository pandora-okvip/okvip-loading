import React, {useState} from "react";

import Header from "../component/Header/Header";
import Link from "../component/Link/Link";
import ReadMore from "../component/Readmore/Readmore";

import Image from "next/image";
import logos from "../../../public/images/logo.png";
import back from "../../../public/images/icon_back.png";
import navbar from "../../../public/images/icon_navbar.png";

import banca from "../../../public/images/icon_banca.png";
import casino from "../../../public/images/icon_casino.png";
import daga from "../../../public/images/icon_daga.png";
import khuyenmai from "../../../public/images/icon_khuyenmai.png";
import thethao from "../../../public/images/icon_thethao.png";
import tintuc from "../../../public/images/icon_tintuc.png";
import worldcup from "../../../public/images/icon_worldcup.png";
import xoso from "../../../public/images/icon_xoso.png";
const Home = () => {

  return (
    <div>
      
      <Link />
      <ReadMore />
    </div>
  );
};

export default Home;
