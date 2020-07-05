import React from "react";
import NavBar from './NavBar'
import HomeHero from "./HomeHero";
import ReactProjectsHome from "./ReactProjectsHome";
import WordpressProjectsHome from './WordpressProjectsHome'
import EmailMarketingHomePage from './EmailMarketingHomePage'
import Footer from './Footer'

const HomePage = () => (
  <div>
    <NavBar />
    <HomeHero />
    <ReactProjectsHome />
    <WordpressProjectsHome />
    <EmailMarketingHomePage />
    <Footer />
  </div>
);

export default HomePage;
