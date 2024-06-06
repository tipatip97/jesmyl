import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 20H3',
  d2: 'M3 16H17.1622C19.5429 16 20.7332 16 20.9652 15.3728C21.1971 14.7455 20.2628 14.0531 18.3943 12.6682L6.69853 4',
  d3: 'M22.25 20C22.25 19.3096 21.6904 18.75 21 18.75H3C2.30964 18.75 1.75 19.3096 1.75 20C1.75 20.6904 2.30964 21.25 3 21.25H21C21.6904 21.25 22.25 20.6904 22.25 20Z',
  d4: 'M5.69407 3.25578C5.283 3.81042 5.39939 4.59327 5.95402 5.00433L17.6498 13.6726C18.2386 14.1089 18.6976 14.4504 19.0487 14.7303C18.5715 14.749 17.9573 14.7501 17.162 14.7501H2.99978C2.30943 14.7501 1.74978 15.3097 1.74978 16.0001C1.74978 16.6904 2.30943 17.2501 2.99978 17.2501L17.2509 17.2501C18.3653 17.2501 19.3223 17.2502 20.025 17.1619C20.3881 17.1163 20.7912 17.0361 21.1543 16.8596C21.5508 16.6668 21.9417 16.3354 22.1374 15.8064C22.3359 15.2696 22.2501 14.7533 22.0501 14.338C21.8712 13.9666 21.5946 13.6566 21.3371 13.4071C20.8389 12.9242 20.0835 12.3644 19.2132 11.7195C19.1884 11.7011 19.1634 11.6826 19.1384 11.664L7.44261 2.99583C6.88798 2.58476 6.10513 2.70115 5.69407 3.25578Z',
  d5: 'M3 16H21.0001L6.69853 4',
  d6: 'M2.5 21.25H21.4249V18.75H2.5V21.25Z',
  d7: 'M16.8342 14.5005L5.16736 4.66514L6.76789 2.75L21.0552 14.7929C21.4561 15.1307 21.6039 15.6842 21.4249 16.178C21.2458 16.6718 20.7783 17.0005 20.2549 17.0005H2.5V14.5005H16.8342Z',
};

export const IconInequality02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inequality-02-stroke-rounded IconInequality02StrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInequality02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inequality-02-duotone-rounded IconInequality02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInequality02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inequality-02-twotone-rounded IconInequality02TwotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInequality02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inequality-02-solid-rounded IconInequality02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInequality02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inequality-02-bulk-rounded IconInequality02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInequality02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inequality-02-stroke-sharp IconInequality02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInequality02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inequality-02-solid-sharp IconInequality02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfInequality02: TheIconSelfPack = {
  name: 'Inequality02',
  StrokeRounded: IconInequality02StrokeRounded,
  DuotoneRounded: IconInequality02DuotoneRounded,
  TwotoneRounded: IconInequality02TwotoneRounded,
  SolidRounded: IconInequality02SolidRounded,
  BulkRounded: IconInequality02BulkRounded,
  StrokeSharp: IconInequality02StrokeSharp,
  SolidSharp: IconInequality02SolidSharp,
};