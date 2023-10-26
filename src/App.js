
import './App.css';
import './index.css';
import Data from './Data';
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Packages from './Components/Packages';
import Footer from './Components/Footer';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {


  return (
    <>
      <Navbar/>
      <Carousel/>
      <h3 className='text-center mt-3 package-title'>Our Packages</h3>
      <div className='cards'>
      {
        Data.map((element)=>{
          return(
            <Packages name={element.name} imageURL={element.imageURL} package={element.package} price={element.price} description={element.description}/>
          )
        })
      }
      </div>


      

      

      <Footer/>
    </>
  );
}

export default App;
