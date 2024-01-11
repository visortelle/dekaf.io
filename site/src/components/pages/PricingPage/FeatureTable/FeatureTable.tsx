import React from 'react';

import s from './FeatureTable.module.css';
import { FeatureSet } from '../features';
import { BuyerType, Price, PricingPeriod, ProductId, ProductTier, productTiers } from '../PricingPage';

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
    case "custom": return <span>Custom</span>;
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
    <div className={s.FeatureTable}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
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

      {props.features.map(featureGroup => {
        return (
          <div key={featureGroup.id} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
            <h3>{featureGroup.name}</h3>
            <div>
              {featureGroup.features.map(feature => {
                return (
                  <div key={feature.id}>
                    {currentProductTiers.map(tier => {
                      return (
                        <div key={tier.id}>
                          { }
                        </div>
                      );
                    })}
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
