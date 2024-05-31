import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 20V7.02172C2 5.10465 2 4.00007 2.4389 4.00007C2.95995 4.00007 3.33531 4.66033 4.25033 6.27292L10.7497 17.7271C11.6647 19.3397 12.0233 20 12.5611 20C13 20 13 18.8954 13 16.9784V4',
  d2: 'M16 13L22 13',
  d3: 'M16.5806 4.58056C17.3546 3.80648 20.6454 3.80648 21.4194 4.58056C22.1935 5.35464 22.1935 8.64536 21.4194 9.41944C20.6454 10.1935 17.3546 10.1935 16.5806 9.41944C15.8065 8.64536 15.8065 5.35464 16.5806 4.58056Z',
  d4: 'M13 3C13.5523 3 14 3.44772 14 4L14 17.0397C14 17.9469 14.0001 18.7448 13.9395 19.3139C13.9097 19.594 13.8561 19.9281 13.7225 20.2171C13.5771 20.5318 13.2205 21 12.5611 21C11.7883 21 11.3035 20.4828 10.993 20.0631C10.6992 19.6661 10.3719 19.0885 9.97593 18.39L9.87993 18.2207L3.38059 6.76643C3.23887 6.51667 3.11394 6.29689 3.00238 6.10338C3.00017 6.37572 3 6.68108 3 7.02172V20C3 20.5523 2.55229 21 2 21C1.44772 21 1 20.5523 1 20V7.02172L1 6.96036V6.9603C0.999971 6.0531 0.999945 5.25528 1.06047 4.68622C1.09028 4.40605 1.14388 4.07195 1.27747 3.78299C1.42294 3.46832 1.77949 3.00007 2.4389 3.00007C3.20678 3.00007 3.69199 3.52282 3.99859 3.93406C4.31037 4.35224 4.65926 4.9672 5.08561 5.71867L5.08562 5.71868L5.12007 5.77942L11.6626 17.3098C11.7871 17.5292 11.8979 17.7245 11.9976 17.8983C11.9998 17.6256 12 17.3197 12 16.9784V4C12 3.44772 12.4477 3 13 3Z',
  d5: 'M15.5 13C15.5 12.4477 15.9477 12 16.5 12L22 12C22.5523 12 23 12.4477 23 13C23 13.5523 22.5523 14 22 14L16.5 14C15.9477 14 15.5 13.5523 15.5 13Z',
  d6: 'M20.8605 3.41348C21.3223 3.51754 21.8498 3.70029 22.1998 4.05023C22.5497 4.40017 22.7325 4.92767 22.8365 5.3895C22.948 5.88426 23 6.44925 23 7C23 7.55075 22.948 8.11574 22.8365 8.6105C22.7325 9.07233 22.5497 9.59983 22.1998 9.94977C21.8498 10.2997 21.3223 10.4825 20.8605 10.5865C20.3657 10.698 19.8007 10.75 19.25 10.75C18.6993 10.75 18.1343 10.698 17.6395 10.5865C17.1777 10.4825 16.6502 10.2997 16.3002 9.94977C15.9503 9.59983 15.7675 9.07233 15.6635 8.6105C15.552 8.11574 15.5 7.55075 15.5 7C15.5 6.44925 15.552 5.88426 15.6635 5.3895C15.7675 4.92767 15.9503 4.40017 16.3002 4.05023C16.6502 3.70029 17.1777 3.51754 17.6395 3.41348C18.1343 3.30201 18.6993 3.25 19.25 3.25C19.8007 3.25 20.3657 3.30201 20.8605 3.41348Z',
  d7: 'M2 20V4.00009L13 20V4',
  d8: 'M16.002 4.00001L22.0001 4L22.0002 10H16.0023L16.002 4.00001Z',
  d9: 'M14 3V20C14 20.438 13.7149 20.8251 13.2966 20.955C12.8783 21.0849 12.4241 20.9275 12.176 20.5665L3 7.21975V21H1V4.00009C1 3.56206 1.28507 3.17501 1.70339 3.04509C2.1217 2.91516 2.57588 3.0726 2.82404 3.43355L12 16.7803V3H14Z',
  d10: 'M15 12L23 12V14L15 14V12Z',
  d11: 'M17.002 5.00001L17.0022 9.00001H21.0002L21.0001 5L17.002 5.00001ZM16.002 3.00001L22.0001 3C22.5524 3 23.0001 3.4477 23.0001 3.99998L23.0002 9.99999C23.0002 10.2652 22.8949 10.5196 22.7073 10.7071C22.5198 10.8946 22.2654 11 22.0002 11H16.0023C15.45 11 15.0023 10.5523 15.0023 10.0001L15.002 4.00007C15.0019 3.73484 15.1073 3.48047 15.2948 3.29292C15.4824 3.10537 15.7367 3.00001 16.002 3.00001Z',
} as const;

export const IconTextNumberSignStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-number-sign-stroke-rounded IconTextNumberSignStrokeRounded"
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

export const IconTextNumberSignDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-number-sign-duotone-rounded IconTextNumberSignDuotoneRounded"
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

export const IconTextNumberSignTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-number-sign-twotone-rounded IconTextNumberSignTwotoneRounded"
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

export const IconTextNumberSignSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-number-sign-solid-rounded IconTextNumberSignSolidRounded"
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
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextNumberSignBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-number-sign-bulk-rounded IconTextNumberSignBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTextNumberSignStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-number-sign-stroke-sharp IconTextNumberSignStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextNumberSignSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-number-sign-solid-sharp IconTextNumberSignSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfTextNumberSign: TheIconSelfPack = {
  name: 'TextNumberSign',
  StrokeRounded: IconTextNumberSignStrokeRounded,
  DuotoneRounded: IconTextNumberSignDuotoneRounded,
  TwotoneRounded: IconTextNumberSignTwotoneRounded,
  SolidRounded: IconTextNumberSignSolidRounded,
  BulkRounded: IconTextNumberSignBulkRounded,
  StrokeSharp: IconTextNumberSignStrokeSharp,
  SolidSharp: IconTextNumberSignSolidSharp,
};