import axios from 'axios'

const request = axios.create({
    timeout: 8000
})

export default request;