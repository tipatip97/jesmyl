import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.4749 22H8.52514C7.31383 22 6.70817 22 6.3832 21.7512C6.18901 21.6025 6.0581 21.4011 6.0117 21.1795C5.93404 20.8087 6.24565 20.3562 6.86886 19.4512C7.53544 18.4832 7.86873 17.9992 8.3452 17.6645C8.63776 17.459 8.96695 17.2966 9.31973 17.1838C9.89428 17 10.5421 17 11.8377 17H12.1623C13.4579 17 14.1057 17 14.6803 17.1838C15.033 17.2966 15.3622 17.459 15.6548 17.6645C16.1313 17.9992 16.4646 18.4832 17.1311 19.4512C17.7544 20.3562 18.066 20.8087 17.9883 21.1795C17.9419 21.4011 17.811 21.6025 17.6168 21.7512C17.2918 22 16.6862 22 15.4749 22Z',
  d2: 'M8.5 12H15.5',
  d3: 'M12 13L12 17',
  d4: 'M10.0064 12C10.0064 12 11.0384 6.1382 9.17022 3.41883C8.62458 2.62456 9.52092 2.30021 10.0305 2.15665C11.9538 1.61477 13.1167 2.50736 13.5581 4.39146C13.6047 4.59038 13.5765 4.79889 13.4913 4.98475L13.2346 5.54458C13.1032 5.83125 13.1153 6.16269 13.2675 6.43907L13.7558 7.32611C13.9271 7.63716 13.9197 8.01506 13.7366 8.31933L13.3619 8.94167C13.1575 9.28113 13.1784 9.70751 13.3482 10.0653C13.7559 10.9239 14 12 14 12',
  d5: 'M9.17022 3.41883C11.0384 6.1382 10.0064 12 10.0064 12H14C14 12 13.7559 10.9239 13.3482 10.0653C13.1784 9.70751 13.1575 9.28113 13.3619 8.94167L13.7366 8.31933C13.9197 8.01506 13.9271 7.63716 13.7558 7.32611L13.2675 6.43907C13.1153 6.16269 13.1032 5.83125 13.2346 5.54458L13.4913 4.98475C13.5765 4.79889 13.6047 4.59038 13.5581 4.39146C13.1167 2.50736 11.9538 1.61477 10.0305 2.15665C9.52092 2.30021 8.62458 2.62456 9.17022 3.41883Z',
  d6: 'M12 12L12 17',
  d7: 'M12.2922 16.2501C13.4627 16.2499 14.2212 16.2497 14.9087 16.4696C15.3311 16.6047 15.729 16.8003 16.0859 17.051C16.6742 17.4643 17.08 18.0541 17.676 18.9202L17.676 18.9202C17.967 19.3428 18.3175 19.8518 18.4835 20.1616C18.6497 20.4716 18.8176 20.8786 18.7223 21.3334C18.636 21.7455 18.3971 22.0985 18.0727 22.3469C17.7342 22.606 17.321 22.682 16.9458 22.716C16.5683 22.7502 16.0858 22.7502 15.5108 22.7502H8.48909C7.91411 22.7502 7.43161 22.7502 7.05411 22.716C6.67895 22.682 6.26569 22.606 5.92724 22.3469C5.60278 22.0985 5.36387 21.7455 5.27757 21.3334C5.18232 20.8786 5.3502 20.4716 5.51636 20.1616C5.68239 19.8518 6.03285 19.3428 6.32389 18.9203C6.91986 18.0541 7.32573 17.4643 7.91404 17.051C8.27087 16.8003 8.66879 16.6047 9.09119 16.4696C9.77874 16.2497 10.5372 16.2499 11.7077 16.2501H12.2922Z',
  d8: 'M7.5 11.9999C7.5 11.4476 7.94772 10.9999 8.5 10.9999H15.5C16.0523 10.9999 16.5 11.4476 16.5 11.9999C16.5 12.5522 16.0523 12.9999 15.5 12.9999H8.5C7.94772 12.9999 7.5 12.5522 7.5 11.9999Z',
  d9: 'M12 10.9999C12.5523 10.9999 13 11.4476 13 11.9999L13 16.9999C13 17.5522 12.5523 17.9999 12 17.9999C11.4477 17.9999 11 17.5522 11 16.9999L11 11.9999C11 11.4476 11.4477 10.9999 12 10.9999Z',
  d10: 'M12.766 1.74018C13.5695 2.27594 14.0435 3.17552 14.2883 4.22025C14.3771 4.59938 14.3195 4.97778 14.173 5.29725L13.9163 5.85707C13.884 5.92765 13.8869 6.00895 13.9245 6.07726L14.4128 6.9643C14.713 7.50966 14.7001 8.17274 14.3791 8.70604L14.0044 9.32838C13.9597 9.4027 13.9361 9.55481 14.0257 9.74347C14.2532 10.2227 14.4289 10.7478 14.5458 11.1406C14.6041 11.3364 14.6969 11.6992 14.7296 11.827L14.7312 11.8332C14.7817 12.0556 14.7283 12.2897 14.586 12.4679C14.4437 12.6461 14.228 12.7499 14 12.7499H10.0064C9.78475 12.7499 9.57445 12.6518 9.43194 12.4821C9.28949 12.3123 9.22938 12.0883 9.26773 11.8701C9.29121 11.7118 9.36058 11.2432 9.3933 10.9565C9.45885 10.3819 9.52712 9.59013 9.53893 8.7189C9.55077 7.84526 9.50553 6.90826 9.3506 6.03825C9.1944 5.16112 8.93509 4.40102 8.55201 3.84339C8.35054 3.55013 8.21709 3.20433 8.25691 2.82774C8.29715 2.44716 8.49999 2.16939 8.70191 1.98702C9.06705 1.65723 9.58098 1.50397 9.82705 1.43464C10.9301 1.12385 11.9449 1.19272 12.766 1.74018Z',
  d11: 'M18 21.9541H6L8 17.9633H16L18 21.9541Z',
  d12: 'M12 11.9771V17.9633',
  d13: 'M10.0552 12.0134C10.4704 8.1603 10.3904 4.77262 8.93164 3.03318C9.566 2.11964 9.95978 1.72473 11.8806 2.08372C13.6584 2.84685 14.0064 4.46726 14.0064 4.46726L13.0419 5.94686C13.0202 5.98005 13.0203 6.02286 13.0421 6.05597L14.0064 7.52323L13.0441 8.96347C13.0213 8.99759 13.022 9.04247 13.0452 9.07636C13.8972 10.3243 13.9831 11.3621 13.9831 12.0134',
  d14: 'M12.9563 1.76569C13.8495 2.30192 14.4693 3.20772 14.73 4.32119L14.8041 4.63766L13.9003 5.99378L14.9005 7.4952L13.8839 9.02124C13.974 9.1866 14.0794 9.39339 14.1848 9.63066C14.3777 10.0648 14.5847 10.6314 14.6862 11.25H15.5V12.75H12.75V17.25H16C16.2841 17.25 16.5438 17.4105 16.6708 17.6646L18.6708 21.6646C18.7871 21.8971 18.7746 22.1732 18.638 22.3943C18.5013 22.6154 18.2599 22.75 18 22.75H6C5.74007 22.75 5.49867 22.6154 5.36201 22.3943C5.22536 22.1732 5.21293 21.8971 5.32918 21.6646L7.32918 17.6646C7.45622 17.4105 7.71592 17.25 8 17.25H11.25V12.75H8.5V11.25H9.33356C9.34324 11.148 9.35328 11.0355 9.36325 10.9138C9.4137 10.2977 9.4618 9.4504 9.45321 8.52309C9.44459 7.5933 9.37906 6.59927 9.208 5.68474C9.03521 4.76089 8.7646 3.97336 8.38146 3.41525L8.14062 3.06444C8.14062 3.06444 8.39015 2.5404 8.41915 2.49352C8.47682 2.4003 8.56191 2.27782 8.67853 2.14717C8.91108 1.88663 9.28441 1.57728 9.82553 1.42471C10.9614 1.10445 12.0609 1.22814 12.9563 1.76569Z',
} as const;

export const IconJoystick01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-01-stroke-rounded IconJoystick01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconJoystick01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-01-duotone-rounded IconJoystick01DuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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

export const IconJoystick01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-01-twotone-rounded IconJoystick01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconJoystick01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-01-solid-rounded IconJoystick01SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJoystick01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-01-bulk-rounded IconJoystick01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconJoystick01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-01-stroke-sharp IconJoystick01StrokeSharp"
    >
      <path 
        d={d.d11} 
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
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconJoystick01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-01-solid-sharp IconJoystick01SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfJoystick01: TheIconSelfPack = {
  name: 'Joystick01',
  StrokeRounded: IconJoystick01StrokeRounded,
  DuotoneRounded: IconJoystick01DuotoneRounded,
  TwotoneRounded: IconJoystick01TwotoneRounded,
  SolidRounded: IconJoystick01SolidRounded,
  BulkRounded: IconJoystick01BulkRounded,
  StrokeSharp: IconJoystick01StrokeSharp,
  SolidSharp: IconJoystick01SolidSharp,
};