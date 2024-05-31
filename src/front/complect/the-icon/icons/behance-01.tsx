import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 12H7.625M7.4 5H4C3.05719 5 2.58579 5 2.29289 5.29289C2 5.58579 2 6.05719 2 7V17C2 17.9428 2 18.4142 2.29289 18.7071C2.58579 19 3.05719 19 4 19H7.4C9.38823 19 11 17.433 11 15.5C11 13.567 9.38823 12 7.4 12C9.38823 12 11 10.433 11 8.5C11 6.567 9.38823 5 7.4 5Z',
  d2: 'M20 7H16M14 14H22C22 11.9587 20.2091 10 18 10C15.7909 10 14 11.9587 14 14ZM14 14V15C14 17.2091 15.7909 19 18 19C19.4806 19 20.7733 18.1956 21.4649 17',
  d3: 'M4 19C3.05719 19 2.58579 19 2.29289 18.7071C2 18.4142 2 17.9428 2 17V7C2 6.05719 2 5.58579 2.29289 5.29289C2.58579 5 3.05719 5 4 5H7.4C9.38823 5 11 6.567 11 8.5C11 10.433 9.38823 12 7.4 12C9.38823 12 11 13.567 11 15.5C11 17.433 9.38823 19 7.4 19H4Z',
  d4: 'M4.44561 4.00001C4.46372 4.00001 4.48186 4.00001 4.50001 4.00001H6.90001C9.41378 4.00001 11.5 5.98836 11.5 8.50001C11.5 9.9238 10.8296 11.1794 9.79097 12C10.8296 12.8206 11.5 14.0762 11.5 15.5C11.5 18.0117 9.41378 20 6.90001 20H4.50002C4.48186 20 4.46372 20 4.44561 20C4.02154 20.0001 3.60941 20.0002 3.2695 19.9545C2.88629 19.903 2.44902 19.7774 2.0858 19.4142C1.72259 19.051 1.59706 18.6137 1.54554 18.2305C1.49984 17.8906 1.49992 17.4785 1.50001 17.0544C1.50001 17.0363 1.50001 17.0182 1.50001 17V7.00001C1.50001 6.98186 1.50001 6.96372 1.50001 6.94561C1.49992 6.52154 1.49984 6.10941 1.54554 5.76949C1.59706 5.38629 1.72259 4.94902 2.0858 4.5858C2.44902 4.22259 2.88629 4.09706 3.26949 4.04554C3.60941 3.99984 4.02154 3.99992 4.44561 4.00001ZM3.50001 13V17C3.50001 17.4997 3.50214 17.7738 3.52771 17.964C3.52804 17.9665 3.52837 17.9689 3.52871 17.9713C3.53108 17.9717 3.53351 17.972 3.53599 17.9723C3.72618 17.9979 4.00034 18 4.50002 18H6.90001C8.3627 18 9.50001 16.8544 9.50001 15.5C9.50001 14.1457 8.3627 13 6.90001 13H3.50001ZM6.90001 11H3.50001V7.00001C3.50001 6.50034 3.50214 6.22618 3.52771 6.03599C3.52804 6.03351 3.52838 6.03108 3.52871 6.02871C3.53108 6.02837 3.53351 6.02804 3.53599 6.02771C3.72618 6.00214 4.00034 6.00001 4.50001 6.00001H6.90001C8.3627 6.00001 9.50001 7.14567 9.50001 8.50001C9.50001 9.85436 8.3627 11 6.90001 11Z',
  d5: 'M14.5 7C14.5 6.44772 14.9477 6 15.5 6H19.5C20.0523 6 20.5 6.44772 20.5 7C20.5 7.55228 20.0523 8 19.5 8H15.5C14.9477 8 14.5 7.55228 14.5 7ZM12.5 14C12.5 11.4335 14.7118 9 17.5 9C20.2882 9 22.5 11.4335 22.5 14C22.5 14.5523 22.0523 15 21.5 15H14.5C14.5 16.6569 15.8431 18 17.5 18C18.6092 18 19.579 17.3986 20.0993 16.4993C20.3758 16.0212 20.9875 15.8579 21.4656 16.1344C21.9437 16.4109 22.107 17.0227 21.8305 17.5007C20.9675 18.9926 19.352 20 17.5 20C14.7386 20 12.5 17.7614 12.5 15V14ZM14.6946 13H20.3054C19.8717 11.8923 18.7641 11 17.5 11C16.2359 11 15.1283 11.8923 14.6946 13Z',
  d6: 'M7.4 12C9.38823 12 11 10.433 11 8.5C11 6.567 9.38823 5 7.4 5H2V12M7.4 12C9.38823 12 11 13.567 11 15.5C11 17.433 9.38823 19 7.4 19H2V12M7.4 12H2',
  d7: 'M1 4H7.4C9.91377 4 12 5.98835 12 8.5C12 9.92379 11.3296 11.1794 10.291 12C11.3296 12.8206 12 14.0762 12 15.5C12 18.0117 9.91377 20 7.4 20H1V4ZM7.4 11C8.86268 11 10 9.85434 10 8.5C10 7.14566 8.86268 6 7.4 6H3V11H7.4ZM3 13H7.4C8.86268 13 10 14.1457 10 15.5C10 16.8543 8.86268 18 7.4 18H3V13Z',
  d8: 'M16 6H20V8H16V6ZM13 14C13 11.4335 15.2118 9 18 9C20.7882 9 23 11.4335 23 14C23 14.5523 22.5523 15 22 15H15C15 16.6569 16.3431 18 18 18C19.1092 18 20.079 17.3986 20.5993 16.4993L22.3305 17.5007C21.4675 18.9926 19.852 20 18 20C15.2386 20 13 17.7614 13 15V14ZM15.1946 13H20.8054C20.3717 11.8923 19.2641 11 18 11C16.7359 11 15.6283 11.8923 15.1946 13Z',
} as const;

export const IconBehance01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="behance-01-stroke-rounded IconBehance01StrokeRounded"
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

export const IconBehance01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="behance-01-duotone-rounded IconBehance01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconBehance01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="behance-01-twotone-rounded IconBehance01TwotoneRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconBehance01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="behance-01-solid-rounded IconBehance01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBehance01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="behance-01-bulk-rounded IconBehance01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBehance01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="behance-01-stroke-sharp IconBehance01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBehance01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="behance-01-solid-sharp IconBehance01SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfBehance01: TheIconSelfPack = {
  name: 'Behance01',
  StrokeRounded: IconBehance01StrokeRounded,
  DuotoneRounded: IconBehance01DuotoneRounded,
  TwotoneRounded: IconBehance01TwotoneRounded,
  SolidRounded: IconBehance01SolidRounded,
  BulkRounded: IconBehance01BulkRounded,
  StrokeSharp: IconBehance01StrokeSharp,
  SolidSharp: IconBehance01SolidSharp,
};