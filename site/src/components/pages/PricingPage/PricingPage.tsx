import React, { ReactElement } from 'react';
import Layout from '@site/src/components/ui/Layout/Layout';
import Heading from '../../ui/Heading/Heading';
import Toggle from '../../ui/Toggle/Toggle';
import { useQueryParam, withDefault, StringParam } from 'use-query-params';

import s from './PricingPage.module.css';
import FeatureTable from './FeatureTable/FeatureTable';
import { features } from './features';
import { billingPortalHref } from '../../links';

export type Price = { id: string, isComingSoon?: boolean } & ({
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
} | {
  type: 'none'
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

export type DekafProductTierId =
// 'dekaf-free'
| 'dekaf-for-teams'
| 'dekaf-enterprise';

export type DekafDesktopProductTierId = 'dekaf-desktop-free' | 'dekaf-desktop';

export type ProductTierId = DekafProductTierId | DekafDesktopProductTierId;

// const discount = (
//   <div style={{ color: '#fff', background: 'var(--color-black)', padding: '0.5rem 1rem', marginTop: '0.5rem', borderRadius: '0.5rem', fontSize: '0.75rem', lineHeight: '1.2' }}>
//     <strong>Get 32% discount</strong> using the coupon <strong>DEKAFBETA32</strong>
//     <br />
//     Valid until March 1, 2024.
//   </div>
// );

const salesEmail = `mailto:sales@teal.tools?subject=${encodeURIComponent('[Dekaf Enterprise] Request Quote')}&body=${encodeURIComponent('Your Name:\nJob Title:\nCompany:\n\n----------\n\n<describe your use case here>')}`;

export const productTiers: Record<ProductId, Partial<Record<ProductTierId, ProductTier>>> = {
  'dekaf': {
    // 'dekaf-free': {
    //   id: 'dekaf-free',
    //   name: 'Dekaf Free',
    //   monthlyPrice: { id: 'dekaf-free-monthly', type: 'free', href: '' },
    //   yearlyPrice: { id: 'dekaf-free-yearly', type: 'free', href: '' },
    // },
    'dekaf-for-teams': {
      id: 'dekaf-for-teams',
      name: 'Dekaf',
      monthlyPrice: {
        id: 'dekaf-for-teams-monthly',
        type: 'fixed',
        value: <div style={{ lineHeight: '1' }}>
          <div>
            <strong>$119</strong> per month
            <br />
            <strong style={{ fontSize: '0.75rem' }}>per Pulsar instance</strong>
          </div>
          {/* {discount} */}
        </div>,
        href: 'https://buy.stripe.com/7sI3fV3yt6L77GUcMW',
      },
      yearlyPrice: {
        id: 'dekaf-for-teams-yearly',
        type: 'fixed',
        value: <div style={{ lineHeight: '1' }}>
          <div>
            <strong>$990</strong> per year
            <br />
            <strong style={{ fontSize: '0.75rem' }}>per Pulsar instance</strong>
          </div>
          {/* {discount} */}
        </div>,
        href: 'https://buy.stripe.com/4gwdUz3yt7Pbd1e4gp',
      },
    },
    'dekaf-enterprise': {
      id: 'dekaf-enterprise',
      name: 'Dekaf Enterprise',
      monthlyPrice: {
        id: 'dekaf-enterprise-monthly',
        type: 'custom',
        href: salesEmail,
      },
      yearlyPrice: {
        id: 'dekaf-enterprise-yearly',
        type: 'custom',
        href: salesEmail,
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
          value: <><strong>$24.90</strong> per month</>,
          href: 'https://buy.stripe.com/14k2bR0mh8TfaT6cMU'
        },
        organization: {
          value: <><strong>$59.90</strong> per month</>,
          href: 'https://buy.stripe.com/00gg2H5GB9Xj4uIcMP'
        },
      },
      yearlyPrice: {
        id: 'dekaf-desktop-yearly',
        type: 'fixed-by-buyer-type',
        individual: {
          value: (
            <div>
              <strong>$249</strong> per year
              {/* {discount} */}
            </div>
          ),
          href: 'https://buy.stripe.com/6oE03J8SN2uRd1efZ5'
        },
        organization: {
          value: (
            <div>
              <strong>$599</strong> per year
              {/* {discount} */}
            </div>
          ),
          href: 'https://buy.stripe.com/4gw6s7fhb4CZgdqdQS'
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
  const [billingPeriod, setBillingPeriod] = useQueryParam<PricingPeriod>('billingPeriod', withDefault(StringParam as any, 'monthly'), { updateType: 'replaceIn' });
  const [buyerType, setBuyerType] = useQueryParam<BuyerType>('buyerType', withDefault(StringParam as any, 'organization'), { updateType: 'replaceIn' });

  return (
    <main className={s.PricingPage}>
      <div className={s.Content}>
        <Heading level={2}>Features and Pricing</Heading>
        <p>
          <strong>Visit the <a target='_blank' href={billingPortalHref}>Billing Portal</a> to manage your existing subscription.</strong>
        </p>
        <div className={s.ProductSelectionControls}>
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
              { value: 'monthly', label: <>Monthly billing</> },
              { value: 'yearly', label: <>Yearly billing&nbsp;&nbsp;<span style={{ opacity: '0.6' }}>save 2 months</span></> },
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
