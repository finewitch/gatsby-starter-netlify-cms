import React from 'react';

export const Loading = () => {

  return (
    <div className="loading">
       {/* <div class="circle"></div>
      <p>Loading</p> */}
      <svg width="300px"  height="300px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-ball" ><circle cx="50" cy="20" r="13" fill="#ffffff"><animate attributeName="cy" calcMode="spline" values="23;77;23" keyTimes="0;0.5;1" dur="2" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" begin="0s" repeatCount="indefinite"></animate></circle></svg>
    </div>
  )
}

export default Loading