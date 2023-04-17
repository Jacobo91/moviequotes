/** @jsxImportSource @emotion/react */
import {css, ThemeProvider} from '@emotion/react';
import { theme } from '../styles';
import { SideBar } from '../components/SideBar';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../components/Main';

function App() {

  const quotes = useSelector(state => state.quotes);

  return (
    <ThemeProvider theme={theme}>
      <section
        css={css`
          display: flex;
          flex-direction: column-reverse;
          @media (min-width: 600px){
            flex-direction: row;
          }
        `}
      >
        <SideBar/>
        <Routes>
          <Route path='/quotes/:category' element={<Main/>}/>
        </Routes>
      </section>
    </ThemeProvider>
  );
}

export default App;

