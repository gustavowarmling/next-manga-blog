import { useWindowSize } from '../../hooks/useWindowSize';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, {
  Pagination,Navigation
} from 'swiper';

import { Card } from '../../components/Card'
import { CarouselTitle } from './styles';

SwiperCore.use([Pagination,Navigation]);

type CarouselProps = {
  title: string; 
 }

export function Carousel({ title }: CarouselProps) {
  const { width } = useWindowSize();

  return(
    <>
      <CarouselTitle>{title}</CarouselTitle>
      <Swiper  
        slidesPerView={width ? width/300 : 5.5}    
        spaceBetween={30} 
        loop={true} 
        navigation={false} 
        className="mySwiper"
        >
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
    </>
  )
}