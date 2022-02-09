import React from "react";

function Home({ history }) {
  return (
    <div>
      <h1>홈</h1>
      <p>여기는 홈</p>
      <button onClick={() => history.push('/about')}>about으로 이동</button>
    </div>
  );
}

export default Home;
