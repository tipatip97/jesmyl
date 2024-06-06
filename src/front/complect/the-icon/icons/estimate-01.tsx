import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 8.75556V6.8C18 4.53726 18 3.40589 17.2247 2.70294C16.4494 2 15.2016 2 12.7059 2H8.29412C5.79845 2 4.55061 2 3.77531 2.70294C3 3.40589 3 4.53726 3 6.8V13.2C3 15.4627 3 16.5941 3.77531 17.2971C4.55061 18 5.79845 18 8.29412 18H12.7059',
  d2: 'M6 6H15',
  d3: 'M6 10H7',
  d4: 'M10 10H11',
  d5: 'M14 10H15',
  d6: 'M6 14H7',
  d7: 'M10 14H11',
  d8: 'M20.7057 15.0043C20.4315 14.3089 19.7265 13.4939 18.1202 13.4939C16.2537 13.4939 15.4684 14.349 15.309 14.8061C15.0604 15.4174 15.0369 16.7356 17.2978 16.8114C19.9979 16.9019 21.1279 17.2682 20.9886 18.7482C20.8492 20.2282 19.293 20.4336 18.1201 20.5136C16.9153 20.4794 15.4252 20.2274 15 18.9491M17.9938 12V13.4364M18.0025 20.5089V22',
  d9: 'M12.7059 2H8.29412C5.79845 2 4.55061 2 3.77531 2.70294C3 3.40589 3 4.53726 3 6.8V13.2C3 15.4627 3 16.5941 3.77531 17.2971C4.55061 18 5.79845 18 8.29412 18H12C14.8284 18 16.2426 18 17.1213 17.1213C18 16.2426 18 14.8284 18 12V6.8C18 4.53726 18 3.40589 17.2247 2.70294C16.4494 2 15.2016 2 12.7059 2Z',
  d10: 'M17.9773 8.75556V6.8C17.9773 4.53726 17.9773 3.40589 17.2031 2.70294C16.429 2 15.183 2 12.691 2H8.28577C5.79381 2 4.54782 2 3.77367 2.70294C2.99951 3.40589 2.99951 4.53726 2.99951 6.8V13.2C2.99951 15.4627 2.99951 16.5941 3.77367 17.2971C4.54782 18 5.79381 18 8.28577 18H12.691',
  d11: 'M5.99463 6H14.9813',
  d12: 'M5.99463 10H6.99314',
  d13: 'M9.98877 10H10.9873',
  d14: 'M13.9829 10H14.9814',
  d15: 'M5.99463 14H6.99314',
  d16: 'M9.98877 14H10.9873',
  d17: 'M20.7065 15.0043C20.4328 14.3089 19.7287 13.4939 18.1248 13.4939C16.2612 13.4939 15.477 14.349 15.3179 14.8061C15.0696 15.4174 15.0461 16.7356 17.3037 16.8114C19.9998 16.9019 21.1281 17.2682 20.989 18.7482C20.8498 20.2282 19.2959 20.4336 18.1248 20.5136C16.9218 20.4794 15.4338 20.2274 15.0093 18.9491M17.9986 12V13.4364M18.0073 20.5089V22',
  d18: 'M17.9779 10C16.9287 10 16.0682 10.8079 15.9846 11.8355C15.6087 11.9694 15.251 12.1436 14.9228 12.3585C14.0728 12.9153 13.2072 13.9168 13.2072 15.3148C13.2072 15.8169 13.3027 16.3768 13.5901 16.9183C13.6722 17.0729 13.7651 17.2171 13.8674 17.3511C13.3965 17.6746 13.0874 18.1864 13.0159 18.7483C12.7114 18.75 12.3914 18.75 12.0554 18.75H12.0549H8.94513C7.57755 18.75 6.47522 18.75 5.60825 18.6335C4.70814 18.5125 3.95027 18.2536 3.34835 17.6517C2.74644 17.0497 2.48754 16.2919 2.36653 15.3918C2.24997 14.5248 2.24998 13.4225 2.25 12.0549V12.0549L2.25 7.94512V7.9451C2.24998 6.57753 2.24997 5.4752 2.36653 4.60825C2.48754 3.70814 2.74644 2.95027 3.34835 2.34835C3.95027 1.74643 4.70814 1.48754 5.60825 1.36652C6.47521 1.24996 7.57753 1.24998 8.94511 1.25H12.0549C13.4225 1.24998 14.5248 1.24996 15.3918 1.36652C16.2919 1.48754 17.0497 1.74643 17.6517 2.34835C18.2536 2.95027 18.5125 3.70814 18.6335 4.60825C18.75 5.47522 18.75 6.57754 18.75 7.94513V10.1545C18.5124 10.055 18.2516 10 17.9779 10ZM5.25 6C5.25 5.58578 5.58579 5.25 6 5.25L15 5.25C15.4142 5.25 15.75 5.58578 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75L6 6.75C5.58579 6.75 5.25 6.41421 5.25 6ZM6 9.25C5.58579 9.25 5.25 9.58578 5.25 10C5.25 10.4142 5.58579 10.75 6 10.75H7C7.41421 10.75 7.75 10.4142 7.75 10C7.75 9.58578 7.41421 9.25 7 9.25H6ZM9.25 10C9.25 9.58578 9.58579 9.25 10 9.25H11C11.4142 9.25 11.75 9.58578 11.75 10C11.75 10.4142 11.4142 10.75 11 10.75H10C9.58579 10.75 9.25 10.4142 9.25 10ZM14 9.25C13.5858 9.25 13.25 9.58578 13.25 10C13.25 10.4142 13.5858 10.75 14 10.75H15C15.4142 10.75 15.75 10.4142 15.75 10C15.75 9.58578 15.4142 9.25 15 9.25H14ZM5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H7C7.41421 13.25 7.75 13.5858 7.75 14C7.75 14.4142 7.41421 14.75 7 14.75H6C5.58579 14.75 5.25 14.4142 5.25 14ZM10 13.25C9.58579 13.25 9.25 13.5858 9.25 14C9.25 14.4142 9.58579 14.75 10 14.75H11C11.4142 14.75 11.75 14.4142 11.75 14C11.75 13.5858 11.4142 13.25 11 13.25H10Z',
  d19: 'M17.9773 11.25C18.3915 11.25 18.7273 11.5858 18.7273 12V12.8068C19.2421 12.8859 19.7215 13.046 20.1331 13.2748C20.7307 13.6068 21.2486 14.1233 21.4311 14.8062C21.538 15.2064 21.3003 15.6175 20.9001 15.7244C20.4999 15.8313 20.0888 15.5936 19.9819 15.1934C19.9367 15.0242 19.7731 14.7908 19.4045 14.5859C19.0446 14.3859 18.547 14.25 17.9773 14.25C17.337 14.25 16.7917 14.4214 16.4291 14.6589C16.0599 14.9008 15.9566 15.1487 15.9566 15.3148C15.9566 15.471 15.9856 15.567 16.0186 15.6291C16.0496 15.6875 16.1043 15.7549 16.2212 15.8248C16.4841 15.982 17.009 16.1204 17.9773 16.1204C19.0189 16.1204 19.9398 16.2488 20.6201 16.6426C20.9753 16.8483 21.2695 17.1291 21.4695 17.4956C21.6676 17.8588 21.75 18.2635 21.75 18.6852C21.75 19.6604 21.2114 20.3439 20.4675 20.7405C19.9636 21.0092 19.3589 21.1548 18.7273 21.2155V22C18.7273 22.4142 18.3915 22.75 17.9773 22.75C17.5631 22.75 17.2273 22.4142 17.2273 22V21.2012C16.6609 21.1265 16.1334 20.9677 15.6822 20.7378C15.0513 20.4163 14.4829 19.907 14.2798 19.2094C14.1641 18.8117 14.3926 18.3955 14.7903 18.2797C15.188 18.1639 15.6043 18.3925 15.7201 18.7902C15.7651 18.945 15.9401 19.1857 16.3632 19.4013C16.7717 19.6094 17.3349 19.75 17.9773 19.75C18.754 19.75 19.3691 19.6263 19.7618 19.4169C20.1119 19.2302 20.25 19.0063 20.25 18.6852C20.25 18.4587 20.2064 18.3125 20.1526 18.2139C20.1007 18.1186 20.017 18.0267 19.8685 17.9407C19.5412 17.7512 18.9508 17.6204 17.9773 17.6204C16.9306 17.6204 16.07 17.4821 15.4514 17.1121C15.1275 16.9184 14.8673 16.6596 14.6936 16.3323C14.522 16.0088 14.4566 15.6598 14.4566 15.3148C14.4566 14.4786 14.9735 13.8192 15.6072 13.4041C16.0637 13.1051 16.6219 12.8999 17.2273 12.8068V12C17.2273 11.5858 17.5631 11.25 17.9773 11.25Z',
  d20: 'M17.9779 10C16.9287 10 16.0682 10.8079 15.9846 11.8355C15.6087 11.9694 15.251 12.1436 14.9228 12.3585C14.0728 12.9153 13.2071 13.9168 13.2071 15.3148C13.2071 15.8169 13.3027 16.3768 13.5901 16.9183C13.6722 17.0729 13.7651 17.2171 13.8674 17.3511C13.3965 17.6746 13.0874 18.1864 13.0159 18.7483C12.7113 18.75 12.3911 18.75 12.0549 18.75H8.94513C7.57754 18.75 6.47522 18.75 5.60825 18.6335C4.70814 18.5125 3.95027 18.2536 3.34835 17.6517C2.74644 17.0497 2.48754 16.2919 2.36653 15.3918C2.24997 14.5248 2.24998 13.4225 2.25 12.0549V7.94513C2.24998 6.57755 2.24997 5.47521 2.36653 4.60825C2.48754 3.70814 2.74644 2.95027 3.34835 2.34835C3.95027 1.74643 4.70814 1.48754 5.60825 1.36652C6.47521 1.24996 7.57753 1.24998 8.94511 1.25H12.0549C13.4225 1.24998 14.5248 1.24996 15.3918 1.36652C16.2919 1.48754 17.0497 1.74643 17.6517 2.34835C18.2536 2.95027 18.5125 3.70814 18.6335 4.60825C18.75 5.47522 18.75 6.57754 18.75 7.94513V10.1545C18.5124 10.055 18.2516 10 17.9779 10Z',
  d21: 'M5.25 6C5.25 5.58579 5.58579 5.25 6 5.25L15 5.25C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75L6 6.75C5.58579 6.75 5.25 6.41421 5.25 6Z',
  d22: 'M5.25 10C5.25 9.58579 5.58579 9.25 6 9.25H7C7.41421 9.25 7.75 9.58579 7.75 10C7.75 10.4142 7.41421 10.75 7 10.75H6C5.58579 10.75 5.25 10.4142 5.25 10Z',
  d23: 'M9.25 10C9.25 9.58579 9.58579 9.25 10 9.25H11C11.4142 9.25 11.75 9.58579 11.75 10C11.75 10.4142 11.4142 10.75 11 10.75H10C9.58579 10.75 9.25 10.4142 9.25 10Z',
  d24: 'M13.25 10C13.25 9.58579 13.5858 9.25 14 9.25H15C15.4142 9.25 15.75 9.58579 15.75 10C15.75 10.4142 15.4142 10.75 15 10.75H14C13.5858 10.75 13.25 10.4142 13.25 10Z',
  d25: 'M5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H7C7.41421 13.25 7.75 13.5858 7.75 14C7.75 14.4142 7.41421 14.75 7 14.75H6C5.58579 14.75 5.25 14.4142 5.25 14Z',
  d26: 'M9.25 14C9.25 13.5858 9.58579 13.25 10 13.25H11C11.4142 13.25 11.75 13.5858 11.75 14C11.75 14.4142 11.4142 14.75 11 14.75H10C9.58579 14.75 9.25 14.4142 9.25 14Z',
  d27: 'M18 8.75556V2H3V18H12.7059',
  d28: 'M6 6L15 6',
  d29: 'M21 14H18M15 20H18M18 14H15V17H21V20H18M18 14V12M18 20V22',
  d30: 'M18.25 10.25H16.75V12.25H13.75V18.75H1.75L1.75 1.25L18.25 1.25L18.25 10.25ZM4.75 5.25L15.25 5.25V6.75L4.75 6.75V5.25ZM7.25 9.25H4.75L4.75 10.75H7.25V9.25ZM8.75 9.25L11.25 9.25V10.75H8.75V9.25ZM15.25 9.25H12.75V10.75H15.25V9.25ZM4.75 13.25H7.25V14.75H4.75L4.75 13.25ZM11.25 13.25H8.75V14.75L11.25 14.75V13.25Z',
  d31: 'M19.25 11.25V13.25H22.25V14.75H16.25V16.25H22.25V20.75H19.25V22.75H17.75V20.75H14.75V19.25H20.75V17.75H14.75V13.25H17.75V11.25H19.25Z',
};

export const IconEstimate01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="estimate-01-stroke-rounded IconEstimate01StrokeRounded"
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

export const IconEstimate01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="estimate-01-duotone-rounded IconEstimate01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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

export const IconEstimate01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="estimate-01-twotone-rounded IconEstimate01TwotoneRounded"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEstimate01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="estimate-01-solid-rounded IconEstimate01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEstimate01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="estimate-01-bulk-rounded IconEstimate01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
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
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEstimate01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="estimate-01-stroke-sharp IconEstimate01StrokeSharp"
    >
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d28} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconEstimate01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="estimate-01-solid-sharp IconEstimate01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEstimate01: TheIconSelfPack = {
  name: 'Estimate01',
  StrokeRounded: IconEstimate01StrokeRounded,
  DuotoneRounded: IconEstimate01DuotoneRounded,
  TwotoneRounded: IconEstimate01TwotoneRounded,
  SolidRounded: IconEstimate01SolidRounded,
  BulkRounded: IconEstimate01BulkRounded,
  StrokeSharp: IconEstimate01StrokeSharp,
  SolidSharp: IconEstimate01SolidSharp,
};