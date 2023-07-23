import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function AffiliatesCard({company, product}) {

  return (
    <Card className='affiliate-card' sx={{ minWidth: 275, m: 2, p: 5, boxShadow: 5 }} raised>
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {company}
        </Typography>
        <Typography sx={{ fontSize: 14 }} component="div">
          {product}
        </Typography>
      </CardContent>
    </Card>
  );
}