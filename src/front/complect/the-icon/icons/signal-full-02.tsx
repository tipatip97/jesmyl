import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 17V16C7 15.0572 7 14.5858 6.70711 14.2929C6.41421 14 5.94281 14 5 14C4.05719 14 3.58579 14 3.29289 14.2929C3 14.5858 3 15.0572 3 16V17C3 17.9428 3 18.4142 3.29289 18.7071C3.58579 19 4.05719 19 5 19C5.94281 19 6.41421 19 6.70711 18.7071C7 18.4142 7 17.9428 7 17Z',
  d2: 'M14 17V12C14 11.0572 14 10.5858 13.7071 10.2929C13.4142 10 12.9428 10 12 10C11.0572 10 10.5858 10 10.2929 10.2929C10 10.5858 10 11.0572 10 12V17C10 17.9428 10 18.4142 10.2929 18.7071C10.5858 19 11.0572 19 12 19C12.9428 19 13.4142 19 13.7071 18.7071C14 18.4142 14 17.9428 14 17Z',
  d3: 'M21 17V8C21 7.05719 21 6.58579 20.7071 6.29289C20.4142 6 19.9428 6 19 6C18.0572 6 17.5858 6 17.2929 6.29289C17 6.58579 17 7.05719 17 8V17C17 17.9428 17 18.4142 17.2929 18.7071C17.5858 19 18.0572 19 19 19C19.9428 19 20.4142 19 20.7071 18.7071C21 18.4142 21 17.9428 21 17Z',
  d4: 'M4.95526 13.25C4.97013 13.25 4.98505 13.25 5.00001 13.25C5.01496 13.25 5.02988 13.25 5.04476 13.25C5.47757 13.25 5.8744 13.2499 6.19721 13.2933C6.55269 13.3411 6.92842 13.4535 7.23744 13.7626C7.54647 14.0716 7.65891 14.4473 7.70671 14.8028C7.75011 15.1256 7.75006 15.5224 7.75001 15.9553C7.75001 15.9701 7.75001 15.9851 7.75001 16V17C7.75001 17.015 7.75001 17.0299 7.75001 17.0448C7.75006 17.4776 7.75011 17.8744 7.70671 18.1972C7.65891 18.5527 7.54647 18.9284 7.23744 19.2374C6.92842 19.5465 6.55269 19.6589 6.19721 19.7067C5.8744 19.7501 5.47757 19.7501 5.04475 19.75C5.02988 19.75 5.01496 19.75 5.00001 19.75C4.98505 19.75 4.97014 19.75 4.95526 19.75C4.52245 19.7501 4.12561 19.7501 3.8028 19.7067C3.44732 19.6589 3.07159 19.5465 2.76257 19.2374C2.45355 18.9284 2.3411 18.5527 2.29331 18.1972C2.24991 17.8744 2.24995 17.4776 2.25 17.0448C2.25001 17.0299 2.25001 17.015 2.25001 17V16C2.25001 15.985 2.25001 15.9701 2.25 15.9553C2.24995 15.5224 2.24991 15.1256 2.29331 14.8028C2.3411 14.4473 2.45355 14.0716 2.76257 13.7626C3.07159 13.4535 3.44732 13.3411 3.8028 13.2933C4.12561 13.2499 4.52244 13.25 4.95526 13.25Z',
  d5: 'M11.9553 9.25C11.9701 9.25001 11.985 9.25001 12 9.25001C12.015 9.25001 12.0299 9.25001 12.0448 9.25C12.4776 9.24995 12.8744 9.24991 13.1972 9.29331C13.5527 9.3411 13.9284 9.45355 14.2374 9.76257C14.5465 10.0716 14.6589 10.4473 14.7067 10.8028C14.7501 11.1256 14.7501 11.5224 14.75 11.9553C14.75 11.9701 14.75 11.9851 14.75 12V17C14.75 17.015 14.75 17.0299 14.75 17.0448C14.7501 17.4776 14.7501 17.8744 14.7067 18.1972C14.6589 18.5527 14.5465 18.9284 14.2374 19.2374C13.9284 19.5465 13.5527 19.6589 13.1972 19.7067C12.8744 19.7501 12.4776 19.7501 12.0448 19.75C12.0299 19.75 12.015 19.75 12 19.75C11.9851 19.75 11.9701 19.75 11.9553 19.75C11.5224 19.7501 11.1256 19.7501 10.8028 19.7067C10.4473 19.6589 10.0716 19.5465 9.76257 19.2374C9.45355 18.9284 9.3411 18.5527 9.29331 18.1972C9.24991 17.8744 9.24995 17.4776 9.25 17.0448C9.25001 17.0299 9.25001 17.015 9.25001 17V12C9.25001 11.985 9.25001 11.9701 9.25 11.9553C9.24995 11.5224 9.24991 11.1256 9.29331 10.8028C9.3411 10.4473 9.45355 10.0716 9.76257 9.76257C10.0716 9.45355 10.4473 9.3411 10.8028 9.29331C11.1256 9.24991 11.5224 9.24995 11.9553 9.25Z',
  d6: 'M18.9553 5.25L19 5.25001L19.0448 5.25C19.4776 5.24995 19.8744 5.24991 20.1972 5.29331C20.5527 5.3411 20.9284 5.45355 21.2374 5.76257C21.5465 6.07159 21.6589 6.44732 21.7067 6.8028C21.7501 7.12561 21.7501 7.52244 21.75 7.95525V7.95526L21.75 8.00001L21.75 17.0448V17.0448C21.7501 17.4776 21.7501 17.8744 21.7067 18.1972C21.6589 18.5527 21.5465 18.9284 21.2374 19.2374C20.9284 19.5465 20.5527 19.6589 20.1972 19.7067C19.8744 19.7501 19.4776 19.7501 19.0448 19.75H19.0448H18.9553H18.9553C18.5224 19.7501 18.1256 19.7501 17.8028 19.7067C17.4473 19.6589 17.0716 19.5465 16.7626 19.2374C16.4535 18.9284 16.3411 18.5527 16.2933 18.1972C16.2499 17.8744 16.25 17.4776 16.25 17.0448L16.25 8.00001L16.25 7.95526C16.25 7.52244 16.2499 7.12561 16.2933 6.8028C16.3411 6.44732 16.4535 6.07159 16.7626 5.76257C17.0716 5.45355 17.4473 5.3411 17.8028 5.29331C18.1256 5.24991 18.5224 5.24995 18.9553 5.25Z',
  d7: 'M7 14H3V19H7V14Z',
  d8: 'M14 10H10V19H14V10Z',
  d9: 'M21 6H17V19H21V6Z',
  d10: 'M2.25 14C2.25 13.5858 2.58579 13.25 3 13.25H7C7.41421 13.25 7.75 13.5858 7.75 14V19C7.75 19.4142 7.41421 19.75 7 19.75H3C2.58579 19.75 2.25 19.4142 2.25 19V14Z',
  d11: 'M9.25 10C9.25 9.58579 9.58579 9.25 10 9.25H14C14.4142 9.25 14.75 9.58579 14.75 10V19C14.75 19.4142 14.4142 19.75 14 19.75H10C9.58579 19.75 9.25 19.4142 9.25 19V10Z',
  d12: 'M16.25 6C16.25 5.58579 16.5858 5.25 17 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6V19C21.75 19.4142 21.4142 19.75 21 19.75H17C16.5858 19.75 16.25 19.4142 16.25 19V6Z',
} as const;

export const IconSignalFull02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-full-02-stroke-rounded IconSignalFull02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSignalFull02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-full-02-duotone-rounded IconSignalFull02DuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconSignalFull02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-full-02-twotone-rounded IconSignalFull02TwotoneRounded"
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

export const IconSignalFull02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-full-02-solid-rounded IconSignalFull02SolidRounded"
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
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSignalFull02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-full-02-bulk-rounded IconSignalFull02BulkRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSignalFull02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-full-02-stroke-sharp IconSignalFull02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSignalFull02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-full-02-solid-sharp IconSignalFull02SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfSignalFull02: TheIconSelfPack = {
  name: 'SignalFull02',
  StrokeRounded: IconSignalFull02StrokeRounded,
  DuotoneRounded: IconSignalFull02DuotoneRounded,
  TwotoneRounded: IconSignalFull02TwotoneRounded,
  SolidRounded: IconSignalFull02SolidRounded,
  BulkRounded: IconSignalFull02BulkRounded,
  StrokeSharp: IconSignalFull02StrokeSharp,
  SolidSharp: IconSignalFull02SolidSharp,
};