import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 12C11.1716 12 10.5 12.5596 10.5 13.25C10.5 13.9404 11.1716 14.5 12 14.5C12.8284 14.5 13.5 13.9404 13.5 13.25C13.5 12.5596 12.8284 12 12 12ZM12 12C12.8284 12 13.5 11.4404 13.5 10.75C13.5 10.0596 12.8284 9.5 12 9.5C11.1716 9.5 10.5 10.0596 10.5 10.75C10.5 11.4404 11.1716 12 12 12Z',
  d2: 'M12 2V6M12 18V22',
  d3: 'M21.9992 12L17.9992 12M6 12.0005L2 12.0005',
  d4: 'M12 3.20455C7.1424 3.20455 3.20455 7.1424 3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 7.1424 16.8576 3.20455 12 3.20455ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M12 5.25C8.27208 5.25 5.25 8.27208 5.25 12C5.25 15.7279 8.27208 18.75 12 18.75C15.7279 18.75 18.75 15.7279 18.75 12C18.75 8.27208 15.7279 5.25 12 5.25ZM11.25 10.75C11.25 10.5961 11.4519 10.25 12 10.25C12.5481 10.25 12.75 10.5961 12.75 10.75C12.75 10.9039 12.5481 11.25 12 11.25C11.4519 11.25 11.25 10.9039 11.25 10.75ZM13.8228 11.9312C13.7897 11.971 13.7897 12.029 13.8228 12.0688C14.0863 12.3859 14.25 12.7854 14.25 13.25C14.25 14.4768 13.1088 15.25 12 15.25C10.8912 15.25 9.75 14.4768 9.75 13.25C9.75 12.7854 9.91366 12.3859 10.1773 12.0688C10.2103 12.029 10.2103 11.971 10.1773 11.9312C9.91366 11.6141 9.75 11.2146 9.75 10.75C9.75 9.5232 10.8912 8.75 12 8.75C13.1088 8.75 14.25 9.5232 14.25 10.75C14.25 11.2146 14.0863 11.6141 13.8228 11.9312ZM11.25 13.25C11.25 13.0961 11.4519 12.75 12 12.75C12.5481 12.75 12.75 13.0961 12.75 13.25C12.75 13.4039 12.5481 13.75 12 13.75C11.4519 13.75 11.25 13.4039 11.25 13.25Z',
  d6: 'M12 2C12.5523 2 13 2.44772 13 3V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V3C11 2.44772 11.4477 2 12 2ZM16.9992 12C16.9992 11.4477 17.4469 11 17.9992 11H20.9992C21.5515 11 21.9992 11.4477 21.9992 12C21.9992 12.5523 21.5515 13 20.9992 13H17.9992C17.4469 13 16.9992 12.5523 16.9992 12ZM2 12.0005C2 11.4482 2.44772 11.0005 3 11.0005H6C6.55228 11.0005 7 11.4482 7 12.0005C7 12.5528 6.55228 13.0005 6 13.0005H3C2.44772 13.0005 2 12.5528 2 12.0005ZM12 17C12.5523 17 13 17.4477 13 18V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18C11 17.4477 11.4477 17 12 17Z',
  d7: 'M5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C15.7279 5.25 18.75 8.27208 18.75 12C18.75 15.7279 15.7279 18.75 12 18.75C8.27208 18.75 5.25 15.7279 5.25 12Z',
  d8: 'M12 10.25C11.4519 10.25 11.25 10.5961 11.25 10.75C11.25 10.9039 11.4519 11.25 12 11.25C12.5481 11.25 12.75 10.9039 12.75 10.75C12.75 10.5961 12.5481 10.25 12 10.25ZM13.8227 12.0688C13.7897 12.029 13.7897 11.971 13.8227 11.9312C14.0863 11.6141 14.25 11.2146 14.25 10.75C14.25 9.5232 13.1088 8.75 12 8.75C10.8912 8.75 9.75 9.5232 9.75 10.75C9.75 11.2146 9.91366 11.6141 10.1773 11.9312C10.2103 11.971 10.2103 12.029 10.1773 12.0688C9.91366 12.3859 9.75 12.7854 9.75 13.25C9.75 14.4768 10.8912 15.25 12 15.25C13.1088 15.25 14.25 14.4768 14.25 13.25C14.25 12.7854 14.0863 12.3859 13.8227 12.0688ZM12 12.75C11.4519 12.75 11.25 13.0961 11.25 13.25C11.25 13.4039 11.4519 13.75 12 13.75C12.5481 13.75 12.75 13.4039 12.75 13.25C12.75 13.0961 12.5481 12.75 12 12.75Z',
  d9: 'M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V5.32356C11.3263 5.27511 11.6602 5.25 12 5.25C12.3398 5.25 12.6737 5.27511 13 5.32356V3ZM18.6764 13C18.7249 12.6737 18.75 12.3398 18.75 12C18.75 11.6602 18.7249 11.3263 18.6764 11H20.9992C21.5515 11 21.9992 11.4477 21.9992 12C21.9992 12.5523 21.5515 13 20.9992 13H18.6764ZM11 18.6764C11.3263 18.7249 11.6602 18.75 12 18.75C12.3398 18.75 12.6737 18.7249 13 18.6764V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18.6764ZM5.32349 11.0005C5.27508 11.3266 5.25 11.6604 5.25 12C5.25 12.3399 5.27513 12.674 5.32363 13.0005H3C2.44772 13.0005 2 12.5528 2 12.0005C2 11.4482 2.44772 11.0005 3 11.0005H5.32349Z',
  d10: 'M11.2488 1.24988C5.8965 1.61874 1.61924 5.89614 1.25061 11.2485H5.27568C5.62217 8.1121 8.11246 5.62167 11.2488 5.27496V1.24988ZM1.25068 12.7521C1.61974 18.1041 5.89681 22.381 11.2488 22.7499V18.7248C8.11277 18.3781 5.62267 15.8882 5.27578 12.7521H1.25068ZM22.7506 12.7517C22.3818 18.1039 18.1046 22.381 12.7524 22.7499V18.7248C15.8887 18.3781 18.3789 15.8879 18.7256 12.7517H22.7506ZM22.7506 11.2481C22.3818 5.89589 18.1046 1.61873 12.7524 1.24988V5.27496C15.8887 5.62165 18.3789 8.11185 18.7256 11.2481H22.7506ZM17.2631 11.9668C17.2627 11.9778 17.2624 11.9888 17.2624 11.9999C17.2624 12.0109 17.2627 12.022 17.2631 12.0329C17.2454 14.9242 14.8961 17.2625 12.0006 17.2625C9.09418 17.2625 6.73803 14.9063 6.73803 11.9999C6.73803 9.09342 9.09418 6.73727 12.0006 6.73727C14.8961 6.73727 17.2454 9.07558 17.2631 11.9668ZM11.2506 10.7499C11.2506 10.596 11.4526 10.2499 12.0006 10.2499C12.5487 10.2499 12.7506 10.596 12.7506 10.7499C12.7506 10.9038 12.5487 11.2499 12.0006 11.2499C11.4526 11.2499 11.2506 10.9038 11.2506 10.7499ZM14.2506 10.7499C14.2506 11.2487 14.0619 11.6725 13.7635 11.9999C14.0619 12.3272 14.2506 12.7511 14.2506 13.2499C14.2506 14.4767 13.1094 15.2499 12.0006 15.2499C10.8918 15.2499 9.75061 14.4767 9.75061 13.2499C9.75061 12.7511 9.93928 12.3272 10.2377 11.9999C9.93928 11.6725 9.75061 11.2487 9.75061 10.7499C9.75061 9.52308 10.8918 8.74988 12.0006 8.74988C13.1094 8.74988 14.2506 9.52308 14.2506 10.7499ZM11.2506 13.2499C11.2506 13.096 11.4526 12.7499 12.0006 12.7499C12.5487 12.7499 12.7506 13.096 12.7506 13.2499C12.7506 13.4038 12.5487 13.7499 12.0006 13.7499C11.4526 13.7499 11.2506 13.4038 11.2506 13.2499Z',
};

export const IconChip02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chip-02-stroke-rounded IconChip02StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconChip02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chip-02-duotone-rounded IconChip02DuotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="6" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconChip02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chip-02-twotone-rounded IconChip02TwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconChip02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chip-02-solid-rounded IconChip02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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

export const IconChip02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chip-02-bulk-rounded IconChip02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconChip02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chip-02-stroke-sharp IconChip02StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconChip02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chip-02-solid-sharp IconChip02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChip02: TheIconSelfPack = {
  name: 'Chip02',
  StrokeRounded: IconChip02StrokeRounded,
  DuotoneRounded: IconChip02DuotoneRounded,
  TwotoneRounded: IconChip02TwotoneRounded,
  SolidRounded: IconChip02SolidRounded,
  BulkRounded: IconChip02BulkRounded,
  StrokeSharp: IconChip02StrokeSharp,
  SolidSharp: IconChip02SolidSharp,
};