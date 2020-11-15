import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Content from '../../components/Content';
import PropTypes from 'prop-types';
import { Layout } from './Home.styles';

const Home = (props) => (
  <Layout>
    <Menu/>
    <Header/>
    <Content/>
  </Layout>
);

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
