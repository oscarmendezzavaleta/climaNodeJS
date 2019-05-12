const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=387da16f4cf44fa83f2b1d8a3bf6b954&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}