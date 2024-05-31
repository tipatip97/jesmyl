import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 17L12 7M12 17C12.5602 17 13.6068 15.604 14 15.25M12 17C11.4398 17 10.3932 15.604 10 15.25M12 7C12.5602 7 13.6068 8.39601 14 8.75M12 7C11.4398 7 10.3932 8.39601 10 8.75',
  d2: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12ZM14.5018 16.0574C14.8096 15.7803 14.8345 15.3061 14.5574 14.9982C14.4094 14.8338 14.2051 14.7501 14 14.75L13 14.75L13 9.25L14 9.25001C14.2051 9.24994 14.4094 9.16623 14.5574 9.00179C14.8345 8.69394 14.8096 8.21972 14.5018 7.94259C14.4402 7.88714 14.3319 7.76934 14.1585 7.57622L14.1206 7.53399C13.9689 7.36486 13.788 7.16321 13.6014 6.9705C13.4015 6.76412 13.173 6.54469 12.9417 6.37229C12.746 6.22644 12.4033 6 12 6C11.5967 6 11.254 6.22644 11.0583 6.37229C10.827 6.54469 10.5985 6.76412 10.3986 6.9705C10.212 7.16321 10.0311 7.36486 9.87939 7.53398L9.84149 7.57622C9.66813 7.76934 9.55979 7.88714 9.4982 7.94259C9.19035 8.21972 9.16545 8.69394 9.44258 9.00179C9.59052 9.16612 9.79461 9.24983 9.99958 9.25001L11 9.25L11 14.75L9.99958 14.75C9.79461 14.7502 9.59052 14.8339 9.44258 14.9982C9.16545 15.3061 9.19035 15.7803 9.4982 16.0574C9.55979 16.1129 9.66813 16.2307 9.84149 16.4238L9.87937 16.466C10.0311 16.6351 10.212 16.8368 10.3986 17.0295C10.5985 17.2359 10.827 17.4553 11.0583 17.6277C11.254 17.7736 11.5967 18 12 18C12.4033 18 12.746 17.7736 12.9417 17.6277C13.173 17.4553 13.4015 17.2359 13.6014 17.0295C13.788 16.8368 13.9689 16.6352 14.1206 16.466L14.1585 16.4238C14.3319 16.2307 14.4402 16.1129 14.5018 16.0574Z',
  d3: 'M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25Z',
  d4: 'M14.5574 14.9982C14.8345 15.3061 14.8096 15.7803 14.5018 16.0574C14.4402 16.1129 14.3319 16.2307 14.1585 16.4238L14.1206 16.466C13.9689 16.6352 13.788 16.8368 13.6014 17.0295C13.4015 17.2359 13.173 17.4553 12.9417 17.6277C12.746 17.7736 12.4033 18 12 18C11.5967 18 11.254 17.7736 11.0583 17.6277C10.827 17.4553 10.5985 17.2359 10.3986 17.0295C10.212 16.8368 10.0311 16.6351 9.87937 16.466L9.84149 16.4238C9.66813 16.2307 9.55979 16.1129 9.4982 16.0574C9.19035 15.7803 9.16545 15.3061 9.44258 14.9982C9.59052 14.8339 9.79461 14.7502 9.99958 14.75L11 14.75L11 9.25L9.99958 9.25001C9.79461 9.24983 9.59052 9.16612 9.44258 9.00179C9.16545 8.69394 9.19035 8.21972 9.4982 7.94259C9.55979 7.88714 9.66813 7.76934 9.84149 7.57622L9.87939 7.53398C10.0311 7.36486 10.212 7.16321 10.3986 6.9705C10.5985 6.76412 10.827 6.54469 11.0583 6.37229C11.254 6.22644 11.5967 6 12 6C12.4033 6 12.746 6.22644 12.9417 6.37229C13.173 6.54469 13.4015 6.76412 13.6014 6.97051C13.788 7.16321 13.9689 7.36486 14.1206 7.53399L14.1585 7.57622C14.3319 7.76934 14.4402 7.88714 14.5018 7.94259C14.8096 8.21972 14.8345 8.69394 14.5574 9.00179C14.4094 9.16623 14.2051 9.24994 14 9.25001L13 9.25L13 14.75L14 14.75C14.2051 14.7501 14.4094 14.8338 14.5574 14.9982Z',
  d5: 'M9 9.5L12 6.5L15 9.5M15 14.5L12 17.5L9 14.5M12 6.71749L12 17.293',
  d6: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM15.5294 9.46966L11.9991 5.93933L8.46875 9.46966L9.52941 10.5303L11.2491 8.81065V15.1893L9.52941 13.4697L8.46875 14.5303L11.9991 18.0607L15.5294 14.5303L14.4688 13.4697L12.7491 15.1893V8.81065L14.4688 10.5303L15.5294 9.46966Z',
} as const;

export const IconCircleArrowVerticalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-vertical-stroke-rounded IconCircleArrowVerticalStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowVerticalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-vertical-duotone-rounded IconCircleArrowVerticalDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowVerticalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-vertical-twotone-rounded IconCircleArrowVerticalTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowVerticalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-vertical-solid-rounded IconCircleArrowVerticalSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowVerticalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-vertical-bulk-rounded IconCircleArrowVerticalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowVerticalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-vertical-stroke-sharp IconCircleArrowVerticalStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowVerticalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-vertical-solid-sharp IconCircleArrowVerticalSolidSharp"
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

export const iconPackOfCircleArrowVertical: TheIconSelfPack = {
  name: 'CircleArrowVertical',
  StrokeRounded: IconCircleArrowVerticalStrokeRounded,
  DuotoneRounded: IconCircleArrowVerticalDuotoneRounded,
  TwotoneRounded: IconCircleArrowVerticalTwotoneRounded,
  SolidRounded: IconCircleArrowVerticalSolidRounded,
  BulkRounded: IconCircleArrowVerticalBulkRounded,
  StrokeSharp: IconCircleArrowVerticalStrokeSharp,
  SolidSharp: IconCircleArrowVerticalSolidSharp,
};