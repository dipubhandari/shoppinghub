import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = (props) => {

    // state for input in the form field
    const [input, setInput] = useState({})



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
        console.log('clicked')
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
                // handling success message
                toast.success(response.data.success, {
                });
               
                if (response.data.user) {
                    // storing user in localstore
                    console.log(response.data.user)
                    console.log('storing')
                    localStorage.setItem('shoppinghub_user', JSON.stringify(response.data.user))
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
            <ToastContainer />

            <Link to={`/`}></Link>
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
                                type="text"
                                onChange={handleInput}
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