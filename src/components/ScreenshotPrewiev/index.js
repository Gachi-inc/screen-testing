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
           <iframe name="X-Frame-Options" value="SAMEORIGIN" width="100%" height="100%" src="https://www.sberbank.ru/ru/person">
        </iframe>
        </div>  
        );
    }
}
 
export default ScreenshotPreview;