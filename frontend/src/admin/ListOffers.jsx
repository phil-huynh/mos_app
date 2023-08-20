import { useState, useEffect } from "react"
import AddOffer from "./AddOffer"

export default function OfferList () {

  const [offers, setOffers] = useState([])

  const loadOffers = async () => {
    const url = "http://localhost:8000/offers/"
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      setOffers(data.offers)
    }
    else {
      console.error(response)
    }
  }

  const deleteOffer = async (id) => {
    const url = `http://localhost:8000/offers/${id}`
    const response = await fetch(url, {method: "DELETE"})
    if (response.ok) {
      loadOffers()
    }
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
      <AddOffer loadOffers={loadOffers}/>
    </>
  )
}