import axios from "axios";

const customer_endpoint = "http://localhost:8181/client"

class CustomerServices{

    getClients(){
        return axios.get(customer_endpoint);
    }
}

export default new CustomerServices();