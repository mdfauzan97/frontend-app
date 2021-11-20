import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';


const DummyList = [
  {
    id: 1,
    pic:  'Image cannot load',
    name: 'Round Neck T-shirt',
    description: '100% cotton, Dark Green',
    price: '9.90',
    amount:'0',

  },
  {
    id: 2,
    pic:  'Image cannot load',
    name: 'Collar Shirt',
    description: '100% cotton, Red',
    price: '15.90',
    amount:'0',
  },
  {
    id: 3,
    pic:  'Image cannot load',
    name: 'Slim-fit Jenas',
    description: 'Dark Blue, Suitable for casual purpose.',
    price: '19.90',
    amount:'0',
  },
  {
    id: 4,
    pic: 'Image cannot load',
    name: 'Casual Shoes',
    description: 'Laced, White',
    price: '9.90',
    amount:'0',
  },
  {
    id: 5,
    pic:  'Image cannot load',
    name: 'Round Neck T-shirt',
    description: '100% cotton, Dark Blue',
    price: '9.90',
    amount:'0',
  },
  {
    id: 6,
    pic: 'Image cannot load',
    name: 'Straight Trousers',
    description: 'Dark Blue, Suitable for work purpose.',
    price: '19.90',
    amount:'0',
  },
  {
    id: 7,
    pic: 'Image cannot load',
    name: 'Round Neck T-shirt',
    description: '100% cotton, White',
    price: '9.90',
    amount:'0',
  },
];

const ItemList: React.FC = () =>(
  <Grid container spacing={2} pr={3} pl={3}>
      {DummyList?.map((itemlist, index)=>
      (
        <Grid item xs={12} sm={6} md={3} >
        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
              {itemlist.pic}
              </ButtonBase>
            </Grid>
          <Grid item xs={8} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {itemlist.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {itemlist.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  RM{itemlist.price}
                </Typography>
              </Grid>
              <Grid item>
                <Button sx={{ cursor: 'pointer'}} variant="contained"> 
                  Add to Cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
        </Paper>
      </Grid>
    ))
    }
    </Grid>
);

export default ItemList;

