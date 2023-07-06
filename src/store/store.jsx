import { configureStore } from "@reduxjs/toolkit";
import dayNight from "../features/time/dayNight";
import infoItem from "../features/infoItem/infoItem";


export const store = configureStore({
  reducer: {
    time: dayNight,
    item: infoItem,
  }
})