import { useState } from 'react'
import Grid from "@mui/material/Grid";
import { useStore } from '../ContextStore';

export default function  AddAffiliate() {

  const { urls, request, loadAffiliates } = useStore()

  const emptyAffiliate = { company: '', product: '', link: '' }

  const [data, setData] = useState(emptyAffiliate)

  const handleInput = (e) => setData({...data, [e.target.name]: e.target.value})

  const reset = () => {
    setData(emptyAffiliate)
    loadAffiliates()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await request.post(urls.affiliates, data, reset)
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