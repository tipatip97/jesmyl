import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5Z',
  d2: 'M8 8L8 16',
  d3: 'M17 13L14 13',
  d4: 'M18.8787 22H5.12132C5.00867 22 4.95235 22 4.90475 21.9977C3.87506 21.9486 3.05136 21.1249 3.00227 20.0952C3 20.0477 3 19.9913 3 19.8787C3 19.8293 3 19.8046 3.00057 19.7808C3.01242 19.2834 3.2092 18.8084 3.5525 18.4483C3.56894 18.4311 3.58641 18.4136 3.62132 18.3787L4.24264 17.7574C5.10973 16.8903 5.54328 16.4567 6.09459 16.2284C6.6459 16 7.25903 16 8.48528 16H15.5147C16.741 16 17.3541 16 17.9054 16.2284C18.4567 16.4567 18.8903 16.8903 19.7574 17.7574L20.3787 18.3787C20.4136 18.4136 20.4311 18.4311 20.4475 18.4483C20.7908 18.8084 20.9876 19.2834 20.9994 19.7808C21 19.8046 21 19.8293 21 19.8787C21 19.9913 21 20.0477 20.9977 20.0952C20.9486 21.1249 20.1249 21.9486 19.0952 21.9977C19.0477 22 18.9913 22 18.8787 22Z',
  d5: 'M4.24609 5C4.24609 2.92893 5.92503 1.25 7.99609 1.25C10.0672 1.25 11.7461 2.92893 11.7461 5C11.7461 7.07107 10.0672 8.75 7.99609 8.75C5.92503 8.75 4.24609 7.07107 4.24609 5Z',
  d6: 'M7.99609 7C8.54838 7 8.99609 7.44772 8.99609 8L8.99609 16C8.99609 16.5523 8.54838 17 7.99609 17C7.44381 17 6.99609 16.5523 6.99609 16L6.99609 8C6.99609 7.44772 7.44381 7 7.99609 7Z',
  d7: 'M17.9961 13C17.9961 13.5523 17.5484 14 16.9961 14L13.9961 14C13.4438 14 12.9961 13.5523 12.9961 13C12.9961 12.4477 13.4438 12 13.9961 12L16.9961 12C17.5484 12 17.9961 12.4477 17.9961 13Z',
  d8: 'M8.34151 15.2499H15.6585C16.7466 15.2494 17.5028 15.249 18.1944 15.5354C18.886 15.8218 19.4204 16.3566 20.1895 17.1261L20.1895 17.1261L20.9932 17.9307C21.4654 18.4258 21.75 19.056 21.75 20.1309C21.6825 21.5468 20.5495 22.6793 19.1332 22.7468H4.86675C3.45047 22.6793 2.31753 21.5468 2.25 20.1309C2.25 19.0159 2.53462 18.4258 3.00681 17.9307L3.81049 17.1261C4.57955 16.3566 5.114 15.8218 5.8056 15.5354C6.49719 15.249 7.25338 15.2494 8.34151 15.2499Z',
  d9: 'M17 13L13 13',
  d10: 'M21 22H3V19L6 16H18L21 19V22Z',
  d11: 'M13 11.75L17 11.75L17 13.25L13 13.25L13 11.75Z',
  d12: 'M4.25 5.5C4.25 7.31422 5.53832 8.82753 7.25 9.17499L7.25 14.75H6C5.80109 14.75 5.61032 14.829 5.46967 14.9697L2.46967 17.9697C2.32902 18.1103 2.25 18.3011 2.25 18.5V21.5C2.25 21.6989 2.32902 21.8897 2.46967 22.0303C2.61032 22.171 2.80109 22.25 3 22.25H21C21.4142 22.25 21.75 21.9142 21.75 21.5V18.5C21.75 18.3011 21.671 18.1103 21.5303 17.9697L18.5303 14.9697C18.3897 14.829 18.1989 14.75 18 14.75H8.75L8.75 9.17499C10.4617 8.82753 11.75 7.31422 11.75 5.5C11.75 3.42893 10.0711 1.75 8 1.75C5.92893 1.75 4.25 3.42893 4.25 5.5Z',
} as const;

export const IconJoystick03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-03-stroke-rounded IconJoystick03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconJoystick03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-03-duotone-rounded IconJoystick03DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconJoystick03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-03-twotone-rounded IconJoystick03TwotoneRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJoystick03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-03-solid-rounded IconJoystick03SolidRounded"
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

export const IconJoystick03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-03-bulk-rounded IconJoystick03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJoystick03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-03-stroke-sharp IconJoystick03StrokeSharp"
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
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJoystick03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-03-solid-sharp IconJoystick03SolidSharp"
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

export const iconPackOfJoystick03: TheIconSelfPack = {
  name: 'Joystick03',
  StrokeRounded: IconJoystick03StrokeRounded,
  DuotoneRounded: IconJoystick03DuotoneRounded,
  TwotoneRounded: IconJoystick03TwotoneRounded,
  SolidRounded: IconJoystick03SolidRounded,
  BulkRounded: IconJoystick03BulkRounded,
  StrokeSharp: IconJoystick03StrokeSharp,
  SolidSharp: IconJoystick03SolidSharp,
};