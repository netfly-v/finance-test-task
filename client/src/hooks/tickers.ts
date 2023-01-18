import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {tickersSelector} from '../store/state/tickers/selectors';
import {DataType} from '../types/tickers';

export const useGetTickers = (data: DataType) => {
  const [isPositive, setIsPositive] = useState(false);

  const {prevTickers} = useSelector(tickersSelector);

  useEffect(() => {
    prevTickers.map((prev: DataType) => {
      if (prev.ticker === data.ticker && prev.change_percent > data.change_percent) {
        setIsPositive(false);
      } else if (prev.ticker === data.ticker && prev.change_percent < data.change_percent) {
        setIsPositive(true);
      }
      return prev;
    });
  }, [prevTickers]);

  return {isPositive};
};
