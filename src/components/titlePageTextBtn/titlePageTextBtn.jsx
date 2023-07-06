import { useLang } from '../../UI/useLang/useLang';
import style from './css/titlePageTextBtn.module.css'

function TitlePageTextBtn({page}) {
    let about = useLang(page)
    return (
      <div className={style.titlePageTextBtn}>
        <div className={style.titlePage}>{about.title}</div>
        <div className={style.descPage}>{about.desc}</div>
      </div>
    );
  }
  
  export default TitlePageTextBtn;