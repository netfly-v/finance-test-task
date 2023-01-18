import {
  GET_TICKERS,
  GET_CURRENT_TICKERS,
  GET_PREV_TICKERS,
  ADD_WATCHING_TICKERS,
  DEL_WATCHING_TICKERS,
  GET_TICKERS_ERROR,
  TickersActionType,
  TickersType,
} from './types';

export const getTickers = (): TickersActionType => ({type: GET_TICKERS});
export const getCurrentTickers = (currentTickers: TickersType): TickersActionType => ({
  type: GET_CURRENT_TICKERS,
  currentTickers,
});
export const getPrevTickers = (prevTickers: TickersType): TickersActionType => ({type: GET_PREV_TICKERS, prevTickers});
export const addWatchingTicker = (watchingTickers: string[]): TickersActionType => ({
  type: ADD_WATCHING_TICKERS,
  watchingTickers,
});
export const delWatchingTicker = (watchingTickers: string[]): TickersActionType => ({
  type: DEL_WATCHING_TICKERS,
  watchingTickers,
});
export const getTickersError = () => ({type: GET_TICKERS_ERROR});
