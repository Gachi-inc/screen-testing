import React, { Component } from 'react';
import {Descriptions, Button} from "antd"
import "./index.css"
class SettingsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className ='SettingsPanel'>
                <Descriptions
                title="Настройки тестинга"
                extra={<div><Button type="primary">Изменить</Button><Button>Запустить проверку</Button></div>}
                >
                <Descriptions.Item label="Название сайта">SiteName</Descriptions.Item>
                <Descriptions.Item label="Таймаут проверки">24 часа</Descriptions.Item>
                <Descriptions.Item label="Статус">Prepaid</Descriptions.Item>
                <Descriptions.Item label="Время с прошлой проверки">18:00:00</Descriptions.Item>
                </Descriptions>
            </div>
         );
    }
}
 
export default SettingsPanel;