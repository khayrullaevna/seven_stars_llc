// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      effect="fade" // Soften transition effect
      loop={true} // Enable loop mode
      speed={2000} // Duration of transition (in milliseconds)
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >

      <SwiperSlide>
        <div style={{ position: "relative", width: "100%", height: "auto" }}>
          <video
            autoPlay={true}
            muted
            loop
            width="100%"
            height="auto"
            style={{ width: "100%" }}
          >
            <source src="vid/ss-v-5.mp4" />
          </video>
          <div
            style={{
              position: "absolute",
              top: "60%",
              left: "80%",
              right: "-5%",
              transform: "translate(-50%, -50%)",
              color: "#0b283c",
              fontSize: "10rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "5vw", margin: 0 }}>
              "We prioritize your peace of mind"
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={{ position: "relative", width: "100%", height: "auto" }}>
          <video
            autoPlay={true}
            muted
            loop
            width="100%"
            height="auto"
            style={{ width: "100%" }}
          >
            <source src="vid/ss-v-2.mp4" />
          </video>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: '20%',
              right: "50%",
              transform: "translate(-50%, -50%)",
              color: "#0b283c",
              fontSize: "10rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "5vw", margin: 0 }}>
              "We empower our drivers with the freedom"
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={{ position: "relative", width: "100%", height: "auto" }}>
          <video
            autoPlay={true}
            muted
            loop
            width="100%"
            height="auto"
            style={{ width: "100%" }}
          >
            <source src="vid/ss-v-3.mp4" />
          </video>
          <div
            style={{
              position: "absolute",
              top: "87%",
              left: "50%",
              right: "-45%",
              transform: "translate(-50%, -50%)",
              color: "#0b283c",
              fontSize: "8rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "3vw", margin: 0 }}>
              "We understand the importance of safeguarding your valuable assets"
            </p>
          </div>
        </div>
      </SwiperSlide>


    </Swiper>
  );
};
