import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from 'styles/GlobalStyles';
import App from 'App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer
      position="bottom-center"
      autoClose="500"
      newestOnTop={false}
      pauseOnHover
      closeOnClick
    />
    <GlobalStyles />
  </>
);
