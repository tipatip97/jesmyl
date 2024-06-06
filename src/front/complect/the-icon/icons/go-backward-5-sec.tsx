import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 5L10.8961 3.45459C10.4851 2.87911 10.2795 2.59137 10.4093 2.32411C10.5391 2.05684 10.8689 2.04153 11.5286 2.01092C11.6848 2.00367 11.842 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927',
  d2: 'M14 10H10.9099C10.6716 10 10.4664 10.1682 10.4196 10.4019L10 12.5C10.6937 12.3348 11.3555 12.1429 12.0714 12.1429C13.1365 12.1429 14 13.0063 14 14.0714C14 15.1365 13.1365 16 12.0714 16C11.244 16 10.2627 16.0173 10.0319 15',
  d3: 'M12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927C8.64715 2.01092 10.8689 2.04153 11.5286 2.01092C11.6848 2.00367 11.842 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z',
  d4: 'M20.7955 12C20.7955 16.8576 16.8576 20.7955 12 20.7955C7.1424 20.7955 3.20454 16.8576 3.20454 12C3.20454 9.12308 4.58476 6.56881 6.72329 4.9625C7.15484 4.63835 7.24191 4.02573 6.91776 3.59417C6.59361 3.16262 5.98099 3.07556 5.54943 3.39971C2.94058 5.3593 1.25 8.48236 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C11.8304 1.25 11.6075 1.25642 11.4398 1.26421C11.167 1.27664 10.8463 1.29127 10.5821 1.35116C10.2453 1.42751 9.80812 1.61931 9.56638 2.1171C9.31515 2.63443 9.4604 3.11204 9.60692 3.41217C9.72828 3.66078 9.92187 3.93145 10.0938 4.17184L11.2048 5.72712C11.5023 6.14365 12.0666 6.25664 12.4987 5.9996C12.5203 5.98676 12.5311 5.98034 12.5557 5.96122C12.5803 5.94211 12.5957 5.92667 12.6266 5.89581L14.4061 4.11627C14.6244 3.89797 14.7335 3.78881 14.8835 3.75961C15.0335 3.73042 15.1654 3.7863 15.4291 3.89808C18.583 5.23461 20.7955 8.35893 20.7955 12Z',
  d5: 'M9.43905 9.70583C9.57927 9.00469 10.1949 8.5 10.9099 8.5H14C14.5523 8.5 15 8.94772 15 9.5C15 10.0523 14.5523 10.5 14 10.5H11.336L11.2212 11.2105C11.4952 11.1695 11.7803 11.1429 12.0714 11.1429C13.6888 11.1429 15 12.454 15 14.0714C15 15.6888 13.6888 17 12.0714 17C12.0474 17 12.0221 17.0001 11.9958 17.0001C11.6253 17.0011 11.0416 17.0026 10.5186 16.8324C10.2147 16.7336 9.89078 16.5668 9.6143 16.2822C9.33372 15.9934 9.14993 15.6323 9.05667 15.2213C8.93445 14.6827 9.27199 14.147 9.81059 14.0248C10.3492 13.9026 10.8849 14.2401 11.0071 14.7787C11.0189 14.8307 11.0316 14.8594 11.0385 14.8725C11.0449 14.8849 11.0487 14.8885 11.0489 14.8887C11.0494 14.8892 11.0532 14.8931 11.0648 14.9C11.0773 14.9073 11.1 14.9184 11.1373 14.9305C11.217 14.9565 11.3338 14.9776 11.5034 14.9891C11.6665 15.0001 11.8367 15 12.0407 15C12.0509 15 12.0611 15 12.0714 15C12.5843 15 13 14.5843 13 14.0714C13 13.5586 12.5843 13.1429 12.0714 13.1429C11.5888 13.1429 11.1454 13.2508 10.5543 13.3948C10.4516 13.4199 10.3443 13.446 10.2316 13.4728C9.90653 13.5502 9.56425 13.4601 9.31941 13.2326C9.07456 13.0052 8.95952 12.6705 9.01281 12.3406L9.43242 9.7425C9.4344 9.73023 9.43661 9.71801 9.43905 9.70583Z',
  d6: 'M12 5L10 2.20004C10.6462 2.06886 11.3151 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927',
  d7: 'M14 10H10.5L10 12.5C10.6937 12.3348 11.3555 12.1429 12.0714 12.1429C13.1365 12.1429 14 13.0063 14 14.0714C14 15.1365 13.1365 16 12.0714 16C11.244 16 10.2627 16.0173 10.0319 15',
  d8: 'M11.8063 3.20663C11.8707 3.20524 11.9353 3.20455 12 3.20455C16.8576 3.20455 20.7955 7.1424 20.7955 12C20.7955 16.8576 16.8576 20.7955 12 20.7955C7.1424 20.7955 3.20455 16.8576 3.20455 12C3.20455 9.12308 4.58477 6.56881 6.72329 4.9625L5.54944 3.39971C2.94058 5.3593 1.25 8.48236 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C11.265 1.25 10.5462 1.32391 9.85104 1.46502C9.52654 1.53089 9.25747 1.7566 9.13614 2.06469C9.01482 2.37278 9.05776 2.72135 9.25022 2.9908L11.2048 5.72712L12.7952 4.59106L11.8063 3.20663Z',
  d9: 'M9.51006 8.85858C9.58044 8.36593 10.0024 8 10.5 8H14.3773V10H11.3673L11.1938 11.2147C11.4761 11.1713 11.7705 11.1429 12.0714 11.1429C13.6888 11.1429 15 12.454 15 14.0714C15 15.6888 13.6888 17 12.0714 17C12.0474 17 12.0221 17.0001 11.9958 17.0001C11.6253 17.0011 11.0416 17.0026 10.5186 16.8324C10.2147 16.7336 9.89078 16.5668 9.6143 16.2822C9.33371 15.9934 9.14993 15.6323 9.05666 15.2213L11.0071 14.7787C11.0189 14.8307 11.0316 14.8594 11.0385 14.8725C11.0447 14.8845 11.0489 14.8886 11.0489 14.8886C11.0489 14.8886 11.0532 14.8931 11.0648 14.9C11.0773 14.9073 11.1 14.9184 11.1373 14.9305C11.217 14.9565 11.3338 14.9776 11.5033 14.9891C11.6665 15.0001 11.8367 15 12.0407 15C12.0509 15 12.0611 15 12.0714 15C12.5843 15 13 14.5843 13 14.0714C13 13.5586 12.5843 13.1429 12.0714 13.1429C11.5888 13.1429 11.1454 13.2508 10.5543 13.3948C10.4516 13.4199 10.3443 13.446 10.2316 13.4728C9.90967 13.5495 9.57064 13.4619 9.32611 13.2388C9.08159 13.0158 8.96326 12.6862 9.01006 12.3586L9.51006 8.85858Z',
};

export const IconGoBackward5SecStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-5-sec-stroke-rounded IconGoBackward5SecStrokeRounded"
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

export const IconGoBackward5SecDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-5-sec-duotone-rounded IconGoBackward5SecDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconGoBackward5SecTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-5-sec-twotone-rounded IconGoBackward5SecTwotoneRounded"
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

export const IconGoBackward5SecSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-5-sec-solid-rounded IconGoBackward5SecSolidRounded"
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

export const IconGoBackward5SecBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-5-sec-bulk-rounded IconGoBackward5SecBulkRounded"
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

export const IconGoBackward5SecStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-5-sec-stroke-sharp IconGoBackward5SecStrokeSharp"
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

export const IconGoBackward5SecSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-5-sec-solid-sharp IconGoBackward5SecSolidSharp"
    >
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

export const iconPackOfGoBackward5Sec: TheIconSelfPack = {
  name: 'GoBackward5Sec',
  StrokeRounded: IconGoBackward5SecStrokeRounded,
  DuotoneRounded: IconGoBackward5SecDuotoneRounded,
  TwotoneRounded: IconGoBackward5SecTwotoneRounded,
  SolidRounded: IconGoBackward5SecSolidRounded,
  BulkRounded: IconGoBackward5SecBulkRounded,
  StrokeSharp: IconGoBackward5SecStrokeSharp,
  SolidSharp: IconGoBackward5SecSolidSharp,
};