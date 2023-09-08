import { useState } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";
import CloseIcon from '@mui/icons-material/Close';
import Grid from "@mui/material/Grid";
import { useStore } from '../ContextStore';


export default function EditAffiliate({ affiliate }) {

  const {
    urls,
    request,
    loadAffiliates,
    editAffiliateModal,
    setEditAffiliateModal,
    setSelection,
    setSelectFrom,
    setSelectType,
    modalStyle
  } = useStore()

  const emptyAffiliate = {
    company: '',
    product: '',
    link: ''
  }

  const [data, setData] = useState(emptyAffiliate)

  const handleInput = (e) => setData({...data, [e.target.name]: e.target.value})

  const close = () => {
    setEditAffiliateModal(false)
    setSelection(null)
    setSelectFrom('')
    setSelectType('')
  }

  const reset = () => {
    setData(emptyAffiliate)
    loadAffiliates()
    close()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await request.put(urls.affiliate(affiliate.id), data, reset)
  }

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
            sx={modalStyle}
            elevation={10}
          >
            <div style={{display: "flex", flexDirection: "row",  justifyContent: "space-between"}}>
              <h2 style={{color: "black"}}>{`Edit ${affiliate.company}`}</h2>
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
                        placeholder={affiliate.company}
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
                        placeholder={affiliate.product}
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
                        placeholder={affiliate.link}
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
