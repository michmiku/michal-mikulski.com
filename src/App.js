import React from 'react';
import Routes from "./Routes.js"
import AuthenticatedUserProvider from "./contexts/AuthenticatedUser.js";
console.disableYellowBox = true;

function App() {

  return (
    <AuthenticatedUserProvider>
      <div className="container-fluid pr-0 pl-0 bg-light min-vh-100">
        <Routes />
      </div >
    </AuthenticatedUserProvider>

  );
}

export default App;
