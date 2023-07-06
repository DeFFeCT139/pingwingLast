import style from './css/sliderInfoBlock.module.css'

function SliderInfoBlock({props}) {
    return (
      <div className={style.sliderInfoblock}>
        {props}
      </div>
    );
  }
  
  export default SliderInfoBlock;