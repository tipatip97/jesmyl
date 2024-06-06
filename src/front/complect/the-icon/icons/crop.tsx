import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 2V4M22 20H20M16.5 20H10C7.17157 20 5.75736 20 4.87868 19.1213C4 18.2426 4 16.8284 4 14V7.5',
  d2: 'M20 22L20 12C20 8.22877 20 6.34315 18.8284 5.17158C17.6569 4 15.7712 4 12 4L2 4',
  d3: 'M18.8284 5.17158C20 6.34315 20 8.22877 20 12L20 20H9.99985C7.17152 20 5.75736 20 4.87868 19.1213C4 18.2426 4 16.8284 4 14V4H12C15.7712 4 17.6569 4 18.8284 5.17158Z',
  d4: 'M4 1C4.55228 1 5 1.44772 5 2V3L12.0732 3C13.8966 2.99997 15.3664 2.99995 16.5223 3.15536C17.7225 3.31672 18.733 3.66191 19.5355 4.46447C20.3381 5.26702 20.6833 6.27752 20.8446 7.47767C21 8.63363 21 10.1034 21 11.9269L21 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H21V22C21 22.5523 20.5523 23 20 23C19.4477 23 19 22.5523 19 22L19 12C19 10.0861 18.9979 8.7513 18.8625 7.74416C18.7309 6.76579 18.4903 6.2477 18.1213 5.87868C17.7523 5.50966 17.2342 5.26907 16.2558 5.13753C15.2487 5.00212 13.9139 5 12 5H2C1.44772 5 1 4.55228 1 4C1 3.44772 1.44772 3 2 3H3V2C3 1.44772 3.44772 1 4 1ZM4 6.5C4.55228 6.5 5 6.94772 5 7.5V14C5 15.4425 5.00212 16.4237 5.10092 17.1586C5.19584 17.8646 5.36322 18.1916 5.58579 18.4142C5.80836 18.6368 6.13538 18.8042 6.84143 18.8991C7.57625 18.9979 8.55752 19 10 19H16.5C17.0523 19 17.5 19.4477 17.5 20C17.5 20.5523 17.0523 21 16.5 21H9.92945C8.57532 21 7.4587 21.0001 6.57494 20.8812C5.64711 20.7565 4.82768 20.4845 4.17157 19.8284C3.51546 19.1723 3.2435 18.3529 3.11875 17.4251C2.99993 16.5413 2.99996 15.4247 3 14.0706L3 7.5C3 6.94772 3.44772 6.5 4 6.5Z',
  d5: 'M4 1C4.55228 1 5 1.44772 5 2V3L12.0732 3C13.8966 2.99997 15.3664 2.99995 16.5223 3.15536C17.7225 3.31672 18.733 3.66191 19.5355 4.46447C20.3381 5.26702 20.6833 6.27752 20.8446 7.47767C21 8.63363 21 10.1034 21 11.9269L21 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H21V22C21 22.5523 20.5523 23 20 23C19.4477 23 19 22.5523 19 22L19 12C19 10.0861 18.9979 8.7513 18.8625 7.74416C18.7309 6.76579 18.4903 6.2477 18.1213 5.87868C17.7523 5.50966 17.2342 5.26907 16.2558 5.13753C15.2487 5.00212 13.9139 5 12 5H2C1.44772 5 1 4.55228 1 4C1 3.44772 1.44772 3 2 3H3V2C3 1.44772 3.44772 1 4 1Z',
  d6: 'M4 6.5C4.55229 6.5 5 6.94772 5 7.5V14C5 15.4425 5.00213 16.4237 5.10092 17.1586C5.19585 17.8646 5.36322 18.1916 5.58579 18.4142C5.80836 18.6368 6.13538 18.8042 6.84143 18.8991C7.57625 18.9979 8.55752 19 10 19H16.5C17.0523 19 17.5 19.4477 17.5 20C17.5 20.5523 17.0523 21 16.5 21H9.92946C8.57532 21 7.4587 21.0001 6.57494 20.8812C5.64711 20.7565 4.82768 20.4845 4.17158 19.8284C3.51547 19.1723 3.2435 18.3529 3.11875 17.4251C2.99994 16.5413 2.99997 15.4247 3 14.0706L3 7.5C3 6.94772 3.44772 6.5 4 6.5Z',
  d7: 'M5 2V5M22 19H19M16 19H5V8',
  d8: 'M19 22V5H2',
  d9: 'M4 5V2H6V5H4ZM4 19V8H6V18H16V20H5C4.44772 20 4 19.5523 4 19ZM22 20H19V18H22V20Z',
  d10: 'M2 4H19C19.5523 4 20 4.44772 20 5V22H18V6H2V4Z',
};

export const IconCropStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="crop-stroke-rounded IconCropStrokeRounded"
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

export const IconCropDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="crop-duotone-rounded IconCropDuotoneRounded"
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

export const IconCropTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="crop-twotone-rounded IconCropTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCropSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="crop-solid-rounded IconCropSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCropBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="crop-bulk-rounded IconCropBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCropStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="crop-stroke-sharp IconCropStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCropSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="crop-solid-sharp IconCropSolidSharp"
    >
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

export const iconPackOfCrop: TheIconSelfPack = {
  name: 'Crop',
  StrokeRounded: IconCropStrokeRounded,
  DuotoneRounded: IconCropDuotoneRounded,
  TwotoneRounded: IconCropTwotoneRounded,
  SolidRounded: IconCropSolidRounded,
  BulkRounded: IconCropBulkRounded,
  StrokeSharp: IconCropStrokeSharp,
  SolidSharp: IconCropSolidSharp,
};