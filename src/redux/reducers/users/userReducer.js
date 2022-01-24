import { GET_USERS_DATA } from "../../../constant/redux-types";

const INITIAL_VALUE = {
  incomplete_results: false,
  items: [],
  total_count: 0,
};
export const userReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case GET_USERS_DATA:
      return action.payload;
    default:
      return state;
  }
};
