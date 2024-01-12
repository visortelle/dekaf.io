import React, { ReactElement, useState } from 'react';
import Layout from '@site/src/components/ui/Layout/Layout';
import Heading from '../../ui/Heading/Heading';
import Toggle from '../../ui/Toggle/Toggle';
import { useQueryParam, withDefault, StringParam } from 'use-query-params';

import s from './PricingPage.module.css';
import FeatureTable from './FeatureTable/FeatureTable';
import { features } from './features';
import Beta from '../../ui/Beta/Beta';

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

export type Feature = {
  id: string,
  name: string,
  availableAt: Partial<Record<ProductTierId, {
    extraLabel?: ReactElement
  }>>,
  description?: ReactElement,
  isPlanned?: boolean
};

export type ProductTier = {
  id: string,
  name: string,
  monthlyPrice: Price,
  yearlyPrice: Price,
}

export type ProductId = 'dekaf' | 'dekaf-desktop';

export type Product = {
  id: ProductId,
  name: string,
  description: ReactElement,
  tiers: Partial<Record<ProductTierId, ProductTier>>
};

export type DekafProductTierId = 'dekaf-free' | 'dekaf-for-teams' | 'dekaf-enterprise';

export type DekafDesktopProductTierId = 'dekaf-desktop-free' | 'dekaf-desktop';

export type ProductTierId = DekafProductTierId | DekafDesktopProductTierId;

export const productTiers: Record<ProductId, Partial<Record<ProductTierId, ProductTier>>> = {
  'dekaf': {
    'dekaf-free': {
      id: 'dekaf-free',
      name: 'Dekaf Free',
      monthlyPrice: { id: 'dekaf-free-monthly', type: 'free', href: '' },
      yearlyPrice: { id: 'dekaf-free-yearly', type: 'free', href: '' },
    },
    'dekaf-for-teams': {
      id: 'dekaf-for-teams',
      name: 'Dekaf for Teams',
      monthlyPrice: {
        id: 'dekaf-for-teams-monthly',
        type: 'fixed',
        value: <><strong>349$</strong> per Pulsar instance per month</>,
        href: ''
      },
      yearlyPrice: {
        id: 'dekaf-for-teams-yearly',
        type: 'fixed',
        value: <div style={{ lineHeight: '1' }}>
          <div>
            <strong>3490$</strong> per year
            <br />
            <strong style={{ fontSize: '0.75rem' }}>per Pulsar instance</strong>
          </div>
          <div style={{ color: '#fff', background: 'var(--color-black)', padding: '0.5rem 1rem', marginTop: '0.5rem', borderRadius: '0.5rem', fontSize: '0.75rem' }}>
            <strong>2480$</strong> during <Beta size='small' />
          </div>
        </div>,
        href: ''
      },
    },
    'dekaf-enterprise': {
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
  },
  'dekaf-desktop': {
    'dekaf-desktop-free': {
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
    'dekaf-desktop': {
      id: 'dekaf-desktop',
      name: 'Dekaf Desktop',
      monthlyPrice: {
        id: 'dekaf-desktop-monthly',
        type: 'fixed-by-buyer-type',
        individual: {
          value: <><strong>16.90$</strong> per month</>,
          href: ''
        },
        organization: {
          value: <><strong>59.90$</strong> per month</>,
          href: ''
        },
      },
      yearlyPrice: {
        id: 'dekaf-desktop-yearly',
        type: 'fixed-by-buyer-type',
        individual: {
          value: (
            <div>
              <strong>169$</strong> per year
              <div style={{ color: '#fff', background: 'var(--color-black)', padding: '0.5rem 1rem', marginTop: '0.5rem', borderRadius: '0.5rem', fontSize: '0.75rem' }}>
                <strong>110$</strong> during <Beta size='small' />
              </div>
            </div>
          ),
          href: ''
        },
        organization: {
          value: (
            <div>
              <strong>599$</strong> per year
              <div style={{ color: '#fff', background: 'var(--color-black)', padding: '0.5rem 1rem', marginTop: '0.5rem', borderRadius: '0.5rem', fontSize: '0.75rem' }}>
                <strong>420$</strong> during <Beta size='small' />
              </div>
            </div>
          ),
          href: ''
        },
      },
    }
  }
} as const;

export const products: Record<ProductId, Product> = {
  'dekaf': {
    id: 'dekaf',
    name: 'Dekaf',
    description: <>Dekaf Product Description</>,
    tiers: productTiers['dekaf']
  },
  'dekaf-desktop': {
    id: 'dekaf-desktop',
    name: 'Dekaf Desktop',
    description: <>Dekaf Desktop Description</>,
    tiers: productTiers['dekaf-desktop']
  }
} as const;

export type PricingPeriod = 'monthly' | 'yearly';

export type BuyerType = 'organization' | 'individual';

const PricingPage: React.FC = () => {
  const [productId, setProductId] = useQueryParam<ProductId>('productId', withDefault(StringParam as any, 'dekaf'), { updateType: 'replaceIn' });
  const [billingPeriod, setBillingPeriod] = useQueryParam<PricingPeriod>('billingPeriod', withDefault(StringParam as any, 'yearly'), { updateType: 'replaceIn' });
  const [buyerType, setBuyerType] = useQueryParam<BuyerType>('buyerType', withDefault(StringParam as any, 'organization'), { updateType: 'replaceIn' });

  return (
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
                      Self-hosted solution for organizations of any size
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
                      Easy to install, ideal for learning Pulsar
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
            value={billingPeriod}
            onChange={setBillingPeriod}
          />
        </div>

        <FeatureTable
          productId={productId}
          features={features}
          pricingPeriod={billingPeriod}
          buyerType={buyerType}
        />
      </div>
    </main>
  );
};

export default () => <Layout><PricingPage /></Layout>;
