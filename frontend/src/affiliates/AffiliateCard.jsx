import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useStore } from '../ContextStore';

export default function AffiliatesCard({affiliate}) {

  const { glassCardStyle } = useStore()

  return (
    <Card
      className='affiliate-card'
      sx={ glassCardStyle }
      raised>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {affiliate.company}
        </Typography>
        <Typography sx={{ fontSize: 14 }} component="div">
          {affiliate.product}
        </Typography>
      </CardContent>
    </Card>
  );
}