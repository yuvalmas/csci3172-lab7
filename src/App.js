import './App.css';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';
import { useState } from 'react';
import FormComponent  from './FormComponent';
import ProfileComponent from './ProfileComponent';
import Dashboard from "./Dashboard";
function App() {

  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleFormSubmit = ({isValid, data}) => {
    console.log(data);
    if(isValid){
      setUser(data);
      setError('');
    }else{
      setError('Please fill all the fields');
      setUser(null);
    }
  };

  return (
    <Router>
      <Routes>
      <Route path='/' element={user ? <Navigate replace to='/profile'/> : <FormComponent onSubmit={handleFormSubmit}/>}></Route>
      <Route path='/profile' element={user ? <ProfileComponent user={user}/> : <Navigate replace to='/'/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
