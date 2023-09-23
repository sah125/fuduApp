import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./Reducers/auth.Reducer";
import totalReducer from "./Reducers/totalReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  total: totalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
