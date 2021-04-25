import React, { useEffect } from 'react';
import {Modal, Form, Input, InputNumber,} from 'antd';
import {observer} from "mobx-react"
import DataUrls from '../../../DataUrls.json'
import addSiteToList from "../../core/axios.js"

const validateMessages = {
  required: 'Введите ${label}',
  types: {
    number: '${label} должен быть числом!',
  },
  number: {
    range: '${label} должен быть больше ${min}',
  },
}

function ModalInput({visible, onClose, rootStore, data}) { 
    const [form] = Form.useForm();
    const onCreate = (values) => {
      console.log('Received values of form: ', values);
      // addSiteToList(values);
      rootStore.addSite(values) 
      onClose()
    };

    useEffect(() => {
      data?
        form.setFieldsValue({
          title: "",
          url: "",
          settings: {
            timeOut: ""
          },
          ...data,
        })
      : null
    }, [data])

    return (
        <Modal 
            title="Новый адрес" 
            visible={visible} 
            onCancel={() => {
              form.resetFields();
              onClose();
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
            validateMessages = {validateMessages}
            >
              <Form.Item 
              name="title"
              label = "Имя"
              rules={[
                {
                  required: true,
                },
              ]}
              >
                <Input/>
              </Form.Item>
              <Form.Item 
                name="url"
                label = "URL"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input/>
              </Form.Item>
              <Form.Item 
                label = "Время переодического тестирования"
                name={['settings', 'timeOut']}
                rules={[
                  {
                    required: true,
                    //message: "Введите Аутентификационный уровень",
                    type: 'number',
                    min: 0,
                  },
                ]}
              >
                <InputNumber/>
              </Form.Item>
            </Form>
        </Modal>
    );
}
export default observer(ModalInput);
