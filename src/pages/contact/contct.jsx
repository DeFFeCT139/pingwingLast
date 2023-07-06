import TitleBlock from "../../components/titleBlock/titleBlock";
import dno from '../../image/Без имени-1 3.png'
import tg from '../../image/Subtract.svg'
import ins from '../../image/Vector (2).svg'
import tik from '../../image/Subtract (1).svg'
import beh from '../../image//Mask group.svg'
import drib from '../../image/Subtract (2).svg'
import til from '../../image/Subtract (3).svg'

function Contact() {

  return (
    <div className="contact about-bg pos-real">
      <div className="conteiner">
        <TitleBlock titlebg={'</контакты>'} descClassName={'contactDesc'} title={'КОНТАКТЫ'} desc={'Если Вы хотите воспользоваться нашими услугами, запишитесь на бесплатную консультацию, заполнив форму, либо напишите нам в Telegram'}/>
        <div className="contact-block">
          <div className="contact-block-left">
            <div className="contact-block-left-item">contact@pingwing.ru</div>
            <div className="contact-block-left-item">pingwingstudio@gmail.com</div>
            <div className="contact-block-left-item">+7 999 08 66660</div>
          </div>
          <div className="contact-block-right">
            <a href="/" className="links"><img src={tg} alt="" /></a>
            <a href="/" className="links"><img src={ins} alt="" /></a>
            <a href="/" className="links"><img src={tik} alt="" /></a>
            <a href="/" className="links"><img src={beh} alt="" /></a>
            <a href="/" className="links"><img src={drib} alt="" /></a>
            <a href="/" className="links"><img src={til} alt="" /></a>
          </div>
        </div>
        <div className="contac-img-facke"></div>
      </div>
      <img src={dno} className="dno" alt="" />
    </div>
  );
}

export default Contact;