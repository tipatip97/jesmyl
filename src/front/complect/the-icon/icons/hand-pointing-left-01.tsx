import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21.9986 8.83422H21.0513C20.4058 8.83422 19.7775 8.62547 19.2595 8.23892L14.3566 4.58048C13.7911 4.15855 13.0896 3.82155 12.4419 4.10011C11.3935 4.55106 10.7124 5.8233 12.2843 7.38052L13.9937 8.9781L3.57057 8.9781C1.52742 9.03433 1.42614 12.3231 3.57057 12.4638H9.5106C9.31946 13.9441 10.3629 20.9177 14.7831 19.9012C14.9931 19.853 15.2063 19.8048 15.4165 19.7577C16.3353 19.552 17.9727 18.944 18.93 18.2735C19.9266 17.5756 21.5155 17.8219 22 17.8219',
  d2: 'M17.6892 18.9985C16.2125 19.7056 13.3226 20.6732 11.9618 19.3211C9.81667 17.1895 9.42404 14.2082 9.5 12.5H3.75C2.7835 12.5 2 11.7165 2 10.75C2 9.7835 2.7835 9 3.75 9H14L11.6713 6.78341C11.0311 6.05938 11.1372 4.96519 11.9053 4.36948C12.5444 3.87385 13.4534 3.87719 14.0886 4.3775L18.4236 7.65863C19.1788 8.23025 19.5565 8.51608 19.9973 8.6732C20.0364 8.68714 20.0758 8.70028 20.1155 8.71263C20.5628 8.85181 21.0418 8.85181 22 8.85181V17.8919H20.382C19.4564 17.8919 18.488 18.6159 17.6892 18.9985Z',
  d3: 'M21.9986 8.83397H21.0513C20.4058 8.83397 19.7775 8.62522 19.2595 8.23867L14.3566 4.58023C13.7911 4.1583 13.0896 3.8213 12.4419 4.09986C11.3935 4.55081 10.7124 5.82305 12.2843 7.38027L13.9937 8.97785H3.57057C1.52742 9.03408 1.42614 12.3229 3.57057 12.4636H9.5106C9.31946 13.9439 10.3629 20.9175 14.7831 19.901C14.9931 19.8528 15.2063 19.8046 15.4165 19.7575C16.3353 19.5518 17.9727 18.9438 18.93 18.2733C19.9266 17.5754 21.5155 17.8217 22 17.8217',
  d4: 'M3.57057 8.98633C1.52742 9.04251 1.42614 12.3282 3.57057 12.4688H9.5106C9.31946 13.9477 10.3629 20.9149 14.7831 19.8993C14.9931 19.8512 15.2063 19.803 15.4165 19.7559C16.3353 19.5504 17.9727 18.943 18.93 18.2731C19.9266 17.5759 21.5155 17.8219 22 17.8219',
  d5: 'M21.9986 8.83145H21.0513C20.4058 8.83145 19.7775 8.62289 19.2595 8.2367L14.3566 4.58165C13.7911 4.16011 13.0896 3.82342 12.4419 4.10172C11.3935 4.55226 10.7124 5.82332 12.2843 7.37909L13.9937 8.97519H3.57057C2.9909 8.99113 2.56754 9.26703 2.30743 9.6573C1.65072 10.6426 2.03455 12.357 3.57057 12.4577H9.5106C9.31946 13.9366 10.3629 20.9037 14.7831 19.8882C14.9931 19.84 15.2063 19.7919 15.4165 19.7448C16.3353 19.5393 17.9727 18.9319 18.93 18.262C19.9266 17.5647 21.5155 17.8108 22 17.8108',
  d6: 'M3.75 8.25024C2.36929 8.25024 1.25 9.36953 1.25 10.7502C1.25 12.131 2.36929 13.2502 3.75 13.2502H8.74751C8.81064 15.1141 9.38616 17.8193 11.4332 19.8533C12.3751 20.7893 13.7529 20.8447 14.8931 20.674C16.0698 20.4978 17.2359 20.0473 18.0131 19.6751C18.2264 19.5559 19.1202 19.0744 19.3235 18.9728C19.7563 18.7564 20.1001 18.6421 20.382 18.6421C20.6473 18.6421 20.9179 18.6422 21.1214 18.625C21.3409 18.6066 21.5809 18.5643 21.8165 18.44C22.1284 18.2754 22.3833 18.0205 22.5479 17.7086C22.6721 17.473 22.7145 17.2331 22.7329 17.0135C22.75 16.8101 22.75 16.5664 22.75 16.3011L22.75 10.7166C22.75 10.4089 22.7501 10.1254 22.7266 9.88957C22.7012 9.63296 22.6003 9.16986 22.3382 8.90775C22.1107 8.63774 21.7789 8.48858 21.5062 8.38264C21.2149 8.26951 20.8293 8.14952 20.3655 8.00519C20.0584 7.89574 19.6676 7.65984 18.8762 7.06086L14.5465 3.78372C13.641 3.07504 12.3548 3.07203 11.4457 3.77706C10.3388 4.63549 10.1793 6.22852 11.1094 7.28045L12.1242 8.25024L3.75 8.25024Z',
  d7: 'M22 8.86199L19.9566 8.86192L14.1019 4.40819C13.9828 4.31755 13.8514 4.24389 13.7169 4.17824C13.5712 4.10718 13.42 4.0466 13.2609 4.0157C13.1896 4.00184 13.1483 4.00177 12.9757 4.00147L12.9741 4.00147C12.7131 4.00103 12.4951 4.02489 12.2224 4.14651C12.0869 4.20695 11.9205 4.33925 11.8253 4.41212C11.4457 4.70268 11.2377 5.20268 11.2221 5.71651C11.2066 6.22727 11.4543 6.58681 11.8261 6.9359C12.5575 7.62254 13.1902 8.19081 14.0244 9.00866L4.07562 9.00835C3.54634 9.00663 2.91945 9.10717 2.57125 9.4734C1.81371 10.3346 1.80805 11.1123 2.56357 12.0225C2.91217 12.4054 3.45911 12.4924 4.00208 12.4942L9.53615 12.4943C9.36952 15.0818 10.3788 17.7427 11.6655 19.0336C12.5372 20.0191 13.4372 20.1215 14.8913 19.9033C16.5705 19.6052 17.5857 19.0531 19.9434 17.9008L21.9474 17.9009',
  d8: 'M19.4671 18.9782C18.9899 19.2071 18.4127 19.4838 18.0131 19.6751C17.2359 20.0473 16.0699 20.4978 14.8931 20.674C13.7529 20.8447 12.3751 20.7893 11.4332 19.8533C9.38616 17.8193 8.81064 15.1141 8.74751 13.2502H3.75C2.36929 13.2502 1.25 12.131 1.25 10.7502C1.25 9.36953 2.36929 8.25024 3.75 8.25024L12.1242 8.25024L11.1308 7.30464L11.1094 7.28045C10.1793 6.22852 10.3388 4.63549 11.4457 3.77706C12.3548 3.07202 13.641 3.07504 14.5466 3.78375L20.2492 8.10205H22.75V18.6421H20.1679L19.4671 18.9782Z',
};

export const IconHandPointingLeft01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-01-stroke-rounded IconHandPointingLeft01StrokeRounded"
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

export const IconHandPointingLeft01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-01-duotone-rounded IconHandPointingLeft01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
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

export const IconHandPointingLeft01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-01-twotone-rounded IconHandPointingLeft01TwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingLeft01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-01-solid-rounded IconHandPointingLeft01SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingLeft01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-01-bulk-rounded IconHandPointingLeft01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingLeft01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-01-stroke-sharp IconHandPointingLeft01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingLeft01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-01-solid-sharp IconHandPointingLeft01SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHandPointingLeft01: TheIconSelfPack = {
  name: 'HandPointingLeft01',
  StrokeRounded: IconHandPointingLeft01StrokeRounded,
  DuotoneRounded: IconHandPointingLeft01DuotoneRounded,
  TwotoneRounded: IconHandPointingLeft01TwotoneRounded,
  SolidRounded: IconHandPointingLeft01SolidRounded,
  BulkRounded: IconHandPointingLeft01BulkRounded,
  StrokeSharp: IconHandPointingLeft01StrokeSharp,
  SolidSharp: IconHandPointingLeft01SolidSharp,
};