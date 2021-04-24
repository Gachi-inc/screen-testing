import React, { Component } from 'react';
import {Descriptions, Button} from "antd"
import "./index.css"
import axios from 'axios';
class SettingsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    startTesting = async() => {
        const res = await axios.post("http://192.168.1.202:65432", "https://urfu.ru/ru/")
        console.log(res)
    }   

    render() { 
        return ( 
            <div className ='SettingsPanel'>
                <Descriptions
                title="Настройки тестинга"
                >
                <Descriptions.Item label="Название сайта">SiteName</Descriptions.Item>
                <Descriptions.Item label="Таймаут проверки">24 часа</Descriptions.Item>
                <Descriptions.Item label="Статус">Prepaid</Descriptions.Item>
                <Descriptions.Item label="Время с прошлой проверки">18:00:00</Descriptions.Item>
                </Descriptions>
                <Button onClick = {this.startTesting}>Запустить проверку</Button>
            </div>
         );
    }
}
 
export default SettingsPanel;