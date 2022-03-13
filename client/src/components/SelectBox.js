import React, { useState } from 'react'
import Data from './Data'

const SelectBox = () => {
    const [facilities, setFacilities] = useState("")
    const [show,setShow] = useState("시설을 골라주세요.")
    const [onInfo, setOnInfo] = useState(false)

    function handleOption(e){
        console.log(e.target.value)
        setFacilities(e.target.value)
        setShow('버튼을 눌러주세요')
        
    }
    function showFacilities(){
        setOnInfo(true)
    }
    return (
        <>
        <select onChange={handleOption}>
            <option key="banana" value="화장실">화장실</option>
            <option key="apple" value="보육원">보육원</option>
            <option key="orange" value="학교">학교</option>
        </select><br/>
        <button onClick={showFacilities}>{facilities}</button>{' '}{show}
        {onInfo ? <Data></Data> : null}
        </>
        
    )
}

export default SelectBox