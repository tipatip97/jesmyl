import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 8.37931H11.5M17 8.37931H14.5M11.5 8.37931H14.5M11.5 8.37931V7M14.5 8.37931C13.9725 10.2656 12.8679 12.0487 11.6071 13.6158M8.39286 17C9.41205 16.0628 10.5631 14.9134 11.6071 13.6158M11.6071 13.6158C10.9643 12.8621 10.0643 11.6426 9.80714 11.0909M11.6071 13.6158L13.5357 15.6207',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M12.0572 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75214 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.75211 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H11.9428H12.0572ZM11.5 6.25C11.9142 6.25 12.25 6.58579 12.25 7V7.62931L17 7.62931C17.4142 7.62931 17.75 7.9651 17.75 8.37931C17.75 8.79352 17.4142 9.12931 17 9.12931H15.0533C14.5141 10.7301 13.6127 12.229 12.5989 13.5649L14.0762 15.1008C14.3634 15.3993 14.3542 15.8741 14.0557 16.1612C13.7571 16.4484 13.2823 16.4391 12.9952 16.1406L11.6473 14.7394C10.7274 15.8081 9.76369 16.7583 8.90051 17.5521C8.59561 17.8324 8.12115 17.8126 7.84078 17.5077C7.56041 17.2028 7.5803 16.7283 7.8852 16.4479C8.76185 15.6418 9.72949 14.6835 10.6354 13.6145C10.4069 13.3276 10.1708 13.0167 9.95417 12.7163C9.61723 12.249 9.28915 11.7549 9.12735 11.4077C8.95237 11.0323 9.11487 10.5861 9.49031 10.4111C9.86575 10.2361 10.312 10.3986 10.4869 10.7741C10.5823 10.9786 10.8328 11.3701 11.1708 11.8389C11.3064 12.0269 11.4498 12.2188 11.5931 12.4048C12.3554 11.3675 13.0108 10.2655 13.4571 9.12931H7C6.58579 9.12931 6.25 8.79352 6.25 8.37931C6.25 7.9651 6.58579 7.62931 7 7.62931H10.75V7C10.75 6.58579 11.0858 6.25 11.5 6.25Z',
  d4: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75211 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z',
  d5: 'M12.25 7C12.25 6.58579 11.9142 6.25 11.5 6.25C11.0858 6.25 10.75 6.58579 10.75 7V7.62931H7C6.58579 7.62931 6.25 7.9651 6.25 8.37931C6.25 8.79352 6.58579 9.12931 7 9.12931H13.4571C13.0108 10.2655 12.3554 11.3675 11.5931 12.4048C11.4498 12.2188 11.3064 12.0269 11.1708 11.8389C10.8328 11.3701 10.5823 10.9786 10.4869 10.7741C10.312 10.3986 9.86575 10.2361 9.49031 10.4111C9.11487 10.5861 8.95237 11.0323 9.12735 11.4077C9.28915 11.7549 9.61723 12.249 9.95417 12.7163C10.1708 13.0167 10.4069 13.3276 10.6354 13.6145C9.72949 14.6835 8.76185 15.6418 7.8852 16.4479C7.5803 16.7283 7.56041 17.2028 7.84078 17.5077C8.12115 17.8126 8.59561 17.8324 8.90051 17.5521C9.76369 16.7583 10.7274 15.8081 11.6473 14.7394L12.9952 16.1406C13.2823 16.4391 13.7571 16.4484 14.0557 16.1612C14.3542 15.8741 14.3634 15.3993 14.0762 15.1008L12.5989 13.5649C13.6127 12.229 14.5141 10.7301 15.0533 9.12931H17C17.4142 9.12931 17.75 8.79352 17.75 8.37931C17.75 7.9651 17.4142 7.62931 17 7.62931L12.25 7.62931V7Z',
  d6: 'M7 8.37931H11.5M17 8.37931H14.5M11.5 8.37931H14.5M11.5 8.37931V6.5M14.5 8.37931C13.9725 10.2656 12.8679 12.0487 11.6071 13.6158M8.39286 17C9.41205 16.0628 10.5631 14.9134 11.6071 13.6158M11.6071 13.6158C10.9643 12.8621 10.0643 11.6426 9.80714 11.0909M11.6071 13.6158L13.5357 15.6207',
  d7: 'M21 3H3V21H21V3Z',
  d8: 'M3 2.25C2.80109 2.25 2.61032 2.32902 2.46967 2.46967C2.32902 2.61032 2.25 2.80109 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM7 7.62931H10.75V6.5H12.25V7.62931H17V9.12931H15.0533C14.5141 10.7301 13.6127 12.229 12.5989 13.5649L14.0762 15.1008L12.9952 16.1406L11.6473 14.7394C10.7274 15.8081 9.76369 16.7583 8.90051 17.5521L7.8852 16.4479C8.76185 15.6418 9.72949 14.6835 10.6354 13.6145C10.4069 13.3276 10.1708 13.0167 9.95417 12.7163C9.61723 12.249 9.28915 11.7549 9.12735 11.4077L10.4869 10.7741C10.5823 10.9786 10.8328 11.3701 11.1708 11.8389C11.3064 12.0269 11.4498 12.2188 11.5931 12.4048C12.3554 11.3675 13.0108 10.2655 13.4571 9.12931H7V7.62931Z',
} as const;

export const IconLanguageSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="language-square-stroke-rounded IconLanguageSquareStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLanguageSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="language-square-duotone-rounded IconLanguageSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconLanguageSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="language-square-twotone-rounded IconLanguageSquareTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconLanguageSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="language-square-solid-rounded IconLanguageSquareSolidRounded"
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

export const IconLanguageSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="language-square-bulk-rounded IconLanguageSquareBulkRounded"
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

export const IconLanguageSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="language-square-stroke-sharp IconLanguageSquareStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLanguageSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="language-square-solid-sharp IconLanguageSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLanguageSquare: TheIconSelfPack = {
  name: 'LanguageSquare',
  StrokeRounded: IconLanguageSquareStrokeRounded,
  DuotoneRounded: IconLanguageSquareDuotoneRounded,
  TwotoneRounded: IconLanguageSquareTwotoneRounded,
  SolidRounded: IconLanguageSquareSolidRounded,
  BulkRounded: IconLanguageSquareBulkRounded,
  StrokeSharp: IconLanguageSquareStrokeSharp,
  SolidSharp: IconLanguageSquareSolidSharp,
};