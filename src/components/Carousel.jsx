import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({slides}) => {
  return (
    <Box sx={{ width: '80%', mx: 'auto', mt: 4 }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        style={{ paddingBottom: '50px' }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '300px',
                bgcolor: 'primary.light',
                color: 'primary.contrastText',
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Typography variant="h5" gutterBottom>
                {slide.title}
              </Typography>
              <Typography variant="body1">{slide.description}</Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
