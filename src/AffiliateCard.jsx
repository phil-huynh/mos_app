import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function AffiliatesCard({affiliate}) {

  return (
    <Card className='affiliate-card' sx={{ minWidth: 275, p: 5, boxShadow: 5 }} raised>
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {`${affiliate.company} ${affiliate.id}`}
        </Typography>
        <Typography sx={{ fontSize: 14 }} component="div">
          {affiliate.product}
        </Typography>
      </CardContent>
    </Card>
  );
}