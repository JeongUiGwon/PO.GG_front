import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  interface SNS {
    href: string;
    src: string;
    alt: string;
  }

  const snsList: SNS[] = [
    {
      href: 'https://www.instagram.com/opgg_official',
      src: '/sns/icon-logo-instagram.webp',
      alt: 'instagram',
    },
    {
      href: 'https://www.youtube.com/@opgg_official',
      src: '/sns/icon-logo-youtube.webp',
      alt: 'youtube',
    },
    {
      href: 'https://twitter.com/opgg_official',
      src: '/sns/icon-logo-x.webp',
      alt: 'x',
    },
    {
      href: 'https://www.facebook.com/opgg.official',
      src: '/sns/icon-logo-facebook.webp',
      alt: 'facebook',
    },
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles['copyright-box']}>
        <p className={styles.copyright}>
          © 2024 PO.GG. PO.GG is not endorsed by Riot Games and does not reflect
          the views or opinions of Riot Games or anyone officially involved in
          producing or managing Team Fight Tactics. Team Fight Tactics and Riot
          Games are trademarks or registered trademarks of Riot Games, Inc. Team
          Fight Tactics © Riot Games, Inc.
        </p>
        <ul className={styles.sns}>
          {snsList.map((item) => (
            <li key={item.alt}>
              <a href={item.href}>
                <Image src={item.src} width="24" height="24" alt={item.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
