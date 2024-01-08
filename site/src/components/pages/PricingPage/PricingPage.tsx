import React, { ReactElement, useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '../../ui/Heading/Heading';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import Toggle from '../../ui/Toggle/Toggle';

import s from './PricingPage.module.css';

export type Price = { id: string } & ({
  type: 'free',
  href: string
} | {
  type: 'fixed',
  value: ReactElement,
  href: string
} | {
  type: 'fixed-by-buyer-type',
  individual: {
    value: ReactElement,
    href: string
  },
  organization: {
    value: ReactElement,
    href: string
  },
} | {
  type: 'custom',
  href: string
});

export type ProductTier = {
  id: string,
  name: string,
  monthlyPrice: Price
  yearlyPrice: Price
}

export type ProductId = 'dekaf' | 'dekaf-desktop';

export type Product = {
  id: ProductId,
  name: string,
  description: ReactElement,
  tiers: ProductTier[]
};

export const products: Product[] = [
  {
    id: 'dekaf',
    name: 'Dekaf',
    description: <>Dekaf Product Description</>,
    tiers: [
      {
        id: 'dekaf-free',
        name: 'Dekaf Free',
        monthlyPrice: { id: 'dekaf-free-monthly', type: 'free', href: '' },
        yearlyPrice: { id: 'dekaf-free-yearly', type: 'free', href: '' }
      },
      {
        id: 'dekaf-for-teams',
        name: 'Dekaf for Teams',
        monthlyPrice: {
          id: 'dekaf-for-teams-monthly',
          type: 'fixed',
          value: <><strong>350$</strong> per instance per month</>,
          href: ''
        },
        yearlyPrice: {
          id: 'dekaf-for-teams-yearly',
          type: 'fixed',
          value: <><strong>3200$</strong> per instance per year</>,
          href: ''
        },
      },
      {
        id: 'dekaf-enterprise',
        name: 'Dekaf Enterprise',
        monthlyPrice: {
          id: 'dekaf-enterprise-monthly',
          type: 'custom',
          href: ''
        },
        yearlyPrice: {
          id: 'dekaf-enterprise-yearly',
          type: 'custom',
          href: ''
        },
      }
    ],
  },
  {
    id: 'dekaf-desktop',
    name: 'Dekaf Desktop',
    description: <>Dekaf Desktop Description</>,
    tiers: [
      {
        id: 'dekaf-desktop-free',
        name: 'Dekaf Desktop Free',
        monthlyPrice: {
          id: 'dekaf-desktop-free-monthly',
          type: 'free',
          href: ''
        },
        yearlyPrice: {
          id: 'dekaf-desktop-free-yearly',
          type: 'free',
          href: ''
        }
      },
      {
        id: 'dekaf-desktop',
        name: 'Dekaf Desktop',
        monthlyPrice: {
          id: 'dekaf-desktop-monthly',
          type: 'fixed-by-buyer-type',
          individual: {
            value: <><strong>9.90$</strong> per month</>,
            href: ''
          },
          organization: {
            value: <><strong>34.90$</strong> per month</>,
            href: ''
          },
        },
        yearlyPrice: {
          id: 'dekaf-desktop-yearly',
          type: 'fixed-by-buyer-type',
          individual: {
            value: <><strong>380.00$</strong> per year</>,
            href: ''
          },
          organization: {
            value: <><strong>34.90$</strong> per year</>,
            href: ''
          },
        },
      }
    ],
  }
] as const;

export type PricingPeriod = 'monthly' | 'yearly';

export type BuyerType = 'organization' | 'individual';

const PricingPage: React.FC = () => {
  const [productId, setProductId] = useState<ProductId>('dekaf');
  const [pricingPeriod, setPricingPeriod] = useState<PricingPeriod>('yearly');
  const [buyerType, setBuyerType] = useState<BuyerType>('organization');

  const product = products.find(p => p.id === productId)!;

  return (
    <Layout>
      <main className={s.PricingPage}>
        <div className={s.Content}>
          <Heading level={2}>Subscription Options and Pricing</Heading>
          <div className={s.ProductSelectionControls}>
            <Toggle<ProductId>
              options={[
                {
                  value: 'dekaf',
                  label: (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                      Dekaf
                      <div style={{ fontSize: '0.75rem', opacity: '0.6', marginTop: '0.4rem' }}>
                        Comprehensive solution for organizations of any size
                      </div>
                    </div>
                  )
                },
                {
                  value: 'dekaf-desktop',
                  label: (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                      Dekaf Desktop
                      <div style={{ fontSize: '0.75rem', opacity: '0.6', marginTop: '0.4rem' }}>
                        Ideal for small projects and learning
                      </div>
                    </div>
                  )
                },
              ]}
              value={productId}
              onChange={setProductId}
            />
            {productId === 'dekaf-desktop' && <Toggle<BuyerType>
              options={[
                { value: 'organization', label: <>For Organizations</> },
                { value: 'individual', label: <>For Individual Use</> },
              ]}
              value={buyerType}
              onChange={setBuyerType}
            />}
            <Toggle<PricingPeriod>
              options={[
                { value: 'yearly', label: <>Yearly billing&nbsp;&nbsp;<span style={{ opacity: '0.6' }}>save 2 months</span></> },
                { value: 'monthly', label: <>Monthly billing</> },
              ]}
              value={pricingPeriod}
              onChange={setPricingPeriod}
            />


          </div>
          <FeaturesSection selectedType={productId} />
        </div>
      </main>
    </Layout>
  );
};

export default PricingPage;
