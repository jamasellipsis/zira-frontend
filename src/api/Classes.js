import axios from 'axios'

class ApiClasses {

    URL = 'http://zirabackendd-env.eba-stesnmpi.us-east-2.elasticbeanstalk.com/api'
    options = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        }
      };
    
    createClass = (data) => {
        return axios.post(this.URL + '/classes', data, this.options)
    }

    getAll = () => {
        return axios.get(this.URL + '/classes')
    }

    getById = (idClass) => {
        return axios.get(this.URL + '/classes/' + idClass)
    }
}

export default (new ApiClasses());