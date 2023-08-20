import { useState, useEffect } from "react"
import { resolvePath } from "react-router-dom"

export default function SubscriberList () {

  const [subscribers, setSubscribers] = useState([])

  const loadSubscribers = async () => {
    const url = "http://localhost:8000/subscribers/"
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      setSubscribers(data.subscribers)
    }
    else {
      console.error(response)
    }
  }

  const deleteSubscriber = async (id) => {
    const url = `http://localhost:8000/subscribers/${id}`
    const response = await fetch(url, {method: "DELETE"})
    if (response.ok) {
      loadSubscribers()
    }
  }

  useEffect(() => {
    loadSubscribers()
  }, [])

  return (
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
  )
}