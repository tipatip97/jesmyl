import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28248 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28248 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1087C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1087C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M7.03711 12.0277L14.0127 12.0277M14.0127 12.0277C14.0127 12.5982 11.8575 14.5151 11.8575 14.5151M14.0127 12.0277C14.0127 11.4424 11.8575 9.56334 11.8575 9.56334M17.0371 7.99536V15.9954',
  d3: 'M2.5 12C2.5 7.52165 2.5 5.28248 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28248 21.5 7.52165 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1087C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1087C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d4: 'M7 12.0323H13.9756M13.9756 12.0323C13.9756 12.6028 11.8204 14.5197 11.8204 14.5197M13.9756 12.0323C13.9756 11.447 11.8204 9.56798 11.8204 9.56798M17 8V16',
  d5: 'M7 12.0321H13.9756M13.9756 12.0321C13.9756 12.6026 11.8204 14.5195 11.8204 14.5195M13.9756 12.0321C13.9756 11.4468 11.8204 9.56774 11.8204 9.56774M17 7.99976V15.9998',
  d6: 'M6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.7521 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059ZM17.75 16L17.75 8C17.75 7.58579 17.4142 7.25 17 7.25C16.5858 7.25 16.25 7.58579 16.25 8L16.25 16C16.25 16.4142 16.5858 16.75 17 16.75C17.4142 16.75 17.75 16.4142 17.75 16ZM6.25 12C6.25 12.4142 6.58579 12.75 7 12.75H11.25V13.061C11.25 13.3347 11.2499 13.6033 11.2736 13.8111C11.2921 13.9739 11.3538 14.4463 11.7721 14.6628C12.1907 14.8795 12.57 14.6345 12.6986 14.5482C12.8633 14.4377 13.057 14.2689 13.2545 14.0969L13.2826 14.0724C13.5848 13.8093 13.9202 13.5032 14.184 13.2002C14.3158 13.0489 14.446 12.88 14.5468 12.7015C14.6414 12.5338 14.75 12.2885 14.75 12C14.75 11.7115 14.6414 11.4662 14.5468 11.2985C14.446 11.12 14.3158 10.9511 14.184 10.7998C13.9202 10.4968 13.5848 10.1907 13.2826 9.92757L13.2545 9.90312C13.057 9.73106 12.8633 9.56231 12.6986 9.4518C12.57 9.36549 12.1907 9.12048 11.7721 9.33716C11.3538 9.55368 11.2921 10.0261 11.2736 10.1889C11.2499 10.3967 11.25 10.6653 11.25 10.939V11.25H7C6.58579 11.25 6.25 11.5858 6.25 12Z',
  d7: 'M11.9428 1.75C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.7521 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428Z',
  d8: 'M17.75 8L17.75 16C17.75 16.4142 17.4142 16.75 17 16.75C16.5858 16.75 16.25 16.4142 16.25 16L16.25 8C16.25 7.58579 16.5858 7.25 17 7.25C17.4142 7.25 17.75 7.58579 17.75 8Z',
  d9: 'M7 12.75C6.58579 12.75 6.25 12.4142 6.25 12C6.25 11.5858 6.58579 11.25 7 11.25L11.25 11.25L11.25 10.939C11.25 10.6653 11.2499 10.3967 11.2736 10.1889C11.2921 10.0261 11.3538 9.55368 11.7721 9.33716C12.1907 9.12048 12.57 9.36549 12.6986 9.4518C12.8633 9.56231 13.057 9.73106 13.2545 9.90312L13.2826 9.92757C13.5848 10.1907 13.9202 10.4968 14.184 10.7998C14.3158 10.9511 14.446 11.12 14.5468 11.2985C14.6414 11.4662 14.75 11.7115 14.75 12C14.75 12.2885 14.6414 12.5338 14.5468 12.7015C14.446 12.88 14.3158 13.0488 14.184 13.2002C13.9202 13.5032 13.5848 13.8093 13.2826 14.0724L13.2545 14.0969C13.057 14.2689 12.8633 14.4377 12.6986 14.5482C12.57 14.6345 12.1907 14.8795 11.7721 14.6628C11.3538 14.4463 11.2921 13.9739 11.2736 13.8111C11.2499 13.6033 11.25 13.3347 11.25 13.061L11.25 12.75L7 12.75Z',
  d10: 'M3 20.9999H21V2.99988H3V20.9999Z',
  d11: 'M16.9942 8.00537L16.9941 16M11.002 15L13.9873 11.996L10.9925 9.00339M7.00586 11.996H13.3911',
  d12: 'M3 2.24988C2.58579 2.24988 2.25 2.58566 2.25 2.99988V20.9999C2.25 21.4141 2.58579 21.7499 3 21.7499H21C21.4142 21.7499 21.75 21.4141 21.75 20.9999V2.99988C21.75 2.58566 21.4142 2.24988 21 2.24988H3ZM16 15.9999H18V7.99988H16V15.9999ZM15.4142 11.9999L11.7071 8.29277L10.2929 9.70698L11.5858 10.9999H7V12.9999H11.5858L10.2929 14.2928L11.7071 15.707L15.4142 11.9999Z',
} as const;

export const IconLogoutSquare02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-square-02-stroke-rounded IconLogoutSquare02StrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLogoutSquare02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-square-02-duotone-rounded IconLogoutSquare02DuotoneRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLogoutSquare02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-square-02-twotone-rounded IconLogoutSquare02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLogoutSquare02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-square-02-solid-rounded IconLogoutSquare02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLogoutSquare02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-square-02-bulk-rounded IconLogoutSquare02BulkRounded"
    >
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLogoutSquare02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-square-02-stroke-sharp IconLogoutSquare02StrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconLogoutSquare02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-square-02-solid-sharp IconLogoutSquare02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLogoutSquare02: TheIconSelfPack = {
  name: 'LogoutSquare02',
  StrokeRounded: IconLogoutSquare02StrokeRounded,
  DuotoneRounded: IconLogoutSquare02DuotoneRounded,
  TwotoneRounded: IconLogoutSquare02TwotoneRounded,
  SolidRounded: IconLogoutSquare02SolidRounded,
  BulkRounded: IconLogoutSquare02BulkRounded,
  StrokeSharp: IconLogoutSquare02StrokeSharp,
  SolidSharp: IconLogoutSquare02SolidSharp,
};