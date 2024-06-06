import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 12C2 8.25027 2 6.3754 2.95491 5.06107C3.26331 4.6366 3.6366 4.26331 4.06107 3.95491C5.3754 3 7.25027 3 11 3H13C16.7497 3 18.6246 3 19.9389 3.95491C20.3634 4.26331 20.7367 4.6366 21.0451 5.06107C22 6.3754 22 8.25027 22 12C22 15.7497 22 17.6246 21.0451 18.9389C20.7367 19.3634 20.3634 19.7367 19.9389 20.0451C18.6246 21 16.7497 21 13 21H11C7.25027 21 5.3754 21 4.06107 20.0451C3.6366 19.7367 3.26331 19.3634 2.95491 18.9389C2 17.6246 2 15.7497 2 12Z',
  d2: 'M9.5 3.5L9.5 20.5',
  d3: 'M5 7C5 7 5.91421 7 6.5 7',
  d4: 'M5 11H6.5',
  d5: 'M17 10L15.7735 11.0572C15.2578 11.5016 15 11.7239 15 12C15 12.2761 15.2578 12.4984 15.7735 12.9428L17 14',
  d6: 'M20.7583 19.682C22.0005 18.364 22.0005 16.2426 22.0005 12C22.0005 7.75736 22.0005 5.63604 20.7583 4.31802C19.516 3 17.5167 3 13.518 3C11.867 3 10.5568 3 9.5 3.09278L9.5 20.9072C10.5568 21 11.867 21 13.518 21C17.5167 21 19.516 21 20.7583 19.682Z',
  d7: 'M10.3379 21.6621C10.25 21.5743 10.25 21.433 10.25 21.1505L10.25 2.84954C10.25 2.56701 10.25 2.42574 10.3379 2.33788C10.4257 2.25001 10.5669 2.25001 10.8493 2.25H10.9547H13.0453C14.8818 2.24999 16.3214 2.24999 17.4635 2.37373C18.6291 2.50001 19.5734 2.76232 20.3798 3.34815C20.8679 3.70281 21.2972 4.13209 21.6518 4.62024C22.2377 5.42656 22.5 6.37094 22.6263 7.53648C22.75 8.67859 22.75 10.1182 22.75 11.9547V12.0453C22.75 13.8818 22.75 15.3214 22.6263 16.4635C22.5 17.6291 22.2377 18.5734 21.6518 19.3798C21.2972 19.8679 20.8679 20.2972 20.3798 20.6518C19.5734 21.2377 18.6291 21.5 17.4635 21.6263C16.3214 21.75 14.8818 21.75 13.0453 21.75H10.9546H10.8493C10.5669 21.75 10.4257 21.75 10.3379 21.6621ZM8.65898 2.34985C8.75 2.43822 8.75 2.58221 8.75 2.87018L8.75 21.1298C8.75 21.4177 8.75 21.5617 8.65898 21.6501C8.56796 21.7385 8.42547 21.7343 8.14051 21.7258C7.54843 21.7084 7.01621 21.6782 6.53648 21.6262C5.37094 21.5 4.42656 21.2376 3.62024 20.6518C3.13209 20.2972 2.70281 19.8679 2.34815 19.3797C1.76232 18.5734 1.50001 17.629 1.37373 16.4635C1.24999 15.3214 1.24999 13.8817 1.25 12.0452V11.9547C1.24999 10.1182 1.24999 8.67858 1.37373 7.53644C1.50001 6.3709 1.76232 5.42653 2.34815 4.6202C2.70281 4.13206 3.13209 3.70278 3.62024 3.34812C4.42656 2.76229 5.37094 2.49997 6.53648 2.37369C7.01621 2.32172 7.54843 2.29157 8.1405 2.27409C8.42547 2.26568 8.56796 2.26147 8.65898 2.34985ZM4.25 6.25C3.83579 6.25 3.5 6.58579 3.5 7C3.5 7.41421 3.83579 7.75 4.25 7.75H5.75C6.16421 7.75 6.5 7.41421 6.5 7C6.5 6.58579 6.16421 6.25 5.75 6.25H4.25ZM3.5 11C3.5 10.5858 3.83579 10.25 4.25 10.25H5.75C6.16421 10.25 6.5 10.5858 6.5 11C6.5 11.4142 6.16421 11.75 5.75 11.75H4.25C3.83579 11.75 3.5 11.4142 3.5 11ZM18.1529 10.7575C18.5712 10.3969 18.618 9.76547 18.2575 9.34714C17.8969 8.9288 17.2655 8.88198 16.8471 9.24255L15.5835 10.3317C15.3585 10.5255 15.1194 10.7314 14.9446 10.9289C14.7469 11.1522 14.5 11.5066 14.5 12C14.5 12.4934 14.7469 12.8478 14.9446 13.0711C15.1194 13.2686 15.3585 13.4746 15.5835 13.6684L16.8471 14.7575C17.2655 15.1181 17.8969 15.0712 18.2575 14.6529C18.618 14.2346 18.5712 13.6031 18.1529 13.2426L16.7124 12L18.1529 10.7575Z',
  d8: 'M10.25 21.1505C10.25 21.433 10.25 21.5743 10.3379 21.6621C10.4257 21.75 10.5669 21.75 10.8493 21.75C10.8842 21.75 10.9194 21.75 10.9547 21.75H13.0453C14.8818 21.75 16.3214 21.75 17.4635 21.6263C18.6291 21.5 19.5734 21.2377 20.3798 20.6518C20.8679 20.2972 21.2972 19.8679 21.6518 19.3798C22.2377 18.5734 22.5 17.6291 22.6263 16.4635C22.75 15.3214 22.75 13.8818 22.75 12.0453V11.9547C22.75 10.1182 22.75 8.67859 22.6263 7.53648C22.5 6.37094 22.2377 5.42656 21.6518 4.62024C21.2972 4.13209 20.8679 3.70281 20.3798 3.34815C19.5734 2.76232 18.6291 2.50001 17.4635 2.37373C16.3214 2.24999 14.8818 2.24999 13.0453 2.25H10.9548C10.9194 2.25 10.8843 2.25 10.8493 2.25C10.5669 2.25001 10.4257 2.25001 10.3379 2.33788C10.25 2.42574 10.25 2.56701 10.25 2.84954L10.25 21.1505Z',
  d9: 'M8.75 2.86977C8.75 2.5818 8.75 2.43782 8.65898 2.34944C8.56796 2.26107 8.42547 2.26528 8.1405 2.27369C7.54843 2.29117 7.01621 2.32131 6.53648 2.37329C5.37094 2.49957 4.42656 2.76189 3.62024 3.34771C3.13209 3.70237 2.70281 4.13165 2.34815 4.6198C1.76232 5.42612 1.50001 6.3705 1.37373 7.53604C1.24999 8.67817 1.24999 10.1178 1.25 11.9543V11.9543V12.0448V12.0448C1.24999 13.8813 1.24999 15.321 1.37373 16.4631C1.50001 17.6286 1.76232 18.573 2.34815 19.3793C2.70281 19.8675 3.13209 20.2968 3.62024 20.6514C4.42656 21.2372 5.37094 21.4996 6.53648 21.6258C7.01621 21.6778 7.54843 21.708 8.14051 21.7254C8.42547 21.7338 8.56796 21.7381 8.65898 21.6497C8.75 21.5613 8.75 21.4173 8.75 21.1293L8.75 2.86977ZM3.5 7C3.5 6.58579 3.83579 6.25 4.25 6.25H5.75C6.16421 6.25 6.5 6.58579 6.5 7C6.5 7.41421 6.16421 7.75 5.75 7.75H4.25C3.83579 7.75 3.5 7.41421 3.5 7ZM4.25 10.25C3.83579 10.25 3.5 10.5858 3.5 11C3.5 11.4142 3.83579 11.75 4.25 11.75H5.75C6.16421 11.75 6.5 11.4142 6.5 11C6.5 10.5858 6.16421 10.25 5.75 10.25H4.25Z',
  d10: 'M18.2575 9.34714C18.618 9.76547 18.5712 10.3969 18.1529 10.7575L16.7124 12L18.1529 13.2426C18.5712 13.6031 18.618 14.2346 18.2575 14.6529C17.8969 15.0712 17.2655 15.1181 16.8471 14.7575L15.5835 13.6684L15.5835 13.6684C15.3585 13.4746 15.1194 13.2686 14.9446 13.0711C14.7469 12.8478 14.5 12.4934 14.5 12C14.5 11.5066 14.7469 11.1522 14.9446 10.9289C15.1194 10.7314 15.3585 10.5255 15.5835 10.3317L16.8471 9.24255C17.2655 8.88198 17.8969 8.9288 18.2575 9.34714Z',
  d11: 'M2 3V21L22 21V3H2Z',
  d12: 'M10 3L10 21',
  d13: 'M4.5 7H7.5M4.5 11H7.5',
  d14: 'M18 9L15 12L18 15',
  d15: 'M10.7493 2.25H21.9993C22.4135 2.25 22.7493 2.58579 22.7493 3V21C22.7493 21.1989 22.6702 21.3897 22.5296 21.5303C22.3889 21.671 22.1982 21.75 21.9993 21.75L10.7493 21.75L10.7493 2.25ZM18.5911 9.53039L16.1214 12.0001L18.5911 14.4697L17.5304 15.5304L14.0001 12.0001L17.5304 8.46973L18.5911 9.53039Z',
  d16: 'M9.24927 21.75H1.99927C1.58505 21.75 1.24927 21.4142 1.24927 21V3C1.24927 2.58579 1.58505 2.25 1.99927 2.25H9.24927L9.24927 21.75ZM6.74927 6.25H3.74927V7.75H6.74927V6.25ZM6.74927 10.25H3.74927V11.75H6.74927V10.25Z',
};

export const IconSidebarLeft01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-left-01-stroke-rounded IconSidebarLeft01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconSidebarLeft01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-left-01-duotone-rounded IconSidebarLeft01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconSidebarLeft01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-left-01-twotone-rounded IconSidebarLeft01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSidebarLeft01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-left-01-solid-rounded IconSidebarLeft01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSidebarLeft01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-left-01-bulk-rounded IconSidebarLeft01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSidebarLeft01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-left-01-stroke-sharp IconSidebarLeft01StrokeSharp"
    >
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

export const IconSidebarLeft01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-left-01-solid-sharp IconSidebarLeft01SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfSidebarLeft01: TheIconSelfPack = {
  name: 'SidebarLeft01',
  StrokeRounded: IconSidebarLeft01StrokeRounded,
  DuotoneRounded: IconSidebarLeft01DuotoneRounded,
  TwotoneRounded: IconSidebarLeft01TwotoneRounded,
  SolidRounded: IconSidebarLeft01SolidRounded,
  BulkRounded: IconSidebarLeft01BulkRounded,
  StrokeSharp: IconSidebarLeft01StrokeSharp,
  SolidSharp: IconSidebarLeft01SolidSharp,
};