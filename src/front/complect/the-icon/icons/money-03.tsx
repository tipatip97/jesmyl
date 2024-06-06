import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z',
  d2: 'M19 11.1415C18.6749 11.0944 18.341 11.0586 18 11.0347M6 12.9653C5.65897 12.9415 5.32511 12.9056 5 12.8585',
  d3: 'M12 19.5C10.6675 20.1224 8.91707 20.5 7 20.5C5.93408 20.5 4.91969 20.3833 4 20.1726C2.49957 19.8289 2 18.9264 2 17.386V6.61397C2 5.62914 3.04003 4.95273 4 5.1726C4.91969 5.38325 5.93408 5.5 7 5.5C8.91707 5.5 10.6675 5.12236 12 4.5C13.3325 3.87764 15.0829 3.5 17 3.5C18.0659 3.5 19.0803 3.61675 20 3.8274C21.5817 4.18968 22 5.12036 22 6.61397V17.386C22 18.3709 20.96 19.0473 20 18.8274C19.0803 18.6167 18.0659 18.5 17 18.5C15.0829 18.5 13.3325 18.8776 12 19.5Z',
  d4: 'M7 20.5C8.91707 20.5 10.6675 20.1224 12 19.5C13.3325 18.8776 15.0829 18.5 17 18.5C18.0659 18.5 19.0803 18.6167 20 18.8274C20.96 19.0473 22 18.3709 22 17.386V6.61397C22 5.12036 21.5817 4.18968 20 3.8274C19.0803 3.61675 18.0659 3.5 17 3.5C15.0829 3.5 13.3325 3.87764 12 4.5C10.6675 5.12236 8.91707 5.5 7 5.5C5.93408 5.5 4.91969 5.38325 4 5.1726C3.04003 4.95273 2 5.62914 2 6.61397V17.386C2 18.9264 2.49957 19.8289 4 20.1726C4.91969 20.3833 5.93408 20.5 7 20.5ZM12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z',
  d5: 'M19 11.1449C18.6749 11.0979 18.341 11.062 18 11.0381M6 12.9688C5.65897 12.9449 5.32511 12.909 5 12.8619',
  d6: 'M19 11.142C18.6749 11.0949 18.341 11.0591 18 11.0352M6 12.9658C5.65897 12.942 5.32511 12.9061 5 12.859',
  d7: 'M11.6826 3.82046C13.1298 3.14454 14.9915 2.75 17 2.75C18.1198 2.75 19.1905 2.87257 20.1674 3.09633C21.0845 3.30637 21.7825 3.71217 22.2218 4.38745C22.6428 5.03453 22.75 5.81712 22.75 6.61397V17.386C22.75 18.9532 21.159 19.8623 19.8326 19.5585C18.9701 19.3609 18.012 19.25 17 19.25C15.1744 19.25 13.5352 19.6107 12.3174 20.1795C10.8702 20.8555 9.00849 21.25 7 21.25C5.88016 21.25 4.80949 21.1274 3.83255 20.9037C2.95689 20.7031 2.26524 20.3111 1.81644 19.6488C1.38242 19.0082 1.25 18.2216 1.25 17.386V6.61397C1.25 5.04678 2.841 4.13772 4.16745 4.44153C5.02989 4.63907 5.988 4.75 7 4.75C8.82565 4.75 10.4648 4.38927 11.6826 3.82046ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM6.05242 12.2171C6.46563 12.246 6.77717 12.6044 6.74827 13.0176C6.71937 13.4308 6.36098 13.7424 5.94777 13.7135C5.58853 13.6883 5.23627 13.6505 4.89261 13.6007C4.48267 13.5414 4.19848 13.1609 4.25784 12.751C4.3172 12.3411 4.69765 12.0569 5.10758 12.1162C5.41415 12.1606 5.7296 12.1946 6.05242 12.2171ZM19.1076 10.3992C19.5175 10.4586 19.8017 10.839 19.7424 11.249C19.683 11.6589 19.3025 11.9431 18.8926 11.8838C18.586 11.8394 18.2706 11.8054 17.9478 11.7829C17.5346 11.754 17.223 11.3956 17.2519 10.9824C17.2808 10.5692 17.6392 10.2576 18.0524 10.2865C18.4117 10.3116 18.7639 10.3495 19.1076 10.3992Z',
  d8: 'M17 2.75C14.9915 2.75 13.1298 3.14454 11.6826 3.82046C10.4648 4.38927 8.82565 4.75 7 4.75C5.988 4.75 5.02989 4.63907 4.16745 4.44153C2.841 4.13772 1.25 5.04678 1.25 6.61397V17.386C1.25 18.2216 1.38242 19.0082 1.81644 19.6488C2.26524 20.3111 2.95689 20.7031 3.83255 20.9037C4.80949 21.1274 5.88016 21.25 7 21.25C9.00849 21.25 10.8702 20.8555 12.3174 20.1795C13.5352 19.6107 15.1744 19.25 17 19.25C18.012 19.25 18.9701 19.3609 19.8326 19.5585C21.159 19.8623 22.75 18.9532 22.75 17.386V6.61397C22.75 5.81712 22.6428 5.03453 22.2218 4.38745C21.7825 3.71217 21.0845 3.30637 20.1674 3.09633C19.1905 2.87257 18.1198 2.75 17 2.75Z',
  d9: 'M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM6.05242 12.2171C6.46563 12.246 6.77717 12.6044 6.74827 13.0176C6.71937 13.4308 6.36098 13.7424 5.94777 13.7135C5.58853 13.6883 5.23627 13.6505 4.89261 13.6007C4.48267 13.5414 4.19848 13.1609 4.25784 12.751C4.3172 12.3411 4.69765 12.0569 5.10758 12.1162C5.41415 12.1606 5.7296 12.1946 6.05242 12.2171ZM19.1076 10.3992C19.5175 10.4586 19.8017 10.839 19.7424 11.249C19.683 11.6589 19.3025 11.9431 18.8926 11.8838C18.586 11.8394 18.2706 11.8054 17.9478 11.7829C17.5346 11.754 17.223 11.3956 17.2519 10.9824C17.2808 10.5692 17.6392 10.2576 18.0524 10.2865C18.4117 10.3116 18.7639 10.3495 19.1076 10.3992Z',
  d10: 'M12 4.5C10.6675 5.12236 8.91707 5.5 7 5.5C5.93408 5.5 4.5 5.5 2 4.5V19.5C4.5 20.5 5.93408 20.5 7 20.5C8.91707 20.5 10.6675 20.1224 12 19.5C13.3325 18.8776 15.0829 18.5 17 18.5C20 18.5 22 19.5 22 19.5V4.5C22 4.5 20 3.5 17 3.5C15.0829 3.5 13.3325 3.87764 12 4.5Z',
  d11: 'M22.2169 3.7735L22.75 4.03647V20.7135L21.3621 20.0401C21.1489 19.9548 20.8294 19.8384 20.419 19.7211C19.5972 19.4864 18.4173 19.25 17 19.25C15.1744 19.25 13.5352 19.6107 12.3174 20.1795C10.8702 20.8555 9.00849 21.25 7 21.25C5.87882 21.25 4.34095 21.2442 1.72146 20.1964L1.25 20.0078V3.39223L2.27854 3.80364C4.64464 4.75008 5.97319 4.75004 6.98161 4.75L7 4.75C8.82565 4.75 10.4648 4.38927 11.6826 3.82046C13.1298 3.14454 14.9915 2.75 17 2.75C18.5827 2.75 19.9028 3.01364 20.831 3.27886C21.2956 3.41159 21.6636 3.54516 21.9192 3.64739C22.047 3.69853 22.1469 3.7419 22.2169 3.7735ZM8.75 12.0001C8.75 10.2052 10.2051 8.75012 12 8.75012C13.7949 8.75012 15.25 10.2052 15.25 12.0001C15.25 13.795 13.7949 15.2501 12 15.2501C10.2051 15.2501 8.75 13.795 8.75 12.0001ZM6.05246 12.217L6.80063 12.2693L6.69598 13.7656L5.94781 13.7133C5.58857 13.6882 5.23631 13.6503 4.89265 13.6006L4.15039 13.4931L4.36536 12.0086L5.10762 12.1161C5.41419 12.1605 5.72964 12.1944 6.05246 12.217ZM19.1076 10.3991L19.8499 10.5066L19.6349 11.9911L18.8926 11.8836C18.5861 11.8392 18.2706 11.8053 17.9478 11.7827L17.1996 11.7304L17.3043 10.234L18.0525 10.2863C18.4117 10.3115 18.764 10.3493 19.1076 10.3991Z',
} as const;

export const IconMoney03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-03-stroke-rounded IconMoney03StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoney03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-03-duotone-rounded IconMoney03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoney03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-03-twotone-rounded IconMoney03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoney03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-03-solid-rounded IconMoney03SolidRounded"
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

export const IconMoney03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-03-bulk-rounded IconMoney03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoney03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-03-stroke-sharp IconMoney03StrokeSharp"
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
        strokeLinecap="square" 
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

export const IconMoney03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-03-solid-sharp IconMoney03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoney03: TheIconSelfPack = {
  name: 'Money03',
  StrokeRounded: IconMoney03StrokeRounded,
  DuotoneRounded: IconMoney03DuotoneRounded,
  TwotoneRounded: IconMoney03TwotoneRounded,
  SolidRounded: IconMoney03SolidRounded,
  BulkRounded: IconMoney03BulkRounded,
  StrokeSharp: IconMoney03StrokeSharp,
  SolidSharp: IconMoney03SolidSharp,
};