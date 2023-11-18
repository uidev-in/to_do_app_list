import { configureStore } from '@reduxjs/toolkit'
import ToDoList from "./slice/todoSlice"

export const store = configureStore({
  reducer: { app : ToDoList},
})