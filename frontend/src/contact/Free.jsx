import { useState } from 'react'
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useStore } from '../ContextStore';

export default function Free() {

  const { urls, request } = useStore()

  const emptySubscriber = {first_name: '', email: ''}

  const [data, setData] = useState(emptySubscriber)

  const handleInput = (e) => setData({...data, [e.target.name]: e.target.value})
  const reset = () => setData(emptySubscriber)


  const handleSubmit = async (e) => {
    e.preventDefault()
    await request.post(urls.subscribers, data, reset)
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
              <h1>Hello</h1>
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
                        placeholder='first name'
                        value={data.first_name}
                        name="first_name"
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
                          placeholder='email'
                          value={data.email}
                          name="email"
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
                <button onClick={handleSubmit}>Subscribe</button>
              </Grid>
            </Grid>
          </form>

        </div>
      </div>
    </>
  )
}