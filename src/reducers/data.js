import { fetchToDos } from "../actions";
export default (state = {}, action) => {
  switch (action.type) {
    case fetchToDos:
      return action.payload;
    default:
      return state;
  }
};
