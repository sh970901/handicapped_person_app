/*global kakao*/
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Data from './components/Data/Data';
import Facilities from './components/Facilities';
import MapSet from './components/MapSet';

function App() {
  const [lat, setLat] = useState(37.365264512305174);
  const [lng, setLng] = useState(127.10676860117488);
  const [locate, setLocate] = useState([]);
  const [isShowLibraryData, setIsShowLibraryData] = useState(false);
  const [isShowChairData, setIsShowChairData] = useState(false);
  //의자 데이터 전달용 변수 electricChair => data
  const [chairData, setChairData] = useState();


  useEffect(()=>{
    
  },[lat,lng])



  return (
    <table>
      <thead>
        <tr>
          <td>강서구 장애인 보육 시설</td>
          
          
          <td>맵 설명</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Facilities setChairData={setChairData} setIsShowChairData={setIsShowChairData} setIsShowLibraryData={setIsShowLibraryData} setLat={setLat} setLng={setLng} locate={locate} setLocate={setLocate}></Facilities></td>


                 
          <td><MapSet lat={lat} lng={lng}></MapSet></td>
        </tr>
        <tr>
         
          
          <td><Data chairData={chairData} isShowChairData={isShowChairData} isShowLibraryData={isShowLibraryData} locate={locate}></Data></td>
          
        </tr>
        
      </tbody>
    
    </table>
  );
}
export default App;
