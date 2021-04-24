import React, { useState, useEffect } from 'react';                                          //Рабочий код, делаем из него автоматический подгрузчик.
import {Modal, Form, Input,List, Button} from 'antd';
import DataUrls from '../../../DataUrls.json'
import ModalInput from '../ModalInputUrl'

function LeftSidePanel(props) {  
  //const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
      return (
        <div className ='LeftSidePanel'>
          <List
            header={<div>Имя</div>}
            footer={
              <Button type="primary"
              style={{ marginBottom: 16 }}
              onClick={() => setVisible(true)}
              >Добавить сайт</Button>
            }
            style = {{width: "30%", height: "100%", align: 'center',}}
            bordered
            dataSource={DataUrls}
            renderItem={item => (
              <List.Item key={item.name}>
                {item.name}
              </List.Item>
            )}
          />
          <ModalInput visible={visible} onClose={() => {setVisible(false);}}/>
        </div>
      );
  }
  export default LeftSidePanel;
