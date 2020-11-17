import React, { useRef, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { GlobalStyles } from '../../styles/globalStyles';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Content from '../../components/Content';
import PropTypes from 'prop-types';
import { Layout } from './Home.styles';

const Home = (props) => {
  const [menuWidth, setMenuWidth] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    setMenuWidth(menuRef.current.offsetWidth);
  }, []);
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
        <Layout>
          <Menu forwardedRef={menuRef}/>
          <Header/>
          <Content/>
        </Layout>
    </ThemeProvider>
  );

}

Home.propTypes = {
  // bla: PropTypes.string,
};

export default Home;
