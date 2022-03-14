/*global kakao*/
import React, { useEffect, useState } from 'react'

const Map = (props) => {

  useEffect(() => {
    // console.log(props.center)
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(props.center.lat, props.center.lng),
      level: props.level
    };
    const map = new kakao.maps.Map(container, options);

    let markerPosition = new kakao.maps.LatLng(
      props.center.lat,
      props.center.lng
    );

    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    var content='<div>hello</div>'
    const infowindow = new kakao.maps.InfoWindow({ removable: true, width: 300, position: new kakao.maps.LatLng(props.center.lat, props.center.lng), content: content})
    
    
    kakao.maps.event.addListener(marker, 'click', function(){
      infowindow.open(map, marker)  
      
    })



  }, [props])




  return (
    <div>
      <div className="map" id="map"></div>
    </div>
  )
}

export default Map;