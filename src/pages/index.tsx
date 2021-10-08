import Card from '../components/Card'
import HorizontalCard from '../components/HorizontalCard';
import Tag from '../ui/Tag';

import { Container, ContentContainer, SectionHeader, Publications, SectionContainer, PopularTagsContainer, PopularTags }  from './styles';

import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, {
  Pagination,Navigation
} from 'swiper';

SwiperCore.use([Pagination,Navigation]);

export default function Home() {
  return (
    <>
      <Container>
        <h2>Hot</h2>
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
              "slidesPerView": 5.1,
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
      
        <ContentContainer>
            <SectionContainer>
              <SectionHeader>
                <h2>New</h2>
                <Link href="">
                  <a>see all</a>
                </Link>
              </SectionHeader>
              <Publications>
                <HorizontalCard />
                <HorizontalCard />
              </Publications>
            </SectionContainer>
            <SectionContainer>
              <SectionHeader>
                <h2>Popular Tags</h2>
                <Link href="">
                  <a>see all</a>
                </Link>
              </SectionHeader>
              <PopularTagsContainer>
                  <PopularTags>
                    <Tag id="teste">
                      Action
                    </Tag>
                    <Tag id="teste">
                      Horror
                    </Tag>
                    <Tag id="teste">
                      Dystopian
                    </Tag>
                    <Tag id="teste">
                      Thriller
                    </Tag>
                    <Tag id="teste">
                      Terror
                    </Tag>
                  </PopularTags>
              </PopularTagsContainer>
            </SectionContainer>
        </ContentContainer>
      </Container>
    </>
  )
}
