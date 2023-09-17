import { useState } from 'react'
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useStore } from '../ContextStore';
import styles from "./Free.module.css";

export default function Free() {

  const { urls, request } = useStore()

  const emptySubscriber = { first_name: '', email: '' }

  const [data, setData] = useState(emptySubscriber)

  const handleInput = (e) => setData({...data, [e.target.name]: e.target.value})
  const reset = () => setData(emptySubscriber)


  const handleSubmit = async (e) => {
    e.preventDefault()
    await request.post(urls.subscribers, data, reset)
  }


  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.front}>
          <div className={styles.content}>
            <h1>Tools for Transformation</h1>
            <p>
            Welcome to Tools for Transformation! I am grateful that you have arrived!
            Who is this for? Anyone who would like to learn more about stress reduction and chooses the path of transformation through direct personal experience.
            Teach tools for life transformation - Including, but not limited to using various techniques (methods such as relaxation techniques, breathing and easy stretching techniques) in person and remote for stress management, awareness/mindfulness, growth in consciousness and making life changes from the present moment from a Yogic/Ayurvedic perspective.
            </p>
          </div>
        </div>
        <div className={styles.back}>
          <div className={styles.content}>
            <h1>Contact Me</h1>
            <form>
              {/* <!-- <label>Your Name :</label> --> */}
              <input type="text" name='first_name' onChange={handleInput} value={data.first_name} placeholder="First Name"/>
              {/* <!-- <label>Your E-mail :</label> --> */}
              <input type="text" name='email' onChange={handleInput} value={data.email} placeholder="Email"/>
              <button className={styles.btn} onClick={handleSubmit}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}