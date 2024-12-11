import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./MyCarousel.css"
import ReactMarkdown from "react-markdown";


const Carousel = ({slides}) => {
  return (
    <Box
      sx={{
      width: { xs: "95%", md: "80%" },
      alignSelf: "center",
      display: "flex",
    }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
        loop={true}
        style={{
          '--swiper-navigation-color': '#43C5E7', // Arrow color
          '--swiper-pagination-color': '#43C5E7', // Optional: Change pagination dots color too
        }}
        sx={{margin: "0px"}}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '75vh',
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center",
                fontSize: "1.25em"
              }}
            >
              <ReactMarkdown
                components={{
                    img: ({ node, ...props }) => (
                    <img
                        {...props}
                        style={{
                        maxWidth: "100%", // Make it responsive
                        height: "auto", // Maintain aspect ratio
                        objectFit: "cover", // Ensure the image fits the container
                        borderRadius: "8px", // Optional styling
                        }}
                        alt={props.alt}
                    />
                    ),
                    a: ({ node, ...props }) => (
                        <a {...props} target="_blank" rel="noopener noreferrer">
                          {props.children}
                        </a>
                    ),
                }}
                >{slide.description}
              </ReactMarkdown>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
