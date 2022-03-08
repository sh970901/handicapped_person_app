import React, { useState } from 'react'

const SelectBox = () => {
    const [facilities, setFacilities] = useState("")
    const [show,setShow] = useState("시설을 골라주세요.")

    function handleOption(e){
        console.log(e.target.value)
        setFacilities(e.target.value)
        setShow('버튼을 눌러주세요')
    }

    return (
        <>
        <select onChange={handleOption}>
            <option key="banana" value="banana">banana</option>
            <option key="apple" value="apple">apple</option>
            <option key="orange" value="orange">orange</option>
        </select><br/>
        <button>{facilities}</button>{' '}{show}
        </>
        
    )
}

export default SelectBox