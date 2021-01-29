import React, { Component } from "react";
import Img1 from '../src/Image/img1.jpg'
import Img2 from '../src/Image/img2.jpg'

class GoogleImage extends Component {
 render() {
 return (
 <div>
 <h2>Some Photos</h2>
 <p>
     <img src={Img1} width="180px" height="150px" id="images" /> 
     <img src={Img2} width="180px" height="150px" id="images" /> 
  

 </p>
 </div>
 );
 }
}
export default GoogleImage;