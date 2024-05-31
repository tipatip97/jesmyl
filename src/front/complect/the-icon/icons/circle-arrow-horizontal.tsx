import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 12L7 12M17 12C17 11.4398 15.604 10.3932 15.25 10M17 12C17 12.5602 15.604 13.6068 15.25 14M7 12C7 11.4398 8.39601 10.3932 8.75 10M7 12C7 12.5602 8.39601 13.6068 8.75 14',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.0574 9.49821C15.7803 9.19037 15.3061 9.16547 14.9982 9.4426C14.8338 9.59063 14.7501 9.7949 14.75 10L14.75 11H9.25L9.25001 10C9.24994 9.7949 9.16623 9.59063 9.00179 9.4426C8.69394 9.16547 8.21972 9.19037 7.94259 9.49821C7.88715 9.55981 7.76934 9.66814 7.57622 9.8415L7.53399 9.8794C7.36486 10.0311 7.16321 10.212 6.97051 10.3986C6.76412 10.5985 6.54469 10.827 6.37229 11.0583C6.22644 11.254 6 11.5967 6 12C6 12.4033 6.22644 12.746 6.37229 12.9417C6.54469 13.173 6.76412 13.4015 6.97051 13.6014C7.16321 13.788 7.36486 13.9689 7.53399 14.1206L7.57622 14.1585C7.76934 14.3319 7.88715 14.4402 7.94259 14.5018C8.21972 14.8096 8.69394 14.8345 9.00179 14.5574C9.16612 14.4095 9.24983 14.2054 9.25001 14.0004L9.25 13H14.75L14.75 14.0004C14.7502 14.2054 14.8339 14.4095 14.9982 14.5574C15.3061 14.8345 15.7803 14.8096 16.0574 14.5018C16.1129 14.4402 16.2307 14.3319 16.4238 14.1585L16.466 14.1206C16.6351 13.9689 16.8368 13.788 17.0295 13.6014C17.2359 13.4015 17.4553 13.173 17.6277 12.9417C17.7736 12.746 18 12.4033 18 12C18 11.5967 17.7736 11.254 17.6277 11.0583C17.4553 10.827 17.2359 10.5985 17.0295 10.3986C16.8368 10.212 16.6352 10.0311 16.466 9.87943L16.4238 9.8415C16.2307 9.66814 16.1129 9.55981 16.0574 9.49821Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M14.9982 9.4426C15.3061 9.16547 15.7803 9.19037 16.0574 9.49821C16.1129 9.55981 16.2307 9.66814 16.4238 9.8415L16.466 9.87943C16.6352 10.0311 16.8368 10.212 17.0295 10.3986C17.2359 10.5985 17.4553 10.827 17.6277 11.0583C17.7736 11.254 18 11.5967 18 12C18 12.4033 17.7736 12.746 17.6277 12.9417C17.4553 13.173 17.2359 13.4015 17.0295 13.6014C16.8368 13.788 16.6351 13.9689 16.466 14.1206L16.4238 14.1585C16.2307 14.3319 16.1129 14.4402 16.0574 14.5018C15.7803 14.8096 15.3061 14.8345 14.9982 14.5574C14.8339 14.4095 14.7502 14.2054 14.75 14.0004L14.75 13H9.25L9.25001 14.0004C9.24983 14.2054 9.16612 14.4095 9.00179 14.5574C8.69394 14.8345 8.21972 14.8096 7.94259 14.5018C7.88714 14.4402 7.76934 14.3319 7.57622 14.1585L7.53399 14.1206C7.36486 13.9689 7.16321 13.788 6.97051 13.6014C6.76412 13.4015 6.54469 13.173 6.37229 12.9417C6.22644 12.746 6 12.4033 6 12C6 11.5967 6.22644 11.254 6.37229 11.0583C6.54469 10.827 6.76412 10.5985 6.97051 10.3986C7.16321 10.212 7.36486 10.0311 7.53399 9.8794L7.57622 9.8415C7.76934 9.66814 7.88714 9.55981 7.94259 9.49821C8.21972 9.19037 8.69394 9.16547 9.00179 9.4426C9.16623 9.59063 9.24994 9.79489 9.25001 10L9.25 11H14.75L14.75 10C14.7501 9.79489 14.8338 9.59063 14.9982 9.4426Z',
  d5: 'M14.5 9L17.5 12L14.5 15M9.5 9L6.5 12L9.5 15M6.7345 12L17.2519 12',
  d6: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM13.4698 9.53033L15.1895 11.25H8.81077L10.5304 9.53033L9.46978 8.46967L5.93945 12L9.46978 15.5303L10.5304 14.4697L8.81077 12.75H15.1895L13.4698 14.4697L14.5304 15.5303L18.0608 12L14.5304 8.46967L13.4698 9.53033Z',
} as const;

export const IconCircleArrowHorizontalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-horizontal-stroke-rounded IconCircleArrowHorizontalStrokeRounded"
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

export const IconCircleArrowHorizontalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-horizontal-duotone-rounded IconCircleArrowHorizontalDuotoneRounded"
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

export const IconCircleArrowHorizontalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-horizontal-twotone-rounded IconCircleArrowHorizontalTwotoneRounded"
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

export const IconCircleArrowHorizontalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-horizontal-solid-rounded IconCircleArrowHorizontalSolidRounded"
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

export const IconCircleArrowHorizontalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-horizontal-bulk-rounded IconCircleArrowHorizontalBulkRounded"
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

export const IconCircleArrowHorizontalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-horizontal-stroke-sharp IconCircleArrowHorizontalStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowHorizontalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-horizontal-solid-sharp IconCircleArrowHorizontalSolidSharp"
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

export const iconPackOfCircleArrowHorizontal: TheIconSelfPack = {
  name: 'CircleArrowHorizontal',
  StrokeRounded: IconCircleArrowHorizontalStrokeRounded,
  DuotoneRounded: IconCircleArrowHorizontalDuotoneRounded,
  TwotoneRounded: IconCircleArrowHorizontalTwotoneRounded,
  SolidRounded: IconCircleArrowHorizontalSolidRounded,
  BulkRounded: IconCircleArrowHorizontalBulkRounded,
  StrokeSharp: IconCircleArrowHorizontalStrokeSharp,
  SolidSharp: IconCircleArrowHorizontalSolidSharp,
};