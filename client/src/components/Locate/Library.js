import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Library = (props) => {
  
    const [isDelay, setIsDelay] = useState(false)
    
    useEffect(() => {
        
        if(props.locate[0]===undefined){
            console.log('대기')
        }else{
            setIsDelay(true)
        }

    }, [props])

    function showData(){
        props.setIsShowLibraryData(true)
        props.setLat(props.locate[0].위도)
        props.setLng(props.locate[0].경도)
        

    }

    return (
        <>
          {isDelay ? <div><br/>시설명: {' '}
             <button onClick={showData}>{props.locate[0].도서관명}</button><br/>
          </div> : null}
            
        </>

    )
}

export default Library