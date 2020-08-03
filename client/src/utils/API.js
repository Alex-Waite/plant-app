import axios from "axios"

export default {
    createUser: function (username, email, password) {
        return axios.post('/api/signup', {
            username: username,
            email: email,
            password: password
        })
    }
}