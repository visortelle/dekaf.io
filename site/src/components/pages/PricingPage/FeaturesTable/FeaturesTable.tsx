import React, { ReactNode } from 'react';
import Button from '@site/src/components/ui/Button/Button';
import FeatureBoolValue from './FeatureBoolValue/FeatureBoolValue';

import style from './FeaturesTable.module.css';

export type ProductTier = 'free' | 'se' | 'ee' | 'df' | 'dp';

export type FeatureSupport =
  | { type: 'boolean'; value: boolean }
  | { type: 'html'; value: ReactNode };

export type Feature = {
  href?: string;
  name: ReactNode;
  tiers: Record<ProductTier, FeatureSupport>;
  description?: ReactNode;
};

export type FeatureGroup = {
  name: ReactNode;
  features: Feature[];
  tiers?: Record<ProductTier, FeatureSupport>;
  isGroupFeature?: boolean;
};

// -----------------------------------------------------------------------------
type FeatureRowProps = {
  feature: Feature;
  isGroupFeature?: Boolean;
  selectedType: string;
};

// -----------------------------------------------------------------------------
const FeatureRow: React.FC<FeatureRowProps> = ({ feature, isGroupFeature, selectedType }) => {
  const { name, tiers, href, description } = feature;

  const regularTiers = { free: tiers.free, se: tiers.se, ee: tiers.ee };
  const desktopTiers = { df: tiers.df, dp: tiers.dp };
  const currentTiers = selectedType === 'regular' ? regularTiers : desktopTiers;

  return (
    <div className={style.tableRow}>
      <div className={isGroupFeature ? `${style.cellName} ${style.cellNameBig}` : style.cellName}>
        <p>{name}</p>
      </div>

      {Object.keys(currentTiers).map((tier) => {
        return (
          <div className={selectedType === 'desktop' ? `${style.cellValue} ${style.cellValueWide}` : style.cellValue}>
            {tiers[tier].type === 'html' ? (
              tiers[tier].value
            ) : (
              <FeatureBoolValue value={tiers[tier].value} />
            )}
          </div>
        );
      })}
    </div>
  );
};

// -----------------------------------------------------------------------------
export type FeatureTableProps = {
  groups: FeatureGroup[];
  selectedType: string;
};

const FeaturesTable: React.FC<FeatureTableProps> = ({ groups, selectedType }) => {

  const plans = [
    { name: "Free", tiers: ["free", "se", "ee"], action: { label: "Get started", href: "" } },
    { name: "For Teams", tiers: ["free", "se", "ee"], action: { label: "Get started", href: "" } },
    { name: "Enterprise", tiers: ["free", "se", "ee"], action: { label: "Contact us", href: "" } },
    { name: "Desktop Free", tiers: ["df", "dp"], action: { label: "Get started", href: "" } },
    { name: "Desktop", tiers: ["df", "dp"], action: { label: "Get started", href: "" } },
  ];
  const currentPlans = selectedType === 'regular' ? plans.slice(0, 3) : plans.slice(3, 5);

  return (
    <div className={style.featureTableContainer}>
      <div className={style.tableHeader}>
        <div className={style.headerPadCell} />

        {currentPlans.map((plan) => (
          <div className={selectedType === 'desktop' ? `${style.headerCell} ${style.headerCellWide}` : style.headerCell}>
            <span>{plan.name}</span>
            <Button size="small" title={plan.action.label} />
          </div>
        ))}
      </div>

      {groups.map((group) => {
        return (
          <div className={style.groupContainer}>
            <div className={style.groupNameRow}>
              {group.name}
            </div>

            {group.features.map((feature) => (
              <FeatureRow
                feature={feature}
                isGroupFeature={group.isGroupFeature}
                selectedType={selectedType}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesTable;
