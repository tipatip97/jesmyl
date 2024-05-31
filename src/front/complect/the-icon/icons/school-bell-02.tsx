import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.53206 10.7812L7.45047 10.9004C6.66553 12.0476 5.36503 12.7336 3.97498 12.7336H3.88C3.09757 12.7336 2.70573 13.6796 3.25899 14.2328L9.76716 20.741C10.3204 21.2943 11.2664 20.9024 11.2664 20.12V20.025C11.2664 18.635 11.9524 17.3345 13.0996 16.5495L13.2188 16.4679C15.333 15.0214 15.6129 12.0098 13.8015 10.1985C11.9902 8.38708 8.9786 8.66698 7.53206 10.7812Z',
  d2: 'M19 17C18.8181 17.9846 18.3439 18.9124 17.5729 19.6565C16.8473 20.3569 15.9531 20.8035 15 21',
  d3: 'M7 5C6.03843 5.20541 5.13629 5.67226 4.40427 6.40427C3.67226 7.13629 3.20541 8.03842 3 9',
  d4: 'M13 8.80238L16.8892 3.87603C17.7435 2.79398 19.3506 2.69977 20.3254 3.67459C21.3002 4.64942 21.206 6.25653 20.124 7.11077L15.1976 11',
  d5: 'M8 19.3137C7.08494 20.2288 5.60135 20.2288 4.68629 19.3137C3.77124 18.3987 3.77124 16.9151 4.68629 16',
  d6: 'M20.8756 6.36075C21.9576 5.5065 22.0518 3.8994 21.077 2.92457C20.1022 1.94974 18.4951 2.04395 17.6408 3.126L14.387 7.24756C14.2563 7.41307 14.191 7.49582 14.204 7.58161C14.217 7.66739 14.3081 7.72997 14.4903 7.85513C14.8077 8.07308 15.1104 8.32373 15.3942 8.60748C15.6779 8.89122 15.9285 9.19396 16.1465 9.51127L16.1465 9.51127C16.2716 9.6935 16.3342 9.78461 16.42 9.7976C16.5058 9.8106 16.5885 9.74527 16.754 9.6146L20.8756 6.36075ZM6.91458 10.3577C8.6263 7.85593 12.1899 7.52473 14.3334 9.66817C16.4768 11.8116 16.1456 15.3752 13.6439 17.087L13.5246 17.1685C12.5817 17.8137 12.0179 18.8826 12.0179 20.0251V20.12C12.0179 21.5706 10.2641 22.2971 9.23834 21.2714L2.73017 14.7632C1.70443 13.7375 2.4309 11.9836 3.88151 11.9836H3.97648C5.11897 11.9836 6.18785 11.4198 6.83299 10.4769L6.91458 10.3577ZM3.51527 17.4569C3.06269 18.304 3.19352 19.3807 3.90775 20.0949C4.62199 20.8091 5.69871 20.94 6.54574 20.4874C6.65625 20.4283 6.67 20.2804 6.58141 20.1918L3.81084 17.4213C3.72224 17.3327 3.57432 17.3464 3.51527 17.4569Z',
  d7: 'M20.1819 15.0168C20.725 15.1172 21.0839 15.6388 20.9836 16.1819C20.7651 17.3642 20.1937 18.4823 19.2676 19.3762C18.397 20.2165 17.3284 20.7474 16.2021 20.9796C15.6612 21.0911 15.1323 20.743 15.0208 20.2021C14.9093 19.6612 15.2574 19.1323 15.7983 19.0208C16.5782 18.86 17.2981 18.4975 17.8786 17.9372C18.4944 17.3429 18.8715 16.6053 19.0168 15.8185C19.1172 15.2754 19.6388 14.9165 20.1819 15.0168Z',
  d8: 'M8.97814 3.79131C9.09352 4.33141 8.74921 4.86277 8.20911 4.97814C7.42701 5.14521 6.70061 5.52256 6.11159 6.11159C5.52256 6.70061 5.14521 7.42701 4.97814 8.20911C4.86277 8.74921 4.3314 9.09352 3.79131 8.97814C3.25121 8.86277 2.9069 8.33141 3.02227 7.79131C3.26601 6.65025 3.82237 5.57238 4.69737 4.69737C5.57238 3.82237 6.65025 3.26601 7.79131 3.02227C8.33141 2.9069 8.86277 3.25121 8.97814 3.79131Z',
  d9: 'M6.91458 10.3577C8.6263 7.85593 12.1899 7.52473 14.3334 9.66817C16.4768 11.8116 16.1456 15.3752 13.6439 17.087L13.5246 17.1685C12.5817 17.8137 12.0179 18.8826 12.0179 20.0251V20.12C12.0179 21.5706 10.2641 22.2971 9.23834 21.2714L2.73017 14.7632C1.70443 13.7375 2.4309 11.9836 3.88151 11.9836H3.97648C5.11897 11.9836 6.18785 11.4198 6.83299 10.4769L6.91458 10.3577Z',
  d10: 'M20.8764 6.36077C21.9584 5.50653 22.0526 3.89942 21.0778 2.92459C20.103 1.94977 18.4959 2.04398 17.6416 3.12603L14.3877 7.24759C14.2571 7.41309 14.1918 7.49585 14.2047 7.58163C14.2177 7.66742 14.3089 7.73 14.4911 7.85515C14.8084 8.0731 15.1112 8.32375 15.3949 8.60751C15.6787 8.89124 15.9293 9.19398 16.1473 9.51129C16.2724 9.69352 16.335 9.78463 16.4208 9.79762C16.5066 9.81062 16.5893 9.74529 16.7548 9.61463L20.8764 6.36077Z',
  d11: 'M3.90775 20.0949C3.19352 19.3807 3.06269 18.304 3.51527 17.4569C3.57432 17.3464 3.72224 17.3327 3.81084 17.4213L6.58141 20.1918C6.67 20.2804 6.65625 20.4283 6.54574 20.4874C5.69871 20.94 4.62199 20.8091 3.90775 20.0949Z',
  d12: 'M2.50195 12.4112L11.5908 21.5L14.9062 15.5323C15.9325 13.6849 15.6098 11.3809 14.1154 9.8865C12.6211 8.39212 10.3171 8.06944 8.46966 9.09578L2.50195 12.4112Z',
  d13: 'M19.502 16.5C19.32 17.4846 18.8458 18.4124 18.0749 19.1565C17.3493 19.8569 16.4551 20.3035 15.502 20.5',
  d14: 'M7.50195 4.5C6.54038 4.70541 5.63824 5.17226 4.90623 5.90427C4.17421 6.63629 3.70736 7.53842 3.50195 8.5',
  d15: 'M13.002 8.80238L17.391 3.37603C18.2453 2.29398 19.8524 2.19977 20.8272 3.17459C21.802 4.14942 21.7078 5.75653 20.6258 6.61077L15.1996 11',
  d16: 'M6.91226 19.9144C6.13121 20.6954 4.86488 20.6954 4.08383 19.9144C3.30278 19.1333 3.30278 17.867 4.08383 17.0859',
  d17: 'M8.10348 8.44018C10.2436 7.25122 12.9127 7.62502 14.6438 9.35619C16.375 11.0874 16.7488 13.7564 15.5598 15.8965L12.2444 21.8643C12.1302 22.07 11.9259 22.2101 11.6929 22.2428C11.4598 22.2754 11.2249 22.1968 11.0585 22.0304L1.96968 12.9415C1.80326 12.7751 1.72461 12.5402 1.75726 12.3072C1.7899 12.0741 1.93005 11.8699 2.13577 11.7556L8.10348 8.44018Z',
  d18: 'M20.2366 16.6363C20.0273 17.7692 19.4802 18.8397 18.5929 19.6962C17.7585 20.5015 16.7336 21.0113 15.6506 21.2346L15.3477 19.7655C16.1709 19.5958 16.9343 19.2123 17.5512 18.6169C18.2057 17.9852 18.6071 17.2 18.7616 16.3638L20.2366 16.6363Z',
  d19: 'M7.65575 5.23351C6.82879 5.41016 6.05846 5.80988 5.43368 6.43466C4.80891 7.05943 4.40918 7.82976 4.23253 8.65673L2.76562 8.34338C2.99979 7.24719 3.53376 6.21326 4.37302 5.374C5.21228 4.53474 6.24622 4.00076 7.3424 3.7666L7.65575 5.23351Z',
  d20: 'M7.44064 20.4448C6.3667 21.5187 4.62549 21.5187 3.55155 20.4448C2.47761 19.3708 2.47761 17.6296 3.55155 16.5557L7.44064 20.4448Z',
  d21: 'M21.3572 2.64427C20.0661 1.35311 17.9382 1.47667 16.805 2.90759L13.4492 7.05645C14.2094 7.38616 14.9172 7.86013 15.5294 8.47234C16.1416 9.08451 16.6155 9.7922 16.9452 10.5524L21.0939 7.19651C22.5248 6.06333 22.6484 3.93544 21.3572 2.64427Z',
} as const;

export const IconSchoolBell02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-bell-02-stroke-rounded IconSchoolBell02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSchoolBell02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-bell-02-duotone-rounded IconSchoolBell02DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSchoolBell02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-bell-02-twotone-rounded IconSchoolBell02TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconSchoolBell02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-bell-02-solid-rounded IconSchoolBell02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSchoolBell02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-bell-02-bulk-rounded IconSchoolBell02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSchoolBell02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-bell-02-stroke-sharp IconSchoolBell02StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSchoolBell02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-bell-02-solid-sharp IconSchoolBell02SolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSchoolBell02: TheIconSelfPack = {
  name: 'SchoolBell02',
  StrokeRounded: IconSchoolBell02StrokeRounded,
  DuotoneRounded: IconSchoolBell02DuotoneRounded,
  TwotoneRounded: IconSchoolBell02TwotoneRounded,
  SolidRounded: IconSchoolBell02SolidRounded,
  BulkRounded: IconSchoolBell02BulkRounded,
  StrokeSharp: IconSchoolBell02StrokeSharp,
  SolidSharp: IconSchoolBell02SolidSharp,
};