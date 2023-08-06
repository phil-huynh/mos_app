import Grid from "@mui/material/Grid";
import AffiliateCard from './AffiliateCard'
import { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Affiliates({affiliates, matches}) {
  const [queue, setQueue] = useState(affiliates)


  const handleNext = () => setQueue([...queue.slice(1), queue[0]])
  const handlePrev = () => (
    setQueue([queue[queue.length - 1], ...queue.slice(0, queue.length - 1)])
  )

  return (
    <>
      <ArrowBackIosIcon sx={{color: "white", fontSize: "2rem"}} onClick={handlePrev}/>
      <ArrowForwardIosIcon sx={{color: "white", fontSize: "2rem"}} onClick={handleNext}/>
      <Grid container spacing={1.5} className='list-container'>
        {queue.slice(0, 4).map(affiliate => (
          <Grid item
          xs={12}
          sm={10}
          md={6}
          lg={6}
          xl={1}
          key={affiliate.id}
          sx={{border: "red solid 2px", display: "flex", justifyContent: "center"}}
          >
            <AffiliateCard affiliate={affiliate}/>
          </Grid>
        ))}
      </Grid>
    </>
  )
}