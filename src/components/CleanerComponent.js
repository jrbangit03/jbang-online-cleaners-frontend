// import React from 'react';
// import CleanerServices from '../services/CleanerServices';
// import { useState } from 'react/cjs/react.development';

// class CleanerComponent extends React.Component{

//     constructor(props){
//         super(props)
//         this.state = {
//             cleaners:[]
//         }
//         // const [cleaners, setCleaners] = useState([]);
//     }

//     componentDidMount(){
//         CleanerServices.getCleaners().then(response =>{
//             this.setState({ cleaners: response.data});
//         })
//     }
    

//     render(){
//         return this.state.cleaners.map((cleaner, index) =>{
//             console.log(cleaner + index + "tite");
//             return (      
//             <React.Fragment key={index}>
//                 <p>{cleaner.cleaner_id}</p>
//                 <p>{cleaner.cleaner_fn}</p>
//             </React.Fragment>)
//         });
//     }
 
// }

// export default CleanerComponent;