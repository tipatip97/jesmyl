import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 22V19C20 16.1716 20 14.7574 19.1213 13.8787C18.2426 13 16.8284 13 14 13L12 15L10 13C7.17157 13 5.75736 13 4.87868 13.8787C4 14.7574 4 16.1716 4 19V22',
  d2: 'M16 13V18.5',
  d3: 'M8.5 13V17M8.5 17C9.60457 17 10.5 17.8954 10.5 19V20M8.5 17C7.39543 17 6.5 17.8954 6.5 19V20',
  d4: 'M15.5 6.5V5.5C15.5 3.567 13.933 2 12 2C10.067 2 8.5 3.567 8.5 5.5V6.5C8.5 8.433 10.067 10 12 10C13.933 10 15.5 8.433 15.5 6.5Z',
  d5: 'M16.75 19.25C16.75 19.6642 16.4142 20 16 20C15.5858 20 15.25 19.6642 15.25 19.25C15.25 18.8358 15.5858 18.5 16 18.5C16.4142 18.5 16.75 18.8358 16.75 19.25Z',
  d6: 'M20 22V19C20 16.1716 20 14.7574 19.1213 13.8787C18.2426 13 16.8284 13 14 13L12 15L10 13C7.17157 13 5.75736 13 4.87868 13.8787C4 14.7574 4 16.1716 4 19V22H20Z',
  d7: 'M16 13V18.5M16 18.5C15.5858 18.5 15.25 18.8358 15.25 19.25C15.25 19.6642 15.5858 20 16 20C16.4142 20 16.75 19.6642 16.75 19.25C16.75 18.8358 16.4142 18.5 16 18.5Z',
  d8: 'M7.75 5.5C7.75 3.15279 9.65279 1.25 12 1.25C14.3472 1.25 16.25 3.15279 16.25 5.5V6.5C16.25 8.84721 14.3472 10.75 12 10.75C9.65279 10.75 7.75 8.84721 7.75 6.5V5.5Z',
  d9: 'M10 12.25C10.1989 12.25 10.3897 12.329 10.5303 12.4697L12 13.9393L13.4697 12.4697C13.6103 12.329 13.8011 12.25 14 12.25H14H14.0001C14.4393 12.25 14.8568 12.25 15.25 12.2538L15.25 17.9507C14.8016 18.21 14.5 18.6948 14.5 19.25C14.5 20.0784 15.1716 20.75 16 20.75C16.8284 20.75 17.5 20.0784 17.5 19.25C17.5 18.6948 17.1984 18.21 16.75 17.9507V12.3033C16.9786 12.3192 17.1928 12.3398 17.3918 12.3665C18.2919 12.4875 19.0497 12.7464 19.6517 13.3484C20.2536 13.9503 20.5125 14.7081 20.6335 15.6083C20.75 16.4752 20.75 17.5775 20.75 18.9451V22C20.75 22.4142 20.4142 22.75 20 22.75L4 22.75C3.58579 22.75 3.25 22.4142 3.25 22L3.25 18.9451V18.9451C3.24998 17.5775 3.24996 16.4752 3.36652 15.6082C3.48754 14.7081 3.74643 13.9503 4.34835 13.3484C4.95027 12.7464 5.70814 12.4875 6.60825 12.3665C6.94629 12.3211 7.32845 12.2934 7.75 12.2764V16.3535C6.59575 16.68 5.75 17.7412 5.75 19V20C5.75 20.4142 6.08579 20.75 6.5 20.75C6.91421 20.75 7.25 20.4142 7.25 20L7.25 19C7.25 18.3096 7.80964 17.75 8.5 17.75C9.19036 17.75 9.75 18.3096 9.75 19V20C9.75 20.4142 10.0858 20.75 10.5 20.75C10.9142 20.75 11.25 20.4142 11.25 20V19C11.25 17.7412 10.4043 16.68 9.25 16.3535V12.2508C9.49212 12.25 9.74224 12.25 9.99983 12.25H9.99994H9.99998H10Z',
  d10: 'M10 12.25C10.1989 12.25 10.3897 12.329 10.5303 12.4697L12 13.9393L13.4697 12.4697C13.6103 12.329 13.8011 12.25 14 12.25H14C15.3676 12.25 16.5248 12.25 17.3918 12.3665C18.2919 12.4875 19.0497 12.7464 19.6517 13.3484C20.2536 13.9503 20.5125 14.7081 20.6335 15.6083C20.75 16.4752 20.75 17.5775 20.75 18.9451V22C20.75 22.4142 20.4142 22.75 20 22.75H4C3.58579 22.75 3.25 22.4142 3.25 22V18.9451V18.9451C3.24998 17.5775 3.24996 16.4752 3.36652 15.6082C3.48754 14.7081 3.74643 13.9503 4.34835 13.3484C4.95027 12.7464 5.70814 12.4875 6.60825 12.3665C7.47521 12.25 8.6324 12.25 9.99998 12.25H10Z',
  d11: 'M9.25 16.3537C10.4043 16.6802 11.25 17.7414 11.25 19.0002V20.0002C11.25 20.4144 10.9142 20.7502 10.5 20.7502C10.0858 20.7502 9.75 20.4144 9.75 20.0002V19.0002C9.75 18.3099 9.19036 17.7502 8.5 17.7502C7.80964 17.7502 7.25 18.3099 7.25 19.0002V20.0002C7.25 20.4144 6.91421 20.7502 6.5 20.7502C6.08579 20.7502 5.75 20.4144 5.75 20.0002V19.0002C5.75 17.7414 6.59575 16.6802 7.75 16.3537V12.2766C8.20592 12.2584 8.70792 12.2527 9.25 12.251V16.3537Z',
  d12: 'M15.25 17.9509C14.8016 18.2102 14.5 18.695 14.5 19.2502C14.5 20.0786 15.1716 20.7502 16 20.7502C16.8284 20.7502 17.5 20.0786 17.5 19.2502C17.5 18.695 17.1984 18.2102 16.75 17.9509V12.3035C16.3025 12.2724 15.8001 12.2594 15.25 12.2541V17.9509Z',
  d13: 'M20 22V14.5C20 14.5 18.6884 13.0002 17 13.0001L14 13L12 15L10 13.0002L7 13.0002C5.31156 13.0003 4 14.5002 4 14.5002V22.0002',
  d14: 'M17 12.2501C18.0609 12.2501 18.9617 12.7171 19.5615 13.1344C19.8676 13.3474 20.4476 13.85 20.75 14.2183V22.75L3.25 22.7502L3.25 14.2185C3.65262 13.7171 4.13238 13.3476 4.4385 13.1346C5.03829 12.7173 5.93907 12.2503 6.99996 12.2502L7.75 12.2502V16.3535C6.59575 16.68 5.75 17.7412 5.75 19V20.75H7.25L7.25 19C7.25 18.3096 7.80964 17.75 8.5 17.75C9.19036 17.75 9.75 18.3096 9.75 19V20.75H11.25V19C11.25 17.7412 10.4043 16.68 9.25 16.3535V12.2502L10.3106 12.2502L12 13.9394L13.6893 12.25L15.25 12.25L15.25 17.9507C14.8016 18.21 14.5 18.6948 14.5 19.25C14.5 20.0784 15.1716 20.75 16 20.75C16.8284 20.75 17.5 20.0784 17.5 19.25C17.5 18.6948 17.1984 18.21 16.75 17.9507V12.2501L17 12.2501Z',
};

export const IconDoctor01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="doctor-01-stroke-rounded IconDoctor01StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDoctor01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="doctor-01-duotone-rounded IconDoctor01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDoctor01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="doctor-01-twotone-rounded IconDoctor01TwotoneRounded"
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
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDoctor01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="doctor-01-solid-rounded IconDoctor01SolidRounded"
    >
      <path 
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

export const IconDoctor01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="doctor-01-bulk-rounded IconDoctor01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDoctor01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="doctor-01-stroke-sharp IconDoctor01StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconDoctor01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="doctor-01-solid-sharp IconDoctor01SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDoctor01: TheIconSelfPack = {
  name: 'Doctor01',
  StrokeRounded: IconDoctor01StrokeRounded,
  DuotoneRounded: IconDoctor01DuotoneRounded,
  TwotoneRounded: IconDoctor01TwotoneRounded,
  SolidRounded: IconDoctor01SolidRounded,
  BulkRounded: IconDoctor01BulkRounded,
  StrokeSharp: IconDoctor01StrokeSharp,
  SolidSharp: IconDoctor01SolidSharp,
};