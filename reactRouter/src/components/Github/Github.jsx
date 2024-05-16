import React from "react";
import { useState, useEffect } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ashish-509")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="m-4 p-4 text-center text-3xl bg-gray-400 text-white rounded-xl">
        Github Followers : {data.followers}{" "}
      <img src={data.avatar_url} alt="Ashish's Github Image" className="mx-auto rounded-full h-40 w-40" />
      <h2>Name : {data.login} </h2>
      </div>
    </>
  );
}

export default Github;
