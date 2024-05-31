import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.9995 4.50146H20.9995M14.9995 4.50146C14.9995 3.80123 16.9938 2.49299 17.4995 2.00146M14.9995 4.50146C14.9995 5.20169 16.9938 6.50993 17.4995 7.00146',
  d2: 'M15.3913 21.9975C15.3395 20.0835 15.4684 19.853 15.6052 19.4272C15.7419 19.0015 16.6982 17.466 17.0366 16.369C18.1313 12.8197 17.111 12.0648 15.7507 11.0583C14.2422 9.94208 11.3968 9.37679 9.98573 9.49918V3.74572C9.98573 2.78239 9.20481 2.00146 8.24148 2.00146C7.27816 2.00146 6.49723 2.78239 6.49723 3.74572V9.96558M6.49774 21.9983V20.9849C6.43328 20.0405 5.49529 18.923 4.32672 17.3162C3.12509 15.5755 2.86688 14.6968 3.05591 13.8843C3.15329 13.469 3.40594 12.7827 4.64647 11.6099L6.49723 9.96558M6.49723 14.0318V9.96558',
  d3: 'M16.4983 17.6892C17.2055 16.2125 18.1731 13.3226 16.8209 11.9618C14.6893 9.81667 11.7081 9.42404 9.99986 9.5V3.75C9.99986 2.7835 9.21635 2 8.24986 2C7.28336 2 6.49986 2.7835 6.49986 3.75V10.0001C6.47655 10.0177 3.62164 12.1753 3.12367 13.6086C2.67793 14.8916 3.53229 16.0336 4.17457 17.0914C4.6719 17.9105 6.5 19.9316 6.5 21.0049V22H15.3917V20.382C15.3917 19.4564 16.1158 18.488 16.4983 17.6892Z',
  d4: 'M15 4.5H21M15 4.5C15 3.79977 16.9943 2.49153 17.5 2M15 4.5C15 5.20023 16.9943 6.50847 17.5 7',
  d5: 'M15.3913 21.999C15.3395 20.085 15.4684 19.8545 15.6052 19.4287C15.7419 19.003 16.6982 17.4675 17.0366 16.3705C18.1313 12.8212 17.111 12.0663 15.7507 11.0598C14.2422 9.94355 11.3968 9.37826 9.98573 9.50065V3.74719C9.98573 2.78386 9.20481 2.00293 8.24148 2.00293C7.27816 2.00293 6.49723 2.78386 6.49723 3.74719V9.96705M6.49723 9.96705L4.64647 11.6114C3.40594 12.7842 3.15329 13.4705 3.05591 13.8858C2.86688 14.6983 3.12509 15.577 4.32672 17.3177C5.49529 18.9245 6.43328 20.042 6.49774 20.9864V21.9998M6.49723 9.96705V14.0333',
  d6: 'M15 4.50171H21M15 4.50171C15 3.80148 16.9943 2.49324 17.5 2.00171M15 4.50171C15 5.20194 16.9943 6.51018 17.5 7.00171',
  d7: 'M15.3913 21.9977C15.3395 20.0837 15.4684 19.8532 15.6052 19.4274C15.7419 19.0017 16.6982 17.4662 17.0366 16.3692C18.1313 12.8199 17.111 12.065 15.7507 11.0585C14.2422 9.94233 11.3968 9.37704 9.98573 9.49943V3.74597C9.98573 2.78264 9.20481 2.00171 8.24148 2.00171C7.27816 2.00171 6.49723 2.78264 6.49723 3.74597V9.96583M6.49723 9.96583L4.64647 11.6101C3.40594 12.7829 3.15329 13.4692 3.05591 13.8845C2.86688 14.697 3.12509 15.5757 4.32672 17.3164C5.49529 18.9232 6.43328 20.0407 6.49774 20.9851V21.9986M6.49723 9.96583V14.032',
  d8: 'M4.3555 10.723C4.85568 10.2601 5.33142 9.86839 5.62499 9.6343V3.75C5.62499 2.36929 6.74428 1.25 8.12499 1.25C9.5057 1.25 10.625 2.36929 10.625 3.75V8.74751C12.4889 8.81064 15.194 9.38616 17.2281 11.4332C18.164 12.3751 18.2194 13.7529 18.0487 14.8931C17.8725 16.0699 17.4221 17.2359 17.0499 18.0131C16.9423 18.2378 16.4673 19.1093 16.3475 19.3235C16.1311 19.7563 16.0169 20.1001 16.0169 20.382V20.382C16.0169 20.6473 16.0169 20.918 15.9998 21.1214C15.9813 21.3409 15.939 21.5809 15.8147 21.8165C15.6502 22.1284 15.3953 22.3833 15.0833 22.5479C14.8477 22.6721 14.6078 22.7145 14.3883 22.7329C14.1848 22.75 13.9412 22.75 13.6759 22.75H7.37023C6.40644 22.75 5.62513 21.9687 5.62513 21.0049C5.62513 20.919 5.57861 20.7219 5.41284 20.395C5.2571 20.088 5.03613 19.7424 4.78446 19.3828C4.56059 19.063 4.32444 18.7488 4.10227 18.4532L4.10221 18.4531C3.86815 18.1414 3.37331 17.428 3.22572 17.185C2.95733 16.7547 2.63832 16.2433 2.42278 15.7201C2.14204 15.0386 1.98739 14.2344 2.29034 13.3624C2.46011 12.8738 2.80241 12.3863 3.15787 11.9613C3.52383 11.5239 3.9531 11.0953 4.3555 10.723Z',
  d9: 'M20.875 5.50586C21.4273 5.50586 21.875 5.05814 21.875 4.50586C21.875 3.95357 21.4273 3.50586 20.875 3.50586L18.375 3.50586L18.375 2.9116C18.3751 2.73596 18.3753 2.52031 18.3532 2.34387L18.3528 2.34053C18.337 2.21408 18.2652 1.63804 17.6996 1.36368C17.1327 1.08872 16.6326 1.39065 16.5244 1.45597L16.0559 1.79511C15.6801 2.08975 15.1656 2.49545 14.7746 2.87588C14.5795 3.06571 14.3783 3.28297 14.2194 3.51388C14.0782 3.71914 13.875 4.06933 13.875 4.5C13.875 4.93067 14.0782 5.28086 14.2194 5.48612C14.3783 5.71703 14.5795 5.93429 14.7746 6.12412C15.1656 6.50455 15.6801 6.91025 16.0559 7.20488L16.5244 7.54403C16.6326 7.60935 17.1328 7.91128 17.6996 7.63632C18.2652 7.36196 18.337 6.78592 18.3528 6.65947L18.3532 6.65613C18.3753 6.47969 18.3751 6.26403 18.375 6.0884L18.375 5.50586L20.875 5.50586Z',
  d10: 'M15.3917 22V20C15.3917 20 16.1158 18.488 16.4983 17.6892C17.2055 16.2125 18.1731 13.3226 16.8209 11.9618C14.6893 9.81667 11.7081 9.42404 9.99986 9.5V3.75C9.99986 2.7835 9.21635 2 8.24986 2C7.28336 2 6.49986 2.7835 6.49986 3.75V14M6.5 22V20.5C6.5 20.5 4.6719 17.9105 4.17457 17.0914C3.53229 16.0336 2.67793 14.8916 3.12367 13.6086C3.62368 12.1694 6.5 10 6.5 10',
  d11: 'M21 4.5H15.7125M17.5 2L15 4.5L17.5 7',
  d12: 'M6.00013 20.7375L5.84259 20.5131C5.66289 20.2568 5.41797 19.9062 5.15732 19.5298C4.64248 18.7863 4.04651 17.9136 3.78363 17.4807C3.72705 17.3875 3.66538 17.2886 3.60079 17.1851L3.60072 17.185C3.33233 16.7547 3.01332 16.2433 2.79778 15.7201C2.51704 15.0386 2.36239 14.2344 2.66534 13.3624C2.83576 12.8719 3.18012 12.3824 3.53741 11.9559C3.90532 11.5168 4.33673 11.0868 4.74046 10.7138C5.14591 10.3391 5.53363 10.0124 5.81941 9.77981C5.88517 9.72627 5.9457 9.67759 5.99999 9.6343V3.75C5.99999 2.36929 7.11928 1.25 8.49999 1.25C9.8807 1.25 11 2.36929 11 3.75V8.74751C12.8639 8.81064 15.569 9.38616 17.6031 11.4332C18.539 12.3751 18.5944 13.7529 18.4237 14.8931C18.2475 16.0699 17.7971 17.2359 17.4249 18.0131L16.3919 20.1703V22.75H6.00013V20.7375Z',
  d13: 'M17.9144 5.45711L18.7073 6.25L17.293 7.66421L14.0859 4.45711L17.293 1.25L18.7073 2.66421L17.9144 3.45711H21.5002V5.45711H17.9144Z',
} as const;

export const IconSwipeLeft02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-02-stroke-rounded IconSwipeLeft02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSwipeLeft02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-02-duotone-rounded IconSwipeLeft02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
    </TheIconWrapper>
  );
};

export const IconSwipeLeft02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-02-twotone-rounded IconSwipeLeft02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconSwipeLeft02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-02-solid-rounded IconSwipeLeft02SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeLeft02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-02-bulk-rounded IconSwipeLeft02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeLeft02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-02-stroke-sharp IconSwipeLeft02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeLeft02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-02-solid-sharp IconSwipeLeft02SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSwipeLeft02: TheIconSelfPack = {
  name: 'SwipeLeft02',
  StrokeRounded: IconSwipeLeft02StrokeRounded,
  DuotoneRounded: IconSwipeLeft02DuotoneRounded,
  TwotoneRounded: IconSwipeLeft02TwotoneRounded,
  SolidRounded: IconSwipeLeft02SolidRounded,
  BulkRounded: IconSwipeLeft02BulkRounded,
  StrokeSharp: IconSwipeLeft02StrokeSharp,
  SolidSharp: IconSwipeLeft02SolidSharp,
};