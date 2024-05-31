import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M17.0371 12.0277L10.0615 12.0277M10.0615 12.0277C10.0615 12.5982 12.2168 14.5151 12.2168 14.5151M10.0615 12.0277C10.0615 11.4424 12.2168 9.56334 12.2168 9.56334M7.03711 7.99536V15.9954',
  d3: 'M16.9883 11.9959H10.0076M10.0076 11.9959C10.0076 12.5784 12.2282 14.4995 12.2282 14.4995M10.0076 11.9959C10.0076 11.4134 12.2282 9.46405 12.2282 9.46405M6.99609 7.99414V16.0007',
  d4: 'M17 12.0323H10.0244M10.0244 12.0323C10.0244 12.6028 12.1797 14.5197 12.1797 14.5197M10.0244 12.0323C10.0244 11.447 12.1797 9.56798 12.1797 9.56798M7 8V16',
  d5: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM6.25 16L6.25 8C6.25 7.58579 6.58579 7.25 7 7.25C7.41421 7.25 7.75 7.58579 7.75 8L7.75 16C7.75 16.4142 7.41421 16.75 7 16.75C6.58579 16.75 6.25 16.4142 6.25 16ZM17.75 12C17.75 12.4142 17.4142 12.75 17 12.75H12.75V13.061C12.75 13.3347 12.7501 13.6033 12.7264 13.8111C12.7079 13.9739 12.6462 14.4463 12.2279 14.6628C11.8093 14.8795 11.43 14.6345 11.3014 14.5482C11.1367 14.4377 10.943 14.2689 10.7455 14.0969L10.7174 14.0724C10.4152 13.8093 10.0798 13.5032 9.81597 13.2002C9.68419 13.0489 9.55395 12.88 9.4532 12.7015C9.35855 12.5338 9.25 12.2885 9.25 12C9.25 11.7115 9.35855 11.4662 9.4532 11.2985C9.55395 11.12 9.68419 10.9511 9.81597 10.7998C10.0798 10.4968 10.4152 10.1907 10.7174 9.92757L10.7455 9.90312C10.943 9.73106 11.1367 9.56231 11.3014 9.4518C11.43 9.36549 11.8093 9.12048 12.2279 9.33716C12.6462 9.55368 12.7079 10.0261 12.7264 10.1889C12.7501 10.3967 12.75 10.6653 12.75 10.939V11.25H17C17.4142 11.25 17.75 11.5858 17.75 12Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M6.25 8L6.25 16C6.25 16.4142 6.58579 16.75 7 16.75C7.41421 16.75 7.75 16.4142 7.75 16L7.75 8C7.75 7.58579 7.41421 7.25 7 7.25C6.58579 7.25 6.25 7.58579 6.25 8Z',
  d8: 'M17 12.75C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25L12.75 11.25L12.75 10.939C12.75 10.6653 12.7501 10.3967 12.7264 10.1889C12.7079 10.0261 12.6462 9.55368 12.2279 9.33716C11.8093 9.12048 11.43 9.36549 11.3014 9.4518C11.1367 9.56231 10.943 9.73106 10.7455 9.90312L10.7174 9.92757C10.4152 10.1907 10.0798 10.4968 9.81597 10.7998C9.68419 10.9511 9.55395 11.12 9.4532 11.2985C9.35855 11.4662 9.25 11.7115 9.25 12C9.25 12.2885 9.35855 12.5338 9.4532 12.7015C9.55395 12.88 9.68419 13.0488 9.81597 13.2002C10.0798 13.5032 10.4152 13.8093 10.7174 14.0724L10.7455 14.0969C10.943 14.2689 11.1367 14.4377 11.3014 14.5482C11.43 14.6345 11.8093 14.8795 12.2279 14.6628C12.6462 14.4463 12.7079 13.9739 12.7264 13.8111C12.7501 13.6033 12.75 13.3347 12.75 13.061L12.75 12.75L17 12.75Z',
  d9: 'M3 21H21V3H3V21Z',
  d10: 'M7.01172 15.9947L7.01178 8M17.0001 12.0041H10.7043M13.0039 9L10.0186 12.0041L13.0134 14.9966',
  d11: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM6 8L6 16H8L8 8H6ZM13.7071 14.2929L12.4142 13H17V11H12.4142L13.7071 9.70711L12.2929 8.29289L8.58579 12L12.2929 15.7071L13.7071 14.2929Z',
} as const;

export const IconLoginSquare02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="login-square-02-stroke-rounded IconLoginSquare02StrokeRounded"
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

export const IconLoginSquare02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="login-square-02-duotone-rounded IconLoginSquare02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLoginSquare02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="login-square-02-twotone-rounded IconLoginSquare02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLoginSquare02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="login-square-02-solid-rounded IconLoginSquare02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLoginSquare02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="login-square-02-bulk-rounded IconLoginSquare02BulkRounded"
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLoginSquare02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="login-square-02-stroke-sharp IconLoginSquare02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLoginSquare02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="login-square-02-solid-sharp IconLoginSquare02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLoginSquare02: TheIconSelfPack = {
  name: 'LoginSquare02',
  StrokeRounded: IconLoginSquare02StrokeRounded,
  DuotoneRounded: IconLoginSquare02DuotoneRounded,
  TwotoneRounded: IconLoginSquare02TwotoneRounded,
  SolidRounded: IconLoginSquare02SolidRounded,
  BulkRounded: IconLoginSquare02BulkRounded,
  StrokeSharp: IconLoginSquare02StrokeSharp,
  SolidSharp: IconLoginSquare02SolidSharp,
};