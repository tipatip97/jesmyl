import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.50586 4.94531H16.0059C16.8343 4.94531 17.5059 5.61688 17.5059 6.44531V7.94531',
  d2: 'M15.0059 17.9453L14.1488 15.9453M14.1488 15.9453L12.5983 12.3277C12.4992 12.0962 12.2653 11.9453 12.0059 11.9453C11.7465 11.9453 11.5126 12.0962 11.4135 12.3277L9.863 15.9453M14.1488 15.9453H9.863M9.00586 17.9453L9.863 15.9453',
  d3: 'M18.497 2L6.30767 2.00002C5.81071 2.00002 5.30241 2.07294 4.9007 2.36782C3.62698 3.30279 2.64539 5.38801 4.62764 7.2706C5.18421 7.7992 5.96217 7.99082 6.72692 7.99082H18.2835C19.077 7.99082 20.5 8.10439 20.5 10.5273V17.9812C20.5 20.2007 18.7103 22 16.5026 22H7.47246C5.26886 22 3.66619 20.4426 3.53959 18.0713L3.5061 5.16638',
  d4: 'M20.5 14V10C20.5 8.89543 19.6046 8 18.5 8H6.5C4.84315 8 3.5 6.65685 3.5 5V14C3.5 17.7712 3.5 19.6569 4.67157 20.8284C5.84315 22 7.72876 22 11.5 22H12.5C16.2712 22 18.1569 22 19.3284 20.8284C20.5 19.6569 20.5 17.7712 20.5 14Z',
  d5: 'M7.5 5H16C16.8284 5 17.5 5.67157 17.5 6.5V8',
  d6: 'M19.3284 20.8284L18.7981 20.2981L18.7981 20.2981L19.3284 20.8284ZM18.5 2.75C18.9142 2.75 19.25 2.41421 19.25 2C19.25 1.58579 18.9142 1.25 18.5 1.25V2.75ZM19.75 10V14H21.25V10H19.75ZM12.5 21.25H11.5V22.75H12.5V21.25ZM4.25 14V5H2.75V14H4.25ZM11.5 21.25C9.59318 21.25 8.23851 21.2484 7.21085 21.1102C6.20476 20.975 5.62511 20.7213 5.2019 20.2981L4.14124 21.3588C4.88961 22.1071 5.83855 22.4392 7.01098 22.5969C8.16182 22.7516 9.63558 22.75 11.5 22.75V21.25ZM2.75 14C2.75 15.8644 2.74841 17.3382 2.90313 18.489C3.06076 19.6614 3.39288 20.6104 4.14124 21.3588L5.2019 20.2981C4.77869 19.8749 4.52502 19.2952 4.38976 18.2892C4.25159 17.2615 4.25 15.9068 4.25 14H2.75ZM19.75 14C19.75 15.9068 19.7484 17.2615 19.6102 18.2892C19.475 19.2952 19.2213 19.8749 18.7981 20.2981L19.8588 21.3588C20.6071 20.6104 20.9392 19.6614 21.0969 18.489C21.2516 17.3382 21.25 15.8644 21.25 14H19.75ZM12.5 22.75C14.3644 22.75 15.8382 22.7516 16.989 22.5969C18.1614 22.4392 19.1104 22.1071 19.8588 21.3588L18.7981 20.2981C18.3749 20.7213 17.7952 20.975 16.7892 21.1102C15.7615 21.2484 14.4068 21.25 12.5 21.25V22.75ZM18.5 1.25H6.5V2.75H18.5V1.25ZM6.5 8.75H18.5V7.25H6.5V8.75ZM2.75 5C2.75 7.07107 4.42893 8.75 6.5 8.75V7.25C5.25736 7.25 4.25 6.24264 4.25 5H2.75ZM6.5 1.25C4.42893 1.25 2.75 2.92893 2.75 5H4.25C4.25 3.75736 5.25736 2.75 6.5 2.75V1.25ZM21.25 10C21.25 8.48122 20.0188 7.25 18.5 7.25V8.75C19.1904 8.75 19.75 9.30964 19.75 10H21.25Z',
  d7: 'M15 18L14.1429 16M9 18L9.85714 16M9.85714 16L11.4076 12.3824C11.5067 12.1509 11.7406 12 12 12C12.2594 12 12.4933 12.1509 12.5924 12.3824L14.1429 16M9.85714 16H14.1429',
  d8: 'M15 18L14.1429 16M14.1429 16L12.5924 12.3824C12.4933 12.1509 12.2594 12 12 12C11.7406 12 11.5067 12.1509 11.4076 12.3824L9.85714 16M14.1429 16H9.85714M9 18L9.85714 16',
  d9: 'M18.4955 2.00002H6.30767C5.81071 2.00002 5.30241 2.07294 4.9007 2.36782C3.62698 3.30279 2.64539 5.38801 4.62764 7.2706C5.18421 7.7992 5.96217 7.99082 6.72692 7.99082H18.2835C19.077 7.99082 20.5 8.10439 20.5 10.5273V17.9812C20.5 20.2007 18.7103 22 16.5026 22H7.47246C5.26886 22 3.66619 20.4426 3.53959 18.0713L3.5061 5.16638',
  d10: 'M6.74219 1C4.53305 1 2.74219 2.79086 2.74219 5C2.74219 5.07917 2.74449 5.15779 2.74902 5.23582V14.0564C2.74901 15.8942 2.749 17.3498 2.90216 18.489C3.05979 19.6614 3.3919 20.6104 4.14027 21.3588C4.88863 22.1071 5.83758 22.4392 7.01 22.5969C8.14921 22.75 9.60487 22.75 11.4426 22.75H12.5555C14.3932 22.75 15.8488 22.75 16.988 22.5969C18.1605 22.4392 19.1094 22.1071 19.8578 21.3588C20.6061 20.6104 20.9383 19.6614 21.0959 18.489C21.2491 17.3498 21.249 15.8942 21.249 14.0564V10C21.249 8.48122 20.0178 7.25 18.499 7.25L18.499 6.5C18.499 5.11929 17.3797 4 15.999 4H7.49902C6.94674 4 6.49902 4.44772 6.49902 5C6.49902 5.55228 6.94674 6 7.49902 6H15.999C16.2752 6 16.499 6.22386 16.499 6.5V7H6.74219C5.63762 7 4.74219 6.10457 4.74219 5C4.74219 3.89543 5.63762 3 6.74219 3H18.7422C19.2945 3 19.7422 2.55228 19.7422 2C19.7422 1.44772 19.2945 1 18.7422 1H6.74219ZM11.9992 11.25C11.4516 11.25 10.9394 11.569 10.7174 12.0869L8.30986 17.7046C8.14669 18.0853 8.32305 18.5262 8.70378 18.6894C9.0845 18.8525 9.52541 18.6762 9.68857 18.2954L10.3509 16.75H13.6475L14.3099 18.2954C14.473 18.6762 14.9139 18.8525 15.2947 18.6894C15.6754 18.5262 15.8517 18.0853 15.6886 17.7046L13.281 12.0869C13.059 11.569 12.5468 11.25 11.9992 11.25ZM11.9992 12.9039L13.0047 15.25H10.9938L11.9992 12.9039Z',
  d11: 'M2.74219 5C2.74219 2.79086 4.53305 1 6.74219 1H18.7422C19.2945 1 19.7422 1.44772 19.7422 2C19.7422 2.55228 19.2945 3 18.7422 3H6.74219C5.63762 3 4.74219 3.89543 4.74219 5C4.74219 6.10457 5.63762 7 6.74219 7H16.499V6.5C16.499 6.22386 16.2752 6 15.999 6H7.49902C6.94674 6 6.49902 5.55228 6.49902 5C6.49902 4.44772 6.94674 4 7.49902 4H15.999C17.3797 4 18.499 5.11929 18.499 6.5L18.499 7.25C20.0178 7.25 21.249 8.48122 21.249 10V14.0564C21.249 15.8942 21.2491 17.3498 21.0959 18.489C20.9383 19.6614 20.6061 20.6104 19.8578 21.3588C19.1094 22.1071 18.1605 22.4392 16.988 22.5969C15.8488 22.75 14.3932 22.75 12.5555 22.75H11.4426C9.60487 22.75 8.14921 22.75 7.01 22.5969C5.83758 22.4392 4.88863 22.1071 4.14027 21.3588C3.3919 20.6104 3.05979 19.6614 2.90216 18.489C2.749 17.3498 2.74901 15.8942 2.74902 14.0564V5.23582C2.74449 5.15779 2.74219 5.07917 2.74219 5Z',
  d12: 'M10.7184 12.0869C10.9404 11.569 11.4526 11.25 12.0002 11.25C12.5478 11.25 13.06 11.569 13.282 12.0869L15.6896 17.7046C15.8527 18.0853 15.6764 18.5262 15.2956 18.6894C14.9149 18.8525 14.474 18.6762 14.3108 18.2954L13.6485 16.75H10.3519L9.68955 18.2954C9.52638 18.6762 9.08548 18.8525 8.70475 18.6894C8.32403 18.5262 8.14767 18.0853 8.31083 17.7046L10.7184 12.0869ZM10.9947 15.25H13.0056L12.0002 12.9039L10.9947 15.25Z',
  d13: 'M15.012 18.0202L14.0111 16.0179M14.0111 16.0179L12.0089 12.0127L10.0068 16.0179M14.0111 16.0179H10.0068M9.00586 18.0202L10.0068 16.0179',
  d14: 'M20.5073 2.01172H6.63336C5.39064 2.01172 3.35413 2.90456 3.52826 5.27178M3.52826 5.27178C3.7024 7.639 5.68366 8.02543 6.63336 8.02543H17.5103M3.52826 5.27178V18.5609C3.41306 19.6249 3.84452 21.8425 6.58271 22.0127H20.4804V8.02543H17.5103M17.5103 8.02543V5.00705C17.5103 5.00153 17.5058 4.99706 17.5003 4.99706H6.50778',
  d15: 'M6.64266 1.25C4.49204 1.25 2.74849 2.99968 2.74805 5.15831L2.74854 18.841C2.74862 20.9999 4.49227 22.75 6.64315 22.75H21.248V7.11367H18.3253V5.15911C18.3253 4.61937 17.8894 4.18183 17.3516 4.18183H6.64146V6.13639H16.378V7.11367H6.64266C5.56744 7.11367 4.69578 6.23898 4.69535 5.15992V5.15847C4.6957 4.07927 5.56743 3.20456 6.64266 3.20456H21.248V1.25H6.64266ZM12.6712 11.6643C12.5441 11.4103 12.2845 11.2498 12.0004 11.2498C11.7163 11.2498 11.4566 11.4103 11.3296 11.6643L7.99414 18.3352L9.33578 19.006L10.4638 16.75H13.537L14.665 19.006L16.0066 18.3352L12.6712 11.6643ZM12.0004 13.6768L12.787 15.25H11.2138L12.0004 13.6768Z',
};

export const IconBook03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-03-stroke-rounded IconBook03StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBook03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-03-duotone-rounded IconBook03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
        fill="var(--icon-fill)" 
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

export const IconBook03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-03-twotone-rounded IconBook03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBook03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-03-solid-rounded IconBook03SolidRounded"
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

export const IconBook03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-03-bulk-rounded IconBook03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBook03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-03-stroke-sharp IconBook03StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBook03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-03-solid-sharp IconBook03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBook03: TheIconSelfPack = {
  name: 'Book03',
  StrokeRounded: IconBook03StrokeRounded,
  DuotoneRounded: IconBook03DuotoneRounded,
  TwotoneRounded: IconBook03TwotoneRounded,
  SolidRounded: IconBook03SolidRounded,
  BulkRounded: IconBook03BulkRounded,
  StrokeSharp: IconBook03StrokeSharp,
  SolidSharp: IconBook03SolidSharp,
};