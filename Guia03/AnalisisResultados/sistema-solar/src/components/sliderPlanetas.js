import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

function SliderPlanetas({planetas, planetSelect}){
    return (
        <Swiper>
            {planetas.map((planeta) => (
                <SwiperSlide key={planeta.name}>
                    <img
                        src={planeta.image}
                        alt={planeta.name}
                        onClick={() =>planetSelect(planet)}
                    />           
                </SwiperSlide>
            ))}
        </Swiper>
    )
}