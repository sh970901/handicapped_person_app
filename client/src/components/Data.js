import React from 'react'
import { useEffect } from 'react'

const Data = (props) => {
    useEffect(()=>{
        console.log(props.isShowData)
        console.log(props.locate)
    },[props])
  return (
    <div>
        {props.isShowData ? 
        <div>
            도서관명: {props.locate[0].도서관명}<br/>
            주소: {props.locate[0].주소}<br/>
            운영시간: {props.locate[0].운영시간}<br/>
            휴일: {props.locate[0].휴일}<br/>
            기관종류: {props.locate[0].기관종류}<br/>
        </div> : null}
    </div>
  )
}

export default Data