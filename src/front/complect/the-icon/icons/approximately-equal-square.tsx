import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 9.28466C8.66667 7.2854 10.3333 7.87052 12 9.33333C13.6667 10.7961 15.3333 11.3813 17 9.382M7 14.618C8.66667 12.6187 10.3333 13.2039 12 14.6667C13.6667 16.1295 15.3333 16.7146 17 14.7153',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM7.76813 9.92518C8.45522 9.10097 8.99032 8.96696 9.40538 9.00642C9.91599 9.05497 10.5497 9.39113 11.3404 10.0851C12.2164 10.8539 13.2493 11.5417 14.4054 11.6517C15.657 11.7706 16.7886 11.1976 17.7681 10.0225C18.1218 9.59831 18.0646 8.96773 17.6403 8.61409C17.2161 8.26045 16.5856 8.31766 16.2319 8.74187C15.5448 9.56608 15.0097 9.70009 14.5947 9.66063C14.0841 9.61209 13.4504 9.27592 12.6597 8.58195C11.7837 7.81311 10.7507 7.12531 9.59467 7.0154C8.34307 6.89641 7.21149 7.46948 6.23192 8.64453C5.87828 9.06875 5.93549 9.69932 6.3597 10.053C6.78392 10.4066 7.41449 10.3494 7.76813 9.92518ZM7.76813 15.2585C8.45522 14.4343 8.99032 14.3003 9.40538 14.3398C9.91599 14.3883 10.5497 14.7245 11.3404 15.4184C12.2164 16.1873 13.2493 16.8751 14.4054 16.985C15.657 17.104 16.7886 16.5309 17.7681 15.3559C18.1218 14.9316 18.0646 14.3011 17.6403 13.9474C17.2161 13.5938 16.5856 13.651 16.2319 14.0752C15.5448 14.8994 15.0097 15.0334 14.5947 14.994C14.0841 14.9454 13.4504 14.6093 12.6597 13.9153C11.7837 13.1464 10.7507 12.4586 9.59467 12.3487C8.34307 12.2297 7.21149 12.8028 6.23192 13.9779C5.87828 14.4021 5.93549 15.0327 6.3597 15.3863C6.78392 15.7399 7.41449 15.6827 7.76813 15.2585Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M9.40538 9.00642C8.99032 8.96696 8.45522 9.10097 7.76813 9.92518C7.41449 10.3494 6.78392 10.4066 6.3597 10.053C5.93549 9.69932 5.87828 9.06875 6.23192 8.64453C7.21149 7.46948 8.34307 6.89641 9.59467 7.0154C10.7507 7.12531 11.7837 7.81311 12.6597 8.58195C13.4504 9.27592 14.0841 9.61209 14.5947 9.66063C15.0097 9.70009 15.5448 9.56608 16.2319 8.74187C16.5856 8.31766 17.2161 8.26045 17.6403 8.61409C18.0646 8.96773 18.1218 9.59831 17.7681 10.0225C16.7886 11.1976 15.657 11.7706 14.4054 11.6517C13.2493 11.5417 12.2164 10.8539 11.3404 10.0851C10.5497 9.39113 9.91599 9.05497 9.40538 9.00642ZM9.40538 14.3398C8.99032 14.3003 8.45522 14.4343 7.76813 15.2585C7.41449 15.6827 6.78392 15.7399 6.3597 15.3863C5.93549 15.0327 5.87828 14.4021 6.23192 13.9779C7.21149 12.8028 8.34307 12.2297 9.59467 12.3487C10.7507 12.4586 11.7837 13.1464 12.6597 13.9153C13.4504 14.6093 14.0841 14.9454 14.5947 14.994C15.0097 15.0334 15.5448 14.8994 16.2319 14.0752C16.5856 13.651 17.2161 13.5938 17.6403 13.9474C18.0646 14.3011 18.1218 14.9316 17.7681 15.3559C16.7886 16.5309 15.657 17.104 14.4054 16.985C13.2493 16.8751 12.2164 16.1873 11.3404 15.4184C10.5497 14.7245 9.91599 14.3883 9.40538 14.3398Z',
  d6: 'M3 21H21V3.00046L3 3V21Z',
  d7: 'M3.00002 2.25C2.8011 2.24999 2.61033 2.32901 2.46968 2.46966C2.32902 2.61032 2.25 2.80108 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3.00046C21.75 2.58626 21.4142 2.25047 21 2.25046L3.00002 2.25ZM7.76863 9.92518C8.45573 9.10097 8.99082 8.96696 9.40589 9.00642C9.91649 9.05497 10.5502 9.39113 11.3409 10.0851C12.2169 10.8539 13.2498 11.5417 14.4059 11.6517C15.6575 11.7706 16.7891 11.1976 17.7686 10.0225L16.2324 8.74187C15.5453 9.56608 15.0102 9.70009 14.5952 9.66063C14.0846 9.61209 13.4509 9.27592 12.6602 8.58195C11.7842 7.81311 10.7512 7.12531 9.59517 7.0154C8.34357 6.89641 7.212 7.46948 6.23242 8.64453L7.76863 9.92518ZM7.76863 15.2585C8.45573 14.4343 8.99082 14.3003 9.40589 14.3398C9.91649 14.3883 10.5502 14.7245 11.3409 15.4184C12.2169 16.1873 13.2498 16.8751 14.4059 16.985C15.6575 17.104 16.7891 16.5309 17.7686 15.3559L16.2324 14.0752C15.5453 14.8994 15.0102 15.0334 14.5952 14.994C14.0846 14.9454 13.4509 14.6093 12.6602 13.9153C11.7842 13.1464 10.7512 12.4586 9.59517 12.3487C8.34357 12.2297 7.212 12.8028 6.23242 13.9779L7.76863 15.2585Z',
} as const;

export const IconApproximatelyEqualSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="approximately-equal-square-stroke-rounded IconApproximatelyEqualSquareStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconApproximatelyEqualSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="approximately-equal-square-duotone-rounded IconApproximatelyEqualSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconApproximatelyEqualSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="approximately-equal-square-twotone-rounded IconApproximatelyEqualSquareTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconApproximatelyEqualSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="approximately-equal-square-solid-rounded IconApproximatelyEqualSquareSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconApproximatelyEqualSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="approximately-equal-square-bulk-rounded IconApproximatelyEqualSquareBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconApproximatelyEqualSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="approximately-equal-square-stroke-sharp IconApproximatelyEqualSquareStrokeSharp"
    >
      <path 
        d={d.d1} 
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

export const IconApproximatelyEqualSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="approximately-equal-square-solid-sharp IconApproximatelyEqualSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfApproximatelyEqualSquare: TheIconSelfPack = {
  name: 'ApproximatelyEqualSquare',
  StrokeRounded: IconApproximatelyEqualSquareStrokeRounded,
  DuotoneRounded: IconApproximatelyEqualSquareDuotoneRounded,
  TwotoneRounded: IconApproximatelyEqualSquareTwotoneRounded,
  SolidRounded: IconApproximatelyEqualSquareSolidRounded,
  BulkRounded: IconApproximatelyEqualSquareBulkRounded,
  StrokeSharp: IconApproximatelyEqualSquareStrokeSharp,
  SolidSharp: IconApproximatelyEqualSquareSolidSharp,
};