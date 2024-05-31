import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 17H22',
  d2: 'M12 7C12 7 13.5 5.96638 13.5 4.69135C13.5 2.43622 10.5 2.43622 10.5 4.69135C10.5 5.96638 12 7 12 7Z',
  d3: 'M3 17L3.62127 19.4851C3.84385 20.3754 4.64382 21 5.56155 21H18.4384C19.3562 21 20.1561 20.3754 20.3787 19.4851L21 17',
  d4: 'M20.5 14.5C20.0017 10.2768 16.3861 7 12 7C7.61386 7 3.99834 10.2768 3.5 14.5',
  d5: 'M3.62127 19.4851L3 17H21L20.3787 19.4851C20.1561 20.3754 19.3562 21 18.4384 21H5.56155C4.64382 21 3.84385 20.3754 3.62127 19.4851Z',
  d6: 'M20.5 14.5C20.0017 10.2768 16.3861 7 12 7C7.61386 7 3.99834 10.2768 3.5 14.5H20.5Z',
  d7: 'M12 7C12 7 13.5 5.96638 13.5 4.69135C13.5 2.43622 10.5 2.43622 10.5 4.69135C10.5 5.96638 12 7 12 7ZM12 7C16.3861 7 20.0017 10.2768 20.5 14.5M12 7C7.61386 7 3.99834 10.2768 3.5 14.5',
  d8: 'M4.69073 14.4137C5.11817 10.8893 8.22349 8.14484 12 8.14484C15.7765 8.14484 18.8818 10.8893 19.3093 14.4137C19.3723 14.9333 19.8563 15.3048 20.3903 15.2435C20.9244 15.1822 21.3062 14.7113 21.2432 14.1917C20.7645 10.2448 17.6497 7.08518 13.6543 6.39192C13.9676 5.94685 14.25 5.3634 14.25 4.69147C14.25 3.95352 14.0001 3.33214 13.5622 2.89324C13.1312 2.46128 12.5611 2.25012 12 2.25012C11.4389 2.25012 10.8688 2.46128 10.4378 2.89324C9.99991 3.33214 9.75 3.95352 9.75 4.69147C9.75 5.3634 10.0324 5.94685 10.3457 6.39192C6.35031 7.08518 3.23547 10.2448 2.7568 14.1917C2.69379 14.7113 3.07562 15.1822 3.60967 15.2435C4.14371 15.3048 4.62772 14.9333 4.69073 14.4137Z',
  d9: 'M2 16.2501C1.44772 16.2501 1 16.6978 1 17.2501C1 17.8024 1.44772 18.2501 2 18.2501H2.53955L2.89384 19.6673C3.19989 20.8915 4.29984 21.7503 5.56173 21.7503H18.4386C19.7005 21.7503 20.8005 20.8915 21.1065 19.6673L21.4608 18.2501H22C22.5523 18.2501 23 17.8024 23 17.2501C23 16.6978 22.5523 16.2501 22 16.2501H2Z',
  d10: 'M2 16H22',
  d11: 'M12 6V4M10 4H14',
  d12: 'M4 16L5 20H19L20 16',
  d13: 'M20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14',
  d14: 'M3.21922 17.5H2V15.5H22V17.5H20.7808L19.7808 21.5H4.21922L3.21922 17.5Z',
  d15: 'M11 4.5H10V2.5H14V4.5H13V5.55493C17.4999 6.05237 21 9.86745 21 14.5H19C19 10.634 15.866 7.5 12 7.5C8.13401 7.5 5 10.634 5 14.5H3C3 9.86745 6.50005 6.05237 11 5.55493V4.5Z',
} as const;

export const IconDish01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-01-stroke-rounded IconDish01StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconDish01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-01-duotone-rounded IconDish01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconDish01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-01-twotone-rounded IconDish01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDish01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-01-solid-rounded IconDish01SolidRounded"
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

export const IconDish01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-01-bulk-rounded IconDish01BulkRounded"
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

export const IconDish01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-01-stroke-sharp IconDish01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDish01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-01-solid-sharp IconDish01SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDish01: TheIconSelfPack = {
  name: 'Dish01',
  StrokeRounded: IconDish01StrokeRounded,
  DuotoneRounded: IconDish01DuotoneRounded,
  TwotoneRounded: IconDish01TwotoneRounded,
  SolidRounded: IconDish01SolidRounded,
  BulkRounded: IconDish01BulkRounded,
  StrokeSharp: IconDish01StrokeSharp,
  SolidSharp: IconDish01SolidSharp,
};