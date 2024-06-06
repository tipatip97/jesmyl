import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 15V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V15C17 16.6547 16.6547 17 15 17H9C7.34533 17 7 16.6547 7 15Z',
  d2: 'M10 6L11 5',
  d3: 'M11 8.5L13 6.5',
  d4: 'M20 8V22M4 8V22',
  d5: 'M4 20H20',
  d6: 'M4 12H7M17 12H20',
  d7: 'M20 8V12M20 22V20M4 8V12M4 22V20M4 12V20M4 12H7M20 12V20M20 12H17M20 20H4',
  d8: 'M4 6.875C4.55228 6.875 5 7.32272 5 7.875V10.875H7C7.55228 10.875 8 11.3227 8 11.875C8 12.4273 7.55228 12.875 7 12.875H5V18.875H19V12.875H17C16.4477 12.875 16 12.4273 16 11.875C16 11.3227 16.4477 10.875 17 10.875H19V7.875C19 7.32272 19.4477 6.875 20 6.875C20.5523 6.875 21 7.32272 21 7.875V21.875C21 22.4273 20.5523 22.875 20 22.875C19.4477 22.875 19 22.4273 19 21.875V20.875H5V21.875C5 22.4273 4.55228 22.875 4 22.875C3.44772 22.875 3 22.4273 3 21.875V7.875C3 7.32272 3.44772 6.875 4 6.875Z',
  d9: 'M12 1.125C8.82436 1.125 6.25 3.69936 6.25 6.875L6.25 14.875C6.25 15.3049 6.27144 15.7013 6.34728 16.0465C6.42498 16.4002 6.56966 16.7463 6.84917 17.0258C7.12868 17.3053 7.4748 17.45 7.82851 17.5277C8.17373 17.6036 8.5701 17.625 9 17.625H15C15.4299 17.625 15.8263 17.6036 16.1715 17.5277C16.5252 17.45 16.8713 17.3053 17.1508 17.0258C17.4303 16.7463 17.575 16.4002 17.6527 16.0465C17.7286 15.7013 17.75 15.3049 17.75 14.875V6.875C17.75 3.69936 15.1756 1.125 12 1.125ZM11.5303 5.40533C11.8232 5.11244 11.8232 4.63756 11.5303 4.34467C11.2374 4.05178 10.7626 4.05178 10.4697 4.34467L9.46967 5.34467C9.17678 5.63756 9.17678 6.11244 9.46967 6.40533C9.76256 6.69822 10.2374 6.69822 10.5303 6.40533L11.5303 5.40533ZM13.5303 6.90533C13.8232 6.61244 13.8232 6.13756 13.5303 5.84467C13.2374 5.55178 12.7626 5.55178 12.4697 5.84467L10.4697 7.84467C10.1768 8.13756 10.1768 8.61244 10.4697 8.90533C10.7626 9.19822 11.2374 9.19822 11.5303 8.90533L13.5303 6.90533Z',
  d10: 'M3 11.875C3 11.3227 3.44772 10.875 4 10.875H7C7.55228 10.875 8 11.3227 8 11.875C8 12.4273 7.55228 12.875 7 12.875H4C3.44772 12.875 3 12.4273 3 11.875ZM16 11.875C16 11.3227 16.4477 10.875 17 10.875H20C20.5523 10.875 21 11.3227 21 11.875C21 12.4273 20.5523 12.875 20 12.875H17C16.4477 12.875 16 12.4273 16 11.875Z',
  d11: 'M4 6.875C4.55228 6.875 5 7.32272 5 7.875V18.875H19V7.875C19 7.32272 19.4477 6.875 20 6.875C20.5523 6.875 21 7.32272 21 7.875V21.875C21 22.4273 20.5523 22.875 20 22.875C19.4477 22.875 19 22.4273 19 21.875V20.875H5V21.875C5 22.4273 4.55228 22.875 4 22.875C3.44772 22.875 3 22.4273 3 21.875V7.875C3 7.32272 3.44772 6.875 4 6.875Z',
  d12: 'M6.25 6.875C6.25 3.69936 8.82436 1.125 12 1.125C15.1756 1.125 17.75 3.69936 17.75 6.875V14.875C17.75 15.3049 17.7286 15.7013 17.6527 16.0465C17.575 16.4002 17.4303 16.7463 17.1508 17.0258C16.8713 17.3053 16.5252 17.45 16.1715 17.5277C15.8263 17.6036 15.4299 17.625 15 17.625H9C8.5701 17.625 8.17373 17.6036 7.82851 17.5277C7.4748 17.45 7.12868 17.3053 6.84917 17.0258C6.56966 16.7463 6.42498 16.4002 6.34728 16.0465C6.27144 15.7013 6.25 15.3049 6.25 14.875V6.875Z',
  d13: 'M11.5303 4.34467C11.8232 4.63756 11.8232 5.11244 11.5303 5.40533L10.5303 6.40533C10.2374 6.69822 9.76256 6.69822 9.46967 6.40533C9.17678 6.11244 9.17678 5.63756 9.46967 5.34467L10.4697 4.34467C10.7626 4.05178 11.2374 4.05178 11.5303 4.34467ZM13.5303 5.84467C13.8232 6.13756 13.8232 6.61244 13.5303 6.90533L11.5303 8.90533C11.2374 9.19822 10.7626 9.19822 10.4697 8.90533C10.1768 8.61244 10.1768 8.13756 10.4697 7.84467L12.4697 5.84467C12.7626 5.55178 13.2374 5.55178 13.5303 5.84467Z',
  d14: 'M17.75 10.875V12.875H20C20.5523 12.875 21 12.4273 21 11.875C21 11.3227 20.5523 10.875 20 10.875H17.75Z',
  d15: 'M6.25 12.875H4C3.44772 12.875 3 12.4273 3 11.875C3 11.3227 3.44772 10.875 4 10.875H6.25V12.875Z',
  d16: 'M7 17V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V17H7Z',
  d17: 'M9.5 7.5L11.5 5.5M10 10.5L14 6.5',
  d18: 'M12 1.75C8.82436 1.75 6.25 4.32436 6.25 7.5L6.25 18.25H17.75V7.5C17.75 4.32436 15.1756 1.75 12 1.75ZM10.0294 8.53039L12.0294 6.53039L10.9688 5.46973L8.96875 7.46973L10.0294 8.53039ZM10.5294 11.5304L14.5294 7.53039L13.4688 6.46973L9.46875 10.4697L10.5294 11.5304Z',
  d19: 'M3 22.25V8.25H5V22.25H3ZM19 22.25V8.25H21V22.25H19Z',
  d20: 'M20 21.25H4V19.25H20V21.25Z',
  d21: 'M7 13.5H4V11.5H7V13.5ZM20 13.5H17V11.5H20V13.5Z',
};

export const IconMirrorStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mirror-stroke-rounded IconMirrorStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMirrorDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mirror-duotone-rounded IconMirrorDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMirrorTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mirror-twotone-rounded IconMirrorTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMirrorSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mirror-solid-rounded IconMirrorSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMirrorBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mirror-bulk-rounded IconMirrorBulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMirrorStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mirror-stroke-sharp IconMirrorStrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMirrorSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mirror-solid-sharp IconMirrorSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMirror: TheIconSelfPack = {
  name: 'Mirror',
  StrokeRounded: IconMirrorStrokeRounded,
  DuotoneRounded: IconMirrorDuotoneRounded,
  TwotoneRounded: IconMirrorTwotoneRounded,
  SolidRounded: IconMirrorSolidRounded,
  BulkRounded: IconMirrorBulkRounded,
  StrokeSharp: IconMirrorStrokeSharp,
  SolidSharp: IconMirrorSolidSharp,
};