import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function OfferCard({title, details, price}) {

  return (
    <Card className='offer-card' sx={{ minWidth: 275, p: 2, boxShadow: 5 }} raised>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} component="div">
          {details}
        </Typography>
      </CardContent>
      <Typography variant="h6" component="div">{`$${price}`}</Typography>
    </Card>
  );
}
