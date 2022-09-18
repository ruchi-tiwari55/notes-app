import { CREATE_NOTE, DELETE_NOTE, UPDATE_NOTE } from "../actions/type";

const initialState = {
  notes: [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE: {
      let notesList = state.notes;
      notesList = [action.data, ...notesList];
      return {
        ...state,
        notes: notesList,
      };
    }
    case UPDATE_NOTE: {
      let notesList = state.notes;
      notesList[action.data.index] = action.data.data;
      return {
        ...state,
        notes: notesList,
      };
    }
    case DELETE_NOTE: {
      let notesList = state.notes;
      notesList = notesList.filter((_, index) => index !== action.index);
      return {
        ...state,
        notes: notesList,
      };
    }
    default: {
      return state;
    }
  }
};

export default noteReducer;
