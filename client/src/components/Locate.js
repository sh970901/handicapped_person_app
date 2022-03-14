import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Locate = (props) => {
  
    const [isDelay, setIsDelay] = useState(false)
    
    useEffect(() => {
        
        if(props.locate[0]===undefined){
            console.log('대기')
        }else{
            setIsDelay(true)
            console.log(props.locate[0])
        }
    }, [props])

    function showData(){
        props.setIsShowData(true)
    }

    return (
        <>
          {isDelay ? <div><br/>
            도서관명: <button onClick={showData}>{props.locate[0].도서관명}</button><br/>
             
          </div> : null}
            
        </>

    )
}

export default Locate