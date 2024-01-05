import React from 'react';
import Link from '@site/src/components/ui/Link/Link';
import style from './FeatureBlock.module.css';

type Feature = {
  title: string;
  description: string;
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
    <section className={feature.direction === "right" ? `${style.featureBlock} ${style.featureBlockRtl}` : style.featureBlock}>
      <div className={style.imageContainer}>
        <img src={feature.image} alt="Feature image" />
      </div>
      <div className={style.featureInfo}>
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>
        {feature.list && (
          <ul className={style.list}>
            {feature.list.map((item) => (
              <li key={item}>
                ☀︎ <p>{item}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default FeatureBlock;