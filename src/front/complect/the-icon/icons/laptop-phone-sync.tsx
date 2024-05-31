import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 15V7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H11M20 15V14.5',
  d2: 'M18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V8C22 9.88562 22 10.8284 21.4142 11.4142C20.8284 12 19.8856 12 18 12C16.1144 12 15.1716 12 14.5858 11.4142C14 10.8284 14 9.88562 14 8L14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2Z',
  d3: 'M18 9H18.009',
  d4: 'M3.49762 16.0154L4.01953 15H19.9518L20.5023 16.0154C21.9452 18.677 22.3046 20.0077 21.7561 21.0039C21.2077 22 19.7536 22 16.8454 22L7.15462 22C4.24642 22 2.79231 22 2.24387 21.0039C1.69543 20.0077 2.05474 18.677 3.49762 16.0154Z',
  d5: 'M14.2924 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V15H20V11.9493C19.4841 12 18.8343 12 18 12C16.1144 12 15.1716 12 14.5858 11.4142C14 10.8284 14 9.88562 14 8V6C14 4.50417 14 3.60164 14.2924 3Z',
  d6: 'M17.948 1.25H18.052H18.0521H18.0521C18.9505 1.24997 19.6997 1.24995 20.2945 1.32992C20.9223 1.41432 21.4891 1.59999 21.9445 2.05546C22.4 2.51093 22.5857 3.07773 22.6701 3.70553C22.7501 4.3003 22.75 5.04954 22.75 5.94801V8.05208C22.75 8.95053 22.7501 9.69972 22.6701 10.2945C22.5857 10.9223 22.4 11.4891 21.9445 11.9445C21.4891 12.4 20.9223 12.5857 20.2945 12.6701C19.6997 12.7501 18.9505 12.75 18.052 12.75H17.948C17.0495 12.75 16.3003 12.7501 15.7055 12.6701C15.0777 12.5857 14.5109 12.4 14.0555 11.9445C13.6 11.4891 13.4143 10.9223 13.3299 10.2945C13.25 9.69973 13.25 8.95049 13.25 8.05206V8.05203V8.052V5.94794V5.94791V5.94789C13.25 5.04946 13.25 4.30028 13.3299 3.70553C13.4143 3.07773 13.6 2.51093 14.0555 2.05546C14.5109 1.59999 15.0777 1.41432 15.7055 1.32992C16.3003 1.24995 17.0495 1.24997 17.948 1.25H17.948H17.948ZM17 9C17 8.44772 17.4457 8 17.9955 8H18.0045C18.5543 8 19 8.44772 19 9C19 9.55229 18.5543 10 18.0045 10H17.9955C17.4457 10 17 9.55229 17 9Z',
  d7: 'M8.18417 2.25C7.29769 2.24995 6.53387 2.24991 5.92221 2.33215C5.2667 2.42028 4.63835 2.61902 4.12868 3.12868C3.61902 3.63835 3.42028 4.2667 3.33215 4.92221C3.24991 5.53387 3.24995 6.29769 3.25 7.18417L3.25 14.75L3.24991 14.7913C3.24862 14.8426 3.2425 14.8679 3.22019 14.9141L3.21015 14.9338L2.83421 15.6653C2.11021 17.0014 1.62267 18.0653 1.39719 18.9487C1.16515 19.8577 1.1925 20.6495 1.58675 21.3656C2.02749 22.1661 2.81497 22.4782 3.69825 22.6165C4.55189 22.7501 5.69028 22.75 7.08676 22.75H16.913C18.3095 22.75 19.4479 22.7501 20.3015 22.6165C21.1848 22.4782 21.9723 22.1661 22.413 21.3656C22.8073 20.6495 22.8346 19.8576 22.6025 18.9486C22.3766 18.0637 21.8877 16.9975 21.1615 15.658L20.8047 14.9999C20.7881 14.9692 20.7798 14.9538 20.7744 14.9413C20.7586 14.9045 20.7549 14.8899 20.7512 14.85C20.75 14.8364 20.75 14.8076 20.75 14.75C20.75 14.5631 20.75 14.4696 20.7098 14.4C20.6835 14.3544 20.6456 14.3165 20.6 14.2902C20.5304 14.25 20.4369 14.25 20.25 14.25H5.85C5.56716 14.25 5.42574 14.25 5.33787 14.1621C5.25 14.0743 5.25 13.9328 5.25 13.65V7.25C5.25 6.27893 5.25213 5.65122 5.31431 5.18871C5.37263 4.75497 5.46677 4.61902 5.5429 4.5429C5.61902 4.46677 5.75497 4.37263 6.18871 4.31431C6.65122 4.25213 7.27893 4.25 8.25 4.25H11C11.5523 4.25 12 3.80229 12 3.25C12 2.69772 11.5523 2.25 11 2.25L8.18417 2.25Z',
  d8: 'M4.00684 14.991V3H11.0032',
  d9: 'M21.9979 2.00098H14.002V11.9935H21.9979V2.00098Z',
  d10: 'M18 8.99609H18.009',
  d11: 'M19.9703 14.9834H4.09137C4.04695 14.9834 4.00786 15.0127 3.99542 15.0553L2.00602 21.8709C1.98735 21.9349 2.03533 21.9988 2.10196 21.9988L21.8957 21.999C21.9624 21.999 22.0103 21.9349 21.9916 21.8709L19.9703 14.9834Z',
  d12: 'M22.7124 21.5056L20.7954 14.8038V13.9643H5.16016V4.20239H11.0012L10.9998 2.25H3.20418V14.8038L1.2876 21.5057C1.20337 21.8002 1.26242 22.1172 1.4471 22.3617C1.63177 22.6062 1.92064 22.75 2.2273 22.75H21.7727C22.0794 22.75 22.3682 22.6062 22.5529 22.3617C22.7376 22.1171 22.7966 21.8002 22.7124 21.5056Z',
  d13: 'M14 1.25C13.5858 1.25 13.25 1.58579 13.25 2V12C13.25 12.4142 13.5858 12.75 14 12.75H22C22.4142 12.75 22.75 12.4142 22.75 12V2C22.75 1.58579 22.4142 1.25 22 1.25H14ZM19.009 9H17V11H19.009V9Z',
} as const;

export const IconLaptopPhoneSyncStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-phone-sync-stroke-rounded IconLaptopPhoneSyncStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLaptopPhoneSyncDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-phone-sync-duotone-rounded IconLaptopPhoneSyncDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconLaptopPhoneSyncTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-phone-sync-twotone-rounded IconLaptopPhoneSyncTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconLaptopPhoneSyncSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-phone-sync-solid-rounded IconLaptopPhoneSyncSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopPhoneSyncBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-phone-sync-bulk-rounded IconLaptopPhoneSyncBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopPhoneSyncStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-phone-sync-stroke-sharp IconLaptopPhoneSyncStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopPhoneSyncSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-phone-sync-solid-sharp IconLaptopPhoneSyncSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLaptopPhoneSync: TheIconSelfPack = {
  name: 'LaptopPhoneSync',
  StrokeRounded: IconLaptopPhoneSyncStrokeRounded,
  DuotoneRounded: IconLaptopPhoneSyncDuotoneRounded,
  TwotoneRounded: IconLaptopPhoneSyncTwotoneRounded,
  SolidRounded: IconLaptopPhoneSyncSolidRounded,
  BulkRounded: IconLaptopPhoneSyncBulkRounded,
  StrokeSharp: IconLaptopPhoneSyncStrokeSharp,
  SolidSharp: IconLaptopPhoneSyncSolidSharp,
};