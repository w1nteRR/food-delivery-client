import axios from 'axios'

export const auth0API = () => {
    
    const domain = process.env.REACT_APP_AUTH0_DOMAIN!

    return {
        getUserData: async (token: string, sub: string) => {
            try {

                const user = await axios.get(`https://${domain}/api/v2/users/${sub}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                return user.data

            } catch (err) {
                throw err
            }
        }
    }
}