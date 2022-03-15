import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ElectricChair from './Locate/ElectricChair';
import Library from './Locate/Library';
import Live from './Locate/Live';
import Tourism from './Locate/Tourism'
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

    props.setIsShowTourData(false)
    props.setIsTour(false)

    props.setIsLibrary(true)
    fetch('http://127.0.0.1:5000/api/Library')
    .then(res=>res.json())
    .then(data=>{
      props.setLocate([data[0]])
    })
  }
  function showElectChair(){
    // window.location.reload()
    props.setIsLibrary(false)
    props.setIsShowLibraryData(false)

    props.setIsLive(false)
    props.setIsShowLiveData(false)

    props.setIsShowTourData(false)
    props.setIsTour(false)
    

    props.setIsChair(true)
    fetch('http://127.0.0.1:5000/api/electricChair')
    .then(res=>res.json())
    .then(data=>{
      props.setLocate(data)
    })  
  }
  function showLive(){
    props.setIsShowLibraryData(false)
    props.setIsLibrary(false)

    props.setIsShowChairData(false)
    props.setIsChair(false)

    props.setIsShowTourData(false)
    props.setIsTour(false)
    

    props.setIsLive(true)
    fetch('http://127.0.0.1:5000/api/SWF')
    .then(res=>res.json())
    .then(data=>{
      props.setLocate(data)
    })
    

  }
  function showTour(){
    props.setIsLibrary(false)
    props.setIsShowLibraryData(false)
    
    props.setIsShowChairData(false)
    props.setIsChair(false)

    props.setIsLive(false)
    props.setIsShowLiveData(false)

    props.setIsTour(true)
    fetch('http://127.0.0.1:5000/api/Tourism')
    .then(res=>res.json())
    .then(data=>{
      props.setLocate(data)
    })
  }



  return (
    <>
      <button onClick={showLibrary}>도서관</button>{'  '}
      <button onClick={showElectChair}>전동휠체어</button>{'  '}
      <button onClick={showLive}>장애인 거주 시설</button>{'  '}
      <button onClick={showTour}>장애인 투어리즘</button>{'  '}
      {/* <button onClick={showSociety}>장애인 지역 사회 재활 시설</button>{'  '}
      <button onClick={showWork}>장애인 직업 재활 시설</button>{'  '} */}
      <br/>

      {props.isLibrary ? <Library setLat={props.setLat} setLng={props.setLng} locate={props.locate} setIsShowLibraryData={props.setIsShowLibraryData} ></Library>:null}
      {props.isChair ? <ElectricChair setChairData={props.setChairData} setIsShowChairData={props.setIsShowChairData} setLat={props.setLat} setLng={props.setLng} locate={props.locate} setIsShowData={props.setIsShowData}></ElectricChair>:null}
      {props.isLive ? <Live setIsShowLiveData={props.setIsShowLiveData} isShowLiveData={props.isShowLiveData} locate={props.locate} setLiveData={props.setLiveData} setLat={props.setLat} setLng={props.setLng}></Live>:null}
      {props.isTour ? <Tourism setIsShowTourData={props.setIsShowTourData} isShowTourData={props.isShowTourData} locate={props.locate} setTourData={props.setTourData} setLat={props.setLat} setLng={props.setLng} ></Tourism>:null}
    </>

  )
}

export default Facilities