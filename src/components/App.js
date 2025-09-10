
import React, { useEffect, useState,useRef } from "react";
import './../styles/App.css';

const App = () => {

  const [time,setTime] = useState(0); // initally time is zero
  const [laps,setLaps] = useState([]); // initally laps is empty array later we fill it.
  const timeRef = useRef(null);

  useEffect(()=>{
    return () => clearInterval(timeRef.current);
  },[]);


  const startTimer=()=>{
    if(!timeRef.current){
      timeRef.current = setInterval(()=>{
        setTime((prev)=>prev+1);
      },10);
    }
  };

  /* so above block is for calculation time. befor start timer we chake the there is already calculation time or not. if no then we set inteval 10 ms and add. because we counting in centisecond
  1 centisecond = 10ms; so this way the time is calculation
  */

  const stopTimer = () =>{
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  const resetTimer = () =>{
    stopTimer();
    setTime(0);
    setLaps([]);

  }

  const recordLap = () =>{
    setLaps((prev)=>[...prev,time]);
    console.log(laps);
  }

  const formatTime = (centisecond) =>{
    const minute = Math.floor(centisecond /6000);
    const second = Math.floor((centisecond % 6000)/100);
    const centis = centisecond % 100;

    const pad = (num) => String(num).padStart(2,0);

    return `${pad(minute)}:${pad(second)}:${pad(centis)}`
  }
  return (
     <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{formatTime(time)}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={recordLap}>Lap</button>
      <button onClick={resetTimer}>Reset</button>

      <h2>Laps</h2>
      <ul style={{listStyleType: "none"}}>
        {laps.map((lapTime,index)=>{
          return( <li key={index+1}>{formatTime(lapTime)}</li>)
         
        })}
        
      </ul>
    </div>
  )
}

export default App;
