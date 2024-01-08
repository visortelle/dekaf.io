import React from 'react';
import s from './FeaturesScreen.module.css'
import FeatureBlock, { Feature } from './FeatureBlock/FeatureBlock';

const features: Feature[] = [
  {
    title: 'Visibility Into Pulsar',
    description: 'Browser Pulsar resources, see metrics.',
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
    title: 'Perform Pulsar Operations',
    description: 'Fantastic tool for fantastic purposes',
    list: [
      'Navigate tenants, namespaces, and topics.',
      'Create and delete resources.',
      'View Topic Stats',
      'Advanced Management',
    ],
    image: '/img/img_struct_main.png',
    href: '/structure',
    direction: 'left',
  },
  {
    title: 'Collaborate With Others in Your Company',
    description: 'While there are many solutions for monitoring Kafka, few come with an opinionated solution and clear guidance on what matters most. Monitoring Kafka should not just be for Ops, but also for product teams that are responsible for their applications.',
    list: [
      'Navigate tenants, namespaces, and topics.',
      'Create and delete resources.',
      'View Topic Stats',
      'Advanced Management',
    ],
    image: '/img/img_struct_main.png',
    href: '/structure',
    direction: 'left',
  },
  {
    title: 'Monitor You Pulsar Applications',
    description: 'While there are many solutions for monitoring Kafka, few come with an opinionated solution and clear guidance on what matters most. Monitoring Kafka should not just be for Ops, but also for product teams that are responsible for their applications.',
    list: [
      'Navigate tenants, namespaces, and topics.',
      'Create and delete resources.',
      'View Topic Stats',
      'Advanced Management',
    ],
    image: '/img/img_struct_main.png',
    href: '/structure',
    direction: 'left',
  },
  {
    title: 'Integrated With Your Existing Stack',
    description: 'Dekaf UI enables multi-cluster connections and supports all Kafka providers, both cloud and on-premise. Bring your source of truth of users and groups from your existing identity provider (SSO) and integrate with messaging tools for enhanced notifications and alerts.',
    list: [
      'Navigate tenants, namespaces, and topics.',
      'Create and delete resources.',
      'View Topic Stats',
      'Advanced Management',
    ],
    image: '/img/img_struct_main.png',
    href: '/structure',
    direction: 'left',
  },
  {
    title: 'Security',
    description: 'Dekaf UI enables multi-cluster connections and supports all Kafka providers, both cloud and on-premise. Bring your source of truth of users and groups from your existing identity provider (SSO) and integrate with messaging tools for enhanced notifications and alerts.',
    list: [
      'Navigate tenants, namespaces, and topics.',
      'Create and delete resources.',
      'View Topic Stats',
      'Advanced Management',
    ],
    image: '/img/img_struct_main.png',
    href: '/structure',
    direction: 'left',
  },
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