import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 19.5C7 20.8807 5.88071 22 4.5 22C3.11929 22 2 20.8807 2 19.5C2 18.1193 3.11929 17 4.5 17C5.88071 17 7 18.1193 7 19.5Z',
  d2: 'M22 19.5C22 20.8807 20.8807 22 19.5 22C18.1193 22 17 20.8807 17 19.5C17 18.1193 18.1193 17 19.5 17C20.8807 17 22 18.1193 22 19.5Z',
  d3: 'M19.5 17C19.3321 14.547 18.3951 14 15.227 14H8.77296C5.60493 14 4.66788 14.547 4.5 17',
  d4: 'M12 6.5L13 5M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z',
  d5: 'M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z',
  d6: 'M12 6.5L13 5',
  d7: 'M1.25 19.5C1.25 17.7051 2.70507 16.25 4.5 16.25C6.29493 16.25 7.75 17.7051 7.75 19.5C7.75 21.2949 6.29493 22.75 4.5 22.75C2.70507 22.75 1.25 21.2949 1.25 19.5Z',
  d8: 'M16.25 19.5C16.25 17.7051 17.7051 16.25 19.5 16.25C21.2949 16.25 22.75 17.7051 22.75 19.5C22.75 21.2949 21.2949 22.75 19.5 22.75C17.7051 22.75 16.25 21.2949 16.25 19.5Z',
  d9: 'M4.9487 13.7535C5.88589 13.1155 7.21366 13 8.773 13H15.2271C16.7864 13 18.1142 13.1155 19.0514 13.7535C20.0981 14.4661 20.4083 15.6256 20.4977 16.9317C20.5354 17.4827 20.1193 17.96 19.5683 17.9977C19.0173 18.0354 18.5401 17.6193 18.5024 17.0683C18.4239 15.9214 18.1816 15.5809 17.9258 15.4067C17.5605 15.158 16.8358 15 15.2271 15H8.773C7.16431 15 6.43954 15.158 6.07423 15.4067C5.81846 15.5809 5.57619 15.9214 5.49771 17.0683C5.46 17.6193 4.98276 18.0354 4.43176 17.9977C3.88077 17.96 3.46466 17.4827 3.50237 16.9317C3.59176 15.6256 3.90196 14.4661 4.9487 13.7535Z',
  d10: 'M12 1.25C9.1005 1.25 6.75 3.6005 6.75 6.5C6.75 9.3995 9.1005 11.75 12 11.75C14.8995 11.75 17.25 9.3995 17.25 6.5C17.25 3.6005 14.8995 1.25 12 1.25ZM13.8322 5.55481C14.1385 5.09528 14.0143 4.47441 13.5548 4.16806C13.0953 3.8617 12.4744 3.98588 12.1681 4.44541L11.1681 5.94541C10.8617 6.40493 10.9859 7.0258 11.4454 7.33216C11.9049 7.63851 12.5258 7.51434 12.8322 7.05481L13.8322 5.55481Z',
  d11: 'M6.75 6.5C6.75 3.6005 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5C17.25 9.3995 14.8995 11.75 12 11.75C9.1005 11.75 6.75 9.3995 6.75 6.5Z',
  d12: 'M13.5548 4.16806C14.0143 4.47441 14.1385 5.09528 13.8322 5.55481L12.8322 7.05481C12.5258 7.51434 11.9049 7.63851 11.4454 7.33216C10.9859 7.0258 10.8617 6.40493 11.1681 5.94541L12.1681 4.44541C12.4744 3.98588 13.0953 3.8617 13.5548 4.16806Z',
  d13: 'M8.77299 13C7.21365 13 5.88588 13.1155 4.94869 13.7535C4.04932 14.3658 3.6937 15.308 3.55469 16.3896C3.85382 16.2988 4.1712 16.25 4.49999 16.25C4.87494 16.25 5.23505 16.3135 5.57017 16.4303C5.68171 15.7818 5.87382 15.5432 6.07422 15.4067C6.43953 15.158 7.1643 15 8.77299 15H15.2271C16.8358 15 17.5605 15.158 17.9258 15.4067C18.1262 15.5432 18.3183 15.7818 18.4299 16.4303C18.765 16.3135 19.1251 16.25 19.5 16.25C19.8288 16.25 20.1462 16.2988 20.4454 16.3896C20.3064 15.308 19.9507 14.3658 19.0514 13.7535C18.1142 13.1155 16.7864 13 15.2271 13H8.77299Z',
  d14: 'M19.5 17V14H4.50178L4.50073 17',
  d15: 'M11.5 7L13.5 5M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z',
  d16: 'M3.50178 13.9997C3.50198 13.4475 3.94963 13 4.50178 13H19.5C20.0523 13 20.5 13.4477 20.5 14V17H18.5V15H5.50143L5.50073 17.0003L3.50073 16.9997L3.50178 13.9997Z',
  d17: 'M12 1.25C9.1005 1.25 6.75 3.6005 6.75 6.5C6.75 9.3995 9.1005 11.75 12 11.75C14.8995 11.75 17.25 9.3995 17.25 6.5C17.25 3.6005 14.8995 1.25 12 1.25ZM12.2072 7.70718L14.2072 5.70718L12.793 4.29297L10.793 6.29297L12.2072 7.70718Z',
} as const;

export const IconTimeManagementCircleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-management-circle-stroke-rounded IconTimeManagementCircleStrokeRounded"
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

export const IconTimeManagementCircleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-management-circle-duotone-rounded IconTimeManagementCircleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconTimeManagementCircleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-management-circle-twotone-rounded IconTimeManagementCircleTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconTimeManagementCircleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-management-circle-solid-rounded IconTimeManagementCircleSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconTimeManagementCircleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-management-circle-bulk-rounded IconTimeManagementCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTimeManagementCircleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-management-circle-stroke-sharp IconTimeManagementCircleStrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconTimeManagementCircleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-management-circle-solid-sharp IconTimeManagementCircleSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
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
    </TheIconWrapper>
  );
};

export const iconPackOfTimeManagementCircle: TheIconSelfPack = {
  name: 'TimeManagementCircle',
  StrokeRounded: IconTimeManagementCircleStrokeRounded,
  DuotoneRounded: IconTimeManagementCircleDuotoneRounded,
  TwotoneRounded: IconTimeManagementCircleTwotoneRounded,
  SolidRounded: IconTimeManagementCircleSolidRounded,
  BulkRounded: IconTimeManagementCircleBulkRounded,
  StrokeSharp: IconTimeManagementCircleStrokeSharp,
  SolidSharp: IconTimeManagementCircleSolidSharp,
};