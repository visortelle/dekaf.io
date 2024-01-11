import React from 'react';
import Layout from '@site/src/components/ui/Layout/Layout';
import LinksBlock from './LinksBlock/LinksBlock';
import GreetingScreen from './GreetingScreen/GreetingScreen';

import s from './HomePage.module.css';
import WhyDekafScreen from './WhyDekafScreen/WhyDekafScreen';
import FeaturesScreen from './FeaturesScreen/FeaturesScreen';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <main className={s.HomePage}>
        <GreetingScreen />
        <WhyDekafScreen />
        {/* <FeaturesScreen /> */}
        <LinksBlock />
      </main>
    </Layout>
  );
};

export default HomePage;
