import { useState, useEffect } from "react"
import AddAffiliate from "./AddAffiliate"
import { useStore } from "../ContextStore"

export default function AffiliateList () {

  const { affiliates, loadAffiliates, urls, request } = useStore()

  const deleteAffiliate = async (id) => {
    await request.delete(urls.affiliate(id), loadAffiliates)
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
            {affiliates?.map(affiliate => (
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