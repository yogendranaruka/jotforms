const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const payload = ["vini", "ishani", "kishan", "gopal"]
    res.status(200).json({
        status: 200,
        message: "data fetched",
        data: payload
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})