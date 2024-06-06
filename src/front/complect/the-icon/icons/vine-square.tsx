import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 7.93975C7 10.1342 7.92291 15.0225 10.3867 17.576C10.9226 18.1314 11.766 18.1417 12.3182 17.6037C13.3919 16.5577 14.5354 14.8878 15.3132 13.1625M15.3132 13.1625C12.1329 12.3092 12.0286 9.88868 12.5 8.5545C13.6579 5.78927 16.2632 7.10006 16.2632 9.47648C16.2632 9.9135 16.2046 10.3816 16.0982 10.8667M15.3132 13.1625C16.0388 13.3571 16.9245 13.4702 18 13.4702',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75214 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.75211 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03143 1.74998 9.75214 1.74999 11.9428 1.75ZM17.2632 9.47644C17.2632 7.95127 16.4205 6.59027 15.1466 6.14364C14.4899 5.9134 13.7555 5.94994 13.0864 6.32605C12.433 6.69339 11.9267 7.33451 11.5776 8.16822L11.5666 8.19447L11.5571 8.22131C11.2606 9.06053 11.1321 10.262 11.6136 11.4222C12.0029 12.3598 12.7497 13.1724 13.9213 13.7204C13.2385 14.9841 12.3952 16.1326 11.6204 16.8874C11.4628 17.041 11.2552 17.0358 11.1063 16.8816C10.0343 15.7705 9.24631 14.0852 8.72812 12.3387C8.21305 10.6028 8 8.92821 8 7.9397C8 7.38742 7.55228 6.9397 7 6.9397C6.44772 6.9397 6 7.38742 6 7.9397C6 9.14565 6.24841 11.0124 6.81074 12.9076C7.36995 14.7923 8.27535 16.8279 9.66707 18.2703C10.59 19.2268 12.0692 19.2424 13.016 18.32C14.0353 17.327 15.0788 15.8612 15.8728 14.3058C16.5066 14.4134 17.2136 14.4702 18 14.4702C18.5523 14.4702 19 14.0225 19 13.4702C19 12.9179 18.5523 12.4702 18 12.4702C16.9925 12.4702 16.1964 12.364 15.5723 12.1966C14.2314 11.8368 13.6877 11.2019 13.4608 10.6554C13.2174 10.0689 13.2662 9.40622 13.4338 8.91378C13.6606 8.38417 13.9085 8.15831 14.0665 8.06945C14.2116 7.98787 14.3456 7.98215 14.4849 8.03101C14.8032 8.14258 15.2632 8.62518 15.2632 9.47644C15.2632 9.6119 15.2561 9.75476 15.2417 9.90464C15.1891 10.4544 15.5921 10.9428 16.1419 10.9954C16.6916 11.048 17.18 10.645 17.2326 10.0953C17.2525 9.88783 17.2632 9.68112 17.2632 9.47644Z',
  d4: 'M12.0572 1.75H11.9428C9.75214 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z',
  d5: 'M15.1466 6.14364C16.4205 6.59027 17.2632 7.95127 17.2632 9.47644C17.2632 9.68112 17.2525 9.88783 17.2326 10.0953C17.18 10.645 16.6916 11.048 16.1419 10.9954C15.5921 10.9428 15.1891 10.4544 15.2417 9.90464C15.2561 9.75476 15.2632 9.6119 15.2632 9.47644C15.2632 8.62518 14.8032 8.14258 14.4849 8.03101C14.3456 7.98215 14.2116 7.98787 14.0665 8.06945C13.9085 8.15831 13.6606 8.38417 13.4338 8.91378C13.2662 9.40622 13.2174 10.0689 13.4608 10.6554C13.6877 11.2019 14.2314 11.8368 15.5723 12.1966C16.1964 12.364 16.9925 12.4702 18 12.4702C18.5523 12.4702 19 12.9179 19 13.4702C19 14.0225 18.5523 14.4702 18 14.4702C17.2136 14.4702 16.5066 14.4134 15.8728 14.3058C15.0788 15.8612 14.0353 17.327 13.016 18.32C12.0692 19.2424 10.59 19.2268 9.66707 18.2703C8.27535 16.8279 7.36995 14.7923 6.81074 12.9076C6.24841 11.0124 6 9.14565 6 7.9397C6 7.38742 6.44772 6.9397 7 6.9397C7.55228 6.9397 8 7.38742 8 7.9397C8 8.92821 8.21305 10.6028 8.72812 12.3387C9.24631 14.0852 10.0343 15.7705 11.1063 16.8816C11.2552 17.0358 11.4628 17.041 11.6204 16.8874C12.3952 16.1326 13.2385 14.9841 13.9213 13.7204C12.7497 13.1724 12.0029 12.3598 11.6136 11.4222C11.1321 10.262 11.2606 9.06053 11.5571 8.22131L11.5666 8.19447L11.5776 8.16822C11.9267 7.33451 12.433 6.69338 13.0864 6.32605C13.7555 5.94994 14.4899 5.9134 15.1466 6.14364Z',
  d6: 'M7 7.43975C7 9.6342 8 15 11.3636 17.5C13.5 16 14.5354 14.3878 15.3132 12.6625M15.3132 12.6625C12.1329 11.8092 12.0286 9.38868 12.5 8.0545C13.6579 5.28927 16.2632 6.60006 16.2632 8.97648C16.2632 9.4135 16.2046 9.88163 16.0982 10.3667M15.3132 12.6625C16.0388 12.8571 16.9245 12.9702 18 12.9702',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM17.0132 8.97645C17.0132 7.53552 16.2184 6.28432 15.0639 5.87958C14.4719 5.67201 13.8125 5.7047 13.209 6.04399C12.6171 6.3767 12.1424 6.96668 11.8082 7.76479C11.8027 7.77791 11.7976 7.79119 11.7928 7.80461C11.5115 8.60079 11.3922 9.73657 11.8445 10.8263C12.2323 11.7605 13.0053 12.577 14.2696 13.1007C13.6363 14.3227 12.7982 15.4651 11.3856 16.5531C10.1043 15.4239 9.21229 13.787 8.62885 12.109C7.98493 10.257 7.75 8.45007 7.75 7.43971H6.25C6.25 8.62381 6.51507 10.597 7.21204 12.6016C7.90698 14.6003 9.06457 16.7257 10.9162 18.1019C11.1757 18.2949 11.5298 18.2996 11.7945 18.1138C13.8341 16.6818 14.9383 15.1398 15.7347 13.527C16.3972 13.6527 17.1491 13.7202 18 13.7202V12.2202C16.9755 12.2202 16.157 12.1123 15.5076 11.938C14.1043 11.5615 13.4912 10.8808 13.2299 10.2512C12.9563 9.59203 13.0156 8.8604 13.2003 8.32411C13.4431 7.75315 13.7243 7.47507 13.944 7.35153C14.1546 7.23314 14.3636 7.22357 14.5676 7.2951C15.0053 7.44855 15.5132 8.04095 15.5132 8.97645C15.5132 9.34825 15.4631 9.76153 15.3656 10.2061L16.8308 10.5273C16.9461 10.0017 17.0132 9.47869 17.0132 8.97645Z',
};

export const IconVineSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vine-square-stroke-rounded IconVineSquareStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconVineSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vine-square-duotone-rounded IconVineSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconVineSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vine-square-twotone-rounded IconVineSquareTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconVineSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vine-square-solid-rounded IconVineSquareSolidRounded"
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

export const IconVineSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vine-square-bulk-rounded IconVineSquareBulkRounded"
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

export const IconVineSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vine-square-stroke-sharp IconVineSquareStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVineSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vine-square-solid-sharp IconVineSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfVineSquare: TheIconSelfPack = {
  name: 'VineSquare',
  StrokeRounded: IconVineSquareStrokeRounded,
  DuotoneRounded: IconVineSquareDuotoneRounded,
  TwotoneRounded: IconVineSquareTwotoneRounded,
  SolidRounded: IconVineSquareSolidRounded,
  BulkRounded: IconVineSquareBulkRounded,
  StrokeSharp: IconVineSquareStrokeSharp,
  SolidSharp: IconVineSquareSolidSharp,
};