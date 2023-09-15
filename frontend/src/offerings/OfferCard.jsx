import { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useStore } from '../ContextStore';

export default function OfferCard({title, details, price}) {

  const { glassCardStyle } = useStore()

  return (
    <Card className='offer-card'
    sx={glassCardStyle}
    raised>
      <CardContent>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <Typography sx={{ fontSize: 14 }} component="div">{details}</Typography>
      </CardContent>
      <Typography variant="h6" component="div">{`$${price}`}</Typography>
    </Card>
  );
}
