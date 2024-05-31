import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.17157 3.17157C4 4.34314 4 6.22876 4 10L4 14C4 17.7712 4 19.6569 5.17157 20.8284M5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157M5.17157 3.17157C5.17157 3.17157 5.17157 3.17157 5.17157 3.17157ZM5.17157 20.8284C6.34315 22 8.22876 22 12 22C15.7712 22 17.6569 22 18.8284 20.8284M5.17157 20.8284C5.17157 20.8284 5.17157 20.8284 5.17157 20.8284ZM18.8284 20.8284C20 19.6569 20 17.7712 20 14L20 10C20 6.22876 20 4.34315 18.8284 3.17157M18.8284 20.8284C18.8284 20.8284 18.8284 20.8284 18.8284 20.8284ZM18.8284 3.17157C18.8284 3.17157 18.8284 3.17157 18.8284 3.17157Z',
  d2: 'M12 11L12 13',
  d3: 'M12 5.5L12 7.5',
  d4: 'M12 16.5L12 18.5',
  d5: 'M12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10L20 14C20 17.7712 20 19.6569 18.8284 20.8284C18.8284 20.8284 18.8284 20.8284 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C5.17157 20.8284 5.17157 20.8284 5.17157 20.8284C4 19.6569 4 17.7712 4 14L4 10C4 6.22876 4 4.34314 5.17157 3.17157C5.17157 3.17157 5.17157 3.17157 5.17157 3.17157C6.34315 2 8.22876 2 12 2Z',
  d6: 'M20.5959 18.489C20.749 17.3498 20.749 15.8942 20.749 14.0565L20.749 14.0564L20.749 9.94359L20.749 9.94354C20.749 8.1058 20.749 6.65018 20.5959 5.51098C20.4383 4.33856 20.1061 3.38961 19.3578 2.64124C18.6094 1.89288 17.6605 1.56076 16.488 1.40313C15.3488 1.24997 13.8932 1.24998 12.0555 1.25L12.0554 1.25L11.9426 1.25L11.9426 1.25C10.1048 1.24998 8.64921 1.24997 7.51 1.40313C6.33758 1.56076 5.38863 1.89288 4.64027 2.64124C3.8919 3.3896 3.55979 4.33855 3.40216 5.51097C3.249 6.65018 3.24901 8.10581 3.24902 9.94356L3.24902 9.94358L3.24902 14.0564L3.24902 14.0564C3.24901 15.8942 3.249 17.3498 3.40216 18.489C3.55979 19.6614 3.8919 20.6104 4.64027 21.3588C5.38863 22.1071 6.33758 22.4392 7.51 22.5969C8.64921 22.75 10.1048 22.75 11.9426 22.75L11.9426 22.75L12.0554 22.75L12.0554 22.75C13.8932 22.75 15.3488 22.75 16.488 22.5969C17.6605 22.4392 18.6094 22.1071 19.3578 21.3588C20.1061 20.6104 20.4383 19.6614 20.5959 18.489ZM10.999 19C10.999 19.5523 11.4467 20 11.999 20C12.5513 20 12.999 19.5523 12.999 19L12.999 17C12.999 16.4477 12.5513 16 11.999 16C11.4467 16 10.999 16.4477 10.999 17L10.999 19ZM10.999 7C10.999 7.55228 11.4467 8 11.999 8C12.5513 8 12.999 7.55228 12.999 7L12.999 5C12.999 4.44772 12.5513 4 11.999 4C11.4467 4 10.999 4.44772 10.999 5L10.999 7ZM10.999 11L10.999 13C10.999 13.5523 11.4467 14 11.999 14C12.5513 14 12.999 13.5523 12.999 13L12.999 11C12.999 10.4477 12.5513 10 11.999 10C11.4467 10 10.999 10.4477 10.999 11Z',
  d7: 'M20.749 14.0565C20.749 15.8942 20.749 17.3498 20.5959 18.489C20.4383 19.6614 20.1061 20.6104 19.3578 21.3588C18.6094 22.1071 17.6605 22.4392 16.488 22.5969C15.3488 22.75 13.8932 22.75 12.0554 22.75L12.0554 22.75L11.9426 22.75L11.9426 22.75C10.1048 22.75 8.64921 22.75 7.51 22.5969C6.33758 22.4392 5.38863 22.1071 4.64027 21.3588C3.8919 20.6104 3.55979 19.6614 3.40216 18.489C3.249 17.3498 3.24901 15.8942 3.24902 14.0564L3.24902 14.0564L3.24902 9.94358L3.24902 9.94356C3.24901 8.10581 3.249 6.65018 3.40216 5.51097C3.55979 4.33855 3.8919 3.3896 4.64027 2.64124C5.38863 1.89288 6.33758 1.56076 7.51 1.40313C8.64921 1.24997 10.1048 1.24998 11.9426 1.25L11.9426 1.25L12.0554 1.25L12.0555 1.25C13.8932 1.24998 15.3488 1.24997 16.488 1.40313C17.6605 1.56076 18.6094 1.89288 19.3578 2.64124C20.1061 3.38961 20.4383 4.33856 20.5959 5.51098C20.749 6.65018 20.749 8.1058 20.749 9.94354L20.749 9.94359L20.749 14.0564L20.749 14.0565Z',
  d8: 'M11.999 20C11.4467 20 10.999 19.5523 10.999 19L10.999 17C10.999 16.4477 11.4467 16 11.999 16C12.5513 16 12.999 16.4477 12.999 17L12.999 19C12.999 19.5523 12.5513 20 11.999 20ZM11.999 8C11.4467 8 10.999 7.55228 10.999 7L10.999 5C10.999 4.44771 11.4467 4 11.999 4C12.5513 4 12.999 4.44772 12.999 5L12.999 7C12.999 7.55229 12.5513 8 11.999 8ZM10.999 13L10.999 11C10.999 10.4477 11.4467 10 11.999 10C12.5513 10 12.999 10.4477 12.999 11L12.999 13C12.999 13.5523 12.5513 14 11.999 14C11.4467 14 10.999 13.5523 10.999 13Z',
  d9: 'M4 22H20V2H4V22Z',
  d10: 'M12 10.5L12 13.5',
  d11: 'M12 5V8',
  d12: 'M12 16L12 19',
  d13: 'M3.25 22C3.25 22.1989 3.32902 22.3897 3.46967 22.5303C3.61032 22.671 3.80109 22.75 4 22.75H20C20.1989 22.75 20.3897 22.671 20.5303 22.5303C20.671 22.3897 20.75 22.1989 20.75 22V2C20.75 1.58579 20.4142 1.25 20 1.25L4 1.25C3.58579 1.25 3.25 1.58579 3.25 2L3.25 22ZM11 16L11 19H13V16H11ZM11 13.5V10.5H13L13 13.5H11ZM11 5L11 8H13V5L11 5Z',
} as const;

export const IconRoad01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-01-stroke-rounded IconRoad01StrokeRounded"
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

export const IconRoad01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-01-duotone-rounded IconRoad01DuotoneRounded"
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

export const IconRoad01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-01-twotone-rounded IconRoad01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRoad01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-01-solid-rounded IconRoad01SolidRounded"
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

export const IconRoad01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-01-bulk-rounded IconRoad01BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconRoad01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-01-stroke-sharp IconRoad01StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRoad01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-01-solid-sharp IconRoad01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRoad01: TheIconSelfPack = {
  name: 'Road01',
  StrokeRounded: IconRoad01StrokeRounded,
  DuotoneRounded: IconRoad01DuotoneRounded,
  TwotoneRounded: IconRoad01TwotoneRounded,
  SolidRounded: IconRoad01SolidRounded,
  BulkRounded: IconRoad01BulkRounded,
  StrokeSharp: IconRoad01StrokeSharp,
  SolidSharp: IconRoad01SolidSharp,
};