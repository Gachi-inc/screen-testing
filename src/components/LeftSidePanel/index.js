import React, { useState, useEffect } from 'react';
import {Modal, Form, Input,List, Button, Space, Menu} from 'antd';
import ModalInput from '../ModalInputUrl'
import "./index.css"
import { PlusCircleOutlined } from '@ant-design/icons';
import socket from '../../core/socketio';
import getList from "../../core/axios.js"
import {observer} from "mobx-react"
import { rootStore } from '../../models/RootStore';

function LeftSidePanel(props) {  
  const [visible, setVisible] = useState(false);

  // socket.on("List ready", (Urls) => {
  //   console.log(Urls);
  //   setUrls(getList);
  // });
  socket.emit("List2",  {data: "ready2"})
    socket.on("List3", (msg) =>{console.log('CСОСИ', msg)})
    console.log(props)
      return (
        <div className ='LeftSidePanel'>
           {/* <Button type="dashed"
              style={{ width: '100%' }}
              onClick={() => socket.send({data: "ready2"})}
              >emit <PlusCircleOutlined/></Button> */}
          <h1>Объекты для тестирования</h1>
          <Menu
            onClick = {(e) => props.setCurrentId(e.key)}
            mode="inline"
          >
            {rootStore.sites.map(site => (
              <Menu.Item key={site.id}>{site.title}</Menu.Item>
            ))}
          </Menu>
          <Button type="dashed"
              style={{ width: '100%' }}
              onClick={() => setVisible(true)}
              >Добавить <PlusCircleOutlined/></Button>
          <ModalInput visible={visible} onClose={() => {setVisible(false)}} rootStore = {props.rootStore}/>
        </div>
      );
  }
  export default observer(LeftSidePanel);
