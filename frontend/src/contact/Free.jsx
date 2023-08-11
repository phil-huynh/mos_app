import { useState } from 'react'
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';

export default function Free() {

  const [data, setData] = useState({data: '', email: ''})
  const handleInput = (e) => setData({...data, [e.target.name]: e.target.value})
  const handleSubmit = (e) => {
    e.preventDefault()
    setData({data: '', email: ''})
  }

  return (
    <>
      <div className='free-stuff'>
        <h1>Give me your email and I'll give you some "free" stuff</h1>
      </div>
      <div className='form-container'>
        <div className="form-box">

          <form className='email-form' id='email-form' onSubmit={handleSubmit}>
            <Grid container >
              <Grid item lg={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "red solid 2px",
                }}>
                <TextField
                  label="Name"
                  variant="outlined"
                  className='form-control'
                  onChange={e=>handleInput(e)}
                  value={data.name}
                  // sx={{border: "white solid 1px", borderRadius: "10px"}}
                  size="medium"
                />
              </Grid>
              <Grid item lg={6}
                sx={{
                  display: "flex",
                  placeItems: "center",
                  border: "red solid 2px",
                  }}>
              <TextField
                  label="Email"
                  variant="outlined"
                  className='form-control'
                  onChange={e=>handleInput(e)}
                  value={data.name}
                  // sx={{border: "white solid 1px", borderRadius: "10px"}}
                  size="medium"
                />
              </Grid>
            </Grid>
          </form>

        </div>
      </div>
    </>
  )
}