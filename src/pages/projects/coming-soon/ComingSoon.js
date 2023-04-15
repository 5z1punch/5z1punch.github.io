import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import comingSoon from 'assets/coming-soon.mp4';

import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { ProjectContainer, ProjectHeader } from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Slice.module.css';

const title = 'Coming Soon...';
const description = '我必须立刻融合！';

export const ComingSoon = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectHeader title={title} description={description} />
        <Section className="notop">
          <Image
            raised
            className={styles.video}
            srcSet={[{ src: comingSoon, width: 540 }]}
            placeholder={videoSprMotionPlaceholder}
            alt="Cat & Turtle"
            sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
          />
        </Section>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
