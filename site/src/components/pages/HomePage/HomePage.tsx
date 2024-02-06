import React from 'react';
import Layout from '@site/src/components/ui/Layout/Layout';
import GreetingScreen from './GreetingScreen/GreetingScreen';

import s from './HomePage.module.css';
import WhyDekafScreen from './WhyDekafScreen/WhyDekafScreen';
import FeaturesScreen from './FeaturesScreen/FeaturesScreen';
import FeedbackScreen from './FeedbackScreen/FeedbackScreen';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <main className={s.HomePage}>
        <GreetingScreen />
        <FeaturesScreen />
        <WhyDekafScreen />
        <FeedbackScreen />
      </main>
    </Layout>
  );
};

export default HomePage;
