import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.5 12V14.6667C18.5 16.84 18.5 17.9267 18.1689 18.7918C17.6627 20.1148 16.6207 21.1601 15.3019 21.6679C14.4395 22 13.3562 22 11.1896 22C10.0534 22 9.4853 22 8.95658 21.8834C8.14995 21.7056 7.40001 21.3294 6.77419 20.7888C6.36398 20.4344 6.02311 19.9785 5.34137 19.0667L2.33738 15.0487C1.8758 14.4314 1.88907 13.5789 2.36965 12.9763C2.99772 12.1888 4.16877 12.1237 4.8797 12.8369L6.5 14.4623V4.5C6.5 3.67157 7.17157 3 8 3C8.82843 3 9.5 3.67157 9.5 4.5V8M9.5 8H10.5C11.6046 8 12.5 8.89543 12.5 10M9.5 8V11M12.5 10V11M12.5 10V9H13.5C14.6046 9 15.5 9.89543 15.5 11M15.5 11V12M15.5 11V10L16.8288 10.2215C17.7932 10.3822 18.5 11.2166 18.5 12.1943V13',
  d2: 'M19.5 8L19.5 2M19.5 8C18.7998 8 17.4915 6.0057 17 5.5M19.5 8C20.2002 8 21.5085 6.0057 22 5.5',
  d3: 'M5.34137 19.0667L2.33738 15.0487C1.8758 14.4314 1.88907 13.5789 2.36965 12.9763C2.99772 12.1888 4.16877 12.1237 4.8797 12.8369L6.5 14.4623V4.5C6.5 3.67157 7.17157 3 8 3C8.82843 3 9.5 3.67157 9.5 4.5V8.5L10.0777 8.21115C10.3554 8.07229 10.666 7.98266 10.9679 8.05504C11.8468 8.26572 12.5 9.05657 12.5 10C12.5 9.44772 12.9477 9 13.5 9C14.6046 9 15.5 9.89543 15.5 11C15.5 10.4765 15.97 10.0783 16.4864 10.1644L16.8288 10.2215C17.7932 10.3822 18.5 11.2166 18.5 12.1943V14.6667C18.5 16.84 18.5 17.9267 18.1689 18.7918C17.6627 20.1148 16.6207 21.1601 15.3019 21.6679C14.4395 22 13.3562 22 11.1896 22C10.0534 22 9.4853 22 8.95658 21.8834C8.14995 21.7056 7.40001 21.3294 6.77419 20.7888C6.36398 20.4344 6.02311 19.9785 5.34137 19.0667Z',
  d4: 'M9.89079 11.2363C10.1275 11.2363 10.3194 11.0477 10.3194 10.815V7.765C10.3194 7.61034 10.3194 7.53302 10.3787 7.45328C10.4381 7.37354 10.4934 7.35698 10.6041 7.32385C10.7566 7.2782 10.9114 7.25619 10.9975 7.24998C11.6385 7.24998 12.2283 7.46931 12.696 7.83703C12.7856 7.90755 12.8305 7.94282 12.8606 8.00489C12.8908 8.06697 12.8908 8.13237 12.8908 8.26317V10.815C12.8908 11.0477 13.0827 11.2363 13.3194 11.2363C13.5561 11.2363 13.7479 11.0477 13.7479 10.815V8.84998C13.7479 8.5604 13.7479 8.41561 13.8482 8.32614C13.9485 8.23668 14.0813 8.25187 14.3469 8.28226C15.2072 8.38068 15.7671 8.69699 16.1783 9.13252L16.1783 9.13252C16.2441 9.20215 16.2769 9.23697 16.2981 9.29034C16.3194 9.34371 16.3194 9.39821 16.3194 9.50719V11.9383C16.3194 12.1709 16.5112 12.3595 16.7479 12.3595C16.9846 12.3595 17.1765 12.1709 17.1765 11.9383V10.0361C17.1765 9.74406 17.1765 9.59802 17.2885 9.50795C17.4004 9.41789 17.5244 9.44508 17.7723 9.49946C18.9699 9.76221 19.7475 10.8088 19.7475 12V14.6927V14.6927C19.7475 15.7574 19.7475 16.5921 19.7046 17.2674C19.661 17.9542 19.5708 18.5269 19.3669 19.0599C18.7849 20.5808 17.5866 21.7834 16.0689 22.3678C15.5369 22.5726 14.9652 22.6631 14.2801 22.7069C13.6067 22.75 12.7744 22.75 11.7132 22.75C10.666 22.7501 9.90193 22.7502 9.29257 22.6158C8.3642 22.4111 7.5013 21.9782 6.78138 21.3563C6.30889 20.9482 5.92238 20.4311 5.29399 19.5904L2.0259 15.0806C1.96927 15.0022 1.92132 14.9197 1.88203 14.8344C1.80456 14.6106 1.76059 14.3782 1.75 14.1447C1.76603 13.8434 1.87523 13.5462 2.07689 13.2976C2.63519 12.6096 3.67526 12.553 4.30692 13.1757L6.1587 15.0015C6.28116 15.1223 6.4656 15.1586 6.62591 15.0934C6.78623 15.0283 6.89079 14.8746 6.89079 14.7041V3.53571C6.89079 2.82563 7.46642 2.25 8.1765 2.25C8.88658 2.25 9.46222 2.82563 9.46222 3.53571V10.815C9.46222 11.0477 9.65409 11.2363 9.89079 11.2363Z',
  d5: 'M17.9941 2.24996C17.9941 1.69768 18.4419 1.24996 18.9941 1.24996C19.5464 1.24996 19.9941 1.69768 19.9941 2.24996L19.9941 4.75L20.5884 4.74998C20.764 4.74986 20.9797 4.7497 21.1561 4.77177L21.1595 4.77219C21.2859 4.78796 21.862 4.85979 22.1363 5.42539C22.4113 5.99221 22.1093 6.49235 22.044 6.60056L21.7049 7.06905C21.4103 7.44487 21.0046 7.95933 20.6241 8.35034C20.4343 8.54545 20.217 8.74668 19.9861 8.90553C19.7809 9.04674 19.4307 9.25 19 9.25C18.5693 9.25 18.2191 9.04674 18.0139 8.90553C17.783 8.74668 17.5657 8.54545 17.3759 8.35034C16.9954 7.95933 16.5898 7.44488 16.2951 7.06905L15.956 6.60056C15.8907 6.49235 15.5887 5.99221 15.8637 5.42539C16.138 4.85979 16.7141 4.78796 16.8405 4.77219L16.8439 4.77177C17.0203 4.7497 17.236 4.74986 17.4116 4.74998L17.9941 4.75L17.9941 2.24996Z',
  d6: 'M13.8182 12.4211V10.5C13.8182 10.3247 13.7881 10.1564 13.7328 10M16.9091 12.9737V11.5C16.9091 11.3247 16.879 11.1564 16.8237 11M10.7273 9V11.4211M10.7273 9H12.3182C12.9713 9 13.5269 9.4174 13.7328 10M10.7273 9V3.57895C10.7273 2.70692 10.0353 2 9.18182 2C8.32829 2 7.63636 2.70692 7.63636 3.57895V14.0655L5.96696 12.3546C5.23449 11.6039 4.02795 11.6724 3.38085 12.5014C2.88571 13.1357 2.87204 14.033 3.3476 14.6829L7.63636 22H17C18.6569 22 20 20.6569 20 19V12.5C20 11.6716 19.3284 11 18.5 11H16.8237M13.7328 10H15.4091C16.0622 10 16.6178 10.4174 16.8237 11',
  d7: 'M18.5 2L18.5 7.17621M16 5.5L18.5 8L21 5.5',
  d8: 'M18.0296 11.2759L18.0364 13.0847H17.2419V11.443C17.2419 11.2926 17.2157 11.149 17.1677 11.0159C16.9884 10.5178 16.5044 10.1619 15.9367 10.1619H14.5215L14.5283 12.469H13.7338V10.329C13.7338 10.1786 13.7076 10.035 13.6597 9.90195C13.4803 9.40385 12.9963 9.04793 12.4286 9.04793H11.0202V11.3551H10.2257L10.2257 2.69162C10.2257 1.89543 9.5803 1.25 8.78412 1.25C7.98794 1.25 7.3425 1.89543 7.3425 2.69162L7.3425 15.2589L4.93585 12.6673C4.27342 12.001 3.1853 12.0602 2.59815 12.7985C2.14562 13.3675 2.13291 14.1751 2.56785 14.7585L2.57978 14.7745L7.3425 22.75H17.7423C19.4034 22.75 20.75 21.4283 20.75 19.7979V12.557C20.75 11.8495 20.1656 11.2759 19.4448 11.2759H18.0296Z',
  d9: 'M19.543 2.25L19.543 5.83579L20.3359 5.04289L21.7502 6.45711L18.543 9.66421L15.3359 6.45711L16.7502 5.04289L17.543 5.83579L17.543 2.25H19.543Z',
} as const;

export const IconSwipeDown07StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-07-stroke-rounded IconSwipeDown07StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeDown07DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-07-duotone-rounded IconSwipeDown07DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeDown07TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-07-twotone-rounded IconSwipeDown07TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeDown07SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-07-solid-rounded IconSwipeDown07SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeDown07BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-07-bulk-rounded IconSwipeDown07BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeDown07StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-07-stroke-sharp IconSwipeDown07StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeDown07SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-07-solid-sharp IconSwipeDown07SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSwipeDown07: TheIconSelfPack = {
  name: 'SwipeDown07',
  StrokeRounded: IconSwipeDown07StrokeRounded,
  DuotoneRounded: IconSwipeDown07DuotoneRounded,
  TwotoneRounded: IconSwipeDown07TwotoneRounded,
  SolidRounded: IconSwipeDown07SolidRounded,
  BulkRounded: IconSwipeDown07BulkRounded,
  StrokeSharp: IconSwipeDown07StrokeSharp,
  SolidSharp: IconSwipeDown07SolidSharp,
};