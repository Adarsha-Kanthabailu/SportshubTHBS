const app = require('express')()
const path = require('path')
const shortid = require('shortid')
const Razorpay = require('razorpay')
const cors = require('cors')

app.use(cors())

const razorpay = new Razorpay({
    key_id: 'rzp_test_yG2l3M0Xpx8J3C',
    key_secret: 'Z9WnFmbayceeSpnmD6cjPZoV'
})

app.get('/logo.svg',(req, res)=> {
    res.sendFile(path.join(__dirname, 'logo.svg'))
})

app.post('/razorpay',async(req, res)=>{
    const payment_capture = 1
    const amount = 499
    const currency = 'INR'
    const options = {
        amount: amount*100,
        currency,
        receipt: shortid.generate(),
        payment_capture
    }

    try{
    const response = await razorpay.orders.create(options)
    console.log(response)
    res.json({
        id: response.id,
        currency: 'INR',
        amount: response.amount
    })
    }
    catch(error){
        console.log(error);
    }
})

app.listen(1337, () => {
    console.log('Listening on 1337')
})