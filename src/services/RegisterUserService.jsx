import axios from "axios";

const registerUserEndpoint = "http://localhost:8181/user/register/"

class RegisterUserService{

    registerUser(){
        return axios.post(registerUserEndpoint)
    }
}

export default new RegisterUserService();