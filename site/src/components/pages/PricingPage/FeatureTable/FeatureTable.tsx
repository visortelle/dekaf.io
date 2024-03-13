import React from 'react';

import s from './FeatureTable.module.css';
import { FeatureSet } from '../features';
import { BuyerType, Price, PricingPeriod, ProductId, ProductTier, ProductTierId, productTiers } from '../PricingPage';
import Button from '@site/src/components/ui/Button/Button';

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
    case "none": return <></>;
    default: throw new Error('Unknown price');
  }
}

export function renderPriceHref(price: Price, buyerType: BuyerType): React.ReactElement {
  let href: string | undefined = '';
  switch (price.type) {
    case 'free': href = price.href; break;
    case 'fixed': href = price.href; break;
    case 'custom': href = price.href; break;
    case 'fixed-by-buyer-type': href = buyerType === 'individual' ? price.individual.href : price.organization.href; break;
  }

  switch (price.type) {
    case "free": return <Button type="regular" text="Get Free" href={href} target='_blank' />;
    case "fixed": return <Button type="primary" text="Buy Now" href={href} target='_blank' />;
    case "fixed-by-buyer-type": return <Button type="primary" text="Buy Now" href={href} target='_blank' />;
    case "custom": return <Button type="primary" text="Request Quote" href={href} target='_blank' />;
    case "none": return <></>;
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
      <div className={s.Row}>
        <div>

        </div>

        {currentProductTiers.map(tier => {
          return (
            <div key={tier.id}>
              <h3 style={{ marginBottom: '0.5rem' }}>{tier.name}</h3>
            </div>
          );
        })}
      </div>

      <div className={s.Row} style={{ gap: '1rem' }}>
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
              {formatPrice(price, props.buyerType)}
            </div>
          );
        })}
      </div>

      <div className={s.Row} style={{ marginTop: '1rem', gap: '1rem' }}>
        <div>

        </div>
        {currentProductTiers.map(tier => {
          let price: Price;
          switch (props.pricingPeriod) {
            case 'monthly': price = tier.monthlyPrice; break;
            case 'yearly': price = tier.yearlyPrice; break;
          }

          return (
            <div key={tier.id} style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
              {!price.isComingSoon && renderPriceHref(price, props.buyerType)}
              {price.isComingSoon && <strong style={{ opacity: '0.5' }}>Coming later this year</strong>}
            </div>
          );
        })}
      </div>

      {props.features.map(featureGroup => {
        return (
          <div key={featureGroup.id} style={{ marginBottom: '3rem' }} className={s.FeatureGroup}>
            <div className={`${s.Row} ${s.FeatureGroupName}`} style={{ textAlign: 'left' }}>
              <h3 style={{ marginBottom: '0' }}>{featureGroup.name}</h3>
            </div>

            <div>
              {featureGroup.features.map(feature => {
                return (
                  <div key={feature.id} className={s.FeatureRow}>

                    <div
                      className={`${s.Row}`}
                      style={{
                        borderBottom: '1px solid var(--border-color)',
                        padding: '0.5rem 0',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          textAlign: 'left'
                        }}
                      >
                        {feature.name}
                        &nbsp;&nbsp;{feature.isPlanned && <div className={s.PlannedFeatureBadge}>In development</div>}
                      </div>

                      {currentProductTiers.map(tier => {
                        const availability = feature.availableAt[tier.id as ProductTierId]
                        return (
                          <div key={tier.id} className={s.FeatureCell}>
                            {availability === undefined ? (
                              <div style={{ color: 'var(--color-red)' }}>
                                ⏺
                              </div>
                            ) : (
                              <>
                                {!availability.extraLabel ? (
                                  <div style={{ color: 'var(--color-green)' }}>
                                    ⏺
                                  </div>
                                ) : (
                                  <div style={{ fontSize: '0.75rem' }}>{availability.extraLabel}</div>
                                )}
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
    </div >
  );
};

export default FeaturesTable;
