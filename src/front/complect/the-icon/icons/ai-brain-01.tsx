import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 4.5C5.34315 4.5 4 5.84315 4 7.5C4 8.06866 4.15822 8.60037 4.43304 9.0535C3.04727 9.31855 2 10.537 2 12C2 13.463 3.04727 14.6814 4.43304 14.9465M7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V19.5C12 20.8807 10.8807 22 9.5 22C8.11929 22 7 20.8807 7 19.5C5.34315 19.5 4 18.1569 4 16.5C4 15.9313 4.15822 15.3996 4.43304 14.9465M7 4.5C7 5.31791 7.39278 6.04408 8 6.50018M4.43304 14.9465C4.78948 14.3588 5.34207 13.9032 6 13.6707',
  d2: 'M17 19.5C18.6569 19.5 20 18.1569 20 16.5C20 15.9313 19.8418 15.3996 19.567 14.9465C20.9527 14.6814 22 13.463 22 12C22 10.537 20.9527 9.31855 19.567 9.0535M17 19.5C17 20.8807 15.8807 22 14.5 22C13.1193 22 12 20.8807 12 19.5L12 4.5C12 3.11929 13.1193 2 14.5 2C15.8807 2 17 3.11929 17 4.5C18.6569 4.5 20 5.84315 20 7.5C20 8.06866 19.8418 8.60037 19.567 9.0535M17 19.5C17 18.6821 16.6072 17.9559 16 17.4998M19.567 9.0535C19.2105 9.64121 18.6579 10.0967 18 10.3293',
  d3: 'M4 16.5C4 18.1569 5.34315 19.5 7 19.5C7 20.8807 8.11929 22 9.5 22C10.8807 22 12 20.8807 12 19.5V4.5C12 3.11929 10.8807 2 9.5 2C8.11929 2 7 3.11929 7 4.5C5.34315 4.5 4 5.84315 4 7.5C4 8.06866 4.15822 8.60037 4.43304 9.0535C3.04727 9.31855 2 10.537 2 12C2 13.463 3.04727 14.6814 4.43304 14.9465C4.15822 15.3996 4 15.9313 4 16.5Z',
  d4: 'M3.41442 15.399C2.13588 14.8017 1.25 13.5048 1.25 12C1.25 10.4952 2.13588 9.19833 3.41442 8.60095C3.30751 8.25245 3.25 7.88261 3.25 7.5C3.25 5.66001 4.57518 4.12953 6.3232 3.81091C6.63925 2.34698 7.94152 1.25 9.5 1.25C11.2949 1.25 12.75 2.70507 12.75 4.5V19.5C12.75 21.2949 11.2949 22.75 9.5 22.75C7.94152 22.75 6.63925 21.653 6.3232 20.1891C4.57518 19.8705 3.25 18.34 3.25 16.5C3.25 16.1174 3.30751 15.7476 3.41442 15.399Z',
  d5: 'M14.5 21.25C15.4665 21.25 16.25 20.4665 16.25 19.5C16.25 18.9279 15.9763 18.42 15.5496 18.0995C15.2184 17.8507 15.1516 17.3806 15.4003 17.0494C15.6491 16.7182 16.1192 16.6514 16.4504 16.9001C17.0224 17.3298 17.449 17.9455 17.6397 18.6578C18.5707 18.3822 19.25 17.5204 19.25 16.5C19.25 16.0723 19.1314 15.6746 18.9257 15.3354C18.7983 15.1254 18.7818 14.8663 18.8816 14.6418C18.9814 14.4174 19.1848 14.256 19.4261 14.2099C20.465 14.0111 21.25 13.0964 21.25 12C21.25 11.0638 20.6776 10.26 19.8635 9.92142C19.4387 10.4234 18.8839 10.8124 18.2499 11.0364C17.8594 11.1745 17.4309 10.9698 17.2929 10.5792C17.1548 10.1887 17.3595 9.7602 17.7501 9.62216C18.2425 9.44812 18.6578 9.10626 18.9257 8.66457C19.1314 8.32539 19.25 7.92769 19.25 7.5C19.25 6.25736 18.2426 5.25 17 5.25C16.5858 5.25 16.25 4.91421 16.25 4.5C16.25 3.5335 15.4665 2.75 14.5 2.75C13.5335 2.75 12.75 3.5335 12.75 4.5L12.75 19.5C12.75 20.4665 13.5335 21.25 14.5 21.25ZM20.5856 8.60095C21.8641 9.19833 22.75 10.4952 22.75 12C22.75 13.5048 21.8641 14.8017 20.5856 15.399C20.6925 15.7475 20.75 16.1174 20.75 16.5C20.75 18.34 19.4248 19.8705 17.6768 20.1891C17.3608 21.653 16.0585 22.75 14.5 22.75C12.7051 22.75 11.25 21.2949 11.25 19.5L11.25 4.5C11.25 2.70507 12.7051 1.25 14.5 1.25C16.0585 1.25 17.3608 2.34697 17.6768 3.81091C19.4248 4.12953 20.75 5.66001 20.75 7.5C20.75 7.88261 20.6925 8.25245 20.5856 8.60095Z',
  d6: 'M12 21.5768C12.5962 22.2936 13.4948 22.75 14.5 22.75C16.0585 22.75 17.3608 21.653 17.6768 20.1891C19.4248 19.8705 20.75 18.34 20.75 16.5C20.75 16.1174 20.6925 15.7475 20.5856 15.399C21.8641 14.8017 22.75 13.5048 22.75 12C22.75 10.4952 21.8641 9.19833 20.5856 8.60095C20.6925 8.25245 20.75 7.88261 20.75 7.5C20.75 5.66001 19.4248 4.12953 17.6768 3.81091C17.3608 2.34697 16.0585 1.25 14.5 1.25C13.4948 1.25 12.5962 1.70637 12 2.42321C12.4683 2.98637 12.75 3.71029 12.75 4.5V19.5C12.75 20.2897 12.4683 21.0136 12 21.5768ZM16.25 19.5C16.25 20.4665 15.4665 21.25 14.5 21.25C13.5335 21.25 12.75 20.4665 12.75 19.5V4.5C12.75 3.5335 13.5335 2.75 14.5 2.75C15.4665 2.75 16.25 3.5335 16.25 4.5C16.25 4.91421 16.5858 5.25 17 5.25C18.2426 5.25 19.25 6.25736 19.25 7.5C19.25 7.92769 19.1314 8.32539 18.9257 8.66457C18.6578 9.10626 18.2425 9.44812 17.7501 9.62216C17.3595 9.7602 17.1548 10.1887 17.2929 10.5792C17.4309 10.9698 17.8594 11.1745 18.2499 11.0364C18.8839 10.8124 19.4387 10.4234 19.8635 9.92142C20.6776 10.26 21.25 11.0638 21.25 12C21.25 13.0964 20.465 14.0111 19.4261 14.2099C19.1848 14.256 18.9814 14.4174 18.8816 14.6418C18.7818 14.8663 18.7983 15.1254 18.9257 15.3354C19.1314 15.6746 19.25 16.0723 19.25 16.5C19.25 17.5204 18.5707 18.3822 17.6397 18.6578C17.449 17.9455 17.0224 17.3298 16.4504 16.9001C16.1192 16.6514 15.6491 16.7182 15.4003 17.0494C15.1516 17.3806 15.2184 17.8507 15.5496 18.0995C15.9763 18.42 16.25 18.9279 16.25 19.5Z',
  d7: 'M14.5 21.25C15.4665 21.25 16.25 20.4665 16.25 19.5C16.25 18.9279 15.9763 18.42 15.5496 18.0995L16.4504 16.9001C17.0224 17.3298 17.449 17.9455 17.6397 18.6578C18.5707 18.3822 19.25 17.5204 19.25 16.5C19.25 16.0723 19.1314 15.6746 18.9257 15.3354L18.366 14.4126L19.4261 14.2099C20.465 14.0111 21.25 13.0964 21.25 12C21.25 11.0638 20.6776 10.26 19.8635 9.92142C19.4387 10.4234 18.8839 10.8124 18.2499 11.0364L17.7501 9.62216C18.2425 9.44812 18.6578 9.10626 18.9257 8.66457C19.1314 8.32539 19.25 7.92769 19.25 7.5C19.25 6.25736 18.2426 5.25 17 5.25L16.25 5.25L16.25 4.5C16.25 3.5335 15.4665 2.75 14.5 2.75C13.5335 2.75 12.75 3.5335 12.75 4.5L12.75 19.5C12.75 20.4665 13.5335 21.25 14.5 21.25ZM20.5856 8.60095C21.8641 9.19833 22.75 10.4952 22.75 12C22.75 13.5048 21.8641 14.8017 20.5856 15.399C20.6925 15.7475 20.75 16.1174 20.75 16.5C20.75 18.34 19.4248 19.8705 17.6768 20.1891C17.3608 21.653 16.0585 22.75 14.5 22.75C12.7051 22.75 11.25 21.2949 11.25 19.5L11.25 4.5C11.25 2.70507 12.7051 1.25 14.5 1.25C16.0585 1.25 17.3608 2.34697 17.6768 3.81091C19.4248 4.12953 20.75 5.66001 20.75 7.5C20.75 7.88261 20.6925 8.25245 20.5856 8.60095Z',
};

export const IconAiBrain01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-01-stroke-rounded IconAiBrain01StrokeRounded"
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

export const IconAiBrain01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-01-duotone-rounded IconAiBrain01DuotoneRounded"
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

export const IconAiBrain01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-01-twotone-rounded IconAiBrain01TwotoneRounded"
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

export const IconAiBrain01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-01-solid-rounded IconAiBrain01SolidRounded"
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

export const IconAiBrain01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-01-bulk-rounded IconAiBrain01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiBrain01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-01-stroke-sharp IconAiBrain01StrokeSharp"
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

export const IconAiBrain01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-01-solid-sharp IconAiBrain01SolidSharp"
    >
      <path 
        d={d.d4} 
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

export const iconPackOfAiBrain01: TheIconSelfPack = {
  name: 'AiBrain01',
  StrokeRounded: IconAiBrain01StrokeRounded,
  DuotoneRounded: IconAiBrain01DuotoneRounded,
  TwotoneRounded: IconAiBrain01TwotoneRounded,
  SolidRounded: IconAiBrain01SolidRounded,
  BulkRounded: IconAiBrain01BulkRounded,
  StrokeSharp: IconAiBrain01StrokeSharp,
  SolidSharp: IconAiBrain01SolidSharp,
};