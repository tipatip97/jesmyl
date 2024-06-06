import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.5 14C20.5 18.4183 16.6944 22 12 22C7.30558 22 3.5 18.4183 3.5 14C3.5 9.58172 7.30558 6 12 6C16.6944 6 20.5 9.58172 20.5 14Z',
  d2: 'M12 6C12 4.66667 12.6 2 15 2',
  d3: 'M12 6C11.5 4.83333 12 2 6 2C6.33333 3 7 6 12 6Z',
  d4: 'M12 6C12 4.66667 12.6 2 15 2M12 6C11.5 4.83333 12 2 6 2C6.33333 3 7 6 12 6Z',
  d5: 'M2.75 14C2.75 9.12532 6.93485 5.25 12 5.25C17.0651 5.25 21.25 9.12532 21.25 14C21.25 18.8747 17.0651 22.75 12 22.75C6.93485 22.75 2.75 18.8747 2.75 14Z',
  d6: 'M13.2599 3.85636C12.8856 4.54951 12.75 5.41743 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75C11.5858 6.75 11.25 6.41421 11.25 6C11.25 5.24924 11.4144 4.11716 11.9401 3.14364C12.4833 2.13762 13.4532 1.25 15 1.25C15.4142 1.25 15.75 1.58579 15.75 2C15.75 2.41421 15.4142 2.75 15 2.75C14.1468 2.75 13.6167 3.19571 13.2599 3.85636Z',
  d7: 'M5.39157 1.56147C5.53254 1.36589 5.75892 1.25 6.00001 1.25C9.09485 1.25 10.7507 1.97899 11.6468 3.09224C12.0825 3.63367 12.289 4.20919 12.4189 4.68547C12.4636 4.84934 12.5032 5.018 12.5369 5.16158C12.55 5.21755 12.5623 5.26971 12.5736 5.31628C12.6187 5.50205 12.6535 5.62095 12.6894 5.70456C12.7887 5.93628 12.7649 6.2024 12.6261 6.41287C12.4874 6.62334 12.2521 6.75 12 6.75C9.33704 6.75 7.70853 5.94395 6.7069 4.89224C5.83577 3.97755 5.50798 2.93341 5.3408 2.40087C5.3214 2.33908 5.30416 2.28418 5.28849 2.23717C5.21226 2.00846 5.25061 1.75704 5.39157 1.56147ZM7.07977 2.78563C7.23912 3.13698 7.45963 3.5076 7.79311 3.85776C8.35634 4.44915 9.30675 5.03744 11.0042 5.20369C10.994 5.16327 10.9832 5.12228 10.9717 5.08015C10.8673 4.69706 10.73 4.3455 10.4782 4.03276C10.0639 3.51795 9.18916 2.93385 7.07977 2.78563Z',
  d8: 'M12.8073 5.28303C12.8783 4.81642 13.0201 4.30051 13.2599 3.85636C13.6167 3.19571 14.1468 2.75 15 2.75C15.4142 2.75 15.75 2.41421 15.75 2C15.75 1.58579 15.4142 1.25 15 1.25C13.4532 1.25 12.4833 2.13762 11.9401 3.14364C11.5647 3.83882 11.3735 4.61487 11.2949 5.27517C11.5278 5.25849 11.7629 5.25 12 5.25C12.2718 5.25 12.5411 5.26116 12.8073 5.28303Z',
  d9: 'M6.00001 1.25C5.75892 1.25 5.53254 1.36589 5.39157 1.56147C5.25061 1.75704 5.21226 2.00846 5.28849 2.23717C5.30416 2.28418 5.3214 2.33908 5.34079 2.40087C5.50798 2.93341 5.83577 3.97755 6.7069 4.89224C7.10896 5.3144 7.61202 5.69698 8.24245 6.00373C9.39373 5.51889 10.6664 5.25022 12 5.25022C12.2315 5.25022 12.4611 5.25831 12.6885 5.27422C12.4927 4.44308 11.9656 3.48841 11.6468 3.09224C10.7507 1.97899 9.09485 1.25 6.00001 1.25ZM7.79311 3.85776C7.45963 3.5076 7.23912 3.13698 7.07977 2.78563C9.18916 2.93385 10.0639 3.51795 10.4782 4.03276C10.752 4.37291 10.8981 4.78543 11.0042 5.20369C9.30675 5.03744 8.35634 4.44915 7.79311 3.85776Z',
  d10: 'M4.95898 1.25H5.99955C9.09439 1.25 10.7503 1.97899 11.6463 3.09224C11.7148 3.1773 11.7776 3.2632 11.8353 3.34942C11.8685 3.28018 11.9034 3.21152 11.9401 3.14364C12.4833 2.13762 13.4532 1.25 15 1.25V2.75C14.1468 2.75 13.6167 3.19571 13.2599 3.85636C13.0201 4.30051 12.8782 4.81642 12.8073 5.28303C17.5022 5.66878 21.25 9.3869 21.25 14C21.25 18.8747 17.0651 22.75 12 22.75C6.93485 22.75 2.75 18.8747 2.75 14C2.75 10.409 5.021 7.36034 8.24195 6.00371C7.61154 5.69696 7.1085 5.31439 6.70645 4.89224C5.83532 3.97755 5.50752 2.93341 5.34034 2.40087C5.32095 2.33909 5.30371 2.28417 5.28804 2.23717L4.95898 1.25Z',
};

export const IconOrangeStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="orange-stroke-rounded IconOrangeStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconOrangeDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="orange-duotone-rounded IconOrangeDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconOrangeTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="orange-twotone-rounded IconOrangeTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconOrangeSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="orange-solid-rounded IconOrangeSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconOrangeBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="orange-bulk-rounded IconOrangeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconOrangeStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="orange-stroke-sharp IconOrangeStrokeSharp"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconOrangeSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="orange-solid-sharp IconOrangeSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfOrange: TheIconSelfPack = {
  name: 'Orange',
  StrokeRounded: IconOrangeStrokeRounded,
  DuotoneRounded: IconOrangeDuotoneRounded,
  TwotoneRounded: IconOrangeTwotoneRounded,
  SolidRounded: IconOrangeSolidRounded,
  BulkRounded: IconOrangeBulkRounded,
  StrokeSharp: IconOrangeStrokeSharp,
  SolidSharp: IconOrangeSolidSharp,
};