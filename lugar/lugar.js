const axios = require('axios');


const getLugarLatLng = async(dir) => {



    const encodeUrl = encodeURI(dir);
    // console.log(encodeUrl);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl}`,
        headers: { 'X-RapidAPI-Key': 'hzZ5Kf1tDImshONJU6ZWBHEH522Rp1Q5T8PjsnkPWFnjYRCnaH' }

    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`NO hay resultados para ${dir}`)
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;



    return {
        direccion,
        lat,
        lng


    }
}
module.exports = {
    getLugarLatLng
}