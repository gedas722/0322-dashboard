import React, { useState, useEffect } from "react";

function Fetch() {
  const [posts, setPosts] = useState([]);

  const getApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPosts(json);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}

export default Fetch;
