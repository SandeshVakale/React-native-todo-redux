import {createAction, createReducer} from '@reduxjs/toolkit';

const initialState = {
  todo: [],
};

const addToTodo = createAction('todo/addToTodo');
const removeFromTodo = createAction('todo/removeFromTodo');

export const todoModel = createReducer(initialState, builder => {
  builder
    .addCase(addToTodo, (state, action) => {
      state.todo = [...state.todo, action.payload];
    })
    .addCase(removeFromTodo, (state, action) => {

    });
});
