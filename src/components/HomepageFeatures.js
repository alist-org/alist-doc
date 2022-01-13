import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Alist was designed from the ground up to be easily installed and
        it can be used on all platforms.
      </>
    ),
  },
  {
    title: 'Support multiple storage',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Alist supports multiple storage providers, including local storage,
        Aliyundrive, Onedrive, Google Drive, and more.
      </>
    ),
  },
  {
    title: 'Support WebDav',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Alist supports all storage WebDav, which is a standard for accessing files on.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
