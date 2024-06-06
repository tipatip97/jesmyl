import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 10C2 7.17157 2 5.75736 2.87868 4.87868C3.75736 4 5.17157 4 8 4H16C18.8284 4 20.2426 4 21.1213 4.87868C22 5.75736 22 7.17157 22 10V14C22 16.8284 22 18.2426 21.1213 19.1213C20.2426 20 18.8284 20 16 20H8C5.17157 20 3.75736 20 2.87868 19.1213C2 18.2426 2 16.8284 2 14V10Z',
  d2: 'M6 9.90429C6 5.35988 12 9.99015 12 13H8.5C6.7632 13 6 11.4699 6 9.90429Z',
  d3: 'M18 9.90429C18 5.35988 12 9.99015 12 13H15.5C17.2368 13 18 11.4699 18 9.90429Z',
  d4: 'M12 4V20',
  d5: 'M2 13H22',
  d6: 'M15 16L12 13L9 16',
  d7: 'M2 10C2 7.17157 2 5.75736 2.87868 4.87868C3.75736 4 5.17157 4 8 4H16C18.8284 4 20.2426 4 21.1213 4.87868C22 5.75736 22 7.17157 22 10V14C22 16.8284 22 18.2426 21.1213 19.1213C20.2426 20 18.8284 20 16 20H8C5.17157 20 3.75736 20 2.87868 19.1213C2 18.2426 2 16.8284 2 14V10ZM6 9.90429C6 5.35988 12 9.99015 12 13H8.5C6.7632 13 6 11.4699 6 9.90429ZM12 13H15.5C17.2368 13 18 11.4699 18 9.90429C18 5.35988 12 9.99015 12 13Z',
  d8: 'M12 13C12 9.99015 6 5.35988 6 9.90429C6 11.4699 6.7632 13 8.5 13H12ZM12 13C12 9.99015 18 5.35988 18 9.90429C18 11.4699 17.2368 13 15.5 13H12ZM12 13L15 16M12 13L9 16M12 4V20M2 13H22',
  d9: 'M11.25 3.25H7.94513H7.94511H7.9451C6.57752 3.24998 5.47521 3.24996 4.60825 3.36652C3.70814 3.48754 2.95027 3.74643 2.34835 4.34835C1.74643 4.95027 1.48754 5.70814 1.36652 6.60825C1.24996 7.47521 1.24998 8.57752 1.25 9.9451V9.94511V9.94513V12.25H5.84206C5.42503 11.5505 5.25 10.7079 5.25 9.90429C5.25 9.26416 5.35402 8.70229 5.59857 8.25149C5.85514 7.77853 6.25012 7.46157 6.73475 7.32549C7.62398 7.07581 8.61716 7.48081 9.406 7.98869C10.0609 8.41034 10.7058 8.98568 11.25 9.6291L11.25 3.25ZM1.25 13.75V14.0549V14.0549V14.0549C1.24998 15.4225 1.24996 16.5248 1.36652 17.3918C1.48754 18.2919 1.74643 19.0497 2.34835 19.6517C2.95027 20.2536 3.70814 20.5125 4.60825 20.6335C5.47522 20.75 6.57754 20.75 7.94513 20.75H11.25L11.25 14.8107L9.53033 16.5303C9.23744 16.8232 8.76257 16.8232 8.46967 16.5303C8.17678 16.2374 8.17678 15.7626 8.46967 15.4697L10.1893 13.75H8.5H8.4985L1.25 13.75ZM12.75 20.75H16.0549C17.4225 20.75 18.5248 20.75 19.3918 20.6335C20.2919 20.5125 21.0497 20.2536 21.6517 19.6517C22.2536 19.0497 22.5125 18.2919 22.6335 17.3918C22.75 16.5248 22.75 15.4225 22.75 14.0549V13.75L15.5015 13.75H15.5H13.8107L15.5303 15.4697C15.8232 15.7626 15.8232 16.2374 15.5303 16.5303C15.2374 16.8232 14.7626 16.8232 14.4697 16.5303L12.75 14.8107L12.75 20.75ZM22.75 12.25V9.94513C22.75 8.57754 22.75 7.47522 22.6335 6.60825C22.5125 5.70814 22.2536 4.95027 21.6517 4.34835C21.0497 3.74643 20.2919 3.48754 19.3918 3.36652C18.5248 3.24996 17.4225 3.24998 16.0549 3.25H16.0549H16.0549H12.75L12.75 9.62911C13.2942 8.98568 13.9391 8.41034 14.594 7.98869C15.3828 7.48081 16.376 7.07581 17.2652 7.32549C17.7499 7.46156 18.1449 7.77853 18.4014 8.25149C18.646 8.70229 18.75 9.26416 18.75 9.90429C18.75 10.7079 18.575 11.5505 18.1579 12.25H22.75ZM10.4525 11.0438C10.7537 11.4649 10.973 11.8761 11.1045 12.25H8.5H8.49884C7.88656 12.2497 7.48564 11.9954 7.21156 11.6069C6.91669 11.1889 6.75 10.5794 6.75 9.90429C6.75 9.40832 6.83349 9.1208 6.91706 8.96675C6.98861 8.83485 7.06239 8.7915 7.14025 8.76964C7.37602 8.70344 7.88285 8.79204 8.594 9.2499C9.25981 9.67858 9.9419 10.33 10.4525 11.0438ZM15.5 12.25H12.8955C13.027 11.8761 13.2463 11.4649 13.5475 11.0438C14.0581 10.33 14.7402 9.67858 15.406 9.2499C16.1172 8.79204 16.624 8.70344 16.8598 8.76964C16.9376 8.7915 17.0114 8.83485 17.0829 8.96675C17.1665 9.1208 17.25 9.40832 17.25 9.90429C17.25 10.5794 17.0833 11.1889 16.7884 11.6069C16.5144 11.9954 16.1134 12.2497 15.5012 12.25H15.5Z',
  d10: 'M16.0549 3.25C17.4225 3.24998 18.5248 3.24996 19.3918 3.36652C20.2919 3.48754 21.0497 3.74643 21.6517 4.34835C22.2536 4.95027 22.5125 5.70814 22.6335 6.60825C22.75 7.47522 22.75 8.57754 22.75 9.94513V14.0549C22.75 15.4225 22.75 16.5248 22.6335 17.3918C22.5125 18.2919 22.2536 19.0497 21.6517 19.6517C21.0497 20.2536 20.2919 20.5125 19.3918 20.6335C18.5248 20.75 17.4225 20.75 16.0549 20.75H7.94513C6.57754 20.75 5.47522 20.75 4.60825 20.6335C3.70814 20.5125 2.95027 20.2536 2.34835 19.6517C1.74643 19.0497 1.48754 18.2919 1.36652 17.3918C1.24996 16.5248 1.24998 15.4225 1.25 14.0549V14.0549V9.94513V9.94511C1.24998 8.57753 1.24996 7.47521 1.36652 6.60825C1.48754 5.70814 1.74643 4.95027 2.34835 4.34835C2.95027 3.74643 3.70814 3.48754 4.60825 3.36652C5.47521 3.24996 6.57753 3.24998 7.94511 3.25H7.94513H16.0549H16.0549Z',
  d11: 'M1.25 12.25H5.84206C5.42503 11.5505 5.25 10.7079 5.25 9.90429C5.25 9.26416 5.35402 8.70229 5.59857 8.25149C5.85514 7.77853 6.25012 7.46156 6.73475 7.32549C7.62398 7.07581 8.61715 7.48081 9.406 7.98869C10.0609 8.41034 10.7058 8.98568 11.25 9.6291L11.25 3.25H12.75L12.75 9.62911C13.2942 8.98568 13.9391 8.41034 14.594 7.98869C15.3828 7.48081 16.376 7.07581 17.2652 7.32549C17.7499 7.46156 18.1449 7.77853 18.4014 8.25149C18.646 8.70229 18.75 9.26416 18.75 9.90429C18.75 10.7079 18.575 11.5505 18.1579 12.25H22.75V13.75L13.8107 13.75L15.5303 15.4697C15.8232 15.7626 15.8232 16.2374 15.5303 16.5303C15.2374 16.8232 14.7626 16.8232 14.4697 16.5303L12.75 14.8107L12.75 20.75H11.25L11.25 14.8107L9.53033 16.5303C9.23744 16.8232 8.76256 16.8232 8.46967 16.5303C8.17678 16.2374 8.17678 15.7626 8.46967 15.4697L10.1893 13.75L1.25 13.75V12.25ZM10.4525 11.0438C10.7537 11.4649 10.973 11.8761 11.1045 12.25H8.49884C7.88656 12.2497 7.48564 11.9954 7.21156 11.6069C6.91669 11.1889 6.75 10.5794 6.75 9.90429C6.75 9.40832 6.83348 9.1208 6.91706 8.96675C6.98861 8.83485 7.06239 8.7915 7.14025 8.76964C7.37602 8.70344 7.88285 8.79204 8.594 9.2499C9.25981 9.67857 9.9419 10.33 10.4525 11.0438ZM12.8955 12.25C13.027 11.8761 13.2463 11.4649 13.5475 11.0438C14.0581 10.33 14.7402 9.67857 15.406 9.2499C16.1172 8.79204 16.624 8.70344 16.8598 8.76964C16.9376 8.7915 17.0114 8.83485 17.0829 8.96675C17.1665 9.1208 17.25 9.40832 17.25 9.90429C17.25 10.5794 17.0833 11.1889 16.7884 11.6069C16.5144 11.9954 16.1134 12.2497 15.5012 12.25H12.8955Z',
  d12: 'M22 4H2V20H22V4Z',
  d13: 'M11.25 20.75V14.8097L9.52941 16.5303L8.46875 15.4697L10.1884 13.7501H8.5L8.47777 13.75H1.25V20C1.25 20.4142 1.58579 20.75 2 20.75H11.25Z',
  d14: 'M12.75 20.75H22C22.4142 20.75 22.75 20.4142 22.75 20V13.75H15.5222L15.5 13.7501H13.8098L15.5294 15.4697L14.4688 16.5303L12.75 14.8116V20.75Z',
  d15: 'M22.75 12.25V4C22.75 3.58579 22.4142 3.25 22 3.25H12.75V9.62917C13.2942 8.98574 13.9391 8.4104 14.594 7.98876C15.3828 7.48087 16.376 7.07587 17.2652 7.32555C17.7499 7.46163 18.1449 7.77859 18.4014 8.25155C18.646 8.70235 18.75 9.26423 18.75 9.90436C18.75 10.7079 18.575 11.5505 18.158 12.25H22.75Z',
  d16: 'M11.25 3.25H2C1.58579 3.25 1.25 3.58579 1.25 4V12.25H5.84202C5.42502 11.5505 5.25 10.7079 5.25 9.90436C5.25 9.26423 5.35402 8.70235 5.59857 8.25155C5.85514 7.77859 6.25011 7.46163 6.73475 7.32555C7.62398 7.07587 8.61715 7.48087 9.406 7.98876C10.0609 8.4104 10.7058 8.98574 11.25 9.62917V3.25Z',
  d17: 'M15.5172 12.25C16.1204 12.2453 16.5168 11.9921 16.7884 11.607C17.0833 11.189 17.25 10.5795 17.25 9.90436C17.25 9.40838 17.1665 9.12086 17.0829 8.96681C17.0114 8.83492 16.9376 8.79157 16.8598 8.7697C16.624 8.7035 16.1172 8.79211 15.406 9.24997C14.7402 9.67864 14.0581 10.3301 13.5475 11.0439C13.2463 11.465 13.027 11.8761 12.8955 12.25H15.5172Z',
  d18: 'M11.1045 12.25C10.973 11.8761 10.7537 11.465 10.4525 11.0439C9.9419 10.3301 9.25981 9.67864 8.594 9.24997C7.88285 8.79211 7.37602 8.7035 7.14025 8.7697C7.06239 8.79157 6.98861 8.83492 6.91706 8.96681C6.83348 9.12086 6.75 9.40838 6.75 9.90436C6.75 10.5795 6.91669 11.189 7.21156 11.607C7.48325 11.9921 7.87956 12.2453 8.48284 12.25H11.1045Z',
};

export const IconGiftCardStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gift-card-stroke-rounded IconGiftCardStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGiftCardDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gift-card-duotone-rounded IconGiftCardDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGiftCardTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gift-card-twotone-rounded IconGiftCardTwotoneRounded"
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGiftCardSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gift-card-solid-rounded IconGiftCardSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGiftCardBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gift-card-bulk-rounded IconGiftCardBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGiftCardStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gift-card-stroke-sharp IconGiftCardStrokeSharp"
    >
      <path 
        d={d.d12} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGiftCardSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gift-card-solid-sharp IconGiftCardSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGiftCard: TheIconSelfPack = {
  name: 'GiftCard',
  StrokeRounded: IconGiftCardStrokeRounded,
  DuotoneRounded: IconGiftCardDuotoneRounded,
  TwotoneRounded: IconGiftCardTwotoneRounded,
  SolidRounded: IconGiftCardSolidRounded,
  BulkRounded: IconGiftCardBulkRounded,
  StrokeSharp: IconGiftCardStrokeSharp,
  SolidSharp: IconGiftCardSolidSharp,
};