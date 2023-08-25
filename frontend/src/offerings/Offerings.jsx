import { useState, useEffect } from 'react'
import Grid from "@mui/material/Grid";
import OfferCard from "./OfferCard"
import { useStore } from '../ContextStore';

export default function Offerings() {

  const { offers, loadOffers } = useStore()

  useEffect(() => {
    loadOffers()
  }, [])

  return (
    <>
      <Grid container spacing={1.5} className='list-container'>
        {offers?.map(offer => (
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