import axios from "axios";

const request = axios.create({
    baseURL:'http://localhost:8080/'
})

request.interceptors.response.use(
    (response) => {
        const { data } = response
        return response.data
    }
)

export default request