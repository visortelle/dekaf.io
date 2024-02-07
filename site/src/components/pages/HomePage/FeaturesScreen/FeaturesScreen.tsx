import React from 'react';
import s from './FeaturesScreen.module.css'
import FeatureBlock, { Feature } from './FeatureBlock/FeatureBlock';

const features: Feature[] = [
  {
    title: 'Explore data just in a few clicks 🔭',
    description: (
      <ul>
        <li>
          Apply user-friendly basic filters, or advanced JavaScript filters to quickly find the needle in the haystack.
        </li>
        <li>
          Get messages from multiple related topics to get a complete picture of what happened.
        </li>
        <li>
          Use colorization rules, chart visualizations (coming soon), and field-to-column projections.
        </li>
        <li>
          Export the consumed data for further analysis in other tools.
        </li>
      </ul>
    ),
    image: '/img/img_struct_main.png',
    href: '/structure',
    direction: 'right',
  },
  {
    title: 'Manage Pulsar with comfort 🛋️',
    description: (
      <ul>
        <li>
          Manage tenants, namespaces, topics, subscriptions, and other Pulsar resources.
        </li>
        <li>
          View and configure namespace and topic policies without dealing with all the Pulsar API complexities.
        </li>
        <li>
          Manage namespace bundles, upload topic schema, run topic compaction, create missing partitions, and more.
        </li>
      </ul>
    ),
    image: '/img/img_struct_main.png',
    href: '/thesis',
    direction: 'left',
  },
  {
    title: 'Simplify collaboration on your data streams 🤝',
    description: (
      <ul>
        <li>
          Provide context and quick documentation by attaching markdown notes to Pulsar resources such as tenants, namespaces and topics.
        </li>
        <li>
          Grant limited access to specific Pulsar resources to other members withing your organization (coming soon).
        </li>
        <li>
          Save message filters, consumer sessions, producer sessions, and other Dekaf objects to the shared library for quick access in frequently encountered scenarios.
        </li>
      </ul>
    ),
    image: '/img/img_struct_main.png',
    href: '/thesis',
    direction: 'right',
  },
  {
    title: 'Minimize the Pulsar learning curve 🎓',
    description: (
      <ul>
        <li>
          Apache Pulsar is a complex system that may be hard to grasp in a short time.
        </li>
        <li><a href="/pricing/?productId=dekaf-desktop">Dekaf Desktop</a> provides an easy way to try Pulsar in action without even touching the command line.</li>
        <li>
          Providing a visual representation of the Pulsar resources hierarchy, along with available information and actions for each Pulsar object, can significantly reduce the time and money needed to familiarize new team members with Pulsar.
        </li>
      </ul>
    ),
    list: [],
    image: '/img/img_struct_main.png',
    href: '/thesis',
    direction: 'left',
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