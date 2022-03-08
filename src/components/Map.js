/*global kakao*/
import React, { useEffect, useState } from 'react'

const Map = (props) => {

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(props.center.lat, props.center.lng),
      level: props.level
    };
    const map = new kakao.maps.Map(container, options);
  }, [props])



  // useEffect(() => {
  //   console.log()
  //   const container = document.getElementById('map');
  //   const options = {
  //     center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
  //     level: 3
  //   };
  //   const map = new kakao.maps.Map(container, options);
  //   const markerPosition = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
  //   const marker = new kakao.maps.Marker({
  //     position: markerPosition
  //   });
  //   marker.setMap(map)

  //   }, [])

  return (
    <div>
      <div className="map" id="map"></div>
    </div>
  )
}

export default Map;