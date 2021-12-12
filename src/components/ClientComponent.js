import axios from "axios";
import React, {useState} from "react";
import CustomerServices from '../services/CustomerServices';

class ClientComponent extends React.Component{

    constructor(prop){
        super(prop)
        this.state = {
            clients: []
        }
    }

    componentDidMount(){
        CustomerServices.getClients().then(response => {
            this.setState({clients:response.data});
        })
    }

    render(){
        return this.state.clients.map((client, index) =>{
            return(
            <div key={index}>
                <p>{client.client_id}</p>
                <p>{client.client_fn}</p>
            </div>)
        })
    }
}

export default ClientComponent;