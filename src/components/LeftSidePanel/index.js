import React, { useState, useEffect } from 'react';                                          //Рабочий код, делаем из него автоматический подгрузчик.
import {List, Button} from 'antd';
import DataUrls from '../../../DataUrls.json'

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
          <List
            header={<div>Имя</div>}
            footer={<Button type="primary" style={{ marginBottom: 16 }}>
                Добавить сайт
              </Button>
              }
            style = {{width: "30%", align: 'center', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}
            bordered
            dataSource={DataUrls}
            renderItem={item => (
              <List.Item key={item.name}>
                {item.name}
              </List.Item>
            )}
          />
      );
  }
  export default LeftSidePanel;
