import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../layout/PageLayout';
import SettingsPanel from '../../components/SettingsPanel';
import LeftSidePanel from '../../components/LeftSidePanel';
import "./index.css"
const Home = ({ location: { pathname } }) => {
  if (pathname !== '/') {
    return null;
  }
  return (
  <PageLayout>
    <div className = "HomePage">
      <LeftSidePanel/>
      <SettingsPanel/>
    </div>
  </PageLayout>
  )
}
Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Home;
