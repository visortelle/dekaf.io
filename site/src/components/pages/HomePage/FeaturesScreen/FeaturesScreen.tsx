import React from 'react';
import s from './FeaturesScreen.module.css'
import FeatureBlock, { Feature } from './FeatureBlock/FeatureBlock';

const features: Feature[] = [
  {
    title: 'Explore Pulsar data just in a few clicks 🔭', 
    list: [
      'Apply user-friendly basic filters, or advanced JavaScript filters to quickly find the needle in the haystack',
      'Get messages from multiple related topics to get a complete picture of what happened',
      'Use colorization rules, chart visualizations (coming soon), and field-to-column projections',
      'Export the data for further analysis in other tools',
      'Store filters, consumer sessions, and other configuration objects into library for the further reuse',
    ],
    image: '/img/img_struct_main.png',
    href: '/structure',
    direction: 'left',
  },
  {
    title: 'Manage Pulsar resources with comfort 🛋️',
    list: [
      'Manage tenants, namespaces, topics, and subscriptions',
      'View and configure namespace and topic policies',
      'Manage namespace bundles',
      'Enforce topic schema',
      '...and more'
    ],
    image: '/img/img_struct_main.png',
    href: '/thesis',
    direction: 'right',
  }
];

const FeaturesScreen: React.FC = () => {
  return (
    <section className={s.Screen}>
      <div className={s.Content}>
        {features.map((feature) => (
          <FeatureBlock feature={feature} key={feature.title} />
        ))}
      </div>
    </section>
  );
}

export default FeaturesScreen;