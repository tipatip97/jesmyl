import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 22V19C20 16.1716 20 14.7574 19.1213 13.8787C18.2426 13 16.8284 13 14 13L12 15L10 13C7.17157 13 5.75736 13 4.87868 13.8787C4 14.7574 4 16.1716 4 19V22',
  d2: 'M15.5 6.5V5.5C15.5 3.567 13.933 2 12 2C10.067 2 8.5 3.567 8.5 5.5V6.5C8.5 8.433 10.067 10 12 10C13.933 10 15.5 8.433 15.5 6.5Z',
  d3: 'M16 16V19M17.5 17.5L14.5 17.5',
  d4: 'M20 22V19C20 16.1716 20 14.7574 19.1213 13.8787C18.2426 13 16.8284 13 14 13L12 15L10 13C7.17157 13 5.75736 13 4.87868 13.8787C4 14.7574 4 16.1716 4 19V22H20Z',
  d5: 'M7.75 5.5C7.75 3.15279 9.65279 1.25 12 1.25C14.3472 1.25 16.25 3.15279 16.25 5.5V6.5C16.25 8.84721 14.3472 10.75 12 10.75C9.65279 10.75 7.75 8.84721 7.75 6.5V5.5Z',
  d6: 'M10.5303 12.4697C10.3897 12.329 10.1989 12.25 10 12.25H9.99998H9.99994C8.63238 12.25 7.4752 12.25 6.60825 12.3665C5.70814 12.4875 4.95027 12.7464 4.34835 13.3484C3.74643 13.9503 3.48754 14.7081 3.36652 15.6082C3.24996 16.4752 3.24998 17.5775 3.25 18.9451V18.9451L3.25 22C3.25 22.4142 3.58579 22.75 4 22.75L20 22.75C20.4142 22.75 20.75 22.4142 20.75 22V18.9451C20.75 17.5775 20.75 16.4752 20.6335 15.6083C20.5125 14.7081 20.2536 13.9503 19.6517 13.3484C19.0497 12.7464 18.2919 12.4875 17.3918 12.3665C16.5248 12.25 15.3676 12.25 14.0001 12.25H14H14C13.8011 12.25 13.6103 12.329 13.4697 12.4697L12 13.9393L10.5303 12.4697ZM16.75 15.5C16.75 15.0858 16.4142 14.75 16 14.75C15.5858 14.75 15.25 15.0858 15.25 15.5V16.75H14C13.5858 16.75 13.25 17.0858 13.25 17.5C13.25 17.9142 13.5858 18.25 14 18.25H15.25V19.5C15.25 19.9142 15.5858 20.25 16 20.25C16.4142 20.25 16.75 19.9142 16.75 19.5V18.25H18C18.4142 18.25 18.75 17.9142 18.75 17.5C18.75 17.0858 18.4142 16.75 18 16.75H16.75V15.5Z',
  d7: 'M10 12.25C10.1989 12.25 10.3897 12.329 10.5303 12.4697L12 13.9393L13.4697 12.4697C13.6103 12.329 13.8011 12.25 14 12.25H14C15.3676 12.25 16.5248 12.25 17.3918 12.3665C18.2919 12.4875 19.0497 12.7464 19.6517 13.3484C20.2536 13.9503 20.5125 14.7081 20.6335 15.6083C20.75 16.4752 20.75 17.5775 20.75 18.9451V22C20.75 22.4142 20.4142 22.75 20 22.75H4C3.58579 22.75 3.25 22.4142 3.25 22V18.9451V18.9451C3.24998 17.5775 3.24996 16.4752 3.36652 15.6082C3.48754 14.7081 3.74643 13.9503 4.34835 13.3484C4.95027 12.7464 5.70814 12.4875 6.60825 12.3665C7.47521 12.25 8.6324 12.25 9.99998 12.25H10Z',
  d8: 'M16 14.75C16.4142 14.75 16.75 15.0858 16.75 15.5V16.75H18C18.4142 16.75 18.75 17.0858 18.75 17.5C18.75 17.9142 18.4142 18.25 18 18.25H16.75V19.5C16.75 19.9142 16.4142 20.25 16 20.25C15.5858 20.25 15.25 19.9142 15.25 19.5V18.25H14C13.5858 18.25 13.25 17.9142 13.25 17.5C13.25 17.0858 13.5858 16.75 14 16.75H15.25V15.5C15.25 15.0858 15.5858 14.75 16 14.75Z',
  d9: 'M20 22V14.5C20 14.5 18.6884 13.0002 17 13.0001L14 13L12 15L10 13.0002L7 13.0002C5.31156 13.0003 4 14.5002 4 14.5002V22.0002',
  d10: 'M19.5615 13.1344C18.9617 12.7171 18.0609 12.2501 17 12.2501L13.6893 12.25L12 13.9394L10.3106 12.2502L6.99996 12.2502C5.93907 12.2503 5.03829 12.7173 4.4385 13.1346C4.19142 13.3065 3.67959 13.8028 3.40203 14.072C3.33571 14.1363 3.28276 14.1876 3.25 14.2185L3.25 22.7502L20.75 22.75V14.2183C20.7172 14.1875 20.6643 14.1361 20.598 14.0718C20.3204 13.8027 19.8086 13.3063 19.5615 13.1344ZM16.75 16.75V14.75H15.25L15.25 16.75H13.25V18.25H15.25V20.25H16.75V18.25H18.75V16.75H16.75Z',
} as const;

export const IconDoctor03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doctor-03-stroke-rounded IconDoctor03StrokeRounded"
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

export const IconDoctor03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doctor-03-duotone-rounded IconDoctor03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
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

export const IconDoctor03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doctor-03-twotone-rounded IconDoctor03TwotoneRounded"
    >
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

export const IconDoctor03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doctor-03-solid-rounded IconDoctor03SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDoctor03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doctor-03-bulk-rounded IconDoctor03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconDoctor03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doctor-03-stroke-sharp IconDoctor03StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDoctor03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doctor-03-solid-sharp IconDoctor03SolidSharp"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDoctor03: TheIconSelfPack = {
  name: 'Doctor03',
  StrokeRounded: IconDoctor03StrokeRounded,
  DuotoneRounded: IconDoctor03DuotoneRounded,
  TwotoneRounded: IconDoctor03TwotoneRounded,
  SolidRounded: IconDoctor03SolidRounded,
  BulkRounded: IconDoctor03BulkRounded,
  StrokeSharp: IconDoctor03StrokeSharp,
  SolidSharp: IconDoctor03SolidSharp,
};