import TitleBlock from "../../components/titleBlock/titleBlock";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrow from '../../image/Arrow 2.svg'
import arrow2 from '../../image/Arrow 4.svg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SkillsBlock from "../../UI/skillsBlock/skillsblock";

function Skils() {

  return (
    <div className="skils about-bg">
      <div className="conteiner">
        <TitleBlock titlebg={'</услуги>'}  title={'УСЛУГИ'}/>
        <div className="slider-blok">
          <div className="slider">
            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{ 
                clickable: true ,
                el: ".pagination"
              }}
              navigation={{
                nextEl: ".slider-navigete-righst",
                prevEl: ".slider-navigete-left"
              }}
              autoplay={{
                delay: 3000, //Slider per _ ms
                disableOnInteraction: true,
              }}
              speed={1000}
              spaceBetween={50}
              slidesPerView={3}
              initialSlide={1}
              centeredSlides={true}
              allowTouchMove={false}
            >
              <SwiperSlide>
                <SkillsBlock/>
              </SwiperSlide>
              <SwiperSlide>
                <SkillsBlock/>
              </SwiperSlide>
              <SwiperSlide>
                <SkillsBlock/>
              </SwiperSlide>
              <SwiperSlide>
                <SkillsBlock/>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="slider-navigete">
            <div className="slider-navigete-left slider-navigete-btn">
              <img src={arrow} alt="" />
              <span>Туда</span>
            </div>
            <div className="pagination"></div>
            <div className="slider-navigete-righst slider-navigete-btn">
              <span>Сюда</span>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className="skills-help">
          <div>Если не туда и не сюда, то вниз</div>
          <img src={arrow2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skils;
