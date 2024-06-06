import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 2H3.30116C4.48672 2 5.0795 2 5.4814 2.37142C5.88331 2.74285 5.96165 3.36307 6.11834 4.60351L7.24573 13.5287C7.45464 15.1826 7.5591 16.0095 8.09497 16.5048C8.63085 17 9.42122 17 11.002 17H21',
  d2: 'M20 14H14C13.0572 14 12.5858 14 12.2929 13.6339C12 13.2678 12 12.6785 12 11.5C12 10.3215 12 9.73223 12.2929 9.36612C12.5858 9 13.0572 9 14 9H20C20.9428 9 21.4142 9 21.7071 9.36612C22 9.73223 22 10.3215 22 11.5C22 12.6785 22 13.2678 21.7071 13.6339C21.4142 14 20.9428 14 20 14Z',
  d3: 'M18 9H12C11.0572 9 10.5858 9 10.2929 8.63388C10 8.26777 10 7.67851 10 6.5C10 5.32149 10 4.73223 10.2929 4.36612C10.5858 4 11.0572 4 12 4H18C18.9428 4 19.4142 4 19.7071 4.36612C20 4.73223 20 5.32149 20 6.5C20 7.67851 20 8.26777 19.7071 8.63388C19.4142 9 18.9428 9 18 9Z',
  d4: 'M5.05239 3.53759C4.78746 3.5021 4.42157 3.50001 3.80116 3.50001H2.5C1.94772 3.50001 1.5 3.05229 1.5 2.50001C1.5 1.94772 1.94772 1.50001 2.5 1.50001H3.80116C3.82042 1.50001 3.83962 1.50001 3.85877 1.5C4.40185 1.49994 4.90417 1.49987 5.31791 1.55529C5.77898 1.61705 6.25289 1.76069 6.66011 2.13703C7.0612 2.50769 7.24858 2.96691 7.36179 3.41835C7.46602 3.83398 7.5312 4.35037 7.60363 4.92415C7.6059 4.94211 7.60817 4.96013 7.61045 4.9782L8.73784 13.9033C8.84543 14.7551 8.91657 15.3047 9.01771 15.708C9.11312 16.0885 9.20588 16.2077 9.27368 16.2704C9.33536 16.3274 9.44168 16.4004 9.7894 16.447C10.1699 16.4979 10.684 16.5 11.502 16.5H21.5C22.0523 16.5 22.5 16.9477 22.5 17.5C22.5 18.0523 22.0523 18.5 21.5 18.5L11.4399 18.5C10.7027 18.5001 10.0529 18.5001 9.52388 18.4293C8.94727 18.352 8.39047 18.1774 7.91627 17.7392C7.44819 17.3066 7.22079 16.7648 7.07777 16.1945C6.94379 15.6602 6.85908 14.9893 6.7609 14.2118L5.62622 5.22884C5.54474 4.5838 5.49319 4.18928 5.42186 3.90484C5.35773 3.64912 5.3059 3.60837 5.30283 3.60595C5.30276 3.60589 5.30285 3.60597 5.30283 3.60595C5.2975 3.60102 5.29078 3.59489 5.2666 3.58522C5.23568 3.57285 5.17288 3.55372 5.05239 3.53759Z',
  d5: 'M10 20.5C10 19.3954 10.8954 18.5 12 18.5C13.1046 18.5 14 19.3954 14 20.5C14 21.6046 13.1046 22.5 12 22.5C10.8954 22.5 10 21.6046 10 20.5Z',
  d6: 'M17 20.5C17 19.3954 17.8954 18.5 19 18.5C20.1046 18.5 21 19.3954 21 20.5C21 21.6046 20.1046 22.5 19 22.5C17.8954 22.5 17 21.6046 17 20.5Z',
  d7: 'M20.5 14.5H14.5C13.5572 14.5 13.0858 14.5 12.7929 14.1339C12.5 13.7678 12.5 13.1785 12.5 12C12.5 10.8215 12.5 10.2322 12.7929 9.86612C13.0858 9.5 13.5572 9.5 14.5 9.5H20.5C21.4428 9.5 21.9142 9.5 22.2071 9.86612C22.5 10.2322 22.5 10.8215 22.5 12C22.5 13.1785 22.5 13.7678 22.2071 14.1339C21.9142 14.5 21.4428 14.5 20.5 14.5Z',
  d8: 'M18.5 8.5H12.5C11.5572 8.5 11.0858 8.5 10.7929 8.13388C10.5 7.76777 10.5 7.17851 10.5 6C10.5 4.82149 10.5 4.23223 10.7929 3.86612C11.0858 3.5 11.5572 3.5 12.5 3.5H18.5C19.4428 3.5 19.9142 3.5 20.2071 3.86612C20.5 4.23223 20.5 4.82149 20.5 6C20.5 7.17851 20.5 7.76777 20.2071 8.13388C19.9142 8.5 19.4428 8.5 18.5 8.5Z',
  d9: 'M2 2.5H6L8 17.5H22',
  d10: 'M22 14.5H12V9.5H22V14.5Z',
  d11: 'M20 9.50004H10V4.5H20V9.50004Z',
  d12: 'M4.62448 3.75H1.5V1.75H5.5C6.0012 1.75 6.42499 2.12103 6.49123 2.61784L8.37552 16.75H21.5V18.75H7.5C6.9988 18.75 6.57501 18.379 6.50877 17.8822L4.62448 3.75Z',
  d13: 'M9 20.25C9 19.1454 9.89543 18.25 11 18.25C12.1046 18.25 13 19.1454 13 20.25C13 21.3546 12.1046 22.25 11 22.25C9.89543 22.25 9 21.3546 9 20.25Z',
  d14: 'M16 20.25C16 19.1454 16.8954 18.25 18 18.25C19.1046 18.25 20 19.1454 20 20.25C20 21.3546 19.1046 22.25 18 22.25C16.8954 22.25 16 21.3546 16 20.25Z',
  d15: 'M11 11.5C11 11.0858 11.3358 10.75 11.75 10.75H21.75C22.1642 10.75 22.5 11.0858 22.5 11.5V14.5C22.5 14.9143 22.1642 15.25 21.75 15.25H11.75C11.3358 15.25 11 14.9143 11 14.5V11.5Z',
  d16: 'M8.75 5.5C8.75 5.08579 9.08579 4.75 9.5 4.75H19.5C19.9142 4.75 20.25 5.08579 20.25 5.5V8.50004C20.25 8.91426 19.9142 9.25004 19.5 9.25004H9.5C9.08579 9.25004 8.75 8.91426 8.75 8.50004V5.5Z',
};

export const IconTrolley01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trolley-01-stroke-rounded IconTrolley01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="10.5" 
        cy="19.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="17.5" 
        cy="19.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconTrolley01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trolley-01-duotone-rounded IconTrolley01DuotoneRounded"
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
      <circle 
        cx="10.5" 
        cy="19.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="17.5" 
        cy="19.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconTrolley01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trolley-01-twotone-rounded IconTrolley01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="10.5" 
        cy="19.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="17.5" 
        cy="19.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
    </TheIconWrapper>
  );
};

export const IconTrolley01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trolley-01-solid-rounded IconTrolley01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconTrolley01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trolley-01-bulk-rounded IconTrolley01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTrolley01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trolley-01-stroke-sharp IconTrolley01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="11.5" 
        cy="20" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="18.5" 
        cy="20" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTrolley01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trolley-01-solid-sharp IconTrolley01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTrolley01: TheIconSelfPack = {
  name: 'Trolley01',
  StrokeRounded: IconTrolley01StrokeRounded,
  DuotoneRounded: IconTrolley01DuotoneRounded,
  TwotoneRounded: IconTrolley01TwotoneRounded,
  SolidRounded: IconTrolley01SolidRounded,
  BulkRounded: IconTrolley01BulkRounded,
  StrokeSharp: IconTrolley01StrokeSharp,
  SolidSharp: IconTrolley01SolidSharp,
};