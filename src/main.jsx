import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Signup from './Pages/Signup/signup.jsx';
import Login from './Pages/Login/login.jsx'
import { AuthProvider } from "@asgardeo/auth-react";

import './index.css';

const logoUrl = "https://drive.google.com/uc?export=view&id=13BWQklEsTKkMJP9vTYlgLYY2tNIo46M3";  // Direct Google Drive link

const Index = () => (
  <AuthProvider
    config={{
      signInRedirectURL: "http://localhost:5173/login",
      signOutRedirectURL: "http://localhost:5173",
      clientID: "Uws1Z01IAZ8xIwQGphsnus4hvIEa",
      baseUrl: "https://api.asgardeo.io/t/anjanadep",
      scope: ["openid", "profile"],
      branding: {
        logo: logoUrl
      }
    }}
  >
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </AuthProvider>
);
ReactDOM.createRoot(document.getElementById('root')).render(<Index />);