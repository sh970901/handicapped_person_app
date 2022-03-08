/*global kakao*/
import React, {  useEffect,useState } from 'react'

const Map = () => {
  const [lat, setLat] = useState(37.365264512305174)
  const [lng, setLng] = useState(127.10676860117488)
  
  function getLocation(){
    console.log("gg")
    setLat(37.6292286)
    setLng(126.8361353)
  }

  useEffect(() => {
    console.log()
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map)
    // function panTo(lat,lng){
    //   var moveLatLng=new kakao.maps.LatLng(lat,lng)
    //   map.panTo(moveLatLng) 
    // }
    
    // panTo(props.Lat, props.Lng)
    // map.panTo(new kakao.maps.LatLng(props.Lat, props.Lng))      
    }, [])

    return (
      <div>  
        <button type='button' onClick={getLocation}>성결대</button><br /><br />
        <div className="map" id="map"></div>
        
      </div>
    )
  }

export default Map;