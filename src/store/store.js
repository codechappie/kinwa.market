import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../auth/authReducer";
import thunk from 'redux-thunk'
import { userReducer } from "../user/userReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(
      applyMiddleware( thunk )
  )
);
