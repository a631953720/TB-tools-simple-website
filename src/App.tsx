import axios from 'axios';
import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
