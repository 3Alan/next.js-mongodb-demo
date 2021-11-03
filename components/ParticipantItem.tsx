import { Avatar, ListItem, ListItemText, Typography, ListItemAvatar, Divider } from '@mui/material';
import React, { FC } from 'react';

export interface ParticipantItemProps {
  detail: {
    user: string;
    food: {
      name: string;
      price: string;
    };
  };
}

const ParticipantItem: FC<ParticipantItemProps> = props => {
  const { detail } = props;

  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ fontSize: '1rem' }}>{detail.user}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={detail.food.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {detail.food.price}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};

export default ParticipantItem;
