import { useDispatch, useSelector } from 'react-redux'
import style from './css/sliderItem.module.css'
import web from './img/websites 1 (1).png'
import app from './img/apps 2.png'
import bot from './img/Group 54.png'
import smm from './img/kandinsky-download-1682029084080 2.png'
import { setInfoItem } from '../../../../features/infoItem/infoItem'
import { useEffect } from 'react'

function SliderItem({content, image}) {

    const dispach = useDispatch()
    const item = useSelector((state) => state.item.info)
    const images = [web, app, bot, smm]

    useEffect(()=>{
      setInfo()
    },[])

    const setInfo = () => {
      if (item.id === 0) {
        document.getElementsByClassName(style.sliderItemBg)[0].classList.add(style.sliderItemBgActive)
      }
    }

    const activeSliderItem = (content) => {
      let items = document.getElementsByClassName(style.sliderItemBg)
      for (let index = 0; index < items.length; index++) {
        if (index === content.id) {
          let item = {
            btn: content.btn,
            desc: content.desc,
            id: content.id,
            title: content.title,
            img: images[content.id],
            btns: content.btns
          }
          items[index].classList.add(style.sliderItemBgActive)
          dispach(setInfoItem(item))
        } else {
          items[index].classList.remove(style.sliderItemBgActive)
        }
      }
    }

    return (
      <div className={style.sliderItem}>
        <div onClick={() => activeSliderItem(content)} className={style.sliderItemBg}>
            <div className={style.sliderItemImg}>
                <img src={image[content.id]} className={style.img} alt="" />
            </div>
            <div className={style.sliderItemTitle}>{content.title}</div>
        </div>
      </div>
    );
  }
  
  export default SliderItem;