import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
//도서관 정보 표현
const Data = (props) => {
  const [state, setState] = useState('')

  useEffect(() => {
  console.log(props.tourData)
  }, [props])

  return (

    <div>
      {props.isShowChairData ?
        <div>
          시설명: {props.chairData.시설명} <br />
          시군구명: {props.chairData.시군구명}<br />
          소재지도로명주소:{props.chairData.소재지도로명주소}<br />
          소새지지번주소: {props.chairData.소지재지번주소}<br />
        </div> : null}
      {props.isShowLibraryData ?
        <div>
          도서관명: {props.locate[0].도서관명}<br />
          주소: {props.locate[0].주소}<br />
          운영시간: {props.locate[0].운영시간}<br />
          휴일: {props.locate[0].휴일}<br />
          관종류: {props.locate[0].기관종류}<br />

        </div> : null}
      {props.isShowLiveData? 
      <div>
        <br />
        시설명: {props.liveData.시설명}<br />
        주소: {props.liveData.시설종류명}<br />
        시설주소: {props.liveData.시설주소}<br />
      </div>:null}
      {props.isShowTourData ? 
      <div>
        시설명: {props.tourData.idtourism_name}<br/>
        시설주소: {props.tourData.idtourism_addr}
      </div>:null}


    </div>
  )
}

export default Data