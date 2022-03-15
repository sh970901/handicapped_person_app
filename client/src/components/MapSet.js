/*global kakao*/
import React, { useState } from 'react'
import { useEffect } from 'react'
import Map from './Map'
//맵 띄우기
const MapSet = (props) => {
    useEffect(()=>{
       setState({center: {lat: props.lat, lng: props.lng}, isPanto: true})
    },[props])
    const [state, setState] = useState({
        center: {lat:props.lat, lng:props.lng},
        isPanto: true,
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
            {/* <button onClick={geocode}>위도경도확인</button> */}

            


        </div>
    )
}

export default MapSet