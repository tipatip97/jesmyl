import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 4.5C5.34315 4.5 4 5.84315 4 7.5C4 8.06866 4.15822 8.60037 4.43304 9.0535C3.04727 9.31855 2 10.537 2 12C2 13.463 3.04727 14.6814 4.43304 14.9465M7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V19.5C12 20.8807 10.8807 22 9.5 22C8.11929 22 7 20.8807 7 19.5C5.34315 19.5 4 18.1569 4 16.5C4 15.9313 4.15822 15.3996 4.43304 14.9465M7 4.5C7 5.31791 7.39278 6.04408 8 6.50018M4.43304 14.9465C4.78948 14.3588 5.34207 13.9032 6 13.6707',
  d2: 'M19.25 4.75L17 7H15M18.5 4.75C18.5 5.16421 18.8358 5.5 19.25 5.5C19.6642 5.5 20 5.16421 20 4.75C20 4.33579 19.6642 4 19.25 4C18.8358 4 18.5 4.33579 18.5 4.75Z',
  d3: 'M19.25 19.25L17 17H15M18.5 19.25C18.5 18.8358 18.8358 18.5 19.25 18.5C19.6642 18.5 20 18.8358 20 19.25C20 19.6642 19.6642 20 19.25 20C18.8358 20 18.5 19.6642 18.5 19.25Z',
  d4: 'M19.25 12H15M18.5 12C18.5 12.4142 18.8358 12.75 19.25 12.75C19.6642 12.75 20 12.4142 20 12C20 11.5858 19.6642 11.25 19.25 11.25C18.8358 11.25 18.5 11.5858 18.5 12Z',
  d5: 'M4 16.5C4 18.1569 5.34315 19.5 7 19.5C7 20.8807 8.11929 22 9.5 22C10.8807 22 12 20.8807 12 19.5V4.5C12 3.11929 10.8807 2 9.5 2C8.11929 2 7 3.11929 7 4.5C5.34315 4.5 4 5.84315 4 7.5C4 8.06866 4.15822 8.60037 4.43304 9.0535C3.04727 9.31855 2 10.537 2 12C2 13.463 3.04727 14.6814 4.43304 14.9465C4.15822 15.3996 4 15.9313 4 16.5Z',
  d6: 'M3.41442 15.399C2.13588 14.8017 1.25 13.5048 1.25 12C1.25 10.4952 2.13588 9.19833 3.41442 8.60095C3.30751 8.25245 3.25 7.88261 3.25 7.5C3.25 5.66001 4.57518 4.12953 6.3232 3.81091C6.63925 2.34698 7.94152 1.25 9.5 1.25C11.2949 1.25 12.75 2.70507 12.75 4.5V19.5C12.75 21.2949 11.2949 22.75 9.5 22.75C7.94152 22.75 6.63925 21.653 6.3232 20.1891C4.57518 19.8705 3.25 18.34 3.25 16.5C3.25 16.1174 3.30751 15.7476 3.41442 15.399Z',
  d7: 'M17.75 4.75C17.75 3.92157 18.4216 3.25 19.25 3.25C20.0784 3.25 20.75 3.92157 20.75 4.75C20.75 5.57843 20.0784 6.25 19.25 6.25C19.1156 6.25 18.9854 6.23233 18.8615 6.19919L17.5303 7.53033C17.3897 7.67098 17.1989 7.75 17 7.75H15C14.5858 7.75 14.25 7.41421 14.25 7C14.25 6.58579 14.5858 6.25 15 6.25H16.6893L17.8008 5.13853C17.7677 5.01461 17.75 4.88437 17.75 4.75Z',
  d8: 'M14.25 17C14.25 16.5858 14.5858 16.25 15 16.25H17C17.1989 16.25 17.3897 16.329 17.5303 16.4697L18.8615 17.8008C18.9854 17.7677 19.1156 17.75 19.25 17.75C20.0784 17.75 20.75 18.4216 20.75 19.25C20.75 20.0784 20.0784 20.75 19.25 20.75C18.4216 20.75 17.75 20.0784 17.75 19.25C17.75 19.1156 17.7677 18.9854 17.8008 18.8615L16.6893 17.75H15C14.5858 17.75 14.25 17.4142 14.25 17Z',
  d9: 'M17.9507 11.25C18.21 10.8016 18.6948 10.5 19.25 10.5C20.0784 10.5 20.75 11.1716 20.75 12C20.75 12.8284 20.0784 13.5 19.25 13.5C18.6948 13.5 18.21 13.1984 17.9507 12.75H15C14.5858 12.75 14.25 12.4142 14.25 12C14.25 11.5858 14.5858 11.25 15 11.25H17.9507Z',
  d10: 'M19.25 4.75L17 7H14.5M18.5 4.75C18.5 5.16421 18.8358 5.5 19.25 5.5C19.6642 5.5 20 5.16421 20 4.75C20 4.33579 19.6642 4 19.25 4C18.8358 4 18.5 4.33579 18.5 4.75Z',
  d11: 'M19.25 19.25L17 17H14.5M18.5 19.25C18.5 18.8358 18.8358 18.5 19.25 18.5C19.6642 18.5 20 18.8358 20 19.25C20 19.6642 19.6642 20 19.25 20C18.8358 20 18.5 19.6642 18.5 19.25Z',
  d12: 'M19.25 12H14.5M18.5 12C18.5 12.4142 18.8358 12.75 19.25 12.75C19.6642 12.75 20 12.4142 20 12C20 11.5858 19.6642 11.25 19.25 11.25C18.8358 11.25 18.5 11.5858 18.5 12Z',
  d13: 'M17.75 4.75C17.75 3.92157 18.4216 3.25 19.25 3.25C20.0784 3.25 20.75 3.92157 20.75 4.75C20.75 5.57843 20.0784 6.25 19.25 6.25C19.1156 6.25 18.9854 6.23233 18.8615 6.19919L17.5303 7.53033C17.3897 7.67098 17.1989 7.75 17 7.75H14.5V6.25H16.6893L17.8008 5.13853C17.7677 5.01461 17.75 4.88437 17.75 4.75Z',
  d14: 'M14.5 16.25H17C17.1989 16.25 17.3897 16.329 17.5303 16.4697L18.8615 17.8008C18.9854 17.7677 19.1156 17.75 19.25 17.75C20.0784 17.75 20.75 18.4216 20.75 19.25C20.75 20.0784 20.0784 20.75 19.25 20.75C18.4216 20.75 17.75 20.0784 17.75 19.25C17.75 19.1156 17.7677 18.9854 17.8008 18.8615L16.6893 17.75H14.5V16.25Z',
  d15: 'M17.9507 11.25C18.21 10.8016 18.6948 10.5 19.25 10.5C20.0784 10.5 20.75 11.1716 20.75 12C20.75 12.8284 20.0784 13.5 19.25 13.5C18.6948 13.5 18.21 13.1984 17.9507 12.75H14.5V11.25H17.9507Z',
};

export const IconAiBrain04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-04-stroke-rounded IconAiBrain04StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAiBrain04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-04-duotone-rounded IconAiBrain04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconAiBrain04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-04-twotone-rounded IconAiBrain04TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconAiBrain04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-04-solid-rounded IconAiBrain04SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
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

export const IconAiBrain04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-04-bulk-rounded IconAiBrain04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
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

export const IconAiBrain04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-04-stroke-sharp IconAiBrain04StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiBrain04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-04-solid-sharp IconAiBrain04SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAiBrain04: TheIconSelfPack = {
  name: 'AiBrain04',
  StrokeRounded: IconAiBrain04StrokeRounded,
  DuotoneRounded: IconAiBrain04DuotoneRounded,
  TwotoneRounded: IconAiBrain04TwotoneRounded,
  SolidRounded: IconAiBrain04SolidRounded,
  BulkRounded: IconAiBrain04BulkRounded,
  StrokeSharp: IconAiBrain04StrokeSharp,
  SolidSharp: IconAiBrain04SolidSharp,
};