import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.5 12V14.6667C19.5 16.84 19.5 17.9267 19.1689 18.7918C18.6627 20.1148 17.6207 21.1601 16.3019 21.6679C15.4395 22 14.3562 22 12.1896 22C11.0534 22 10.4853 22 9.95658 21.8834C9.14995 21.7056 8.40001 21.3294 7.77419 20.7888C7.36398 20.4344 7.02311 19.9785 6.34137 19.0667L3.33738 15.0487C2.8758 14.4314 2.88907 13.5789 3.36965 12.9763C3.99772 12.1888 5.16877 12.1237 5.8797 12.8369L7.5 14.4623V4.5C7.5 3.67157 8.17157 3 9 3C9.82843 3 10.5 3.67157 10.5 4.5V8M10.5 8H11.5C12.6046 8 13.5 8.89543 13.5 10M10.5 8V11M13.5 10V11M13.5 10V9H14.5C15.6046 9 16.5 9.89543 16.5 11M16.5 11V12M16.5 11V10L17.8288 10.2215C18.7932 10.3822 19.5 11.2166 19.5 12.1943V13',
  d2: 'M15 4.5L21 4.5M15 4.5C15 3.79977 16.9943 2.49153 17.5 2M15 4.5C15 5.20023 16.9943 6.50847 17.5 7',
  d3: 'M6.34137 19.0667L3.33738 15.0487C2.8758 14.4314 2.88907 13.5789 3.36965 12.9763C3.99772 12.1888 5.16877 12.1237 5.8797 12.8369L7.5 14.4623V4.5C7.5 3.67157 8.17157 3 9 3C9.82843 3 10.5 3.67157 10.5 4.5V8.5L11.0777 8.21115C11.3554 8.07229 11.666 7.98266 11.9679 8.05504C12.8468 8.26572 13.5 9.05657 13.5 10C13.5 9.44772 13.9477 9 14.5 9C15.6046 9 16.5 9.89543 16.5 11C16.5 10.4765 16.97 10.0783 17.4864 10.1644L17.8288 10.2215C18.7932 10.3822 19.5 11.2166 19.5 12.1943V14.6667C19.5 16.84 19.5 17.9267 19.1689 18.7918C18.6627 20.1148 17.6207 21.1601 16.3019 21.6679C15.4395 22 14.3562 22 12.1896 22C11.0534 22 10.4853 22 9.95658 21.8834C9.14995 21.7056 8.40001 21.3294 7.77419 20.7888C7.36398 20.4344 7.02311 19.9785 6.34137 19.0667Z',
  d4: 'M10.3908 11.2363C10.6275 11.2363 10.8194 11.0477 10.8194 10.815V7.765C10.8194 7.61034 10.8194 7.53302 10.8787 7.45328C10.9381 7.37354 10.9934 7.35698 11.1041 7.32385C11.2566 7.2782 11.4114 7.25619 11.4975 7.24998C12.1385 7.24998 12.7283 7.46931 13.196 7.83703C13.2856 7.90755 13.3305 7.94282 13.3606 8.00489C13.3908 8.06697 13.3908 8.13237 13.3908 8.26317V10.815C13.3908 11.0477 13.5827 11.2363 13.8194 11.2363C14.0561 11.2363 14.2479 11.0477 14.2479 10.815V8.84998C14.2479 8.5604 14.2479 8.41561 14.3482 8.32614C14.4485 8.23668 14.5813 8.25187 14.8469 8.28226C15.7072 8.38068 16.2671 8.69699 16.6783 9.13252L16.6783 9.13252C16.7441 9.20215 16.7769 9.23697 16.7981 9.29034C16.8194 9.34371 16.8194 9.39821 16.8194 9.50719V11.9383C16.8194 12.1709 17.0112 12.3595 17.2479 12.3595C17.4846 12.3595 17.6765 12.1709 17.6765 11.9383V10.0361C17.6765 9.74406 17.6765 9.59802 17.7885 9.50795C17.9004 9.41789 18.0244 9.44508 18.2723 9.49946C19.4699 9.76221 20.2475 10.8088 20.2475 12V14.6927V14.6927C20.2475 15.7574 20.2475 16.5921 20.2046 17.2674C20.161 17.9542 20.0708 18.5269 19.8669 19.0599C19.2849 20.5808 18.0866 21.7834 16.5689 22.3678C16.0369 22.5726 15.4652 22.6631 14.7801 22.7069C14.1067 22.75 13.2744 22.75 12.2132 22.75C11.166 22.7501 10.4019 22.7502 9.79257 22.6158C8.8642 22.4111 8.0013 21.9782 7.28138 21.3563C6.80889 20.9482 6.42238 20.4311 5.79399 19.5904L2.5259 15.0806C2.46927 15.0022 2.42132 14.9197 2.38203 14.8344C2.30456 14.6106 2.26059 14.3782 2.25 14.1447C2.26603 13.8434 2.37523 13.5462 2.57689 13.2976C3.13519 12.6096 4.17526 12.553 4.80692 13.1757L6.6587 15.0015C6.78116 15.1223 6.9656 15.1586 7.12591 15.0934C7.28623 15.0283 7.39079 14.8746 7.39079 14.7041V3.53571C7.39079 2.82563 7.96642 2.25 8.6765 2.25C9.38658 2.25 9.96222 2.82563 9.96222 3.53571V10.815C9.96222 11.0477 10.1541 11.2363 10.3908 11.2363Z',
  d5: 'M20.7481 3.49414C21.3004 3.49414 21.7481 3.94186 21.7481 4.49414C21.7481 5.04643 21.3004 5.49414 20.7481 5.49414L18.248 5.49414L18.2481 6.0884C18.2482 6.26404 18.2483 6.47969 18.2263 6.65613L18.2259 6.65947C18.2101 6.78592 18.1383 7.36196 17.5727 7.63632C17.0058 7.91128 16.5057 7.60935 16.3975 7.54403L15.929 7.20489C15.5532 6.91025 15.0387 6.50455 14.6477 6.12412C14.4526 5.93429 14.2514 5.71703 14.0925 5.48612C13.9513 5.28086 13.748 4.93067 13.748 4.5C13.748 4.06933 13.9513 3.71914 14.0925 3.51388C14.2514 3.28297 14.4526 3.06571 14.6477 2.87588C15.0387 2.49545 15.5532 2.08975 15.929 1.79512L16.3975 1.45597C16.5057 1.39065 17.0058 1.08872 17.5727 1.36368C18.1383 1.63804 18.2101 2.21408 18.2259 2.34053L18.2263 2.34387C18.2483 2.52031 18.2482 2.73597 18.2481 2.9116L18.248 3.49414L20.7481 3.49414Z',
  d6: 'M13.8182 12.4211V10.5C13.8182 10.3247 13.7881 10.1564 13.7328 10M16.9091 12.9737V11.5C16.9091 11.3247 16.879 11.1564 16.8237 11M10.7273 9V11.4211M10.7273 9H12.3182C12.9713 9 13.5269 9.4174 13.7328 10M10.7273 9V3.57895C10.7273 2.70692 10.0353 2 9.18182 2C8.32829 2 7.63636 2.70692 7.63636 3.57895V14.0655L5.96696 12.3546C5.23449 11.6039 4.02795 11.6724 3.38085 12.5014C2.88571 13.1357 2.87204 14.033 3.3476 14.6829L7.63636 22H17C18.6569 22 20 20.6569 20 19V12.5C20 11.6716 19.3284 11 18.5 11H16.8237M13.7328 10H15.4091C16.0622 10 16.6178 10.4174 16.8237 11',
  d7: 'M21 4.5L15.7095 4.5M17.5 2L15 4.5L17.5 7',
  d8: 'M17.5296 11.2759L17.5364 13.0847H16.7419V11.443C16.7419 11.2926 16.7157 11.149 16.6677 11.0159C16.4884 10.5178 16.0044 10.1619 15.4367 10.1619H14.0215L14.0283 12.469H13.2338V10.329C13.2338 10.1786 13.2076 10.035 13.1597 9.90195C12.9803 9.40385 12.4963 9.04793 11.9286 9.04793H10.5202V11.3551H9.72574L9.72574 2.69162C9.72574 1.89543 9.0803 1.25 8.28412 1.25C7.48794 1.25 6.8425 1.89543 6.8425 2.69162L6.8425 15.2589L4.43585 12.6673C3.77342 12.001 2.6853 12.0602 2.09815 12.7985C1.64562 13.3675 1.63291 14.1751 2.06785 14.7585L2.07978 14.7745L6.8425 22.75H17.2423C18.9034 22.75 20.25 21.4283 20.25 19.7979V12.557C20.25 11.8495 19.6656 11.2759 18.9448 11.2759H17.5296Z',
  d9: 'M18.043 2.25L14.8359 5.45711L18.043 8.66421L19.4573 7.25L18.6644 6.45711H22.2502V4.45711L18.6644 4.45711L19.4573 3.66421L18.043 2.25Z',
};

export const IconSwipeLeft07StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-07-stroke-rounded IconSwipeLeft07StrokeRounded"
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

export const IconSwipeLeft07DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-07-duotone-rounded IconSwipeLeft07DuotoneRounded"
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

export const IconSwipeLeft07TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-07-twotone-rounded IconSwipeLeft07TwotoneRounded"
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

export const IconSwipeLeft07SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-07-solid-rounded IconSwipeLeft07SolidRounded"
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

export const IconSwipeLeft07BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-07-bulk-rounded IconSwipeLeft07BulkRounded"
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

export const IconSwipeLeft07StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-07-stroke-sharp IconSwipeLeft07StrokeSharp"
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

export const IconSwipeLeft07SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-07-solid-sharp IconSwipeLeft07SolidSharp"
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

export const iconPackOfSwipeLeft07: TheIconSelfPack = {
  name: 'SwipeLeft07',
  StrokeRounded: IconSwipeLeft07StrokeRounded,
  DuotoneRounded: IconSwipeLeft07DuotoneRounded,
  TwotoneRounded: IconSwipeLeft07TwotoneRounded,
  SolidRounded: IconSwipeLeft07SolidRounded,
  BulkRounded: IconSwipeLeft07BulkRounded,
  StrokeSharp: IconSwipeLeft07StrokeSharp,
  SolidSharp: IconSwipeLeft07SolidSharp,
};