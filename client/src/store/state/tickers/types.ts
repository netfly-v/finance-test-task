import {DataType} from '../../../types/tickers';

export const GET_TICKERS = 'GET_TICKERS';
export const GET_CURRENT_TICKERS = 'GET_CURRENT_TICKERS';
export const GET_PREV_TICKERS = 'GET_PREV_TICKERS';
export const ADD_WATCHING_TICKERS = 'ADD_WATCHING_TICKERS';
export const DEL_WATCHING_TICKERS = 'DEL_WATCHING_TICKERS';
export const GET_TICKERS_ERROR = 'GET_TICKERS_ERROR';

export type TickersType = {
  tickers: DataType[];
};

type GetTickersActionType = {
  type: typeof GET_TICKERS;
};

type GetCurrentTickersActionType = {
  type: typeof GET_CURRENT_TICKERS;
  currentTickers: TickersType;
};

type GetPrevTickersActionType = {
  type: typeof GET_PREV_TICKERS;
  prevTickers: TickersType;
};

type AddWatchingTickersActionType = {
  type: typeof ADD_WATCHING_TICKERS;
  watchingTickers: string[];
};

type DelWatchingTickersActionType = {
  type: typeof DEL_WATCHING_TICKERS;
  watchingTickers: string[];
};

type GetTickersErrorActionType = {
  type: typeof GET_TICKERS_ERROR;
};

export type TickersActionType =
  | GetTickersActionType
  | GetCurrentTickersActionType
  | GetPrevTickersActionType
  | AddWatchingTickersActionType
  | DelWatchingTickersActionType
  | GetTickersErrorActionType;
