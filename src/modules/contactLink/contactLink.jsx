import style from './css/contactLink.module.css'
import dribl from './image/Subtract (2).svg'
import inst from './image/Vector (7).svg'
import tg from './image/Subtract (3).svg'
import tt from './image/Subtract (4).svg'

function Contactlink() {
    let link = [
        {id:0, img: dribl, link: 'https://dribbble.com/pingwing'},
        {id:1, img: inst, link: 'https://www.instagram.com/pingwing.ru/'},
        {id:2, img: tg, link: 'https://t.me/pingwingstudio'},
        {id:3, img: tt, link: 'https://www.tiktok.com/@pingwing.ru'}
    ]
    return (
      <div className={style.contactlink}>
          <div className={style.contactlinkItems}>
             {link.map(link =>  
                  <a href={link.link} rel="noreferrer" className={style.imglink} key={link.id} target='_blank'>
                      <img src={link.img} alt="" />
                  </a>
              )}
          </div>
          <div className={style.contactlinkMail}>pingwingstudio@gmail.com</div>
      </div>
    );
  }
  
export default Contactlink;