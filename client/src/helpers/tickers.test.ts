import {tickersToTableState, companyTickerToTableState} from './tickers';

describe('tickersToTableState', () => {
  const tickers = [
    {
      ticker: 'AAPL',
      exchange: 'NASDAQ',
      price: '279.29',
      change: '64.52',
      change_percent: '0.84',
      dividend: '0.56',
      yield: '1.34',
      last_trade_time: '2021-04-30T11:53:21.000Z',
    },
  ];
  const tickersWithKey = tickers.map((el: any) => ({...el, key: 'AAPL'}));
  test('key is adding', () => {
    expect(tickersToTableState(tickers)).toEqual(tickersWithKey);
  });
});

describe('companyTickerToTableState', () => {
  test('company ticker is converting to company name', () => {
    expect(companyTickerToTableState('AAPL')).toEqual('Apple (AAPL)');
  });
});
