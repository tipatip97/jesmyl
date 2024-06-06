import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.5 12C19.1629 11.2878 18.7648 10.7376 18.0652 10.3184C17.386 9.91152 16.4216 9.76687 14.493 9.47757L11.5051 9V3.75C11.5051 2.7835 10.7216 2 9.75514 2C8.78864 2 8.00514 2.7835 8.00514 3.75V13.5L5.87124 11.671C5.12437 11.0308 3.99565 11.1369 3.38114 11.905C2.86987 12.5441 2.87331 13.4531 3.38941 14.0883L6.74791 18.2219C7.78533 19.4987 8.30405 20.1371 9.00012 20.5151C9.12494 20.5829 9.25329 20.644 9.38462 20.6981C10.0246 20.9619 10.7335 20.9952 12 20.9994',
  d2: 'M15 19.5C15 18.5654 15 18.0981 15.201 17.75C15.3326 17.522 15.522 17.3326 15.75 17.201C16.0981 17 16.5654 17 17.5 17H18.5C19.4346 17 19.9019 17 20.25 17.201C20.478 17.3326 20.6674 17.522 20.799 17.75C21 18.0981 21 18.5654 21 19.5C21 20.4346 21 20.9019 20.799 21.25C20.6674 21.478 20.478 21.6674 20.25 21.799C19.9019 22 19.4346 22 18.5 22H17.5C16.5654 22 16.0981 22 15.75 21.799C15.522 21.6674 15.3326 21.478 15.201 21.25C15 20.9019 15 20.4346 15 19.5Z',
  d3: 'M16.5 15.5C16.5 14.6716 17.1716 14 18 14C18.8284 14 19.5 14.6716 19.5 15.5V17H16.5V15.5Z',
  d4: 'M8.00514 13.5L5.87124 11.671C5.12437 11.0308 3.99565 11.1369 3.38114 11.905C2.86987 12.5441 2.87331 13.4531 3.38941 14.0883L6.74791 18.2219C7.78533 19.4987 8.30405 20.1371 9.00012 20.5151C9.12494 20.5829 9.25329 20.644 9.38462 20.6981C10.1169 21 10.9395 21 12.5847 21H13.6336C14.2505 21 14.7136 21 15.0901 20.9807C15 20.6568 15 20.2153 15 19.5C15 18.5654 15 18.0981 15.201 17.75C15.3326 17.522 15.522 17.3326 15.75 17.201C16.0981 17 16.5654 17 17.5 17H18.5C18.7434 17 18.9552 17 19.1413 17.0036C19.1768 16.8973 19.211 16.795 19.244 16.6962C19.7779 15.0987 20 14.4341 20 13.4736C20 12 19.1872 10.9906 18.0652 10.3184C17.386 9.91152 16.4216 9.76687 14.493 9.47757L11.5051 9V3.75C11.5051 2.7835 10.7216 2 9.75514 2C8.78864 2 8.00514 2.7835 8.00514 3.75V13.5Z',
  d5: 'M18 13.25C16.7574 13.25 15.75 14.2574 15.75 15.5V16.3877C15.6227 16.4278 15.4974 16.4808 15.375 16.5514C15.033 16.7489 14.7489 17.033 14.5514 17.375C14.3741 17.6822 14.308 18.0082 14.2782 18.3374C14.25 18.6486 14.25 19.0924 14.25 19.5322C14.25 19.972 14.25 20.3514 14.2782 20.6626C14.308 20.9918 14.3741 21.3178 14.5514 21.625C14.7489 21.967 15.033 22.2511 15.375 22.4486C15.6822 22.6259 16.0082 22.692 16.3374 22.7218C16.6487 22.75 17.028 22.75 17.4678 22.75H18.5322C18.972 22.75 19.3514 22.75 19.6627 22.7218C19.9918 22.692 20.3178 22.6259 20.625 22.4486C20.967 22.2511 21.2511 21.967 21.4486 21.625C21.6259 21.3178 21.692 20.9918 21.7218 20.6627C21.75 20.3514 21.75 19.972 21.75 19.5322C21.75 19.0924 21.75 18.6486 21.7218 18.3373C21.692 18.0082 21.6259 17.6822 21.4486 17.375C21.2511 17.033 20.967 16.7489 20.625 16.5514C20.5026 16.4808 20.3773 16.4278 20.25 16.3877V15.5C20.25 14.2574 19.2426 13.25 18 13.25ZM18.75 16.25H17.25V15.5C17.25 15.0858 17.5858 14.75 18 14.75C18.4142 14.75 18.75 15.0858 18.75 15.5V16.25Z',
  d6: 'M9.75514 1.25C8.37442 1.25 7.25514 2.36929 7.25514 3.75V11.8693L6.35934 11.1015C5.29041 10.1853 3.67497 10.3371 2.79549 11.4365C2.06376 12.3511 2.06869 13.6522 2.80732 14.5613L6.16582 18.6948C7.10662 19.8534 7.81393 20.7244 8.6422 21.1742C8.79043 21.2547 8.94285 21.3273 9.09879 21.3915C9.97018 21.7507 10.9341 21.7505 12.4265 21.75C12.5544 21.7501 12.6184 21.7501 12.6589 21.7385C12.7868 21.7018 12.8611 21.6131 12.8747 21.4807C12.879 21.4388 12.866 21.3659 12.8399 21.2201C12.8131 21.0696 12.7961 20.9277 12.7843 20.798C12.7499 20.4181 12.7499 19.8904 12.75 19.486C12.7499 19.082 12.7499 18.5822 12.7843 18.202C12.8236 17.7684 12.9214 17.1984 13.2524 16.625C13.5064 16.1852 13.8462 15.8029 14.25 15.5C14.25 13.4289 15.9289 11.75 18 11.75C18.8509 11.75 19.6355 12.0334 20.2648 12.5109C20.4716 12.6678 20.575 12.7463 20.6344 12.7061C20.6938 12.6658 20.662 12.5506 20.5983 12.3202C20.2683 11.1269 19.4354 10.265 18.4506 9.67506C18.0095 9.41078 17.5075 9.25147 16.9068 9.12099C16.3158 8.9926 15.5726 8.88112 14.6306 8.73982L12.2551 8.36036V3.75C12.2551 2.36929 11.1358 1.25 9.75514 1.25Z',
  d7: 'M12 21H8L3.38941 14.0883C2.87331 13.4531 2.86987 12.5441 3.38114 11.905C3.99565 11.1369 5.12437 11.0308 5.87124 11.671L8.00514 13.5V3.75C8.00514 2.7835 8.78864 2 9.75514 2C10.7216 2 11.5051 2.7835 11.5051 3.75V9.47757H16C17.1197 9.47757 18.096 10.0909 18.6115 11',
  d8: 'M19.5 17V15.5C19.5 14.6716 18.8284 14 18 14C17.1716 14 16.5 14.6716 16.5 15.5V17',
  d9: 'M21 17H15V22H21V17Z',
  d10: 'M18 13.25C16.7574 13.25 15.75 14.2574 15.75 15.5V16.25H14.25V22.75H21.75V16.25H20.25V15.5C20.25 14.2574 19.2426 13.25 18 13.25ZM18.75 15.5V16.25H17.25V15.5C17.25 15.0858 17.5858 14.75 18 14.75C18.4142 14.75 18.75 15.0858 18.75 15.5Z',
  d11: 'M9.75514 1.25C8.37442 1.25 7.25514 2.36929 7.25514 3.75V11.8693L6.35934 11.1015C5.29041 10.1853 3.67497 10.3371 2.79549 11.4365C2.07177 12.3411 2.06867 13.6238 2.78334 14.5313L7.37608 21.4162C7.5152 21.6247 7.74931 21.75 8 21.75H12.75V14.75H14.325C14.6725 13.0383 16.1858 11.75 18 11.75C18.6272 11.75 19.2185 11.904 19.7381 12.1762C19.5846 10.2461 17.9696 8.72757 16 8.72757H12.2551V3.75C12.2551 2.36929 11.1358 1.25 9.75514 1.25Z',
};

export const IconTouchLocked03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-03-stroke-rounded IconTouchLocked03StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchLocked03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-03-duotone-rounded IconTouchLocked03DuotoneRounded"
    >
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchLocked03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-03-twotone-rounded IconTouchLocked03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
    </TheIconWrapper>
  );
};

export const IconTouchLocked03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-03-solid-rounded IconTouchLocked03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTouchLocked03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-03-bulk-rounded IconTouchLocked03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTouchLocked03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-03-stroke-sharp IconTouchLocked03StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchLocked03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-03-solid-sharp IconTouchLocked03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTouchLocked03: TheIconSelfPack = {
  name: 'TouchLocked03',
  StrokeRounded: IconTouchLocked03StrokeRounded,
  DuotoneRounded: IconTouchLocked03DuotoneRounded,
  TwotoneRounded: IconTouchLocked03TwotoneRounded,
  SolidRounded: IconTouchLocked03SolidRounded,
  BulkRounded: IconTouchLocked03BulkRounded,
  StrokeSharp: IconTouchLocked03StrokeSharp,
  SolidSharp: IconTouchLocked03SolidSharp,
};