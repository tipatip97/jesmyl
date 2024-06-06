import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 22H21',
  d2: 'M7 22V2',
  d3: 'M7 4C12.6754 4.96101 17 9.94287 17 15.9442C17 18.1502 16.4156 20.2185 15.3946 22',
  d4: 'M5 9H17',
  d5: 'M7 13H11M7 17H11',
  d6: 'M14.833 9C16.1986 10.9662 17 13.3607 17 15.9442C17 18.1502 16.4156 20.2185 15.3946 22H7V9H14.833Z',
  d7: 'M2.5 21.75C2.5 21.1977 2.94772 20.75 3.5 20.75H20.5C21.0523 20.75 21.5 21.1977 21.5 21.75C21.5 22.3023 21.0523 22.75 20.5 22.75H3.5C2.94772 22.75 2.5 22.3023 2.5 21.75Z',
  d8: 'M4.25 9C4.25 8.58579 4.58579 8.25 5 8.25H17C17.4142 8.25 17.75 8.58579 17.75 9C17.75 9.41421 17.4142 9.75 17 9.75H16.8506C16.5525 9.75 16.4035 9.75 16.3447 9.84346C16.2858 9.93692 16.3518 10.0745 16.4839 10.3498C17.2953 12.0416 17.75 13.9397 17.75 15.9442C17.75 18.2842 17.1298 20.4807 16.0453 22.3729L15.9445 22.5489C15.8882 22.647 15.8601 22.6961 15.8136 22.723C15.7671 22.75 15.7105 22.75 15.5974 22.75H7C6.58578 22.75 6.25 22.4142 6.25 22V18.15C6.25 17.9614 6.25 17.8672 6.30858 17.8086C6.36715 17.75 6.46144 17.75 6.65 17.75H10C10.4142 17.75 10.75 17.4142 10.75 17C10.75 16.5858 10.4142 16.25 10 16.25H6.65C6.46144 16.25 6.36715 16.25 6.30858 16.1914C6.25 16.1328 6.25 16.0386 6.25 15.85V14.15C6.25 13.9614 6.25 13.8672 6.30858 13.8086C6.36715 13.75 6.46144 13.75 6.65 13.75H10C10.4142 13.75 10.75 13.4142 10.75 13C10.75 12.5858 10.4142 12.25 10 12.25H6.65C6.46144 12.25 6.36715 12.25 6.30858 12.1914C6.25 12.1328 6.25 12.0386 6.25 11.85V10.15C6.25 9.96144 6.25 9.86716 6.19142 9.80858C6.13284 9.75 6.03856 9.75 5.85 9.75H5C4.58579 9.75 4.25 9.41421 4.25 9Z',
  d9: 'M7.00012 1.25C7.41433 1.25 7.75012 1.58579 7.75012 2V3.06162C7.75012 3.21451 7.75012 3.29095 7.79255 3.34523C7.83498 3.39951 7.91087 3.41838 8.06265 3.45614C10.1118 3.96581 11.9649 4.97474 13.4888 6.34729C13.782 6.61135 13.9285 6.74338 13.8793 6.87169C13.83 7 13.6281 7 13.2242 7H6.65012C6.46156 7 6.36728 7 6.3087 6.94142C6.25012 6.88284 6.25012 6.78856 6.25012 6.6V4.01425C6.24996 4.00537 6.24996 3.99647 6.25012 3.98754V2C6.25012 1.58579 6.58591 1.25 7.00012 1.25Z',
  d10: 'M17.75 15.9442C17.75 18.2842 17.1298 20.4807 16.0453 22.3729L15.8292 22.75H7C6.58579 22.75 6.25 22.4142 6.25 22V17.75H10C10.4142 17.75 10.75 17.4142 10.75 17C10.75 16.5858 10.4142 16.25 10 16.25H6.25V13.75H10C10.4142 13.75 10.75 13.4142 10.75 13C10.75 12.5858 10.4142 12.25 10 12.25H6.25V9.75H16.1766C17.1796 11.5878 17.75 13.6992 17.75 15.9442Z',
  d11: 'M4.25 9C4.25 8.58579 4.58579 8.25 5 8.25H6.25H15.2178H17C17.4142 8.25 17.75 8.58579 17.75 9C17.75 9.41421 17.4142 9.75 17 9.75H5C4.58579 9.75 4.25 9.41421 4.25 9Z',
  d12: 'M21 22.5H3V21H21V22.5Z',
  d13: 'M17 9.25H5V7.75H17V9.25Z',
  d14: 'M16.1766 9.25C17.1796 11.0878 17.75 13.1992 17.75 15.4442C17.75 17.7842 17.1298 19.9807 16.0453 21.8729C15.9117 22.1062 15.6634 22.25 15.3946 22.25H7C6.58579 22.25 6.25 21.9142 6.25 21.5V17.25H11V15.75H6.25V13.25H11V11.75H6.25V9.25H5V7.75H17V9.25H16.1766Z',
  d15: 'M7.75 2.88262V1.5H6.25V6.25H13.9158C12.2428 4.59893 10.1206 3.40842 7.75 2.88262Z',
} as const;

export const IconBurjAlArabStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="burj-al-arab-stroke-rounded IconBurjAlArabStrokeRounded"
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

export const IconBurjAlArabDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="burj-al-arab-duotone-rounded IconBurjAlArabDuotoneRounded"
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

export const IconBurjAlArabTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="burj-al-arab-twotone-rounded IconBurjAlArabTwotoneRounded"
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
      />
      <path 
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

export const IconBurjAlArabSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="burj-al-arab-solid-rounded IconBurjAlArabSolidRounded"
    >
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBurjAlArabBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="burj-al-arab-bulk-rounded IconBurjAlArabBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBurjAlArabStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="burj-al-arab-stroke-sharp IconBurjAlArabStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBurjAlArabSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="burj-al-arab-solid-sharp IconBurjAlArabSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBurjAlArab: TheIconSelfPack = {
  name: 'BurjAlArab',
  StrokeRounded: IconBurjAlArabStrokeRounded,
  DuotoneRounded: IconBurjAlArabDuotoneRounded,
  TwotoneRounded: IconBurjAlArabTwotoneRounded,
  SolidRounded: IconBurjAlArabSolidRounded,
  BulkRounded: IconBurjAlArabBulkRounded,
  StrokeSharp: IconBurjAlArabStrokeSharp,
  SolidSharp: IconBurjAlArabSolidSharp,
};