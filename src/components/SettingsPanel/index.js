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
        const res = await axios.post("http://192.168.1.7:6543/api/screenshots", {url:"https://urfu.ru/ru/"})
        console.log(res)
    }   

    render() { 
        console.log(site)
        const {site} = this.props
        return ( 
            <div className ='SettingsPanel'>
                {site? 
                    <React.Fragment>
                        <Descriptions
                        title="Настройки тестинга"
                        >
                        <Descriptions.Item label="Название сайта">{site.title}</Descriptions.Item>
                        <Descriptions.Item label="Таймаут проверки">{site.settings.timeOut}</Descriptions.Item>
                        <Descriptions.Item label="Статус">{site.settings.status}</Descriptions.Item>
                        <Descriptions.Item label="Время с прошлой проверки">{site.settings.timestamp}</Descriptions.Item>
                        </Descriptions>
                        <Button onClick = {this.startTesting}>Запустить проверку</Button>
                    </React.Fragment> 
                : <div>Загрузка...</div>}
            </div>
         );
    }
}
 
export default SettingsPanel;