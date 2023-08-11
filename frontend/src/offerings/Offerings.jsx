import Grid from "@mui/material/Grid";
import OfferCard from "./OfferCard"

export default function Offerings({offers}) {
  console.log(offers)
  return (
    <>
      <Grid container spacing={1.5} className='list-container'>
        {offers && offers.map(offer => (
          <Grid item
          sm={12}
          md={6}
          lg={4}
          xl={3}
            key={offer.id}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
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