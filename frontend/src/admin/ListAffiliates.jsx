import { useState, useEffect } from "react"
import AddAffiliate from "./AddAffiliate"
import { useStore } from "../ContextStore"
import DeleteModal from "../utils/DeleteModal"

export default function AffiliateList () {

  const {
    affiliates,
    loadAffiliates,
    urls,
    request,
    selection,
    setSelection,
    deleteModal,
    setDeleteModal,
    selectFrom,
    setSelectFrom,
    addAffiliateModal,
    setAddAffiliateModal
  } = useStore()

  useEffect(() => {
    loadAffiliates()
  }, [])

  useEffect(() => {
    selection && setDeleteModal(true)
  }, [selection])

  const select = (affiliate) => {
    setSelection(affiliate)
    setSelectFrom("affiliate")
  }

  return (
    <>
      {deleteModal && selectFrom === "affiliate" ?
        <DeleteModal
          url={urls.affiliate(selection.id)}
          callback={loadAffiliates}
          setSelection={setSelection}
          item={`${selection.company}`}
          />
        :
        null
      }
      <div className="form-box" style={{width: "80%", display: "flex", flexDirection: "column"}}>
        <div className="form-box" style={{width: "50%", display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
          <h4>Affiliates</h4>
          <button onClick={() => setAddAffiliateModal(true)}>Add Affiliate</button>
        </div>
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
                  <button onClick={()=>{select(affiliate)}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {addAffiliateModal && <AddAffiliate />}
    </>
  )
}