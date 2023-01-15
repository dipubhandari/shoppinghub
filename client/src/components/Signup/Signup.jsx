import './Signup.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { URL_SERVER } from '../../config'
import axios from 'axios'

const Signup = (props) => {

    // state for input in the form field
    const [input, setInput] = useState({})

    //  hiding the header while in signup page
    useEffect(() => {
        props.isAccountPage(true)
    }, [])


    // handling the input in the signup fields
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInput({ ...input, [name]: value })
    }
    // validating the signup form and sending it to server
    const [error, setError] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const NewAccount = async (e) => {
        e.preventDefault()
        if (input.password.length < 8) {
            toast.error('Password Should 8 character Long!', {
            });
        }
        else if (input.name.length < 5) {
            toast.error('Name should at least 5 character long!', {
            });
        }
        else {
            console.log(input)
            toast.success('Successfully created!', {
            });

            // sending data to the server
            await axios.post(`/api/register`, input).then((response) => {
                console.log(response)
            }).catch((eror) => {
                console.log(error)
            })
        }

    }

    return (
        <>
            <ToastContainer />

            <form method="post" onSubmit={NewAccount}>
                <table>
                    <tr bgcolor="orange">
                        <th colSpan="3"><font color="white" />Create New Account</th>
                    </tr>

                    <tr height="20"></tr>
                    <tr>
                        <td>Name:</td>
                        <td></td>
                        <td>
                            <input
                                type="text"
                                name="name"
                                onChange={handleInput}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td></td>
                        <td>
                            <input
                                required
                                type="text"
                                name="gmail"
                                onChange={handleInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>:</td>
                        <td>
                            <input
                                required
                                type="password"
                                name="password"
                                onChange={handleInput}
                            />
                        </td>
                    </tr>
                    <tr height="10"></tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td align="center"><input type="submit" value="New" />
                            <br />
                            <br />
                            <Link to='/login'>Sign In</Link>
                        </td>

                    </tr>
                </table>
            </form></>
    )
}

export default Signup