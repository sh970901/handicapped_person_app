import React from 'react'
import { useEffect } from 'react'
//도서관 정보 표현
const Data = (props) => {
    useEffect(()=>{
      console.log(props)
    },[props])
  return (
    <div>
      {props.isShowLibraryData ?
        <div>
            도서관명: {props.locate[0].도서관명}<br/>
            주소: {props.locate[0].주소}<br/>
            운영시간: {props.locate[0].운영시간}<br/>
            휴일: {props.locate[0].휴일}<br/>
            기관종류: {props.locate[0].기관종류}<br/>
        </div>  :null}
      {props.isShowChairData ? <div>dd</div>:null}
        
    </div>
  )
}

export default Data