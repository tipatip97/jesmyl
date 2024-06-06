import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 3V13C5 16.7712 5 18.6569 6.17157 19.8284C7.34315 21 9.22876 21 13 21H21',
  d2: 'M3 9L11 9M20 9H16',
  d3: 'M15.2466 4V6.55767C15.2466 7.69966 15.2466 8.27065 15.3937 8.8188C15.5408 9.36696 15.8292 9.87028 16.4059 10.8769L17.1873 12.241C18.6568 14.8062 19.3916 16.0888 18.7888 17.0396L18.7795 17.0541C18.1679 18 16.6119 18 13.5 18C10.3881 18 8.83212 18 8.22055 17.0541L8.21123 17.0396C7.60843 16.0888 8.34319 14.8062 9.8127 12.241L10.5941 10.8769C11.1708 9.87028 11.4592 9.36696 11.6063 8.8188C11.7534 8.27065 11.7534 7.69966 11.7534 6.55767V4',
  d4: 'M10.5 4L16.5 4',
  d5: 'M15.2466 6.55767V4H11.7534V6.55767C11.7534 7.69966 11.7534 8.27065 11.6063 8.8188C11.4592 9.36696 11.1708 9.87028 10.5941 10.8769L9.8127 12.241C8.34319 14.8062 7.60843 16.0888 8.21123 17.0396L8.22055 17.0541C8.83212 18 10.3881 18 13.5 18C16.6119 18 18.1679 18 18.7795 17.0541L18.7888 17.0396C19.3916 16.0888 18.6568 14.8062 17.1873 12.241L16.4059 10.8769C15.8292 9.87028 15.5408 9.36696 15.3937 8.8188C15.2466 8.27065 15.2466 7.69966 15.2466 6.55768V6.55767Z',
  d6: 'M5 2C5.55228 2 6 2.44772 6 3V8L11 8C11.5523 8 12 8.44772 12 9C12 9.55229 11.5523 10 11 10H6V13C6 14.9139 6.00212 16.2487 6.13753 17.2558C6.26907 18.2342 6.50966 18.7523 6.87868 19.1213C7.2477 19.4903 7.76579 19.7309 8.74416 19.8625C9.75129 19.9979 11.0861 20 13 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H12.9269C11.1034 22 9.63363 22 8.47766 21.8446C7.27752 21.6833 6.26702 21.3381 5.46447 20.5355C4.66191 19.733 4.31672 18.7225 4.15536 17.5223C3.99995 16.3664 3.99997 14.8966 4 13.0732L4 10H3C2.44772 10 2 9.55228 2 9C2 8.44772 2.44772 8 3 8H4V3C4 2.44772 4.44772 2 5 2ZM15 9C15 8.44772 15.4477 8 16 8L20 8C20.5523 8 21 8.44772 21 9C21 9.55229 20.5523 10 20 10L16 10C15.4477 10 15 9.55229 15 9Z',
  d7: 'M10.5001 3C9.94784 3 9.50012 3.44772 9.50012 4C9.50012 4.55228 9.94784 5 10.5001 5H11.0035V6.55767C11.0035 7.7378 10.9976 8.19356 10.882 8.62439C10.7659 9.05687 10.5393 9.46402 9.94347 10.5041L9.12838 11.9269C8.4222 13.1596 7.84769 14.1624 7.53485 14.9767C7.2131 15.8142 7.08485 16.6635 7.57791 17.4412L7.58901 17.4585L7.59084 17.4613C8.07912 18.2165 8.90291 18.4978 9.81995 18.6247C10.7258 18.75 11.9349 18.75 13.4388 18.75H13.5614C15.0653 18.75 16.2744 18.75 17.1803 18.6247C18.0973 18.4978 18.9211 18.2165 19.4094 17.4613L19.4112 17.4585L19.4205 17.4439L19.4223 17.4412C19.9154 16.6635 19.7871 15.8142 19.4654 14.9767C19.1525 14.1624 18.578 13.1596 17.8718 11.9269L17.0567 10.5041C16.4609 9.46402 16.2343 9.05687 16.1182 8.62439C16.0026 8.19356 15.9967 7.7378 15.9967 6.55767V5H16.5001C17.0524 5 17.5001 4.55228 17.5001 4C17.5001 3.44772 17.0524 3 16.5001 3H10.5001Z',
  d8: 'M6 3C6 2.44772 5.55228 2 5 2C4.44772 2 4 2.44772 4 3V8H3C2.44772 8 2 8.44772 2 9C2 9.55228 2.44772 10 3 10H4L4 13.0732C3.99997 14.8966 3.99995 16.3664 4.15536 17.5223C4.31672 18.7225 4.66191 19.733 5.46447 20.5355C6.26702 21.3381 7.27752 21.6833 8.47766 21.8446C9.63363 22 11.1034 22 12.9269 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H13C11.0861 20 9.75129 19.9979 8.74416 19.8625C7.76579 19.7309 7.2477 19.4903 6.87868 19.1213C6.50966 18.7523 6.26907 18.2342 6.13753 17.2558C6.00212 16.2487 6 14.9139 6 13V10H10.2309C10.6173 9.31658 10.7868 8.979 10.882 8.62439C10.9317 8.43934 10.9611 8.24968 10.9785 8L6 8V3Z',
  d9: 'M16.7693 10C16.3829 9.31658 16.2134 8.979 16.1182 8.62439C16.0685 8.43934 16.0391 8.24968 16.0217 8L20 8C20.5523 8 21 8.44772 21 9C21 9.55229 20.5523 10 20 10L16.7693 10Z',
  d10: 'M10.5 3C9.94772 3 9.5 3.44772 9.5 4C9.5 4.55228 9.94772 5 10.5 5H16.5C17.0523 5 17.5 4.55228 17.5 4C17.5 3.44772 17.0523 3 16.5 3H10.5Z',
  d11: 'M2 9H11.5M22 9H15.5',
  d12: 'M5 3V21H22',
  d13: 'M10 4H17',
  d14: 'M11.7921 4.73438V9.01824L8.03026 17.0169C8.02714 17.0235 8.03198 17.0312 8.03931 17.0312H18.9911C18.9984 17.0312 19.0033 17.0235 19.0001 17.0169L15.2146 9.01824V4.73438',
  d15: 'M22 9.5L15.5 9.5L15.5 7.5L22 7.5L22 9.5ZM11.5 9.5L2 9.5L2 7.5L11.5 7.5L11.5 9.5Z',
  d16: 'M4 20.5V2.5H6V19.5H22V21.5H5C4.44772 21.5 4 21.0523 4 20.5Z',
  d17: 'M15.9974 4.5H17V2.5H10V4.5H11.0041V8.33277L7.32104 16.1814C7.21203 16.4137 7.22935 16.6856 7.36697 16.9022C7.50459 17.1188 7.74339 17.25 8 17.25H19.0007C19.2573 17.25 19.4961 17.1188 19.6338 16.9022C19.7714 16.6857 19.7887 16.4137 19.6797 16.1814L15.9974 8.3328V4.5Z',
};

export const IconChemistry02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chemistry-02-stroke-rounded IconChemistry02StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconChemistry02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chemistry-02-duotone-rounded IconChemistry02DuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconChemistry02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chemistry-02-twotone-rounded IconChemistry02TwotoneRounded"
    >
      <path 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconChemistry02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chemistry-02-solid-rounded IconChemistry02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChemistry02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chemistry-02-bulk-rounded IconChemistry02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChemistry02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chemistry-02-stroke-sharp IconChemistry02StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconChemistry02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chemistry-02-solid-sharp IconChemistry02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChemistry02: TheIconSelfPack = {
  name: 'Chemistry02',
  StrokeRounded: IconChemistry02StrokeRounded,
  DuotoneRounded: IconChemistry02DuotoneRounded,
  TwotoneRounded: IconChemistry02TwotoneRounded,
  SolidRounded: IconChemistry02SolidRounded,
  BulkRounded: IconChemistry02BulkRounded,
  StrokeSharp: IconChemistry02StrokeSharp,
  SolidSharp: IconChemistry02SolidSharp,
};