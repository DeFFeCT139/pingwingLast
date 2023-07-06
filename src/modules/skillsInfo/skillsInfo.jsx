import Slider from './components/slider/slider';
import SliderInfo from './components/sliderInfo/sliderInfo';
import style from './css/skillsInfo.module.css'

function SkillsInfo() {
    return (
      <div className={style.skillsInfo}>
        <div className="conteiner">
          <Slider/>
          <div id="trigger1"></div>
          <SliderInfo/>
        </div>
      </div>
    );
  }
  
  export default SkillsInfo;