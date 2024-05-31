import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.5 15.5C3.28795 14.6166 2 12.4328 2 10.1746C2 7.24571 4.31698 4.35135 5.94326 2.68056C6.82649 1.77315 8.17351 1.77315 9.05674 2.68056C9.54874 3.18602 9.96485 3.80348 10.5 4.5',
  d2: 'M8 14.9263C8 11.3698 10.9489 7.85521 13.0187 5.82639C14.1428 4.72454 15.8572 4.72454 16.9813 5.82639C19.0511 7.85521 22 11.3698 22 14.9263C22 18.4134 19.3492 22 15 22C10.6508 22 8 18.4134 8 14.9263Z',
  d3: 'M18.5 15.5C18.5 17.7091 17 18.5 15.5 18.5',
  d4: 'M8 14.3424C8 10.9951 10.9489 7.68726 13.0187 5.77778C14.1428 4.74074 15.8572 4.74074 16.9813 5.77778C19.0511 7.68726 22 10.9951 22 14.3424C22 17.6243 19.3492 21 15 21C10.6508 21 8 17.6243 8 14.3424Z',
  d5: 'M17.5063 5.29078C16.0906 3.90307 13.9094 3.90307 12.4937 5.29078C11.4356 6.32792 10.1372 7.75929 9.09907 9.40295C8.06593 11.0387 7.25 12.9482 7.25 14.9263C7.25 18.7556 10.1681 22.75 15 22.75C19.8319 22.75 22.75 18.7556 22.75 14.9263C22.75 12.9482 21.9341 11.0387 20.9009 9.40295C19.8628 7.7593 18.5644 6.32792 17.5063 5.29078ZM19.5 15.5C19.5 14.9477 19.0523 14.5 18.5 14.5C17.9477 14.5 17.5 14.9477 17.5 15.5C17.5 16.3589 17.2201 16.8094 16.9182 17.0636C16.5868 17.3428 16.0905 17.5 15.5 17.5C14.9477 17.5 14.5 17.9477 14.5 18.5C14.5 19.0523 14.9477 19.5 15.5 19.5C16.4095 19.5 17.4132 19.2618 18.2068 18.5932C19.0299 17.8998 19.5 16.8503 19.5 15.5Z',
  d6: 'M9.59418 2.15743C8.41651 0.947522 6.58349 0.947522 5.40582 2.15743C4.56979 3.01635 3.54205 4.20356 2.7194 5.56869C1.90101 6.92675 1.25 8.51953 1.25 10.1746C1.25 12.608 2.60888 15.1688 5.00931 16.2361C5.36922 16.3962 5.54918 16.4762 5.68837 16.378C5.82756 16.2798 5.81055 16.0582 5.77654 15.6151C5.7589 15.3852 5.75 15.1554 5.75 14.9263C5.75 12.5486 6.72336 10.3553 7.83086 8.60193C8.81739 7.04002 10.0071 5.67498 11.0307 4.63228C11.2078 4.45178 11.2964 4.36153 11.3025 4.24842C11.3087 4.1353 11.233 4.03942 11.0817 3.84766C10.5719 3.20162 10.054 2.62987 9.59418 2.15743Z',
  d7: 'M12.4937 5.29078C13.9094 3.90307 16.0906 3.90307 17.5063 5.29078C18.5644 6.32792 19.8628 7.7593 20.9009 9.40295C21.9341 11.0387 22.75 12.9482 22.75 14.9263C22.75 18.7556 19.8319 22.75 15 22.75C10.1681 22.75 7.25 18.7556 7.25 14.9263C7.25 12.9482 8.06593 11.0387 9.09907 9.40295C10.1372 7.75929 11.4356 6.32792 12.4937 5.29078Z',
  d8: 'M18.5 14.5C19.0523 14.5 19.5 14.9477 19.5 15.5C19.5 16.8503 19.0299 17.8998 18.2068 18.5932C17.4132 19.2618 16.4095 19.5 15.5 19.5C14.9477 19.5 14.5 19.0523 14.5 18.5C14.5 17.9477 14.9477 17.5 15.5 17.5C16.0905 17.5 16.5868 17.3428 16.9182 17.0636C17.2201 16.8094 17.5 16.3589 17.5 15.5C17.5 14.9477 17.9477 14.5 18.5 14.5Z',
  d9: 'M15 5C15 5 22 9.25 22 14.775C22 18.7653 18.866 22 15 22C11.134 22 8 18.7653 8 14.775C8 9.25 15 5 15 5Z',
  d10: 'M11.1273 5.09307C9.53327 3.20148 7.5 2 7.5 2C7.5 2 2 5.25 2 9.475C2 11.9119 3.57049 13.9803 5.75021 14.7145',
  d11: 'M7.05818 1.37587C7.14571 1.31865 7.21424 1.27386 7.25 1.25C7.28576 1.27386 7.35429 1.31865 7.44181 1.37587C7.73447 1.56717 8.23949 1.89728 8.44177 2.04753C8.96634 2.43714 9.66741 3.00398 10.3706 3.71229C10.7325 4.07683 11.102 4.48585 11.4503 4.93385C10.9649 5.33565 10.4393 5.80279 9.91123 6.32819C8.04672 8.18326 5.75 11.1626 5.75 14.8295C5.75 15.0759 5.75936 15.3202 5.77776 15.5622C3.1663 14.8816 1.25 12.4323 1.25 9.54208C1.25 7.15264 2.74472 5.107 4.12938 3.71229C4.83259 3.00398 5.53366 2.43714 6.05823 2.04753C6.26051 1.89729 6.76553 1.56717 7.05818 1.37587Z',
  d12: 'M14.7522 4.41059C14.8653 4.33759 14.9538 4.28044 15 4.25C15.0462 4.28044 15.1347 4.33759 15.2478 4.41059C15.6258 4.65466 16.2781 5.07585 16.5394 5.26753C17.2169 5.76462 18.1225 6.48783 19.0308 7.39154C20.8193 9.171 22.75 11.781 22.75 14.8295C22.75 19.1815 19.3024 22.75 15 22.75C10.6976 22.75 7.25 19.1815 7.25 14.8295C7.25 11.781 9.18068 9.171 10.9692 7.39154C11.8775 6.48783 12.7831 5.76462 13.4606 5.26753C13.7219 5.07585 14.3742 4.65466 14.7522 4.41059ZM17.5 15.5C17.5 16.3589 17.2201 16.8094 16.9182 17.0636C16.5868 17.3428 16.0905 17.5 15.5 17.5V19.5C16.4095 19.5 17.4132 19.2618 18.2068 18.5932C19.0299 17.8998 19.5 16.8503 19.5 15.5H17.5Z',
} as const;

export const IconBloodStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-stroke-rounded IconBloodStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBloodDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-duotone-rounded IconBloodDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBloodTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-twotone-rounded IconBloodTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBloodSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-solid-rounded IconBloodSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBloodBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-bulk-rounded IconBloodBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBloodStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-stroke-sharp IconBloodStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBloodSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-solid-sharp IconBloodSolidSharp"
    >
      <path 
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

export const iconPackOfBlood: TheIconSelfPack = {
  name: 'Blood',
  StrokeRounded: IconBloodStrokeRounded,
  DuotoneRounded: IconBloodDuotoneRounded,
  TwotoneRounded: IconBloodTwotoneRounded,
  SolidRounded: IconBloodSolidRounded,
  BulkRounded: IconBloodBulkRounded,
  StrokeSharp: IconBloodStrokeSharp,
  SolidSharp: IconBloodSolidSharp,
};