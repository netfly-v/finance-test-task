import React from 'react';
import {Tickers} from '../Tickers';
import {WatchList} from '../WatchList';
import {Main} from './styles';

export const MainPage: React.FC = () => {
  return (
    <Main>
      <WatchList />
      <Tickers />
    </Main>
  );
};
