import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 2V3M7 5.5V6.5M7 9V10M17 2V3M17 5.5V6.5M17 9V10M12 2V3M12 5.5V6.5',
  d2: 'M2 12V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16V12',
  d3: 'M2 14.8717C4.26409 16.7863 6.1743 15.7292 8.0217 14.833C9.59668 14.069 11.126 13.4219 12.79 14.833C16.0467 17.5465 18.9092 14.7526 22 14.1976',
  d4: 'M8 21.9997H16C18.8284 21.9997 20.2426 21.9997 21.1213 21.121C22 20.2423 22 18.8281 22 15.9997L22 14.1973C21.0992 14.359 20.2179 14.7109 19.3405 15.0613C18.0583 15.5732 16.7846 16.0818 15.4713 15.9886C14.7813 17.1903 13.4852 17.9997 12 17.9997C10.0664 17.9997 8.45319 16.6277 8.0809 14.804C8.06117 14.8136 8.04144 14.8231 8.0217 14.8327C7.9482 14.8684 7.87459 14.9043 7.80086 14.9402C6.02173 15.8083 4.174 16.7098 2 14.8714V15.9997C2 18.8281 2 20.2423 2.87868 21.121C3.75736 21.9997 5.17157 21.9997 8 21.9997Z',
  d5: 'M12 2V3M12 6V7',
  d6: 'M7 2V3M7 5.5V6.5M7 9V10M17 2V3M17 5.5V6.5M17 9V10',
  d7: 'M7 1.25C7.41421 1.25 7.75 1.58579 7.75 2V3C7.75 3.41421 7.41421 3.75 7 3.75C6.58579 3.75 6.25 3.41421 6.25 3V2C6.25 1.58579 6.58579 1.25 7 1.25ZM12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM17 1.25C17.4142 1.25 17.75 1.58579 17.75 2V3C17.75 3.41421 17.4142 3.75 17 3.75C16.5858 3.75 16.25 3.41421 16.25 3V2C16.25 1.58579 16.5858 1.25 17 1.25ZM7 4.75C7.41421 4.75 7.75 5.08579 7.75 5.5V6.5C7.75 6.91421 7.41421 7.25 7 7.25C6.58579 7.25 6.25 6.91421 6.25 6.5V5.5C6.25 5.08579 6.58579 4.75 7 4.75ZM12 4.75C12.4142 4.75 12.75 5.08579 12.75 5.5V6.5C12.75 6.91421 12.4142 7.25 12 7.25C11.5858 7.25 11.25 6.91421 11.25 6.5V5.5C11.25 5.08579 11.5858 4.75 12 4.75ZM17 4.75C17.4142 4.75 17.75 5.08579 17.75 5.5V6.5C17.75 6.91421 17.4142 7.25 17 7.25C16.5858 7.25 16.25 6.91421 16.25 6.5V5.5C16.25 5.08579 16.5858 4.75 17 4.75ZM7 8.25C7.41421 8.25 7.75 8.58579 7.75 9V10C7.75 10.4142 7.41421 10.75 7 10.75C6.58579 10.75 6.25 10.4142 6.25 10V9C6.25 8.58579 6.58579 8.25 7 8.25ZM17 8.25C17.4142 8.25 17.75 8.58579 17.75 9V10C17.75 10.4142 17.4142 10.75 17 10.75C16.5858 10.75 16.25 10.4142 16.25 10V9C16.25 8.58579 16.5858 8.25 17 8.25Z',
  d8: 'M2.22728 11.25C2.76701 11.25 3.20455 11.6791 3.20455 12.2083V15.2485C3.20455 15.444 3.20455 15.5417 3.26249 15.6208C3.32042 15.7 3.40444 15.7266 3.57248 15.7798C5.17705 16.2884 6.61752 15.5142 8.02171 14.833C9.59669 14.069 11.126 13.4219 12.79 14.833C15.4737 17.0691 17.8898 15.5652 20.3866 14.6562C20.5868 14.5833 20.687 14.5468 20.7412 14.4694C20.7955 14.3919 20.7955 14.2881 20.7955 14.0805V12.2083C20.7955 11.6791 21.233 11.25 21.7727 11.25C22.3125 11.25 22.75 11.6791 22.75 12.2083V16.1093C22.75 17.407 22.7501 18.4771 22.6339 19.324C22.512 20.2132 22.2463 20.9985 21.6051 21.6272C20.9639 22.256 20.1631 22.5166 19.2563 22.6362C18.3927 22.7501 17.3014 22.75 15.9781 22.75H8.0219C6.69858 22.75 5.60735 22.7501 4.74369 22.6362C3.83695 22.5166 3.03615 22.256 2.39495 21.6272C1.75375 20.9985 1.48797 20.2132 1.36606 19.324C1.24994 18.4771 1.24997 17.407 1.25 16.1093L1.25 12.2083C1.25 11.6791 1.68754 11.25 2.22728 11.25Z',
  d9: 'M10.2266 12.7738C11.3591 12.6578 12.4959 12.9565 13.5851 13.8757C14.5549 14.68 15.3974 14.8236 16.2428 14.7213C16.3286 14.7109 16.4141 14.6981 16.4997 14.6831C16.6245 14.6612 16.719 14.5593 16.7304 14.4335C16.7434 14.2907 16.75 14.1461 16.75 14C16.75 11.3766 14.6174 9.25 11.9867 9.25C9.53084 9.25 7.50908 11.1033 7.25117 13.484C7.23492 13.634 7.39114 13.7368 7.52757 13.6715C8.38712 13.2602 9.26837 12.872 10.2266 12.7738Z',
  d10: 'M7 1.25C7.41421 1.25 7.75 1.58579 7.75 2V3C7.75 3.41421 7.41421 3.75 7 3.75C6.58579 3.75 6.25 3.41421 6.25 3V2C6.25 1.58579 6.58579 1.25 7 1.25ZM17 1.25C17.4142 1.25 17.75 1.58579 17.75 2V3C17.75 3.41421 17.4142 3.75 17 3.75C16.5858 3.75 16.25 3.41421 16.25 3V2C16.25 1.58579 16.5858 1.25 17 1.25ZM7 4.75C7.41421 4.75 7.75 5.08579 7.75 5.5V6.5C7.75 6.91421 7.41421 7.25 7 7.25C6.58579 7.25 6.25 6.91421 6.25 6.5V5.5C6.25 5.08579 6.58579 4.75 7 4.75ZM17 4.75C17.4142 4.75 17.75 5.08579 17.75 5.5V6.5C17.75 6.91421 17.4142 7.25 17 7.25C16.5858 7.25 16.25 6.91421 16.25 6.5V5.5C16.25 5.08579 16.5858 4.75 17 4.75ZM7 8.25C7.41421 8.25 7.75 8.58579 7.75 9V10C7.75 10.4142 7.41421 10.75 7 10.75C6.58579 10.75 6.25 10.4142 6.25 10V9C6.25 8.58579 6.58579 8.25 7 8.25ZM17 8.25C17.4142 8.25 17.75 8.58579 17.75 9V10C17.75 10.4142 17.4142 10.75 17 10.75C16.5858 10.75 16.25 10.4142 16.25 10V9C16.25 8.58579 16.5858 8.25 17 8.25Z',
  d11: 'M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM12 4.75C12.4142 4.75 12.75 5.08579 12.75 5.5V6.5C12.75 6.91421 12.4142 7.25 12 7.25C11.5858 7.25 11.25 6.91421 11.25 6.5V5.5C11.25 5.08579 11.5858 4.75 12 4.75Z',
  d12: 'M7 2V3.5M7 5V6.5M7 8V9.5M17 2V3.5M17 5V6.5M17 8V9.5M12 2V3.5M12 5V6.5',
  d13: 'M2 12V22H22V12',
  d14: 'M6 3V1.5H8V3H6ZM11 3V1.5H13V3H11ZM16 3V1.5H18V3H16ZM6 6V4.5H8V6H6ZM11 6V4.5H13V6H11ZM16 6V4.5H18V6H16ZM6 9V7.5H8V9H6ZM16 9V7.5H18V9H16Z',
  d15: 'M1.25 21.5V11.5H3.20455V15.1414C4.95837 15.9063 6.51104 15.0658 8.0217 14.333C9.59668 13.569 11.126 12.9219 12.79 14.333C15.62 16.691 18.1523 14.8902 20.7955 14.0136V11.5H22.75V21.5C22.75 22.0523 22.3125 22.5 21.7727 22.5H2.22727C1.68754 22.5 1.25 22.0523 1.25 21.5Z',
  d16: 'M7.25342 13.3162C7.32628 13.281 7.40046 13.245 7.47605 13.2083C8.24422 12.8357 9.20774 12.3804 10.2446 12.2739C11.374 12.1578 12.5077 12.4565 13.5938 13.3757C14.6736 14.2738 15.6127 14.3627 16.6162 14.1608C16.6464 14.1548 16.6766 14.1484 16.7069 14.1418C16.7353 13.9319 16.7499 13.7177 16.7499 13.5C16.7499 10.8766 14.6233 8.75 11.9999 8.75C9.43811 8.75 7.34997 10.778 7.25342 13.3162Z',
} as const;

export const IconSubmergeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="submerge-stroke-rounded IconSubmergeStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="14" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSubmergeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="submerge-duotone-rounded IconSubmergeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="14" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSubmergeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="submerge-twotone-rounded IconSubmergeTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="14" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconSubmergeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="submerge-solid-rounded IconSubmergeSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const IconSubmergeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="submerge-bulk-rounded IconSubmergeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSubmergeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="submerge-stroke-sharp IconSubmergeStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="14" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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

export const IconSubmergeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="submerge-solid-sharp IconSubmergeSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSubmerge: TheIconSelfPack = {
  name: 'Submerge',
  StrokeRounded: IconSubmergeStrokeRounded,
  DuotoneRounded: IconSubmergeDuotoneRounded,
  TwotoneRounded: IconSubmergeTwotoneRounded,
  SolidRounded: IconSubmergeSolidRounded,
  BulkRounded: IconSubmergeBulkRounded,
  StrokeSharp: IconSubmergeStrokeSharp,
  SolidSharp: IconSubmergeSolidSharp,
};