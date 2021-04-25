import React, { Component, useEffect, useState } from 'react';
import "./index.css"
import socket from '../../core/socketio.js';
function ScreenshotPreview (){
    const [screenshotUrl, setScreenshot] = useState(null);
      socket.on('image', function(data){
        displayImage(data);
        });
        
        var displayImage = function(data){
            var arrayBufferView = new Uint8Array( data.image_data );
            var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL( blob );
            var img = document.getElementById( "img" );
            img.src = imageUrl;
        };


        return (
        <div className = "Screenshot">
            <h1>Превью сайта</h1>
            <img id="img" width= "100%" height= "90%" src={screenshotUrl}/>
        </div>  
        );
}
 
export default ScreenshotPreview;