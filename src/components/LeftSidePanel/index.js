import React, { useState, useEffect } from 'react';
import {Modal, Form, Input,List, Button, Space} from 'antd';
import ModalInput from '../ModalInputUrl'
import "./index.css"
import { PlusCircleOutlined } from '@ant-design/icons';
import socket from '../../core/socketio';
import getList from "../../core/axios.js"
function LeftSidePanel(props) {  
  const [visible, setVisible] = useState(false);
  const [Urls, setUrls] = useState();
  socket.on("List ready", (Urls) => {
    console.log(Urls);
    setUrls(getList);
  });
  socket.emit("List2", "ready2");
    console.log(props)
      return (
        <div className ='LeftSidePanel'>
          <List
            header={<div>Имя</div>}
            footer={
              <Button type="dashed"
              style={{ width: '100%' }}
              onClick={() => setVisible(true)}
              >Добавить <PlusCircleOutlined/></Button>
            }
            style = {{height:"100%",align: 'center', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}
            bordered
            dataSource={props.rootStore.sites}
            renderItem={item => (
              <List.Item key={item.title}>
               <Space> {item.title} </Space> <Space> {item.url} </Space>
              </List.Item>
            )}
          />
          <ModalInput visible={visible} onClose={() => {setVisible(false)}} rootStore = {props.rootStore}/>
        </div>
      );
  }
  export default LeftSidePanel;
