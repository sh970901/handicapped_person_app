import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
//도서관 정보 표현
const Data = (props) => {
  const [state, setState] = useState('')

  useEffect(() => {
  
  }, [props])

  return (

    <div>
      {props.isShowChairData ?
        <div>
          시설명: {props.chairData.시설명} <br />
          시군구명: {props.chairData.시군구명}<br />
          소재지도로명주소:{props.chairData.소재지도로명주소}<br />
          소재지지번주소: {props.chairData.소지재지번주소}<br />
          설치장소설명: {props.chairData.설치장소설명}<br/>
          평일운영시작: {props.chairData.평일운영시작시각}<br/>
          평일운영종료: {props.chairData.평일운영종료시각}<br/>
          공휴일운영시작: {props.chairData.공휴일운영시작시각}<br/>
          공휴일운영종료: {props.chairData.공휴일운영종료시각}<br/>
          동시사용가능: {props.chairData.동시사용가능대수}<br/>
          공기주입가능여부: {props.chairData.공기주입가능여부}<br/>
          휴대전화충전가능여부: {props.chairData.휴대전화충전가능여부}<br/>
          관리기관명: {props.chairData.관리기관명}<br/>
          관리기관전화번호: {props.chairData.관리기관전화번호}<br/>
        </div> : null}
      {props.isShowLibraryData ?
        <div>
          도서관명: {props.locate[0].도서관명}<br />
          주소: {props.locate[0].주소}<br />
          운영시간: {props.locate[0].운영시간}<br />
          휴일: {props.locate[0].휴일}<br />
          기관종류: {props.locate[0].기관종류}<br />

        </div> : null}
      {props.isShowLiveData? 
      <div>
        <br />
        시설명: {props.liveData.시설명}<br />
        시설종류명: {props.liveData.시설종류명_유형}<br />
        시설주소: {props.liveData.시설주소}<br />
        시설종류상세명: {props.liveData.시설종류상세명_종류}
      </div>:null}
      {props.isShowTourData ? 
      <div>
        시설명: {props.tourData.idtourism_name}<br/>
        시설주소: {props.tourData.idtourism_addr}<br />
        시설유형: {props.tourData.idtourism_dev}<br />
        장애인 전용 주차구역 여부: {props.tourData.장애인전용주차구역여부}<br />
        장애인 용 승강기 여부: {props.tourData.장애인용승강기여부}<br />
        장애인 화장실 여부: {props.tourData.장애인화장실여부}<br />
        장애인 용 객실 이용 가능 여부: {props.tourData.장애인용객실이용가능여부}<br />
      </div>:null}


    </div>
  )
}

export default Data