import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Install from './Install';
import Start from './Start';
import Grammar from './Grammar';
import Routerr from './Routerr';

const Main = () => {
    return (
        <BrowserRouter>
            <div className="wrap">
                <div className="headerWrap">
                    <Header />
                </div>
                <div className="containerWrap">
                    <Routes>
                        <Route exact path="/" element={<Install />} />
                        <Route path="/Install" element={<Install />} />
                        <Route path="/Start" element={<Start />} />
                        <Route path="/Grammar" element={<Grammar />} />
                        <Route path="/Routerr" element={<Routerr />} />
                    </Routes>
                </div>
                <div className="footerWrap">
                    <footer>

                    </footer>
                </div>
            </div>
        </BrowserRouter>
    )
} 

export default Main;