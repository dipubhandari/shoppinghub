import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = (props) => {

    //  hiding the header while in login page
    useEffect(() => {
        props.isAccountPage(true)
    }, [])

    return (
        <>
            <Link to={`/`}></Link>
        <form method="post" className='login_signup_form' id='login_signup_form'>
            <table>
                <tr bgcolor="orange">
                    <th colSpan="3"><font color="white" />Enter login details</th>
                </tr>
                <tr height="20"></tr>
                <tr>
                    <td>Email:</td>
                    <td></td>
                    <td>
                        <input type="text" name="username" />
                    </td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>:</td>
                    <td>
                        <input type="password" name="password" />
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