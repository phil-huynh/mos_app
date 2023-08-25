import { useState, useEffect } from "react"
import { useStore } from "../ContextStore"

export default function SubscriberList () {

  const { subscribers, loadSubscribers, urls, request } = useStore()

  const deleteSubscriber = async (id) => {
    await request.delete(urls.subscriber(id), loadSubscribers)
  }

  useEffect(() => {
    loadSubscribers()
  }, [])

  return (
    <>
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
                  <button onClick={()=>{deleteSubscriber(subscriber.id)}}>Delete</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  )
}