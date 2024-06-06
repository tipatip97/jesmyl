import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12C22 8.25027 22 6.3754 21.0451 5.06107C20.7367 4.6366 20.3634 4.26331 19.9389 3.95491C18.6246 3 16.7497 3 13 3H11C7.25027 3 5.3754 3 4.06107 3.95491C3.6366 4.26331 3.26331 4.6366 2.95491 5.06107C2 6.3754 2 8.25027 2 12C2 15.7497 2 17.6246 2.95491 18.9389C3.26331 19.3634 3.6366 19.7367 4.06107 20.0451C5.3754 21 7.25027 21 11 21H13C16.7497 21 18.6246 21 19.9389 20.0451C20.3634 19.7367 20.7367 19.3634 21.0451 18.9389C22 17.6246 22 15.7497 22 12Z',
  d2: 'M14.5 3.5L14.5 20.5',
  d3: 'M19 7H17.5',
  d4: 'M19 11H17.5',
  d5: 'M8 10L9.22654 11.0572C9.74218 11.5016 10 11.7239 10 12C10 12.2761 9.74218 12.4984 9.22654 12.9428L8 14',
  d6: 'M3.24172 4.31802C1.99949 5.63604 1.99949 7.75736 1.99949 12C1.99949 16.2426 1.99949 18.364 3.24172 19.682C4.48395 21 6.48329 21 10.482 21C12.133 21 13.4432 21 14.5 20.9072L14.5 3.09278C13.4432 3 12.133 3 10.482 3C6.48329 3 4.48395 3 3.24172 4.31802Z',
  d7: 'M14.5 3L14.5 21',
  d8: 'M13.6621 21.6621C13.75 21.5743 13.75 21.433 13.75 21.1505L13.75 2.84954C13.75 2.56701 13.75 2.42574 13.6621 2.33788C13.5743 2.25001 13.4331 2.25001 13.1507 2.25H13.0453H10.9547C9.11821 2.24999 7.67861 2.24999 6.53648 2.37373C5.37094 2.50001 4.42656 2.76232 3.62024 3.34815C3.1321 3.70281 2.70281 4.13209 2.34816 4.62024C1.76233 5.42656 1.50001 6.37094 1.37373 7.53648C1.24999 8.67859 1.25 10.1182 1.25001 11.9547V12.0453C1.25 13.8818 1.24999 15.3214 1.37373 16.4635C1.50001 17.6291 1.76233 18.5734 2.34816 19.3798C2.70281 19.8679 3.1321 20.2972 3.62024 20.6518C4.42656 21.2377 5.37094 21.5 6.53648 21.6263C7.6786 21.75 9.11825 21.75 10.9547 21.75H13.0454H13.1507C13.4331 21.75 13.5743 21.75 13.6621 21.6621ZM15.341 2.34985C15.25 2.43822 15.25 2.58221 15.25 2.87018L15.25 21.1298C15.25 21.4177 15.25 21.5617 15.341 21.6501C15.432 21.7385 15.5745 21.7343 15.8595 21.7258C16.4516 21.7084 16.9838 21.6782 17.4635 21.6262C18.6291 21.5 19.5734 21.2376 20.3798 20.6518C20.8679 20.2972 21.2972 19.8679 21.6518 19.3797C22.2377 18.5734 22.5 17.629 22.6263 16.4635C22.75 15.3214 22.75 13.8817 22.75 12.0452V11.9547C22.75 10.1182 22.75 8.67858 22.6263 7.53644C22.5 6.3709 22.2377 5.42653 21.6518 4.6202C21.2972 4.13206 20.8679 3.70278 20.3798 3.34812C19.5734 2.76229 18.6291 2.49997 17.4635 2.37369C16.9838 2.32172 16.4516 2.29157 15.8595 2.27409C15.5745 2.26568 15.432 2.26147 15.341 2.34985ZM19.75 6.25C20.1642 6.25 20.5 6.58579 20.5 7C20.5 7.41421 20.1642 7.75 19.75 7.75H18.25C17.8358 7.75 17.5 7.41421 17.5 7C17.5 6.58579 17.8358 6.25 18.25 6.25H19.75ZM20.5 11C20.5 10.5858 20.1642 10.25 19.75 10.25H18.25C17.8358 10.25 17.5 10.5858 17.5 11C17.5 11.4142 17.8358 11.75 18.25 11.75H19.75C20.1642 11.75 20.5 11.4142 20.5 11ZM5.84712 10.7575C5.42879 10.3969 5.38196 9.76547 5.74254 9.34714C6.10311 8.9288 6.73454 8.88198 7.15288 9.24255L8.41646 10.3317C8.64149 10.5255 8.88059 10.7314 9.05542 10.9289C9.25309 11.1522 9.5 11.5066 9.5 12C9.5 12.4934 9.25309 12.8478 9.05542 13.0711C8.88059 13.2686 8.6415 13.4746 8.41646 13.6684L7.15288 14.7575C6.73454 15.1181 6.10311 15.0712 5.74254 14.6529C5.38196 14.2346 5.42879 13.6031 5.84712 13.2426L7.28758 12L5.84712 10.7575Z',
  d9: 'M13.75 21.1505C13.75 21.433 13.75 21.5743 13.6621 21.6621C13.5743 21.75 13.4331 21.75 13.1507 21.75C13.1158 21.75 13.0806 21.75 13.0453 21.75H10.9547C9.11824 21.75 7.67859 21.75 6.53647 21.6263C5.37094 21.5 4.42656 21.2377 3.62023 20.6518C3.13209 20.2972 2.70281 19.8679 2.34815 19.3798C1.76232 18.5734 1.50001 17.6291 1.37373 16.4635C1.24999 15.3214 1.24999 13.8818 1.25 12.0453V11.9547C1.24999 10.1182 1.24999 8.67859 1.37373 7.53648C1.50001 6.37094 1.76232 5.42656 2.34815 4.62024C2.70281 4.13209 3.13209 3.70281 3.62023 3.34815C4.42656 2.76232 5.37094 2.50001 6.53647 2.37373C7.67861 2.24999 9.11821 2.24999 10.9547 2.25H13.0452C13.0806 2.25 13.1157 2.25 13.1507 2.25C13.4331 2.25001 13.5743 2.25001 13.6621 2.33788C13.75 2.42574 13.75 2.56701 13.75 2.84954L13.75 21.1505Z',
  d10: 'M15.25 2.86977C15.25 2.5818 15.25 2.43782 15.341 2.34944C15.432 2.26107 15.5745 2.26528 15.8595 2.27369C16.4516 2.29117 16.9838 2.32131 17.4635 2.37329C18.6291 2.49957 19.5734 2.76189 20.3798 3.34771C20.8679 3.70237 21.2972 4.13165 21.6518 4.6198C22.2377 5.42612 22.5 6.3705 22.6263 7.53604C22.75 8.67817 22.75 10.1178 22.75 11.9543V12.0448C22.75 13.8813 22.75 15.321 22.6263 16.4631C22.5 17.6286 22.2377 18.573 21.6518 19.3793C21.2972 19.8675 20.8679 20.2968 20.3798 20.6514C19.5734 21.2372 18.6291 21.4996 17.4635 21.6258C16.9838 21.6778 16.4516 21.708 15.8595 21.7254C15.5745 21.7338 15.432 21.7381 15.341 21.6497C15.25 21.5613 15.25 21.4173 15.25 21.1293V2.86977ZM20.5 7C20.5 6.58579 20.1642 6.25 19.75 6.25H18.25C17.8358 6.25 17.5 6.58579 17.5 7C17.5 7.41421 17.8358 7.75 18.25 7.75H19.75C20.1642 7.75 20.5 7.41421 20.5 7ZM19.75 10.25C20.1642 10.25 20.5 10.5858 20.5 11C20.5 11.4142 20.1642 11.75 19.75 11.75H18.25C17.8358 11.75 17.5 11.4142 17.5 11C17.5 10.5858 17.8358 10.25 18.25 10.25H19.75Z',
  d11: 'M5.74254 9.34714C5.38196 9.76547 5.42879 10.3969 5.84712 10.7575L7.28758 12L5.84712 13.2426C5.42879 13.6031 5.38196 14.2346 5.74254 14.6529C6.10311 15.0712 6.73454 15.1181 7.15288 14.7575L8.41646 13.6684L8.41647 13.6684C8.6415 13.4746 8.88059 13.2686 9.05542 13.0711C9.25309 12.8478 9.5 12.4934 9.5 12C9.5 11.5066 9.25309 11.1522 9.05542 10.9289C8.88059 10.7314 8.64149 10.5255 8.41646 10.3317L7.15288 9.24255C6.73454 8.88198 6.10311 8.9288 5.74254 9.34714Z',
  d12: 'M22 3V21L2 21V3H22Z',
  d13: 'M14 3L14 21',
  d14: 'M19.5 7H16.5M19.5 11H16.5',
  d15: 'M6 9L9 12L6 15',
  d16: 'M13.25 2.25H2C1.58579 2.25 1.25 2.58579 1.25 3V21C1.25 21.1989 1.32902 21.3897 1.46967 21.5303C1.61032 21.671 1.80109 21.75 2 21.75L13.25 21.75L13.25 2.25ZM5.4082 9.53039L7.87787 12.0001L5.4082 14.4697L6.46886 15.5304L9.99919 12.0001L6.46886 8.46973L5.4082 9.53039Z',
  d17: 'M14.75 21.75H22C22.4142 21.75 22.75 21.4142 22.75 21V3C22.75 2.58579 22.4142 2.25 22 2.25H14.75L14.75 21.75ZM17.25 6.25H20.25V7.75H17.25V6.25ZM17.25 10.25H20.25V11.75H17.25V10.25Z',
};

export const IconSidebarRight01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-right-01-stroke-rounded IconSidebarRight01StrokeRounded"
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

export const IconSidebarRight01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-right-01-duotone-rounded IconSidebarRight01DuotoneRounded"
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
        d={d.d7} 
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

export const IconSidebarRight01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-right-01-twotone-rounded IconSidebarRight01TwotoneRounded"
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

export const IconSidebarRight01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-right-01-solid-rounded IconSidebarRight01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSidebarRight01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-right-01-bulk-rounded IconSidebarRight01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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

export const IconSidebarRight01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-right-01-stroke-sharp IconSidebarRight01StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSidebarRight01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-right-01-solid-sharp IconSidebarRight01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSidebarRight01: TheIconSelfPack = {
  name: 'SidebarRight01',
  StrokeRounded: IconSidebarRight01StrokeRounded,
  DuotoneRounded: IconSidebarRight01DuotoneRounded,
  TwotoneRounded: IconSidebarRight01TwotoneRounded,
  SolidRounded: IconSidebarRight01SolidRounded,
  BulkRounded: IconSidebarRight01BulkRounded,
  StrokeSharp: IconSidebarRight01StrokeSharp,
  SolidSharp: IconSidebarRight01SolidSharp,
};