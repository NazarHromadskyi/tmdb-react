import React from 'react';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Slider.module.scss';
import 'swiper/scss';
import { ISlider } from './Slider.types';
import { SliderItem } from './SliderItem';

export const Slider: React.FC<ISlider> = ({ items }) => (
    <div className={styles.slider}>
        <Swiper
            grabCursor
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            loop
            modules={[Autoplay]}
        >
            {
                items.map((item) => (
                    <SwiperSlide key={item.id}>
                        {
                            ({ isActive }) => (
                                <SliderItem item={{ ...item }} className={`${isActive ? 'active' : ''}`} />
                            )
                        }
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
);
