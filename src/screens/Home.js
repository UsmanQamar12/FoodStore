import React from "react";
import Layout from "../screens/Layout";
import Banner from '../images/banner.jpeg';
import './Home.css';
import Footer from "./Footer";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})`, }}>
        <div className="headerContainer">
          <h1>Welcome to Food Store</h1>
          <p>Best Food In pakistan</p>
        </div>
      </div>
      <Footer/>
     </Layout> 
  );
};

export default Home;
