import TitlePageTextBtn from "../../components/titlePageTextBtn/titlePageTextBtn";
import BottonW from '../../UI/bottonW/bottonW'
import { useLang } from "../../UI/useLang/useLang";
import style from './css/titlePage.module.css'

function TitlePage({page}) {
    let text = useLang(page).btn
    let content
    if(page === 'about'){

      content = <BottonW block={text}/>
    }
    return (
      <div className={style.titlePage}>
       <div className="conteiner">
        <TitlePageTextBtn page={page}/>
        <div className={style.titlePageBtn}>
          {content}
        </div>
       </div> 
      </div>
    );
  }
  
  export default TitlePage;
  