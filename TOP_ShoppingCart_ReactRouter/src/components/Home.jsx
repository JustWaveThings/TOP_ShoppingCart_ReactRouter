import React, { useEffect, useState } from "react";




function Home() {
  return (
    <div className="home--cont">
      <div className="home--left">
        <h1 className="home--title">You've got your reasons...</h1>
        <button className="home--button">Replace what was lost</button>
      </div>
      <div className="home--right">
        <div className="home--forget--cont"></div>
      </div>
    </div>
  );
}

export default Home;
