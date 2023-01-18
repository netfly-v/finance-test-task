import {render, screen} from '@testing-library/react';
import React from 'react';
import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
import {ChangePercentCell} from '.';
import {reducers} from '../../store';

describe('ChangePercentCell', () => {
  const store = createStore(reducers, {
    tickers: {
      currentTickers: [],
      prevTickers: [{ticker: 'AAPL', change_percent: '0.16'}],
      watchingTickers: [],
      error: false,
    },
  });
  const data = {
    ticker: 'AAPL',
    exchange: 'NASDAQ',
    price: '279.29',
    change: '64.52',
    change_percent: '0.84',
    dividend: '0.56',
    yield: '1.34',
    last_trade_time: '2021-04-30T11:53:21.000Z',
  };
  test('ChangePercentCell is rendering right symbol', () => {
    render(
      <Provider store={store}>
        <ChangePercentCell data={data} />
      </Provider>,
    );
    screen.getByText(/\+/i);
  });
});
