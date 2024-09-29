import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  img? : string
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Basis viden',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    img : 'img/basisviden.png',
    description: (
      <>
        Få styr på de grundlæggende IT-begreber og teknologier, der er vigtige for din digitale hverdag.
      </>
    ),
  },
  {
    title: 'Situationer',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    img : 'img/situationer.png',
    description: (
      <>
       Find hjælp og vejledning til specifikke situationer som skilsmisse, jobskifte eller skift af teknologi.
      </>
    ),
  },
  {
    title: 'Lær mere',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    img : 'img/laermere.png',
    description: (
      <>
        Dyk dybere ned i avancerede emner og udvid din viden om IT og digitale værktøjer.
      </>
    ),
  },
];

function Feature({title,img, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {img && <img style={{borderRadius:"50%",height:"240px",width:"240px"}} alt={title} src={img} />}
        {!img && <Svg className={styles.featureSvg} role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
