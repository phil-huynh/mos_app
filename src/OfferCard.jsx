import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function OfferCard({title, details, price}) {

  return (
    <Card className='offer-card'
    sx={{
      minWidth: 275,
      p: 2,
      boxShadow: 5,
      color: "white",
      fontWeight: "700",
      fontSize: "1.7rem",
      width: "70%",
      margin: "3rem",
      zIndex: "2",
      padding: "35px",
      border: "1px solid rgba(139, 139, 139, 0.50)",
      borderRadius: "20px",
      backgroundColor: "rgba(16, 16, 16, 0.5)",
      // boxShadow: "0 0 10px 1px rgba(139, 139, 139, 0.5)",
      backdropFilter: "blur(10px);",
    }}
    raised>
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
