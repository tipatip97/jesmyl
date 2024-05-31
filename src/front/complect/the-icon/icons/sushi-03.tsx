import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 9.5C5 10.8807 7.01472 12 9.5 12C11.9853 12 14 10.8807 14 9.5C14 8.11929 11.9853 7 9.5 7C7.01472 7 5 8.11929 5 9.5Z',
  d2: 'M14 16.6471C14 17.9466 11.9853 19 9.5 19C7.01472 19 5 17.9466 5 16.6471V9.5M14 9.5V13.5',
  d3: 'M9.5 9.5L9.49102 9.5',
  d4: 'M2 18L22 11',
  d5: 'M2 14L5 12.65M22 5L14 8.6',
  d6: 'M9.5 19C7.01472 19 5 17.9466 5 16.6471V9.5C6.5 11 10.4 13.1 14 9.5V13.5V16.6471C14 17.9466 11.9853 19 9.5 19Z',
  d7: 'M10.5 9.625C10.5 10.1773 10.0523 10.625 9.5 10.625L9.49102 10.625C8.93873 10.625 8.49102 10.1773 8.49102 9.625C8.49102 9.07271 8.93873 8.625 9.49102 8.625L9.5 8.625C10.0523 8.625 10.5 9.07272 10.5 9.625Z',
  d8: 'M4.25 16.2784V9.625C4.25 8.53859 5.03379 7.71272 5.95379 7.20162C6.89919 6.67639 8.15444 6.375 9.5 6.375C10.8456 6.375 12.1008 6.67639 13.0462 7.20162C13.9662 7.71272 14.75 8.53859 14.75 9.625V12.6034L4.25 16.2784ZM4.80628 18.2027C5.11937 18.5721 5.53435 18.8724 5.9705 19.1005C6.91229 19.5929 8.16138 19.875 9.5 19.875C10.8386 19.875 12.0877 19.5929 13.0295 19.1005C13.9354 18.6268 14.75 17.8414 14.75 16.7721V14.7223L4.80628 18.2027ZM12.3177 8.51285C13.0264 8.90656 13.25 9.3307 13.25 9.625C13.25 9.9193 13.0264 10.3434 12.3177 10.7371C11.6345 11.1167 10.6397 11.375 9.5 11.375C8.50274 11.375 7.61648 11.1773 6.95275 10.8735C6.85794 10.8302 6.76766 10.7846 6.68225 10.7371C5.97357 10.3434 5.75 9.9193 5.75 9.625C5.75 9.3307 5.97357 8.90656 6.68225 8.51285C7.36553 8.13325 8.36028 7.875 9.5 7.875C10.6397 7.875 11.6345 8.13325 12.3177 8.51285Z',
  d9: 'M4.25 16.2784L1.66992 17.1814C1.14864 17.3639 0.873967 17.9343 1.05641 18.4556C1.23886 18.9769 1.80934 19.2516 2.33062 19.0691L4.80628 18.2027C4.46904 17.8047 4.25 17.3266 4.25 16.7721V16.2784ZM14.75 14.7223V12.6034L21.6699 10.1814C22.1912 9.99897 22.7617 10.2736 22.9441 10.7949C23.1266 11.3162 22.8519 11.8867 22.3306 12.0691L14.75 14.7223Z',
  d10: 'M22.9122 4.71488C23.1388 5.21852 22.9143 5.81053 22.4106 6.03717L14.4106 9.63717C13.907 9.86381 13.315 9.63925 13.0883 9.13561C12.8617 8.63197 13.0862 8.03996 13.5899 7.81333L21.5899 4.21333C22.0935 3.98669 22.6855 4.21124 22.9122 4.71488ZM5.91217 12.3649C6.13881 12.8685 5.91425 13.4605 5.41061 13.6872L2.41061 15.0372C1.90697 15.2638 1.31496 15.0393 1.08833 14.5356C0.861687 14.032 1.08624 13.44 1.58988 13.2133L4.58988 11.8633C5.09352 11.6367 5.68553 11.8612 5.91217 12.3649Z',
  d11: 'M22.4106 6.03717C22.9143 5.81053 23.1388 5.21852 22.9122 4.71488C22.6855 4.21124 22.0935 3.98669 21.5899 4.21333L13.7934 7.72173C14.3196 8.18175 14.7015 8.77536 14.7457 9.48637L22.4106 6.03717Z',
  d12: 'M4.25 12.0163V14.2094L2.41061 15.0372C1.90697 15.2638 1.31496 15.0393 1.08833 14.5356C0.861687 14.032 1.08624 13.44 1.58988 13.2133L4.25 12.0163Z',
  d13: 'M22.9441 10.7949C23.1266 11.3162 22.8519 11.8867 22.3306 12.0691L2.33062 19.0691C1.80934 19.2516 1.23886 18.9769 1.05641 18.4556C0.873967 17.9343 1.14864 17.3639 1.66992 17.1814L21.6699 10.1814C22.1912 9.99897 22.7617 10.2736 22.9441 10.7949Z',
  d14: 'M4.2941 16.4033L1.81006 17.2813L2.30281 18.7031L4.6874 17.8602C4.44436 17.5057 4.2941 17.0961 4.2941 16.6336V16.4033Z',
  d15: 'M14.7353 14.3086V12.7126L21.698 10.2515L22.1907 11.6733L14.7353 14.3086Z',
  d16: 'M11.0066 9.45641C11.0066 10.011 10.3418 10.4607 9.5217 10.4607H9.50836C8.68826 10.4607 8.02344 10.011 8.02344 9.45641C8.02344 8.90177 8.68826 8.45215 9.50836 8.45215L9.5217 8.45215C10.3418 8.45215 11.0066 8.90177 11.0066 9.45641Z',
  d17: 'M13.0413 7.02252C12.1012 6.49506 10.853 6.19238 9.51501 6.19238C8.17699 6.19238 6.92878 6.49506 5.98867 7.02252C5.07383 7.53581 4.29443 8.36519 4.29443 9.45623V16.4034L14.7356 12.7127V9.45623C14.7356 8.36519 13.9562 7.53581 13.0413 7.02252ZM11.698 8.14577C11.116 7.86175 10.3433 7.69878 9.51501 7.69878C8.68671 7.69878 7.91401 7.86175 7.33204 8.14577C6.76571 8.42216 6.28322 8.86875 6.28322 9.45623C6.28322 10.0437 6.76571 10.4903 7.33204 10.7667C7.91401 11.0507 8.68671 11.2137 9.51501 11.2137C10.3433 11.2137 11.116 11.0507 11.698 10.7667C12.2643 10.4903 12.7468 10.0437 12.7468 9.45623C12.7468 8.86875 12.2643 8.42216 11.698 8.14577Z',
  d18: 'M4.68773 17.8604C5.00901 18.329 5.49243 18.7013 6.00529 18.9721C6.94181 19.4666 8.18389 19.7499 9.51501 19.7499C10.8461 19.7499 12.0882 19.4666 13.0247 18.9721C13.9256 18.4964 14.7356 17.7076 14.7356 16.6338V14.3087L4.68773 17.8604Z',
  d19: 'M22.25 5.62371L14.2948 9.23905L13.6827 7.86534L21.6379 4.25L22.25 5.62371ZM5.34528 13.3063L2.3621 14.6621L1.75 13.2884L4.73319 11.9326L5.34528 13.3063Z',
} as const;

export const IconSushi03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-03-stroke-rounded IconSushi03StrokeRounded"
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

export const IconSushi03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-03-duotone-rounded IconSushi03DuotoneRounded"
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

export const IconSushi03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-03-twotone-rounded IconSushi03TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSushi03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-03-solid-rounded IconSushi03SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSushi03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-03-bulk-rounded IconSushi03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
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

export const IconSushi03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-03-stroke-sharp IconSushi03StrokeSharp"
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
        strokeLinejoin="round" 
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

export const IconSushi03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-03-solid-sharp IconSushi03SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfSushi03: TheIconSelfPack = {
  name: 'Sushi03',
  StrokeRounded: IconSushi03StrokeRounded,
  DuotoneRounded: IconSushi03DuotoneRounded,
  TwotoneRounded: IconSushi03TwotoneRounded,
  SolidRounded: IconSushi03SolidRounded,
  BulkRounded: IconSushi03BulkRounded,
  StrokeSharp: IconSushi03StrokeSharp,
  SolidSharp: IconSushi03SolidSharp,
};