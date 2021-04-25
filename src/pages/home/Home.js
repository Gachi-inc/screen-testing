import React, {Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../layout/PageLayout';
// import SettingsPanel from '../../components/SettingsPanel';
import LeftSidePanel from '../../components/LeftSidePanel';
// import InfoPanel from '../../components/InfoPanel';
import "./index.css"
import socket from '../../core/socketio';
import {observer, inject} from "mobx-react"
import { Spin } from 'antd';

socket.on("connect", (arg) => {
  console.log(arg); // yor computer is virused
});

const SettingsPanel = lazy(() => import('../../components/SettingsPanel'));
const InfoPanel = lazy(() => import('../../components/InfoPanel'));

// import { io } from "socket.io-client";
// const socket = io("http://server-domain.com");
@inject("rootStore")
@observer
class Home extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      id: null
    }
  } 

  setId = (id) => {
    this.setState({id})
  }

  render(){
    const {rootStore} = this.props
    const {id} = this.state
    if (this.props.location.pathname !== '/') {
      return null;
    }
    return (
    <PageLayout title = "Home">
      <div className = "HomePage">
        <LeftSidePanel rootStore = {rootStore} setCurrentId = {this.setId}/>
        <div className = "Information">
          <Suspense fallback={<div className="lazy-loading">loading...</div>}>
            <SettingsPanel site = {rootStore.sites.find(site => site.id === id)}/>
            <InfoPanel rootStore = {rootStore} id = {this.state.id}/>
          </Suspense>
        </div>
      </div>
    </PageLayout>
    )
  }
}
Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Home;
