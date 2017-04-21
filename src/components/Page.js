import React from 'react';
import Header from './Header';
import Cartoon from './Cartoon';
import Footer from './Footer';

const Page = ({ cartoon, fetchCartoon }) => (
  <div className="flexbox-container">
    <Header />
    <Cartoon
      cartoon={cartoon}
      nextCartoon={fetchCartoon}
    />
    <Footer nextCartoon={fetchCartoon}/>
  </div>
);

export default Page;
