import {
  GET_TICKERS,
  GET_CURRENT_TICKERS,
  GET_PREV_TICKERS,
  ADD_WATCHING_TICKERS,
  DEL_WATCHING_TICKERS,
  GET_TICKERS_ERROR,
  TickersActionType,
} from './types';

const initialState = {
  currentTickers: [],
  prevTickers: [],
  watchingTickers: [],
  error: false,
};

export const tickersReducer = (state = <any>initialState, action: TickersActionType) => {
  switch (action.type) {
    case GET_TICKERS:
      return {...state, error: false};
    case GET_CURRENT_TICKERS:
      return {...state, currentTickers: action.currentTickers, error: false};
    case GET_PREV_TICKERS:
      return {...state, prevTickers: action.prevTickers, error: false};
    case ADD_WATCHING_TICKERS:
      return {...state, watchingTickers: action.watchingTickers, error: false};
    case DEL_WATCHING_TICKERS:
      return {...state, watchingTickers: action.watchingTickers, error: false};
    case GET_TICKERS_ERROR:
      return {...state, error: true};
    default:
      return state;
  }
};
