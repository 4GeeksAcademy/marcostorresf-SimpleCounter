import React, {useState} from "react";
import Counter from "./Counter";

//create your first component
const Home = () => {
  let [seconds, setSeconds] = useState (0)
  setInterval(() => {
//   console.log(seconds,"firts")
  setSeconds (seconds++)
//   console.log(seconds,"seconds")
  }, 1000)


  return (
		<div className="text-center">
			<Counter seconds={seconds}/>  	
		</div>
	);
};

export default Home;