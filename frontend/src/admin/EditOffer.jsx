import { useState } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";
import CloseIcon from '@mui/icons-material/Close';
import Grid from "@mui/material/Grid";
import { useStore } from '../ContextStore';


export default function EditOffer ({ offer }) {

  const {
    urls,
    request,
    loadOffers,
    editOfferModal,
    setEditOfferModal,
    setSelection,
    setSelectFrom,
    setSelectType,
    modalStyle
  } = useStore()

  const emptyOffer = {
    title: '',
    description: '',
    price: ''
  }

  const [data, setData] = useState(emptyOffer)

  const handleInput = (e) => setData({...data, [e.target.name]: e.target.value})
  const isNum = str => !isNaN(str) && !isNaN(parseFloat(str))

  const close = () => {
    setEditOfferModal(false)
    setSelection(null)
    setSelectFrom('')
    setSelectType('')
  }

  const reset = () => {
    setData(emptyOffer)
    loadOffers()
    close()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      title: data.title,
      description: data.description,
      price: (data.price && isNum(data.price)) ? Number(data.price) : -1
    }
    await request.put(urls.offer(offer.id), body, reset)
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
            sx={modalStyle}
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
                        type='text'
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
