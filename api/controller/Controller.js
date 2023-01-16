// import
import Product__Model from '../model/Product_Model.js'
import User__Model from '../model/UserModel.js'
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'
class Controller {



    // controller for creating the user

    static createaccount = async (req, res) => {
        try {

            //    getting data from user
            const { name, password } = req.body
            const email = req.body.gmail

            // checking if user is enter all filed or not
            if (!(name || email || password)) {
                console.log('fill all the ')
                res.send({ error_msg: 'Enter all fileds...' })

            } //  
            else {
                //    check if email already exist in database or not
                const user = await User__Model.findOne({ email })
                if (user) {
                    res.send({ error_msg: 'Account Already Exist With this email' })
                }
                else {
                    const insert = new User__Model({
                        name,
                        email,
                        password
                    })
                    if (await insert.save()) {
                        res.send({ success: 'Congratulation account created' })
                    }
                }

            }

        }
        catch (error) {
            console.log(error)
        }
    }


    static login = async (req, res) => {
        try {
            const { email, password } = req.body

            // check the fileds
            if (!(email && password)) {
                res.send({ error_msg: "Enter all fields..." })
            }

            else {
                // check if email exist or not with password
                const user = await User__Model.findOne(
                    {
                        email,
                        password
                    })

                if (user) {
                    res.send({ success: "Successfully Login...", user: user })
                }
                else {
                    res.send({ error_msg: "Please enter correct details" })
                }

            }
            // check the email exist or not

        } catch (error) {
            console.log(error)
        }



    }


}


export default Controller