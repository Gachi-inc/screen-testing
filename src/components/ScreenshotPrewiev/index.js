import React, { Component } from 'react';
import "./index.css"
class ScreenshotPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenshot: null
        }
    }
    componentDidMount(){}


    render() { 
        return (
        <div className = "Screenshot">
            <h1>Превью сайта</h1>
           <img width="80%" height="80%" src="https://img.flaticon.com/icons/png/512/58/58672.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF">
        </img>
        </div>  
        );
    }
}
 
export default ScreenshotPreview;