import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.3584 13.3567C19.1689 14.546 16.9308 14.4998 13.4992 14.4998C11.2914 14.4998 9.50138 12.7071 9.50024 10.4993C9.50024 7.07001 9.454 4.83065 10.6435 3.64138C11.8329 2.45212 12.3583 2.50027 17.6274 2.50027C18.1366 2.49809 18.3929 3.11389 18.0329 3.47394L15.3199 6.18714C14.6313 6.87582 14.6294 7.99233 15.3181 8.68092C16.0068 9.36952 17.1234 9.36959 17.8122 8.68109L20.5259 5.96855C20.886 5.60859 21.5019 5.86483 21.4997 6.37395C21.4997 11.6422 21.5479 12.1675 20.3584 13.3567Z',
  d2: 'M13.5 14.5L7.32842 20.6716C6.22386 21.7761 4.433 21.7761 3.32843 20.6716C2.22386 19.567 2.22386 17.7761 3.32843 16.6716L9.5 10.5',
  d3: 'M5.50896 18.5H5.5',
  d4: 'M21.0133 13.5115C19.7247 14.7998 17.3001 14.7497 13.5824 14.7497C11.1907 14.7497 9.25149 12.8077 9.25026 10.4159C9.25026 6.70085 9.20016 4.27487 10.4887 2.9865C11.7773 1.69813 12.3464 1.75029 18.0547 1.75029C18.6063 1.74793 18.8839 2.41505 18.4939 2.80511L15.5549 5.7444C14.8089 6.49048 14.8068 7.70002 15.5529 8.446C16.299 9.19198 17.5086 9.19206 18.2548 8.44618L21.1947 5.5076C21.5848 5.11764 22.2521 5.39523 22.2497 5.94678C22.2497 11.6541 22.3018 12.2231 21.0133 13.5115Z',
  d5: 'M12.4964 16.3635C12.5334 16.5252 12.3515 16.707 11.9878 17.0707L7.85876 21.1998C6.46129 22.5973 4.19556 22.5972 2.7981 21.1998C1.40063 19.8023 1.40063 17.5366 2.7981 16.1391L6.92806 12.0092C7.29162 11.6456 7.47341 11.4638 7.63513 11.5008C7.79685 11.5378 7.88945 11.8032 8.07463 12.3341C8.65922 14.01 9.98645 15.3389 11.6626 15.9238C12.1938 16.1091 12.4594 16.2018 12.4964 16.3635ZM5.49442 17.25C4.80715 17.25 4.25 17.8096 4.25 18.5C4.25 19.1904 4.80715 19.75 5.49442 19.75H5.50558C6.19285 19.75 6.75 19.1904 6.75 18.5C6.75 17.8096 6.19285 17.25 5.50558 17.25H5.49442Z',
  d6: 'M11.9878 17.0707C12.3515 16.707 12.5334 16.5252 12.4964 16.3635C12.4594 16.2018 12.1938 16.1091 11.6626 15.9238C9.98645 15.3389 8.65922 14.01 8.07463 12.3341C7.88945 11.8032 7.79685 11.5378 7.63513 11.5008C7.47341 11.4638 7.29162 11.6456 6.92806 12.0092L2.7981 16.1391C1.40063 17.5366 1.40063 19.8023 2.7981 21.1998C4.19556 22.5972 6.46129 22.5973 7.85876 21.1998L11.9878 17.0707Z',
  d7: 'M4.25 18.5C4.25 17.8096 4.80715 17.25 5.49442 17.25H5.50558C6.19285 17.25 6.75 17.8096 6.75 18.5C6.75 19.1904 6.19285 19.75 5.50558 19.75H5.49442C4.80715 19.75 4.25 19.1904 4.25 18.5Z',
  d8: 'M6.50243 17.4971L6.49609 17.5034',
  d9: 'M6.53145 21.4957C6.52756 21.4996 6.52126 21.4997 6.51734 21.4958L2.49907 17.5292C2.49513 17.5253 2.4951 17.5189 2.49901 17.515L9.74034 10.2469C8.77141 6.85634 10.7044 3.93772 13.2977 2.9258C14.8604 2.31602 16.6643 2.3761 17.9917 3.01986C17.5364 3.48022 16.8871 4.09505 16.3054 4.68145C15.6913 5.3006 15.0716 5.89067 14.7531 6.29192C13.3917 8.48441 15.9136 10.434 17.6375 9.27594C17.9219 9.08493 18.3556 8.57712 18.8641 8.09065C19.5963 7.39024 20.2333 6.7218 20.9465 6.01509C21.6586 7.67186 21.6489 9.33041 21.0551 10.7508C20.4803 12.126 19.3536 13.2789 18.0591 13.9344C16.7378 14.3924 15.4276 14.7886 13.753 14.259L6.53145 21.4957Z',
  d10: 'M15.4975 1.75C11.7696 1.75 8.74747 4.77208 8.74747 8.5C8.74747 9.02143 8.80674 9.52982 8.91913 10.0185L1.96772 16.9699C1.67482 17.2628 1.67482 17.7377 1.96772 18.0305L5.96771 22.0306C6.10837 22.1712 6.29913 22.2502 6.49804 22.2502C6.69696 22.2502 6.88772 22.1712 7.02837 22.0306L13.9803 15.0786C14.4685 15.1908 14.9765 15.25 15.4975 15.25C19.2254 15.25 22.2475 12.2279 22.2475 8.5C22.2475 7.50515 22.0318 6.55864 21.6439 5.7064L21.1958 4.722L17.4593 8.45794C16.9288 8.98831 16.0688 8.98812 15.5386 8.45753C15.0093 7.92791 15.0086 7.06983 15.537 6.53935L19.2661 2.7955L18.2813 2.34916C17.4316 1.96405 16.4885 1.75 15.4975 1.75ZM6.4982 18.9168L7.91875 17.4962L6.50453 16.082L5.08398 17.5026L6.4982 18.9168Z',
} as const;

export const IconWrench01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wrench-01-stroke-rounded IconWrench01StrokeRounded"
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
        strokeLinecap="round" 
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

export const IconWrench01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wrench-01-duotone-rounded IconWrench01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconWrench01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wrench-01-twotone-rounded IconWrench01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconWrench01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wrench-01-solid-rounded IconWrench01SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWrench01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wrench-01-bulk-rounded IconWrench01BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWrench01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wrench-01-stroke-sharp IconWrench01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWrench01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wrench-01-solid-sharp IconWrench01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWrench01: TheIconSelfPack = {
  name: 'Wrench01',
  StrokeRounded: IconWrench01StrokeRounded,
  DuotoneRounded: IconWrench01DuotoneRounded,
  TwotoneRounded: IconWrench01TwotoneRounded,
  SolidRounded: IconWrench01SolidRounded,
  BulkRounded: IconWrench01BulkRounded,
  StrokeSharp: IconWrench01StrokeSharp,
  SolidSharp: IconWrench01SolidSharp,
};