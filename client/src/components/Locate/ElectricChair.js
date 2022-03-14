import React from 'react'
import { useState,useEffect } from 'react'

//전동휠체어 버튼 표현
const ElectricChair = (props) => {
    const [isDelay, setIsDelay] = useState(false)
    const [data, setData] = useState()
    
    useEffect(() => {
        console.log(props.locate)
        if(props.locate===undefined){
            console.log('대기')
        }else{
            setIsDelay(true)
            setData(props.locate)    
        }
    }, [props])

    const  electricChairData = ()=>{
        console.log(data.length)
        const result = [];
        if(data.length===undefined){
            console.log('대기')
        }else{
            for(let i=0; i<data.length; i++){
                result.push(<><button key={i} onClick={showData}>{data[i].시설명}</button><br/></>)
            }   
        }
        return result 
        
    }
    function showData(){
        props.setIsShowChairData(true)
    }

  return (
    <div>
        <br/>
        {isDelay ? <>{electricChairData()}</>:null}
    </div>
  )
}


export default ElectricChair