import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  to_do_list: [],
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
      state.to_do_list = state.to_do_list.filter(
        (todo) => todo.id !== toDoIdToRemove
      );
    },
    handleCheckBox: (state, action) => {
      const { id, completed } = action.payload;
      const todoToUpdate = state.to_do_list.find((todo) => todo.id === id);

      if (todoToUpdate) {
        todoToUpdate.completed = completed;
      }
    },
  },
});

export default todoSlice.reducer;
export const { addToDo, removeToDo, handleCheckBox } = todoSlice.actions;
