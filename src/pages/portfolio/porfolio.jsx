import TitleBlock from "../../components/titleBlock/titleBlock";
import img1 from '../../image/img/1.jpg'
import img2 from '../../image/img/2.jpg'
import img3 from '../../image/img/3.jpg'
import img4 from '../../image/img/4.jpg'
import img5 from '../../image/img/5.jpg'
import img6 from '../../image/img/6.jpg'
import img7 from '../../image/img/7.jpg'
import img8 from '../../image/img/8.jpg'
import img9 from '../../image/img/9.jpg'
import img10 from '../../image/img/10.jpg'
import img11 from '../../image/img/11.jpg'
import img12 from '../../image/img/12.jpg'
import img13 from '../../image/img/13.jpg'
import img14 from '../../image/img/14.jpg'
import { potFunction } from "./js";
import { useEffect } from "react";

function Portfolio() {

  useEffect(() => {
    potFunction()
  }, [])

  return (
    <div className="portfolio about-bg">
      <div className="conteiner">
        <TitleBlock titlebg={'</портфолио>'} title={'ПОРТФОЛИО'}/>
        <div className="portfolio-block">
          <div className="frame">
            <div className="frame__title"> 
              <h1 className="frame__title-main">Grid to Slideshow Switch</h1> 
              <a aria-label="Back to the article" className="frame__title-back" href="https://tympanus.net/codrops/?p=71899"> 
                <span className="oh__inner">Back to the article</span> 
                <svg width="18px" height="18px" viewBox="0 0 24 24"><path vectorEffect="non-scaling-stroke" d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"></path>
                </svg>
              </a>
            </div>
            <a className="frame__prev" href="http://tympanus.net/Tutorials/WebGLCarousel/">Previous demo</a>
            <nav className="frame__demos">
              <span className="frame__demos-item">More layouts: </span>
              <a className="frame__demos-item" href="index.html">1</a>
              <a className="frame__demos-item" href="index2.html">2</a>
              <span className="frame__demos-item" href="index3.html">3</span>
            </nav>
          </div>
          <div className="intro-grid-wrap">
            <div className="intro-grid intro-grid--images">
              <div className="intro-grid__img pos-11" style={{backgroundImage: `url(${img1})`}}></div>
              <div className="intro-grid__img pos-16" style={{backgroundImage: `url(${img1})`}}></div>
              <div className="intro-grid__img pos-9" style={{backgroundImage: `url(${img1})`}}></div>
              <div className="intro-grid__img pos-12" style={{backgroundImage: `url(${img1})`}}></div>
              <div className="intro-grid__img pos-17"  style={{backgroundImage: `url(${img1})`}}></div>
              <div className="intro-grid__img pos-20" style={{backgroundImage: `url(${img1})`}}></div>
              <div className="intro-grid__img pos-21" style={{backgroundImage: `url(${img1})`}}></div>
              <div className="intro-grid__img pos-13"  style={{backgroundImage: `url(${img1})`}}></div>
              <div className="intro-grid__img pos-14"  style={{backgroundImage: `url(${img1})`}}></div>
              <div className="intro-grid__img pos-19" style={{backgroundImage: `url(${img1})`}}></div>
              <div className="intro-grid__img pos-15"  style={{backgroundImage: `url(${img1})`}}></div>
              <div className="intro-grid__img pos-18" style={{backgroundImage: `url(${img1})`}}></div>   
              <div className="intro-grid__img pos-22" style={{backgroundImage: `url(${img1})`}}></div>
              <div className="intro-grid__img pos-10"  style={{backgroundImage: `url(${img1})`}}></div>
            </div>
          </div>
          <div className="controls">
            <button className="unbutton close">X</button>
            <nav className="nav">
              <button className="unbutton nav__item">prev</button>
              <span className="nav__index">
                <span>1</span>/<span>15</span>
              </span>
              <button className="unbutton nav__item">next</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;