import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.5 5.5C13.5 4.67157 14.1716 4 15 4C15.8284 4 16.5 4.67157 16.5 5.5V11M13.5 5.5V3.5C13.5 2.67157 12.8284 2 12 2C11.1716 2 10.5 2.67157 10.5 3.5L10.5002 5M13.5 5.5V10M10.5002 5C10.4999 4.17187 9.82842 3.50064 9.00021 3.50064C8.17178 3.50064 7.50021 4.17221 7.50021 5.00064L7.5 13.4624L5.8797 11.837C5.16877 11.1239 3.99772 11.1889 3.36965 11.9765C2.88907 12.5791 2.8758 13.4315 3.33738 14.0489L6.93707 18.6471C7.62579 19.5269 8 20.8829 8 22.0002M10.5002 5V9M19.5 11V7.5C19.5 6.67157 18.8284 6 18 6C17.1716 6 16.5 6.67157 16.5 7.5',
  d2: 'M15 19.5C15 18.5654 15 18.0981 15.201 17.75C15.3326 17.522 15.522 17.3326 15.75 17.201C16.0981 17 16.5654 17 17.5 17H18.5C19.4346 17 19.9019 17 20.25 17.201C20.478 17.3326 20.6674 17.522 20.799 17.75C21 18.0981 21 18.5654 21 19.5C21 20.4346 21 20.9019 20.799 21.25C20.6674 21.478 20.478 21.6674 20.25 21.799C19.9019 22 19.4346 22 18.5 22H17.5C16.5654 22 16.0981 22 15.75 21.799C15.522 21.6674 15.3326 21.478 15.201 21.25C15 20.9019 15 20.4346 15 19.5Z',
  d3: 'M16.5 15.5C16.5 14.6716 17.1716 14 18 14C18.8284 14 19.5 14.6716 19.5 15.5V17H16.5V15.5Z',
  d4: 'M15 4C15.8284 4 16.5 4.67157 16.5 5.5V7.5C16.5 6.67157 17.1716 6 18 6C18.8284 6 19.5 6.67157 19.5 7.5V13.6668C19.5 15.2429 19.5 16.2476 19.3737 17.0106C19.1361 17 18.851 17 18.5 17H17.5C16.5654 17 16.0981 17 15.75 17.201C15.522 17.3326 15.3326 17.522 15.201 17.75C15 18.0981 15 18.5654 15 19.5C15 20.4346 15 20.9019 15.201 21.25C15.3326 21.478 15.522 21.6674 15.75 21.799C16.0981 22 16.5654 22 17.5 22L8 22.0002C8 20.8829 7.62579 19.5269 6.93707 18.6471L3.33738 14.0489C2.8758 13.4315 2.88907 12.5791 3.36965 11.9765C3.99772 11.1889 5.16877 11.1239 5.8797 11.837L7.5 13.4624L7.50021 5.00064C7.50021 4.17221 8.17178 3.50064 9.00021 3.50064C9.82842 3.50064 10.4999 4.17187 10.5002 5L10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5V5.5C13.5 4.67157 14.1716 4 15 4Z',
  d5: 'M18 13.25C16.7574 13.25 15.75 14.2574 15.75 15.5V16.3877C15.6227 16.4278 15.4974 16.4808 15.375 16.5514C15.033 16.7489 14.7489 17.033 14.5514 17.375C14.3741 17.6822 14.308 18.0082 14.2782 18.3374C14.25 18.6486 14.25 19.0925 14.25 19.5322C14.25 19.972 14.25 20.3514 14.2782 20.6627C14.308 20.9918 14.3741 21.3178 14.5514 21.625C14.7489 21.967 15.033 22.2511 15.375 22.4486C15.6822 22.6259 16.0082 22.692 16.3374 22.7218C16.6486 22.75 17.028 22.75 17.4678 22.75H18.5322C18.972 22.75 19.3514 22.75 19.6627 22.7218C19.9918 22.692 20.3178 22.6259 20.625 22.4486C20.967 22.2511 21.2511 21.967 21.4486 21.625C21.6259 21.3178 21.692 20.9918 21.7218 20.6627C21.75 20.3514 21.75 19.972 21.75 19.5322C21.75 19.0924 21.75 18.6486 21.7218 18.3374C21.692 18.0082 21.6259 17.6822 21.4486 17.375C21.2511 17.033 20.967 16.7489 20.625 16.5514C20.5026 16.4808 20.3773 16.4278 20.25 16.3877V15.5C20.25 14.2574 19.2426 13.25 18 13.25ZM18.75 16.25V15.5C18.75 15.0858 18.4142 14.75 18 14.75C17.5858 14.75 17.25 15.0858 17.25 15.5V16.25H18.75Z',
  d6: 'M10.8208 9.76602C10.8208 9.99733 10.629 10.1848 10.3923 10.1848C10.1556 10.1848 9.96369 9.99733 9.96369 9.76602V4.03625C9.96369 3.32611 9.388 2.75042 8.67786 2.75042C7.96771 2.75042 7.39202 3.32611 7.39202 4.03625V13.6331C7.39202 13.8026 7.28745 13.9554 7.12714 14.0202C6.96683 14.0849 6.78239 14.0489 6.65993 13.9288L4.80816 12.1134C4.1765 11.4942 3.13642 11.5505 2.57812 12.2347C2.37013 12.4895 2.2605 12.7959 2.25 13.1051C2.2543 13.2525 2.27188 13.3995 2.30275 13.5444C2.35118 13.7173 2.43246 13.8836 2.54675 14.0339L6.34546 19.1092C6.58793 19.4189 6.79618 19.8239 6.95244 20.2803C7.12537 20.7853 7.27894 21.2339 7.41334 21.548C7.53901 21.8417 7.71624 22.1987 8.03116 22.4238C8.32232 22.6318 8.65178 22.6956 8.94199 22.7233C9.22236 22.75 9.57046 22.75 9.96491 22.7499L13.0504 22.75C13.2356 22.75 13.345 22.5354 13.2524 22.375C12.9214 21.8016 12.8236 21.2316 12.7843 20.798C12.7499 20.4181 12.75 19.9366 12.75 19.5323C12.7499 19.1282 12.7499 18.5822 12.7843 18.202C12.8236 17.7684 12.9214 17.1984 13.2524 16.625C13.456 16.2724 13.7148 15.9568 14.0175 15.6894C14.1334 15.587 14.1914 15.5358 14.2175 15.4836C14.2435 15.4314 14.2496 15.3543 14.2618 15.2003C14.3707 13.8234 15.2233 12.6557 16.418 12.0991C16.6237 12.0032 16.7266 11.9553 16.7736 11.8815C16.8206 11.8077 16.8206 11.7071 16.8206 11.5058V4.66345C16.8206 3.95337 16.245 3.37773 15.5349 3.37773C14.8248 3.37773 14.2492 3.95337 14.2492 4.66345V10.8829C14.2492 11.1142 14.0573 11.3017 13.8206 11.3017C13.5839 11.3017 13.392 11.1142 13.392 10.8829L13.3924 2.53587C13.3925 1.82571 12.8168 1.25 12.1066 1.25C11.3965 1.25 10.8208 1.82568 10.8208 2.53581V9.76602Z',
  d7: 'M17.6777 11.441C17.6777 11.6146 17.8264 11.75 18 11.75C18.5577 11.75 19.087 11.8717 19.5626 12.0901C19.8975 12.2438 20.0649 12.3206 20.1569 12.2616C20.249 12.2026 20.249 12.0346 20.249 11.6986V6.55814C20.249 5.84812 19.6734 5.27253 18.9633 5.27253C18.2533 5.27253 17.6777 5.84812 17.6777 6.55814V11.441Z',
  d8: 'M13.5 5.5C13.5 4.67157 14.1716 4 15 4C15.8284 4 16.5 4.67157 16.5 5.5V7.5M13.5 5.5V3.5C13.5 2.67157 12.8284 2 12 2C11.1716 2 10.5 2.67157 10.5 3.5L10.5002 5M13.5 5.5V11M10.5002 5C10.4999 4.17187 9.82842 3.50064 9.00021 3.50064C8.17178 3.50064 7.50021 4.17221 7.50021 5.00064L7.5 13.4624L5.8797 11.837C5.16877 11.1239 3.99772 11.1889 3.36965 11.9765C2.88907 12.5791 2.8758 13.4315 3.33738 14.0489L7.5 19.5V22M10.5002 5V10M16.5 12V7.5M16.5 7.5C16.5 6.67157 17.1716 6 18 6C18.8284 6 19.5 6.67157 19.5 7.5V12',
  d9: 'M15 17H21V22H15V17Z',
  d10: 'M16.5 17V15.5C16.5 14.6716 17.1716 14 18 14C18.8284 14 19.5 14.6716 19.5 15.5V17',
  d11: 'M18.5 13.25C17.2574 13.25 16.25 14.2574 16.25 15.5V16.25H14.75V22.75H22.25V16.25H20.75V15.5C20.75 14.2574 19.7426 13.25 18.5 13.25ZM19.25 15.5V16.25H17.75V15.5C17.75 15.0858 18.0858 14.75 18.5 14.75C18.9142 14.75 19.25 15.0858 19.25 15.5Z',
  d12: 'M10.2943 2.53108C10.2943 1.82358 10.8809 1.25 11.6044 1.25C12.328 1.25 12.9146 1.82356 12.9146 2.53108V10.8859H13.712V4.75904C13.712 4.05152 14.2986 3.47796 15.0222 3.47796C15.7457 3.47796 16.3323 4.05152 16.3323 4.75904V11.9999H17.1297V6.987C17.1297 6.27948 17.7163 5.70592 18.4399 5.70592C19.1634 5.70592 19.75 6.27948 19.75 6.987V11.9634C19.359 11.8252 18.9383 11.75 18.5 11.75C16.6858 11.75 15.1725 13.0383 14.825 14.75H13.25V22.7499L6.87658 22.7498V20.2229L2.05497 14.0489L2.05382 14.0474C1.63774 13.5018 1.65015 12.7489 2.08413 12.2168C2.65126 11.5214 3.70786 11.4642 4.34954 12.0936L6.87656 14.5724L6.87682 4.20276C6.87682 3.49524 7.46338 2.92168 8.18695 2.92168C8.91027 2.92168 9.49668 3.49502 9.49707 4.20221V9.77195H10.2945L10.2943 2.53108Z',
} as const;

export const IconHoldLocked01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-locked-01-stroke-rounded IconHoldLocked01StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHoldLocked01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-locked-01-duotone-rounded IconHoldLocked01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHoldLocked01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-locked-01-twotone-rounded IconHoldLocked01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
    </TheIconWrapper>
  );
};

export const IconHoldLocked01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-locked-01-solid-rounded IconHoldLocked01SolidRounded"
    >
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHoldLocked01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-locked-01-bulk-rounded IconHoldLocked01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconHoldLocked01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-locked-01-stroke-sharp IconHoldLocked01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHoldLocked01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-locked-01-solid-sharp IconHoldLocked01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfHoldLocked01: TheIconSelfPack = {
  name: 'HoldLocked01',
  StrokeRounded: IconHoldLocked01StrokeRounded,
  DuotoneRounded: IconHoldLocked01DuotoneRounded,
  TwotoneRounded: IconHoldLocked01TwotoneRounded,
  SolidRounded: IconHoldLocked01SolidRounded,
  BulkRounded: IconHoldLocked01BulkRounded,
  StrokeSharp: IconHoldLocked01StrokeSharp,
  SolidSharp: IconHoldLocked01SolidSharp,
};