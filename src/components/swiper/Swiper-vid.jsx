import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';

import ReactPlayer from 'react-player';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const VideoSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
    >

    
<SwiperSlide>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <ReactPlayer
            url="vid/ss-v-5.webm"
            playing={true}
            loop
            muted
            width="100%"
            height="100%"
          />
          <div style={{
            position: 'absolute',
            top: '55%',
            left: '75%',
            transform: 'translate(-35%, -50%)',
            color: '#0b283c',
            fontSize: '10rem',
            fontWeight: 'bold',
            textAlign: 'right',
          }}>
            <p style={{ fontSize: '5vw', margin: 0 }}>
              We prioritize your peace of mind
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <ReactPlayer
            url="vid/ss-v-2.webm"
            playing={true}
            loop
            muted
            width="100%"
            height="100%"
          />
          <div style={{
            position: 'absolute',
            top: '60%',
            left: '25%',
            right: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#0b283c',
            fontSize: '10rem',
            fontWeight: 'bold',
            textAlign: 'left',
          }}>
            <p style={{ fontSize: '5vw', margin: 0 }}>
            We empower our drivers with the freedom
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <ReactPlayer
            url="vid/ss-v-3.webm"
            playing={true}
            loop
            muted
            width="100%"
            height="100%"
          />
          <div style={{
            position: 'absolute',
            top: '87%',
            transform: 'translate(5%, -50%)',
            color: '#0b283c',
            fontSize: '10rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '3.5vw', margin: 0 }}>
            We understand the importance of sateguarding your valuable assets
            </p>
          </div>
        </div>
      </SwiperSlide>
     



    </Swiper>
  );
};

export default VideoSlider;
