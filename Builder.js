import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './css/Builder.css'
const Builder = (props) => {
  const navigate = useNavigate()
  const [builderData, setBuilderData] = useState([])
  let fetchData = async () => {
    let response = await axios.get(props.api, {
      headers: {
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTE1MTE1YTAwNGQzMGY4ZTJhYzMzOSIsImlhdCI6MTY4NTE4MzQzOH0.rQSAtDQLfU4UvxsVv7r0cWfaPRTiLkunnkyK2KJSkrI"
      }
    }).catch((error) => { console.log(error) })
    console.log(response.data.data)
    setBuilderData(response.data.data)
  }

  useEffect(() => {
    fetchData()
    if (!localStorage.getItem('user-token')) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <div className="main-table">
        <div className="t-head">
          <div>Full Name</div>
          <div>Email</div>
          <div>Status</div>
          <div>applied at</div>
        </div>
        <div className="t-bod">
          {builderData.map((item) => {
            return (
              <Link key={item._id} to={`/detail/${item._id}`} className='div-link'>
                <div>{item.firstname + " " + item.lastname}</div>
                <div>{item.email}</div>
                <div>{item.status}</div>
                <div>{(new Date(item.createdAt)).toLocaleString()}</div>
              </Link>
            )
          })}
          {/* <Link to={`/detail/:1`} className='div-link'>
            <div>John</div>
            <div>john@example.com</div>
            <div>Active</div>
            <div>23:12am</div>
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default Builder
