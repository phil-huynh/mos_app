import Grid from "@mui/material/Grid";
import OfferCard from "./OfferCard"

export default function Offerings({offers}) {
  console.log(offers)
  return (
    <>
      <Grid container spacing={1.5} className='list-container'>
        {offers && offers.map(offer => (
          <Grid item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            xl={2}
            key={offer.id}
            sx={{
              display: "flex",
              justifyContent: "center"
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