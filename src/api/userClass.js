import axios from 'axios'

class ApiUserClass {

    URL = 'http://zirabackendd-env.eba-stesnmpi.us-east-2.elasticbeanstalk.com/api'
    options = {
        headers: {
            'Content-type': 'application/json'
        }
      };
    joinClass = classData => {
        return axios.post(this.URL + '/user_class', classData, this.options)
    }
}

export default (new ApiUserClass());