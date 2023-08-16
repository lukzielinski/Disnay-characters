import { Api } from '../../Api'

const api = new Api({
    baseApiParams: {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    },
})

if (import.meta.env.PROD) {
    api.baseUrl = 'api'
} else {
    let ip = 'http://localhost:4000'
    if (import.meta.env.VITE_SERVER_IP) {
        ip = 'http://' + (import.meta.env.VITE_SERVER_IP as string)
    }
    api.baseUrl = `${ip}/api`
}

export default api
