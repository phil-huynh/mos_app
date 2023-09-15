import Grid from "@mui/material/Grid";
import AffiliateCard from './AffiliateCard'
import { useState, useEffect } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useStore } from "../ContextStore";

export default function Affiliates({matches}) {

  const { affiliates, loadAffiliates, setAffiliates } = useStore()

  useEffect(() => {
    loadAffiliates()
  }, [])

  const handleNext = () => setAffiliates([...affiliates.slice(1), affiliates[0]])
  const handlePrev = () => (
    setAffiliates([affiliates[affiliates.length - 1], ...affiliates.slice(0, affiliates.length - 1)])
  )

  return (
    <>
      <h2>Affiliates</h2>
      <ArrowBackIosIcon sx={{color: "white", fontSize: "2rem", cursor: "pointer"}} onClick={handlePrev}/>
      <ArrowForwardIosIcon sx={{color: "white", fontSize: "2rem", cursor: "pointer"}} onClick={handleNext}/>
      <Grid container spacing={1.5} className='list-container'>
        {affiliates.slice(0, 4).map(affiliate => (
          <Grid item
            xs={6}
            sm={4}
            md={3}
            lg={2}
            xl={1}
            key={affiliate.id}
            sx={{display: "flex", justifyContent: "center"}}
          >
            <AffiliateCard affiliate={affiliate}/>
          </Grid>
        ))}
      </Grid>
    </>
  )
}