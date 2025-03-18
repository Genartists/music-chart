import React from 'react';
import HomePage from './pages/HomePage';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ArtistsPage from "./pages/ArtistsPage";
import NoPage from "./pages/NoPage";

const App = () => {
    return (
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="chart" element={<ArtistsPage/>}/>
                        <Route path="*" element={<NoPage/>}/>
                    </Routes>
        </BrowserRouter>
    );
}

export default App;

