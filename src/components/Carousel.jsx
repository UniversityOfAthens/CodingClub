import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./MyCarousel.css"
import Announcement from './Announcement';


const Carousel = ({announcements}) => {
  return (
    <Box
      sx={{
      width: { xs: "95%", md: "80%" },
      minHeight: "80vh",
      alignSelf: "center",
      display: "flex",
    }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
        slidesPerView={1}
        initialSlide={2}
        loop={true}
        style={{
          '--swiper-navigation-color': '#43C5E7', // Arrow color
          '--swiper-pagination-color': '#43C5E7', // Optional: Change pagination dots color too
        }}
        sx={{margin: "0px", height: "100%"}}
      >
        {announcements.map((announcement, index) => (
          <SwiperSlide key={announcement.id} sx={{margin: "0px", height: "100%"}}>
            <Announcement
              title={announcement.title}
              description={announcement.content}
              date={announcement.date}
              imagesUrl={announcement.imagesUrl}
              key={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
