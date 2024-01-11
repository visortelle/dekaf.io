import React from 'react';

import s from './FeatureTable.module.css';
import { FeatureSet } from '../features';
import { BuyerType, Price, PricingPeriod, ProductId, ProductTier, ProductTierId, productTiers } from '../PricingPage';

export type FeatureTableProps = {
  productId: ProductId,
  features: FeatureSet,
  pricingPeriod: PricingPeriod,
  buyerType: BuyerType
};

export function formatPrice(price: Price, buyerType: BuyerType): React.ReactElement {
  switch (price.type) {
    case "free": return <span>Free</span>;
    case "fixed": return <span>{price.value}</span>;
    case "fixed-by-buyer-type": {
      if (buyerType === 'individual') {
        return <span>{price.individual.value}</span>
      } else if (buyerType === 'organization') {
        return <span>{price.organization.value}</span>
      }
    };
    case "custom": return <span>Custom Pricing</span>;
    default: throw new Error('Unknown price');
  }
}

export function renderPriceHref(price: Price, buyerType: BuyerType): React.ReactElement {
  const labels = {
    'free': <span>Get Free</span>,
    'fixed': <span>Buy Now</span>,
    'custom': <span>Request Quote</span>
  };

  switch (price.type) {
    case "free": return <a href={price.href}>{labels.free}</a>;
    case "fixed": return <a href={price.href}>{labels.fixed}</a>;
    case "fixed-by-buyer-type": {
      if (buyerType === 'individual') {
        return <a href={price.individual.href}>{labels.fixed}</a>
      } else if (buyerType === 'organization') {
        return <a href={price.organization.href}>{labels.fixed}</a>
      }
      throw new Error('Unknown buyer type');
    };
    case "custom": return <a href={price.href}>{labels.custom}</a>
    default: throw new Error('Unknown price');
  }
}

const FeaturesTable: React.FC<FeatureTableProps> = (props) => {
  let currentProductTiers: ProductTier[] = [];

  switch (props.productId) {
    case 'dekaf': {
      currentProductTiers = [
        productTiers['dekaf']['dekaf-free']!,
        productTiers['dekaf']['dekaf-for-teams']!,
        productTiers['dekaf']['dekaf-enterprise']!
      ]
    }; break;
    case 'dekaf-desktop': {
      currentProductTiers = [
        productTiers['dekaf-desktop']['dekaf-desktop-free']!,
        productTiers['dekaf-desktop']['dekaf-desktop']!
      ]
    }; break;
  }

  return (
    <div className={s.FeatureTable} style={{ textAlign: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr' }}>
        <div>

        </div>

        {currentProductTiers.map(tier => {
          return (
            <div key={tier.id}>
              <strong>{tier.name}</strong>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr' }}>
        <div>

        </div>
        {currentProductTiers.map(tier => {
          let price: Price;
          switch (props.pricingPeriod) {
            case 'monthly': price = tier.monthlyPrice; break;
            case 'yearly': price = tier.yearlyPrice; break;
          }

          return (
            <div key={tier.id}>
              <strong>{formatPrice(price, props.buyerType)}</strong>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr' }}>
        <div>

        </div>
        {currentProductTiers.map(tier => {
          let price: Price;
          switch (props.pricingPeriod) {
            case 'monthly': price = tier.monthlyPrice; break;
            case 'yearly': price = tier.yearlyPrice; break;
          }

          return (
            <div key={tier.id}>
              <strong>{renderPriceHref(price, props.buyerType)}</strong>
            </div>
          );
        })}
      </div>

      {props.features.map(featureGroup => {
        return (
          <div key={featureGroup.id}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', textAlign: 'left', marginBottom: '1rem' }}>
              <h3 style={{ marginBottom: '0' }}>{featureGroup.name}</h3>
            </div>
            <div>
              {featureGroup.features.map(feature => {
                return (
                  <div key={feature.id}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr' }}>
                      <div style={{ textAlign: 'left' }}>{feature.name}</div>
                      {currentProductTiers.map(tier => {
                        const availability = feature.availableAt[tier.id as ProductTierId]
                        return (
                          <div key={tier.id}>
                            {availability === undefined ? (
                              <div style={{ color: 'var(--color-red)' }}>
                                ⏺
                              </div>
                            ) : (
                              <>
                                <div style={{ color: 'var(--color-green)' }}>
                                  ⏺
                                </div>
                                <div style={{ fontSize: '0.75rem' }}>{availability.extraLabel}</div>
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesTable;
