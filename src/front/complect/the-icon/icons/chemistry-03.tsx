import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 3V13C5 16.7712 5 18.6569 6.17157 19.8284C7.34315 21 9.22876 21 13 21H21',
  d2: 'M3 9L11 9M20 9H16',
  d3: 'M10.5 4L16.5 4',
  d4: 'M11.7 4V8.95233C11.7 9.35352 11.4544 9.70728 11.1119 9.91618C9.84338 10.6899 9 12.0617 9 13.625C9 16.0412 11.0147 18 13.5 18C15.9853 18 18 16.0412 18 13.625C18 12.0617 17.1566 10.6899 15.8881 9.91618C15.5456 9.70728 15.3 9.35352 15.3 8.95233V4',
  d5: 'M13.5 18C15.9853 18 18 16.0412 18 13.625C18 11.831 16.8893 10.2891 15.3 9.61402V4H11.7V9.61402C10.1107 10.2891 9 11.831 9 13.625C9 16.0412 11.0147 18 13.5 18Z',
  d6: 'M5 2C5.55228 2 6 2.44772 6 3V8L11 8C11.5523 8 12 8.44772 12 9C12 9.55228 11.5523 10 11 10L6 10V13C6 14.9139 6.00212 16.2487 6.13753 17.2558C6.26907 18.2342 6.50966 18.7523 6.87868 19.1213C7.2477 19.4903 7.76579 19.7309 8.74416 19.8625C9.75129 19.9979 11.0861 20 13 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H12.9269C11.1034 22 9.63363 22 8.47766 21.8446C7.27752 21.6833 6.26702 21.3381 5.46447 20.5355C4.66191 19.733 4.31672 18.7225 4.15536 17.5223C3.99995 16.3664 3.99997 14.8966 4 13.0732L4 10H3C2.44772 10 2 9.55228 2 9C2 8.44771 2.44772 8 3 8H4V3C4 2.44772 4.44772 2 5 2ZM15 9C15 8.44772 15.4477 8 16 8L20 8C20.5523 8 21 8.44772 21 9C21 9.55229 20.5523 10 20 10L16 10C15.4477 10 15 9.55229 15 9Z',
  d7: 'M10.5 3C9.94772 3 9.5 3.44772 9.5 4C9.5 4.55228 9.94772 5 10.5 5H10.95V8.95233C10.95 9.03459 10.8945 9.17031 10.7214 9.27588C9.24476 10.1765 8.25 11.7829 8.25 13.625C8.25 16.4752 10.6206 18.75 13.5 18.75C16.3794 18.75 18.75 16.4752 18.75 13.625C18.75 11.7829 17.7552 10.1765 16.2786 9.27588C16.1055 9.17031 16.05 9.03459 16.05 8.95233V5H16.5C17.0523 5 17.5 4.55228 17.5 4C17.5 3.44772 17.0523 3 16.5 3H10.5Z',
  d8: 'M10.5 3C9.94772 3 9.5 3.44772 9.5 4C9.5 4.55228 9.94772 5 10.5 5H16.5C17.0523 5 17.5 4.55228 17.5 4C17.5 3.44772 17.0523 3 16.5 3H10.5Z',
  d9: 'M6 3C6 2.44772 5.55228 2 5 2C4.44772 2 4 2.44772 4 3V8H3C2.44772 8 2 8.44771 2 9C2 9.55228 2.44772 10 3 10H4L4 13.0732C3.99997 14.8966 3.99995 16.3664 4.15536 17.5223C4.31672 18.7225 4.66191 19.733 5.46447 20.5355C6.26702 21.3381 7.27752 21.6833 8.47766 21.8446C9.63363 22 11.1034 22 12.9269 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H13C11.0861 20 9.75129 19.9979 8.74416 19.8625C7.76579 19.7309 7.2477 19.4903 6.87868 19.1213C6.50966 18.7523 6.26907 18.2342 6.13753 17.2558C6.00212 16.2487 6 14.9139 6 13V10L9.7889 10C10.0704 9.72538 10.3832 9.48212 10.7214 9.27588C10.8945 9.17031 10.95 9.03459 10.95 8.95233V8L6 8V3Z',
  d10: 'M17.2111 10C16.9296 9.72538 16.6168 9.48212 16.2786 9.27588C16.1055 9.17031 16.05 9.03459 16.05 8.95233V8L20 8C20.5523 8 21 8.44772 21 9C21 9.55229 20.5523 10 20 10L17.2111 10Z',
  d11: 'M2 9L11.5 9M22 9L15.5 9',
  d12: 'M5 3V21H22',
  d13: 'M10 4L17 4',
  d14: 'M11.7 4V9.61402C10.1107 10.2891 9 11.831 9 13.625C9 16.0412 11.0147 18 13.5 18C15.9853 18 18 16.0412 18 13.625C18 11.831 16.8893 10.2891 15.3 9.61402V4',
  d15: 'M22 9.5L15.5 9.5L15.5 7.5L22 7.5L22 9.5ZM11.5 9.5L2 9.5L2 7.5L11.5 7.5L11.5 9.5Z',
  d16: 'M4 20.5V2.5H6V19.5H22V21.5H5C4.44772 21.5 4 21.0523 4 20.5Z',
  d17: 'M16.052 4.5H17.002V2.5H10.002V4.5H10.952V8.64425C9.3492 9.51548 8.25195 11.189 8.25195 13.125C8.25195 15.9752 10.6225 18.25 13.502 18.25C16.3814 18.25 18.752 15.9752 18.752 13.125C18.752 11.189 17.6547 9.51548 16.052 8.64425V4.5Z',
} as const;

export const IconChemistry03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chemistry-03-stroke-rounded IconChemistry03StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChemistry03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chemistry-03-duotone-rounded IconChemistry03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChemistry03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chemistry-03-twotone-rounded IconChemistry03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChemistry03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chemistry-03-solid-rounded IconChemistry03SolidRounded"
    >
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

export const IconChemistry03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chemistry-03-bulk-rounded IconChemistry03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChemistry03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chemistry-03-stroke-sharp IconChemistry03StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChemistry03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chemistry-03-solid-sharp IconChemistry03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChemistry03: TheIconSelfPack = {
  name: 'Chemistry03',
  StrokeRounded: IconChemistry03StrokeRounded,
  DuotoneRounded: IconChemistry03DuotoneRounded,
  TwotoneRounded: IconChemistry03TwotoneRounded,
  SolidRounded: IconChemistry03SolidRounded,
  BulkRounded: IconChemistry03BulkRounded,
  StrokeSharp: IconChemistry03StrokeSharp,
  SolidSharp: IconChemistry03SolidSharp,
};