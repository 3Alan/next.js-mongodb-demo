import { CircularProgress, List } from '@mui/material';
import React, { FC } from 'react';
import useSWR from 'swr';
import ParticipantItem, { ParticipantItemProps } from './ParticipantItem';

const ParticipantList: FC = () => {
  const id = '617fb8113cbcbde9a07c000a';
  const { data: participantList, error } = useSWR(`/api/order-detail?id=${id}`);

  if (error) return <div>failed to load</div>;
  if (!participantList) return <CircularProgress />;

  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {participantList.list.map((item, index) => (
          <ParticipantItem key={index} detail={item} />
        ))}
      </List>
    </div>
  );
};

export default ParticipantList;
