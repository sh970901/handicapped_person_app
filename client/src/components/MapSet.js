/*global kakao*/
import React, { useState } from 'react'
import { useEffect } from 'react'
import Map from './Map'


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
    // var geocoder = new kakao.maps.services.Geocoder()
    // function geocode(){
    //     geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function(results,status){
    //         if(status === kakao.maps.services.Status.OK){
    //             console.log(results[0])
    //             var coords = new kakao.mpas.LatLng(results[0].y, results[0].x);
    //             console.log(coords)
    //         }
    //     })
    // }

    

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