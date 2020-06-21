import React from 'react';
import Routes from "./Routes.js"
import AuthenticatedUserProvider from "./contexts/AuthenticatedUser.js";
import './styles/css/home.css'

function App() {

  return (
    <AuthenticatedUserProvider>
      <Routes />
    </AuthenticatedUserProvider>

  );
}

export default App;
