import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../layout/PageLayout';
import SettingsPanel from '../../components/SettingsPanel';
import LeftSidePanel from '../../components/LeftSidePanel';
import InfoPanel from '../../components/InfoPanel';
import "./index.css"
import { io } from "socket.io-client";
const socket = io("http://server-domain.com");
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
