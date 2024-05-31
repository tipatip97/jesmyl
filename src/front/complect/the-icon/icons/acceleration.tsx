import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.49805 18.4138V11.1909C2.49805 9.86228 2.49805 9.19798 3.09674 9.03265C3.69542 8.86733 4.40002 9.33706 5.80922 10.2765L18.5832 18.7926C19.9924 19.732 20.697 20.2018 20.449 20.6009C20.201 21 19.2046 21 17.2117 21H6.37733C4.54862 21 3.63426 21 3.06616 20.6213C2.49805 20.2425 2.49805 19.633 2.49805 18.4138Z',
  d2: 'M8.49805 11C10.7072 11 12.498 9.20914 12.498 7C12.498 4.79086 10.7072 3 8.49805 3C6.28891 3 4.49805 4.79086 4.49805 7C4.49805 9.20914 6.28891 11 8.49805 11Z',
  d3: 'M15.502 9.99609L21.4055 13.3801M21.4055 13.3801C21.7255 13.0406 21.1848 12.0601 20.7283 10.7281M21.4055 13.3801C21.1848 13.6201 20.4639 13.6801 18.7639 13.9981',
  d4: 'M2.5 18.4138V11.1909C2.5 9.86228 2.5 9.19798 3.09869 9.03265C3.69737 8.86733 4.40197 9.33706 5.81117 10.2765L18.5852 18.7926C19.9944 19.732 20.699 20.2018 20.451 20.6009C20.203 21 19.2066 21 17.2137 21H6.37928C4.55057 21 3.63621 21 3.06811 20.6213C2.5 20.2425 2.5 19.633 2.5 18.4138Z',
  d5: 'M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z',
  d6: 'M15.5 9.99902L21.4035 13.383M21.4035 13.383C21.7235 13.0435 21.1828 12.063 20.7263 10.731M21.4035 13.383C21.1828 13.623 20.4619 13.683 18.7619 14.001',
  d7: 'M15.5 9.99609L21.4035 13.3801M21.4035 13.3801C21.7235 13.0406 21.1828 12.0601 20.7263 10.7281M21.4035 13.3801C21.1828 13.6201 20.4619 13.6801 18.7619 13.9981',
  d8: 'M19.0534 18.7035C19.7136 19.1435 20.2767 19.5189 20.637 19.8382C20.8183 19.9989 21.0228 20.208 21.1428 20.467C21.2882 20.7807 21.3001 21.1556 21.0881 21.4969C20.9014 21.7973 20.6152 21.9529 20.3699 22.0392C20.1252 22.1254 19.8443 22.1699 19.5571 22.197C18.9925 22.2502 18.2169 22.2502 17.2576 22.2502H17.2575H6.3425H6.34245C5.45936 22.2502 4.74582 22.2502 4.18404 22.1998C3.61413 22.1487 3.09283 22.0393 2.65211 21.7455C2.17028 21.4242 1.9376 20.9857 1.83584 20.4811C1.74978 20.0544 1.74989 19.5319 1.75002 18.9771L1.75001 11.6171C1.74986 11.0172 1.74971 10.4513 1.84118 10.0201C1.89195 9.78076 1.98237 9.51744 2.16469 9.28727C2.3585 9.04259 2.61358 8.88872 2.89908 8.80988C3.47109 8.65192 4.00864 8.83004 4.48721 9.07004C4.95606 9.30516 5.51651 9.67882 6.18566 10.1249L19.0534 18.7035L19.0534 18.7035Z',
  d9: 'M8.5 3.75C6.84315 3.75 5.5 5.09315 5.5 6.75C5.5 8.40685 6.84315 9.75 8.5 9.75C10.1569 9.75 11.5 8.40685 11.5 6.75C11.5 5.09315 10.1569 3.75 8.5 3.75ZM3.5 6.75C3.5 3.98858 5.73858 1.75 8.5 1.75C11.2614 1.75 13.5 3.98858 13.5 6.75C13.5 9.51142 11.2614 11.75 8.5 11.75C5.73858 11.75 3.5 9.51142 3.5 6.75Z',
  d10: 'M14.3766 10.0135C14.6454 9.53103 15.2544 9.35781 15.7369 9.6266L19.1312 11.5176L19.611 10.7157C19.7242 10.5246 19.9014 10.3699 20.1262 10.2873C20.6446 10.0969 21.2192 10.3628 21.4097 10.8812L21.9137 12.2534L21.931 12.3005C22.0346 12.582 22.1452 12.8829 22.2018 13.1444C22.2661 13.4414 22.3076 13.8848 22.0461 14.3217C21.7894 14.7509 21.3862 14.928 21.1028 15.018C20.8461 15.0995 20.5266 15.1564 20.2197 15.2111L20.1713 15.2197L18.6878 15.4846C18.1441 15.5817 17.6246 15.2196 17.5276 14.6759C17.4844 14.4343 17.532 14.1974 17.6459 14.0002L18.1039 13.2348L14.7635 11.3738C14.281 11.105 14.1078 10.496 14.3766 10.0135Z',
  d11: 'M2.49902 21.0002V9L20.499 21.0002H2.49902Z',
  d12: 'M15.0107 9.99023L20.4455 13.1764M19.9936 9.99023L21.0028 13.5031L17.5212 14.5067',
  d13: 'M2.64611 8.33874C2.88998 8.20823 3.18589 8.22254 3.41603 8.37597L21.416 20.3762C21.691 20.5595 21.8136 20.9012 21.7178 21.2175C21.622 21.5339 21.3305 21.7502 21 21.7502H3C2.58579 21.7502 2.25 21.4144 2.25 21.0002V9C2.25 8.7234 2.40224 8.46926 2.64611 8.33874Z',
  d14: 'M9 4.15C7.42599 4.15 6.15 5.42599 6.15 7C6.15 8.57401 7.42599 9.85 9 9.85C10.574 9.85 11.85 8.57401 11.85 7C11.85 5.42599 10.574 4.15 9 4.15ZM4.25 7C4.25 4.37665 6.37665 2.25 9 2.25C11.6234 2.25 13.75 4.37665 13.75 7C13.75 9.62335 11.6234 11.75 9 11.75C6.37665 11.75 4.25 9.62335 4.25 7Z',
  d15: 'M15.0175 9.13574L18.8687 11.3823L18.5521 10.2742L20.4752 9.7248L21.7499 14.1863L17.2884 15.461L16.7389 13.538L17.9848 13.182L14.0098 10.8633L15.0175 9.13574Z',
} as const;

export const IconAccelerationStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="acceleration-stroke-rounded IconAccelerationStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAccelerationDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="acceleration-duotone-rounded IconAccelerationDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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

export const IconAccelerationTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="acceleration-twotone-rounded IconAccelerationTwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAccelerationSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="acceleration-solid-rounded IconAccelerationSolidRounded"
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAccelerationBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="acceleration-bulk-rounded IconAccelerationBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconAccelerationStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="acceleration-stroke-sharp IconAccelerationStrokeSharp"
    >
      <path 
        d={d.d11} 
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
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAccelerationSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="acceleration-solid-sharp IconAccelerationSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAcceleration: TheIconSelfPack = {
  name: 'Acceleration',
  StrokeRounded: IconAccelerationStrokeRounded,
  DuotoneRounded: IconAccelerationDuotoneRounded,
  TwotoneRounded: IconAccelerationTwotoneRounded,
  SolidRounded: IconAccelerationSolidRounded,
  BulkRounded: IconAccelerationBulkRounded,
  StrokeSharp: IconAccelerationStrokeSharp,
  SolidSharp: IconAccelerationSolidSharp,
};