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
  bgcolor: "background.paper",
  p: 4.5,
};

export default function EditOffer ({ offer }) {

  const {
    urls,
    request,
    loadOffers,
    editOfferModal,
    setAddOfferModa,
    setEditOfferModal,
    setSelection,
    setSelectFrom,
    setSelectType
  } = useStore()

  const emptyOffer = {
    title: '',
    description: '',
    price: 0
  }

  const [data, setData] = useState(emptyOffer)

  const handleInput = (e) => setData({...data, [e.target.name]: e.target.value})


  const close = () => {
    setEditOfferModal(false)
    setSelection(null)
    setSelectFrom('')
    setSelectType('')
  }


  const reset = () => {
    setData(emptyOffer)
    loadOffers()
    setEditOfferModal(false)
    setSelection(null)
    setSelectType('')
    setSelectFrom('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // await request.post(urls.offers, data, reset)
  }

  return (
    <div>
      <Modal
        aria-labelledby="opportunity-data-card"
        aria-describedby="opportunity-probability-data"
        open={editOfferModal}
        // onClose={() => setAddManufacturerModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={editOfferModal}>
          <Paper
            sx={style}
            elevation={10}
          >
            <div style={{display: "flex", flexDirection: "row",  justifyContent: "space-between"}}>
              <h2 style={{color: "black"}}>{`Edit ${offer.title}`}</h2>
              <CloseIcon onClick={() => close()} sx={{cursor: "pointer"}}/>
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
                        placeholder={offer.title}
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
                          placeholder={offer.description}
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
                          placeholder={offer.price}
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
                <button onClick={() => close()}>Cancel</button>
                <button onClick={handleSubmit}>Update</button>
              </Grid>
            </Grid>
          </form>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
