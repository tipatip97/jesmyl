import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.5 4.5C13.5 5.32843 12.8284 6 12 6C11.1716 6 10.5 5.32843 10.5 4.5C10.5 3.67157 12 2 12 2C12 2 13.5 3.67157 13.5 4.5Z',
  d2: 'M12 6V9',
  d3: 'M17.6667 14C19.2315 14 20.5 12.8807 20.5 11.5C20.5 10.1193 19.2315 9 17.6667 9H6.33333C4.76853 9 3.5 10.1193 3.5 11.5C3.5 12.8807 4.76853 14 6.33333 14C7.70408 14 8.90415 13.1411 9.16667 12C9.42919 13.1411 10.6293 14 12 14C13.3707 14 14.5708 13.1411 14.8333 12C15.0959 13.1411 16.2959 14 17.6667 14Z',
  d4: 'M5 14L5.52089 16.5796C6.04532 19.1768 6.30754 20.4754 7.19608 21.2377C8.08462 22 9.33608 22 11.839 22H12.161C14.6639 22 15.9154 22 16.8039 21.2377C17.6925 20.4754 17.9547 19.1768 18.4791 16.5796L19 14',
  d5: 'M14.8333 12C15.0959 13.1411 16.2959 14 17.6667 14C18.1487 14 18.6026 13.8938 19 13.7064V14L18.4791 16.5796C17.9547 19.1768 17.6925 20.4754 16.8039 21.2377C15.9154 22 14.6639 22 12.161 22H11.839C9.33608 22 8.08462 22 7.19608 21.2377C6.30754 20.4754 6.04532 19.1768 5.52089 16.5796L5 14V13.7064C5.39738 13.8938 5.8513 14 6.33333 14C7.70408 14 8.90415 13.1411 9.16667 12C9.42919 13.1411 10.6293 14 12 14C13.3707 14 14.5708 13.1411 14.8333 12Z',
  d6: 'M14 4.5C14 5.32843 13.3284 6 12.5 6C11.6716 6 11 5.32843 11 4.5C11 3.67157 12.5 2 12.5 2C12.5 2 14 3.67157 14 4.5Z',
  d7: 'M12.5 6V9',
  d8: 'M18.1667 14C19.7315 14 21 12.8807 21 11.5C21 10.1193 19.7315 9 18.1667 9H6.83333C5.26853 9 4 10.1193 4 11.5C4 12.8807 5.26853 14 6.83333 14C8.20408 14 9.40415 13.1411 9.66667 12C9.92919 13.1411 11.1293 14 12.5 14C13.8707 14 15.0708 13.1411 15.3333 12C15.5959 13.1411 16.7959 14 18.1667 14Z',
  d9: 'M5.5 14L6.02089 16.5796C6.54532 19.1768 6.80754 20.4754 7.69608 21.2377C8.58462 22 9.83608 22 12.339 22H12.661C15.1639 22 16.4154 22 17.3039 21.2377C18.1925 20.4754 18.4547 19.1768 18.9791 16.5796L19.5 14',
  d10: 'M11.2557 1.33212C11.4454 1.12075 11.716 1 12 1C12.284 1 12.5546 1.12075 12.7443 1.33212L12.7486 1.33712C12.7978 1.39386 12.931 1.54754 13.0043 1.63596C13.1546 1.81727 13.3571 2.07081 13.5619 2.35549C13.764 2.63654 13.9826 2.96776 14.1548 3.30223C14.3103 3.60437 14.5 4.04272 14.5 4.5C14.5 5.52516 13.883 6.4062 13 6.79198V9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9V6.79198C10.117 6.4062 9.5 5.52516 9.5 4.5C9.5 4.04272 9.68973 3.60437 9.84524 3.30223C10.0174 2.96776 10.236 2.63654 10.4381 2.35549C10.6429 2.07081 10.8454 1.81727 10.9957 1.63596C11.069 1.54753 11.2022 1.39383 11.2514 1.33711L11.2557 1.33212Z',
  d11: 'M2.75 11.5C2.75 9.61961 4.44528 8.25 6.33333 8.25H17.6667C19.5547 8.25 21.25 9.61961 21.25 11.5C21.25 13.3804 19.5547 14.75 17.6667 14.75C16.5766 14.75 15.5238 14.2971 14.8333 13.5416C14.1429 14.2971 13.0901 14.75 12 14.75C10.9099 14.75 9.85714 14.2971 9.16667 13.5416C8.47619 14.2971 7.42339 14.75 6.33333 14.75C4.44528 14.75 2.75 13.3804 2.75 11.5Z',
  d12: 'M5.42825 16.1703C5.13853 16.1198 4.99367 16.0946 4.91327 16.1278C4.83092 16.1618 4.77946 16.2147 4.74764 16.2979C4.71656 16.3792 4.74309 16.5105 4.79614 16.7733C5.0505 18.033 5.25427 19.0422 5.50989 19.8281C5.77387 20.6397 6.11879 21.3001 6.7089 21.8063C7.30353 22.3165 7.99735 22.5419 8.81712 22.6479C9.6021 22.7494 10.5811 22.7494 11.7893 22.7494H12.213C13.4213 22.7494 14.4002 22.7494 15.1852 22.6479C16.005 22.5419 16.6988 22.3165 17.2934 21.8063C17.8836 21.3001 18.2285 20.6397 18.4925 19.8281C18.7481 19.0422 18.9518 18.033 19.2062 16.7733C19.2593 16.5105 19.2858 16.3791 19.2547 16.2978C19.2229 16.2146 19.1714 16.1618 19.0891 16.1278C19.0087 16.0945 18.8638 16.1198 18.5741 16.1703C18.2744 16.2226 17.9708 16.2494 17.6678 16.2494C16.7904 16.2494 15.9211 16.0361 15.1523 15.6384C14.9891 15.5539 14.9074 15.5117 14.8344 15.5117C14.7614 15.5117 14.6798 15.5539 14.5165 15.6384C13.7477 16.0361 12.8785 16.2494 12.0011 16.2494C11.1237 16.2494 10.2545 16.0361 9.48566 15.6384C9.3224 15.5539 9.24076 15.5117 9.16776 15.5117C9.09476 15.5117 9.01312 15.5539 8.84986 15.6384C8.08105 16.0361 7.21182 16.2494 6.33442 16.2494C6.03142 16.2494 5.72786 16.2226 5.42825 16.1703Z',
  d13: 'M13.4945 4.49988C13.4945 5.32831 12.823 5.99988 11.9948 5.99988C11.1666 5.99988 10.4951 5.32831 10.4951 4.49988C10.4951 3.67145 11.9948 1.99988 11.9948 1.99988C11.9948 1.99988 13.4945 3.67145 13.4945 4.49988Z',
  d14: 'M11.9951 5.99988V8.99988',
  d15: 'M4.91406 14.83L6.49668 22.0002H17.4943L19.076 14.83',
  d16: 'M16.8709 9.02956L7.51052 9.05176C6.88283 9.02105 6.15118 9.03076 5.53571 9.09612C3.12609 9.352 1.78838 13.0593 4.49805 14.613C5.05524 14.9951 5.53571 14.9951 6.26313 14.9951C7.95117 15.0315 8.91394 13.1663 8.98894 12.1537C9.41391 15.2792 11.9914 15.1191 13.0525 14.8391C14.1157 14.5587 14.8636 13.0663 14.9886 12.0662C15.1139 13.1645 15.747 14.4102 16.8707 14.8506C18.0347 15.3068 19.2851 14.84 19.7873 14.3931C20.6816 13.6399 21.0024 12.887 21.0024 11.7736C20.7212 8.67692 17.1987 9.0091 16.8709 9.02956Z',
  d17: 'M12 1.25024C12 1.25024 11.2625 2.07912 11.1882 2.16871C11.0403 2.3471 10.8415 2.59596 10.6411 2.87465C10.4426 3.15063 10.2318 3.4707 10.0675 3.78985C9.91573 4.08475 9.75 4.47846 9.75 4.8732C9.75 5.85287 10.3761 6.6863 11.25 6.99517V9.00024C11.25 9.41446 11.5858 9.75024 12 9.75024C12.4142 9.75024 12.75 9.41446 12.75 9.00024V6.99517C13.6239 6.6863 14.25 5.85287 14.25 4.8732C14.25 4.47846 14.0843 4.08475 13.9325 3.78985C13.7682 3.4707 13.5574 3.15063 13.3589 2.87465C13.1585 2.59596 12.9597 2.3471 12.8118 2.16871C12.7375 2.07912 12 1.25024 12 1.25024Z',
  d18: 'M4.72754 16.0009L6.27278 22.1819C6.35625 22.5157 6.65624 22.75 7.00039 22.75H17.0004C17.3445 22.75 17.6445 22.5157 17.728 22.1819L19.2732 16.0009C18.7533 16.1645 18.2093 16.2504 17.667 16.2504C16.6664 16.2504 15.6763 15.973 14.8337 15.4609C13.9911 15.973 13.0011 16.2504 12.0004 16.2504C10.9997 16.2504 10.0096 15.973 9.16705 15.4609C8.32448 15.973 7.3344 16.2504 6.33371 16.2504C5.7915 16.2504 5.2475 16.1645 4.72754 16.0009Z',
} as const;

export const IconBirthdayCakeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="birthday-cake-stroke-rounded IconBirthdayCakeStrokeRounded"
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
        strokeLinecap="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBirthdayCakeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="birthday-cake-duotone-rounded IconBirthdayCakeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinecap="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBirthdayCakeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="birthday-cake-twotone-rounded IconBirthdayCakeTwotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBirthdayCakeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="birthday-cake-solid-rounded IconBirthdayCakeSolidRounded"
    >
      <path 
        d={d.d10} 
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
    </TheIconWrapper>
  );
};

export const IconBirthdayCakeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="birthday-cake-bulk-rounded IconBirthdayCakeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBirthdayCakeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="birthday-cake-stroke-sharp IconBirthdayCakeStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
      />
    </TheIconWrapper>
  );
};

export const IconBirthdayCakeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="birthday-cake-solid-sharp IconBirthdayCakeSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBirthdayCake: TheIconSelfPack = {
  name: 'BirthdayCake',
  StrokeRounded: IconBirthdayCakeStrokeRounded,
  DuotoneRounded: IconBirthdayCakeDuotoneRounded,
  TwotoneRounded: IconBirthdayCakeTwotoneRounded,
  SolidRounded: IconBirthdayCakeSolidRounded,
  BulkRounded: IconBirthdayCakeBulkRounded,
  StrokeSharp: IconBirthdayCakeStrokeSharp,
  SolidSharp: IconBirthdayCakeSolidSharp,
};