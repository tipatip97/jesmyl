import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 8.37931H11.5M17 8.37931H14.5M11.5 8.37931H14.5M11.5 8.37931V7M14.5 8.37931C13.9725 10.2656 12.8679 12.0487 11.6071 13.6158M8.39286 17C9.41205 16.0628 10.5631 14.9134 11.6071 13.6158M11.6071 13.6158C10.9643 12.8621 10.0643 11.6426 9.80714 11.0909M11.6071 13.6158L13.5357 15.6207',
  d2: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM11.5 6.25C11.9142 6.25 12.25 6.58579 12.25 7V7.62931L17 7.62931C17.4142 7.62931 17.75 7.9651 17.75 8.37931C17.75 8.79352 17.4142 9.12931 17 9.12931H15.0533C14.5141 10.7301 13.6127 12.229 12.5989 13.5649L14.0762 15.1008C14.3634 15.3993 14.3542 15.8741 14.0557 16.1612C13.7571 16.4484 13.2823 16.4391 12.9952 16.1406L11.6473 14.7394C10.7274 15.8081 9.76369 16.7583 8.90051 17.5521C8.59561 17.8324 8.12115 17.8126 7.84078 17.5077C7.56041 17.2028 7.5803 16.7283 7.8852 16.4479C8.76185 15.6418 9.72949 14.6835 10.6354 13.6145C10.4069 13.3276 10.1708 13.0167 9.95417 12.7163C9.61723 12.249 9.28915 11.7549 9.12735 11.4077C8.95237 11.0323 9.11487 10.5861 9.49031 10.4111C9.86575 10.2361 10.312 10.3986 10.4869 10.7741C10.5823 10.9786 10.8328 11.3701 11.1708 11.8389C11.3064 12.0269 11.4498 12.2188 11.5931 12.4048C12.3554 11.3675 13.0108 10.2655 13.4571 9.12931H7C6.58579 9.12931 6.25 8.79352 6.25 8.37931C6.25 7.9651 6.58579 7.62931 7 7.62931H10.75V7C10.75 6.58579 11.0858 6.25 11.5 6.25Z',
  d3: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z',
  d4: 'M12.25 7C12.25 6.58579 11.9142 6.25 11.5 6.25C11.0858 6.25 10.75 6.58579 10.75 7V7.62931H7C6.58579 7.62931 6.25 7.9651 6.25 8.37931C6.25 8.79352 6.58579 9.12931 7 9.12931H13.4571C13.0108 10.2655 12.3554 11.3675 11.5931 12.4048C11.4498 12.2188 11.3064 12.0269 11.1708 11.8389C10.8328 11.3701 10.5823 10.9786 10.4869 10.7741C10.312 10.3986 9.86575 10.2361 9.49031 10.4111C9.11487 10.5861 8.95237 11.0323 9.12735 11.4077C9.28915 11.7549 9.61723 12.249 9.95417 12.7163C10.1708 13.0167 10.4069 13.3276 10.6354 13.6145C9.72949 14.6835 8.76185 15.6418 7.8852 16.4479C7.5803 16.7283 7.56041 17.2028 7.84078 17.5077C8.12115 17.8126 8.59561 17.8324 8.90051 17.5521C9.76369 16.7583 10.7274 15.8081 11.6473 14.7394L12.9952 16.1406C13.2823 16.4391 13.7571 16.4484 14.0557 16.1612C14.3542 15.8741 14.3634 15.3993 14.0762 15.1008L12.5989 13.5649C13.6127 12.229 14.5141 10.7301 15.0533 9.12931H17C17.4142 9.12931 17.75 8.79352 17.75 8.37931C17.75 7.9651 17.4142 7.62931 17 7.62931L12.25 7.62931V7Z',
  d5: 'M7 8.37931H11.5M17 8.37931H14.5M11.5 8.37931H14.5M11.5 8.37931V6.5M14.5 8.37931C13.9725 10.2656 12.8679 12.0487 11.6071 13.6158M8.39286 17C9.41205 16.0628 10.5631 14.9134 11.6071 13.6158M11.6071 13.6158C10.9643 12.8621 10.0643 11.6426 9.80714 11.0909M11.6071 13.6158L13.5357 15.6207',
  d6: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7 7.62931H10.75V6.5H12.25V7.62931H17V9.12931H15.0533C14.5141 10.7301 13.6127 12.229 12.5989 13.5649L14.0762 15.1008L12.9952 16.1406L11.6473 14.7394C10.7274 15.8081 9.76369 16.7583 8.90051 17.5521L7.8852 16.4479C8.76185 15.6418 9.72949 14.6835 10.6354 13.6145C10.4069 13.3276 10.1708 13.0167 9.95417 12.7163C9.61723 12.249 9.28915 11.7549 9.12735 11.4077L10.4869 10.7741C10.5823 10.9786 10.8328 11.3701 11.1708 11.8389C11.3064 12.0269 11.4498 12.2188 11.5931 12.4048C12.3554 11.3675 13.0108 10.2655 13.4571 9.12931H7V7.62931Z',
} as const;

export const IconLanguageCircleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="language-circle-stroke-rounded IconLanguageCircleStrokeRounded"
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

export const IconLanguageCircleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="language-circle-duotone-rounded IconLanguageCircleDuotoneRounded"
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

export const IconLanguageCircleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="language-circle-twotone-rounded IconLanguageCircleTwotoneRounded"
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

export const IconLanguageCircleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="language-circle-solid-rounded IconLanguageCircleSolidRounded"
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

export const IconLanguageCircleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="language-circle-bulk-rounded IconLanguageCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLanguageCircleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="language-circle-stroke-sharp IconLanguageCircleStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLanguageCircleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="language-circle-solid-sharp IconLanguageCircleSolidSharp"
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

export const iconPackOfLanguageCircle: TheIconSelfPack = {
  name: 'LanguageCircle',
  StrokeRounded: IconLanguageCircleStrokeRounded,
  DuotoneRounded: IconLanguageCircleDuotoneRounded,
  TwotoneRounded: IconLanguageCircleTwotoneRounded,
  SolidRounded: IconLanguageCircleSolidRounded,
  BulkRounded: IconLanguageCircleBulkRounded,
  StrokeSharp: IconLanguageCircleStrokeSharp,
  SolidSharp: IconLanguageCircleSolidSharp,
};