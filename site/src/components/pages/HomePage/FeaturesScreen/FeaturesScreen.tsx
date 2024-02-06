import React from 'react';
import s from './FeaturesScreen.module.css'
import FeatureBlock, { Feature } from './FeatureBlock/FeatureBlock';

const features: Feature[] = [
  {
    title: 'Explore Pulsar data just in a few clicks 🔭',
    description: (
      <div>
        <p>
          Apply user-friendly basic filters, or advanced JavaScript filters to quickly find the needle in the haystack.
        </p>
        <p>
          Get messages from multiple related topics to get a complete picture of what happened.
        </p>
        <p>
          Use colorization rules, chart visualizations (coming soon), and field-to-column projections.
        </p>
        <p>
          Export the consumed data for further analysis in other tools.
        </p>
      </div>
    ),
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
  },
  {
    title: 'Minimize the Pulsar learning curve 🎓',
    description: (
      <div>
        <p>
          Apache Pulsar is a complex system that may be hard to grasp in a short time.
        </p>
        <p><a href="/pricing/?productId=dekaf-desktop">Dekaf Desktop</a> provides an easy way to try Pulsar in action without even touching the command line.</p>
        <p>
          Providing a visual representation of the Pulsar resources hierarchy, along with available information and actions for each Pulsar object, can significantly reduce the time and money needed to familiarize new team members with Pulsar.
        </p>
      </div>
    ),
    list: [],
    image: '/img/img_struct_main.png',
    href: '/thesis',
    direction: 'left',
  },
  {
    title: 'Simplify collaboration on your Pulsar streams 🤝',
    description: (
      <div>
        <p>
          Attach markdown notes to Pulsar resources like tenants, namespaces and topics to provide context and quick documentation to other organization members.
        </p>
        <p>
          Save message filters, consumer sessions, producer sessions, and other Dekaf objects to the shared library for quick access in frequently encountered scenarios.
        </p>
      </div>
    ),
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