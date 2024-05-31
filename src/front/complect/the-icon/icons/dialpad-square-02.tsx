import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 4C2 4.94281 2 5.41421 2.29289 5.70711C2.58579 6 3.05719 6 4 6C4.94281 6 5.41421 6 5.70711 5.70711C6 5.41421 6 4.94281 6 4C6 3.05719 6 2.58579 5.70711 2.29289C5.41421 2 4.94281 2 4 2C3.05719 2 2.58579 2 2.29289 2.29289C2 2.58579 2 3.05719 2 4Z',
  d2: 'M2 12C2 12.9428 2 13.4142 2.29289 13.7071C2.58579 14 3.05719 14 4 14C4.94281 14 5.41421 14 5.70711 13.7071C6 13.4142 6 12.9428 6 12C6 11.0572 6 10.5858 5.70711 10.2929C5.41421 10 4.94281 10 4 10C3.05719 10 2.58579 10 2.29289 10.2929C2 10.5858 2 11.0572 2 12Z',
  d3: 'M10 4C10 4.94281 10 5.41421 10.2929 5.70711C10.5858 6 11.0572 6 12 6C12.9428 6 13.4142 6 13.7071 5.70711C14 5.41421 14 4.94281 14 4C14 3.05719 14 2.58579 13.7071 2.29289C13.4142 2 12.9428 2 12 2C11.0572 2 10.5858 2 10.2929 2.29289C10 2.58579 10 3.05719 10 4Z',
  d4: 'M10 12C10 12.9428 10 13.4142 10.2929 13.7071C10.5858 14 11.0572 14 12 14C12.9428 14 13.4142 14 13.7071 13.7071C14 13.4142 14 12.9428 14 12C14 11.0572 14 10.5858 13.7071 10.2929C13.4142 10 12.9428 10 12 10C11.0572 10 10.5858 10 10.2929 10.2929C10 10.5858 10 11.0572 10 12Z',
  d5: 'M10 20C10 20.9428 10 21.4142 10.2929 21.7071C10.5858 22 11.0572 22 12 22C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20C14 19.0572 14 18.5858 13.7071 18.2929C13.4142 18 12.9428 18 12 18C11.0572 18 10.5858 18 10.2929 18.2929C10 18.5858 10 19.0572 10 20Z',
  d6: 'M18 4C18 4.94281 18 5.41421 18.2929 5.70711C18.5858 6 19.0572 6 20 6C20.9428 6 21.4142 6 21.7071 5.70711C22 5.41421 22 4.94281 22 4C22 3.05719 22 2.58579 21.7071 2.29289C21.4142 2 20.9428 2 20 2C19.0572 2 18.5858 2 18.2929 2.29289C18 2.58579 18 3.05719 18 4Z',
  d7: 'M18 12C18 12.9428 18 13.4142 18.2929 13.7071C18.5858 14 19.0572 14 20 14C20.9428 14 21.4142 14 21.7071 13.7071C22 13.4142 22 12.9428 22 12C22 11.0572 22 10.5858 21.7071 10.2929C21.4142 10 20.9428 10 20 10C19.0572 10 18.5858 10 18.2929 10.2929C18 10.5858 18 11.0572 18 12Z',
  d8: 'M3.95526 1.25L4.00001 1.25001L4.04476 1.25C4.47757 1.24995 4.8744 1.24991 5.19721 1.29331C5.55269 1.3411 5.92842 1.45355 6.23744 1.76257C6.54647 2.07159 6.65891 2.44732 6.70671 2.8028C6.75011 3.12561 6.75006 3.52244 6.75001 3.95525V3.95526L6.75001 4.00001L6.75001 4.04475V4.04476C6.75006 4.47758 6.75011 4.8744 6.70671 5.19721C6.65891 5.55269 6.54647 5.92842 6.23744 6.23744C5.92842 6.54647 5.55269 6.65891 5.19721 6.70671C4.8744 6.75011 4.47758 6.75006 4.04476 6.75001H4.04475L4.00001 6.75001L3.95526 6.75001H3.95525C3.52244 6.75006 3.12561 6.75011 2.8028 6.70671C2.44732 6.65891 2.07159 6.54647 1.76257 6.23744C1.45355 5.92842 1.3411 5.55269 1.29331 5.19721C1.24991 4.8744 1.24995 4.47757 1.25 4.04476L1.25001 4.00001L1.25 3.95526C1.24995 3.52244 1.24991 3.12561 1.29331 2.8028C1.3411 2.44732 1.45355 2.07159 1.76257 1.76257C2.07159 1.45355 2.44732 1.3411 2.8028 1.29331C3.12561 1.24991 3.52244 1.24995 3.95526 1.25Z',
  d9: 'M11.9553 1.25L12 1.25001L12.0448 1.25C12.4776 1.24995 12.8744 1.24991 13.1972 1.29331C13.5527 1.3411 13.9284 1.45355 14.2374 1.76257C14.5465 2.07159 14.6589 2.44732 14.7067 2.8028C14.7501 3.12561 14.7501 3.52244 14.75 3.95525V3.95526L14.75 4.00001L14.75 4.04475V4.04476C14.7501 4.47758 14.7501 4.8744 14.7067 5.19721C14.6589 5.55269 14.5465 5.92842 14.2374 6.23744C13.9284 6.54647 13.5527 6.65891 13.1972 6.70671C12.8744 6.75011 12.4776 6.75006 12.0448 6.75001H12.0448L12 6.75001L11.9553 6.75001H11.9553C11.5224 6.75006 11.1256 6.75011 10.8028 6.70671C10.4473 6.65891 10.0716 6.54647 9.76257 6.23744C9.45355 5.92842 9.3411 5.55269 9.29331 5.19721C9.24991 4.8744 9.24995 4.47757 9.25 4.04476L9.25001 4.00001L9.25 3.95526C9.24995 3.52244 9.24991 3.12561 9.29331 2.8028C9.3411 2.44732 9.45355 2.07159 9.76257 1.76257C10.0716 1.45355 10.4473 1.3411 10.8028 1.29331C11.1256 1.24991 11.5224 1.24995 11.9553 1.25Z',
  d10: 'M19.9553 1.25L20 1.25001L20.0448 1.25C20.4776 1.24995 20.8744 1.24991 21.1972 1.29331C21.5527 1.3411 21.9284 1.45355 22.2374 1.76257C22.5465 2.07159 22.6589 2.44732 22.7067 2.8028C22.7501 3.12561 22.7501 3.52244 22.75 3.95525V3.95526L22.75 4.00001L22.75 4.04475V4.04476C22.7501 4.47758 22.7501 4.8744 22.7067 5.19721C22.6589 5.55269 22.5465 5.92842 22.2374 6.23744C21.9284 6.54647 21.5527 6.65891 21.1972 6.70671C20.8744 6.75011 20.4776 6.75006 20.0448 6.75001H20.0448L20 6.75001L19.9553 6.75001H19.9553C19.5224 6.75006 19.1256 6.75011 18.8028 6.70671C18.4473 6.65891 18.0716 6.54647 17.7626 6.23744C17.4535 5.92842 17.3411 5.55269 17.2933 5.19721C17.2499 4.8744 17.25 4.47757 17.25 4.04476L17.25 4.00001L17.25 3.95526C17.25 3.52244 17.2499 3.12561 17.2933 2.8028C17.3411 2.44732 17.4535 2.07159 17.7626 1.76257C18.0716 1.45355 18.4473 1.3411 18.8028 1.29331C19.1256 1.24991 19.5224 1.24995 19.9553 1.25Z',
  d11: 'M3.95526 9.25L4.00001 9.25001L4.04476 9.25C4.47757 9.24995 4.8744 9.24991 5.19721 9.29331C5.55269 9.3411 5.92842 9.45355 6.23744 9.76257C6.54647 10.0716 6.65891 10.4473 6.70671 10.8028C6.75011 11.1256 6.75006 11.5224 6.75001 11.9553V11.9553L6.75001 12L6.75001 12.0448V12.0448C6.75006 12.4776 6.75011 12.8744 6.70671 13.1972C6.65891 13.5527 6.54647 13.9284 6.23744 14.2374C5.92842 14.5465 5.55269 14.6589 5.19721 14.7067C4.8744 14.7501 4.47758 14.7501 4.04476 14.75H4.04475L4.00001 14.75L3.95526 14.75H3.95525C3.52244 14.7501 3.12561 14.7501 2.8028 14.7067C2.44732 14.6589 2.07159 14.5465 1.76257 14.2374C1.45355 13.9284 1.3411 13.5527 1.29331 13.1972C1.24991 12.8744 1.24995 12.4776 1.25 12.0448L1.25001 12L1.25 11.9553C1.24995 11.5224 1.24991 11.1256 1.29331 10.8028C1.3411 10.4473 1.45355 10.0716 1.76257 9.76257C2.07159 9.45355 2.44732 9.3411 2.8028 9.29331C3.12561 9.24991 3.52244 9.24995 3.95526 9.25Z',
  d12: 'M11.9553 9.25L12 9.25001L12.0448 9.25C12.4776 9.24995 12.8744 9.24991 13.1972 9.29331C13.5527 9.3411 13.9284 9.45355 14.2374 9.76257C14.5465 10.0716 14.6589 10.4473 14.7067 10.8028C14.7501 11.1256 14.7501 11.5224 14.75 11.9553V11.9553L14.75 12L14.75 12.0448V12.0448C14.7501 12.4776 14.7501 12.8744 14.7067 13.1972C14.6589 13.5527 14.5465 13.9284 14.2374 14.2374C13.9284 14.5465 13.5527 14.6589 13.1972 14.7067C12.8744 14.7501 12.4776 14.7501 12.0448 14.75H12.0448L12 14.75L11.9553 14.75H11.9553C11.5224 14.7501 11.1256 14.7501 10.8028 14.7067C10.4473 14.6589 10.0716 14.5465 9.76257 14.2374C9.45355 13.9284 9.3411 13.5527 9.29331 13.1972C9.24991 12.8744 9.24995 12.4776 9.25 12.0448L9.25001 12L9.25 11.9553C9.24995 11.5224 9.24991 11.1256 9.29331 10.8028C9.3411 10.4473 9.45355 10.0716 9.76257 9.76257C10.0716 9.45355 10.4473 9.3411 10.8028 9.29331C11.1256 9.24991 11.5224 9.24995 11.9553 9.25Z',
  d13: 'M11.9553 17.25L12 17.25L12.0448 17.25C12.4776 17.25 12.8744 17.2499 13.1972 17.2933C13.5527 17.3411 13.9284 17.4535 14.2374 17.7626C14.5465 18.0716 14.6589 18.4473 14.7067 18.8028C14.7501 19.1256 14.7501 19.5224 14.75 19.9553V19.9553L14.75 20L14.75 20.0448V20.0448C14.7501 20.4776 14.7501 20.8744 14.7067 21.1972C14.6589 21.5527 14.5465 21.9284 14.2374 22.2374C13.9284 22.5465 13.5527 22.6589 13.1972 22.7067C12.8744 22.7501 12.4776 22.7501 12.0448 22.75H12.0448L12 22.75L11.9553 22.75H11.9553C11.5224 22.7501 11.1256 22.7501 10.8028 22.7067C10.4473 22.6589 10.0716 22.5465 9.76257 22.2374C9.45355 21.9284 9.3411 21.5527 9.29331 21.1972C9.24991 20.8744 9.24995 20.4776 9.25 20.0448L9.25001 20L9.25 19.9553C9.24995 19.5224 9.24991 19.1256 9.29331 18.8028C9.3411 18.4473 9.45355 18.0716 9.76257 17.7626C10.0716 17.4535 10.4473 17.3411 10.8028 17.2933C11.1256 17.2499 11.5224 17.25 11.9553 17.25Z',
  d14: 'M19.9553 9.25L20 9.25001L20.0448 9.25C20.4776 9.24995 20.8744 9.24991 21.1972 9.29331C21.5527 9.3411 21.9284 9.45355 22.2374 9.76257C22.5465 10.0716 22.6589 10.4473 22.7067 10.8028C22.7501 11.1256 22.7501 11.5224 22.75 11.9553V11.9553L22.75 12L22.75 12.0448V12.0448C22.7501 12.4776 22.7501 12.8744 22.7067 13.1972C22.6589 13.5527 22.5465 13.9284 22.2374 14.2374C21.9284 14.5465 21.5527 14.6589 21.1972 14.7067C20.8744 14.7501 20.4776 14.7501 20.0448 14.75H20.0448L20 14.75L19.9553 14.75H19.9553C19.5224 14.7501 19.1256 14.7501 18.8028 14.7067C18.4473 14.6589 18.0716 14.5465 17.7626 14.2374C17.4535 13.9284 17.3411 13.5527 17.2933 13.1972C17.2499 12.8744 17.25 12.4776 17.25 12.0448L17.25 12L17.25 11.9553C17.25 11.5224 17.2499 11.1256 17.2933 10.8028C17.3411 10.4473 17.4535 10.0716 17.7626 9.76257C18.0716 9.45355 18.4473 9.3411 18.8028 9.29331C19.1256 9.24991 19.5224 9.24995 19.9553 9.25Z',
  d15: 'M2 2H6V6H2V2Z',
  d16: 'M10 2H14V6H10V2Z',
  d17: 'M18 2H22V6H18V2Z',
  d18: 'M2 10H6V14H2V10Z',
  d19: 'M10 10H14V14H10V10Z',
  d20: 'M18 10H22V14H18V10Z',
  d21: 'M10 18H14V22H10V18Z',
  d22: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H6C6.41421 1.25 6.75 1.58579 6.75 2V6C6.75 6.41421 6.41421 6.75 6 6.75H2C1.58579 6.75 1.25 6.41421 1.25 6V2Z',
  d23: 'M9.25 2C9.25 1.58579 9.58579 1.25 10 1.25H14C14.4142 1.25 14.75 1.58579 14.75 2V6C14.75 6.41421 14.4142 6.75 14 6.75H10C9.58579 6.75 9.25 6.41421 9.25 6V2Z',
  d24: 'M17.25 2C17.25 1.58579 17.5858 1.25 18 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V6C22.75 6.41421 22.4142 6.75 22 6.75H18C17.5858 6.75 17.25 6.41421 17.25 6V2Z',
  d25: 'M1.25 10C1.25 9.58579 1.58579 9.25 2 9.25H6C6.41421 9.25 6.75 9.58579 6.75 10V14C6.75 14.4142 6.41421 14.75 6 14.75H2C1.58579 14.75 1.25 14.4142 1.25 14V10Z',
  d26: 'M9.25 10C9.25 9.58579 9.58579 9.25 10 9.25H14C14.4142 9.25 14.75 9.58579 14.75 10V14C14.75 14.4142 14.4142 14.75 14 14.75H10C9.58579 14.75 9.25 14.4142 9.25 14V10Z',
  d27: 'M17.25 10C17.25 9.58579 17.5858 9.25 18 9.25H22C22.4142 9.25 22.75 9.58579 22.75 10V14C22.75 14.4142 22.4142 14.75 22 14.75H18C17.5858 14.75 17.25 14.4142 17.25 14V10Z',
  d28: 'M9.25 18C9.25 17.5858 9.58579 17.25 10 17.25H14C14.4142 17.25 14.75 17.5858 14.75 18V22C14.75 22.4142 14.4142 22.75 14 22.75H10C9.58579 22.75 9.25 22.4142 9.25 22V18Z',
} as const;

export const IconDialpadSquare02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dialpad-square-02-stroke-rounded IconDialpadSquare02StrokeRounded"
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
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDialpadSquare02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dialpad-square-02-duotone-rounded IconDialpadSquare02DuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
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
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDialpadSquare02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dialpad-square-02-twotone-rounded IconDialpadSquare02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDialpadSquare02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dialpad-square-02-solid-rounded IconDialpadSquare02SolidRounded"
    >
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDialpadSquare02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dialpad-square-02-bulk-rounded IconDialpadSquare02BulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDialpadSquare02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dialpad-square-02-stroke-sharp IconDialpadSquare02StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDialpadSquare02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dialpad-square-02-solid-sharp IconDialpadSquare02SolidSharp"
    >
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
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDialpadSquare02: TheIconSelfPack = {
  name: 'DialpadSquare02',
  StrokeRounded: IconDialpadSquare02StrokeRounded,
  DuotoneRounded: IconDialpadSquare02DuotoneRounded,
  TwotoneRounded: IconDialpadSquare02TwotoneRounded,
  SolidRounded: IconDialpadSquare02SolidRounded,
  BulkRounded: IconDialpadSquare02BulkRounded,
  StrokeSharp: IconDialpadSquare02StrokeSharp,
  SolidSharp: IconDialpadSquare02SolidSharp,
};