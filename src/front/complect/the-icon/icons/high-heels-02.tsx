import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.94 20C20.7001 19.5608 20.5461 18.7733 20.7747 17.9828C21.072 16.9548 21.2166 16.6616 20.2832 16.1146L18.8943 15.3006C18.0159 14.7858 17.8318 14.9376 17.1901 15.7146C16.4066 16.6636 15.0099 17.7544 13 18.2276',
  d2: 'M2 7V5.2C2 4.2072 2.17267 4 3 4H8C8.9076 4 9 4.55496 9 5.5C9 6.44504 8.9076 7 8 7H2ZM2 7V12',
  d3: 'M2 12H3C5.45356 12 6.68034 12 7.73607 12.5279C8.7918 13.0557 9.52786 14.0372 11 16C13.9754 19.9672 17.4727 20 22 20',
  d4: 'M2 12L3.46941 19.8369C3.48715 19.9315 3.56974 20 3.66599 20H4.3C4.41046 20 4.5004 19.914 4.50314 19.8036C4.52912 18.7574 4.7698 13.8381 7 12.5',
  d5: 'M20.7747 17.9828C20.5461 18.7733 20.7001 19.5608 20.94 20C17.292 20.4 14.1267 18.9851 13 18.2276C15.0099 17.7544 16.4066 16.6636 17.1901 15.7146C17.8318 14.9376 18.0159 14.7858 18.8943 15.3006L20.2832 16.1146C21.2166 16.6616 21.072 16.9548 20.7747 17.9828Z',
  d6: 'M2 5.2V7H8C8.9076 7 9 6.44504 9 5.5C9 4.55496 8.9076 4 8 4H3C2.17267 4 2 4.2072 2 5.2Z',
  d7: 'M7.40066 13.1987C6.54049 12.7687 5.52885 12.7501 3 12.7501H2C1.58579 12.7501 1.25 12.4143 1.25 12.0001C1.25 11.5858 1.58579 11.2501 2 11.2501H3C3.06748 11.2501 3.13421 11.25 3.2002 11.25C5.45994 11.2495 6.85569 11.2492 8.07148 11.8571C9.28727 12.465 10.1245 13.5818 11.4799 15.3899C11.5195 15.4427 11.5595 15.4961 11.6 15.5501C12.9899 17.4033 14.4687 18.3061 16.119 18.7652C17.8145 19.2368 19.7134 19.2501 22 19.2501C22.4142 19.2501 22.75 19.5858 22.75 20.0001C22.75 20.4143 22.4142 20.7501 22 20.7501C19.7592 20.7501 17.6459 20.7469 15.717 20.2103C13.7431 19.6612 11.9855 18.5641 10.4 16.4501C8.88269 14.427 8.26082 13.6288 7.40066 13.1987Z',
  d8: 'M8.00001 3.25001C8.29712 3.25001 8.59673 3.29449 8.8692 3.42802C9.15695 3.56904 9.3654 3.78549 9.5026 4.04358C9.74107 4.49218 9.75001 5.05996 9.75001 5.50001C9.75001 5.94007 9.74107 6.50784 9.5026 6.95644C9.3654 7.21454 9.15695 7.43099 8.8692 7.57201C8.59673 7.70554 8.29712 7.75001 8.00001 7.75001H3.25L3.25 10.75C5.32214 10.7501 6.71248 10.7732 7.93328 11.3836C9.20305 12.0184 10.0745 13.1813 11.4017 14.9522L11.55 15.1501C12.9073 16.9599 14.3397 17.8303 15.936 18.2744C17.5927 18.7352 19.4558 18.7501 21.75 18.7501C22.3023 18.7501 22.75 19.1978 22.75 19.7501C22.75 20.3024 22.3023 20.7501 21.75 20.7501C19.5169 20.7501 17.3678 20.7486 15.4 20.2013C13.3721 19.6371 11.5681 18.5076 9.95 16.3501C8.41763 14.307 7.83383 13.5699 7.03885 13.1724C6.25571 12.7808 5.33189 12.7509 2.86297 12.7501C2.31069 12.7501 1.25 12.5123 1.25 11.96V5.45C1.25 5.18409 1.26061 4.91291 1.30625 4.66359C1.35233 4.41189 1.44702 4.10693 1.67153 3.83752C2.1445 3.26995 2.85449 3.25 3.25 3.25C3.28704 3.25 3.32362 3.25201 3.35962 3.25594C3.47082 3.24992 3.58725 3.24996 3.69417 3.25001L8.00001 3.25001Z',
  d9: 'M17.7388 14.3047C18.3206 14.1303 18.8544 14.4074 19.2742 14.6534L20.6631 15.4674C21.1532 15.7546 21.6304 16.1181 21.7317 16.7494C21.776 17.0254 21.735 17.2863 21.6869 17.4992C21.6488 17.6681 21.5923 17.8609 21.5361 18.0533L21.4959 18.1911C21.3416 18.7248 21.4595 19.3488 21.6146 19.6765C21.725 19.9096 21.7077 20.1832 21.569 20.4006C21.4303 20.6181 21.1895 20.7491 20.9315 20.7473C17.9326 20.7266 15.1782 20.5545 12.7369 18.7925C12.5011 18.6223 12.3849 18.3311 12.4388 18.0453C12.4927 17.7595 12.707 17.5307 12.9886 17.4581C14.7356 17.0078 15.9419 16.0492 16.6125 15.237C16.7692 15.0472 16.9283 14.8577 17.087 14.7066C17.2482 14.553 17.46 14.3882 17.7388 14.3047Z',
  d10: 'M1.42287 11.521C1.56536 11.3493 1.77689 11.25 2.00001 11.25C3.52943 11.25 4.70759 11.3348 5.56562 11.4434C6.40356 11.5496 6.98033 11.6838 7.27975 11.8041C7.54391 11.9103 7.72517 12.1569 7.74766 12.4407C7.77016 12.7246 7.63001 12.9966 7.38588 13.1431C6.99442 13.378 6.64328 13.8011 6.34197 14.397C6.04314 14.988 5.82014 15.6962 5.65686 16.4252C5.33028 17.8833 5.26542 19.3186 5.25292 19.8222C5.23987 20.3479 4.80895 20.75 4.30001 20.75H3.66599C3.20884 20.75 2.81651 20.4244 2.73226 19.9751L1.26285 12.1382C1.22173 11.9189 1.28039 11.6927 1.42287 11.521Z',
  d11: 'M20 20V16.5L17 15L13 18',
  d12: 'M2 12L3.5 20H5L7 12.5',
  d13: 'M2 7H9V4H2.01C2.00448 4 2 4.00448 2 4.01V7ZM2 7V11.9511C2 11.9783 2.02209 12.0005 2.04928 12.001C4.62323 12.0528 6.46448 11.8046 7.8749 12.599C9.53542 13.5343 10.4751 15.6165 12.101 17.2859C15.1697 20.1595 18.3684 19.9255 22 20',
  d14: 'M2.5 3.25C2.08579 3.25 1.75 3.58579 1.75 4V12C1.75 12.0472 1.75435 12.0933 1.76268 12.1381L3.37643 20.75H6.07508L8.06518 13.2872C8.84518 13.7374 9.48101 14.558 10.9 16.45C12.4855 18.564 14.2431 19.6612 16.217 20.2103C18.1459 20.7468 20.0092 20.75 22.25 20.75V19.25C21.8203 19.25 21.6543 19.2495 21.2508 19.2456V16.5C21.2508 16.2159 21.0903 15.9562 20.8362 15.8292L17.8362 14.3292C17.5821 14.2021 17.278 14.2296 17.0508 14.4L13.4864 17.0733C13.013 16.6544 12.5518 16.1524 12.1 15.55L11.9799 15.3898C10.6245 13.5817 9.78727 12.4649 8.57148 11.857C7.36676 11.2547 5.98535 11.2495 3.76172 11.25V7.75H10.25V3.25H2.5Z',
};

export const IconHighHeels02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="high-heels-02-stroke-rounded IconHighHeels02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHighHeels02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="high-heels-02-duotone-rounded IconHighHeels02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHighHeels02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="high-heels-02-twotone-rounded IconHighHeels02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHighHeels02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="high-heels-02-solid-rounded IconHighHeels02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHighHeels02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="high-heels-02-bulk-rounded IconHighHeels02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHighHeels02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="high-heels-02-stroke-sharp IconHighHeels02StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHighHeels02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="high-heels-02-solid-sharp IconHighHeels02SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHighHeels02: TheIconSelfPack = {
  name: 'HighHeels02',
  StrokeRounded: IconHighHeels02StrokeRounded,
  DuotoneRounded: IconHighHeels02DuotoneRounded,
  TwotoneRounded: IconHighHeels02TwotoneRounded,
  SolidRounded: IconHighHeels02SolidRounded,
  BulkRounded: IconHighHeels02BulkRounded,
  StrokeSharp: IconHighHeels02StrokeSharp,
  SolidSharp: IconHighHeels02SolidSharp,
};