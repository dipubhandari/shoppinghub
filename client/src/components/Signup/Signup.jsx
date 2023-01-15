import './Signup.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Signup = (props) => {


    //  hiding the header while in signup page
    useEffect(() => {
        props.isAccountPage(true)
    }, [])



    return (
        <>
            
          
        <form method="post">
            <table>
                <tr bgcolor="orange">
                    <th colSpan="3"><font color="white" />Create New Account</th>
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
                    <td align="center"><input type="submit" value="Submit" />
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