import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Facilities = () => {
  const [data1, setData1] = useState([]);
  const [isShow, setIsShow]= useState(false);

  // useEffect(()=>{
  //   console.log(data1)
  // },[data1])
  function showHospital(){
    setIsShow(true)
    console.log("병원")
    fetch('http://localhost:5000/api')
    .then(res=>res.json())
    .then(data=>{
      return setData1(data[1].no)
    }
      

    )
  }
  function showFood(){
    console.log("음식점")
    console.log(data1)
  }
  function showConvenience(){
    console.log('편의시설')
  }
  function showLibrary(){
    console.log('도서관')
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
      {isShow ? data1 : null}
    </>

  )
}

export default Facilities