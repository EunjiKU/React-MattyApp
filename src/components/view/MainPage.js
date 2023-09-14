import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from 'react-redux'
import "swiper/css";
import { ezStoryApi } from "../../api/index";
import store from '../../store/index'

const MainPage = () => {
  console.log("하");
  console.log(store.getState().user.userId);
     



  // console.log("잉");
  // const user = useSelector(state => state.user.userId);
  // console.log('userselect', user)
  // console.log("잉");
  useEffect(() => {
    ezStoryApi()
      .then((response) => {
        console.log("이지스토리");
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default MainPage;
