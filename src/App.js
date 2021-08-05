import React from "react";
import Login from "./Login";
import SignUp from "./signup";

import './Login.css';
import PostsList from "./PostsList";
import './PostsList.css';
function App() { 
  const [loggedIn, setLoggedIn] = React.useState(false)
  if (!loggedIn) {
    return <SignUp />
  }
  if (loggedIn) {
    return <PostsList setLoggedIn={setLoggedIn} />
  }
 
}

export default App;
