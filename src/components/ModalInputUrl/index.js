import React from 'react';
import {Modal, Form, Input, InputNumber,} from 'antd';
import DataUrls from '../../../DataUrls.json'
import addSiteToList from "../../core/axios.js"
function ModalInput({visible, onClose}) { 
    const [form] = Form.useForm();
    const onCreate = (values) => {
      console.log('Received values of form: ', values);
      addSiteToList(values);
      onClose()
      rootStore.addSite(values) 
    };
    return (
        <Modal 
            title="Новый адрес" 
            visible={visible} 
            onCancel={() => {
              form
              .validateFields()
              .then((values) => {
                form.resetFields();
                onClose();
              })
            }}
            onOk={() => {
              form
              .validateFields()
              .then((values) => {
                form.resetFields();
                onCreate(values);
              })
              .catch((info) => {
                console.log('Validate Failed:', info);
              });
            }}
        >
            <Form
            form={form}
            layout="vertical"
            >
              <Form.Item name="title">
                <Input placeholder="Имя"/>
              </Form.Item>
              <Form.Item name="url">
                <Input placeholder="URL"/>
              </Form.Item>
              <Form.Item name={['settings', 'timeOut']}>
                <InputNumber placeholder="Время переодического тестирования"/>
              </Form.Item>
            </Form>
        </Modal>
    );
}
export default ModalInput;
