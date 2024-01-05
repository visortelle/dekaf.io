import React from 'react';
import FeaturesTable from '../FeaturesTable/FeaturesTable';
import { featuresList } from '../FeaturesTable/FeaturesList';

import style from './FeaturesSection.module.css';

export type FeatureSectionProps = {
  selectedType: string;
};

const FeaturesSection: React.FC<FeatureSectionProps> = ({ selectedType }) => {
  return (
    <section className={style.featuresSection}>
      <FeaturesTable groups={featuresList} selectedType={selectedType} />
    </section>
  );
};

export default FeaturesSection;
