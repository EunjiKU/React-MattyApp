import React, { useEffect, useState } from "react";
import { ezStoryApi } from "../../api/index";
// ✅ swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import "swiper/css";

const EzStoryUi = () => {
  const [ezStoryItem, setEzStoryItem] = useState([]);

  useEffect(() => {
    ezStoryApi()
      .then((response) => {
        console.log("이지스토리 성공");
        setEzStoryItem(response.data);
      })
      .catch((err) => console.log("이지스토리 에러"));
  }, []);

  return (
    <section className="ezstory-sec">
      <h3 className="sec-tit">이지스토리</h3>
      <Swiper
        className="ezSwiper"
        slidesPerView={1}
        pagination={true}
        modules={[Pagination]}
      >
        {
          ezStoryItem.map((item) => {
            return (<SwiperSlide key={item.IDX}>
              <a href={item.LinkUrl}>
                <div className="img-box">
                  <img src={item.ThumbFileUrl} alt="" />
                </div>
                <p className="tit">{item.TITLE}</p>
              </a>
            </SwiperSlide>)
          })
        }
        
      </Swiper>
    </section>
  );
};

export default EzStoryUi;
