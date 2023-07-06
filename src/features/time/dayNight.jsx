import { createSlice } from "@reduxjs/toolkit"


const whotTime = () => {
  let time = new Date().getHours()
  if ((time >= 0 && time <= 7 )||(time >= 20)) return true
  if ((time >= 7 && time <= 20 )) return false 
}

const initialState = {
  bulean: whotTime()
}


export const dayNight = createSlice({
  name: 'dayNight',
  initialState,
  reducers: {
    setDayNight: (state, action) => {
      state.bulean = action.payload
    },
  }
})

export const { setDayNight } = dayNight.actions
export default dayNight.reducer