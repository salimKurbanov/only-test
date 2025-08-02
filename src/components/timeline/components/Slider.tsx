import { useState } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderProps } from '../../../types/types';
import Slide from './Slide';
import SliderNav from './SliderNav';
import NavButton from './NavButton';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({ list, sliderRef }: SliderProps) => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="slider_wrapper" ref={sliderRef}>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={'auto'}
                navigation={ {
                        nextEl: '.swiper_button.next',
                        prevEl: '.swiper_button.prev'
                    }}
                grabCursor={true}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.activeIndex)
                }}
            >
                {list?.length &&
                    list.map((el) => (
                        <SwiperSlide key={el.id}>
                            <Slide 
                                title={el.title}
                                description={el.description}
                            />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            
            <SliderNav list={list} activeIndex={activeIndex} sliderRef={sliderRef}/>
            <NavButton direction='next'/>
            <NavButton direction='prev'/>
        </div>
    );
};

export default Slider;