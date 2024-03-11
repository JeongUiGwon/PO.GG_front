import Image from 'next/image';
import styles from './SeasonInfo.module.css';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export default function SeasonInfo() {
  interface BoxItem {
    mainImageUrl: string;
    titleImageUrl: string;
    title: string;
    description: string;
    championImageUrl: string[];
  }

  const boxItems: BoxItem[] = [
    {
      mainImageUrl: '/synergy/heartsteel/home_heartsteel.png',
      titleImageUrl: '/synergy/heartsteel/icon_heartsteel.webp',
      title: 'Heartsteel',
      description:
        '적을 처치하면 하트를 획득합니다. 플레이어 대상 전투에서 패배하면 더 많이 얻습니다. 매 4번째 플레이어 대상 전투에서 하트가 강력한 보상으로 전환됩니다.',
      championImageUrl: ['/champion/ksante.webp', '/champion/aphelios.webp'],
    },
    {
      mainImageUrl: '/synergy/8bit/home_8bit.png',
      titleImageUrl: '/synergy/8bit/icon_8bit.webp',
      title: '8비트',
      description:
        '아군이 입힌 피해를 기록합니다. 최고 기록을 경신할 때마다 8비트 챔피언의 공격력이 증가합니다.',
      championImageUrl: ['/champion/ksante.webp', '/champion/aphelios.webp'],
    },
    {
      mainImageUrl: '/synergy/superfan/home_superfan.png',
      titleImageUrl: '/synergy/superfan/icon_superfan.webp',
      title: '열혈 팬',
      description:
        '아군이 입힌 피해를 기록합니다. 최고 기록을 경신할 때마다 8비트 챔피언의 공격력이 증가합니다.',
      championImageUrl: ['/champion/ksante.webp', '/champion/aphelios.webp'],
    },
  ];

  function getColorFromUrl(url: string): string {
    let color = '';
    switch (url) {
      case '/champion/ksante.webp':
        color = 'red';
        break;
      case '/champion/aphelios.webp':
        color = 'white';
        break;
      default:
        color = 'black';
    }

    return color;
  }

  return (
    <div className={styles.box}>
      <div className={styles['box-header']}>
        <h2>시즌10 신규 시너지 보상</h2>
      </div>
      <div className={styles['box-content']}>
        {boxItems.map((item: BoxItem, index: number, array: BoxItem[]) => {
          const isLastElement = index === array.length - 1;
          const divStyle = isLastElement ? { borderBottom: 'none' } : {};
          return (
            <div
              className={styles['box-content-item']}
              style={divStyle}
              key={item.mainImageUrl}
            >
              <Image
                src={item.mainImageUrl}
                alt={item.title}
                width="150"
                height="93"
              />
              <div className={styles['box-info']} key={item.title}>
                <div className={styles.title} key={item.title}>
                  <Image
                    src={item.titleImageUrl}
                    alt={item.title}
                    width="24"
                    height="24"
                  />
                  <span>{item.title}</span>
                </div>
                <div className={styles.description} key={item.title}>
                  {item.description}
                </div>
                <div className={styles.champions}>
                  {item.championImageUrl.map((url, index, array) => {
                    const backgroundColor = getColorFromUrl(url);
                    return (
                      <div
                        className={styles.cover}
                        style={{ backgroundColor }}
                        key={url}
                      >
                        <div>
                          <Image src={url} alt={url} width="60" height="60" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <a className={styles.detail} href="/game-guide/s10-synergies">
        <div>시너지별 상세한 보상 보기</div>
        <div className={styles.arrow}>
          <MdOutlineArrowForwardIos width="12px" height="12px" />
        </div>
      </a>
    </div>
  );
}
