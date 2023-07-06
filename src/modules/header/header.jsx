import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../UI/useLang/useLang';
import style from './css/header.module.css'
import logo from './image/Group 12 (1).svg'
import burger from './image/Vector (6).svg'

function Header({page}) {
    let lang = useLang('header')

    const setHeader = () =>{
        window.addEventListener('scroll', function() {
            if (window.scrollY > window.innerHeight) {
                document.getElementById('headeriner').classList.add(style.headerActiv)
            } else {
                document.getElementById('headeriner').classList.remove(style.headerActiv)
            }
         })
    }

    useEffect(()=>{
        setHeader()
    })

    return (
      <div className={style.header}>
        <div className="conteiner">
            <div id='headeriner' className={style.headeriner}>
                <div className={style.headerLeft}>
                    <div className={style.headerLinkFirst}>
                        <Link id='about' to={'/'} className={style.headerLinks}>{lang.home}</Link>
                    </div>
                    <Link id='portfolio' to={'/portfolio'} className={style.headerLinks}>{lang.prtfolio}</Link>
                </div>
                <div className={style.headerLogo}>
                    <img src={logo} alt="" className={style.logoImg}/>
                </div>
                <div className={style.headerRight}>
                    <Link id='contact' to={'/contact'} className={style.headerLinks}>{lang.contact}</Link>
                    <div className={style.heaerBtn}>{lang.konsul}</div>
                    <img src={burger} className={style.headerBurger} alt="" />
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Header;