import React from "react";
import Login from "./Login";
import './Login.css';
import PostsList from "./PostsList";
import './PostsList.css';
function App() { 
  const [loggedIn, setLoggedIn] = React.useState(false)
  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />
  }
  if (loggedIn) {
    return <PostsList setLoggedIn={setLoggedIn} />
  }
 
}

export default App;
