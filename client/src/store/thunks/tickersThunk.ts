import {Dispatch} from 'redux';
import {GetStateType} from '..';
import {DataType} from '../../types/tickers';
import {getPrevTickers, getCurrentTickers, addWatchingTicker, delWatchingTicker} from '../state/tickers/actions';
import {TickersActionType, TickersType} from '../state/tickers/types';

type DispatchType = Dispatch<TickersActionType>;

export const getTickersAction = (tickers: TickersType) => (dispatch: DispatchType, getState: GetStateType) => {
  const current = getState().tickers.currentTickers;
  dispatch(
    getPrevTickers(
      current.map((ticker: DataType) => {
        return {
          ticker: ticker.ticker,
          change_percent: ticker.change_percent,
        };
      }),
    ),
  );
  dispatch(getCurrentTickers(tickers));
};

export const addWatchingTickersAction = (id: string) => (dispatch: DispatchType, getState: GetStateType) => {
  const watching = getState().tickers.watchingTickers;
  const addTicker = !!watching.find((el: string) => el === id) ? [...watching] : [...watching, id];
  dispatch(addWatchingTicker(addTicker));
};

export const delWatchingTickersAction = (id: string) => (dispatch: DispatchType, getState: GetStateType) => {
  const watching = getState().tickers.watchingTickers;
  const deleteTicker = [...watching.filter((el: string) => el !== id)];
  dispatch(delWatchingTicker(deleteTicker));
};
