import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  to_do_list: [
    {id:1,todo:"I have to apply jobs on linkedin",completed:false},
    {id:2,todo:"Marvel website assignment task",completed:true},
    {id:3,todo:"Create todo app in react with redux",completed:false}
,
  ],
  isLoading: false,
  error: null,
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState: INIT_STATE,
  reducers: {
    addToDo: (state, action) => {
      state.to_do_list.push(action.payload);
    },
    removeToDo: (state, action) => {
      // Identify the to-do item to remove using its unique identifier (id)
      const toDoIdToRemove = action.payload;

      // here we have use filter to create a new array excluding the to-do item with the specified id
      state.to_do_list = state.to_do_list.filter((todo) => todo.id !== toDoIdToRemove);
    },
  },
});



export default todoSlice.reducer;
export const {addToDo,removeToDo} = todoSlice.actions;