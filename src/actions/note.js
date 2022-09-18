import { CREATE_NOTE, DELETE_NOTE, UPDATE_NOTE } from "./type";

export const createNote = (data) => ({
  type: CREATE_NOTE,
  data: data,
});

export const updateNote = (data) => ({
  type: UPDATE_NOTE,
  data: data,
});

export const deleteNote = (index) => ({
  type: DELETE_NOTE,
  index: index,
});
