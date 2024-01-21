import React, { useState, useEffect } from 'react'
import './css/Detail.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState({})
  console.log(id)
  const {profilePicture,firstname,lastname,phone,panNumber,adhaarNumber,email,city,createdAt,reraNumber,state,status,updatedAt,userType} = detail

  const fetchDetail = async () => {
    let response = await axios.get(`https://iwezrdei3k.execute-api.ap-south-1.amazonaws.com/local/api/builder/id/${id}`, {
      headers: {
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTE1MTE1YTAwNGQzMGY4ZTJhYzMzOSIsImlhdCI6MTY4NTE4MzQzOH0.rQSAtDQLfU4UvxsVv7r0cWfaPRTiLkunnkyK2KJSkrI"
      }
    }).catch((error) => { console.log(error) })
    console.log(response.data.data)
    setDetail(response.data.data)
  }

  useEffect(() => {
    fetchDetail()
  }, [])

  return (
    <>
      <div className="profile">
        <div className="top-section">
          <div className="img">
            <img src="https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-376.jpg" alt="" />
            {/* <img src={profilePicture} alt="profile pic" /> */}
            <div className="ema-name">
              <p className='name'>{firstname + " "+lastname}</p>
              <p className='email'>{email}</p>
            </div>
          </div>
          <div className="status">
              <div><span>Status</span> : {status}</div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="left">
            <div className="small-card">
              <div className="name">Phone Number:</div>
              <p>{phone}</p>
            </div>  
            <div className="small-card">
              <div className="name">Pan Number:</div>
              <p>{panNumber}</p>
            </div> 
            <div className="small-card">
              <div className="name">Pan Front Back:</div>
              <p>323323</p>
            </div>   
            <div className="small-card">
              <div className="name">Adhaar Number:</div>
              <p>{adhaarNumber}</p>
            </div> 
            <div className="small-card">
              <div className="name">Adhaar Front Back:</div>
              <p>1111 3233 5533</p>
            </div> 
            <div className="small-card">
              <div className="name">Rera Number:</div>
              <p>2343 4344 4344</p>
            </div> 
            <div className="small-card">
              <div className="name">City:</div>
              <p>{city}</p>
            </div> 
            <div className="small-card">
              <div className="name">State:</div>
              <p>{state}</p>
            </div>
          </div>
          <div className="right">
          <div className="small-card">
              <div className="name">Created At:</div>
              <p>{(new Date(createdAt)).toLocaleString()}</p>
            </div>  
            <div className="small-card">
              <div className="name">Company Name:</div>
              <p>{12434454255}</p>
            </div>
            <div className="small-card">
              <div className="name">Company Registered:</div>
              <p>19 may 2019</p>
            </div>
            <div className="small-card">
              <div className="name">Company GST Number:</div>
              <p>19 may 2019</p>
            </div>
            <div className="small-card">
              <div className="name">Company Adress:</div>
              <p>Bengaluru near cross building</p>
            </div>
            <div className="small-card">
              <div className="name">Rera Number:</div>
              <p>{reraNumber}</p>
            </div>  
            <div className="small-card">
              <div className="name">User Type:</div>
              <p>{userType}</p>
            </div> 
            <div className="small-card">
              <div className="name">Company:</div>
              <p>...com</p>
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
