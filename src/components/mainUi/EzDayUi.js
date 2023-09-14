/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
// ✅ swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { ezDayApi } from '../../api/index';

const EzDayUi = () => {
  const [ezDayItem, SetEzDayItem] = useState([]);
  const userImgUrl = useSelector(state => state.user.userImgUrl);
  console.log('userselect', userImgUrl)

  useEffect(() => {
    ezDayApi()
      .then(response => {
        SetEzDayItem(response.data);
        console.log(response.data);
        console.log("기념일(이지데이/생일자) 성공");
      })
      .catch(err => console.log("기념일(이지데이/생일자 에러"))
  }, [])

  return (
    <section className="ezday-sec">
      <h3 className="sec-tit">기념일</h3>
      <div className="tab-area">
        <button className="tab on">이지데이</button>
        <button className="tab">생일자</button>
      </div>
      <Swiper
        className="daySwiper"
        slidesPerView={"auto"}
      >
        {
          ezDayItem.map(item => {
            return (
              <SwiperSlide key={item.E_IDX}>
                <Link to={`/user/${item.E_IDX}`}>
                  <div className="img-box">
                    <img src={`${userImgUrl}${item.EMAIL}`} />
                  </div>
                  <div className="txt-box">
                    <p className="name">{item.NAME}</p>
                    <p className="day">{item.easyday}</p>
                  </div>
                </Link>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default EzDayUi;