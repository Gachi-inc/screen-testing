import React, { useState, useEffect } from 'react';                                          //Рабочий код, делаем из него автоматический подгрузчик.
import {Modal, Form, Input,List, Button, Space} from 'antd';
import DataUrls from '../../../DataUrls.json'
import ModalInput from '../ModalInputUrl'
import "./index.css"
import { PlusCircleOutlined } from '@ant-design/icons';
function LeftSidePanel(props) {  
  //const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
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
            dataSource={DataUrls}
            renderItem={item => (
              <List.Item key={item.name}>
               <Space> {item.name} </Space> <Space> {item.url} </Space>
              </List.Item>
            )}
          />
          <ModalInput visible={visible} onClose={() => {setVisible(false);}}/>
        </div>
      );
  }
  export default LeftSidePanel;
