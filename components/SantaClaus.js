import React from 'react';
//import LottieView from 'lottie-react-native';
import {Image} from 'react-native';

export default class SantaAnimation extends React.Component {
  render() {
    return (
     <Image
      source={require("../assets/booklogo.jpg")}
      style={{width:200, height: 200}}/>
    )
  }
}