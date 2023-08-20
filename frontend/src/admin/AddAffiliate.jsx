import { useState } from 'react'
import Grid from "@mui/material/Grid";

export default function  AddAffiliate() {


  const [data, setData] = useState({ company: '', product: '', link: '' })
  const handleInput = (e) => setData({...data, [e.target.name]: e.target.value})

  const handleSubmit = async (e) => {
    e.preventDefault()

    const url = "http://localhost:8000/affiliates/"
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, fetchConfig)
    if (response.ok) {
      setData({ company: '', product: '', link: 0 })
    }
  }

  return (
    <>
      <div className='form-container'>
        <div className="form-box">

          <form className='email-form' id='email-form' onSubmit={handleSubmit}>
            <Grid container direction='column'>
              <Grid item
                sx={{
                  display: "flex",
                  justifyContent: "center"
                }}>
              <h2>Add Affiliate</h2>
              </Grid>
              <Grid item>
                <Grid container
                  sx={{
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  <Grid item
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginY: "2rem",
                    }}>
                      <input
                        type='text'
                        placeholder='company'
                        value={data.company}
                        name="company"
                        onChange={handleInput}
                      />
                  </Grid>
                  <Grid item
                    sx={{
                      display: "flex",
                      placeItems: "center",
                      marginY: "2rem",
                    }}>
                        <input
                          type='text'
                          placeholder='product'
                          value={data.product}
                          name="product"
                          onChange={handleInput}
                        />
                  </Grid>
                  <Grid item
                    sx={{
                      display: "flex",
                      placeItems: "center",
                      marginY: "2rem",
                    }}>
                        <input
                          type='text'
                          placeholder='link'
                          value={data.link}
                          name="link"
                          onChange={handleInput}
                        />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  placeContent: "center"
                  }}
                >
                <button onClick={handleSubmit}>Add Affiliate</button>
              </Grid>
            </Grid>
          </form>

        </div>
      </div>
    </>
  )
}