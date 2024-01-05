import React from 'react';
import Layout from '@theme/Layout';
import LinksBlock from './LinksBlock/LinksBlock';
import VideoSection from './VideoSection/VideoSection';
import HeadingsSection from './HeadingsSection/HeadingsSection';
import ThesisInfoSection from './ThesisInfoSection/ThesisInfoSection';
import StructInfoSection from './StructInfoSection/StructInfoSection';
import FeatureBlock from './FeatureBlock/FeatureBlock';

import style from './HomePage.module.css';

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
      <main className={style.homePage}>
        <HeadingsSection />
        <VideoSection />
        {features.map((feature) => (
          <FeatureBlock feature={feature} key={feature.title} />
        ))}
        {/* <ThesisInfoSection />
        <StructInfoSection /> */}
        <LinksBlock />
      </main>
    </Layout>
  );
};

export default HomePage;
