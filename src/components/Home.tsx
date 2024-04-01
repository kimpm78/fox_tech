import React from 'react';

import About from './About/about';
import Blog from './Blog/blog';
import Editor from './Editor/editor';
import Instagram from './Instagram/instagram';
import Newsletter from './Newsletter/newsletter';
import Sponsor from './Sponsor/sponsor';
import TopPage from './TopPage/topPage';
import TrendingTopic from './TrendingTopic/trendingTopic';

import '../App.css';

const Home: React.FC = () => {
  return (
    <>
      <TopPage />
      <TrendingTopic />
      <Editor />
      <Blog />
      <About />
      <Instagram />
      <Sponsor />
      <Newsletter />
    </>
  );
};

export default Home;
