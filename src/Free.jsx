import { useState } from 'react'

export default function Free() {

  const [data, setData] = useState({data: '', email: ''})
  const handleInput = (e) => setData({...data, [e.target.name]: e.target.value})

  return (
    <>
      <div className='free-stuff'>
        <h1>Give me your email and I'll give you some "free" stuff</h1>
      </div>
      <div className='form-container'>
        <div className="form-box">
          <form className='contact-form'>
            <div className="mb-3">
              <label className='form-label' htmlFor="style">Name</label>
              <input className='input' onChange={e=>handleInput(e)} type="text" id="name" name="name" value={data.name} className="form-control"/>
            </div>
            <div className="mb-3">
              <label className='form-label' htmlFor="color">Email</label>
              <input className='input' onChange={e=>handleInput(e)} type="text" height="" id="email" name="email" value={data.email} className="form-control"/>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}