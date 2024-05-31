import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 11.5C18 11.5 13.5811 5.50001 12 5.5C10.4188 5.49999 6 11.5 6 11.5',
  d2: 'M18 18.5C18 18.5 13.5811 12.5 12 12.5C10.4188 12.5 6 18.5 6 18.5',
  d3: 'M17.195 12.093C17.1634 12.0507 17.0699 11.9251 17.0093 11.8449C16.8881 11.6844 16.7125 11.4543 16.4967 11.1777C16.0643 10.6236 15.474 9.88813 14.838 9.1556C14.1977 8.4181 13.5306 7.70637 12.9426 7.18687C12.6475 6.92612 12.3958 6.73487 12.1957 6.61422C12.1004 6.55675 12.0364 6.52738 12.0002 6.51266C11.964 6.52738 11.9001 6.55675 11.8047 6.61423C11.6046 6.73488 11.3529 6.92613 11.0578 7.18688C10.4699 7.70638 9.8027 8.4181 9.16237 9.1556C8.52635 9.88812 7.93611 10.6236 7.50367 11.1777C7.28786 11.4542 6.92657 11.9325 6.80535 12.093C6.47784 12.5377 5.85184 12.6327 5.40715 12.3051C4.96245 11.9776 4.86786 11.3511 5.19538 10.9064L5.19772 10.9033C5.32665 10.7326 5.70518 10.2314 5.92699 9.94723C6.3725 9.37636 6.98582 8.61183 7.65218 7.84437C8.31421 7.08187 9.04825 6.29361 9.73354 5.68811C10.075 5.38637 10.428 5.10888 10.7722 4.9014C11.0889 4.71046 11.5241 4.5 12.0002 4.5C12.4764 4.5 12.9116 4.71046 13.2283 4.90139C13.5725 5.10887 13.9254 5.38637 14.2669 5.68811C14.9522 6.29362 15.6862 7.08189 16.3482 7.84439C17.0146 8.61186 17.6279 9.3764 18.0734 9.94727C18.2966 10.2332 18.4786 10.4718 18.6052 10.6395C18.668 10.7226 18.7693 10.8585 18.8041 10.9052L18.805 10.9065C19.1325 11.3511 19.0379 11.9777 18.5932 12.3052C18.1485 12.6327 17.5225 12.5377 17.195 12.093Z',
  d4: 'M18.8926 18.9511C18.7225 19.2878 18.3773 19.5 18.0001 19.5L6.00015 19.5C5.62294 19.5 5.27783 19.2877 5.10768 18.9511C4.93752 18.6144 4.97127 18.2107 5.19496 17.9069L5.19686 17.9044C5.2326 17.8564 5.33296 17.7218 5.39516 17.6394C5.52178 17.4718 5.7038 17.2332 5.92697 16.9472C6.37249 16.3764 6.98581 15.6118 7.65216 14.8444C8.3142 14.0819 9.04823 13.2936 9.73352 12.6881C10.075 12.3864 10.428 12.1089 10.7721 11.9014C11.0889 11.7105 11.5241 11.5 12.0002 11.5C12.4763 11.5 12.9115 11.7105 13.2282 11.9014C13.5724 12.1089 13.9254 12.3864 14.2669 12.6881C14.9521 13.2936 15.6862 14.0819 16.3482 14.8444C17.0145 15.6119 17.6278 16.3764 18.0734 16.9473C18.2965 17.2332 18.4785 17.4718 18.6052 17.6395C18.6679 17.7226 18.7692 17.8585 18.804 17.9052L18.8049 17.9065C19.0286 18.2102 19.0628 18.6145 18.8926 18.9511Z',
  d5: 'M6 11.5L12 5.5L18 11.5',
  d6: 'M6 18.5L12 12.5L18 18.5',
  d7: 'M19 11.1554L17.5858 12.5L12 7.1892L6.4142 12.5L5 11.1554L12.0001 4.5L19 11.1554Z',
  d8: 'M19 18.1554L17.5858 19.5L12 14.1892L6.4142 19.5L5 18.1554L12.0001 11.5L19 18.1554Z',
} as const;

export const IconArrowUpDoubleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-double-stroke-rounded IconArrowUpDoubleStrokeRounded"
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

export const IconArrowUpDoubleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-double-duotone-rounded IconArrowUpDoubleDuotoneRounded"
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

export const IconArrowUpDoubleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-double-twotone-rounded IconArrowUpDoubleTwotoneRounded"
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

export const IconArrowUpDoubleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-double-solid-rounded IconArrowUpDoubleSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowUpDoubleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-double-bulk-rounded IconArrowUpDoubleBulkRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowUpDoubleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-double-stroke-sharp IconArrowUpDoubleStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowUpDoubleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-double-solid-sharp IconArrowUpDoubleSolidSharp"
    >
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

export const iconPackOfArrowUpDouble: TheIconSelfPack = {
  name: 'ArrowUpDouble',
  StrokeRounded: IconArrowUpDoubleStrokeRounded,
  DuotoneRounded: IconArrowUpDoubleDuotoneRounded,
  TwotoneRounded: IconArrowUpDoubleTwotoneRounded,
  SolidRounded: IconArrowUpDoubleSolidRounded,
  BulkRounded: IconArrowUpDoubleBulkRounded,
  StrokeSharp: IconArrowUpDoubleStrokeSharp,
  SolidSharp: IconArrowUpDoubleSolidSharp,
};