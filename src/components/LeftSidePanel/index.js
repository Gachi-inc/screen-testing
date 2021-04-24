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
          {/* <List
            header={<div>Имя</div>}
            footer={
              <Button type="dashed"
              style={{ width: '100%' }}
              onClick={() => setVisible(true)}
              >Добавить <PlusCircleOutlined/></Button>
            }//onSelect={props.setId(item.id)}
            style = {{height:"100%",align: 'center', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}
            bordered
            dataSource={props.rootStore.sites}
            renderItem={item => (
              <List.Item key={item.id} onClick = {(e) => console.log(e.target.value)}>
               <Space> {item.title} </Space> <Space> {item.url} </Space>
              </List.Item>
            )}
          /> */}
           <Button type="dashed"
              style={{ width: '100%' }}
              onClick={() => socket.send({data: "ready2"})}
              >emit <PlusCircleOutlined/></Button>
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
