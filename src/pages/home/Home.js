import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../layout/PageLayout';
import SettingsPanel from '../../components/SettingsPanel';
import LeftSidePanel from '../../components/LeftSidePanel';
import InfoPanel from '../../components/InfoPanel';
import "./index.css"
import socket from '../../core/socketio';

socket.on("connected", (arg) => {
  console.log(arg); // yor computer is virused
});

const Home = ({ location: { pathname } }) => {
  if (pathname !== '/') {
    return null;
  }
  return (
  <PageLayout title = "Home">
    <div className = "HomePage">
      <LeftSidePanel/>
      <div className = "Information">
        <SettingsPanel/>
        <InfoPanel/>
      </div>
    </div>
  </PageLayout>
  )
}
Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Home;
