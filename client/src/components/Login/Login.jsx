import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'
import { Navigate, redirect } from "react-router-dom"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = (props) => {

    // state for input in the form field
    const [input, setInput] = useState({})

    // state for login success 
    const [is_success_login, setLogin] = useState(false)

    // handling the input in the signup fields
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInput({ ...input, [name]: value })
    }
    // validating the signup form and sending it to server
    const [error, setError] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    const Login = async (e) => {
        e.preventDefault()
        if (!(input.password && input.email)) {
            toast.error('Please enter the details', {
            });
        }
        else {
            // sending data to the server
            await axios.post(`/api/login`, input).then((response) => {
                // handling error message
                toast.error(response.data.error_msg, {
                });

                if (response.data.user) {
                    // storing user in localstore
                    const login = localStorage.setItem('shoppinghub', JSON.stringify(response.data.user))
                    toast.success(response.data.success, {
                    });
                    props.isAccountPage(false)
                    setLogin(true)
                    props.isLogoutOrLogin('login', true)

                }

            }).catch((eror) => {
                console.log(error)
            })
        }

    }

    //  hiding the header while in login page
    useEffect(() => {
        props.isAccountPage(true)
    }, [])

    return (
        <>
            {/* is user logged in successfully redirect */}
            {(is_success_login) && <Navigate to="/" replace={true} />}
            {/* is user logged in successfully redirect */}

            {/* Toast Message Componenet */}
            <ToastContainer />

            {/* <Link to={`/`}></Link> */}
            <form method="post" className='login_signup_form' id='login_signup_form' onSubmit={Login}>
                <table>
                    <tr bgcolor="orange">
                        <th colSpan="3"><font color="white" />Enter login details</th>
                    </tr>
                    <tr height="20"></tr>
                    <tr>
                        <td>Email:</td>
                        <td></td>
                        <td>
                            <input
                                type="email"
                                onChange={handleInput}
                                value={input.email || ''}
                                name="email"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>:</td>
                        <td>
                            <input
                                type="password" name="password"
                                onChange={handleInput}
                                value={input.password || ''}
                            />
                        </td>
                    </tr>
                    <tr height="10"></tr>
                    <tr>
                        <td></td>
                        <td></td>

                        <td align="center"><input type="submit" value="Submit" /> <br /> <br />
                            <Link to='/newaccount'>Create Account</Link></td>

                    </tr>
                </table>
            </form></>
    )
}

export default Login