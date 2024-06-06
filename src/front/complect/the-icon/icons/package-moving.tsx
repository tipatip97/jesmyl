import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 22C12.1818 22 11.4002 21.6588 9.83691 20.9764C8.01233 20.18 6.61554 19.5703 5.64648 19H2M13 22C13.8182 22 14.5998 21.6588 16.1631 20.9764C20.0544 19.2779 22 18.4286 22 17V6.5M13 22L13 11M4 6.5L4 9.5',
  d2: 'M9.32592 9.69138L6.40472 8.27785C4.80157 7.5021 4 7.11423 4 6.5C4 5.88577 4.80157 5.4979 6.40472 4.72215L9.32592 3.30862C11.1288 2.43621 12.0303 2 13 2C13.9697 2 14.8712 2.4362 16.6741 3.30862L19.5953 4.72215C21.1984 5.4979 22 5.88577 22 6.5C22 7.11423 21.1984 7.5021 19.5953 8.27785L16.6741 9.69138C14.8712 10.5638 13.9697 11 13 11C12.0303 11 11.1288 10.5638 9.32592 9.69138Z',
  d3: 'M18.1366 4.01563L7.86719 8.98485',
  d4: 'M2 13H5',
  d5: 'M2 16H5',
  d6: 'M22 17.1613C22 18.5438 20.0544 19.3657 16.1631 21.0095C14.5998 21.6698 13.8182 22 13 22C12.1818 22 11.4002 21.6698 9.83693 21.0095C5.94564 19.3657 4 18.5438 4 17.1613L4 7L13 11.3548L22 7V17.1613Z',
  d7: 'M13 3.15909C12.3303 3.15909 11.6847 3.44018 9.84245 4.31292L6.99428 5.6622C6.18359 6.04626 5.6757 6.28957 5.35735 6.5C5.6757 6.71043 6.18359 6.95374 6.99428 7.3378L8.06862 7.84675L15.7148 4.10386C14.2059 3.39461 13.613 3.15909 13 3.15909ZM17.9314 5.15325L10.2852 8.89613C11.7941 9.60539 12.387 9.84091 13 9.84091C13.6697 9.84091 14.3153 9.55982 16.1575 8.68708L19.0057 7.3378C19.8164 6.95374 20.3243 6.71043 20.6427 6.5C20.3243 6.28957 19.8164 6.04626 19.0057 5.6622L17.9314 5.15325ZM9.19088 2.50066C10.7555 1.7585 11.8275 1.25 13 1.25C14.1725 1.25 15.2445 1.7585 16.8091 2.50066C16.8742 2.53152 16.9401 2.56279 17.0069 2.59444L19.9212 3.97504C20.646 4.31831 21.285 4.62098 21.7346 4.91829C22.1847 5.21596 22.75 5.7042 22.75 6.5C22.75 7.2958 22.1847 7.78404 21.7346 8.08171C21.285 8.37902 20.646 8.68169 19.9212 9.02496L17.0069 10.4056C16.9401 10.4372 16.8742 10.4685 16.8091 10.4993C15.2445 11.2415 14.1725 11.75 13 11.75C11.8275 11.75 10.7555 11.2415 9.19089 10.4993C9.12582 10.4685 9.0599 10.4372 8.99309 10.4056L6.14491 9.05627C6.12279 9.04579 6.10075 9.03535 6.07878 9.02495C5.35402 8.68168 4.715 8.37902 4.26541 8.08171C3.81527 7.78404 3.25 7.2958 3.25 6.5C3.25 5.7042 3.81527 5.21596 4.26541 4.91829C4.715 4.62098 5.35402 4.31832 6.07878 3.97505C6.10075 3.96465 6.12279 3.95421 6.14491 3.94373L8.99309 2.59444C9.0599 2.56279 9.12581 2.53153 9.19088 2.50066Z',
  d8: 'M1.25 13C1.25 12.4477 1.69772 12 2.25 12H5.25C5.80228 12 6.25 12.4477 6.25 13C6.25 13.5523 5.80228 14 5.25 14H2.25C1.69772 14 1.25 13.5523 1.25 13ZM1.25 16C1.25 15.4477 1.69772 15 2.25 15H5.25C5.80228 15 6.25 15.4477 6.25 16C6.25 16.5523 5.80228 17 5.25 17H2.25C1.69772 17 1.25 16.5523 1.25 16ZM1.25 19C1.25 18.4477 1.69772 18 2.25 18H5.25C5.80228 18 6.25 18.4477 6.25 19C6.25 19.5523 5.80228 20 5.25 20H2.25C1.69772 20 1.25 19.5523 1.25 19Z',
  d9: 'M9.69413 21.7642C9.08112 21.5053 8.48739 21.2545 7.93014 21.0129C7.82067 20.9655 7.75 20.8575 7.75 20.7382V13.0009C7.75 11.6202 6.63071 10.5009 5.25 10.5009H3.55C3.38431 10.5009 3.25 10.3666 3.25 10.2009V6.50087C3.25 6.39206 3.27317 6.28866 3.31485 6.19534C3.36977 6.07236 3.52157 6.04519 3.64273 6.10402L6.7314 7.6036L9.6526 9.01714C11.5204 9.92097 12.2424 10.2509 13 10.2509C13.7576 10.2509 14.4796 9.92097 16.3474 9.01714L19.2686 7.6036L22.3573 6.10402C22.4784 6.04519 22.6302 6.07236 22.6851 6.19534C22.7268 6.28866 22.75 6.39206 22.75 6.50087V17.1622C22.75 18.2826 21.9327 19.0277 20.9267 19.6314C19.9083 20.2425 18.1989 20.9646 16.3058 21.7642C14.8868 22.3641 13.972 22.7509 13 22.7509C12.028 22.7509 11.1132 22.3641 9.69413 21.7642Z',
  d10: 'M8.06836 7.84762L15.7145 4.10474L17.9311 5.15412L10.2849 8.89701L8.06836 7.84762Z',
  d11: 'M1.25 12.9993C1.25 12.447 1.69772 11.9993 2.25 11.9993H5.25C5.80228 11.9993 6.25 12.447 6.25 12.9993C6.25 13.5516 5.80228 13.9993 5.25 13.9993H2.25C1.69772 13.9993 1.25 13.5516 1.25 12.9993ZM1.25 15.9993C1.25 15.447 1.69772 14.9993 2.25 14.9993H5.25C5.80228 14.9993 6.25 15.447 6.25 15.9993C6.25 16.5516 5.80228 16.9993 5.25 16.9993H2.25C1.69772 16.9993 1.25 16.5516 1.25 15.9993ZM1.25 18.9993C1.25 18.447 1.69772 17.9993 2.25 17.9993H5.25C5.80228 17.9993 6.25 18.447 6.25 18.9993C6.25 19.5516 5.80228 19.9993 5.25 19.9993H2.25C1.69772 19.9993 1.25 19.5516 1.25 18.9993Z',
  d12: 'M4.25 10.5001C3.7786 10.5001 3.54289 10.5001 3.39645 10.3536C3.25 10.2072 3.25 9.97147 3.25 9.50006V6.50006C3.25 5.70426 3.81527 5.21572 4.26541 4.91805C4.715 4.62074 5.35402 4.31808 6.07878 3.97481L9.19088 2.50042C10.7555 1.75826 11.8275 1.24976 13 1.24976C14.1725 1.24976 15.2445 1.75826 16.8091 2.50042L19.9213 3.97482C20.646 4.31808 21.285 4.62075 21.7346 4.91805C22.1847 5.21572 22.75 5.70426 22.75 6.50006V17.1614C22.75 18.2818 21.9327 19.0269 20.9267 19.6306C19.9083 20.2416 18.1989 20.9637 16.3058 21.7634C14.8868 22.3633 13.972 22.7501 13 22.7501C12.028 22.7501 11.1132 22.3633 9.69413 21.7634C9.23296 21.5686 8.78269 21.3784 8.35066 21.1933C8.06006 21.0688 7.91475 21.0065 7.83216 20.8813C7.74957 20.756 7.74957 20.5969 7.74957 20.2788V13.0001C7.74957 11.6193 6.63029 10.5001 5.24957 10.5001H4.25ZM13.0001 3.15887C12.3304 3.15887 11.6848 3.43996 9.84253 4.3127L6.99436 5.66199C6.18366 6.04604 5.67577 6.28935 5.35742 6.49978C5.67577 6.71021 6.18366 6.95352 6.99436 7.33758L10.2853 8.89592C11.7942 9.60517 12.387 9.84069 13.0001 9.84069C13.6698 9.84069 14.3154 9.55961 16.1576 8.68687L19.0058 7.33758C19.8165 6.95353 20.3244 6.71021 20.6427 6.49978C20.3244 6.28935 19.8165 6.04604 19.0058 5.66198L15.7149 4.10365C14.2059 3.3944 13.6131 3.15887 13.0001 3.15887Z',
  d13: 'M13 10L22 6L13 2L4 6L13 10Z',
  d14: 'M17.5 4L8.5 8',
  d15: 'M2 13H6',
  d16: 'M2 16H6',
  d17: 'M3.99475 6V10.5051M12.9851 10.0176V22M2 19.0034H6.27698L12.9483 21.978C12.9742 21.9895 13.0038 21.9895 13.0297 21.978L22 17.994L21.9773 6.00743',
  d18: 'M5.25 13.75H1.25L1.25 11.75H5.25V13.75Z',
  d19: 'M5.25 16.75H1.25L1.25 14.75H5.25V16.75Z',
  d20: 'M5.25 19.75H1.25L1.25 17.75H5.25V19.75Z',
  d21: 'M3.25 6C3.25 5.62457 3.47692 5.28435 3.82902 5.13188L12.604 1.33188C12.8561 1.22271 13.1439 1.22271 13.396 1.33188L22.171 5.13188C22.5231 5.28435 22.75 5.62457 22.75 6V18.4874L13.3046 22.6854C13.1107 22.7715 12.8893 22.7715 12.6954 22.6854L6.75 20.043V10.25H3.25V6ZM6.62566 6L8.61244 6.86037L14.9868 4.09997L13 3.2396L6.62566 6ZM17.3874 5.13957L11.0131 7.89997L13 8.7604L19.3743 6L17.3874 5.13957Z',
} as const;

export const IconPackageMovingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-moving-stroke-rounded IconPackageMovingStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPackageMovingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-moving-duotone-rounded IconPackageMovingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconPackageMovingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-moving-twotone-rounded IconPackageMovingTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconPackageMovingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-moving-solid-rounded IconPackageMovingSolidRounded"
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageMovingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-moving-bulk-rounded IconPackageMovingBulkRounded"
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageMovingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-moving-stroke-sharp IconPackageMovingStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageMovingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-moving-solid-sharp IconPackageMovingSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPackageMoving: TheIconSelfPack = {
  name: 'PackageMoving',
  StrokeRounded: IconPackageMovingStrokeRounded,
  DuotoneRounded: IconPackageMovingDuotoneRounded,
  TwotoneRounded: IconPackageMovingTwotoneRounded,
  SolidRounded: IconPackageMovingSolidRounded,
  BulkRounded: IconPackageMovingBulkRounded,
  StrokeSharp: IconPackageMovingStrokeSharp,
  SolidSharp: IconPackageMovingSolidSharp,
};