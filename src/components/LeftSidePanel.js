import React, { useState, useEffect } from 'react';                                          //Рабочий код, делаем из него автоматический подгрузчик.
import {List, Button} from 'antd';
import DataUrls from '../../DataUrls.json'

function LeftSidePanel(props) {  

  
    // const handleAdd = () => {
    //   //const { count, dataSource } = state;
      
    //   jsonObj.general_array.push(
    //     {
    //       Name:`${}`,
    //       Url:`${}`
    //     });
    //     setUrls(DataUrls);
    // };



      return (
        <div style={{ position: 'relative' }}>
          <List
            header={<div>Имя</div>}
            footer={<Button type="primary" style={{ marginBottom: 16 }}>
                Добавить сайт
              </Button>
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
        </div>
      );
  }
  export default LeftSidePanel;
