import { useState, useEffect } from "react"
import { useStore } from "../ContextStore"
import DeleteModal from "../utils/DeleteModal"

export default function SubscriberList () {

  const {
    subscribers,
    loadSubscribers,
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
    loadSubscribers()
  }, [])

  useEffect(() => {
    selection && setDeleteModal(true)
  }, [selection])

  const select = (subscriber) => {
    setSelection(subscriber)
    setSelectFrom("subscriber")
  }

  return (
    <>
      {deleteModal && selectFrom === "subscriber" ?
        <DeleteModal
          url={urls.subscriber(selection.id)}
          callback={loadSubscribers}
          setSelection={setSelection}
          item={`${selection.email}`}
        />
        :
        null
      }
      <div className="form-box" style={{width: "50%"}}>
        <h4>Subscribers</h4>
      </div>
      <div className="form-box" style={{width: "80%"}}>
        <table style={{color: "white", width: "100%", padding: "15px"}}>
          <thead>
            <tr>
              <td>Email</td>
              <td>First Name</td>
            </tr>
          </thead>
          <tbody>
            {subscribers && subscribers.map(subscriber => (
              <tr key={subscriber.id}>
                <td >{subscriber.email}</td>
                <td >{subscriber.first_name}</td>
                <td >
                  <button onClick={()=>{select(subscriber)}}>Delete</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  )
}