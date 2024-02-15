import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Swiperr() {
  return (
    <div>
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src="img/1.png"
              alt="Description"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: "70%",
                left: "72%",
                transform: "translate(-25%, -70%)",
                fontSize: "10rem",
                fontWeight: "bold",
                textAlign: "right",
                color: "#395c74ed",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                transition: "color 0.5s ease, transform 0.5s ease",
              }}
            >
              <p style={{ fontSize: "6vw", margin: 0 }}>
                We prioritize your peace of mind
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src="img/2.png"
              alt="Description"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: "60%",
                left: "60%",

                transform: "translate(-20%, -50%)",
                fontSize: "10rem",
                fontWeight: "bold",
                textAlign: "right",
                color: "#395c74ed",
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
                transition: "color 0.5s ease, transform 0.5s ease",
              }}
            >
              <p style={{ fontSize: "6vw", margin: 0 }}>
                We empower our drivers with the freedom
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src="img/3.png"
              alt="Description"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: "87%",
                transform: "translate(5%, -30%)",
                fontSize: "10rem",
                fontWeight: "bold",
                textAlign: "center",
                color: "#395c74ed",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                transition: "color 0.5s ease, transform 0.5s ease",
              }}
            >
              <p style={{ fontSize: "3.5vw", margin: 0 }}>
                We understand the importance of safeguarding your valuable
                assets
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}


