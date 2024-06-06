import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.18007 15.2964C5.92249 16.0335 2.62521 17.5386 4.63348 19.422C5.6145 20.342 6.7071 21 8.08077 21H15.9192C17.2929 21 18.3855 20.342 19.3665 19.422C21.3748 17.5386 18.0775 16.0335 16.8199 15.2964C13.8709 13.5679 10.1291 13.5679 7.18007 15.2964Z',
  d2: 'M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z',
  d3: 'M21.6555 8.5L22.4031 7.79549C22.801 7.4205 23 7.233 23 7C23 6.76701 22.801 6.5795 22.4031 6.2045L21.6555 5.5M22.9794 7L19 7',
  d4: 'M2.34452 8.5L1.59691 7.79549C1.19897 7.4205 1 7.233 1 7C1 6.76701 1.19897 6.5795 1.59691 6.2045L2.34452 5.5M1.02059 7L5 7',
  d5: 'M6.801 14.6493C9.98419 12.7836 14.0162 12.7836 17.1994 14.6493C17.3002 14.7084 17.4257 14.7781 17.5686 14.8574C18.2012 15.2086 19.1731 15.7481 19.8385 16.3892C20.254 16.7896 20.6635 17.3303 20.7383 18.0037C20.8184 18.7252 20.4961 19.3911 19.8798 19.9691C18.8297 20.9539 17.5618 21.75 15.9194 21.75H8.08096C6.43862 21.75 5.1707 20.9538 4.12062 19.9691C3.5043 19.3911 3.18195 18.7252 3.26207 18.0037C3.33684 17.3303 3.7464 16.7896 4.16189 16.3892C4.82728 15.7481 5.79919 15.2086 6.43183 14.8574C6.57465 14.7781 6.7002 14.7084 6.801 14.6493Z',
  d6: 'M7.25019 7C7.25019 4.37665 9.37684 2.25 12.0002 2.25C14.6235 2.25 16.7502 4.37665 16.7502 7C16.7502 9.62335 14.6235 11.75 12.0002 11.75C9.37684 11.75 7.25019 9.62335 7.25019 7Z',
  d7: 'M20.9277 4.81419C21.3065 4.41225 21.9394 4.39346 22.3413 4.77223L23.0889 5.47673L23.1204 5.50637C23.2911 5.66711 23.4848 5.84947 23.628 6.02625C23.7964 6.2343 24 6.5582 24 7C24 7.44181 23.7964 7.7657 23.628 7.97376C23.4848 8.15053 23.2911 8.33289 23.1204 8.49363L23.0889 8.52327L22.3413 9.22778C21.9394 9.60654 21.3065 9.58776 20.9277 9.18582C20.7456 8.99262 20.6555 8.74605 20.6555 8.5V8H19C18.4477 8 18 7.55229 18 7C18 6.44772 18.4477 6 19 6L20.6555 6V5.50637C20.6539 5.25821 20.7441 5.00905 20.9277 4.81419Z',
  d8: 'M3.07229 4.81419C2.69352 4.41225 2.06064 4.39346 1.6587 4.77223L0.911094 5.47673L0.879624 5.50637C0.708873 5.66711 0.51516 5.84947 0.372031 6.02625C0.203582 6.2343 0 6.5582 0 7C0 7.44181 0.203582 7.7657 0.372031 7.97376C0.515159 8.15053 0.708869 8.33289 0.879619 8.49363L0.911094 8.52327L1.6587 9.22778C2.06064 9.60654 2.69352 9.58776 3.07229 9.18582C3.25435 8.99262 3.34454 8.74605 3.3445 8.5V8H5C5.55228 8 6 7.55229 6 7C6 6.44772 5.55228 6 5 6L3.3445 6V5.50637C3.34611 5.25821 3.25592 5.00905 3.07229 4.81419Z',
  d9: 'M4 21H20C20 17.134 16.4183 14 12 14C7.58172 14 4 17.134 4 21Z',
  d10: 'M19.5 14.5L22 12L19.5 9.5M17 12H21.2566',
  d11: 'M4.5 14.5L2 12L4.5 9.5M7 12H2.69969',
  d12: 'M7.25 7C7.25 4.37665 9.37665 2.25 12 2.25C14.6234 2.25 16.75 4.37665 16.75 7C16.75 9.62335 14.6234 11.75 12 11.75C9.37665 11.75 7.25 9.62335 7.25 7Z',
  d13: 'M3.25 21C3.25 16.6289 7.26471 13.25 12 13.25C16.7353 13.25 20.75 16.6289 20.75 21V21.75H3.25V21Z',
  d14: 'M19.7929 8.79297L23 12.0001L19.7929 15.2072L18.3787 13.793L19.1716 13.0001H16.5858V11.0001H19.1716L18.3787 10.2072L19.7929 8.79297Z',
  d15: 'M4.82843 13.0001L5.62132 13.793L4.20711 15.2072L1 12.0001L4.20711 8.79297L5.62132 10.2072L4.82843 11.0001H7.41421V13.0001H4.82843Z',
};

export const IconUserArrowLeftRightStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-arrow-left-right-stroke-rounded IconUserArrowLeftRightStrokeRounded"
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

export const IconUserArrowLeftRightDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-arrow-left-right-duotone-rounded IconUserArrowLeftRightDuotoneRounded"
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

export const IconUserArrowLeftRightTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-arrow-left-right-twotone-rounded IconUserArrowLeftRightTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserArrowLeftRightSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-arrow-left-right-solid-rounded IconUserArrowLeftRightSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconUserArrowLeftRightBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-arrow-left-right-bulk-rounded IconUserArrowLeftRightBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
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

export const IconUserArrowLeftRightStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-arrow-left-right-stroke-sharp IconUserArrowLeftRightStrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserArrowLeftRightSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-arrow-left-right-solid-sharp IconUserArrowLeftRightSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfUserArrowLeftRight: TheIconSelfPack = {
  name: 'UserArrowLeftRight',
  StrokeRounded: IconUserArrowLeftRightStrokeRounded,
  DuotoneRounded: IconUserArrowLeftRightDuotoneRounded,
  TwotoneRounded: IconUserArrowLeftRightTwotoneRounded,
  SolidRounded: IconUserArrowLeftRightSolidRounded,
  BulkRounded: IconUserArrowLeftRightBulkRounded,
  StrokeSharp: IconUserArrowLeftRightStrokeSharp,
  SolidSharp: IconUserArrowLeftRightSolidSharp,
};