import { Divider } from 'antd';
import React, { Component } from 'react';
import DiffPanel from '../DiffPanel';
import ScrennshotPreview from "../ScreenshotPrewiev"
import "./index.css"
class InfoPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div className = "InfoPanel">
            <ScrennshotPreview/>
            <DiffPanel/>
        </div>  
        );
    }
}
 
export default InfoPanel;