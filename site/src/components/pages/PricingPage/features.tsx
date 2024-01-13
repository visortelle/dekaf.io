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
            extraLabel: <>Max 5&nbsp;tenants, 5&nbsp;namespaces per tenant, 5&nbsp;topics per namespace</>
          },
          'dekaf-desktop': {},
          'dekaf-free': {
            extraLabel: <>Max 5&nbsp;tenants, 5&nbsp;namespaces per tenant, 5&nbsp;topics per namespace</>
          },
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'view-topic-subscriptions-and-producers',
        name: 'Subscriptions and producers stats',
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
        name: 'Manage schema',
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
          'dekaf-desktop': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'num-brokers-per-pulsar-instance',
        name: 'Brokers per cluster',
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
            extraLabel: <>3</>
          },
          'dekaf-desktop': {
            extraLabel: <>Unlimited</>
          },
          'dekaf-free': {
            extraLabel: <>3</>
          },
          'dekaf-for-teams': {
            extraLabel: <>Unlimited</>
          },
          'dekaf-enterprise': {
            extraLabel: <>Unlimited</>
          },
        }
      },
      {
        id: 'one-click-local-pulsar',
        name: 'Local managed Pulsar instance',
        availableAt: {
          'dekaf-desktop-free': {
            extraLabel: <>For MacOS and Linux</>
          },
          'dekaf-desktop': {
            extraLabel: <>For MacOS and Linux</>
          },
          'dekaf-free': {
            extraLabel: <>See <strong>Dekaf Desktop</strong> for this feature</>
          },
          'dekaf-for-teams': {
            extraLabel: <>See <strong>Dekaf Desktop</strong> for this feature</>
          },
          'dekaf-enterprise': {
            extraLabel: <>See <strong>Dekaf Desktop</strong> for this feature</>
          }
        }
      },
      {
        id: 'manage-io',
        name: 'Manage sinks and sources',
        availableAt: {
          'dekaf-desktop': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {}
        },
        isPlanned: true
      },
      {
        id: 'manage-pulsar-functions',
        name: 'Manage Pulsar functions',
        availableAt: {
          'dekaf-desktop': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {}
        },
        isPlanned: true
      },
      {
        id: 'geo-replication',
        name: 'Geo replication support',
        availableAt: {
          'dekaf-enterprise': {}
        },
        isPlanned: true
      },
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
            extraLabel: <>Max 100 messages</>
          },
          'dekaf-desktop': {},
          'dekaf-free': {
            extraLabel: <>Max 100 messages</>
          },
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
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
        name: 'Export messages to CSV or JSON',
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
      {
        id: 'data-visualization',
        name: 'Data visualization widgets',
        availableAt: {
          'dekaf-free': {},
          'dekaf-desktop': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        },
        isPlanned: true
      },
    ]
  },
  {
    id: 'produce-data',
    name: 'Produce Data',
    features: [
      {
        id: 'produce-message',
        name: 'Produce messages to a topic',
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
        id: 'reprocess-message',
        name: 'Reprocess a message',
        description: <>Re-send a message to any topic.</>,
        availableAt: {
          'dekaf-desktop': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'complex-producer-scenarios',
        name: 'Producer scenarios',
        description: <>Ability to set up scenarios like: produce a message to a topic, then produce another message to another topic; repeat 10 times.</>,
        availableAt: {
          'dekaf-desktop': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        },
        isPlanned: true,
      },
    ]
  },
  {
    id: 'library',
    name: 'Library',
    features: [
      {
        id: 'manage-library-items',
        name: 'Save items for further reuse',
        description: <>Save and reuse items like Consumer Sessions, Message Filters, Producer Scenarios.</>,
        availableAt: {
          'dekaf-desktop-free': {
            extraLabel: <>Max 20 items</>
          },
          'dekaf-desktop': {},
          'dekaf-free': {
            extraLabel: <>Max 50 items</>
          },
          'dekaf-for-teams': {
            extraLabel: <>Max 300 items</>
          },
          'dekaf-enterprise': {
            extraLabel: <>Unlimited items</>
          },
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
        name: 'Share library items with others',
        description: (
          <>
            <p>
              Share library items with your team-mates.
            </p>
          </>
        ),
        availableAt: {
          'dekaf-free': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
    ]
  },
  {
    id: 'security',
    name: 'Security',
    features: [
      {
        id: 'manage-pulsar-acls',
        name: 'Manage Pulsar ACLs',
        availableAt: {
          'dekaf-desktop-free': {},
          'dekaf-desktop': {},
          'dekaf-free': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        },
      },
      {
        id: 'pulsar-instance-authentication',
        name: 'Pulsar instance authentication and TLS',
        availableAt: {
          'dekaf-desktop': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        },
      },
      {
        id: 'access-control',
        name: 'Fine-grained access control',
        availableAt: {
          'dekaf-free': {
            extraLabel: <>Max 5 users</>
          },
          'dekaf-for-teams': {
            extraLabel: <>Max 15 users</>
          },
          'dekaf-enterprise': {
            extraLabel: <>Unlimited users</>
          },
        },
        isPlanned: true
      },
      {
        id: 'data-masking-rules',
        name: 'Data masking',
        availableAt: {
          'dekaf-enterprise': {},
        },
        isPlanned: true
      },
      {
        id: 'audit-log',
        name: 'Audit log',
        availableAt: {
          'dekaf-enterprise': {},
        },
        isPlanned: true
      }
    ]
  },
  {
    id: 'monitoring',
    name: 'Monitoring',
    features: [
      {
        id: 'metrics',
        name: 'Pulsar metrics charts',
        availableAt: {
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        },
        isPlanned: true
      },
      {
        id: 'alerting',
        name: 'Pulsar metrics alerts',
        availableAt: {
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        },
        isPlanned: true
      },
      {
        id: 'proactive-monitoring',
        name: 'Proactive data monitoring',
        availableAt: {
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        },
        isPlanned: true
      },
    ]
  },
  {
    id: 'support-and-licensing',
    name: 'Support',
    features: [
      {
        id: 'community-support',
        name: 'Community support',
        availableAt: {
          'dekaf-desktop': {},
          'dekaf-desktop-free': {},
          'dekaf-free': {},
          'dekaf-for-teams': {},
          'dekaf-enterprise': {},
        }
      },
      {
        id: '24-7-support',
        name: '24/7 dedicated support',
        availableAt: {
          'dekaf-for-teams': {
            extraLabel: <>2 hours response time</>
          },
          'dekaf-enterprise': {
            extraLabel: <>30 minutes response time</>
          },
        }
      },
      {
        id: 'bug-fixes-prioritization',
        name: 'Bug-fixes prioritization',
        availableAt: {
          'dekaf-enterprise': {},
        }
      },
      {
        id: 'offline-license',
        name: 'Offline license',
        availableAt: {
          'dekaf-enterprise': {},
        }
      }
    ]
  }
];