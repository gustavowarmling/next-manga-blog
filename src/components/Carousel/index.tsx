import { useWindowSize } from "../../hooks/useWindowSize";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Pagination, Navigation } from "swiper";

import { Card } from "../../components/Card";
import { Container, CarouselTitle } from "./styles";
import { SectionHeader } from "../SectionHeader";

SwiperCore.use([Pagination, Navigation]);

type CarouselProps = {
  title: string;
  pathTo: string;
};

export function Carousel({ title, pathTo }: CarouselProps) {
  const { width } = useWindowSize();

  return (
    <Container>
      <CarouselTitle>
        <SectionHeader title={title} pathTo={pathTo} />
      </CarouselTitle>

      <Swiper
        slidesPerView={width ? width / 300 : 5.5}
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
    </Container>
  );
}
