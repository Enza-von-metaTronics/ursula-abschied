import './App.css';
import ImageSlider from './components/ImageSlider';
import {SliderData} from './components/SliderData';

function App() {
  return (
    <div className="App">

      <div className='introPic'>
        <h2><b>In tiefer Trauer</b></h2>
      </div>
      <div className='introBox'>
        <h1>Ursula Hinze, geb. Wolf</h1>
        <h3>* 25.03.1937 in Breslau</h3>
        <h3>&#8224; 05.06.2022 in Burg</h3>
      </div>
      <ImageSlider slides={SliderData} />

        {/* <button>&#8226; ENTER &#8226;</button> */}

        <div className='outroBox'>
          <h1>Du warst eine superstarke Frau &#10084; DANKE!</h1>
          <img src="./img/herRoses.jpg" className="roses" alt="mothers roses" />		    
        </div> 

    </div>
  );
}

export default App;