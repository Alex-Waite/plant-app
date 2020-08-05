import axios from "axios"
const APIKEY = "_Z7tb-K4C49IqWHoxXntndWoQY4ImaBOq1jMifpQOh4"

export default {
    createUser: function (username, email, password) {
        return axios.post('/api/signup', {
            username: username,
            email: email,
            password: password
        })
    },
    queryPlants: function (searchVal){
        return axios.get({
            method: 'get',
            url: `https://trefle.io/api/v1/plants?token=${APIKEY}&filter[common_name]=${searchVal}`,
            responseType: 'stream'

          }).then(function (response) {
              console.log(response)
          })
    }
}