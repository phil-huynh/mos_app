import { useState, useEffect } from "react"
import AddOffer from "./AddOffer"
import { useStore } from "../ContextStore"
import DeleteModal from "../utils/DeleteModal"

export default function OfferList () {

  const {
    offers,
    loadOffers,
    urls,
    request,
    selection,
    setSelection,
    deleteModal,
    setDeleteModal,
    selectFrom
    setSelectFrom,
  } = useStore()

  useEffect(() => {
    loadOffers()
  }, [])

  useEffect(() => {
    selection && setDeleteModal(true)
  }, [selection])

  const select = (offer) => {
    setSelection(offer)
    setSelectFrom("offer")
  }

  return (
    <>
      {deleteModal && selectFrom === "offer" ?
        <DeleteModal
          url={urls.offer(selection.id)}
          callback={loadOffers}
          setSelection={setSelection}
          item={`${selection.title} offer`}
        />
        :
        null
      }
      <div className="form-box" style={{width: "50%"}}>
        <h4>Offers</h4>
      </div>
      <div className="form-box" style={{width: "80%"}}>
        <table style={{color: "white", width: "100%", padding: "15px"}}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {offers && offers.map(offer => (
              <tr key={offer.id}>
                <td >{offer.title}</td>
                <td >{offer.description}</td>
                <td >{`$ ${offer.price}`}</td>
                <td >
                  <button onClick={()=>select(offer)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddOffer />
    </>
  )
}