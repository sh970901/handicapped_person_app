import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ElectricChair from './Locate/ElectricChair';
import Library from './Locate/Library';
//전체 건물 버튼 표현

const Facilities = (props) => {
  const [data1, setData1] = useState([]);
  const [isLibrary, setIsLibrary] = useState(false)
  const [isChair, setIsChair] = useState(false)
  
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
    props.setIsShowChairData(false)
    props.setLocate([])
    setIsChair(false)
    setIsLibrary(true)
    fetch('http://127.0.0.1:5000/api/Library')
    .then(res=>res.json())
    .then(data=>{
      props.setLocate([data[0]])
    })
  }
  function showElectChair(){
    props.setLocate([])
    props.setIsShowLibraryData(false)
    setIsChair(true)
    setIsLibrary(false)
    fetch('http://127.0.0.1:5000/api/electricChair')
    .then(res=>res.json())
    .then(data=>{
      props.setLocate(data)
    })

    
  }

  return (
    <>
      <button onClick={showHospital}>병원</button>{'  '}
      <button onClick={showFood}>음식점</button>{'  '}
      <button onClick={showConvenience}>편의 시설</button>{'  '}
      <button onClick={showLibrary}>도서관</button>{'  '}
      <button onClick={showElectChair}>전동휠체어</button><br/>
      {isLibrary ? <Library setLat={props.setLat} setLng={props.setLng} locate={props.locate} setIsShowLibraryData={props.setIsShowLibraryData} ></Library>:null}
      {isChair ? <ElectricChair setIsShowChairData={props.setIsShowChairData} setLat={props.setLat} setLng={props.setLng} locate={props.locate} setIsShowData={props.setIsShowData}></ElectricChair>:null}

    </>

  )
}

export default Facilities