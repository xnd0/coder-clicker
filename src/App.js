import React from "react";
import MainPage from "./components/MainPage";
import Vizbox from "./components/Vizbox";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <div className="flex-row">
                <MainPage />
                <Vizbox />
            </div>
            <Footer />
        </div>
    )
};

export default App;
