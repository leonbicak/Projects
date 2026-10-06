"use client";
import { useState } from "react";
  import styles from "./Dashboard.module.css";

  

export default function BoardNumList() {
  const BoardNumArr = Array.from({ length: 20 }, (_, i) => i + 1)
  const [score1, setScore1]= useState (501)
  const [score2, setScore2]= useState (501);
  
  return (
<>
<p>Player1</p>
<p>Score: {score1}</p>
<p>Player2</p>
<p>Score: {score2}</p>




    <div className={styles.pad}>
      {BoardNumArr.map((BoardNum) => (
        <button key={BoardNum} className={styles.BoardNum} onClick={()=> setScore1(score1-BoardNum)}>
          {BoardNum}
        </button>
      ))}
    </div>
    </>
  );
}