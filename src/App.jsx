import { Route, Routes } from 'react-router-dom';
import './App.css'
import Dev_Full2025 from './C.V.s/Dev_Full2025'
import Master2025 from './C.V.s/Master2025'
import DownLoad from './DownLoad';

function App() {
  // const downloadPDF = () => {
  //   window.open('http://localhost:3001/generate-pdf');
  // };

//   document.addEventListener('keydown', (k) => {
//     if (k == 'g') {
//       downloadPDF data-html2canvas-ignore="true"
//     }
// console.log(k);
// 
  // })

  return (
    <div className='w-full h-[150vh] flex justify-center bg-green-300'>
      {/* <Master2025/> */}


      <Routes>
        {/* <Route path='/' element={<Master2025 />} /> */}
        <Route path='/' element={<Dev_Full2025 />} />
        <Route path='/DownLoad' element={<DownLoad />} />
      </Routes>
    </div>
  )
}

export default App
