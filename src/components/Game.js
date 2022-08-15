import React, { useEffect } from "react";
import { useState } from "react";
import DropdownMenu from './DropdownMenu.js'
import style from '../styles/main.css'

let Game = ({getRegisState, getIorwethState, getShaniState}) => {

    let [display, setDisplay] = useState('')
    let [x, setX] = useState('')
    let [y, setY] = useState('')
    let [width, setWidth] = useState('')
    let [height, setHeight] = useState('')
    let [isDisplayed, setIsDisplayed] = useState(false)

    let displayDropdown = (event) => {
      if(!isDisplayed){
        setWidth(event.target.width)
        setHeight(event.target.height)
        setY(event.pageY)
        setX(event.pageX)
        setDisplay('flex')
        setIsDisplayed(true)
      }else{
        setDisplay('none')
        setIsDisplayed(false)
      }
    }


    return(
        <div className="game">
          <div onClick={(event)=>displayDropdown(event)} id='game-image'>
            <img className='game-img' src="/imgs/witcherbg.jpg" alt="game image" />
          </div>
          <DropdownMenu display={display} x={x} y={y} width={width} 
                        height={height} getRegisState={getRegisState}  
                        getIorwethState={getIorwethState} getShaniState={getShaniState}/>
        </div>
    )
}

export default Game;