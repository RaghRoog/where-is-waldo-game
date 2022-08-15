import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import style from './styles/main.css'
import DropdownMenu from './components/DropdownMenu';
import Game from './components/Game';
import Start from './components/Start';
import Leaderboard from './components/Leaderboard';
import { db } from './firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'

function App() {

  let [startTime, setStartTime] = useState()
  function getStartTime(childData) {
    setStartTime(childData)
  }
  let [regisFound, setRegisFound] = useState(false)
  function getRegisState(childData) {
    setRegisFound(childData)
  }
  let [iorwethFound, setIorwethFound] = useState(false)
  function getIorwethState(childData) {
    setIorwethFound(childData)
  }
  let [shaniFound, setShaniFound] = useState(false)
  function getShaniState(childData) {
    setShaniFound(childData)
  }

  let [time, setTime] = useState(0)
  function endTimer() {
      let endTime = performance.now();
      let timeDiff = endTime - startTime;
      let seconds = Math.round(timeDiff);
      setTime(seconds/1000)
  }

  // let [bestTimes, setBestTimes] = useState([])
  const bestTimesCollectionRef = collection(db, 'bestTimes')
  // useEffect(() => {
  //   const getBestTimes = async () => {
  //     const data = await getDocs(timesCollectionRef)
  //     setBestTimes(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  //   }

  //   getBestTimes()
  // }, [])

  useEffect(() => {
    if(regisFound&&iorwethFound&&shaniFound){
      endTimer()
    }
  }, [regisFound,iorwethFound,shaniFound])
  
  const [name, setName] = useState('')
  const addBestTime = async () => {
      if(name!=''){
        await addDoc(bestTimesCollectionRef, {name: name, time: time});
        setName('')
        let inputContainer = document.querySelector('.input-container')
        let input = document.querySelector('.name-input')
        let timeDisplayer = document.querySelector('.time')
        let submit = document.querySelector('.submit')
        let inputTitle = document.querySelector('.input-title')
        inputContainer.removeChild(inputTitle)
        inputContainer.removeChild(input)
        inputContainer.removeChild(timeDisplayer)
        inputContainer.removeChild(submit)
        let link = document.createElement('a')
        link.setAttribute('href', '/leaderboard')
        link.innerHTML = 'Check leaderboard'
        inputContainer.appendChild(link)
      }
  }

  if(regisFound&&shaniFound&&iorwethFound){ 
    return(
      <div className="take-name">
        <div className="input-container">
          <div className='input-title'>Enter yout name</div>
          <input onChange={(event)=>setName(event.target.value)} type="text" className='name-input'/>
          <div className="time">Your time: {time} seconds</div>
          <div onClick={addBestTime} className="submit">Submit</div>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start getStartTime={getStartTime}/>}/>
          <Route path='/game' element={<Game getRegisState={getRegisState} getIorwethState={getIorwethState}
                                             getShaniState={getShaniState} startTime={startTime}/>}/>
          <Route path='/leaderboard' element={<Leaderboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
