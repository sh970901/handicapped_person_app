import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Locate from './Locate';

const Facilities = (props) => {
  const [data1, setData1] = useState([]);
  const [isShow, setIsShow]= useState(false);
  
  function showHospital(){
    console.log("병원")
  }
  function showFood(){
    console.log("음식점")
    console.log(data1)
  }
  function showConvenience(){
    setTimeout(()=>{console.log("gg")}, 2000)
    console.log('편의시설')
  }
  function showLibrary(){
    setIsShow(true)
    fetch('http://127.0.0.1:5000/api/Library')
    .then(res=>res.json())
    .then(data=>{
      props.setLat(data[0].위도)
      props.setLng(data[0].경도)
      props.setLocate([data[0]])
    })
  }
  function showElectChair(){
    console.log('전동휠체어')
    
  }

  return (
    <>
      <button onClick={showHospital}>병원</button>{'  '}
      <button onClick={showFood}>음식점</button>{'  '}
      <button onClick={showConvenience}>편의 시설</button>{'  '}
      <button onClick={showLibrary}>도서관</button>{'  '}
      <button onClick={showElectChair}>전동휠체어</button><br/>
      {isShow ? <Locate locate={props.locate} setIsShowData={props.setIsShowData}></Locate> : null}

    </>

  )
}

export default Facilities