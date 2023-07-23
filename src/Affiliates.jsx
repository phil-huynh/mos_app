import Grid from "@mui/material/Grid";
import AffiliateCard from './AffiliateCard'

export default function Affiliates({affiliates}) {
  return (
    <Grid container spacing={5} className='list-container'>
      {affiliates.map(affiliate => (
        <Grid item xs={8} sm={6} md={4} lg={2.6} key={affiliate.id}>
          <AffiliateCard
            company={affiliate.company}
            product={affiliate.product}
          />
        </Grid>
      ))}
    </Grid>
  )
}