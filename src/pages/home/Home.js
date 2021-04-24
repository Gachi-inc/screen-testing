import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../layout/PageLayout';
import SettingsPanel from '../../components/SettingsPanel';
import LeftSidePanel from '../../components/LeftSidePanel';
import InfoPanel from '../../components/InfoPanel';
import "./index.css"
import socket from '../../core/socketio';
import {observer, inject} from "mobx-react"

socket.on("connected", (arg) => {
  console.log(arg); // yor computer is virused
});


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
    if (this.props.location.pathname !== '/') {
      return null;
    }
    return (
    <PageLayout title = "Home">
      <div className = "HomePage">
        <LeftSidePanel rootStore = {rootStore} setCurrentId = {this.setId}/>
        <div className = "Information">
          <SettingsPanel rootStore = {rootStore} id = {this.state.id}/>
          <InfoPanel rootStore = {rootStore} id = {this.state.id}/>
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
