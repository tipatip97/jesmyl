import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 4C17 3.05719 17 2.58579 17.2929 2.29289C17.5858 2 18.0572 2 19 2H20C20.9428 2 21.4142 2 21.7071 2.29289C22 2.58579 22 3.05719 22 4V5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H19C18.0572 7 17.5858 7 17.2929 6.70711C17 6.41421 17 5.94281 17 5V4Z',
  d2: 'M9.5 11.5C9.5 10.5572 9.5 10.0858 9.79289 9.79289C10.0858 9.5 10.5572 9.5 11.5 9.5H12.5C13.4428 9.5 13.9142 9.5 14.2071 9.79289C14.5 10.0858 14.5 10.5572 14.5 11.5V12.5C14.5 13.4428 14.5 13.9142 14.2071 14.2071C13.9142 14.5 13.4428 14.5 12.5 14.5H11.5C10.5572 14.5 10.0858 14.5 9.79289 14.2071C9.5 13.9142 9.5 13.4428 9.5 12.5V11.5Z',
  d3: 'M17 19C17 18.0572 17 17.5858 17.2929 17.2929C17.5858 17 18.0572 17 19 17H20C20.9428 17 21.4142 17 21.7071 17.2929C22 17.5858 22 18.0572 22 19V20C22 20.9428 22 21.4142 21.7071 21.7071C21.4142 22 20.9428 22 20 22H19C18.0572 22 17.5858 22 17.2929 21.7071C17 21.4142 17 20.9428 17 20V19Z',
  d4: 'M2 19C2 18.0572 2 17.5858 2.29289 17.2929C2.58579 17 3.05719 17 4 17H5C5.94281 17 6.41421 17 6.70711 17.2929C7 17.5858 7 18.0572 7 19V20C7 20.9428 7 21.4142 6.70711 21.7071C6.41421 22 5.94281 22 5 22H4C3.05719 22 2.58579 22 2.29289 21.7071C2 21.4142 2 20.9428 2 20V19Z',
  d5: 'M2 4C2 3.05719 2 2.58579 2.29289 2.29289C2.58579 2 3.05719 2 4 2H5C5.94281 2 6.41421 2 6.70711 2.29289C7 2.58579 7 3.05719 7 4V5C7 5.94281 7 6.41421 6.70711 6.70711C6.41421 7 5.94281 7 5 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5V4Z',
  d6: 'M4.5 13V7.04545M11 4.5H17M19.5 11V17M15.5 15.5L14.5 14.5',
  d7: 'M18.9553 1.25L19 1.25001H20L20.0448 1.25C20.4776 1.24995 20.8744 1.24991 21.1972 1.29331C21.5527 1.3411 21.9284 1.45355 22.2374 1.76257C22.5465 2.07159 22.6589 2.44732 22.7067 2.8028C22.7501 3.12561 22.7501 3.52244 22.75 3.95525V3.95526L22.75 4.00001V5.00001L22.75 5.04475V5.04476C22.7501 5.47758 22.7501 5.8744 22.7067 6.19721C22.6589 6.5527 22.5465 6.92842 22.2374 7.23744C21.9284 7.54647 21.5527 7.65891 21.1972 7.70671C20.8744 7.75011 20.4776 7.75006 20.0448 7.75001H20.0448L20 7.75001H19L18.9553 7.75001H18.9553C18.5224 7.75006 18.1256 7.75011 17.8028 7.70671C17.4473 7.65891 17.0716 7.54647 16.7626 7.23744C16.4535 6.92842 16.3411 6.55269 16.2933 6.19721C16.2499 5.8744 16.25 5.47757 16.25 5.04476L16.25 5.00001V4.00001L16.25 3.95526C16.25 3.52244 16.2499 3.12561 16.2933 2.8028C16.3411 2.44732 16.4535 2.07159 16.7626 1.76257C17.0716 1.45355 17.4473 1.3411 17.8028 1.29331C18.1256 1.24991 18.5224 1.24995 18.9553 1.25Z',
  d8: 'M11.4553 8.75L11.5 8.75001H12.5L12.5448 8.75C12.9776 8.74995 13.3744 8.74991 13.6972 8.79331C14.0527 8.8411 14.4284 8.95355 14.7374 9.26257C15.0465 9.57159 15.1589 9.94732 15.2067 10.3028C15.2501 10.6256 15.2501 11.0224 15.25 11.4553V11.4553L15.25 11.5V12.5L15.25 12.5448V12.5448C15.2501 12.9776 15.2501 13.3744 15.2067 13.6972C15.1589 14.0527 15.0465 14.4284 14.7374 14.7374C14.4284 15.0465 14.0527 15.1589 13.6972 15.2067C13.3744 15.2501 12.9776 15.2501 12.5448 15.25H12.5448L12.5 15.25H11.5L11.4553 15.25H11.4553C11.0224 15.2501 10.6256 15.2501 10.3028 15.2067C9.94732 15.1589 9.57159 15.0465 9.26257 14.7374C8.95355 14.4284 8.8411 14.0527 8.79331 13.6972C8.74991 13.3744 8.74995 12.9776 8.75 12.5448L8.75001 12.5V11.5L8.75 11.4553C8.74995 11.0224 8.74991 10.6256 8.79331 10.3028C8.8411 9.94732 8.95355 9.57159 9.26257 9.26257C9.57159 8.95355 9.94732 8.8411 10.3028 8.79331C10.6256 8.74991 11.0224 8.74995 11.4553 8.75Z',
  d9: 'M18.9553 16.25L19 16.25H20L20.0448 16.25C20.4776 16.25 20.8744 16.2499 21.1972 16.2933C21.5527 16.3411 21.9284 16.4535 22.2374 16.7626C22.5465 17.0716 22.6589 17.4473 22.7067 17.8028C22.7501 18.1256 22.7501 18.5224 22.75 18.9553V18.9553L22.75 19V20L22.75 20.0448V20.0448C22.7501 20.4776 22.7501 20.8744 22.7067 21.1972C22.6589 21.5527 22.5465 21.9284 22.2374 22.2374C21.9284 22.5465 21.5527 22.6589 21.1972 22.7067C20.8744 22.7501 20.4776 22.7501 20.0448 22.75H20.0448L20 22.75H19L18.9553 22.75H18.9553C18.5224 22.7501 18.1256 22.7501 17.8028 22.7067C17.4473 22.6589 17.0716 22.5465 16.7626 22.2374C16.4535 21.9284 16.3411 21.5527 16.2933 21.1972C16.2499 20.8744 16.25 20.4776 16.25 20.0448L16.25 20V19L16.25 18.9553C16.25 18.5224 16.2499 18.1256 16.2933 17.8028C16.3411 17.4473 16.4535 17.0716 16.7626 16.7626C17.0716 16.4535 17.4473 16.3411 17.8028 16.2933C18.1256 16.2499 18.5224 16.25 18.9553 16.25Z',
  d10: 'M3.95526 16.25L4.00001 16.25H5.00001L5.04476 16.25C5.47757 16.25 5.8744 16.2499 6.19721 16.2933C6.55269 16.3411 6.92842 16.4535 7.23744 16.7626C7.54647 17.0716 7.65891 17.4473 7.70671 17.8028C7.75011 18.1256 7.75006 18.5224 7.75001 18.9553V18.9553L7.75001 19V20L7.75001 20.0448V20.0448C7.75006 20.4776 7.75011 20.8744 7.70671 21.1972C7.65891 21.5527 7.54647 21.9284 7.23744 22.2374C6.92842 22.5465 6.5527 22.6589 6.19721 22.7067C5.8744 22.7501 5.47758 22.7501 5.04476 22.75H5.04475L5.00001 22.75H4.00001L3.95526 22.75H3.95525C3.52244 22.7501 3.12561 22.7501 2.8028 22.7067C2.44732 22.6589 2.07159 22.5465 1.76257 22.2374C1.45355 21.9284 1.3411 21.5527 1.29331 21.1972C1.24991 20.8744 1.24995 20.4776 1.25 20.0448L1.25001 20V19L1.25 18.9553C1.24995 18.5224 1.24991 18.1256 1.29331 17.8028C1.3411 17.4473 1.45355 17.0716 1.76257 16.7626C2.07159 16.4535 2.44732 16.3411 2.8028 16.2933C3.12561 16.2499 3.52244 16.25 3.95526 16.25Z',
  d11: 'M3.95526 1.25L4.00001 1.25001H5.00001L5.04476 1.25C5.47757 1.24995 5.8744 1.24991 6.19721 1.29331C6.55269 1.3411 6.92842 1.45355 7.23744 1.76257C7.54647 2.07159 7.65891 2.44732 7.70671 2.8028C7.75011 3.12561 7.75006 3.52244 7.75001 3.95525V3.95526L7.75001 4.00001V5.00001L7.75001 5.04475V5.04476C7.75006 5.47758 7.75011 5.8744 7.70671 6.19721C7.65891 6.5527 7.54647 6.92842 7.23744 7.23744C6.92842 7.54647 6.5527 7.65891 6.19721 7.70671C5.8744 7.75011 5.47758 7.75006 5.04476 7.75001H5.04475L5.00001 7.75001H4.00001L3.95526 7.75001H3.95525C3.52244 7.75006 3.12561 7.75011 2.8028 7.70671C2.44732 7.65891 2.07159 7.54647 1.76257 7.23744C1.45355 6.92842 1.3411 6.55269 1.29331 6.19721C1.24991 5.8744 1.24995 5.47757 1.25 5.04476L1.25001 5.00001V4.00001L1.25 3.95526C1.24995 3.52244 1.24991 3.12561 1.29331 2.8028C1.3411 2.44732 1.45355 2.07159 1.76257 1.76257C2.07159 1.45355 2.44732 1.3411 2.8028 1.29331C3.12561 1.24991 3.52244 1.24995 3.95526 1.25Z',
  d12: 'M10 4.5C10 3.94772 10.4477 3.5 11 3.5H17C17.5523 3.5 18 3.94772 18 4.5C18 5.05228 17.5523 5.5 17 5.5H11C10.4477 5.5 10 5.05228 10 4.5ZM4.5 6.04545C5.05228 6.04545 5.5 6.49317 5.5 7.04545V13C5.5 13.5523 5.05228 14 4.5 14C3.94772 14 3.5 13.5523 3.5 13V7.04545C3.5 6.49317 3.94772 6.04545 4.5 6.04545ZM19.5 10C20.0523 10 20.5 10.4477 20.5 11V17C20.5 17.5523 20.0523 18 19.5 18C18.9477 18 18.5 17.5523 18.5 17V11C18.5 10.4477 18.9477 10 19.5 10ZM13.7929 13.7929C14.1834 13.4024 14.8166 13.4024 15.2071 13.7929L16.2071 14.7929C16.5976 15.1834 16.5976 15.8166 16.2071 16.2071C15.8166 16.5976 15.1834 16.5976 14.7929 16.2071L13.7929 15.2071C13.4024 14.8166 13.4024 14.1834 13.7929 13.7929Z',
  d13: 'M11 3.5H16.252C16.25 3.6458 16.25 3.79816 16.25 3.95526V5.04476C16.25 5.20185 16.25 5.3542 16.252 5.5H11C10.4477 5.5 10 5.05228 10 4.5C10 3.94772 10.4477 3.5 11 3.5ZM18.9553 16.25H20.0448C20.2019 16.25 20.3542 16.25 20.5 16.252V11C20.5 10.4477 20.0523 10 19.5 10C18.9477 10 18.5 10.4477 18.5 11V16.252C18.6458 16.25 18.7982 16.25 18.9553 16.25ZM5.04478 7.75001H5.04477H5.04475H3.95526H3.95514H3.95512H3.95511H3.95509C3.79805 7.75003 3.64575 7.75005 3.5 7.74799V13C3.5 13.5523 3.94772 14 4.5 14C5.05228 14 5.5 13.5523 5.5 13V7.74799C5.35422 7.75005 5.20189 7.75003 5.04481 7.75001H5.0448H5.04478ZM15.1943 13.7803C15.1986 13.7845 15.2029 13.7887 15.2071 13.7929L16.2071 14.7929C16.5976 15.1834 16.5976 15.8166 16.2071 16.2071C15.8166 16.5976 15.1834 16.5976 14.7929 16.2071L13.7929 15.2071C13.7887 15.2029 13.7845 15.1986 13.7803 15.1943C13.7525 15.1989 13.7248 15.203 13.6972 15.2067C13.3744 15.2501 12.9776 15.2501 12.5448 15.25H12.5448H12.5448L12.5 15.25H11.5L11.4553 15.25H11.4553H11.4552C11.0224 15.2501 10.6256 15.2501 10.3028 15.2067C9.94732 15.1589 9.57159 15.0465 9.26257 14.7374C8.95355 14.4284 8.8411 14.0527 8.79331 13.6972C8.74991 13.3744 8.74995 12.9776 8.75 12.5448L8.75001 12.5V11.5L8.75 11.4553C8.74995 11.0224 8.74991 10.6256 8.79331 10.3028C8.8411 9.94732 8.95355 9.57159 9.26257 9.26257C9.57159 8.95355 9.94732 8.8411 10.3028 8.79331C10.6256 8.74991 11.0224 8.74995 11.4553 8.75L11.5 8.75001H12.5L12.5448 8.75C12.9776 8.74995 13.3744 8.74991 13.6972 8.79331C14.0527 8.8411 14.4284 8.95355 14.7374 9.26257C15.0465 9.57159 15.1589 9.94732 15.2067 10.3028C15.2501 10.6256 15.2501 11.0224 15.25 11.4552V11.4553V11.4553L15.25 11.5V12.5L15.25 12.5448V12.5448V12.5448C15.2501 12.9776 15.2501 13.3744 15.2067 13.6972C15.203 13.7248 15.1989 13.7525 15.1943 13.7803Z',
  d14: 'M22 22V17H17V22H22Z',
  d15: 'M7 22V17H2V22H7Z',
  d16: 'M7 7V2H2V7H7Z',
  d17: 'M22 7V2H17V7H22Z',
  d18: 'M14.5 14.5V9.5H9.5V14.5H14.5Z',
  d19: 'M4.5 14V7.04545M10 4.5H17M19.5 10V17M15.5 15.5L14.5 14.5',
  d20: 'M16.25 17C16.25 16.5858 16.5858 16.25 17 16.25H22C22.4142 16.25 22.75 16.5858 22.75 17V22C22.75 22.4142 22.4142 22.75 22 22.75H17C16.5858 22.75 16.25 22.4142 16.25 22V17Z',
  d21: 'M1.25 17C1.25 16.5858 1.58579 16.25 2 16.25H7C7.41421 16.25 7.75 16.5858 7.75 17V22C7.75 22.4142 7.41421 22.75 7 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V17Z',
  d22: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H7C7.41421 1.25 7.75 1.58579 7.75 2V7C7.75 7.41421 7.41421 7.75 7 7.75H2C1.58579 7.75 1.25 7.41421 1.25 7V2Z',
  d23: 'M16.25 2C16.25 1.58579 16.5858 1.25 17 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V7C22.75 7.41421 22.4142 7.75 22 7.75H17C16.5858 7.75 16.25 7.41421 16.25 7V2Z',
  d24: 'M8.75 8.75H15.25V15.25H8.75V8.75Z',
  d25: 'M17 5.5H10V3.5H17V5.5ZM5.5 7.04545V14H3.5V7.04545H5.5ZM18.5 17V10H20.5V17H18.5ZM15.2071 13.7929L16.2071 14.7929L14.7929 16.2071L13.7929 15.2071L15.2071 13.7929Z',
} as const;

export const IconSchemeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scheme-stroke-rounded IconSchemeStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSchemeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scheme-duotone-rounded IconSchemeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSchemeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scheme-twotone-rounded IconSchemeTwotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSchemeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scheme-solid-rounded IconSchemeSolidRounded"
    >
      <path 
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSchemeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scheme-bulk-rounded IconSchemeBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSchemeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scheme-stroke-sharp IconSchemeStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSchemeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scheme-solid-sharp IconSchemeSolidSharp"
    >
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfScheme: TheIconSelfPack = {
  name: 'Scheme',
  StrokeRounded: IconSchemeStrokeRounded,
  DuotoneRounded: IconSchemeDuotoneRounded,
  TwotoneRounded: IconSchemeTwotoneRounded,
  SolidRounded: IconSchemeSolidRounded,
  BulkRounded: IconSchemeBulkRounded,
  StrokeSharp: IconSchemeStrokeSharp,
  SolidSharp: IconSchemeSolidSharp,
};