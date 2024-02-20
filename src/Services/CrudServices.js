
import Axios from './AxiosServices.js'
const config = require('../Configuration/Configuration.js' )
const axios=new Axios()
export default class CrudServices {
    createRecord = (data) => {
        console.log(`${data} and ${config.createReacord}`)
        return axios.post(config.createReacord,data,false);
    }

    updateRecord = (data) => {
        return axios.post(config.updateRecord,data,false);
    }
    ReadRecord(){
        console.log(config.getRecord)
        return axios.get(config.getRecord,false);
    }
}
