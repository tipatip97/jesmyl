import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.999 13L17.999 13C19.8846 13 20.8274 13 21.4132 13.5858C21.999 14.1716 21.999 15.1144 21.999 17V18C21.999 19.8856 21.999 20.8284 21.4132 21.4142C20.8274 22 19.8846 22 17.999 22H10.6559C9.83838 22 9.42963 22 9.06208 21.8478C8.69454 21.6955 8.40551 21.4065 7.82745 20.8284L3.1706 16.1716C2.59254 15.5935 2.30351 15.3045 2.15126 14.9369C1.99902 14.5694 1.99902 14.1606 1.99902 13.3431L1.99902 6C1.99902 4.11438 1.99902 3.17157 2.58481 2.58579C3.1706 2 4.1134 2 5.99902 2L6.99902 2C8.88464 2 9.82745 2 10.4132 2.58579C10.999 3.17157 10.999 4.11438 10.999 6V9C10.999 10.8856 10.999 11.8284 11.5848 12.4142C12.1706 13 13.1134 13 14.999 13Z',
  d2: 'M21.999 18V17C21.999 15.1144 21.999 14.1716 21.4132 13.5858C20.8274 13 19.8846 13 17.999 13L14.999 13C13.1134 13 12.1706 13 11.5848 12.4142C10.999 11.8284 10.999 10.8856 10.999 9V6C10.999 4.11438 10.999 3.17157 10.4132 2.58579C9.82745 2 8.88464 2 6.99902 2L5.99902 2',
  d3: 'M9.29463 1.32991C9.92242 1.41432 10.4892 1.59999 10.9447 2.05546C11.4002 2.51093 11.5858 3.07773 11.6702 3.70552C11.7502 4.3003 11.7502 5.04951 11.7502 5.94798V5.94801L11.7502 9C11.7502 9.96401 11.7517 10.6116 11.8167 11.0946C11.8787 11.5561 11.986 11.7536 12.1163 11.8839C12.2466 12.0142 12.4441 12.1214 12.9055 12.1835C13.3886 12.2484 14.0361 12.25 15.0002 12.25L18.0521 12.25H18.0522C18.9506 12.25 19.6999 12.2499 20.2946 12.3299C20.9224 12.4143 21.4892 12.6 21.9447 13.0555C22.4002 13.5109 22.5858 14.0777 22.6702 14.7055C22.7502 15.3003 22.7502 16.0495 22.7502 16.948V18.052C22.7502 18.9505 22.7502 19.6997 22.6702 20.2945C22.5858 20.9223 22.4002 21.4891 21.9447 21.9445C21.4892 22.4 20.9224 22.5857 20.2946 22.6701C19.6998 22.7501 18.9506 22.75 18.0521 22.75H10.657L10.5362 22.7501C9.83755 22.7507 9.28465 22.7513 8.7762 22.5407C8.26775 22.3301 7.87716 21.9387 7.38365 21.4443L7.38364 21.4443L7.29825 21.3588L2.64139 16.7019L2.55588 16.6165C2.06142 16.123 1.67009 15.7324 1.45948 15.224C1.24888 14.7155 1.24941 14.1626 1.25007 13.464L1.25015 13.3431L1.25015 5.948C1.25012 5.04952 1.2501 4.3003 1.33006 3.70552C1.41447 3.07773 1.60014 2.51093 2.05561 2.05546C2.51108 1.59999 3.07788 1.41432 3.70567 1.32991C4.30044 1.24995 5.04965 1.24997 5.94812 1.25H5.94815H7.05215H7.05218C7.95065 1.24997 8.69986 1.24995 9.29463 1.32991Z',
  d4: 'M9.29365 1.32967C9.92145 1.41407 10.4882 1.59974 10.9437 2.05522C11.3992 2.51068 11.5849 3.07748 11.6693 3.70528C11.7492 4.30005 11.7492 5.04926 11.7492 5.94773V5.94776L11.7492 8.99976C11.7492 9.96377 11.7508 10.6113 11.8157 11.0944C11.8778 11.5558 11.985 11.7533 12.1153 11.8836C12.2456 12.014 12.4431 12.1212 12.9046 12.1832C13.3876 12.2482 14.0352 12.2498 14.9992 12.2498L18.0512 12.2498H18.0512C18.9497 12.2497 19.6989 12.2497 20.2937 12.3297C20.9214 12.4141 21.4882 12.5997 21.9437 13.0552C22.3992 13.5107 22.5849 14.0775 22.6693 14.7053C22.7492 15.3001 22.7492 16.0493 22.7492 16.9478V18.0518C22.7492 18.9502 22.7492 19.6995 22.6693 20.2942C22.5849 20.922 22.3992 21.4888 21.9437 21.9443C21.4882 22.3998 20.9214 22.5854 20.2937 22.6698C19.6989 22.7498 18.9496 22.7498 18.0512 22.7498H10.656L10.5352 22.7498C9.83657 22.7505 9.28367 22.751 8.77522 22.5404C8.26677 22.3298 7.87619 21.9385 7.38267 21.444L7.38266 21.444L7.29727 21.3585L2.64042 16.7017L2.5549 16.6163C2.06044 16.1227 1.66911 15.7322 1.45851 15.2237C1.2479 14.7153 1.24843 14.1624 1.2491 13.4638L1.24917 13.3429L1.24917 5.94776C1.24914 5.04928 1.24912 4.30006 1.32908 3.70528C1.41349 3.07748 1.59916 2.51069 2.05463 2.05522C2.5101 1.59974 3.0769 1.41407 3.70469 1.32967C4.29947 1.2497 5.04868 1.24973 5.94714 1.24976H5.94718H7.05117H7.0512C7.94967 1.24973 8.69888 1.2497 9.29365 1.32967Z',
  d5: 'M10.9421 1.9834H1.96993C1.96442 1.9834 1.95996 1.98787 1.95996 1.99339V14.9904L8.94321 21.9883H21.9485C21.954 21.9883 21.9585 21.9838 21.9585 21.9783V13.0141C21.9585 13.0086 21.954 13.0041 21.9485 13.0041H10.9521V1.99339C10.9521 1.98787 10.9476 1.9834 10.9421 1.9834Z',
  d6: 'M1.24902 1.25H11.749V12.25H22.749V22.75H8.68836L1.24902 15.3107V1.25Z',
} as const;

export const IconJoinBevelStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="join-bevel-stroke-rounded IconJoinBevelStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJoinBevelDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="join-bevel-duotone-rounded IconJoinBevelDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJoinBevelTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="join-bevel-twotone-rounded IconJoinBevelTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconJoinBevelSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="join-bevel-solid-rounded IconJoinBevelSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJoinBevelBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="join-bevel-bulk-rounded IconJoinBevelBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJoinBevelStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="join-bevel-stroke-sharp IconJoinBevelStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconJoinBevelSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="join-bevel-solid-sharp IconJoinBevelSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfJoinBevel: TheIconSelfPack = {
  name: 'JoinBevel',
  StrokeRounded: IconJoinBevelStrokeRounded,
  DuotoneRounded: IconJoinBevelDuotoneRounded,
  TwotoneRounded: IconJoinBevelTwotoneRounded,
  SolidRounded: IconJoinBevelSolidRounded,
  BulkRounded: IconJoinBevelBulkRounded,
  StrokeSharp: IconJoinBevelStrokeSharp,
  SolidSharp: IconJoinBevelSolidSharp,
};