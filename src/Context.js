import React, {useState, useEffect, useCallback} from "react"

const Context = React.createContext()


function ContextProvider({children}) {
    const [seconds, setSec] = useState(0)
    const [minutes, setMin] = useState(0)
    const [isOn, setOnOff] = useState(false)
    const [sessions, setSess] = useState(25)
    const [breakLength, setBreak] = useState(5)
    const [sOriginal, setS] = useState(25)
    const [bOriginal, setB] = useState(5)
    const [act, setAct] = useState("Work Time")

    function start() {
        setOnOff(!isOn)
        let btns = document.getElementsByClassName("btn")
        for (let i = 0; i < btns.length; i++) {
            btns[i].disabled = true
        }
    }

    function restartBtn() {
        if (isOn) {
            start()
        }
        setTimeout(() => {
            setBreak(bOriginal)
            setSess(sOriginal)
            setMin(0)
            setSec(0)
        }, 1000)
    }

    console.log("break " + breakLength)
    console.log("sess " + sessions)

    const HandleAddBtn = (e) => {
        const btn = e.target.value
        if (!isOn) {
            if(btn === "down-b" && bOriginal > 1) {
                setBreak(bOriginal - 1)
                setB(bOriginal - 1)
            } else if (btn === "up-b") {
                setBreak(bOriginal + 1)
                setB(bOriginal + 1)
            } else if (btn === "down-s" && sOriginal > 1) {
                setSess(sOriginal - 1)
                setS(sOriginal - 1)
            } else if (btn === "up-s") {
                setSess(sOriginal + 1)
                setS(sOriginal + 1)
            }
        }
    }

    useEffect(() => {
        if(isOn) {
            if(seconds > 0) {
                setTimeout(() => {
                    setSec(prevTime => prevTime - 1)
                }, 1000)
            } else if (seconds === 0 && sessions > 0 || seconds === 0 && sessions > 0 && minutes === 0) {
                setSess(sessions - 1)
                setMin(sessions - 1)
                setAct("Work Session")
                setSec(59)
            } else if (seconds === 0 && sessions === 0 && breakLength > 0)  {
                setBreak(breakLength - 1)
                setMin(breakLength - 1)
                setAct("Break Time")
                setSec(59)
            } else if (seconds === 0 && sessions === 0 && breakLength === 0) {
                setBreak(bOriginal)
                setSess(sOriginal)
            }
        }
    }, [seconds, isOn, minutes, sessions, breakLength])

    return (
        <Context.Provider value={{seconds, start, minutes, HandleAddBtn, sOriginal, bOriginal, act, restartBtn}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}