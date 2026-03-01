import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({id: 'homepage.feature.easySetup.title', message: 'Easy Setup'}),
    icon: '\u26A1',
    description: translate({
      id: 'homepage.feature.easySetup.description',
      message: 'Install from the Shopware Store and start converting abandoned carts in minutes. No coding required.',
    }),
    link: '/docs/installation/installation',
  },
  {
    title: translate({id: 'homepage.feature.adminFeatures.title', message: 'Admin Features'}),
    icon: '\uD83C\uDFA8',
    description: translate({
      id: 'homepage.feature.adminFeatures.description',
      message: 'Design popups with a drag-and-drop editor, configure discounts, and track performance with built-in analytics.',
    }),
    link: '/docs/admin/overview',
  },
  {
    title: translate({id: 'homepage.feature.storefrontExperience.title', message: 'Storefront Experience'}),
    icon: '\uD83D\uDED2',
    description: translate({
      id: 'homepage.feature.storefrontExperience.description',
      message: 'Smart exit-intent detection, countdown timers, and one-click coupon application for your customers.',
    }),
    link: '/docs/storefront/overview',
  },
];

function Feature({title, icon, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--outline button--primary button--sm" to={link}>
          <Translate id="homepage.feature.learnMore">Learn more</Translate>
        </Link>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            <Translate id="homepage.hero.getStarted">Get Started</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({id: 'homepage.layout.title', message: 'Documentation'})}
      description={translate({
        id: 'homepage.layout.description',
        message: 'Last Second Coupon documentation — recover abandoned carts with time-limited popup coupons for Shopware 6',
      })}>
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
