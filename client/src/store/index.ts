import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import logger from 'redux-logger';
import {tickersReducer} from './state/tickers';

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<AppStateType, any, AnyAction>;
export type GetStateType = () => AppStateType;

export const reducers = combineReducers({
  tickers: tickersReducer,
});

export const store = createStore(reducers, applyMiddleware(logger, thunkMiddleware));
