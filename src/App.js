import './App.css';
import AdPage from './pages/AdPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';




function App() {
  return (
    <div className='app' >
     
          <Routes>
      <Route exact path="/" element={<Home/> }/> 

        <Route exact path="adpage" element={<AdPage/>} />
        
      </Routes>
      
{/* <AdPage/> */}

       </div>
      
      
      
   
  );
}

export default App;
