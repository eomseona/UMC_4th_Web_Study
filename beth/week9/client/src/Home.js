import React from "react";

const Home = () => {
  const user = localStorage.getItem("username");
  console.log(user);
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <h2>Welcome {user} !!!</h2>
      </div>
    </>
  );
};

export default Home;
