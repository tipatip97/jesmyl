import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M6 13.5L7.5 9L9.375 13.5M6 13.5L5.5 15M6 13.5H9.375M9.375 13.5L10 15',
  d3: 'M12.5 12V9.7C12.5 9.51387 12.5 9.42081 12.5245 9.34549C12.5739 9.19327 12.6933 9.07393 12.8455 9.02447C12.9208 9 13.0139 9 13.2 9H14.5C15.3284 9 16 9.67157 16 10.5C16 11.3284 15.3284 12 14.5 12H12.5ZM12.5 12V15',
  d4: 'M18.5 9V15',
  d5: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM13.1602 8.25022L13.2004 8.2504H14.5004C15.743 8.2504 16.7504 9.25776 16.7504 10.5004C16.7504 11.743 15.743 12.7504 14.5004 12.7504H13.2504V15.0004C13.2504 15.4146 12.9146 15.7504 12.5004 15.7504C12.0862 15.7504 11.7504 15.4146 11.7504 15.0004V9.7004L11.7502 9.66025C11.7494 9.5261 11.748 9.30993 11.8116 9.11413C11.9352 8.73358 12.2336 8.43523 12.6141 8.31158C12.8099 8.24796 13.0261 8.24936 13.1602 8.25022ZM13.2504 11.2504H14.5004C14.9146 11.2504 15.2504 10.9146 15.2504 10.5004C15.2504 10.0862 14.9146 9.7504 14.5004 9.7504H13.2504V11.2504ZM7.75934 8.25042C8.07196 8.25423 8.34943 8.45157 8.45562 8.74563L10.0745 13.2286L10.6925 14.7119C10.8518 15.0943 10.671 15.5334 10.2887 15.6927C9.90631 15.852 9.46721 15.6712 9.3079 15.2888L8.8752 14.2504H6.54077L6.21172 15.2375C6.08073 15.6305 5.65599 15.8429 5.26303 15.7119C4.87008 15.5809 4.65771 15.1562 4.78869 14.7632L5.28869 13.2632C5.29258 13.2515 5.29675 13.24 5.3012 13.2285L7.0512 8.72853C7.16452 8.43714 7.44671 8.24662 7.75934 8.25042ZM7.09659 12.7504H8.30697L7.72419 11.1365L7.09659 12.7504ZM19.25 9.00037C19.25 8.58615 18.9142 8.25037 18.5 8.25037C18.0858 8.25037 17.75 8.58615 17.75 9.00037V15.0004C17.75 15.4146 18.0858 15.7504 18.5 15.7504C18.9142 15.7504 19.25 15.4146 19.25 15.0004V9.00037Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M7.75934 8.25042C8.07196 8.25423 8.34943 8.45157 8.45562 8.74563L10.0745 13.2286L10.6925 14.7119C10.8518 15.0943 10.671 15.5334 10.2887 15.6927C9.90631 15.852 9.46721 15.6712 9.3079 15.2888L8.8752 14.2504H6.54077L6.21172 15.2375C6.08073 15.6305 5.65599 15.8429 5.26303 15.7119C4.87008 15.5809 4.65771 15.1562 4.78869 14.7632L5.28869 13.2632C5.29258 13.2515 5.29675 13.24 5.3012 13.2285L7.0512 8.72853C7.16452 8.43714 7.44671 8.24662 7.75934 8.25042ZM7.09659 12.7504H8.30697L7.72419 11.1365L7.09659 12.7504Z',
  d8: 'M13.1602 8.25022C13.1746 8.25031 13.188 8.2504 13.2004 8.2504H14.5004C15.743 8.2504 16.7504 9.25776 16.7504 10.5004C16.7504 11.743 15.743 12.7504 14.5004 12.7504H13.2504V15.0004C13.2504 15.4146 12.9146 15.7504 12.5004 15.7504C12.0862 15.7504 11.7504 15.4146 11.7504 15.0004V9.7004C11.7504 9.68804 11.7503 9.67461 11.7502 9.66025C11.7494 9.5261 11.748 9.30993 11.8116 9.11413C11.9352 8.73358 12.2336 8.43523 12.6141 8.31158C12.8099 8.24796 13.0261 8.24936 13.1602 8.25022ZM13.2504 11.2504H14.5004C14.9146 11.2504 15.2504 10.9146 15.2504 10.5004C15.2504 10.0862 14.9146 9.7504 14.5004 9.7504H13.2504V11.2504Z',
  d9: 'M18.5 8.25037C18.9142 8.25037 19.25 8.58615 19.25 9.00037V15.0004C19.25 15.4146 18.9142 15.7504 18.5 15.7504C18.0858 15.7504 17.75 15.4146 17.75 15.0004V9.00037C17.75 8.58615 18.0858 8.25037 18.5 8.25037Z',
  d10: 'M22 21V3H2V21H22Z',
  d11: 'M18.4955 15.502V8.49316M9.33149 12.9865L8.00133 9.00879H7.01207L6.00682 12.9865M9.33149 12.9865L10.0004 14.9869M9.33149 12.9865H6.00682M6.00682 12.9865L5.49512 14.9869M12.5069 14.9971V11.9977M12.5069 11.9977V9.01036H14.7625C15.5632 9.13666 16.0611 9.97437 16.0026 10.5428C15.9453 11.0999 15.7683 11.695 14.7625 11.9977H12.5069Z',
  d12: 'M8.29207 12.25H6.95989L7.53082 9.96626L8.29207 12.25Z',
  d13: 'M14.4993 11.25H13.2493V9.75H14.4993C14.9135 9.75 15.2493 10.0858 15.2493 10.5C15.2493 10.9142 14.9135 11.25 14.4993 11.25Z',
  d14: 'M2 2.25C1.58579 2.25 1.25 2.58579 1.25 3V21C1.25 21.4142 1.58579 21.75 2 21.75L22 21.75C22.1989 21.75 22.3897 21.671 22.5303 21.5303C22.671 21.3897 22.75 21.1989 22.75 21V3C22.75 2.58579 22.4142 2.25 22 2.25H2ZM8.53988 8.25H6.41372L4.77148 15.0809L6.2267 15.4447L6.58489 13.75H8.79207L9.28758 15.5L10.7106 15.0257L8.53988 8.25ZM14.4993 8.25H11.7493V15.5H13.2493V12.75H14.4993C15.7419 12.75 16.7493 11.7426 16.7493 10.5C16.7493 9.25736 15.7419 8.25 14.4993 8.25ZM17.7493 15.5H19.2493V8.25H17.7493V15.5Z',
};

export const IconApiStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="api-stroke-rounded IconApiStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconApiDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="api-duotone-rounded IconApiDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconApiTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="api-twotone-rounded IconApiTwotoneRounded"
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

export const IconApiSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="api-solid-rounded IconApiSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconApiBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="api-bulk-rounded IconApiBulkRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconApiStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="api-stroke-sharp IconApiStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconApiSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="api-solid-sharp IconApiSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfApi: TheIconSelfPack = {
  name: 'Api',
  StrokeRounded: IconApiStrokeRounded,
  DuotoneRounded: IconApiDuotoneRounded,
  TwotoneRounded: IconApiTwotoneRounded,
  SolidRounded: IconApiSolidRounded,
  BulkRounded: IconApiBulkRounded,
  StrokeSharp: IconApiStrokeSharp,
  SolidSharp: IconApiSolidSharp,
};