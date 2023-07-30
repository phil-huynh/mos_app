import Grid from "@mui/material/Grid";
import OfferCard from "./OfferCard"

export default function Offerings({offers}) {
  console.log(offers)
  return (
    <>
      <Grid container spacing={4} className='list-container'>
        {offers && offers.map(offer => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={offer.id}>
            <OfferCard
              title={offer.title}
              details={offer.details}
              price={offer.price}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}