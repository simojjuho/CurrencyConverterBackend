//Using axios to get Currency rates from external API:
const axios = require('axios')

//API key is stored in environment variable:
const config = require('../utils/config')

const baseUrl = "https://api.currencyfreaks.com/latest?apikey="

const getRates = async () => {
    const rates = await axios.get(`${baseUrl}${config.CURRENCYFREAKS_API_KEY}`)
    return rates.data
}

module.exports = {
    getRates
}