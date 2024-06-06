import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.8561 22C26.0783 19 19.2338 7 10.9227 2C9.9453 5.5 8.47838 6.5 5.54497 10C1.66121 14.6339 3.5895 20 8.96719 22C8.1524 21 6.04958 18.9008 7.5 16C8 15 9 14 8.5 12C9.47778 12.5 11.5 13 12 15.5C12.8148 14.5 13.6604 12.4 12.8783 10C19 14.5 16.5 19 13.8561 22Z',
  d2: 'M13.8561 22C26.0783 19 19.2338 7 10.9227 2C9.9453 5.5 8.47838 6.5 5.54497 10C1.66121 14.6339 3.5895 20 8.96719 22',
  d3: 'M13.8564 22C16.5003 19 19.0003 14.5 12.8786 10C13.6608 12.4 12.8151 14.5 12.0003 15.5C11.5003 13 9.47811 12.5 8.50034 12C9.00034 14 8.00034 15 7.50034 16C6.04991 18.9008 8.15274 21 8.96752 22',
  d4: 'M10.646 1.30307C10.8636 1.21656 11.1091 1.23663 11.3097 1.35734C15.5756 3.92373 19.5162 8.30625 20.807 12.5308C21.4578 14.6607 21.4555 16.8298 20.371 18.6902C19.2874 20.5493 17.2111 21.9488 14.0352 22.7284C13.7169 22.8065 13.3847 22.6689 13.2149 22.3885C13.0451 22.1082 13.077 21.75 13.2938 21.5041C14.5927 20.0302 15.7405 18.3078 15.9078 16.4936C16.0352 15.1126 15.6022 13.5477 13.9395 11.8829C13.9516 13.6546 13.2692 15.13 12.5818 15.9737C12.3984 16.1988 12.1016 16.2978 11.8198 16.2279C11.538 16.158 11.3219 15.9318 11.2649 15.6471C10.9901 14.2731 10.2095 13.6679 9.3781 13.2418C9.32173 14.4125 8.81109 15.2552 8.43945 15.8684C8.33448 16.0417 8.2406 16.1966 8.17118 16.3354C7.06544 18.5469 8.40425 20.1519 9.33056 21.2624L9.33057 21.2624C9.40669 21.3537 9.48002 21.4416 9.54898 21.5263C9.76275 21.7886 9.77434 22.1616 9.57727 22.4367C9.3802 22.7119 9.0233 22.8209 8.70611 22.703C5.84221 21.6379 3.81665 19.6428 3.06665 17.2085C2.31202 14.7593 2.89055 12 4.97052 9.51824C5.63777 8.72212 6.22077 8.06174 6.73411 7.48027C8.53991 5.43481 9.48374 4.36573 10.2007 1.79827C10.2637 1.57275 10.4284 1.38958 10.646 1.30307Z',
  d5: 'M15.9078 16.466C16.0352 15.0932 15.6022 13.5377 13.9395 11.8828C13.9516 13.6439 13.2692 15.1105 12.5818 15.9492C12.3984 16.1729 12.1016 16.2714 11.8198 16.2019C11.538 16.1324 11.3219 15.9075 11.2649 15.6245C10.9901 14.2588 10.2095 13.6572 9.3781 13.2336C9.32174 14.3973 8.81109 15.2349 8.43945 15.8445L8.43945 15.8445C8.33448 16.0167 8.2406 16.1707 8.17118 16.3087C7.06544 18.507 8.40426 20.1024 9.33056 21.2063C10.0737 21.9384 11.1892 22.4498 11.9343 22.75C14.3599 21.619 15.7147 18.5473 15.9078 16.466Z',
  d6: 'M10.646 1.30244C10.8636 1.21696 11.1091 1.23679 11.3097 1.35606C15.5756 3.89182 19.5162 8.22204 20.807 12.3962C21.4578 14.5006 21.4555 16.6438 20.371 18.4821C19.2874 20.319 17.2111 21.7018 14.0352 22.472C12.0948 22.9426 9.64236 22.7336 8.70611 22.4469C5.84221 21.3945 3.81665 19.4233 3.06665 17.0181C2.31202 14.598 2.89055 11.8717 4.97052 9.41957C5.63777 8.63294 6.22077 7.98045 6.73411 7.40592C8.53991 5.38487 9.48374 4.32854 10.2007 1.79173C10.2637 1.5689 10.4284 1.38791 10.646 1.30244Z',
  d7: 'M5.08264 10.6355C7.99815 7.14565 10.0962 5.1573 10.9625 1.97168C15.4315 4.47294 20.9378 10.841 20.5233 15.5735C20.094 20.4749 15.6742 21.531 13.8836 21.9588L13.8432 21.9685C13.8335 21.9708 13.8281 21.9586 13.835 21.9514C15.7418 19.942 16.4068 17.924 16.6112 16.7739C16.9768 13.0744 14.1867 10.6499 12.881 9.99875C12.872 9.99425 12.8633 10.0044 12.8685 10.013C13.5372 11.1328 13.0465 14.3893 12.0623 15.4786C11.5142 13.0605 9.50974 12.4276 8.58106 12.0014C8.57359 11.9979 8.56589 12.005 8.56753 12.0131C9.058 14.4173 7.27844 15.5608 7.03465 17.2841C6.73187 19.4245 8.21484 20.8479 8.86538 21.8251C8.87067 21.833 8.86188 21.8424 8.85287 21.8392C2.25734 19.4988 2.84403 12.9885 5.08264 10.6355Z',
  d8: 'M10.4657 1.25L11.3097 1.7485C15.5756 4.26796 19.5162 8.57033 20.807 12.7177C21.4578 14.8085 21.4555 16.938 20.371 18.7644C19.2874 20.5895 17.2111 21.9634 14.0352 22.7287C13.7169 22.8054 13.3847 22.6703 13.2149 22.3951C13.0451 22.1198 13.077 21.7682 13.2938 21.5268C14.5927 20.0799 15.7405 18.389 15.9078 16.608C16.0352 15.2522 15.6022 13.7159 13.9395 12.0815C13.9516 13.8209 13.2692 15.2693 12.5818 16.0976L11.5769 17.3084L11.2649 15.7769C10.9901 14.4281 10.2095 13.8339 9.3781 13.4156C9.32173 14.5649 8.81109 15.3922 8.43945 15.9942C8.33448 16.1643 8.2406 16.3164 8.17118 16.4527C7.06544 18.6237 8.40425 20.1994 9.33056 21.2896C9.40668 21.3792 9.48002 21.4655 9.54898 21.5486C9.76275 21.8061 9.77434 22.1723 9.57727 22.4424C9.3802 22.7125 9.0233 22.8196 8.70611 22.7038C5.84221 21.6581 3.81665 19.6996 3.06665 17.3098C2.31202 14.9053 2.89055 12.1965 4.97052 9.76016C5.63777 8.97859 6.22077 8.3303 6.73411 7.75946C8.53991 5.75141 9.48374 4.70187 10.2007 2.18136L10.4657 1.25Z',
};

export const IconFireStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-stroke-rounded IconFireStrokeRounded"
    >
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

export const IconFireDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-duotone-rounded IconFireDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconFireTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-twotone-rounded IconFireTwotoneRounded"
    >
      <path 
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

export const IconFireSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-solid-rounded IconFireSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFireBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-bulk-rounded IconFireBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFireStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-stroke-sharp IconFireStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFireSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-solid-sharp IconFireSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFire: TheIconSelfPack = {
  name: 'Fire',
  StrokeRounded: IconFireStrokeRounded,
  DuotoneRounded: IconFireDuotoneRounded,
  TwotoneRounded: IconFireTwotoneRounded,
  SolidRounded: IconFireSolidRounded,
  BulkRounded: IconFireBulkRounded,
  StrokeSharp: IconFireStrokeSharp,
  SolidSharp: IconFireSolidSharp,
};