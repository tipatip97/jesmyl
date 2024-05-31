import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.5 4.31818V15.6818C10.5 16.4448 10.5 16.8263 10.3644 17.1231C10.2146 17.4514 9.95135 17.7146 9.62312 17.8644C9.3263 18 8.94481 18 8.18182 18C6.14717 18 5.12985 18 4.33834 17.6385C3.46306 17.2388 2.7612 16.5369 2.36147 15.6617C2 14.8701 2 13.8528 2 11.8182V8.18182C2 6.14717 2 5.12985 2.36147 4.33834C2.7612 3.46306 3.46306 2.7612 4.33834 2.36147C5.12985 2 6.14717 2 8.18182 2C8.94481 2 9.3263 2 9.62312 2.13555C9.95135 2.28545 10.2146 2.54865 10.3644 2.87688C10.5 3.17369 10.5 3.55519 10.5 4.31818Z',
  d2: 'M6.25019 14L6.24121 14',
  d3: 'M17.7502 10L17.7412 10',
  d4: 'M6.25 5.5V8.5M4.75 7H7.75',
  d5: 'M13.5 19.6818V8.31818C13.5 7.55519 13.5 7.17369 13.6356 6.87688C13.7854 6.54865 14.0486 6.28545 14.3769 6.13555C14.6737 6 15.0552 6 15.8182 6C17.8528 6 18.8701 6 19.6617 6.36147C20.5369 6.7612 21.2388 7.46306 21.6385 8.33834C22 9.12985 22 10.1472 22 12.1818V15.8182C22 17.8528 22 18.8701 21.6385 19.6617C21.2388 20.5369 20.5369 21.2388 19.6617 21.6385C18.8701 22 17.8528 22 15.8182 22C15.0552 22 14.6737 22 14.3769 21.8644C14.0486 21.7145 13.7854 21.4514 13.6356 21.1231C13.5 20.8263 13.5 20.4448 13.5 19.6818Z',
  d6: 'M17.75 18.5V15.5M19.25 17H16.25',
  d7: 'M9.13291 1.26901C9.40263 1.28907 9.67177 1.33326 9.93468 1.45333C10.427 1.67818 10.8218 2.07297 11.0467 2.56532C11.1667 2.82823 11.2109 3.09737 11.231 3.3671C11.25 3.62301 11.25 3.93285 11.25 4.29198V15.708C11.25 16.0671 11.25 16.377 11.231 16.6329C11.2109 16.9026 11.1667 17.1718 11.0467 17.4347C10.8218 17.927 10.427 18.3218 9.93468 18.5467C9.67177 18.6667 9.40263 18.7109 9.13291 18.731C8.877 18.75 8.56715 18.75 8.20802 18.75C7.21604 18.75 6.37378 18.75 5.73829 18.7028C5.08881 18.6545 4.53704 18.5538 4.02678 18.3208C2.98738 17.8461 2.15393 17.0126 1.67925 15.9732C1.44622 15.463 1.34555 14.9112 1.29725 14.2617C1.24999 13.6262 1.25 12.8401 1.25 11.8481V8.1519V8.15189C1.25 7.15992 1.24999 6.37377 1.29725 5.73829C1.34555 5.08881 1.44622 4.53704 1.67925 4.02678C2.15393 2.98738 2.98738 2.15393 4.02678 1.67925C4.53704 1.44622 5.08881 1.34555 5.73829 1.29725C6.37377 1.24999 7.21606 1.25 8.20803 1.25H8.20806C8.56717 1.24999 8.877 1.24998 9.13291 1.26901ZM7.25 14C7.25 14.5523 6.80228 15 6.25 15H6.24102C5.68873 15 5.24102 14.5523 5.24102 14C5.24102 13.4477 5.68873 13 6.24102 13H6.25C6.80229 13 7.25 13.4477 7.25 14ZM7 5.5C7 5.08579 6.66421 4.75 6.25 4.75C5.83579 4.75 5.5 5.08579 5.5 5.5V6.25H4.75C4.33579 6.25 4 6.58579 4 7C4 7.41421 4.33579 7.75 4.75 7.75H5.5V8.5C5.5 8.91421 5.83579 9.25 6.25 9.25C6.66421 9.25 7 8.91421 7 8.5V7.75H7.75C8.16421 7.75 8.5 7.41421 8.5 7C8.5 6.58579 8.16421 6.25 7.75 6.25H7V5.5Z',
  d8: 'M15.792 5.25H15.792C16.7839 5.25 17.6262 5.24999 18.2617 5.29725C18.9112 5.34555 19.463 5.44622 19.9732 5.67925C21.0126 6.15393 21.8461 6.98738 22.3208 8.02678C22.5538 8.53704 22.6545 9.08881 22.7028 9.73829C22.75 10.3738 22.75 11.1599 22.75 12.1519V15.8481C22.75 16.8401 22.75 17.6262 22.7028 18.2617C22.6545 18.9112 22.5538 19.463 22.3208 19.9732C21.8461 21.0126 21.0126 21.8461 19.9732 22.3208C19.463 22.5538 18.9112 22.6545 18.2617 22.7028C17.6262 22.75 16.784 22.75 15.792 22.75C15.4329 22.75 15.123 22.75 14.8671 22.731C14.5974 22.7109 14.3282 22.6667 14.0653 22.5467C13.573 22.3218 13.1782 21.927 12.9533 21.4347C12.8333 21.1718 12.7891 20.9026 12.769 20.6329C12.75 20.377 12.75 20.0672 12.75 19.7081V19.7081V19.708V8.29197V8.29194V8.29192C12.75 7.93282 12.75 7.62299 12.769 7.3671C12.7891 7.09737 12.8333 6.82823 12.9533 6.56532C13.1782 6.07297 13.573 5.67818 14.0653 5.45333C14.3282 5.33326 14.5974 5.28907 14.8671 5.26901C15.123 5.24998 15.4328 5.24999 15.7919 5.25H15.7919H15.792ZM18.75 10C18.75 10.5523 18.3023 11 17.75 11H17.741C17.1887 11 16.741 10.5523 16.741 10C16.741 9.44772 17.1887 9 17.741 9H17.75C18.3023 9 18.75 9.44772 18.75 10ZM17 18.5C17 18.9142 17.3358 19.25 17.75 19.25C18.1642 19.25 18.5 18.9142 18.5 18.5V17.75H19.25C19.6642 17.75 20 17.4142 20 17C20 16.5858 19.6642 16.25 19.25 16.25H18.5V15.5C18.5 15.0858 18.1642 14.75 17.75 14.75C17.3358 14.75 17 15.0858 17 15.5V16.25H16.25C15.8358 16.25 15.5 16.5858 15.5 17C15.5 17.4142 15.8358 17.75 16.25 17.75H17V18.5Z',
  d9: 'M9.13291 1.26901C9.40263 1.28907 9.67177 1.33326 9.93468 1.45333C10.427 1.67818 10.8218 2.07297 11.0467 2.56532C11.1667 2.82823 11.2109 3.09737 11.231 3.3671C11.25 3.62301 11.25 3.93285 11.25 4.29198V15.708C11.25 16.0671 11.25 16.377 11.231 16.6329C11.2109 16.9026 11.1667 17.1718 11.0467 17.4347C10.8218 17.927 10.427 18.3218 9.93468 18.5467C9.67177 18.6667 9.40263 18.7109 9.13291 18.731C8.877 18.75 8.56715 18.75 8.20802 18.75C7.21604 18.75 6.37378 18.75 5.73829 18.7028C5.08881 18.6545 4.53704 18.5538 4.02678 18.3208C2.98738 17.8461 2.15393 17.0126 1.67925 15.9732C1.44622 15.463 1.34555 14.9112 1.29725 14.2617C1.24999 13.6262 1.25 12.8401 1.25 11.8481V8.1519V8.15189C1.25 7.15992 1.24999 6.37377 1.29725 5.73829C1.34555 5.08881 1.44622 4.53704 1.67925 4.02678C2.15393 2.98738 2.98738 2.15393 4.02678 1.67925C4.53704 1.44622 5.08881 1.34555 5.73829 1.29725C6.37377 1.24999 7.21606 1.25 8.20803 1.25H8.20806C8.56717 1.24999 8.877 1.24998 9.13291 1.26901Z',
  d10: 'M7.25 14C7.25 14.5523 6.80228 15 6.25 15L6.24102 15C5.68873 15 5.24102 14.5523 5.24102 14C5.24102 13.4477 5.68873 13 6.24102 13L6.25 13C6.80229 13 7.25 13.4477 7.25 14Z',
  d11: 'M6.25 4.75C6.66421 4.75 7 5.08579 7 5.5V6.25H7.75C8.16421 6.25 8.5 6.58579 8.5 7C8.5 7.41421 8.16421 7.75 7.75 7.75H7V8.5C7 8.91421 6.66421 9.25 6.25 9.25C5.83579 9.25 5.5 8.91421 5.5 8.5V7.75H4.75C4.33579 7.75 4 7.41421 4 7C4 6.58579 4.33579 6.25 4.75 6.25H5.5V5.5C5.5 5.08579 5.83579 4.75 6.25 4.75Z',
  d12: 'M10.5 2H6C3.79086 2 2 3.79086 2 6V14C2 16.2091 3.79086 18 6 18H10.5V2Z',
  d13: 'M13.5 6H18C20.2091 6 22 7.79086 22 10V18C22 20.2091 20.2091 22 18 22H13.5V6Z',
  d14: 'M6.25 5V9M4.25 7H8.25',
  d15: 'M17.75 19V15M19.75 17H15.75',
  d16: 'M2.25 6C2.25 3.37665 4.37665 1.25 7 1.25H11.25V18.75H7C4.37665 18.75 2.25 16.6234 2.25 14V6ZM7.75 15H5.74102L5.74102 13H7.75L7.75 15ZM6 5V6.25H4.75V7.75H6V9H7.5V7.75H8.75V6.25H7.5V5H6Z',
  d17: 'M17 5.25C19.6234 5.25 21.75 7.37665 21.75 10V18C21.75 20.6234 19.6234 22.75 17 22.75H12.75V5.25H17ZM18.25 11L16.241 11L16.241 9L18.25 9L18.25 11ZM18 19V17.75H19.25V16.25H18V15H16.5V16.25H15.25V17.75H16.5V19H18Z',
} as const;

export const IconNintendoSwitchStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nintendo-switch-stroke-rounded IconNintendoSwitchStrokeRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNintendoSwitchDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nintendo-switch-duotone-rounded IconNintendoSwitchDuotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNintendoSwitchTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nintendo-switch-twotone-rounded IconNintendoSwitchTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNintendoSwitchSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nintendo-switch-solid-rounded IconNintendoSwitchSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconNintendoSwitchBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nintendo-switch-bulk-rounded IconNintendoSwitchBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
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

export const IconNintendoSwitchStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nintendo-switch-stroke-sharp IconNintendoSwitchStrokeSharp"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNintendoSwitchSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nintendo-switch-solid-sharp IconNintendoSwitchSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNintendoSwitch: TheIconSelfPack = {
  name: 'NintendoSwitch',
  StrokeRounded: IconNintendoSwitchStrokeRounded,
  DuotoneRounded: IconNintendoSwitchDuotoneRounded,
  TwotoneRounded: IconNintendoSwitchTwotoneRounded,
  SolidRounded: IconNintendoSwitchSolidRounded,
  BulkRounded: IconNintendoSwitchBulkRounded,
  StrokeSharp: IconNintendoSwitchStrokeSharp,
  SolidSharp: IconNintendoSwitchSolidSharp,
};