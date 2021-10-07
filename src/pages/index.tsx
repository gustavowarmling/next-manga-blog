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

        <Swiper slidesPerView={6.4}  spaceBetween={30} loop={true} navigation={false} className="mySwiper">
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
