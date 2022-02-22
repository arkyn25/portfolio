import React from 'react';
import Header from "./Header/Header";
import Profile from "./Profile/Profile";

import './Home.css';
import Footer from './Footer/Footer';

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  )
}
