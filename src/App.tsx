import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Home from './pages/home';
import Devices from './pages/devices';

const AppWrapper = styled.div`
  background-color: #717171;
  min-height: 100vh;
  overflow: auto;
  font-size: 16px;

  @keyframes fallDown {
    0% {
      transform: translate(0px, 0px);
    }
    100% {
      transform: translate(0px, 95vh);
    }
  }

  @keyframes shake {
    0% {
      transform: translate3d(1px, 0, 0);
    }
    100% {
      transform: translate3d(-1px, 0, 0);
    }
  }
  @keyframes rainbow {
    0% {
      color: red;
    }
    18% {
      color: orange;
    }
    36% {
      color: yellow;
    }
    52% {
      color: green;
    }
    70% {
      color: blue;
    }
    88% {
      color: purple;
    }
    100% {
      color: red;
    }
  }

  /* width */
  *::-webkit-scrollbar,
  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  /* Track */
  *::-webkit-scrollbar-track,
  &::-webkit-scrollbar-track {
    background: #191919;
    box-shadow: -2px 3px 6px rgba(255, 255, 255, 0.3);
  }

  /* Handle */
  *::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 10px;
    border: 4px solid transparent;
    background-clip: content-box;
  }
`;

function App() {
  useEffect(() => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.timeout = 10 * 1000;
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        // 打api錯誤時印出error
        // eslint-disable-next-line no-console
        console.error(error);
        return Promise.reject(error);
      },
    );
    return () => {
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return (
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="devices" element={<Devices />} />
        </Routes>
      </BrowserRouter>
      <div style={{ width: 100, height: 20 }}>
        <div style={{ width: 100, height: 4000 }}>1223</div>
      </div>
    </AppWrapper>
  );
}

export default App;
