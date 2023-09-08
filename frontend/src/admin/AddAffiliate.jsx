import { useState } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";
import CloseIcon from '@mui/icons-material/Close';
import Grid from "@mui/material/Grid";
import { useStore } from '../ContextStore';


export default function AddAffiliate() {

  const {
    urls,
    request,
    loadAffiliates,
    addAffiliateModal,
    setAddAffiliateModal,
    modalStyle
  } = useStore()

  const emptyAffiliate = {
    company: '',
    product: '',
    link: ''
  }

  const [data, setData] = useState(emptyAffiliate)

  const handleInput = (e) => setData({...data, [e.target.name]: e.target.value})

  const reset = () => {
    setData(emptyAffiliate)
    loadAffiliates()
    setAddAffiliateModal(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await request.post(urls.affiliates, data, reset)
  }

  return (
    <div>
      <Modal
        aria-labelledby="opportunity-data-card"
        aria-describedby="opportunity-probability-data"
        open={addAffiliateModal}
        // onClose={() => setAddAffiliateModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={addAffiliateModal}>
          <Paper
            sx={modalStyle}
            elevation={10}
          >
            <div style={{display: "flex", flexDirection: "row",  justifyContent: "space-between"}}>
              <h2 style={{color: "black"}}>Add an Affiliate</h2>
              <CloseIcon onClick={() => setAddAffiliateModal(false)} sx={{cursor: "pointer"}}/>
            </div>
            <form className='email-form' id='email-form' onSubmit={handleSubmit}>
            <Grid container direction='column'>
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
                  placeContent: "space-around"
                  }}
                >
                <button onClick={() => setAddAffiliateModal(false)}>Cancel</button>
                <button onClick={handleSubmit}>Add Affiliate</button>
              </Grid>
            </Grid>
          </form>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
