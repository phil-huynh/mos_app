import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";
import CloseIcon from '@mui/icons-material/Close';
import { useStore } from "../ContextStore.jsx";


export default function DeleteModal({url, callback, setSelection, item}) {

  const { request, deleteModal, setDeleteModal, setSelectFrom, modalStyle } = useStore()


  const deleteEntry = async () => {
    setDeleteModal(false)
    await request.delete(url, callback)
    setSelection(null)
    setSelectFrom('')
  }

  const close = () => {
    setSelection(null)
    setSelectFrom('')
    setDeleteModal(false)
  }

  return (
    <div>
      <Modal
        aria-labelledby="opportunity-data-card"
        aria-describedby="opportunity-probability-data"
        open={deleteModal}
        onClose={() => close()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={deleteModal}>
          <Paper
            sx={{...modalStyle, width: "30%"}}
            elevation={10}
          >
            <div style={{display: "flex", flexDirection: "row",  justifyContent: "flex-end"}}>
              <CloseIcon onClick={() => close()} sx={{cursor: "pointer"}}/>
            </div>
            <form id="create-manufacturer-form" style={{marginTop: "1rem"}}>
              <h5 >{`Are you sure you want to delete ${item}?`}</h5>
              <div style={{display: "flex", justifyContent: "flex-end", marginTop:"2rem"}}>
              <button className="btn btn-secondary" onClick={() => close()} style={{cursor: "pointer"}}>Cancel</button>
              <button className="btn btn-danger" onClick={() => deleteEntry()} style={{marginLeft: "2rem", cursor: "pointer"}}>Delete</button>
            </div>
            </form>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
