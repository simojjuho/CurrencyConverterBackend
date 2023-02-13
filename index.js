//Importing express-library
const express = require('express')
//making app the handle through wich using express
const app = express()
const apiService = require('./requests/apiService')
const config = require('./utils/config')


app.use(express.json())

const currencyRates = async () => {
    const rates = await apiService.getRates()
    return rates
}


//For queries concerning currency rates:
app.get('/currencyrates', async (req, res) => {
    const rates = await currencyRates()
    if(rates === undefined) {
        res.send("<p>Currency rates not available at the moment!</p>")
    } else {
        res.json(rates)
    }
})

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
})