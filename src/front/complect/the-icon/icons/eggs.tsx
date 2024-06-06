import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 4.31768C14.2461 2.34541 17.0188 1.33526 19.1747 2.48374C22.5319 4.27221 22.7145 10.4012 20.684 14.5638C19.8309 16.3126 18.7032 17.4255 17.4415 18',
  d2: 'M15 15.5C15 19.9183 12.0899 22 8.5 22C4.91015 22 2 19.9183 2 15.5C2 11.0817 4.78571 6 8.5 6C12.2143 6 15 11.0817 15 15.5Z',
  d3: 'M13.542 2.1191C15.6386 0.947851 18.0704 0.501668 20.0698 1.73984C22.0485 2.96522 22.8882 5.4039 22.9896 7.90638C23.0922 10.4375 22.4571 13.2426 21.2486 15.4879C20.4022 17.0603 19.2147 18.0456 17.9381 18.6153C17.5029 18.8096 17.2852 18.9067 17.1419 18.789C16.9986 18.6712 17.0578 18.4117 17.1763 17.8926C17.3497 17.1334 17.438 16.3225 17.438 15.4672C17.438 12.7915 16.6111 9.95448 15.2037 7.73595C14.3858 6.44676 13.2569 5.20509 11.8466 4.41116C11.4587 4.19282 11.2648 4.08364 11.2509 3.92622C11.2369 3.76881 11.3927 3.64034 11.7044 3.38341C12.2921 2.89881 12.9099 2.4722 13.542 2.1191Z',
  d4: 'M8.5 5.25C6.27724 5.25 4.45163 6.76331 3.22452 8.69029C1.98684 10.6339 1.25 13.1487 1.25 15.5C1.25 17.8829 2.04087 19.723 3.39843 20.961C4.74446 22.1885 6.56579 22.75 8.5 22.75C10.4342 22.75 12.2555 22.1885 13.6016 20.961C14.9591 19.723 15.75 17.8829 15.75 15.5C15.75 13.1487 15.0132 10.6339 13.7755 8.69029C12.5484 6.76331 10.7228 5.25 8.5 5.25Z',
  d5: 'M3.22452 8.69053C4.45163 6.76356 6.27724 5.25024 8.5 5.25024C10.7228 5.25024 12.5484 6.76356 13.7755 8.69053C15.0132 10.6341 15.75 13.149 15.75 15.5002C15.75 17.8832 14.9591 19.7232 13.6016 20.9613C12.2555 22.1888 10.4342 22.7502 8.5 22.7502C6.56579 22.7502 4.74446 22.1888 3.39843 20.9613C2.04087 19.7232 1.25 17.8832 1.25 15.5002C1.25 13.149 1.98684 10.6341 3.22452 8.69053Z',
  d6: 'M13.1793 2.53711C15.124 1.33819 17.4268 0.77254 19.427 1.74191C21.4273 2.71128 22.4102 4.86926 22.6741 7.13849C22.9402 9.42727 22.5065 12.0117 21.4811 14.1276C20.4419 16.272 18.9277 17.5829 17.1662 18.105C17.0853 18.129 17.0042 18.1512 16.9228 18.1717C17.1398 17.3437 17.2507 16.4499 17.2507 15.5005C17.2507 12.8649 16.4331 10.0704 15.0415 7.88507C14.0982 6.40386 12.7366 4.98634 11.0029 4.25811C11.6763 3.59471 12.4124 3.00992 13.1793 2.53711Z',
};

export const IconEggsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eggs-stroke-rounded IconEggsStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconEggsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eggs-duotone-rounded IconEggsDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconEggsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eggs-twotone-rounded IconEggsTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconEggsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eggs-solid-rounded IconEggsSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEggsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eggs-bulk-rounded IconEggsBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEggsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eggs-stroke-sharp IconEggsStrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconEggsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eggs-solid-sharp IconEggsSolidSharp"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEggs: TheIconSelfPack = {
  name: 'Eggs',
  StrokeRounded: IconEggsStrokeRounded,
  DuotoneRounded: IconEggsDuotoneRounded,
  TwotoneRounded: IconEggsTwotoneRounded,
  SolidRounded: IconEggsSolidRounded,
  BulkRounded: IconEggsBulkRounded,
  StrokeSharp: IconEggsStrokeSharp,
  SolidSharp: IconEggsSolidSharp,
};