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
  const [isShowLibraryData, setIsShowLibraryData] = useState(false)
  const [isShowChairData, setIsShowChairData] = useState(false)




  useEffect(()=>{
    
  },[lat,lng])






  return (
    <table>
      <thead>
        <tr>
          <td>강서구 장애인 보육 시설</td>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          
          <td>맵 설명</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Facilities setIsShowChairData={setIsShowChairData} setIsShowLibraryData={setIsShowLibraryData} setLat={setLat} setLng={setLng} locate={locate} setLocate={setLocate}></Facilities></td>


          <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>          
          <td><MapSet lat={lat} lng={lng}></MapSet></td>
        </tr>
        <tr>
          <td></td>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          
          <td><Data isShowChairData={isShowChairData} isShowLibraryData={isShowLibraryData} locate={locate}></Data></td>
          
        </tr>
        
      </tbody>
    
    </table>
  );
}
export default App;
