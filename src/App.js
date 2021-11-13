import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    "number": {
      "value": 40,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "size": {
      "value": 3
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
              params={particlesOptions}
          />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* Commenting out the possible components we will use for later.
        
        
        <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
