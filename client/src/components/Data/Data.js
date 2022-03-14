import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
//도서관 정보 표현
const Data = (props) => {
  const [state, setState] = useState('')
  const [value,setValue] = useState([])

    useEffect(()=>{
      console.log(props.isShowChairData)
      console.log(props.chairData)
      if(props.isShowLibraryData){
        setState('도서관')
      }if(props.isShowChairData){
        setState('전기의자')   
      }
      
    },[props])
    function check(){
      console.log(state)
    }


    const rendering = ()=>{
      if(state==='도서관'){
        return <div>
          도서관명: {props.locate[0].도서관명}<br/>
            주소: {props.locate[0].주소}<br/>
            운영시간: {props.locate[0].운영시간}<br/>
            휴일: {props.locate[0].휴일}<br/>
            기관종류: {props.locate[0].기관종류}<br/>
        </div>
      }
      else if(state==='전기의자'){
        return(
        <div>
          시설명: {props.chairData.시설명} <br/>
          시군구명: {props.chairData.시군구명}<br/>
          소재지도로명주소:{props.chairData.소재지도로명주소}<br/>
          소새지지번주소: {props.chairData.소지재지번주소}<br/>

        </div>)
        
      }
    }


  return (
    
    <div>
      <button onClick={check}>dd</button>
      {rendering()}
      {/* {props.isShowLibraryData ?
        <div>
            도서관명: {props.locate[0].도서관명}<br/>
            주소: {props.locate[0].주소}<br/>
            운영시간: {props.locate[0].운영시간}<br/>
            휴일: {props.locate[0].휴일}<br/>
            기관종류: {props.locate[0].기관종류}<br/>
        </div>  :null}
      {props.isShowChairData ? <div>dd</div>:null} */}
        
    </div>
  )
}

export default Data