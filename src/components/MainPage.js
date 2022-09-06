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
      {/* We are passing the currentPage from state and the function to update it */}
      {/* <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {/* {renderPage()}
      {Footer()} */}
       <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}


        <div>
        ClickerOne
        {ClickerOne()}
        </div>



        {/* <button id="btn1">Write a line of code</button> */}
        <p>
          Welcome to Coder Clicker
        </p>


      </header>
    </div>
    </div>
  );
}
