import {createAction, createReducer} from '@reduxjs/toolkit';

const initialState = {
  todo: [],
};

const addToTodo = createAction('todo/addToTodo');
const removeFromTodo = createAction('todo/removeFromTodo');

export const todoModel = createReducer(initialState, builder => {
  builder
    .addCase(addToTodo, (state, action) => {
      state.todo = [action.payload, ...state.todo];
    })
    .addCase(removeFromTodo, (state, action) => {
      const {payload} = action;
      state.todo = [...state.todo].filter(function (todo) {
        return payload.id !== todo.id;
      });
    });
});
