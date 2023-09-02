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


export default function EditAffiliate({ affiliate }) {

  const {
    urls,
    request,
    loadAffiliates,
    editAffiliateModal,
    setAddAffiliateModal,
    setEditOfferModal,
    setSelection,
    setSelectFrom,
    setSelectType
  } = useStore()

  const emptyAffiliate = {
    company: '',
    product: '',
    link: ''
  }

  const [data, setData] = useState(emptyAffiliate)

  const handleInput = (e) => setData({...data, [e.target.name]: e.target.value})

  const close = () => {
    setAddAffiliateModal(false)
    setSelection(null)
    setSelectFrom('')
    setSelectType('')
  }

  const reset = () => {
    setData(emptyAffiliate)
    loadAffiliates()
    setEditAffiliateModal(false)
    setSelection(null)
    setSelectType('')
    setSelectFrom('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // await request.post(urls.affiliates, data, reset)
  }
  // const textColor = () => (darkMode ? "white" : "black");

  return (
    <div>
      <Modal
        aria-labelledby="opportunity-data-card"
        aria-describedby="opportunity-probability-data"
        open={editAffiliateModal}
        // onClose={() => setAddAffiliateModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={editAffiliateModal}>
          <Paper
            sx={style}
            elevation={10}
          >
            <div style={{display: "flex", flexDirection: "row",  justifyContent: "space-between"}}>
              <h2 style={{color: "black"}}>{`Edit ${affiliate}`}</h2>
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
