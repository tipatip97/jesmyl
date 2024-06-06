import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19 16V14C19 11.1716 19 9.75736 18.1213 8.87868C17.2426 8 15.8284 8 13 8H11C8.17157 8 6.75736 8 5.87868 8.87868C5 9.75736 5 11.1716 5 14V16C5 18.8284 5 20.2426 5.87868 21.1213C6.75736 22 8.17157 22 11 22H13C15.8284 22 17.2426 22 18.1213 21.1213C19 20.2426 19 18.8284 19 16Z',
  d2: 'M19 18C20.4142 18 21.1213 18 21.5607 17.5607C22 17.1213 22 16.4142 22 15C22 13.5858 22 12.8787 21.5607 12.4393C21.1213 12 20.4142 12 19 12',
  d3: 'M5 18C3.58579 18 2.87868 18 2.43934 17.5607C2 17.1213 2 16.4142 2 15C2 13.5858 2 12.8787 2.43934 12.4393C2.87868 12 3.58579 12 5 12',
  d4: 'M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z',
  d5: 'M12 5V8',
  d6: 'M9 13V14',
  d7: 'M15 13V14',
  d8: 'M10 17.5C10 17.5 10.6667 18 12 18C13.3333 18 14 17.5 14 17.5',
  d9: 'M12 5C12.8284 5 13.5 4.32843 13.5 3.5C13.5 2.67157 12.8284 2 12 2C11.1716 2 10.5 2.67157 10.5 3.5C10.5 4.32843 11.1716 5 12 5ZM12 5V8',
  d10: 'M9.75 3.5C9.75 2.25736 10.7574 1.25 12 1.25C13.2426 1.25 14.25 2.25736 14.25 3.5C14.25 4.74264 13.2426 5.75 12 5.75C10.7574 5.75 9.75 4.74264 9.75 3.5Z',
  d11: 'M12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V8C12.75 8.41421 12.4142 8.75 12 8.75C11.5858 8.75 11.25 8.41421 11.25 8V5C11.25 4.58579 11.5858 4.25 12 4.25Z',
  d12: 'M13.0549 7.25H13.0549H13.0549H10.9451H10.9451H10.9451C9.57752 7.24998 8.47521 7.24996 7.60825 7.36652C6.70814 7.48754 5.95027 7.74643 5.34835 8.34835C4.74643 8.95027 4.48754 9.70814 4.36652 10.6083C4.24996 11.4752 4.24998 12.5775 4.25 13.9451V13.9451V13.9451V16.0549V16.0549V16.0549C4.24998 17.4225 4.24996 18.5248 4.36652 19.3918C4.48754 20.2919 4.74643 21.0497 5.34835 21.6517C5.95027 22.2536 6.70814 22.5125 7.60825 22.6335C8.47521 22.75 9.57752 22.75 10.9451 22.75H10.9451H10.9451H10.9451H10.9451H13.0549H13.0549H13.0549H13.0549H13.0549C14.4225 22.75 15.5248 22.75 16.3918 22.6335C17.2919 22.5125 18.0497 22.2536 18.6517 21.6517C19.2536 21.0497 19.5125 20.2919 19.6335 19.3918C19.75 18.5248 19.75 17.4225 19.75 16.0549V16.0549V16.0549V16.0549V16.0549V13.9451V13.9451V13.9451V13.9451V13.9451C19.75 12.5775 19.75 11.4752 19.6335 10.6083C19.5125 9.70814 19.2536 8.95027 18.6517 8.34835C18.0497 7.74643 17.2919 7.48754 16.3918 7.36652C15.5248 7.24996 14.4225 7.24998 13.0549 7.25ZM9.75 13C9.75 12.5858 9.41421 12.25 9 12.25C8.58579 12.25 8.25 12.5858 8.25 13V14C8.25 14.4142 8.58579 14.75 9 14.75C9.41421 14.75 9.75 14.4142 9.75 14V13ZM15 12.25C15.4142 12.25 15.75 12.5858 15.75 13V14C15.75 14.4142 15.4142 14.75 15 14.75C14.5858 14.75 14.25 14.4142 14.25 14V13C14.25 12.5858 14.5858 12.25 15 12.25ZM10.4401 16.8927C10.1093 16.6529 9.6461 16.722 9.40004 17.05C9.15152 17.3814 9.21867 17.8515 9.55004 18.1C9.55425 18.1028 9.55966 18.1064 9.56602 18.1106C9.61187 18.1408 9.70714 18.2036 9.75735 18.2319C9.87172 18.2962 10.0315 18.3753 10.2367 18.4523C10.6485 18.6067 11.2375 18.75 12 18.75C12.7626 18.75 13.3516 18.6067 13.7634 18.4523C13.9686 18.3753 14.1284 18.2962 14.2427 18.2319C14.293 18.2036 14.3882 18.1408 14.4341 18.1106C14.4404 18.1064 14.4458 18.1028 14.45 18.1C14.7814 17.8515 14.8486 17.3814 14.6 17.05C14.354 16.722 13.8907 16.6529 13.56 16.8927C13.5077 16.9221 13.3648 16.9997 13.2367 17.0478C12.9818 17.1434 12.5708 17.25 12 17.25C11.4293 17.25 11.0183 17.1434 10.7634 17.0478C10.6352 16.9997 10.4924 16.9221 10.4401 16.8927Z',
  d13: 'M3.04426 11.3457C2.62929 11.4253 2.23649 11.5817 1.90902 11.9091C1.52677 12.2914 1.37771 12.7626 1.31161 13.2543C1.24994 13.713 1.24997 14.3846 1.25 15.0495C1.24997 15.7143 1.24994 16.2873 1.31161 16.746C1.37771 17.2376 1.52677 17.7089 1.90902 18.0911C2.23649 18.4186 2.62929 18.5749 3.04426 18.6546C2.99992 17.8994 2.99996 17.0478 3.00001 16.1309V13.8693C2.99996 12.9525 2.99991 12.1009 3.04426 11.3457Z',
  d14: 'M20.9551 18.6545C21.37 18.5749 21.7628 18.4186 22.0903 18.0911C22.4726 17.7089 22.6216 17.2376 22.6877 16.746C22.7494 16.2872 22.7494 15.7144 22.7493 15.0495C22.7494 14.3846 22.7494 13.713 22.6877 13.2543C22.6216 12.7626 22.4726 12.2914 22.0903 11.9091C21.7628 11.5817 21.37 11.4253 20.9551 11.3457C20.9994 12.1009 20.9994 12.9525 20.9993 13.8693V16.1309C20.9994 17.0478 20.9994 17.8994 20.9551 18.6545Z',
  d15: 'M13.0549 7.25C14.4225 7.24998 15.5248 7.24996 16.3918 7.36652C17.2919 7.48754 18.0497 7.74643 18.6517 8.34835C19.2536 8.95027 19.5125 9.70814 19.6335 10.6083C19.75 11.4752 19.75 12.5775 19.75 13.9451V13.9451V16.0549V16.0549C19.75 17.4225 19.75 18.5248 19.6335 19.3918C19.5125 20.2919 19.2536 21.0497 18.6517 21.6517C18.0497 22.2536 17.2919 22.5125 16.3918 22.6335C15.5248 22.75 14.4225 22.75 13.0549 22.75H13.0549H10.9451H10.9451C9.57753 22.75 8.47522 22.75 7.60825 22.6335C6.70814 22.5125 5.95027 22.2536 5.34835 21.6517C4.74643 21.0497 4.48754 20.2919 4.36652 19.3918C4.24996 18.5248 4.24998 17.4225 4.25 16.0549V16.0549V13.9451V13.9451C4.24998 12.5775 4.24996 11.4752 4.36652 10.6082C4.48754 9.70814 4.74643 8.95027 5.34835 8.34835C5.95027 7.74643 6.70814 7.48754 7.60825 7.36652C8.47521 7.24996 9.57753 7.24998 10.9451 7.25H10.9451H13.0549H13.0549Z',
  d16: 'M9 12.25C9.41421 12.25 9.75 12.5858 9.75 13V14C9.75 14.4142 9.41421 14.75 9 14.75C8.58579 14.75 8.25 14.4142 8.25 14V13C8.25 12.5858 8.58579 12.25 9 12.25Z',
  d17: 'M15 12.25C15.4142 12.25 15.75 12.5858 15.75 13V14C15.75 14.4142 15.4142 14.75 15 14.75C14.5858 14.75 14.25 14.4142 14.25 14V13C14.25 12.5858 14.5858 12.25 15 12.25Z',
  d18: 'M9.40004 17.05C9.6461 16.722 10.1093 16.6529 10.4401 16.8927C10.4924 16.9221 10.6352 16.9997 10.7634 17.0478C11.0183 17.1434 11.4293 17.25 12 17.25C12.5708 17.25 12.9818 17.1434 13.2367 17.0478C13.3648 16.9997 13.5077 16.9221 13.56 16.8927C13.8907 16.6529 14.354 16.722 14.6 17.05C14.8486 17.3814 14.7814 17.8515 14.45 18.1C14.4155 18.1227 14.2999 18.1997 14.2427 18.2319C14.1284 18.2962 13.9686 18.3753 13.7634 18.4523C13.3516 18.6067 12.7626 18.75 12 18.75C11.2375 18.75 10.6485 18.6067 10.2367 18.4523C10.0315 18.3753 9.87172 18.2962 9.75735 18.2319C9.70017 18.1997 9.58457 18.1227 9.55004 18.1C9.21867 17.8515 9.15152 17.3814 9.40004 17.05Z',
  d19: 'M12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58579 11.25 5V7.25H12.75V5Z',
  d20: 'M19 8H5V22H19V8Z',
  d21: 'M19 12H22V18H19',
  d22: 'M5 18L2 18L2 12L5 12',
  d23: 'M9 12V14',
  d24: 'M15 12V14',
  d25: 'M9.5 17C9.5 17 10.3333 18 12 18C13.6667 18 14.5 17 14.5 17',
  d26: 'M11.25 8V5H12.75V8H11.25Z',
  d27: 'M5 7.25C4.58579 7.25 4.25 7.58579 4.25 8V22C4.25 22.4142 4.58579 22.75 5 22.75H19C19.4142 22.75 19.75 22.4142 19.75 22V8C19.75 7.58579 19.4142 7.25 19 7.25H5ZM8.25 12V14H9.75V12H8.25ZM14.25 14V12H15.75V14H14.25ZM9.50148 17.0007C8.92531 17.4809 8.92578 17.4814 8.92578 17.4814C9.11815 17.6999 9.48528 17.9907 9.7406 18.1439C10.2542 18.452 11.011 18.7507 12.0015 18.7507C12.9919 18.7507 13.7487 18.452 14.2623 18.1439C14.5177 17.9907 14.7123 17.8356 14.8469 17.7145C14.9144 17.6538 15.0166 17.5557 15.0772 17.4814C15.0772 17.4814 15.0776 17.4809 14.5015 17.0007C13.9253 16.5206 13.9262 16.5195 13.9262 16.5195C13.833 16.6143 13.6519 16.7608 13.4906 16.8576C13.1709 17.0495 12.6777 17.2507 12.0015 17.2507C11.3253 17.2507 10.8321 17.0495 10.5123 16.8576C10.351 16.7608 10.1509 16.5864 10.0772 16.5201C10.0772 16.5201 10.0776 16.5206 9.50148 17.0007Z',
  d28: 'M3 11.25H2C1.80109 11.25 1.61032 11.329 1.46967 11.4697C1.32902 11.6103 1.25 11.8011 1.25 12V18C1.25 18.4142 1.58579 18.75 2 18.75H3V11.25Z',
  d29: 'M21 18.75H22C22.4142 18.75 22.75 18.4142 22.75 18V12C22.75 11.5858 22.4142 11.25 22 11.25H21V18.75Z',
};

export const IconRoboticStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="robotic-stroke-rounded IconRoboticStrokeRounded"
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRoboticDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="robotic-duotone-rounded IconRoboticDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRoboticTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="robotic-twotone-rounded IconRoboticTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRoboticSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="robotic-solid-rounded IconRoboticSolidRounded"
    >
      <path 
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRoboticBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="robotic-bulk-rounded IconRoboticBulkRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRoboticStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="robotic-stroke-sharp IconRoboticStrokeSharp"
    >
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRoboticSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="robotic-solid-sharp IconRoboticSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRobotic: TheIconSelfPack = {
  name: 'Robotic',
  StrokeRounded: IconRoboticStrokeRounded,
  DuotoneRounded: IconRoboticDuotoneRounded,
  TwotoneRounded: IconRoboticTwotoneRounded,
  SolidRounded: IconRoboticSolidRounded,
  BulkRounded: IconRoboticBulkRounded,
  StrokeSharp: IconRoboticStrokeSharp,
  SolidSharp: IconRoboticSolidSharp,
};