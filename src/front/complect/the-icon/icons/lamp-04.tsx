import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19Z',
  d2: 'M12 16L12 12',
  d3: 'M12 22V19',
  d4: 'M8 22L16 22',
  d5: 'M15.0259 12H8.9741C6.76217 12 5.65621 12 5.18728 11.3145C4.71834 10.6289 5.17219 9.67558 6.07989 7.7689L7.70343 4.35854C8.24854 3.21351 8.52109 2.64099 9.04548 2.3205C9.56986 2 10.234 2 11.5624 2H12.4376C13.766 2 14.4301 2 14.9545 2.3205C15.4789 2.64099 15.7515 3.21351 16.2966 4.35854L17.9201 7.76891C18.8278 9.67558 19.2817 10.6289 18.8127 11.3145C18.3438 12 17.2378 12 15.0259 12Z',
  d6: 'M12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16M12 19C11.1716 19 10.5 18.3284 10.5 17.5C10.5 16.6716 11.1716 16 12 16M12 19L12 22M12 16L12 12',
  d7: 'M9.75 17.375C9.75 16.1324 10.7574 15.125 12 15.125C13.2426 15.125 14.25 16.1324 14.25 17.375C14.25 18.6176 13.2426 19.625 12 19.625C10.7574 19.625 9.75 18.6176 9.75 17.375Z',
  d8: 'M12 10.875C12.5523 10.875 13 11.3227 13 11.875V15.875C13 16.4273 12.5523 16.875 12 16.875C11.4477 16.875 11 16.4273 11 15.875V11.875C11 11.3227 11.4477 10.875 12 10.875ZM12 17.875C12.5523 17.875 13 18.3227 13 18.875V20.875H16C16.5523 20.875 17 21.3227 17 21.875C17 22.4273 16.5523 22.875 16 22.875H8C7.44772 22.875 7 22.4273 7 21.875C7 21.3227 7.44772 20.875 8 20.875H11V18.875C11 18.3227 11.4477 17.875 12 17.875Z',
  d9: 'M12.4744 1.125C13.1071 1.12498 13.6372 1.12497 14.0726 1.16884C14.5323 1.21516 14.9521 1.31514 15.3455 1.55556C15.7416 1.79764 16.0165 2.12435 16.2555 2.51081C16.4791 2.87242 16.6986 3.33341 16.9568 3.87587L16.9568 3.87591L18.6245 7.37896L18.6245 7.37899C19.0551 8.28328 19.416 9.04144 19.601 9.65956C19.7946 10.3065 19.8556 10.9931 19.4316 11.6129C19.0169 12.2191 18.3584 12.4366 17.6769 12.5321C17.0131 12.6251 16.1404 12.625 15.0844 12.625H15.0844H8.91532H8.9153C7.85928 12.625 6.98665 12.6251 6.32286 12.5321C5.64131 12.4366 4.98279 12.2191 4.56811 11.6129C4.14416 10.9931 4.20509 10.3065 4.3987 9.65956C4.5837 9.04143 4.94467 8.28326 5.37523 7.37895L5.40257 7.32153L7.02612 3.91116L7.04289 3.87592L7.04289 3.87592C7.30113 3.33343 7.52057 2.87244 7.74423 2.51081C7.98325 2.12435 8.25813 1.79764 8.65422 1.55556C9.04759 1.31514 9.46744 1.21516 9.92713 1.16884C10.3626 1.12497 10.8926 1.12498 11.5253 1.125H11.5254H12.4744H12.4744Z',
  d10: 'M13 19.3911C12.6988 19.5408 12.3592 19.625 12 19.625C11.6408 19.625 11.3012 19.5408 11 19.3911V20.875H8C7.44772 20.875 7 21.3227 7 21.875C7 22.4273 7.44772 22.875 8 22.875H16C16.5523 22.875 17 22.4273 17 21.875C17 21.3227 16.5523 20.875 16 20.875H13V19.3911Z',
  d11: 'M11 15.3589C11.3012 15.2092 11.6408 15.125 12 15.125C12.3592 15.125 12.6988 15.2092 13 15.3589V12.625H11V15.3589Z',
  d12: 'M12.0047 18.9993C12.8354 18.9993 13.5089 18.3271 13.5089 17.498C13.5089 16.6689 12.8354 15.9967 12.0047 15.9967C11.174 15.9967 10.5005 16.6689 10.5005 17.498C10.5005 18.3271 11.174 18.9993 12.0047 18.9993Z',
  d13: 'M12.0048 15.9952V11.9918M12.0048 22.0004V18.9978M7.99365 22.0004H16.016',
  d14: 'M16.9202 11.9516L7.08453 11.9526C7.01943 11.9526 5.10774 12.0371 5.00455 11.9596C4.9997 11.956 5.00147 11.9487 5.00373 11.9431L8.98922 1.99963H15.0199L18.9906 11.8893C19.0058 11.927 19.001 11.9518 18.9603 11.9519C18.6208 11.9523 16.9788 11.9516 16.9202 11.9516Z',
  d15: 'M9.75 17.5C9.75 16.2574 10.7574 15.25 12 15.25C13.2426 15.25 14.25 16.2574 14.25 17.5C14.25 18.7426 13.2426 19.75 12 19.75C10.7574 19.75 9.75 18.7426 9.75 17.5Z',
  d16: 'M13 11.75V15.75H11V11.75H13ZM11 20.75H8V22.75H16V20.75H13V18.75H11V20.75Z',
  d17: 'M19.6964 11.7215C19.7888 11.9525 19.7606 12.2144 19.6211 12.4205C19.4815 12.6266 19.2489 12.75 19 12.75H5C4.75114 12.75 4.51848 12.6266 4.37895 12.4205C4.23943 12.2144 4.21122 11.9525 4.30365 11.7215L8.49223 1.25H15.5078L19.6964 11.7215Z',
} as const;

export const IconLamp04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-04-stroke-rounded IconLamp04StrokeRounded"
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

export const IconLamp04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-04-duotone-rounded IconLamp04DuotoneRounded"
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

export const IconLamp04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-04-twotone-rounded IconLamp04TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconLamp04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-04-solid-rounded IconLamp04SolidRounded"
    >
      <path 
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

export const IconLamp04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-04-bulk-rounded IconLamp04BulkRounded"
    >
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

export const IconLamp04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-04-stroke-sharp IconLamp04StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconLamp04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-04-solid-sharp IconLamp04SolidSharp"
    >
      <path 
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

export const iconPackOfLamp04: TheIconSelfPack = {
  name: 'Lamp04',
  StrokeRounded: IconLamp04StrokeRounded,
  DuotoneRounded: IconLamp04DuotoneRounded,
  TwotoneRounded: IconLamp04TwotoneRounded,
  SolidRounded: IconLamp04SolidRounded,
  BulkRounded: IconLamp04BulkRounded,
  StrokeSharp: IconLamp04StrokeSharp,
  SolidSharp: IconLamp04SolidSharp,
};