import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './css/Login.css'
import { useNavigate } from 'react-router-dom'
const Login = (props) => {


    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const doSomething = async (e) => {
        e.preventDefault()
        let result = await axios.post(`https://iwezrdei3k.execute-api.ap-south-1.amazonaws.com/local/api/user/login`,JSON.stringify({email:user.email, password:user.password}),{
            headers:{
                "Content-Type":"application/json"
            }
        }).catch((error)=>{console.log(error)})
        localStorage.setItem('user-token',result.data.data.token)
            navigate('/builder')
console.log(result)
    }
    useEffect(() => {
        if(localStorage.getItem('user-token')){
            navigate('/builder')
        }
    }, [])
    return (
        <> 
            <div className="flex-container">
                <div className='form-box'>
                    <form onSubmit={doSomething} className='con-two'>
                        <div className="form-outline mb-3">
                            <label className="form-label mb-1" htmlFor="form2Example1">Email address</label>
                            <input type="email" id="form2Example1" name='email' value={user.email} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="form-outline mb-3">
                            <label className="form-label mb-1" htmlFor="form2Example2">Password</label>
                            <input type="password" id="form2Example2" name='password' value={user.password} onChange={handleChange} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mb-0">Sign in</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
