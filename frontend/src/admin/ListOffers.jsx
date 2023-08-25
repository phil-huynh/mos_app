import { useState, useEffect } from "react"
import AddOffer from "./AddOffer"
import { useStore } from "../ContextStore"

export default function OfferList () {

  const { offers, loadOffers, urls, request } = useStore()

  const deleteOffer = async (id) => {
    await request.delete(urls.offer(id), loadOffers)
  }

  useEffect(() => {
    loadOffers()
  }, [])

  return (
    <>
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
                  <button onClick={()=>{deleteOffer(offer.id)}}>Delete</button>
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