import React from "react";
import postsData from "./data";

import './PostsList.css';
function PostsList(props) {
  const [secret, setSecret] = React.useState("")
  const [posts, setPosts] = React.useState(postsData)

  const postItems = posts.map(post =>
  (
    <li className="post" key={post.id}>#{post.id}
      <p>{post.content}</p>
    </li>
  ));

  return (
    <>
      <div className="card">
        <ul>
          <h1>Secrets...</h1>
          <div className="addingSecret">
            <input className="newSecret" type="text" value={secret} onChange={(event) => setSecret(event.target.value)} required />
            <button className="addSecret" onClick={() => {
              const newSecret = { id: posts.length + 1, content: secret, userName: "lolo123" }
              setPosts(posts.concat(newSecret));
              setSecret("");
            }}>Add secret </button>
          </div>
          {postItems.length ? (
            postItems
          ) : (
            <li className="card">No results found</li>
          )}
        </ul>
        <button className="login" onClick={() => {
          props.setLoggedIn(false)
        }}>Log out</button>
      </div>
    </>
  );
}

export default PostsList;
