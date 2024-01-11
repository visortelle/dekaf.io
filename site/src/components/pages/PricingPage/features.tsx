import React from 'react';
import { Feature } from './PricingPage';

export type FeatureId = 'string';


export type FeatureGroup = {
  id: string,
  name: string,
  features: Feature[]
}

export type FeatureSet = FeatureGroup[];

export const features: FeatureSet = [
  {
    id: 'core',
    name: 'Core',
    features: [
      {
        id: 'browse-pulsar-resources',
        name: 'Manage Pulsar resources',
        description: (
          <>
            <p>
              Navigate Pulsar resources like tenants, namespaces and topics using tree view, breadcrumbs and tables.
            </p>
            <p>
              Create or delete tenants, namespaces, and topics.
            </p>
          </>
        ),
        availableAt: {
          'dekaf-desktop-free': {
            extraLabel: <>Max 10 namespaces per tenant,<br /> max 10 tenants</>
          },
          'dekaf-desktop': {},
          'dekaf-free': {
            extraLabel: <>Max 10 namespaces per tenant,<br /> max 10 tenants</>
          },
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'view-topic-subscriptions-and-producers',
        name: 'View subscriptions and producers',
        availableAt: {
          'dekaf-desktop-free': {},
          'dekaf-desktop': {},
          'dekaf-free': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'manage-namespace-policies',
        name: 'Manage namespace policies',
        availableAt: {
          'dekaf-desktop-free': {},
          'dekaf-desktop': {},
          'dekaf-free': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'manage-topic-policies',
        name: 'Manage topic policies',
        availableAt: {
          'dekaf-desktop-free': {},
          'dekaf-desktop': {},
          'dekaf-free': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'manage-topic-schema',
        name: 'Manage topic schema',
        availableAt: {
          'dekaf-desktop-free': {},
          'dekaf-desktop': {},
          'dekaf-free': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      }
    ]
  },
  {
    id: 'consume-data',
    name: 'Consume Data',
    features: [
      {
        id: 'view-topic-messages',
        name: 'View topic messages',
        availableAt: {
          'dekaf-desktop-free': {
            extraLabel: <>Max 10,000 processed messages per consumer session</>
          },
          'dekaf-desktop': {
            extraLabel: <>Unlimited processed messages per consumer session</>
          },
          'dekaf-free': {
            extraLabel: <>Max 10,000 processed messages per consumer session</>
          },
          'dekaf-for-teams': {
            extraLabel: <>Unlimited processed messages per consumer session</>
          },
          'dekaf-enterprise': {
            extraLabel: <>Unlimited processed messages per consumer session</>
          },
        }
      },
      {
        id: 'basic-message-filters',
        name: 'Basic filters',
        availableAt: {
          'dekaf-desktop-free': {},
          'dekaf-desktop': {},
          'dekaf-free': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'js-message-filters',
        name: 'JavaScript filters',
        availableAt: {
          'dekaf-desktop-free': {},
          'dekaf-desktop': {},
          'dekaf-free': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'colorizing-rules',
        name: 'Colorizing rules',
        availableAt: {
          'dekaf-desktop-free': {},
          'dekaf-desktop': {},
          'dekaf-free': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'field-projections',
        name: 'Field projections',
        description: <>Map any message field to an extra table column.</>,
        availableAt: {
          'dekaf-desktop-free': {},
          'dekaf-desktop': {},
          'dekaf-free': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'export-consumed-data',
        name: 'Export consumed data to CSV or JSON',
        availableAt: {
          'dekaf-desktop': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'consume-multiple-targets',
        name: 'Consume multiple targets',
        description: <>Each consumer session target may have it's own topic selector, filters, coloring rules, and projections.</>,
        availableAt: {
          'dekaf-desktop': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
    ]
  },
  {
    id: 'produce-data',
    name: 'Produce Data',
    features: [
      {
        id: 'produce-single-message',
        name: 'Produce a single message',
        availableAt: {
          'dekaf-desktop-free': {},
          'dekaf-desktop': {},
          'dekaf-free': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'reprocess-message',
        name: 'Reprocess message',
        description: <>Re-send a message to any topic.</>,
        availableAt: {
          'dekaf-desktop-free': {},
          'dekaf-desktop': {},
          'dekaf-free': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'producer-message-generators',
        name: 'Message generators',
        availableAt: {
          'dekaf-desktop-free': {},
          'dekaf-desktop': {},
          'dekaf-free': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'complex-producer-scenarios',
        name: 'Programmable producer scenarios',
        description: <>Ability to set up scenarios like: produce a message to a topic, then produce another message to another topic; repeat 10 times.</>,
        availableAt: {
          'dekaf-desktop': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
    ]
  },
  {
    id: 'library',
    name: 'Library',
    features: [
      {
        id: 'manage-library-items',
        name: 'Create and save items for further reuse',
        description: <>Save and reuse items like Consumer Sessions, Message Filters, Producer Scenarios.</>,
        availableAt: {
          'dekaf-desktop-free': {
            extraLabel: <>Max 20 items</>
          },
          'dekaf-desktop': {},
          'dekaf-free': {
            extraLabel: <>Max 50 items</>
          },
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'markdown-notes',
        name: 'Markdown notes',
        description: (
          <>
            <p>
              Add markdown notes to Pulsar resourcesAdd markdown notes to Pulsar resources.
            </p>
          </>
        ),
        availableAt: {
          'dekaf-desktop-free': {},
          'dekaf-desktop': {},
          'dekaf-free': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'share-library-items',
        name: 'Share library items',
        description: (
          <>
            <p>
              Share library items with your team-mates.
            </p>
          </>
        ),
        availableAt: {
          'dekaf-desktop': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
    ]
  }
];