import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d2: 'M15 14.4923C14.5216 15.3957 13.6512 16 12.6568 16C11.147 16 9.92308 14.6071 9.92308 12.8889V11.1111C9.92308 9.39289 11.147 8 12.6568 8C13.6512 8 14.5216 8.60426 15 9.50774M9 12H12.9231',
  d3: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12.6568 7.25C10.6446 7.25 9.17308 9.07274 9.17308 11.1111V11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H9.17308V12.8889C9.17308 14.9273 10.6446 16.75 12.6568 16.75C13.9736 16.75 15.0767 15.9501 15.6628 14.8432C15.8566 14.4771 15.717 14.0233 15.3509 13.8294C14.9849 13.6356 14.531 13.7752 14.3372 14.1413C13.9665 14.8414 13.3289 15.25 12.6568 15.25C11.6494 15.25 10.6731 14.287 10.6731 12.8889V12.75H12.9231C13.3373 12.75 13.6731 12.4142 13.6731 12C13.6731 11.5858 13.3373 11.25 12.9231 11.25H10.6731V11.1111C10.6731 9.71305 11.6494 8.75 12.6568 8.75C13.3289 8.75 13.9665 9.15864 14.3372 9.85868C14.531 10.2248 14.9849 10.3644 15.3509 10.1706C15.717 9.97674 15.8566 9.52286 15.6628 9.1568C15.0767 8.04988 13.9736 7.25 12.6568 7.25Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M9.17308 11.1111C9.17308 9.07274 10.6446 7.25 12.6568 7.25C13.9736 7.25 15.0768 8.04988 15.6628 9.1568C15.8566 9.52286 15.717 9.97674 15.3509 10.1706C14.9849 10.3644 14.531 10.2248 14.3372 9.85868C13.9665 9.15864 13.3289 8.75 12.6568 8.75C11.6494 8.75 10.6731 9.71305 10.6731 11.1111V11.25H12.9231C13.3373 11.25 13.6731 11.5858 13.6731 12C13.6731 12.4142 13.3373 12.75 12.9231 12.75H10.6731V12.8889C10.6731 14.287 11.6494 15.25 12.6568 15.25C13.3289 15.25 13.9665 14.8414 14.3372 14.1413C14.531 13.7752 14.9849 13.6356 15.3509 13.8294C15.717 14.0233 15.8566 14.4771 15.6628 14.8432C15.0768 15.9501 13.9736 16.75 12.6568 16.75C10.6446 16.75 9.17308 14.9273 9.17308 12.8889V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H9.17308V11.1111Z',
  d6: 'M15 14.4923C14.5216 15.3957 13.6512 16 12.6568 16C11.147 16 9.92308 14.6071 9.92308 12.8889V11.1111C9.92308 9.39289 11.147 8 12.6568 8C13.6512 8 14.5216 8.60426 15 9.50774M8 12H13',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12.6568 7.25C10.6446 7.25 9.17308 9.07274 9.17308 11.1111V11.25H8V12.75H9.17308V12.8889C9.17308 14.9273 10.6446 16.75 12.6568 16.75C13.9736 16.75 15.0767 15.9501 15.6628 14.8432L14.3372 14.1413C13.9665 14.8414 13.3289 15.25 12.6568 15.25C11.6494 15.25 10.6731 14.287 10.6731 12.8889V12.75H13V11.25H10.6731V11.1111C10.6731 9.71305 11.6494 8.75 12.6568 8.75C13.3289 8.75 13.9665 9.15864 14.3372 9.85868L15.6628 9.1568C15.0767 8.04988 13.9736 7.25 12.6568 7.25Z',
} as const;

export const IconEuroCircleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="euro-circle-stroke-rounded IconEuroCircleStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconEuroCircleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="euro-circle-duotone-rounded IconEuroCircleDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconEuroCircleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="euro-circle-twotone-rounded IconEuroCircleTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconEuroCircleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="euro-circle-solid-rounded IconEuroCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEuroCircleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="euro-circle-bulk-rounded IconEuroCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEuroCircleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="euro-circle-stroke-sharp IconEuroCircleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEuroCircleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="euro-circle-solid-sharp IconEuroCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEuroCircle: TheIconSelfPack = {
  name: 'EuroCircle',
  StrokeRounded: IconEuroCircleStrokeRounded,
  DuotoneRounded: IconEuroCircleDuotoneRounded,
  TwotoneRounded: IconEuroCircleTwotoneRounded,
  SolidRounded: IconEuroCircleSolidRounded,
  BulkRounded: IconEuroCircleBulkRounded,
  StrokeSharp: IconEuroCircleStrokeSharp,
  SolidSharp: IconEuroCircleSolidSharp,
};