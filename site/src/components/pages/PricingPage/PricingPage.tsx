import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '../../ui/Heading/Heading';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import Toggle from '../../ui/Toggle/Toggle';

import style from './PricingPage.module.css';

const PricingPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState('regular');

  const handleSelect = (option: string) => {
    setSelectedType(option);
  }

  const regularDescription = "Some cool text about Regular Dekaf. Use it for all sorts of stuff. Always. Because it's cool. Select the tier that fits the most.";
  const desktopDescription = "Some cool text about Dekaf Desktop. Download it to your computer and enjoy. Select the tier that fits the most.";

  return (
    <Layout>
      <main className={style.pricingPage}>
        <Heading level={1}>Pricing</Heading>
        <p className={style.description}>
          {selectedType === 'regular' ? regularDescription : desktopDescription}
        </p>
        <Toggle
          options={[
            { value: 'regular', label: 'Dekaf' },
            { value: 'desktop', label: 'Dekaf Desktop' },
          ]}
          selectedOption={selectedType}
          onSelect={handleSelect}
        />
        <FeaturesSection selectedType={selectedType} />
      </main>
    </Layout>
  );
};

export default PricingPage;
