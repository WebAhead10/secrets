import React from "react";
import Login from "./Login";
import './Login.css';
import PostsList from "./PostsList";

function App() { //<<< from here the app will start to read
  const [loggedIn, setLoggedIn] = React.useState(false)
  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />
  }
  if (loggedIn) {
    return <PostsList />
  }
 
}

export default App;
