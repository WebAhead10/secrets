import React from "react";
import posts from "./data";

function PostsList() {
  const postItems = posts.map(post =>
  (
    <li className="post" key={post.id}>#{post.id}
      <p>{post.content}</p>
    </li>
  ));
  return (
    <ul className="grid">
      <h1>Secrets...</h1>
      {postItems.length ? (
        postItems
      ) : (
        <li className="card">No results found</li>
      )}
    </ul>
  );
}

export default PostsList;
