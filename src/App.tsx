import React from 'react';
import GlobalHooks from 'components/GlobalHooks';
import Header from 'components/Header';
import { ToastListener } from 'contexts/ToastsContext';
import { BrowserRouter } from 'react-router-dom';
import LeftSide from 'views/Dashboard/LeftSide';
import TopCards from 'views/Dashboard/TopCards';
import Routes from './routes';

function App() {
   
    return (
        
        <BrowserRouter basename="">
            <GlobalHooks />
            <Routes />
            <ToastListener />
        </BrowserRouter>
    );
}

export default App;
