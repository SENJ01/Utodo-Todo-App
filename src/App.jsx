import { useState } from 'react'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Sidebar1 from './components/Sidebar/Sidebar.jsx';
import HeaderBar from './components/Header/HeaderBar.jsx';
import Todo from './components/Todo/Todo.jsx';
import Overdue from './components/Overdue/Overdue.jsx';
import { useAuthContext } from "@asgardeo/auth-react";
// const routers = createBrowserRouter([

  
// ]);
function App() {
  
  const { state, signIn, signOut } = useAuthContext();
  return (
    <>
     {/* <HeaderBar/>
     <Sidebar1/> */}
     <div className="App">
      {
        state.isAuthenticated
          ? (
            <div>
              <ul>
                <li>{state.username}</li>
              </ul>

              <button style={{ textAlign: "center" }} onClick={() => signOut()}>Logout</button>
            </div>
          )
          : <button onClick={() => signIn()}>Login</button>
      }
    </div>
    </>
  )
}

export default App
