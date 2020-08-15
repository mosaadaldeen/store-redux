import { createStore, combineReducers } from "redux";
import ActiveUser from "./actions/activeUsers";
import UserReducers from "./reducers/users";

const initialState = {};
const reducers = combineReducers({
  users: UserReducers,
  activeUser: ActiveUser,
});

const store = createStore(reducers, initialState);
export default store;
