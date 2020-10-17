import axios from 'axios'

class ApiClasses {

    URL = 'http://zirabackend-env.eba-tpevs9jb.us-east-2.elasticbeanstalk.com/api'
    options = {
        headers: {
            'Content-type': 'application/json'
        }
      };

    
    getAll = (userData) => {
        return axios.get(this.URL + '/classes')
    }
}

export default (new ApiClasses());