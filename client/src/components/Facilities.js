import React from 'react'
import { useState } from 'react'
import ElectricChair from './Locate/ElectricChair';
import Library from './Locate/Library';
import Live from './Locate/Live';
import Tourism from './Locate/Tourism'
//전체 건물 버튼 표현

const Facilities = (props) => {
  const [status, setStatus] = useState(true)

  function showLibrary() {
    setStatus(false)
    props.setName('도서관')

    props.setIsShowChairData(false)
    props.setIsChair(false)

    props.setIsLive(false)
    props.setIsShowLiveData(false)

    props.setIsShowTourData(false)
    props.setIsTour(false)

    props.setIsLibrary(true)
    fetch('http://127.0.0.1:5000/api/Library')
      .then(res => res.json())
      .then(data => {
        props.setLocate([data[0]])
      })
  }
  function showElectChair() {
    setStatus(false)
    props.setName('전동 휠 체어')
  
    props.setIsLibrary(false)
    props.setIsShowLibraryData(false)

    props.setIsLive(false)
    props.setIsShowLiveData(false)

    props.setIsShowTourData(false)
    props.setIsTour(false)


    props.setIsChair(true)
    fetch('http://127.0.0.1:5000/api/electricChair')
      .then(res => res.json())
      .then(data => {
        props.setLocate(data)
      })
  }
  function showLive() {
    setStatus(false)
    props.setName('장애인 거주 시설')

    props.setIsShowLibraryData(false)
    props.setIsLibrary(false)

    props.setIsShowChairData(false)
    props.setIsChair(false)

    props.setIsShowTourData(false)
    props.setIsTour(false)


    props.setIsLive(true)
    fetch('http://127.0.0.1:5000/api/SWF')
      .then(res => res.json())
      .then(data => {
        props.setLocate(data)
      })


  }
  function showTour() {
    setStatus(false)
    props.setName('장애인 투어리즘')

    props.setIsLibrary(false)
    props.setIsShowLibraryData(false)

    props.setIsShowChairData(false)
    props.setIsChair(false)

    props.setIsLive(false)
    props.setIsShowLiveData(false)

    props.setIsTour(true)
    fetch('http://127.0.0.1:5000/api/Tourism')
      .then(res => res.json())
      .then(data => {
        props.setLocate(data)
      })
  }



  return (
    <>
      <div className='facilitiesBtns'>
        <button className='facilitiesBtn' onClick={showLibrary}>도서관</button>{'  '}
        <button className='facilitiesBtn' onClick={showElectChair}>전동휠체어</button>{'  '}
        <button className='facilitiesBtn' onClick={showLive}>장애인 거주 시설</button>{'  '}
        <button className='facilitiesBtn' onClick={showTour}>장애인 투어리즘</button>{'  '}
      </div><br/>
      <div className='facilitiesShow'>
        {status ? <div>버튼을 클릭해주세요</div> : null}
        {props.isLibrary ? <Library setLat={props.setLat} setLng={props.setLng} locate={props.locate} setIsShowLibraryData={props.setIsShowLibraryData} ></Library> : null}
        {props.isChair ? <ElectricChair setChairData={props.setChairData} setIsShowChairData={props.setIsShowChairData} setLat={props.setLat} setLng={props.setLng} locate={props.locate} setIsShowData={props.setIsShowData}></ElectricChair> : null}
        {props.isLive ? <Live setIsShowLiveData={props.setIsShowLiveData} isShowLiveData={props.isShowLiveData} locate={props.locate} setLiveData={props.setLiveData} setLat={props.setLat} setLng={props.setLng}></Live> : null}
        {props.isTour ? <Tourism setIsShowTourData={props.setIsShowTourData} isShowTourData={props.isShowTourData} locate={props.locate} setTourData={props.setTourData} setLat={props.setLat} setLng={props.setLng} ></Tourism> : null}
      </div>

    </>

  )
}

export default Facilities