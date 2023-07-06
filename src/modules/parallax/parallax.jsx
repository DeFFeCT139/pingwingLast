import style from './css/parallx.module.css'
import { useEffect } from 'react'
import title from './image/Subtract.svg'
import Rellax from 'rellax'
import { useParallax } from '../../UI/useParallax/useParallax'
import { useSelector } from 'react-redux'

function Parallax() {
    const time = useSelector((state) => state.time.bulean)
    
    const state = useParallax(time)

    useEffect(() =>{
      setRellax()
    },[time])
    

    const setRellax = () => {
        let rellax = new Rellax('.rellax',{
            breakpoints:[320, 768, 1024] 
          }) 
        let bgblack = document.getElementById('bgblack')
        let parallaxInner = document.getElementById('parallaxInner')
        let back = document.getElementById('back')
        let midle = document.getElementById('midle')
        let front = document.getElementById('front')

        
        window.addEventListener('scroll', function() {
            if (window.scrollY < window.innerHeight) {
              bgblack.style.opacity =  0 + window.scrollY * 0.0005
              parallaxInner.style.opacity =  1 - window.scrollY * 0.003
              back.style.left = `calc(50% - ${(window.scrollY * 0.1)+ 350}px)`
              midle.style.left = `calc(50% - ${(window.scrollY * 0.3)+ 650}px)`
              front.style.right = `calc(50% - ${(window.scrollY * 0.7 ) + 650}px)`
            }
         })
    }

    return (
      <div className={ style.parallax}>
        <img src={state.bg} className={style.parallaxSloy4} alt="" />
        <img src={state.blick} className={style.parallaxBlick} alt=""/>
        <div className={style.parallaxLuna}></div>
        <div className={style.parallaxOblaka}>
          <img id='back' src={state.oblako1} alt='' className={style.parallaxOblakBack}/>
          <img id='midle' src={state.oblako2} alt='' className={style.parallaxMidle}/>
          <img id='front' src={state.oblako3} alt='' className={style.parallaxFront}/>
        </div>
        <img src={state.gor} alt='' className={'rellax ' + style.parallaxSloy3} data-rellax-speed="0"/>
        <img src={state.gor2} alt='' className={'rellax ' + style.parallaxSloy3} data-rellax-speed="2"/>
        <img src={state.sloy2} className={'rellax ' + style.parallaxSloy2} data-rellax-speed="3"/>
        <div id='bgblack' className={style.blacBG}></div>
        <div id='parallaxInner' className={style.parallaxInner}>
          <div className={style.parallaxContent}>
            <img src={title} alt='' className={style.parallaxContentTitle}/>
            <div className={style.parallaxContentDesc}>ВАШ НАДЕЖНЫЙ ПАРТНЕР В WEB-РАЗРАБОТКЕ</div>
            <button className={style.parallaxContentBtn}>ПОДРОБНЕЕ</button>
          </div>
        </div>
        <div className={'rellax ' + style.parallaxSloy15} data-rellax-speed="12"></div>
        <div className={'rellax ' + style.parallaxSloy1} data-rellax-speed="12"></div>
      </div>
    );
  }
  
export default Parallax;