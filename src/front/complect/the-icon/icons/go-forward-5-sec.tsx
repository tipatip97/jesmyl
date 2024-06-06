import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 5L13.1039 3.45459C13.5149 2.87911 13.7205 2.59137 13.5907 2.32411C13.4609 2.05684 13.1311 2.04153 12.4714 2.01092C12.3152 2.00367 12.158 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 8.72836 20.4289 5.82368 18 3.99927',
  d2: 'M14 10H10.9099C10.6716 10 10.4664 10.1682 10.4196 10.4019L10 12.5C10.6937 12.3348 11.3555 12.1429 12.0714 12.1429C13.1365 12.1429 14 13.0063 14 14.0714C14 15.1365 13.1365 16 12.0714 16C11.244 16 10.2627 16.0173 10.0319 15',
  d3: 'M12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927C8.64715 2.01092 10.8689 2.04153 11.5286 2.01092C11.6848 2.00367 11.842 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z',
  d4: 'M3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 9.12308 19.4152 6.56881 17.2767 4.9625C16.8452 4.63835 16.7581 4.02573 17.0822 3.59417C17.4064 3.16262 18.019 3.07556 18.4506 3.39971C21.0594 5.3593 22.75 8.48236 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.1696 1.25 12.3925 1.25642 12.5602 1.26421C12.833 1.27664 13.1537 1.29127 13.4179 1.35116C13.7547 1.42751 14.1919 1.61931 14.4336 2.1171C14.6848 2.63443 14.5396 3.11204 14.3931 3.41217C14.2717 3.66078 14.0781 3.93145 13.9062 4.17184L12.7952 5.72712C12.4977 6.14365 11.9334 6.25664 11.5013 5.9996C11.4797 5.98676 11.4689 5.98034 11.4443 5.96122C11.4197 5.94211 11.4043 5.92667 11.3734 5.89581L9.59391 4.11627C9.3756 3.89797 9.26645 3.78881 9.11648 3.75961C8.96651 3.73042 8.83463 3.7863 8.57088 3.89808C5.417 5.23461 3.20455 8.35893 3.20455 12Z',
  d5: 'M9.43905 9.70583C9.57927 9.00469 10.1949 8.5 10.9099 8.5H14C14.5523 8.5 15 8.94772 15 9.5C15 10.0523 14.5523 10.5 14 10.5H11.336L11.2212 11.2105C11.4952 11.1695 11.7803 11.1429 12.0714 11.1429C13.6888 11.1429 15 12.454 15 14.0714C15 15.6888 13.6888 17 12.0714 17C12.0474 17 12.0221 17.0001 11.9958 17.0001C11.6253 17.0011 11.0416 17.0026 10.5186 16.8324C10.2147 16.7336 9.89078 16.5668 9.6143 16.2822C9.33372 15.9934 9.14993 15.6323 9.05667 15.2213C8.93445 14.6827 9.27199 14.147 9.81059 14.0248C10.3492 13.9026 10.8849 14.2401 11.0071 14.7787C11.0189 14.8307 11.0316 14.8594 11.0385 14.8725C11.0449 14.8849 11.0487 14.8885 11.0489 14.8887C11.0494 14.8892 11.0532 14.8931 11.0648 14.9C11.0773 14.9073 11.1 14.9184 11.1373 14.9305C11.217 14.9565 11.3338 14.9776 11.5034 14.9891C11.6665 15.0001 11.8367 15 12.0407 15C12.0509 15 12.0611 15 12.0714 15C12.5843 15 13 14.5843 13 14.0714C13 13.5586 12.5843 13.1429 12.0714 13.1429C11.5888 13.1429 11.1454 13.2508 10.5543 13.3948C10.4516 13.4199 10.3443 13.446 10.2316 13.4728C9.90653 13.5502 9.56425 13.4601 9.31941 13.2326C9.07456 13.0052 8.95952 12.6705 9.01281 12.3406L9.43242 9.7425C9.4344 9.73023 9.43661 9.71801 9.43905 9.70583Z',
  d6: 'M12 5L14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 8.72836 20.4289 5.82368 18 3.99927',
  d7: 'M14 10H10.5L10 12.5C10.6937 12.3348 11.3555 12.1429 12.0714 12.1429C13.1365 12.1429 14 13.0063 14 14.0714C14 15.1365 13.1365 16 12.0714 16C11.244 16 10.2627 16.0173 10.0319 15',
  d8: 'M12.1937 3.20663C12.1293 3.20524 12.0647 3.20455 12 3.20455C7.1424 3.20455 3.20455 7.1424 3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 9.12308 19.4152 6.56881 17.2767 4.9625L18.4506 3.39971C21.0594 5.3593 22.75 8.48236 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.735 1.25 13.4538 1.32391 14.149 1.46502C14.4735 1.53089 14.7425 1.7566 14.8639 2.06469C14.9852 2.37278 14.9422 2.72135 14.7498 2.9908L12.7952 5.72712L11.2048 4.59106L12.1937 3.20663Z',
  d9: 'M9.51104 8.85858C9.58142 8.36593 10.0033 8 10.501 8H14.3783V10H11.3683L11.1948 11.2147C11.4771 11.1713 11.7715 11.1429 12.0724 11.1429C13.6898 11.1429 15.001 12.454 15.001 14.0714C15.001 15.6888 13.6898 17 12.0724 17C12.0483 17 12.0231 17.0001 11.9968 17.0001C11.6263 17.0011 11.0426 17.0026 10.5196 16.8324C10.2157 16.7336 9.89175 16.5668 9.61527 16.2822C9.33469 15.9934 9.1509 15.6323 9.05764 15.2213L11.0081 14.7787C11.0198 14.8307 11.0326 14.8594 11.0394 14.8725C11.0457 14.8845 11.0498 14.8886 11.0498 14.8886C11.0498 14.8886 11.0541 14.8931 11.0658 14.9C11.0783 14.9073 11.101 14.9184 11.1383 14.9305C11.2179 14.9565 11.3347 14.9776 11.5043 14.9891C11.6674 15.0001 11.8377 15 12.0417 15C12.0519 15 12.0621 15 12.0724 15C12.5853 15 13.001 14.5843 13.001 14.0714C13.001 13.5586 12.5853 13.1429 12.0724 13.1429C11.5897 13.1429 11.1464 13.2508 10.5553 13.3948C10.4525 13.4199 10.3453 13.446 10.2326 13.4728C9.91065 13.5495 9.57161 13.4619 9.32709 13.2388C9.08257 13.0158 8.96423 12.6862 9.01104 12.3586L9.51104 8.85858Z',
};

export const IconGoForward5SecStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-5-sec-stroke-rounded IconGoForward5SecStrokeRounded"
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

export const IconGoForward5SecDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-5-sec-duotone-rounded IconGoForward5SecDuotoneRounded"
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

export const IconGoForward5SecTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-5-sec-twotone-rounded IconGoForward5SecTwotoneRounded"
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

export const IconGoForward5SecSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-5-sec-solid-rounded IconGoForward5SecSolidRounded"
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

export const IconGoForward5SecBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-5-sec-bulk-rounded IconGoForward5SecBulkRounded"
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

export const IconGoForward5SecStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-5-sec-stroke-sharp IconGoForward5SecStrokeSharp"
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

export const IconGoForward5SecSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-5-sec-solid-sharp IconGoForward5SecSolidSharp"
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

export const iconPackOfGoForward5Sec: TheIconSelfPack = {
  name: 'GoForward5Sec',
  StrokeRounded: IconGoForward5SecStrokeRounded,
  DuotoneRounded: IconGoForward5SecDuotoneRounded,
  TwotoneRounded: IconGoForward5SecTwotoneRounded,
  SolidRounded: IconGoForward5SecSolidRounded,
  BulkRounded: IconGoForward5SecBulkRounded,
  StrokeSharp: IconGoForward5SecStrokeSharp,
  SolidSharp: IconGoForward5SecSolidSharp,
};