import React, { useState } from 'react'
import Map from './Map'

const MapSet = () => {
    const [state, setState] = useState({
        center: {lat: 37.365264512305174,lng: 127.10676860117488},
        isPanto: false,
        level: 3,
    })
    
    return (
        <div>
            <Map
            center={state.center}
            isPanto={state.isPanto}
            level={state.level}
            ></Map>
            <button onClick={()=>setState({center: {lat: 33.452513, lng: 126.570888}, isPanTo: true, level: 6,})}>위치변경</button>
            <button onClick={()=>setState({center: {lat: 37.3798295, lng: 126.9247985}, isPanTo: true, level: 6,})}>성결대</button>
            <button onClick={()=>{
                navigator.geolocation.getCurrentPosition(function(position){
                    setState({center: {lat: position.coords.latitude, lng: position.coords.longitude}, isPanto: true, level:6,})
                })
            }}>내위치</button>
            
        </div>
    )
}

export default MapSet