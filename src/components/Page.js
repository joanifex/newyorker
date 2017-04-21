import React from 'react';
import Header from './Header';
import Cartoon from './Cartoon';
import Footer from './Footer';

const Page = ({ cartoon, caption, fetchCartoon, randomCaption }) => (
  <div className="flexbox-container">
    <Header />
    <Cartoon cartoon={cartoon} caption={caption} nextCartoon={fetchCartoon} />
    <Footer nextCartoon={fetchCartoon} randomCaption={randomCaption}/>
  </div>
);

export default Page;
