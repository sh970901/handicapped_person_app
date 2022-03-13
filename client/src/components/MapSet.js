import React, { useState } from 'react'
import Map from './Map'


const MapSet = () => {
    const [state, setState] = useState({
        center: { lat: 37.365264512305174, lng: 127.10676860117488 },
        isPanto: false,
    })
    const [level, setLevel] = useState(3)

    function sungkyul() {
        setState({ center: { lat: 37.3798295, lng: 126.9247985 }, isPanTo: true, })
    }
    function locate() {
        setState({ center: { lat: 33.452513, lng: 126.570888 }, isPanTo: true, })
    }
    function myLocate() {
        {
            navigator.geolocation.getCurrentPosition((position)=>{
                setState({ center: { lat: position.coords.latitude, lng: position.coords.longitude }, isPanto: true, })
            }
            )
        }
    }
    function showLarge(){
        setLevel(level-1)
    }
    function showSmall(){
        setLevel(level+1)
    }

    return (
        <div>
            <Map
                center={state.center}
                isPanto={state.isPanto}
                level={level}
            ></Map>
            <button onClick={locate}>위치변경</button>
            <button onClick={sungkyul}>성결대</button>
            <button onClick={myLocate}>내위치</button> <br/><br/>
            <button onClick={showLarge}>확대</button>
            <button onClick={showSmall}>취소</button><br/><br/>

            


        </div>
    )
}

export default MapSet