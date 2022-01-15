import axios from "axios";

const loginEndpoint = "http://localhost:8181/login"

class LoginService{

    validateLogin(){
        return axios.get(loginEndpoint)
    }
}

export default new LoginService();