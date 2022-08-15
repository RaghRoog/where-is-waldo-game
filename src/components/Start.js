import React, { useState } from "react";
import style from '../styles/start.css'
import { Link } from 'react-router-dom'

let Start = ({getStartTime}) => {

    function startTimer() {
        let time = performance.now()
        getStartTime(time)
    }

    return(
        <div className="start-menu">
            <div className="start-container">
                <div className="title">Where's Waldo? Witcher edition</div>
                <div className="info">Find these three characters.</div>
                <div className="photo-container">
                    <div id="regis-photo" className="photo"></div>
                    <div id="iorweth-photo" className="photo"></div>
                    <div id="shani-photo" className="photo"></div>
                </div>
                <div className="names-container">
                    <div className="name">Regis</div>
                    <div className="name">Iorweth</div>
                    <div className="name">Shani</div>
                </div>
                <Link onClick={()=>startTimer()} className="start-btn" to='/game'>Start Game!</Link>
            </div>
        </div>
    )
}

export default Start;