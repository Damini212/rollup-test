import { configureStore, Reducer } from "@reduxjs/toolkit";

export type State = {
  addTag: string;
  tags: string[];
};

const reducerFn: Reducer<State> = (
  state = { addTag: "", tags: [] },
  action
) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, addTag: action.payload };
    case "ADD_TAG":
      return { ...state, tags: state.tags.concat(state.addTag), addTag: "" };

    case "DELETE_TAG":
      return {
        ...state,
        tags: state.tags.filter((tag, index) => action.payload !== index),
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducerFn,
});
