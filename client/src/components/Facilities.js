import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ElectricChair from './Locate/ElectricChair';
import Library from './Locate/Library';
import Live from './Locate/Live';
//전체 건물 버튼 표현

const Facilities = (props) => {
  const [data1, setData1] = useState([]);
  // const [isLibrary, setIsLibrary] = useState(false)
  // const [isChair, setIsChair] = useState(false)
  

  function showLibrary(){
    props.setIsShowChairData(false)
    props.setIsChair(false)
    props.setIsLive(false)
    props.setIsShowLiveData(false)

    props.setIsLibrary(true)
    fetch('http://127.0.0.1:5000/api/Library')
    .then(res=>res.json())
    .then(data=>{
      props.setLocate([data[0]])
    })
  }
  function showElectChair(){
    // window.location.reload()
    props.setIsShowLibraryData(false)
    props.setIsLive(false)
    props.setIsShowLiveData(false)
    props.setIsLibrary(false)

    props.setIsChair(true)
    fetch('http://127.0.0.1:5000/api/electricChair')
    .then(res=>res.json())
    .then(data=>{
      props.setLocate(data)
    })  
  }
  function showLive(){
    props.setIsShowLibraryData(false)
    props.setIsShowChairData(false)
    props.setIsChair(false)
    props.setIsLibrary(false)

    props.setIsLive(true)
    fetch('http://127.0.0.1:5000/api/SWF')
    .then(res=>res.json())
    .then(data=>{
      props.setLocate(data)
    })
    

  }
  function showSociety(){

  }
  function showWork(){

  }


  return (
    <>
      <button onClick={showLibrary}>도서관</button>{'  '}
      <button onClick={showElectChair}>전동휠체어</button>{'  '}
      <button onClick={showLive}>장애인 거주 시설</button>
      {/* <button onClick={showSociety}>장애인 지역 사회 재활 시설</button>{'  '}
      <button onClick={showWork}>장애인 직업 재활 시설</button>{'  '} */}
      <br/>

      {props.isLibrary ? <Library setLat={props.setLat} setLng={props.setLng} locate={props.locate} setIsShowLibraryData={props.setIsShowLibraryData} ></Library>:null}
      {props.isChair ? <ElectricChair setChairData={props.setChairData} setIsShowChairData={props.setIsShowChairData} setLat={props.setLat} setLng={props.setLng} locate={props.locate} setIsShowData={props.setIsShowData}></ElectricChair>:null}
      {props.isLive ? <Live setIsShowLiveData={props.setIsShowLiveData} isShowLiveData={props.isShowLiveData} locate={props.locate} setLiveData={props.setLiveData} setLat={props.setLat} setLng={props.setLng}></Live>:null}
    </>

  )
}

export default Facilities