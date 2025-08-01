import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LIST } from '../../../constants/constants';
import Slide from './Slide';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {

    return (
        <div className='slider'>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={80}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {LIST[1]?.length &&
                    LIST[1].map((el) => (
                        <SwiperSlide key={el.id}>
                            <Slide 
                                title={el.title}
                                description={el.description}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Slider;