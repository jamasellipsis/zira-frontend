import axios from 'axios'

class ApiUsers {

    URL = 'http://zirabackend-env.eba-tpevs9jb.us-east-2.elasticbeanstalk.com/api'
    options = {
        headers: {
            'Content-type': 'application/json'
        }
      };
    singUpUser = (userData) => {
        return axios.post(this.URL + '/users', userData, this.options)
    }
}

export default (new ApiUsers());