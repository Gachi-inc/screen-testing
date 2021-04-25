import React, { Component } from 'react';
import {Descriptions, Button} from "antd"
import "./index.css"
import axios from 'axios';
import { EditFilled, EditOutlined } from '@ant-design/icons';
import ModalInputUrl from '../ModalInputUrl';
class SettingsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    startTesting = async() => {
        const res = await axios.post("http://192.168.1.202:6543/api/screenshots", {url:"https://urfu.ru/ru/"})
        console.log(res)
    }   

    handleEdit = () => {
        this.setState({visible: !this.state.visible})
    }

    render() { 
        console.log(site)
        const {site} = this.props
        const {visible} = this.state
        return ( 
            <div className ='SettingsPanel'>
                {site? 
                    <React.Fragment>
                        <Descriptions
                        title="Настройки тестинга"
                        >
                            <Descriptions.Item label="Название сайта">{site.title}</Descriptions.Item>
                            <Descriptions.Item label="URL сайта">{site.url}</Descriptions.Item>
                            <Descriptions.Item label="Таймаут проверки">{site.settings.timeOut}</Descriptions.Item>
                            <Descriptions.Item label="Статус">{site.settings.status}</Descriptions.Item>
                            <Descriptions.Item label="Время с прошлой проверки">{site.settings.timestamp}</Descriptions.Item>
                        </Descriptions>
                        <Button onClick = {this.startTesting}>Запустить проверку</Button>
                        <Button type = "primary" onClick = {this.handleEdit}><EditOutlined/></Button>
                    </React.Fragment> 
                : <span>Выберите или создайте объект тестирования</span>}
                <ModalInputUrl visible = {visible} onClose = {this.handleEdit} data = {site}/>
            </div>
         );
    }
}
 
export default SettingsPanel;