import React from 'react';
import Layout from '@theme/Layout';
import LinksBlock from './LinksBlock/LinksBlock';
import GreetingScreen from './GreetingScreen/GreetingScreen';
import FeatureBlock from './FeatureBlock/FeatureBlock';

import s from './HomePage.module.css';
import WhyPulsarScreen from './WhyPulsarScreen/WhyPulsarScreen';
import WhyDekafScreen from './WhyDekafScreen/WhyDekafScreen';

const features = [
  {
    title: 'Pulsar Resources Browser',
    description: 'Fantastic tool for fantastic purposes',
    list: [
      'Navigate tenants, namespaces, and topics.',
      'Create and delete resources.',
      'View Topic Stats',
      'Advanced Management',
    ],
    image: '/img/img_struct_main.png',
    href: '/thesis',
    direction: 'left',
  },
  {
    title: 'Consume Data',
    description: 'Fantastic tool for fantastic purposes',
    list: [
      'Navigate tenants, namespaces, and topics.',
      'Create and delete resources.',
      'View Topic Stats',
      'Advanced Management',
    ],
    image: '/img/img_struct_main.png',
    href: '/structure',
    direction: 'right',
  },
]

const HomePage: React.FC = () => {
  return (
    <Layout>
      <main className={s.homePage}>
        <div className={s.content}>
          <GreetingScreen />
          <WhyPulsarScreen />
          <WhyDekafScreen />
          {features.map((feature) => (
            <FeatureBlock feature={feature} key={feature.title} />
          ))}
          <LinksBlock />
        </div>
      </main>
    </Layout>
  );
};

export default HomePage;
