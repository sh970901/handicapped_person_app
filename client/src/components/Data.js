import React from 'react'
import { useEffect } from 'react'

const Data = (props) => {

  useEffect(()=>{
    console.log(props.facilities)
    fetch(`http://localhost:5000/api/${props.facilities}`)
    .then((res)=>(res.json()))
    .then((data)=>console.log(data))
  },[])
  return (
    <div>DataBase...</div>
  )
}

export default Data