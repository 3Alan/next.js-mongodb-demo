import { CircularProgress } from '@mui/material';
import { FC } from 'react';
import useSWR from 'swr';

const OrderDetail: FC = () => {
  // 订单id
  const id = '617fb8113cbcbde9a07c000a';
  const { data: orderDetail, error } = useSWR(`/api/order-detail?id=${id}`);

  // {
  //   name: ''
  //   img: ''
  //   price: ''
  //   user: ''
  // }

  if (error) return <div>failed to load</div>;
  if (!orderDetail) return <CircularProgress />;

  return <div>to do</div>;
};

export default OrderDetail;
