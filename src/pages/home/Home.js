import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../layout/PageLayout';
import SettingsPanel from '../../components/SettingsPanel';
import LeftSidePanel from '../../components/LeftSidePanel';

const Home = ({ location: { pathname } }) => {
  if (pathname !== '/') {
    return null;
  }
  return (
  <PageLayout title = "Home">
    <div>
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
