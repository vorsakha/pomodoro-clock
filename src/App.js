import React, {useContext} from "react"

import {Context} from "./Context"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleDown, faAngleUp, faPlay, faPause, faRedoAlt} from "@fortawesome/free-solid-svg-icons"


export default function App() {
    const {seconds, start, minutes, HandleAddBtn, sOriginal, bOriginal, act, restartBtn} = useContext(Context)

    const downB = <FontAwesomeIcon value="down-b" icon={faAngleDown} />
    const upB = <FontAwesomeIcon value="up-b" icon={faAngleUp} />
    const downS = <FontAwesomeIcon value="down-s" icon={faAngleDown} />
    const upS = <FontAwesomeIcon value="up-s" icon={faAngleUp} />
    const play = <FontAwesomeIcon icon={faPlay} />
    const pause = <FontAwesomeIcon icon={faPause} />
    const restart = <FontAwesomeIcon icon={faRedoAlt} />

    return(
        <div id="container">
            <h1>Pomodoro Clock</h1>

            <h3>Break Length</h3>
            <button 
            className="btn" 
            onClick={HandleAddBtn} 
            value="down-b"
            >-
            </button>
            <span>{bOriginal > 9 ? bOriginal : "0" + bOriginal}</span>

            <button 
            className="btn" 
            onClick={HandleAddBtn} 
            value="up-b"
            >+
            </button>

            <h3>Session Length</h3>
            <button 
            className="btn" 
            onClick={HandleAddBtn} 
            value="down-s"
            >-
            </button>
            <span>{sOriginal > 9 ? sOriginal : "0" + sOriginal}</span>

            <button 
            className="btn" 
            onClick={HandleAddBtn} 
            value="up-s"
            >+
            </button>
            <div id="clock">
                <h2>{act}</h2>
                <h2>{minutes > 9 ? minutes : "0" + minutes} : {seconds > 9 ? seconds : "0" + seconds}</h2>
            </div>
            <button onClick={start}>{play}{pause}</button>
            <button id="restart" onClick={restartBtn}>{restart}</button>
        </div>
    )
}