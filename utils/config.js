require('dotenv').config()

const PORT = process.env.PORT
const CURRENCYFREAKS_API_KEY = process.env.CURRENCYFREAKS_API_KEY

module.exports = {
    PORT,
    CURRENCYFREAKS_API_KEY
}