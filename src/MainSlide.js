import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import "./assets/style/style.module.css";

import { Autoplay, EffectFade, Pagination } from "swiper";

const dataList = [
  {
    id: 1,
    URL: "/images/main1.jpg",
    title: "main1",
    text: "트렌드를 선도하는 기업",
    des: "Stay hungry,Stay foolish!",
  },
  {
    id: 2,
    URL: "/images/main2.jpg",
    title: "main2",
    text: "최고로 가는 최선의 길",
    des: "Products for your business",
  },
  {
    id: 3,
    URL: "/images/main3.jpg",
    title: "main3",
    text: "BEST YOUR PARTNER",
    des: "성공적인 비즈니스를 실현해 드립니다.",
  },
];

function MainSlide() {
  const path = process.env.PUBLIC_URL;
  const [data, setData] = useState();
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        Autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
        style={{
          margin: "0 auto",
          width: "97vw",
          height: "80vh",
          zIndex: 9,
        }}
      >
        {dataList.map((img) => (
          <SwiperSlide
            key={img.id}
            style={{
              background: `url(${path + img.URL}) no-repeat 50% / cover`,
            }}
          >
            <div
              style={{
                color: "#fff",
              }}
            >
              <h1
                style={{
                  margin: "300px 0 0",
                  fontSize: 50,
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {img.text}
              </h1>
              <h3
                style={{
                  marginTop: 5,
                  fontSize: 30,
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {img.des}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default MainSlide;
