import React from 'react';
import Header from './Header';
import Cartoon from './Cartoon';
import Footer from './Footer';

const Page = ({ cartoon, caption, fetchCartoon }) => (
  <div className="flexbox-container">
    <Header />
    <Cartoon cartoon={cartoon}/>
    <Footer nextCartoon={fetchCartoon}/>
  </div>
);

export default Page;
