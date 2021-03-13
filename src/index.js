import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./bootstrap.css";
import Nav from "./components/navigation/Nav";
import Header from "./components/header/Header"
import About from "./components/about/About"
import Inventory from "./components/inventory/inventory"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
// import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Nav />
    <Header />
    <main>
      <About/>
       <div id="hr">
        <hr className="container" />
      </div>
      <Inventory/>

      <Contact/>

    </main>
    <Footer/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
