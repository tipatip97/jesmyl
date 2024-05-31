import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.91601 13.4949V9.99645M6.91601 9.99645V3.74922C6.91601 2.78315 7.69951 2 8.66601 2C9.6325 2 10.416 2.78315 10.416 3.74922V8.99689L13.493 9.47425C15.4216 9.76342 16.386 9.908 17.0652 10.3147C17.7648 10.7337 18.1629 11.2837 18.5 11.9956M6.91601 9.99645L5.7297 11.3516C4.77678 12.4402 4.30031 12.9845 4.11571 13.6295C4.03246 13.9203 3.99373 14.2221 4.00083 14.5246C4.01657 15.1953 4.34015 15.8421 4.98731 17.1359C5.78536 18.7313 6.18438 19.529 6.82659 20.0642C7.11674 20.306 7.4397 20.5055 7.78584 20.6568C8.77695 21.0899 9.93973 20.9901 11 20.9901',
  d2: 'M14 19.5C14 18.5654 14 18.0981 14.201 17.75C14.3326 17.522 14.522 17.3326 14.75 17.201C15.0981 17 15.5654 17 16.5 17H17.5C18.4346 17 18.9019 17 19.25 17.201C19.478 17.3326 19.6674 17.522 19.799 17.75C20 18.0981 20 18.5654 20 19.5C20 20.4346 20 20.9019 19.799 21.25C19.6674 21.478 19.478 21.6674 19.25 21.799C18.9019 22 18.4346 22 17.5 22H16.5C15.5654 22 15.0981 22 14.75 21.799C14.522 21.6674 14.3326 21.478 14.201 21.25C14 20.9019 14 20.4346 14 19.5Z',
  d3: 'M15.5 15.5C15.5 14.6716 16.1716 14 17 14C17.8284 14 18.5 14.6716 18.5 15.5V17H15.5V15.5Z',
  d4: 'M6.91601 10V3.75C6.91601 2.7835 7.69951 2 8.66601 2C9.6325 2 10.416 2.7835 10.416 3.75V9L13.493 9.47757C15.4216 9.76687 16.386 9.91152 17.0652 10.3184C18.1872 10.9906 19 12 19 13.4736C19 14.4341 18.7779 15.0987 18.244 16.6962C18.211 16.795 18.1768 16.8973 18.1413 17.0036C17.9552 17 17.7434 17 17.5 17H16.5C15.5654 17 15.0981 17 14.75 17.201C14.522 17.3326 14.3326 17.522 14.201 17.75C14 18.0981 14 18.5654 14 19.5C14 20.2153 14 20.6568 14.0901 20.9807C13.7136 21 13.2505 21 12.6336 21H11.2287C9.44422 21 8.55198 21 7.78584 20.6651C7.4397 20.5137 7.11674 20.3141 6.82659 20.0722C6.18438 19.5367 5.78536 18.7387 4.98731 17.1426C4.34015 15.8483 4.01657 15.2011 4.00083 14.5302C3.99373 14.2276 4.03246 13.9256 4.11571 13.6346C4.30031 12.9894 4.77677 12.4448 5.72969 11.3558L6.91601 10Z',
  d5: 'M17 13.25C15.7574 13.25 14.75 14.2574 14.75 15.5V16.3877C14.6227 16.4278 14.4974 16.4808 14.375 16.5514C14.033 16.7489 13.7489 17.033 13.5514 17.375C13.3741 17.6822 13.308 18.0082 13.2782 18.3374C13.25 18.6486 13.25 19.0924 13.25 19.5322C13.25 19.972 13.25 20.3514 13.2782 20.6626C13.308 20.9918 13.3741 21.3178 13.5514 21.625C13.7489 21.967 14.033 22.2511 14.375 22.4486C14.6822 22.6259 15.0082 22.692 15.3374 22.7218C15.6487 22.75 16.028 22.75 16.4678 22.75H17.5322C17.972 22.75 18.3514 22.75 18.6627 22.7218C18.9918 22.692 19.3178 22.6259 19.625 22.4486C19.967 22.2511 20.2511 21.967 20.4486 21.625C20.6259 21.3178 20.692 20.9918 20.7218 20.6627C20.75 20.3514 20.75 19.972 20.75 19.5322C20.75 19.0924 20.75 18.6486 20.7218 18.3373C20.692 18.0082 20.6259 17.6822 20.4486 17.375C20.2511 17.033 19.967 16.7489 19.625 16.5514C19.5026 16.4808 19.3773 16.4278 19.25 16.3877V15.5C19.25 14.2574 18.2426 13.25 17 13.25ZM17.75 16.25H16.25V15.5C16.25 15.0858 16.5858 14.75 17 14.75C17.4142 14.75 17.75 15.0858 17.75 15.5V16.25Z',
  d6: 'M6.16601 3.75V9.7182L5.145 10.8851C4.68574 11.4099 4.31144 11.8377 4.03182 12.2153C3.74093 12.6082 3.52073 12.9876 3.39464 13.4283C3.29057 13.7921 3.24216 14.1695 3.25103 14.5478C3.26179 15.006 3.37909 15.4287 3.56139 15.8823C3.73662 16.3183 4.0825 17.0101 4.3944 17.6339C5.11655 19.0793 5.58206 20.011 6.3463 20.6482C6.69085 20.9355 7.07436 21.1726 7.4854 21.3523C8.39712 21.7508 9.43867 21.7505 11.0544 21.75C11.0845 21.75 11.1155 21.75 11.1474 21.75C11.5099 21.7501 11.6911 21.7501 11.7806 21.6495C11.8701 21.549 11.8465 21.3469 11.7993 20.9429C11.7935 20.8931 11.7886 20.8448 11.7843 20.798C11.7499 20.4181 11.7499 19.9803 11.75 19.5759C11.7499 19.1718 11.7499 18.5822 11.7843 18.202C11.8236 17.7684 11.9214 17.1984 12.2524 16.625C12.5064 16.1852 12.8462 15.8029 13.25 15.5C13.25 13.4289 14.9289 11.75 17 11.75C17.6339 11.75 18.2311 11.9073 18.7546 12.185C19.225 12.4345 19.4603 12.5592 19.5645 12.4615C19.6688 12.3638 19.5768 12.1595 19.393 11.7508C18.9864 10.8471 18.2713 10.1667 17.4506 9.67506C17.0095 9.41078 16.5075 9.25147 15.9068 9.12099C15.3158 8.9926 14.5726 8.88112 13.6306 8.73982L13.608 8.73645L13.6043 8.73587L11.166 8.35743V3.75C11.166 2.36929 10.0467 1.25 8.66601 1.25C7.28529 1.25 6.16601 2.36929 6.16601 3.75Z',
  d7: 'M6.91601 14.5302V10M6.91601 10V3.75C6.91601 2.7835 7.69951 2 8.66601 2C9.6325 2 10.416 2.7835 10.416 3.75V9H16C17.6569 9 19 10.3431 19 12M6.91601 10L5.7297 11.3558C4.77678 12.4448 4.30031 12.9894 4.11571 13.6346C4.03246 13.9256 3.99373 14.2276 4.00083 14.5302C4.01657 15.2011 4.11571 15.8152 4.98731 17.1426L7.5 21H11',
  d8: 'M18.5 17V15.5C18.5 14.6716 17.8284 14 17 14C16.1716 14 15.5 14.6716 15.5 15.5V17',
  d9: 'M20 17H14V22H20V17Z',
  d10: 'M17 13.25C15.7574 13.25 14.75 14.2574 14.75 15.5V16.25H13.25V22.75H20.75V16.25H19.25V15.5C19.25 14.2574 18.2426 13.25 17 13.25ZM17.75 15.5V16.25H16.25V15.5C16.25 15.0858 16.5858 14.75 17 14.75C17.4142 14.75 17.75 15.0858 17.75 15.5Z',
  d11: 'M6.16601 3.75V9.7182L5.14499 10.8851C4.68575 11.4099 4.31143 11.8377 4.03182 12.2153C3.74093 12.6082 3.52073 12.9876 3.39464 13.4283C3.29057 13.7921 3.24216 14.1695 3.25103 14.5478C3.25991 14.9259 3.29394 15.3291 3.46228 15.8294C3.62579 16.3153 3.90464 16.86 4.35959 17.5531L4.36038 17.5543L7.09346 21.75H11.75V14.75H13.325C13.6725 13.0383 15.1858 11.75 17 11.75C18.0865 11.75 19.0651 12.2121 19.75 12.9505V12C19.75 9.92893 18.0711 8.25 16 8.25H11.166V3.75C11.166 2.36929 10.0467 1.25 8.66601 1.25C7.28529 1.25 6.16601 2.36929 6.16601 3.75Z',
} as const;

export const IconTouchLocked04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-04-stroke-rounded IconTouchLocked04StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchLocked04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-04-duotone-rounded IconTouchLocked04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchLocked04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-04-twotone-rounded IconTouchLocked04TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconTouchLocked04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-04-solid-rounded IconTouchLocked04SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchLocked04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-04-bulk-rounded IconTouchLocked04BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchLocked04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-04-stroke-sharp IconTouchLocked04StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchLocked04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-04-solid-sharp IconTouchLocked04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTouchLocked04: TheIconSelfPack = {
  name: 'TouchLocked04',
  StrokeRounded: IconTouchLocked04StrokeRounded,
  DuotoneRounded: IconTouchLocked04DuotoneRounded,
  TwotoneRounded: IconTouchLocked04TwotoneRounded,
  SolidRounded: IconTouchLocked04SolidRounded,
  BulkRounded: IconTouchLocked04BulkRounded,
  StrokeSharp: IconTouchLocked04StrokeSharp,
  SolidSharp: IconTouchLocked04SolidSharp,
};