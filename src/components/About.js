import React from 'react';

function About({ history }){
  return (
    <div>
      <h1>소개</h1>
      <button onClick={() => history.goBack()}>홈으로 이동</button>
    </div>
  );
};

export default About;