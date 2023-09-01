import { useState } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";
import CloseIcon from '@mui/icons-material/Close';
import Grid from "@mui/material/Grid";
import { useStore } from '../ContextStore';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "20%",
  bgcolor: "background.paper",
  p: 4.5,
};

export default function AddOffer () {

  const {
    urls,
    request,
    loadOffers,
    addOfferModal,
    setAddOfferModal
  } = useStore()

  const emptyOffer = {
    title: '',
    description: '',
    price: 0
  }

  const [data, setData] = useState(emptyOffer)

  const handleInput = (e) => setData({...data, [e.target.name]: e.target.value})

  const reset = () => {
    setData(emptyOffer)
    loadOffers()
    setAddOfferModal(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await request.post(urls.offers, data, reset)
  }

  return (
    <div>
      <Modal
        aria-labelledby="opportunity-data-card"
        aria-describedby="opportunity-probability-data"
        open={addOfferModal}
        // onClose={() => setAddManufacturerModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={addOfferModal}>
          <Paper
            sx={style}
            elevation={10}
          >
            <div style={{display: "flex", flexDirection: "row",  justifyContent: "space-between"}}>
              <h2 style={{color: "black"}}>Add an offer</h2>
              <CloseIcon onClick={() => setAddOfferModal(false)} sx={{cursor: "pointer"}}/>
            </div>
            <form className='email-form' id='email-form' onSubmit={handleSubmit}>
            <Grid container direction='column'>
              {/* <Grid item
                sx={{
                  display: "flex",
                  justifyContent: "center"
                }}>
              <h2>Add Offer</h2>
              </Grid> */}
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
                  justifyContent: "space-around"
                  }}
                >
                <button onClick={() => setAddOfferModal(false)}>Cancel</button>
                <button onClick={handleSubmit}>Add Offer</button>
              </Grid>
            </Grid>
          </form>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
