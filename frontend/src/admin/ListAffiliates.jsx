import { useState, useEffect } from "react"
import AddAffiliate from "./AddAffiliate"

export default function AffiliateList () {

  const [affiliates, setAffiliates] = useState([])

  const loadAffiliates = async () => {
    const url = "http://localhost:8000/affiliates/"
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      setAffiliates(data.affiliates)
    }
    else {
      console.error(response)
    }
  }

  const deleteAffiliate = async (id) => {
    const url = `http://localhost:8000/affiliates/${id}`
    const response = await fetch(url, {method: "DELETE"})
    if (response.ok) {
      loadAffiliates()
    }
  }

  useEffect(() => {
    loadAffiliates()
  }, [])

  return (
    <>
      <div className="form-box" style={{width: "50%"}}>
        <h4>Affiliates</h4>
      </div>
      <div className="form-box" style={{width: "80%"}}>
        <table style={{color: "white", width: "100%", padding: "15px"}}>
          <thead>
            <tr>
              <td>Company</td>
              <td>Product</td>
              <td>Link</td>
            </tr>
          </thead>
          <tbody>
            {affiliates && affiliates.map(affiliate => (
              <tr key={affiliate.id}>
                <td >{affiliate.company}</td>
                <td >{affiliate.product}</td>
                <td >{affiliate.link}</td>
                <td >
                  <button onClick={()=>{deleteAffiliate(affiliate.id)}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddAffiliate loadAffiliates={loadAffiliates}/>
    </>
  )
}