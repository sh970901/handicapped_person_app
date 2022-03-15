/*global kakao*/
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Data from './components/Data/Data';
import Facilities from './components/Facilities';
import Name from './components/Head/Name';
import MapSet from './components/MapSet';

function App() {
  const [lat, setLat] = useState(37.365264512305174);
  const [lng, setLng] = useState(127.10676860117488);
  

  const [name, setName] = useState("강서구 장애인 시설")

  const [isLibrary, setIsLibrary] = useState(false)
  const [isChair, setIsChair] = useState(false)
  const [isLive, setIsLive] = useState(false)
  const [isTour, setIsTour] = useState(false)
  

  const [isShowLibraryData, setIsShowLibraryData] = useState(false);
  const [isShowChairData, setIsShowChairData] = useState(false);
  const [isShowLiveData, setIsShowLiveData] = useState(false)
  const [isShowTourData, setIsShowTourData] = useState(false)
  //의자 데이터 전달용 변수 electricChair => data
  
  const [locate, setLocate] = useState([]);
  const [chairData, setChairData] = useState();
  const [liveData, setLiveData] = useState();
  const [tourData, setTourData] = useState();


  useEffect(()=>{
    
  },[lat,lng])



  return (
    <table>
      <thead>
        <tr>
          <td><Name name={name}></Name></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='facilities'><Facilities setName={setName}isTour={isTour} setIsTour={setIsTour} isShowTourData={isShowTourData} setIsShowTourData={setIsShowTourData} setTourData={setTourData} setLiveData={setLiveData} isShowLiveData={isShowLiveData} setIsShowLiveData={setIsShowLiveData} isLive={isLive} setIsLive={setIsLive} isChair={isChair} setIsChair={setIsChair} isLibrary={isLibrary} setIsLibrary={setIsLibrary}setChairData={setChairData} setIsShowChairData={setIsShowChairData} setIsShowLibraryData={setIsShowLibraryData} setLat={setLat} setLng={setLng} locate={locate} setLocate={setLocate}></Facilities>
          </td>     
          <td></td><td className='mapSet'><MapSet lat={lat} lng={lng}></MapSet></td>
        </tr>
        <tr>
          <td></td>
          <td></td><td className='data'><Data tourData={tourData} isShowTourData={isShowTourData} liveData={liveData} isShowLiveData={isShowLiveData} chairData={chairData} isShowChairData={isShowChairData} isShowLibraryData={isShowLibraryData} locate={locate}></Data></td>
          
        </tr>
        
      </tbody>
    
    </table>
  );
}
export default App;
