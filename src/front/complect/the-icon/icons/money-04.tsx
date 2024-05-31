import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 19.5C10.6675 20.1224 8.91707 20.5 7 20.5C5.93408 20.5 4.91969 20.3833 4 20.1726C2.41828 19.8103 2 18.8796 2 17.386V6.61397C2 5.62914 3.04003 4.95273 4 5.1726C4.91969 5.38325 5.93408 5.5 7 5.5C8.91707 5.5 10.6675 5.12236 12 4.5C13.3325 3.87764 15.0829 3.5 17 3.5C18.0659 3.5 19.0803 3.61675 20 3.8274C21.5817 4.18968 22 5.12036 22 6.61397V17.386C22 18.3709 20.96 19.0473 20 18.8274C19.0803 18.6167 18.0659 18.5 17 18.5C15.0829 18.5 13.3325 18.8776 12 19.5Z',
  d2: 'M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z',
  d3: 'M5.5 13L5.5 13.009',
  d4: 'M18.5 10.9922L18.5 11.0012',
  d5: 'M7 20.5C8.91707 20.5 10.6675 20.1224 12 19.5C13.3325 18.8776 15.0829 18.5 17 18.5C18.0659 18.5 19.0803 18.6167 20 18.8274C20.96 19.0473 22 18.3709 22 17.386V6.61397C22 5.12036 21.5817 4.18968 20 3.8274C19.0803 3.61675 18.0659 3.5 17 3.5C15.0829 3.5 13.3325 3.87764 12 4.5C10.6675 5.12236 8.91707 5.5 7 5.5C5.93408 5.5 4.91969 5.38325 4 5.1726C3.04003 4.95273 2 5.62914 2 6.61397V17.386C2 18.9264 2.49957 19.8289 4 20.1726C4.91969 20.3833 5.93408 20.5 7 20.5ZM12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z',
  d6: 'M17 2.75C14.9915 2.75 13.1298 3.14454 11.6826 3.82046C10.4648 4.38927 8.82565 4.75 7 4.75C5.988 4.75 5.02989 4.63907 4.16745 4.44153C2.841 4.13772 1.25 5.04678 1.25 6.61397V17.386C1.25 18.2216 1.38242 19.0082 1.81644 19.6488C2.26524 20.3111 2.95689 20.7031 3.83255 20.9037C4.80949 21.1274 5.88016 21.25 7 21.25C9.00849 21.25 10.8702 20.8555 12.3174 20.1795C13.5352 19.6107 15.1744 19.25 17 19.25C18.012 19.25 18.9701 19.3609 19.8326 19.5585C21.159 19.8623 22.75 18.9532 22.75 17.386V6.61397C22.75 5.81712 22.6428 5.03453 22.2218 4.38745C21.7825 3.71217 21.0845 3.30637 20.1674 3.09633C19.1905 2.87257 18.1198 2.75 17 2.75ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15ZM5.5 12C6.05228 12 6.5 12.4477 6.5 13V13.009C6.5 13.5613 6.05228 14.009 5.5 14.009C4.94772 14.009 4.5 13.5613 4.5 13.009V13C4.5 12.4477 4.94772 12 5.5 12ZM19.5 10.9922C19.5 10.4399 19.0523 9.99219 18.5 9.99219C17.9477 9.99219 17.5 10.4399 17.5 10.9922V11.0012C17.5 11.5535 17.9477 12.0012 18.5 12.0012C19.0523 12.0012 19.5 11.5535 19.5 11.0012V10.9922Z',
  d7: 'M17 2.75C14.9915 2.75 13.1298 3.14454 11.6826 3.82046C10.4648 4.38927 8.82565 4.75 7 4.75C5.988 4.75 5.02989 4.63907 4.16745 4.44153C2.841 4.13772 1.25 5.04678 1.25 6.61397V17.386C1.25 18.2216 1.38242 19.0082 1.81644 19.6488C2.26524 20.3111 2.95689 20.7031 3.83255 20.9037C4.80949 21.1274 5.88016 21.25 7 21.25C9.00849 21.25 10.8702 20.8555 12.3174 20.1795C13.5352 19.6107 15.1744 19.25 17 19.25C18.012 19.25 18.9701 19.3609 19.8326 19.5585C21.159 19.8623 22.75 18.9532 22.75 17.386V6.61397C22.75 5.81712 22.6428 5.03453 22.2218 4.38745C21.7825 3.71217 21.0845 3.30637 20.1674 3.09633C19.1905 2.87257 18.1198 2.75 17 2.75Z',
  d8: 'M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15ZM5.5 12C6.05228 12 6.5 12.4477 6.5 13V13.009C6.5 13.5613 6.05228 14.009 5.5 14.009C4.94772 14.009 4.5 13.5613 4.5 13.009V13C4.5 12.4477 4.94772 12 5.5 12ZM19.5 10.9922C19.5 10.4399 19.0523 9.99219 18.5 9.99219C17.9477 9.99219 17.5 10.4399 17.5 10.9922V11.0012C17.5 11.5535 17.9477 12.0012 18.5 12.0012C19.0523 12.0012 19.5 11.5535 19.5 11.0012V10.9922Z',
  d9: 'M12 4.5C10.6675 5.12236 8.91707 5.5 7 5.5C5.93408 5.5 4.5 5.5 2 4.5V19.5C4.5 20.5 5.93408 20.5 7 20.5C8.91707 20.5 10.6675 20.1224 12 19.5C13.3325 18.8776 15.0829 18.5 17 18.5C20 18.5 22 19.5 22 19.5V4.5C22 4.5 20 3.5 17 3.5C15.0829 3.5 13.3325 3.87764 12 4.5Z',
  d10: 'M22.75 4.03647L22.2169 3.7735C22.1469 3.7419 22.047 3.69853 21.9192 3.64739C21.6636 3.54516 21.2956 3.41159 20.831 3.27886C19.9028 3.01364 18.5827 2.75 17 2.75C14.9915 2.75 13.1298 3.14454 11.6826 3.82046C10.4648 4.38927 8.82565 4.75 7 4.75L6.98161 4.75C5.97319 4.75004 4.64464 4.75008 2.27854 3.80364L1.25 3.39223V20.0078L1.72146 20.1964C4.34095 21.2442 5.87882 21.25 7 21.25C9.00849 21.25 10.8702 20.8555 12.3174 20.1795C13.5352 19.6107 15.1744 19.25 17 19.25C18.4173 19.25 19.5972 19.4864 20.419 19.7211C20.8294 19.8384 21.1489 19.9548 21.3621 20.0401L22.75 20.7135V4.03647ZM12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75ZM6.5 12V14.009H4.5V12H6.5ZM19.5 12.0012V9.99219H17.5V12.0012H19.5Z',
} as const;

export const IconMoney04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-04-stroke-rounded IconMoney04StrokeRounded"
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

export const IconMoney04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-04-duotone-rounded IconMoney04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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

export const IconMoney04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-04-twotone-rounded IconMoney04TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconMoney04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-04-solid-rounded IconMoney04SolidRounded"
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

export const IconMoney04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-04-bulk-rounded IconMoney04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMoney04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-04-stroke-sharp IconMoney04StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoney04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-04-solid-sharp IconMoney04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoney04: TheIconSelfPack = {
  name: 'Money04',
  StrokeRounded: IconMoney04StrokeRounded,
  DuotoneRounded: IconMoney04DuotoneRounded,
  TwotoneRounded: IconMoney04TwotoneRounded,
  SolidRounded: IconMoney04SolidRounded,
  BulkRounded: IconMoney04BulkRounded,
  StrokeSharp: IconMoney04StrokeSharp,
  SolidSharp: IconMoney04SolidSharp,
};