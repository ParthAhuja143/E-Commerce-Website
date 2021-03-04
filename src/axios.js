import axios from 'axios'

const instance = axios.create({
    baseURL : 'http://localhost:5001/clone-96988/us-central1/api' // the API url (Cloud Function)
})

export default instance