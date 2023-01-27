import logo from './logo.svg';
import './App.css';
import About from './About';
import Player from './Player';
// import Nav from './Nav';
import images from "./images";
import ImageSlider from "./ImageSlider";


function App() {
  return (
    // <div className="App">
    <div>
		<div className="App">
		<ImageSlider images={images}/>
	</div>
     <About />
    {/* <Nav /> */}
    <Player />
 
    </div>
  );
}

