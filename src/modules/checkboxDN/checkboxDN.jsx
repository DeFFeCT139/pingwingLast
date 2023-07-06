import { useDispatch, useSelector } from 'react-redux';
import style from './css/CheckboxDN.module.css'
import { setDayNight } from '../../features/time/dayNight';

function CheckboxDN() {

  const time = useSelector((state) => state.time.bulean)
  
  const dispach = useDispatch()

  return (
    <div className={style.checkboxDN}>
      <div className={style.toggleWrapper}>
          <input defaultChecked={time} type="checkbox" className={style.dn} id="dn"/>
          <label onClick={()=> dispach(setDayNight(!document.getElementById('dn').checked))} htmlFor="dn" className={style.toggle}>
              <span className={style.toggleHandler}>
                  <span className={style.crater + ' ' + style.crater1}></span>
                  <span className={style.crater + ' ' + style.crater2}></span>
                  <span className={style.crater + ' ' + style.crater3}></span>
              </span>
              <span className={style.star + ' ' +  style.star1}></span>
              <span className={style.star + ' ' +  style.star2}></span>
              <span className={style.star + ' ' +  style.star3}></span>
              <span className={style.star + ' ' +  style.star4}></span>
              <span className={style.star + ' ' +  style.star5}></span>
              <span className={style.star + ' ' +  style.star6}></span>
          </label>
      </div>
    </div>
  );
}

export default CheckboxDN;