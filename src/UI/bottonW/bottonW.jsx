import { useEffect } from 'react';
import style from './css/style.module.scss'

function BottonW({block}) {
  useEffect(()=>{
    document.querySelectorAll(`.${style.inner}`).forEach((button) => {
      button.onmousemove = (e) => {
        const target = e.target;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        button.style.setProperty("--x", `${x}px`);
        button.style.setProperty("--y", `${y}px`);
        button.style.setProperty("--height", `${rect.height}px`);
        button.style.setProperty("--width", `${rect.width}px`);
      };
    });
  },[])
  
    return (
      <div className={style.container}>
        <div className={style.inner}>
          <button type={style.button}>{block}</button>
          <div className={style.blob}></div>
        </div>
      </div>
    );
  }
   
  export default BottonW;  