import style from './css/myteam.module.css'
import ros1 from './img/den/Frame 31.svg'
import den from './img/den/denis 2.svg'
import ros2 from './img/vag/Frame 29.svg'
import vag from './img/vag/vag.svg'
import ros3 from './img/oli/Frame 30.svg'
import oli from './img/oli/olivia 4.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/mousewheel';
 
function MyTeam() {     
 
  return(
      <div className={style.myTeam}>
        <Swiper
        className={style.myTeamSlider}
        modules={[FreeMode, Mousewheel]}
        mousewheel={true}
        freeMode={true}
        slidesPerView={1}
        >
            <SwiperSlide className={style.myTeamSliderItem}></SwiperSlide>
            <SwiperSlide className={style.myTeamSliderItem}>
                <div className={style.fackeBlock}>
                    <div id='her' className={style.myTeamItems}>
                        <div className={style.myTeamItem}>
                            <div className={style.myTeamItemInner}>
                                <img src={ros2} alt="" />
                                <div className={style.myTeamItemBackFon + ' ' + style.vag}>
                                    <img src={vag} alt=""  className={style.myTeamItemItem} />
                                    <div className={style.myTeamItemBackFonBorder}></div>
                                </div>
                            </div>
                            <div className={style.myTeamItemInfo}>
                                <div className={style.myTeamItemInfoTitle}>Вагинак Месропян</div>
                                <div className={style.myTeamItemInfoDesc}>Исполнительный директор. UI/UX Дизайнер.</div>
                            </div>
                        </div>
                        <div className={style.myTeamItem + ' ' + style.myTeamItemOli}>
                            <div className={style.myTeamItemInner}>
                                <img src={ros3} alt="" />
                                <div className={style.myTeamItemBackFon + ' ' + style.oli}>
                                    <img src={oli} alt=""  className={style.myTeamItemItem} />
                                    <div className={style.myTeamItemBackFonBorder}></div>
                                </div>
                            </div>
                            <div className={style.myTeamItemInfo}>
                                <div className={style.myTeamItemInfoTitle}>Оливия Тринчи</div>
                                <div className={style.myTeamItemInfoDesc}>Глава отдела маркетинга</div>
                            </div>
                        </div>
                        <div className={style.myTeamItem + ' ' + style.myTeamItemDen}>
                            <div className={style.myTeamItemInner}>
                                <img src={ros1} alt="" />
                                <div className={style.myTeamItemBackFon + ' ' + style.den}>
                                    <img src={den} alt="" className={style.myTeamItemItem} />
                                    <div className={style.myTeamItemBackFonBorder}></div>
                                </div>
                            </div>
                            <div className={style.myTeamItemInfo}>
                                <div className={style.myTeamItemInfoTitle}>Денис Ходак</div>
                                <div className={style.myTeamItemInfoDesc}>Глава отдела разработки</div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.myTeamSliderItem}>
                <div className={style.fackeBlock}></div>
            </SwiperSlide>
            <SwiperSlide className={style.myTeamSliderItem}>
                <div className={style.fackeBlock}></div>
            </SwiperSlide>
        </Swiper>
      </div>
  )
}

export default MyTeam;