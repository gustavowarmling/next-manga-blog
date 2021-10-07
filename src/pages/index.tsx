import Card from '../components/Card'
import { Container }  from './styles';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

export default function Home() {
  return (
    <>
      <Container>
        <h1>Hot</h1>

        <Swiper  
          slidesPerView={1.8}  
          spaceBetween={30} 
          loop={true} 
          navigation={false} 
          className="mySwiper" 
          breakpoints={{
            "600": {
              "slidesPerView": 2,
            },
            "800": {
              "slidesPerView": 3,
            },
            "1100": {
              "slidesPerView": 4,
            },
            "1300": {
              "slidesPerView": 5.2,
            }
          }}>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          
          <SwiperSlide>
            <Card />
          </SwiperSlide>

          <SwiperSlide>
            <Card />
          </SwiperSlide>

          <SwiperSlide>
            <Card />
          </SwiperSlide>

          <SwiperSlide>
            <Card />
          </SwiperSlide>

          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  )
}
