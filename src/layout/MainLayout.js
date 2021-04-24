import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './MainLayout.less';
import Avatar from 'antd/lib/avatar';

const { Footer, Header } = Layout;

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Header style= {{backgroundColor: "#6CDA9F"}}>
          <div className="logo">🤖</div>
          <Menu theme="light" mode="horizontal">
            <Menu.Item key="1">
              <Avatar size={32} icon={<UserOutlined />} />
              UserName
            </Menu.Item>
          </Menu>
        </Header>
        {children}
        <Footer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Gachi-inc/screen-testing-client"
          >
            GitHub
          </a>
        </Footer>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
