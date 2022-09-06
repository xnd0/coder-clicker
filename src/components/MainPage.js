// import React, { useState } from 'react';
import React from 'react';
import ClickerOne from './ClickerOne';

// import NavTabs from './NavTabs';
// import Footer from './Footer';


export default function MainPage() {
    //   const [currentPage, setCurrentPage] = useState('Home');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    //   const renderPage = () => {
    //     if (currentPage === 'Home') {
    //       return <Home />;
    //     }
    //     if (currentPage === 'About') {
    //       return <About />;
    //     }
    //     if (currentPage === 'ContactForm') {
    //       return <ContactForm />;
    //     }
    //     return <Contact />;
    //   };

    //   const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            CLICKER CODER CLICKER CODER CLICKER
            <div className="App">
                <section className="App-body">

                    <div className="App-block">
                        {/* Write a Line of Code */}
                        {ClickerOne()}
                    </div>

                </section>
                <div>
                    <p>
                        Welcome to Coder Clicker
                    </p>
                    <p> Goal: How many lines of code can you write?</p>
                </div>
            </div>
        </div>
    );
}
