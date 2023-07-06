import { createSlice } from "@reduxjs/toolkit"
import img from './img/websites 1 (1).png'


const initialState = {
  info: {
    btn: "БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ",
    desc:"Если у вашего бизнеса еще нет веб-сайта, то пришло время его создать. Сайт проинформирует пользователя о вашей компании, а также отобразит информацию об услугах или продуктах.",
    id: 0,
    title:"Сайты",
    img: img,
    btns:["Удобные","Оптимизированные","Стильные","Конкурентоспособные"]
  }
}


export const infoItem = createSlice({
  name: 'infoItem',
  initialState,
  reducers: {
    setInfoItem: (state, action) => {
      state.info = action.payload
    },
  }
})

export const { setInfoItem } = infoItem.actions
export default infoItem.reducer