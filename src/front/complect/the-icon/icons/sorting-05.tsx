import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 10L18 10',
  d2: 'M11 14H16',
  d3: 'M11 18H14',
  d4: 'M11 6H21',
  d5: 'M7 18.8125C6.60678 19.255 5.56018 21 5 21M3 18.8125C3.39322 19.255 4.43982 21 5 21M5 21L5 15',
  d6: 'M3 5.1875C3.39322 4.74501 4.43982 3 5 3M7 5.1875C6.60678 4.74501 5.56018 3 5 3M5 3L5 9',
  d7: 'M5.84702 18.0667L6.82995 18.0667C6.83564 18.0667 6.84197 18.0666 6.84888 18.0666C6.92044 18.0664 7.05386 18.0661 7.17178 18.0829C7.30457 18.1018 7.69077 18.1788 7.89747 18.5603C8.10275 18.9391 7.94682 19.278 7.88408 19.3937C7.8296 19.4941 7.75126 19.5961 7.70983 19.65C7.70581 19.6553 7.70215 19.66 7.69888 19.6643C7.44864 19.9921 7.03557 20.5164 6.6222 20.9648C6.41754 21.1868 6.19413 21.4107 5.97745 21.5856C5.86966 21.6726 5.74386 21.7636 5.60693 21.8367C5.48561 21.9015 5.26896 22 5 22C4.73104 22 4.51439 21.9015 4.39307 21.8367C4.25614 21.7636 4.13034 21.6726 4.02254 21.5856C3.80587 21.4107 3.58246 21.1868 3.3778 20.9648C2.96443 20.5164 2.55136 19.9921 2.30112 19.6643C2.29785 19.66 2.29418 19.6553 2.29017 19.65C2.24874 19.5961 2.1704 19.4941 2.11592 19.3937C2.05317 19.278 1.89725 18.9391 2.10253 18.5603C2.30923 18.1788 2.69543 18.1018 2.82822 18.0829C2.94614 18.0661 3.07956 18.0664 3.15112 18.0666C3.15803 18.0666 3.16436 18.0667 3.17005 18.0667L4.15298 18.0667L4.15298 14.8C4.15298 14.3582 4.53221 14 5 14C5.46779 14 5.84702 14.3582 5.84702 14.8L5.84702 18.0667Z',
  d8: 'M5.84702 5.93333H6.82995C6.83564 5.93333 6.84197 5.93335 6.84888 5.93337C6.92044 5.93356 7.05386 5.93392 7.17178 5.91712C7.30457 5.8982 7.69077 5.82119 7.89747 5.43972C8.10275 5.06087 7.94683 4.72199 7.88408 4.60631C7.8296 4.50586 7.75126 4.40389 7.70983 4.34997C7.70581 4.34474 7.70215 4.33997 7.69888 4.3357C7.44864 4.00793 7.03557 3.48356 6.6222 3.03519C6.41754 2.81322 6.19413 2.58931 5.97746 2.41442C5.86966 2.32742 5.74386 2.2364 5.60693 2.16329C5.48561 2.09851 5.26896 2 5 2C4.73104 2 4.51439 2.09851 4.39307 2.16329C4.25614 2.2364 4.13034 2.32742 4.02254 2.41442C3.80587 2.58931 3.58246 2.81322 3.3778 3.0352C2.96443 3.48356 2.55136 4.00793 2.30112 4.3357C2.29785 4.33997 2.29418 4.34475 2.29017 4.34997C2.24874 4.40389 2.1704 4.50586 2.11592 4.60631C2.05317 4.72199 1.89725 5.06087 2.10253 5.43972C2.30923 5.82119 2.69543 5.8982 2.82822 5.91712C2.94614 5.93392 3.07956 5.93356 3.15112 5.93337C3.15803 5.93335 3.16436 5.93333 3.17005 5.93333H4.15298V9.2C4.15298 9.64183 4.53221 10 5 10C5.46779 10 5.84702 9.64183 5.84702 9.2V5.93333Z',
  d9: 'M9.99999 10C10 9.44772 10.4477 9 11 9.00001L18 9.00006C18.5523 9.00006 19 9.44778 19 10.0001C19 10.5523 18.5523 11.0001 18 11.0001L11 11C10.4477 11 9.99999 10.5523 9.99999 10Z',
  d10: 'M10 14C10 13.4477 10.4477 13 11 13H16C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15H11C10.4477 15 10 14.5523 10 14Z',
  d11: 'M10 18C10 17.4477 10.4477 17 11 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H11C10.4477 19 10 18.5523 10 18Z',
  d12: 'M10 6C10 5.44772 10.4477 5 11 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H11C10.4477 7 10 6.55228 10 6Z',
  d13: 'M6 14V20.3878M3 18L6 21L9 18',
  d14: 'M6 10V3.7699M3 6L6 3L9 6',
  d15: 'M18.5 11.0002L11.5 11.0001L11.5 9.00012L18.5 9.00017L18.5 11.0002Z',
  d16: 'M16.5 15.0001H11.5V13.0001H16.5V15.0001Z',
  d17: 'M14.5 19.0001H11.5V17.0001H14.5V19.0001Z',
  d18: 'M21.5 7.00012H11.5V5.00012H21.5V7.00012Z',
  d19: 'M7.20711 12.9999V18.1715L8.5 16.8786L9.91421 18.2928L6.20711 21.9999L2.5 18.2928L3.91421 16.8786L5.20711 18.1715V12.9999H7.20711Z',
  d20: 'M6.20711 1.99988L9.91421 5.70698L8.5 7.1212L7.20711 5.8283V10.9999H5.20711V5.82831L3.91421 7.1212L2.5 5.70698L6.20711 1.99988Z',
} as const;

export const IconSorting05StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-05-stroke-rounded IconSorting05StrokeRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSorting05DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-05-duotone-rounded IconSorting05DuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSorting05TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-05-twotone-rounded IconSorting05TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconSorting05SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-05-solid-rounded IconSorting05SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconSorting05BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-05-bulk-rounded IconSorting05BulkRounded"
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSorting05StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-05-stroke-sharp IconSorting05StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSorting05SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-05-solid-sharp IconSorting05SolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfSorting05: TheIconSelfPack = {
  name: 'Sorting05',
  StrokeRounded: IconSorting05StrokeRounded,
  DuotoneRounded: IconSorting05DuotoneRounded,
  TwotoneRounded: IconSorting05TwotoneRounded,
  SolidRounded: IconSorting05SolidRounded,
  BulkRounded: IconSorting05BulkRounded,
  StrokeSharp: IconSorting05StrokeSharp,
  SolidSharp: IconSorting05SolidSharp,
};