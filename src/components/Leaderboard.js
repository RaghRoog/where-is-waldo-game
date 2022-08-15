import React from "react";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase-config.js'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import style from '../styles/leaderboard.css'

let Leaderboard = () => {
    let [bestTimes, setBestTimes] = useState([])
    const bestTimesCollectionRef = collection(db, 'bestTimes')
    useEffect(() => {
      const getBestTimes = async () => {
        const data = await getDocs(bestTimesCollectionRef)
        setBestTimes(data.docs.map((doc) => ({...doc.data()})))
      }
      getBestTimes()
    }, [])
    return(
        <div className="leaderboard">
            <div className="page-title">Leaderboard</div>
            <div className="time-container">
                {bestTimes.sort(function(a, b){return a.time-b.time}).map((bestTime) => {return <div className="time-item">
                    <div className="item-name">{bestTime.name}</div>
                    <div className="item-time">{bestTime.time} seconds</div>
                </div>})}
            </div>
            <Link className="item-name" to='/'>Start</Link>
        </div>
    )
}

export default Leaderboard;