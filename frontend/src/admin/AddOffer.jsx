import { useState } from 'react'
import Grid from "@mui/material/Grid";

export default function AddOffer () {

  const [data, setData] = useState({ title: '', description: '', price: 0 })
  const handleInput = (e) => setData({...data, [e.target.name]: e.target.value})

  const handleSubmit = async (e) => {
    e.preventDefault()

    const url = "http://localhost:8000/offers/"
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, fetchConfig)
    if (response.ok) {
      setData({ title: '', description: '', price: 0 })
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
              <h2>Add Offers</h2>
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
                        placeholder='title'
                        value={data.title}
                        name="title"
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
                          placeholder='description'
                          value={data.description}
                          name="description"
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
                          type='number'
                          placeholder='price'
                          value={data.price}
                          name="price"
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
                <button onClick={handleSubmit}>Add Offer</button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </>
  )
}