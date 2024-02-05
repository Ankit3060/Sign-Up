import { useState } from 'react'
import './App.css'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Navbar from './components/Navbar';

function App() {

   // State to track which page to display
   const [isSignIn, setIsSignIn] = useState(true);

   // Function to toggle between sign-in and sign-up pages
   const togglePage = () => {
     setIsSignIn(!isSignIn);
   };

  return (
    <>
    <Navbar />
      {isSignIn ? <Signin togglePage={togglePage} /> : <Signup togglePage={togglePage} />}
    </>
  )
}

export default App
