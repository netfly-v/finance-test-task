import {Button, Result, Table, Tag} from 'antd';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {socket} from '../../constants/api';
import {companyTickerToTableState, tickersToTableState} from '../../helpers/tickers';
import {TypedDispatch} from '../../store';
import {getTickers, getTickersError} from '../../store/state/tickers/actions';
import {tickersSelector} from '../../store/state/tickers/selectors';
import {addWatchingTickersAction, delWatchingTickersAction, getTickersAction} from '../../store/thunks/tickersThunk';
import {DataType} from '../../types/tickers';
import {useGetTickers} from '../../hooks/tickers';

const errorResult = <Result status="warning" title="There are some problems with your operation." />;

export const Tickers: React.FC = () => {
  const dispatch = useDispatch<TypedDispatch>();
  const {currentTickers, watchingTickers, error} = useSelector(tickersSelector);

  const handleOnClick = (id: string, isAdded: boolean) => {
    if (isAdded) {
      dispatch(delWatchingTickersAction(id));
    } else {
      dispatch(addWatchingTickersAction(id));
    }
  };

  const columns = [
    {
      title: 'Ticker',
      dataIndex: 'ticker',
      key: 'ticker',
      render: (ticker: string) => <span>{companyTickerToTableState(ticker)}</span>,
    },
    {
      title: 'Exchange',
      dataIndex: 'exchange',
      key: 'exchange',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Dividend',
      dataIndex: 'dividend',
      key: 'dividend',
    },
    {
      title: 'Change',
      dataIndex: 'change',
      key: 'change',
    },
    {
      title: 'Change %',
      dataIndex: 'change_percent',
      key: 'change_percent',
      render: (_: string, data: DataType) => <ChangePercentCell data={data} />,
    },
    {
      title: 'Trade time',
      key: 'last_trade_time',
      dataIndex: 'last_trade_time',
      render: (time: string) => {
        const date = new Date(time);
        return <span>{date.toLocaleString()}</span>;
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      dataIndex: 'actions',
      render: (_: string, data: DataType) => {
        const isAdded = watchingTickers.filter((t: string) => t === data.ticker)[0];
        return (
          <Button danger={isAdded} onClick={() => handleOnClick(data.ticker, !!isAdded)}>
            {isAdded ? 'Delete from list' : 'Add to watchlist'}
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(getTickers());
    socket.emit('start');
    socket.on('ticker', (data) => dispatch(getTickersAction(data)));
    socket.on('connect_error', () => {
      dispatch(getTickersError());
    });
    return () => {
      socket.removeAllListeners();
    };
  }, [dispatch]);

  return error ? (
    errorResult
  ) : (
    <Table columns={columns} dataSource={tickersToTableState(currentTickers)} pagination={false} />
  );
};

export const ChangePercentCell: React.FC<{data: DataType}> = ({data}) => {
  const {isPositive} = useGetTickers(data);

  return (
    <Tag color={isPositive ? 'green' : 'volcano'}>
      {isPositive ? `+${data.change_percent}%` : `-${data.change_percent}%`}
    </Tag>
  );
};
