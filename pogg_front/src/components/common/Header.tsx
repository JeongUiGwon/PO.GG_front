'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
  interface HeaderItem {
    href: string;
    name: string;
  }

  const navLinks: HeaderItem[] = [
    { href: '/', name: '홈' },
    { href: '/meta-trends', name: '메타 트랜드' },
    { href: '/game-guide', name: '게임 가이드' },
    { href: '/leaderboards', name: '랭킹' },
    { href: '/tools', name: '배치툴/사기주사위' },
    { href: '/seasons', name: '시즌 10 소개' },
  ];

  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {navLinks.map((link: HeaderItem) => {
            const isActive: boolean = pathname === link.href;

            return (
              <Link
                className={isActive ? styles.navlinkActive : styles.navlink}
                href={link.href}
                key={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
