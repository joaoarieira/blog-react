import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Routes from './routes';
import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes />
      <PageFooter />
    </BrowserRouter>
  );
}

export default App;