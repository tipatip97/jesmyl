import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.1353 2.49988C6.46902 2.56063 4.91168 2.81444 3.84762 3.8748C2.91634 4.80285 2.60504 6.10744 2.50098 8.19988M14.8667 2.49988C17.5329 2.56063 19.0903 2.81444 20.1543 3.8748C21.0856 4.80285 21.3969 6.10744 21.501 8.19988M14.8667 21.4999C17.5329 21.4391 19.0903 21.1853 20.1543 20.125C21.0856 19.1969 21.3969 17.8923 21.501 15.7999M9.1353 21.4999C6.46902 21.4391 4.91168 21.1853 3.84762 20.125C2.91634 19.1969 2.60504 17.8923 2.50098 15.7999',
  d2: 'M8 17C9.83846 14.4046 14.1188 14.263 16 17M14.5 9.5C14.5 10.8807 13.3807 12 12 12C10.6193 12 9.5 10.8807 9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5Z',
  d3: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28248 21.5 7.52165 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52168 21.5 5.28248 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM12 12C13.3807 12 14.5 10.8807 14.5 9.5C14.5 8.11929 13.3807 7 12 7C10.6193 7 9.5 8.11929 9.5 9.5C9.5 10.8807 10.6193 12 12 12Z',
  d4: 'M8 16.9999C9.83846 14.4045 14.1188 14.2628 16 16.9999M14.5 9.49988C14.5 10.8806 13.3807 11.9999 12 11.9999C10.6193 11.9999 9.5 10.8806 9.5 9.49988C9.5 8.11917 10.6193 6.99988 12 6.99988C13.3807 6.99988 14.5 8.11917 14.5 9.49988Z',
  d5: 'M10.1785 2.70396C10.1908 3.24295 9.7638 3.68985 9.22481 3.70213C6.5857 3.76226 5.45908 4.03317 4.72986 4.75985C4.10053 5.387 3.80141 6.32395 3.7012 8.33897C3.67442 8.87744 3.21619 9.29224 2.67772 9.26546C2.13925 9.23868 1.72445 8.78046 1.75123 8.24199C1.85418 6.17178 2.16285 4.56166 3.35172 3.37691C4.69995 2.03336 6.61386 1.80874 9.18034 1.75026C9.71933 1.73798 10.1662 2.16496 10.1785 2.70396ZM13.8215 2.70396C13.8338 2.16496 14.2807 1.73798 14.8197 1.75026C17.3862 1.80874 19.3001 2.03336 20.6483 3.37691C21.8372 4.56166 22.1458 6.17178 22.2488 8.24199C22.2756 8.78046 21.8608 9.23868 21.3223 9.26546C20.7838 9.29224 20.3256 8.87744 20.2988 8.33897C20.1986 6.32395 19.8995 5.387 19.2702 4.75985C18.541 4.03317 17.4143 3.76226 14.7752 3.70213C14.2362 3.68985 13.8092 3.24295 13.8215 2.70396ZM2.67772 14.7345C3.21619 14.7078 3.67442 15.1226 3.7012 15.661C3.80141 17.6761 4.10053 18.613 4.72986 19.2401C5.45908 19.9668 6.5857 20.2377 9.22481 20.2979C9.7638 20.3102 10.1908 20.757 10.1785 21.296C10.1662 21.835 9.71933 22.262 9.18034 22.2497C6.61386 22.1913 4.69995 21.9666 3.35172 20.6231C2.16285 19.4383 1.85418 17.8282 1.75123 15.758C1.72445 15.2195 2.13925 14.7613 2.67772 14.7345ZM21.3223 14.7345C21.8608 14.7613 22.2756 15.2195 22.2488 15.758C22.1458 17.8282 21.8372 19.4383 20.6483 20.6231C19.3001 21.9666 17.3862 22.1913 14.8197 22.2497C14.2807 22.262 13.8338 21.835 13.8215 21.296C13.8092 20.757 14.2362 20.3102 14.7752 20.2979C17.4143 20.2377 18.541 19.9668 19.2702 19.2401C19.8995 18.613 20.1986 17.6761 20.2988 15.661C20.3256 15.1226 20.7838 14.7078 21.3223 14.7345Z',
  d6: 'M8.98949 13.5186C8.20351 14.0977 6.14271 15.2803 7.39788 16.7601C8.01101 17.483 8.69389 18 9.55244 18H14.4515C15.31 18 15.9929 17.483 16.606 16.7601C17.8612 15.2803 15.8004 14.0977 15.0144 13.5186C13.1713 12.1604 10.8326 12.1604 8.98949 13.5186Z',
  d7: 'M14.7527 8.75C14.7527 10.2688 13.5215 11.5 12.0027 11.5C10.4839 11.5 9.25269 10.2688 9.25269 8.75C9.25269 7.23122 10.4839 6 12.0027 6C13.5215 6 14.7527 7.23122 14.7527 8.75Z',
  d8: 'M9.14524 2.49988H2.50098V9.14414M14.8567 2.49988H21.501V9.14414M14.8567 21.4999H21.501V14.8556M9.14524 21.4999H2.50098V14.8556',
  d9: 'M1.50098 1.49988H9.14524V3.49988H3.50098V9.14414H1.50098V1.49988ZM20.501 3.49988H14.8567V1.49988H22.501V9.14414H20.501V3.49988ZM22.501 14.8556V22.4999H14.8567V20.4999H20.501V14.8556H22.501ZM3.50098 20.4999V14.8556H1.50098V22.4999H9.14524V20.4999H3.50098Z',
  d10: 'M8.75 9.5C8.75 7.70507 10.2051 6.25 12 6.25C13.7949 6.25 15.25 7.70507 15.25 9.5C15.25 11.2949 13.7949 12.75 12 12.75C10.2051 12.75 8.75 11.2949 8.75 9.5Z',
  d11: 'M11.9597 13.5644C13.8231 13.5457 15.6406 14.6063 16.6707 16.6643C16.787 16.8968 16.7747 17.173 16.6381 17.3942C16.5014 17.6154 16.26 17.75 16 17.75H8C7.74076 17.75 7.49991 17.6161 7.36304 17.396C7.22618 17.1758 7.21272 16.9006 7.32744 16.6681C8.31178 14.6735 10.1023 13.5831 11.9597 13.5644Z',
};

export const IconIdentificationStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="identification-stroke-rounded IconIdentificationStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconIdentificationDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="identification-duotone-rounded IconIdentificationDuotoneRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIdentificationTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="identification-twotone-rounded IconIdentificationTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="0.3" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIdentificationSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="identification-solid-rounded IconIdentificationSolidRounded"
    >
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIdentificationBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="identification-bulk-rounded IconIdentificationBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconIdentificationStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="identification-stroke-sharp IconIdentificationStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconIdentificationSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="identification-solid-sharp IconIdentificationSolidSharp"
    >
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfIdentification: TheIconSelfPack = {
  name: 'Identification',
  StrokeRounded: IconIdentificationStrokeRounded,
  DuotoneRounded: IconIdentificationDuotoneRounded,
  TwotoneRounded: IconIdentificationTwotoneRounded,
  SolidRounded: IconIdentificationSolidRounded,
  BulkRounded: IconIdentificationBulkRounded,
  StrokeSharp: IconIdentificationStrokeSharp,
  SolidSharp: IconIdentificationSolidSharp,
};