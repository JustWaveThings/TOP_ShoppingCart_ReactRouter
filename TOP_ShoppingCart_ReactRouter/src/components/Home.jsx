import React, { useEffect, useState } from "react";
import forgetfulnessReasons from "../forgetReason";
import commonlyMisplacedItems from "../forgetItem";
import randomPlaceForget from "../../utils";

/* const activeIndex = setIndex(Math.floor(Math.random() * commonlyMisplacedItems.length));
const [index, setIndex] = useState(0); */

/* useEffect(() => {
		console.log(activeIndex);
		//randomPlaceForget(forgetfulnessReasons, activeIndex, 'red', 300);
	}, []); */

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
