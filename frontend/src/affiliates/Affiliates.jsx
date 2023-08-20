import Grid from "@mui/material/Grid";
import AffiliateCard from './AffiliateCard'
import { useState, useEffect } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Affiliates({matches}) {
  const [affiliates, setAffiliates] = useState([])

  const loadAffiliates = async () => {
    const url = "http://localhost:8000/affiliates/"
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      setAffiliates(data.affiliates)
    }
    else {
      console.error(response)
    }
  }

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
      <ArrowBackIosIcon sx={{color: "white", fontSize: "2rem"}} onClick={handlePrev}/>
      <ArrowForwardIosIcon sx={{color: "white", fontSize: "2rem"}} onClick={handleNext}/>
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