import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/dropdown.css'

let DropdownMenu = ({display,x,y, width, height, getRegisState, getShaniState, getIorwethState}) => {

    let xCord
    let yCord
    if(x>(width/2)){
        xCord = x-110
    }else{
        xCord = x
    }
    if(y>(height/2)){
        yCord = y-100
    }else{
        yCord = y
    }

    let charactersCords = {
        regis: {
            l: 366,
            r: 562,
            t: 209,
            b: 508,
        },
        iorweth: {
            l: 20,
            r: 195,
            t: 780,
            b: 1200,
        },
        shani: {
            l: 2320,
            r: 2545,
            t: 1200,
            b: 1437,
        },
    }

    let regis = document.getElementById('regis')
    let iorweth = document.getElementById('iorweth')
    let shani = document.getElementById('shani')

    let [regisFound, setRegisFound] = useState(false)
    let [iorwethFound, setIorwethFound] = useState(false)
    let [shaniFound, setShaniFound] = useState(false)

    function findRegis(){
        if((x>charactersCords.regis.l&&x<charactersCords.regis.r)&&(y<charactersCords.regis.b&&y>charactersCords.regis.t)){
            regis.innerHTML = 'Regis ✓'
            getRegisState(true)
            setRegisFound(true)
        }
    }
    function findIorweth(){
        if((x>charactersCords.iorweth.l&&x<charactersCords.iorweth.r)&&(y<charactersCords.iorweth.b&&y>charactersCords.iorweth.t)){
            iorweth.innerHTML = 'Iorweth ✓'
            getIorwethState(true)
            setIorwethFound(true)
        }

    }
    function findShani(){
        if((x>charactersCords.shani.l&&x<charactersCords.shani.r)&&(y<charactersCords.shani.b&&y>charactersCords.shani.t)){
            shani.innerHTML = 'Shani ✓'
            getShaniState(true)
            setShaniFound(true)
        }
    }
    
    return(
        <div style={{top: yCord, left: xCord, display: display}} className="dropdown">
            <div onClick={()=>findRegis()} id='regis' className='dropdown-item'>Regis</div>
            <div onClick={()=>findIorweth()} id='iorweth' className='dropdown-item'>Iorweth</div>
            <div onClick={()=>findShani()} id='shani' className='dropdown-item'>Shani</div>
        </div>
    )
}

export default DropdownMenu