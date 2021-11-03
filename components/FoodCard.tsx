import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { AddShoppingCart } from '@mui/icons-material';
import { FC } from 'react';

interface FoodCardProps {
  handleAddCart: () => void;
  detail: any;
}

export interface Food {
  _id: string;
  name: string;
  price: number;
}

const FoodCard: FC<FoodCardProps> = props => {
  const { handleAddCart, detail } = props;
  console.log(detail);

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia component="img" sx={{ width: 100, height: 100 }} image={detail.image} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
          padding: '6px'
        }}
      >
        <Typography component="div" variant="h6" sx={{ fontSize: '16px' }}>
          {detail.name}
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2px' }}>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            ￥{detail.price}
          </Typography>
          <IconButton onClick={handleAddCart}>
            <AddShoppingCart sx={{ height: 16, width: 16 }} />
          </IconButton>
        </div>
      </Box>
    </Card>
  );
};

FoodCard.defaultProps = {
  detail: {}
};

export default FoodCard;
