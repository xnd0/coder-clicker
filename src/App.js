import React from "react";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
    return (
        <div className="fullscreen">
            <Header />
            <MainPage />
            <Footer />
        </div>
    )
};

export default App;
