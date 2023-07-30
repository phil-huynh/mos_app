import Grid from "@mui/material/Grid";
import AffiliateCard from './AffiliateCard'
import { useState } from 'react'

export default function Affiliates({affiliates, matches}) {
  const [cards, setCards] = useState(affiliates.slice(0,4))

  return (
    <Grid container spacing={5} className='list-container'>
      {cards.map(affiliate => (
        <Grid item xs={8} sm={6} md={4} lg={2.6} xl={1} key={affiliate.id}>
          <AffiliateCard
            company={affiliate.company}
            product={affiliate.product}
          />
        </Grid>
      ))}
    </Grid>
  )
}