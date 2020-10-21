import axios from 'axios'

class ApiUsers {

    URL = 'http://zirabackend-env.eba-tpevs9jb.us-east-2.elasticbeanstalk.com/api'
    options = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        }
      };
    singUpUser = (userData) => {
        return axios.post(this.URL + '/users', userData, this.options)
    }
    getUserByName = (userName) => {
        return axios.get(this.URL + '/users/' + userName)
    }
    getUserById = (userId) => {
        return axios.get(this.URL + '/users/id/' + userId)
    }
    getClasses = (userId) => {
        return axios.get(this.URL + '/users/'+userId+'/classes' )
    }
}

export default (new ApiUsers());