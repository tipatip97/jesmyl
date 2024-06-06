import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 17.5C4.23858 17.5 2 15.336 2 12.6667C2 10.1537 3.98398 8.0886 6.52042 7.85528M17.5 17.5C19.9853 17.5 22 15.5524 22 13.15C22 10.7476 19.9853 8.8 17.5 8.8C17.4925 8.8 17.485 8.80002 17.4776 8.80005M17.4776 8.80005C17.4924 8.64084 17.5 8.47961 17.5 8.31667C17.5 5.38035 15.0376 3 12 3C9.12324 3 6.76233 5.135 6.52042 7.85528M17.4776 8.80005C17.3753 9.89668 16.9286 10.8973 16.2428 11.7M6.52042 7.85528C6.67826 7.84076 6.83823 7.83333 7 7.83333C8.12582 7.83333 9.16474 8.19302 10.0005 8.8',
  d2: 'M12.5784 14L10.8043 16.6838C10.5668 17.0431 10.4481 17.2227 10.5217 17.3614C10.5952 17.5 10.8093 17.5 11.2375 17.5H12.7625C13.1907 17.5 13.4048 17.5 13.4783 17.6386C13.5519 17.7773 13.4332 17.9569 13.1957 18.3162L11.4216 21',
  d3: 'M17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 15.7614 4.23858 18 7 18H17.5C19.9853 18 22 15.9853 22 13.5C22 11.0147 19.9853 9 17.5 9L17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5Z',
  d4: 'M12.9924 13.3744C13.338 13.6028 13.4329 14.0681 13.2045 14.4137L11.6601 16.7501H12.763C12.7749 16.7501 12.787 16.7501 12.7992 16.7501C12.9801 16.7499 13.1913 16.7498 13.3644 16.7756C13.5517 16.8035 13.933 16.8946 14.1413 17.2872C14.3483 17.6772 14.2129 18.0428 14.1333 18.2128C14.0591 18.3714 13.9423 18.5477 13.8417 18.6997C13.835 18.7099 13.8283 18.7199 13.8218 18.7299L12.0477 21.4137C11.8193 21.7592 11.354 21.8542 11.0085 21.6257C10.6629 21.3973 10.568 20.932 10.7964 20.5865L12.3408 18.2501H11.2379C11.226 18.2501 11.2139 18.2501 11.2016 18.2501C11.0208 18.2502 10.8095 18.2504 10.6364 18.2246C10.4492 18.1966 10.0679 18.1056 9.85959 17.713C9.65259 17.3229 9.78794 16.9574 9.86757 16.7873C9.94181 16.6288 10.0585 16.4525 10.1592 16.3004C10.1659 16.2903 10.1725 16.2802 10.1791 16.2703L11.9532 13.5865C12.1816 13.241 12.6469 13.146 12.9924 13.3744ZM13.1466 18.2598C13.1466 18.2598 13.1455 18.2597 13.1435 18.2593C13.1456 18.2596 13.1466 18.2598 13.1466 18.2598ZM12.7752 17.5761C12.7759 17.5741 12.7764 17.5732 12.7764 17.5731C12.7765 17.5731 12.7761 17.5741 12.7752 17.5761ZM10.8543 16.7404C10.8543 16.7403 10.8554 16.7405 10.8574 16.7409C10.8552 16.7406 10.8542 16.7404 10.8543 16.7404ZM11.2257 17.4241C11.2249 17.426 11.2245 17.427 11.2244 17.427C11.2244 17.427 11.2248 17.4261 11.2257 17.4241Z',
  d5: 'M13.1304 12.9159C13.5911 13.2204 13.7177 13.8408 13.4132 14.3016L12.1251 16.2501L12.8033 16.2501C12.979 16.2499 13.2088 16.2497 13.4014 16.2784C13.6123 16.3098 14.0967 16.4197 14.3623 16.92C14.626 17.417 14.4493 17.8779 14.3599 18.0689C14.2773 18.2451 14.1505 18.4366 14.0526 18.5843L12.2564 21.3016C11.9518 21.7623 11.3315 21.8889 10.8707 21.5843C10.41 21.2798 10.2834 20.6594 10.588 20.1987L11.876 18.2501L11.1979 18.2501C11.0221 18.2503 10.7923 18.2506 10.5997 18.2218C10.3888 18.1904 9.90441 18.0806 9.6389 17.5802C9.37517 17.0832 9.55187 16.6223 9.64131 16.4313C9.72381 16.2552 9.85068 16.0637 9.94854 15.9159L9.94854 15.9159L11.7448 13.1987C12.0493 12.7379 12.6697 12.6113 13.1304 12.9159Z',
  d6: 'M5.93931 6.96783C5.88991 7.16384 5.8652 7.26184 5.80872 7.3197C5.75224 7.37755 5.65424 7.40476 5.45825 7.45919C3.03106 8.1332 1.25 10.3583 1.25 13C1.25 16.1756 3.82436 18.75 7 18.75H8.06437C8.28777 18.75 8.4195 18.4808 8.31478 18.2835C7.7076 17.1393 8.14019 16.1019 8.28376 15.7953C8.41461 15.5159 8.59498 15.2443 8.68473 15.1091L10.4943 12.3717C11.2557 11.2199 12.8067 10.9034 13.9585 11.6647C14.9278 12.3055 15.2972 13.518 14.9362 14.5726C14.8322 14.8762 14.7802 15.028 14.8012 15.1134C14.8221 15.1989 14.9374 15.3084 15.1678 15.5273C15.3588 15.7088 15.5384 15.9349 15.6881 16.217C16.0035 16.8113 16.0326 17.3889 15.9676 17.8498C15.9023 18.3123 15.8697 18.5435 15.9594 18.6468C16.0491 18.75 16.2465 18.75 16.6412 18.75H17.5C20.3995 18.75 22.75 16.3995 22.75 13.5C22.75 11.0285 21.0422 8.95589 18.7423 8.39786C18.4989 8.3388 18.3772 8.30927 18.3147 8.23828C18.2522 8.1673 18.2385 8.04461 18.2112 7.79924C17.8628 4.67731 15.2149 2.25 12 2.25C9.07671 2.25 6.62272 4.25653 5.93931 6.96783Z',
  d7: 'M12.5787 14L10.5 17.5H13.5003L11.4219 21',
  d8: 'M11.7182 13.7285L13.4377 14.7498L12.2562 16.7392H15.2564L12.281 21.7498L10.5613 20.7286L11.7427 18.7392H8.74219L11.7182 13.7285Z',
  d9: 'M5.853 7.36454C3.22664 7.89643 1.25 10.217 1.25 13C1.25 16.1723 3.81892 18.7446 6.98993 18.75L11.1932 11.6729L15.4922 14.2261L14.8905 15.2392H17.8905L15.8056 18.75H17.5C20.3995 18.75 22.75 16.3995 22.75 13.5C22.75 10.8541 20.7927 8.66534 18.2469 8.30273C18.1428 4.94224 15.3858 2.25 12 2.25C8.93585 2.25 6.38731 4.45456 5.853 7.36454Z',
};

export const IconCloudAngledZapStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-angled-zap-stroke-rounded IconCloudAngledZapStrokeRounded"
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

export const IconCloudAngledZapDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-angled-zap-duotone-rounded IconCloudAngledZapDuotoneRounded"
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

export const IconCloudAngledZapTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-angled-zap-twotone-rounded IconCloudAngledZapTwotoneRounded"
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

export const IconCloudAngledZapSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-angled-zap-solid-rounded IconCloudAngledZapSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudAngledZapBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-angled-zap-bulk-rounded IconCloudAngledZapBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudAngledZapStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-angled-zap-stroke-sharp IconCloudAngledZapStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudAngledZapSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-angled-zap-solid-sharp IconCloudAngledZapSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCloudAngledZap: TheIconSelfPack = {
  name: 'CloudAngledZap',
  StrokeRounded: IconCloudAngledZapStrokeRounded,
  DuotoneRounded: IconCloudAngledZapDuotoneRounded,
  TwotoneRounded: IconCloudAngledZapTwotoneRounded,
  SolidRounded: IconCloudAngledZapSolidRounded,
  BulkRounded: IconCloudAngledZapBulkRounded,
  StrokeSharp: IconCloudAngledZapStrokeSharp,
  SolidSharp: IconCloudAngledZapSolidSharp,
};