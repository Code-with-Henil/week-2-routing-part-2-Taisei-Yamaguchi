// App.js
import React, { useState } from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}/>
        <Route path="/dashboard" element={<Dashboard loggedIn={loggedIn}/>}/> 
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
