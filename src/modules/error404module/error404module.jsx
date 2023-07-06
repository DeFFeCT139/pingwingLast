import { Link } from 'react-router-dom';
import style from './css/error404.module.css'
import astr from './image/astronaut.svg'
import error from './image/404.svg'

function Error404Module() {
    console.log(style)
    return (
      <div className={style.Error404Modulebg}>
        <div className={style.bgPurple}>
            <div className={style.stars}>
                <div className={style.centralBody}>
                    <img className={style.image404} src={error} alt='' width="300px"/>
                    <Link to={'/'} className={style.btnGoHome}>Приземлиться обратно</Link>
                </div>
                <div className={style.objects}>
                    <img className={style.objectRocket} src="http://salehriaz.com/404Page/img/rocket.svg" alt='' width="40px"/>
                    <div className={style.earthMoon}>
                        <img className={style.objectEarth} src="http://salehriaz.com/404Page/img/earth.svg" alt='' width="100px"/>
                        <img className={style.objectMoon} src="http://salehriaz.com/404Page/img/moon.svg" alt='' width="80px"/>
                    </div>
                    <div className={style.boxAstronaut}>
                        <img className={style.objectAstronaut} src={astr} alt='' width="140px"/>
                    </div>
                </div>
                <div className={style.glowingStars}>
                    <div className={style.star}></div>
                    <div className={style.star}></div>
                    <div className={style.star}></div>
                    <div className={style.star}></div>
                    <div className={style.star}></div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
export default Error404Module;