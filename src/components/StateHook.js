import React, { useState } from 'react'

function StateHook() {

    // let score = 0;
    let [score,setScore] = useState(0);
    let [singles,setSingles]=useState(0);
    let [balls,setBalls] = useState(0);
    let [doubles,setDoubles]=useState(0);
    let [fours,setFours]=useState(0);
    let [sixes,setSixes]=useState(0);
    let [wickets,setWickets]=useState(0);
    let [nob,setNob] = useState(0);

    console.log("create component");


  return (
    <div>
    <h1>score:{score}/{wickets}</h1>
    <h1>overs:{parseInt(balls/6)}.{balls%6}</h1>
    <h1>singles:{singles}</h1>
    <h1>doubles:{doubles}</h1>
    <h1>fours:{fours}</h1>
    <h1>sixes:{sixes}</h1>
    <h1>wickets:{wickets}</h1>
    <h1>no balls:{nob}</h1>
     <div id="buttonsDiv">
    <button type='button' onClick={()=>{
        setScore(score +1);
        setBalls(balls+1);
        setSingles(singles+1);
    }}>single</button>

    <button type='button' onClick={()=>{
        setScore(score+2);
        setBalls(balls+1);
        setDoubles(doubles+1);
    }}>doubles</button>

    <button type='button' onClick={()=>{
        setScore(score+4);
        setBalls(balls+1);
        setFours(fours+1);
    }}>fours</button>

<button type='button' onClick={()=>{
         setScore(score+6);
         setBalls(balls+1);
         setSixes(sixes+1);
    }}>sixes</button>

<button type='button' onClick={()=>{
        setBalls(balls+1);
        setWickets(wickets+1);
    }}>wickets</button>

<button type='button' onClick={()=>{
         setScore(score+1);
        setNob(nob+1);
    }}>no balls</button>
    </div>
    </div>
  )
}

export default StateHook