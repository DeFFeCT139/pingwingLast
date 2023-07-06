import SliderItem from '../../UI/sliderItem/sliderItem';
import style from './css/slider.module.css'
import site from '../../img/svg/image 3 (2).svg'
import app from '../../img/svg/3 1 (2).svg'
import bot from '../../img/svg/image 4 (2).svg'
import smm from '../../img/svg/Frame 9.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useLang } from '../../../../UI/useLang/useLang';

function Slider() {
    let image = [site, app, bot, smm]
    let lang = useLang('slider')
    return (
      <div className={style.slider}>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        >
          {lang.map(item =>
            <SwiperSlide key={item.id}>
              <SliderItem image={image} content={item}/>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    );
  }
  
  export default Slider;