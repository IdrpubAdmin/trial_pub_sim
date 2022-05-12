import React, { useState } from "react";
import {HashRouter, Route, Routes, Link } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({isLoggedIn, userObj}) => {
    return (
    <HashRouter>
        {isLoggedIn && <Navigation />}
        <Routes>
            { isLoggedIn ? 
                <>
                    <Route path="/" element={<Home userObj={userObj} />} />
                    <Route path="/profile" element={<Profile />} />
                </> 
                : 
                <>
                    <Route path="/" element={<Auth />} /> 
                </>
            }        
        </Routes>
    </HashRouter>
    )
}

export default AppRouter; 