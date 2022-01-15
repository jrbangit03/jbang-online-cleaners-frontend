import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CleanerComponent from './components/CleanerComponent';
import ClientComponent from './components/ClientComponent';
// import LoginComponent from './components/LoginComponent';
import RegisterUserComponent from './components/RegisterUserComponent';

// const GetCleaners = () => {


//   const [cleaners, setCleaners] = useState([]);

//   const fetchCleaners = () => {
//     axios.get("http://localhost:8181/get-cleaners").then(response => {
//       const data = response.data;
//       // const cleaners = data;
//       setCleaners(data);
//   });
//   }

//   useEffect(() => {
//     fetchCleaners();
//   }, []);
  
//   return cleaners.map((cleaner, index) => {
//     return (
//       <div key={index}>
//         <p>{cleaner.cleaner_id}</p>
//         <p>{cleaner.cleaner_fn}</p>
//       </div>
//     );
//   });
// };

function App() {
  return (
    <div className="App">
      {/* <CleanerComponent />
      <ClientComponent />
      <TestComponent /> */}
      <RegisterUserComponent />
      {/* <LoginComponent /> */}
    </div>
  );
}

export default App;
