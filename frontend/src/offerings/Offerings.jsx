import { useState, useEffect } from 'react'
import Grid from "@mui/material/Grid";
import OfferCard from "./OfferCard"

export default function Offerings() {

  const [offers, setOffers] = useState([])

  const loadOffers = async () => {
    const url = "http://localhost:8000/offers/"
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      setOffers(data.offers)
    }
    else {
      console.error(response)
    }
  }

  useEffect(() => {
    loadOffers()
  }, [])

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
              details={offer.description}
              price={offer.price}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}