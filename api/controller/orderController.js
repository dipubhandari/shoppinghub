import Order_Model from "../model/Order.js"

class OrderController {

    static Order = async (req, res) => {
        try {

            console.log('This works')
            // getting the detail from user
            const user = req.body.user
            const orderDetails = req.body.orderDetails
            // validating the input
            if (!(user.name && user.email && user.phone && user.address)) {
                console.log('first')
                res.send({ error: 'Enter all the fields' })
            }
            else {
                if (orderDetails.length < 1) {
                    console.log('sedond')

                    res.send({ error: 'Select items' })
                }
                else {
                    // calculating order price 
                    let total = 0
                    const products = orderDetails.map((item, id) => {
                        total += item.qty * item.price
                        return { ...item, totalprice: item.qty * item.price }
                    })
                    console.log(products)
                    console.log(products)
                    const save = await Order_Model.create({
                        name: user.name,
                        email: user.email,
                        address: user.address,
                        phone: user.phone,
                        orderdetails: [products]
                    })
                    if (save) {
                        // response to backend
                        res.send({ success: save })
                    }
                }
            }

        } catch (error) {
            console.log(error)

        }
    }

}


export default OrderController