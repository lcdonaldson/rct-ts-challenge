import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserDetail from './pages/UserDetail';
import userData from './data/data.json';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name: string) => {
    setLoggedIn(true);
    setUserName(name);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login onLogin={handleLogin} />}
        />
        {loggedIn ? (
          <>
            <Route
              path="/dashboard"
              element={<Dashboard userName={userName} />}
            />
            <Route path="/user/:userId" element={<UserDetail users={userData} />} />
          </>
        ) : null}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
