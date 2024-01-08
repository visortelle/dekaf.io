import React from 'react';
import s from './FeatureBlock.module.css';

export type Feature = {
  title: string;
  description?: string;
  list?: string[];
  image: string;
  href: string;
  direction: string;
}

type FeatureBlockProps = {
  feature: Feature;
};

const FeatureBlock: React.FC<FeatureBlockProps> = (props) => {
  const { feature } = props;
  return (
    <section className={`${s.FeatureBlock} ${feature.direction === "right" ? s.FeatureBlockRtl : ''}`}>
      <div className={s.ImageContainer}>
        <img className={s.Image} src={feature.image} alt="Feature image" />
      </div>
      <div className={s.FeatureInfo}>
        <h3 className={s.FeatureTitle}>{feature.title}</h3>
        {feature.description && <p>{feature.description}</p>}
        {feature.list && (
          <ul className={s.List}>
            {feature.list.map((item) => (
              <li key={item} className={s.ListItem}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default FeatureBlock;