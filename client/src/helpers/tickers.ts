import {DataType} from '../types/tickers';

export const tickersToTableState = (tickers: DataType[]) => {
  return tickers.map((t) => ({...t, key: t.ticker}));
};

export const companyTickerToTableState = (ticker: string) => {
  if (ticker === 'AAPL') return `Apple (${ticker})`;
  if (ticker === 'GOOGL') return `Google (${ticker})`;
  if (ticker === 'MSFT') return `Microsoft (${ticker})`;
  if (ticker === 'AMZN') return `Amazon (${ticker})`;
  if (ticker === 'FB') return `Facebook (${ticker})`;
  if (ticker === 'TSLA') return `Tesla (${ticker})`;
};
