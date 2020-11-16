import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { GlobalStyles } from '../../styles/globalStyles';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Content from '../../components/Content';
import PropTypes from 'prop-types';
import { Layout } from './Home.styles';

const Home = (props) => (
  <ThemeProvider theme={ theme }>
    <GlobalStyles />
      <Layout>
        <Menu/>
        <Header/>
        <Content/>
      </Layout>
  </ThemeProvider>
);

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
