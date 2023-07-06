import BottonW from '../../../../UI/bottonW/bottonW';
import style from './css/sliderInfo.module.css'
import SliderInfoBlock from '../../UI/sliderInfoBlock/sliderInfoBlock';
import { useSelector } from 'react-redux';

function SliderInfo() {
    const item = useSelector((state) => state.item.info)
    return (
      <div className={style.sliderInfo}>
        <div className={style.sliderInfoItem}>
            <div className={style.sliderInfoDublName}>{item.title}</div>
            <div className={style.sliderInfoInner}>
                <div className={style.sliderInfoleft}>
                    <div className={style.sliderInfoName}>{item.title}</div>
                    <div className={style.sliderInfoDecs}>{item.desc}</div>
                    <div className={style.sliderInfoPluses}>
                        {item.btns.map((item, index) => 
                            <SliderInfoBlock key={index} props={item}/>
                        )}
                    </div>
                    <div id='pin1' className={style.sliderInfobtn}>
                        <BottonW block={item.btn}/>
                    </div>
                </div>
                <div className={style.sliderInforight}>
                    <img src={item.img} className={style.sliderInfoImg} alt="" />
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default SliderInfo;