import React, { useState } from "react";
import styles from "@/pages/component/Readmore/Readmore.module.css";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import { CaretDownOutlined } from "@ant-design/icons";
function ReadMoreLess() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h3 className={styles.title}>
            okvip - Cá Cược Trực Tuyến Nhận Thưởng Liền Tay
          </h3>
          <div className={styles.logo}>
            <Image src={logo} width={349} height={122} />
          </div>
          <p className={styles.content}>
            Thị trường cá cược online luôn rất rộng mở với nhiều nhà cái hoạt
            động rầm rộ. Tuy nhiên, không phải nhà cái nào cũng đủ uy tín, chất
            lượng để bạn an tâm tận hưởng niềm vui giải trí mà không cần lo
            lắng! OKVIP là một nhà cái cá cược trực tuyến được đánh giá rất tốt
            từ các chuyên gia và người chơi lâu năm. Sân chơi của chúng tôi luôn
            mang đến danh sách những trò chơi nổi bật nhất cùng hàng loạt giải
            thưởng hấp dẫn dành cho người chơi mới! Mời bạn tham khảo thêm thông
            tin bên dưới. Tình trạng link không hiển thị khiến việc truy cập gặp
            khó khăn là vấn nạn thường xuyên của các nhà cái.
          </p>
          {isShowMore && (
            <p className={styles.content}>
              Hiểu được điều này nên đội ngũ kỹ thuật của OKVIP luôn túc trực và
              cập nhật kịp thời để khiến việc truy cập của người chơi trở nên
              đơn giản hơn bao giờ hết! Người chơi hãy truy cập bằng các link
              cập nhật thường xuyên tại trang chủ của chúng tôi để có thể truy
              cập vào OKVIP chính xác nhất! Bên cạnh việc vào nhà cái OKVIP bằng
              các máy tính thì người chơi còn có thể tải các ứng dụng dành cho
              mobile của chúng tôi để có thể truy cập bất cứ lúc nào. Để tải ứng
              dụng trên điện thoại, bạn hãy truy cập vào đường link sẵn có trên
              website và chọn ứng dụng phù hợp với thiết bị dùng hệ điều hành
              Android hoặc iOS tùy vào điện thoại của bạn.
            </p>
          )}

          <button className={styles.readmore} onClick={toggleReadMoreLess}>
            <CaretDownOutlined className={styles.iconReadmore} />
            {isShowMore ? "Thu Gọn" : "Xem Thêm"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ReadMoreLess;
