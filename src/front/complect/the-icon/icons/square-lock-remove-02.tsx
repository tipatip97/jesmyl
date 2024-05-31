import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.9428 17.0572L17 18M17 18L16.0572 18.9428M17 18L17.9428 18.9428M17 18L16.0572 17.0572M19.8284 20.8284C18.2663 22.3905 15.7337 22.3905 14.1716 20.8284C12.6095 19.2663 12.6095 16.7337 14.1716 15.1716C15.7337 13.6095 18.2663 13.6095 19.8284 15.1716C21.3905 16.7337 21.3905 19.2663 19.8284 20.8284Z',
  d2: 'M11.5 21.9989C11.3349 21.9996 11.1683 22 11 22C9.4153 22 7.97627 21.966 6.55966 21.9009C4.87613 21.8235 3.49269 20.515 3.26781 18.8447C3.12105 17.7547 3 16.6376 3 15.5C3 14.3624 3.12105 13.2453 3.26781 12.1553C3.49269 10.485 4.87613 9.17649 6.55966 9.09909C7.97627 9.03397 9.4153 9 11 9C12.5847 9 14.0237 9.03397 15.4403 9.09909C16.8963 9.16603 18.0482 10.1538 18.5 11.5',
  d3: 'M6.5 9V6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5V9',
  d4: 'M6.55966 21.9009C4.87613 21.8235 3.49269 20.515 3.26781 18.8447C3.12104 17.7547 3 16.6376 3 15.5C3 14.3624 3.12104 13.2453 3.26781 12.1553C3.49269 10.485 4.87613 9.17649 6.55966 9.09909C7.97627 9.03397 9.4153 9 11 9C12.5847 9 14.0237 9.03397 15.4403 9.09909C17.1239 9.17649 18.5073 10.485 18.7322 12.1553C18.8365 12.9302 18.9279 13.7188 18.972 14.5187C17.446 13.6532 15.4723 13.8708 14.1716 15.1716C12.6095 16.7337 12.6095 19.2663 14.1716 20.8284C14.671 21.3278 15.2695 21.6676 15.9039 21.8476C15.7525 21.8757 15.5977 21.8937 15.4403 21.9009C14.0237 21.966 12.5847 22 11 22C9.4153 22 7.97627 21.966 6.55966 21.9009Z',
  d5: 'M17 13.25C14.3766 13.25 12.25 15.3766 12.25 18C12.25 20.6234 14.3766 22.75 17 22.75C19.6234 22.75 21.75 20.6234 21.75 18C21.75 15.3766 19.6234 13.25 17 13.25ZM16.5306 16.47C16.2379 16.1769 15.763 16.1766 15.47 16.4694C15.1769 16.7621 15.1766 17.237 15.4694 17.53L15.9388 18L15.4694 18.47C15.1766 18.763 15.1769 19.2379 15.47 19.5306C15.763 19.8234 16.2379 19.8231 16.5306 19.53L16.9995 19.0606L17.47 19.5306C17.763 19.8234 18.2379 19.8231 18.5306 19.53C18.8234 19.237 18.8231 18.7621 18.53 18.4694L18.0601 18L18.53 17.5306C18.8231 17.2379 18.8234 16.763 18.5306 16.47C18.2379 16.1769 17.763 16.1766 17.47 16.4694L16.9995 16.9393L16.5306 16.47Z',
  d6: 'M11 3.25C9.067 3.25 7.5 4.817 7.5 6.75V9.25C7.5 9.80228 7.05228 10.25 6.5 10.25C5.94772 10.25 5.5 9.80228 5.5 9.25V6.75C5.5 3.71243 7.96243 1.25 11 1.25C14.0376 1.25 16.5 3.71243 16.5 6.75V9.25C16.5 9.80228 16.0523 10.25 15.5 10.25C14.9477 10.25 14.5 9.80228 14.5 9.25V6.75C14.5 4.817 12.933 3.25 11 3.25Z',
  d7: 'M6.52522 8.34988C7.95364 8.28422 9.40416 8.25 11 8.25C12.5958 8.25 14.0464 8.28422 15.4748 8.34989C17.5328 8.4445 19.2039 10.0382 19.4755 12.0552C19.4883 12.1504 19.3918 12.2232 19.3025 12.1878C18.5899 11.9053 17.8131 11.75 17 11.75C13.5482 11.75 10.75 14.5482 10.75 18C10.75 19.3277 11.164 20.5588 11.87 21.571C12.2667 22.1399 12.4651 22.4243 12.3813 22.5854C12.2976 22.7464 11.9816 22.7474 11.3495 22.7494C11.2337 22.7498 11.1173 22.75 11 22.75C9.40416 22.75 7.95364 22.7158 6.52522 22.6501C4.46716 22.5555 2.79609 20.9618 2.52452 18.9448C2.37636 17.8444 2.25 16.6882 2.25 15.5C2.25 14.3118 2.37636 13.1556 2.52452 12.0552C2.79609 10.0382 4.46716 8.4445 6.52522 8.34988Z',
  d8: 'M7.5 6.75C7.5 4.817 9.067 3.25 11 3.25C12.933 3.25 14.5 4.817 14.5 6.75V8.31016C14.827 8.32177 15.1515 8.33502 15.4748 8.34988C15.8298 8.3662 16.1732 8.42712 16.5 8.52712V6.75C16.5 3.71243 14.0376 1.25 11 1.25C7.96243 1.25 5.5 3.71243 5.5 6.75V8.52712C5.82676 8.42712 6.17023 8.3662 6.52522 8.34988C6.84854 8.33502 7.17299 8.32177 7.5 8.31016V6.75Z',
  d9: 'M15.5 16.499L16.9983 17.999M16.9983 17.999L18.5 19.499M16.9983 17.999L18.5 16.499M16.9983 17.999L15.5 19.499M21 17.999C21 20.2081 19.2091 21.999 17 21.999C14.7909 21.999 13 20.2081 13 17.999C13 15.7899 14.7909 13.999 17 13.999C19.2091 13.999 21 15.7899 21 17.999Z',
  d10: 'M19 12.0267V9.02315H15.4959M11.0037 21.999H3V9.02315H6.47206M15.4959 9.02315V6.32244C15.3185 3.22369 12.8284 2.09779 11.21 2.00654C9.33478 1.9008 6.60339 3.30209 6.51329 6.30218L6.47206 9.02315M15.4959 9.02315H6.47206',
  d11: 'M17 13.25C14.3766 13.25 12.25 15.3766 12.25 18C12.25 20.6234 14.3766 22.75 17 22.75C19.6234 22.75 21.75 20.6234 21.75 18C21.75 15.3766 19.6234 13.25 17 13.25ZM17.9694 15.9697L16.9983 16.9397L16.03 15.9703L14.9688 17.0304L15.9376 18.0003L14.9688 18.9703L16.03 20.0304L16.9983 19.061L17.9694 20.031L19.0294 18.9697L18.0589 18.0003L19.0294 17.031L17.9694 15.9697Z',
  d12: 'M11 3.25C9.067 3.25 7.5 4.817 7.5 6.75V9.25H5.5V6.75C5.5 3.71243 7.96243 1.25 11 1.25C14.0376 1.25 16.5 3.71243 16.5 6.75V9.25H14.5V6.75C14.5 4.817 12.933 3.25 11 3.25Z',
  d13: 'M19.75 8.25H2.25V22.75H12.9378C11.5987 21.6037 10.75 19.901 10.75 18C10.75 14.5482 13.5482 11.75 17 11.75C17.9868 11.75 18.9201 11.9787 19.75 12.3859V8.25Z',
} as const;

export const IconSquareLockRemove02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-remove-02-stroke-rounded IconSquareLockRemove02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockRemove02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-remove-02-duotone-rounded IconSquareLockRemove02DuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockRemove02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-remove-02-twotone-rounded IconSquareLockRemove02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockRemove02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-remove-02-solid-rounded IconSquareLockRemove02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockRemove02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-remove-02-bulk-rounded IconSquareLockRemove02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockRemove02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-remove-02-stroke-sharp IconSquareLockRemove02StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockRemove02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-remove-02-solid-sharp IconSquareLockRemove02SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfSquareLockRemove02: TheIconSelfPack = {
  name: 'SquareLockRemove02',
  StrokeRounded: IconSquareLockRemove02StrokeRounded,
  DuotoneRounded: IconSquareLockRemove02DuotoneRounded,
  TwotoneRounded: IconSquareLockRemove02TwotoneRounded,
  SolidRounded: IconSquareLockRemove02SolidRounded,
  BulkRounded: IconSquareLockRemove02BulkRounded,
  StrokeSharp: IconSquareLockRemove02StrokeSharp,
  SolidSharp: IconSquareLockRemove02SolidSharp,
};