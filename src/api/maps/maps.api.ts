import axios from 'axios'

export const mapsAPI = () => {
    
    const KEY = process.env.REACT_APP_MAP_KEY

    return {
        getCityByCoords: async (latitude: number, longitude: number ) => {

            const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${KEY}`

            try {

                const res = await axios.get(url)

                return res.data

            } catch (err) {
                throw err
            }
        }
    }
}