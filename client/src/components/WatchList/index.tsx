import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
import {Card, Statistic, Tag} from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';
import {useSelector} from 'react-redux';
import {useGetTickers} from '../../hooks/tickers';
import {tickersSelector} from '../../store/state/tickers/selectors';
import {defaultTheme} from '../../theme/theme';
import {DataType} from '../../types/tickers';
import {WatchListContainer, TickerTitle} from './styles';

export const WatchList: React.FC = () => {
  const {currentTickers, watchingTickers} = useSelector(tickersSelector);

  return (
    <WatchListContainer>
      {!watchingTickers.length && <Title>Please add tickers to watchlist</Title>}
      {watchingTickers.map((ticker: string) => {
        return currentTickers.map((t: DataType) => t.ticker === ticker && <TickerCard ticker={t} key={t.ticker} />);
      })}
    </WatchListContainer>
  );
};

const TickerCard: React.FC<{ticker: DataType}> = ({ticker}) => {
  const {isPositive} = useGetTickers(ticker);
  const title = (
    <>
      <TickerTitle>{ticker.ticker}</TickerTitle>
      <Tag color={isPositive ? 'green' : 'volcano'}>{ticker.price}$</Tag>
    </>
  );
  const color = isPositive ? defaultTheme.palette.common.green : defaultTheme.palette.common.red;
  return (
    <Card style={{margin: '0 10px'}}>
      <Statistic
        title={title}
        value={ticker.change_percent}
        precision={2}
        valueStyle={{color}}
        prefix={isPositive ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        suffix="%"
      />
    </Card>
  );
};
