import Image from 'next/image';
import styles from './description.module.sass';

export const Description = () => {
  return (
    <section className={styles.description}>
      <div className={styles.description__imageContainer}>
        <Image 
          src="/images/description.jpeg" 
          alt="Products Marketplace"
          fill
        />
      </div>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  );
};