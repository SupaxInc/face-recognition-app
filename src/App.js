import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FacialRecognition from './components/FacialRecognition/FacialRecognition';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 700
      }
    },
    size: {
      value: 3
    }
  }
};

// Using the OLD method of using the Clarifai API
const app = new Clarifai.App({
  apiKey: 'e9904850971349f890e99bc351da5bc0'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {} // This will be the bounding box
    }
  }

  /* Calculates the bounding box inputs */
  calculateFaceBoundingBox = (data) => {
    const faceBox = data.outputs[0].data.regions[0].region_info.bounding_box;
    const img = document.getElementById('imgInput'); // Grabs the image that gets displayed in our app
    const width = Number(img.width);
    const height = Number(img.height);

    // We will return an object that will have four dots around the face.
    // Using the four dots we can add a border to it.
    return {
      leftCol: faceBox.left_col * width,
      topRow: faceBox.top_row * height,
      rightCol: width - (faceBox.right_col * width),
      bottomRow: height - (faceBox.bottom_row * height)
    }
  }

  displayFaceBoundingBox = (boxData) => {
    console.log(boxData);
    this.setState({box: boxData});
  }

  onInputChange = (event) => {
    // Every time the text input changes, we update the state to the entered value inside the textbox
    this.setState({input: event.target.value});
  }

  onBtnSubmit = () => {
    // Once the "Detect" button has been clicked, we update the state of the image url to the input inside the textbox.
    this.setState({imageUrl: this.state.input})

    // OLD method of using the Clarifai predict API
    // Run the predict API based on the image url that was updated.
    // There is a ERROR 400 that could happen when this.state.imageUrl is used in the parameters inside of this.state.input
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => this.displayFaceBoundingBox(this.calculateFaceBoundingBox(response)))
      .catch( err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
              params={particlesOptions}
          />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onBtnSubmit={this.onBtnSubmit}/>
        <FacialRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
