import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 4C3 2.34533 3.34533 2 5 2H9C10.6547 2 11 2.34533 11 4C11 5.65467 10.6547 6 9 6H5C3.34533 6 3 5.65467 3 4Z',
  d2: 'M13 13C13 11.3453 13.3453 11 15 11H19C20.6547 11 21 11.3453 21 13C21 14.6547 20.6547 15 19 15H15C13.3453 15 13 14.6547 13 13Z',
  d3: 'M13 20C13 18.3453 13.3453 18 15 18H19C20.6547 18 21 18.3453 21 20C21 21.6547 20.6547 22 19 22H15C13.3453 22 13 21.6547 13 20Z',
  d4: 'M17 11C17 10.5353 17 10.303 16.9616 10.1098C16.8038 9.31644 16.1836 8.69624 15.3902 8.53843C15.197 8.5 14.9647 8.5 14.5 8.5H9.5C9.03534 8.5 8.80302 8.5 8.60982 8.46157C7.81644 8.30376 7.19624 7.68356 7.03843 6.89018C7 6.69698 7 6.46466 7 6',
  d5: 'M17 15V18',
  d6: 'M7.00009 5C7.55237 5 8.00009 5.44772 8.00009 6C8.00009 6.51259 8.00493 6.62284 8.0193 6.69509C8.09821 7.09178 8.40831 7.40188 8.805 7.48079C8.87725 7.49516 8.9875 7.5 9.50009 7.5H14.5001C14.5283 7.5 14.5563 7.49998 14.584 7.49996C14.9647 7.49965 15.2925 7.49939 15.5854 7.55764C16.7754 7.79436 17.7057 8.72466 17.9424 9.91473C18.0007 10.2076 18.0004 10.5354 18.0001 10.9161C18.0001 10.9438 18.0001 10.9718 18.0001 11C18.0001 11.5523 17.5524 12 17.0001 12C16.4478 12 16.0001 11.5523 16.0001 11C16.0001 10.4874 15.9952 10.3772 15.9809 10.3049C15.902 9.90822 15.5919 9.59812 15.1952 9.51921C15.1229 9.50484 15.0127 9.5 14.5001 9.5H9.50009C9.47184 9.5 9.44388 9.50002 9.4162 9.50004C9.03551 9.50035 8.70767 9.50061 8.41482 9.44236C7.22474 9.20564 6.29445 8.27534 6.05773 7.08527C5.99948 6.79242 5.99974 6.46458 6.00004 6.08388C6.00007 6.0562 6.00009 6.02825 6.00009 6C6.00009 5.44772 6.4478 5 7.00009 5Z',
  d7: 'M17 14C17.5523 14 18 14.4477 18 15V18C18 18.5523 17.5523 19 17 19C16.4477 19 16 18.5523 16 18V15C16 14.4477 16.4477 14 17 14Z',
  d8: 'M3.82851 1.34728C4.17373 1.27144 4.5701 1.25 5 1.25H9C9.4299 1.25 9.82627 1.27144 10.1715 1.34728C10.5252 1.42498 10.8713 1.56966 11.1508 1.84917C11.4303 2.12868 11.575 2.4748 11.6527 2.82851C11.7286 3.17373 11.75 3.5701 11.75 4C11.75 4.4299 11.7286 4.82627 11.6527 5.17149C11.575 5.5252 11.4303 5.87132 11.1508 6.15083C10.8713 6.43034 10.5252 6.57502 10.1715 6.65272C9.82627 6.72856 9.4299 6.75 9 6.75H5C4.5701 6.75 4.17373 6.72856 3.82851 6.65272C3.4748 6.57502 3.12868 6.43034 2.84917 6.15083C2.56966 5.87132 2.42498 5.5252 2.34728 5.17149C2.27144 4.82627 2.25 4.4299 2.25 4C2.25 3.5701 2.27144 3.17373 2.34728 2.82851C2.42498 2.4748 2.56966 2.12868 2.84917 1.84917C3.12868 1.56966 3.4748 1.42498 3.82851 1.34728Z',
  d9: 'M13.8285 10.3473C14.1737 10.2714 14.5701 10.25 15 10.25H19C19.4299 10.25 19.8263 10.2714 20.1715 10.3473C20.5252 10.425 20.8713 10.5697 21.1508 10.8492C21.4303 11.1287 21.575 11.4748 21.6527 11.8285C21.7286 12.1737 21.75 12.5701 21.75 13C21.75 13.4299 21.7286 13.8263 21.6527 14.1715C21.575 14.5252 21.4303 14.8713 21.1508 15.1508C20.8713 15.4303 20.5252 15.575 20.1715 15.6527C19.8263 15.7286 19.4299 15.75 19 15.75H15C14.5701 15.75 14.1737 15.7286 13.8285 15.6527C13.4748 15.575 13.1287 15.4303 12.8492 15.1508C12.5697 14.8713 12.425 14.5252 12.3473 14.1715C12.2714 13.8263 12.25 13.4299 12.25 13C12.25 12.5701 12.2714 12.1737 12.3473 11.8285C12.425 11.4748 12.5697 11.1287 12.8492 10.8492C13.1287 10.5697 13.4748 10.425 13.8285 10.3473Z',
  d10: 'M13.8285 17.3473C14.1737 17.2714 14.5701 17.25 15 17.25H19C19.4299 17.25 19.8263 17.2714 20.1715 17.3473C20.5252 17.425 20.8713 17.5697 21.1508 17.8492C21.4303 18.1287 21.575 18.4748 21.6527 18.8285C21.7286 19.1737 21.75 19.5701 21.75 20C21.75 20.4299 21.7286 20.8263 21.6527 21.1715C21.575 21.5252 21.4303 21.8713 21.1508 22.1508C20.8713 22.4303 20.5252 22.575 20.1715 22.6527C19.8263 22.7286 19.4299 22.75 19 22.75H15C14.5701 22.75 14.1737 22.7286 13.8285 22.6527C13.4748 22.575 13.1287 22.4303 12.8492 22.1508C12.5697 21.8713 12.425 21.5252 12.3473 21.1715C12.2714 20.8263 12.25 20.4299 12.25 20C12.25 19.5701 12.2714 19.1737 12.3473 18.8285C12.425 18.4748 12.5697 18.1287 12.8492 17.8492C13.1287 17.5697 13.4748 17.425 13.8285 17.3473Z',
  d11: 'M16 15.75V17.25H18V15.75H16Z',
  d12: 'M6.01367 6.75H8.031C8.12648 7.1202 8.42597 7.40556 8.80416 7.48079C8.87641 7.49516 8.98667 7.5 9.49925 7.5L14.5831 7.49996C14.9638 7.49965 15.2917 7.49939 15.5845 7.55764C16.7746 7.79436 17.7049 8.72466 17.9416 9.91473C17.9629 10.0215 17.9763 10.133 17.9848 10.25H15.9675C15.872 9.8798 15.5725 9.59444 15.1943 9.51921C15.1221 9.50484 15.0118 9.5 14.4993 9.5L9.41537 9.50004C9.03467 9.50035 8.70684 9.50061 8.41398 9.44236C7.22391 9.20564 6.29362 8.27534 6.0569 7.08527C6.03565 6.97846 6.02219 6.86699 6.01367 6.75Z',
  d13: 'M11 6V2H3V6H11Z',
  d14: 'M21 15V11H13V15H21Z',
  d15: 'M21 22V18H13V22H21Z',
  d16: 'M17 11V8.5H7V6',
  d17: 'M2.25 2C2.25 1.58579 2.58579 1.25 3 1.25H11C11.4142 1.25 11.75 1.58579 11.75 2V6C11.75 6.41421 11.4142 6.75 11 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6V2Z',
  d18: 'M12.25 11C12.25 10.5858 12.5858 10.25 13 10.25H21C21.4142 10.25 21.75 10.5858 21.75 11V15C21.75 15.4142 21.4142 15.75 21 15.75H13C12.5858 15.75 12.25 15.4142 12.25 15V11Z',
  d19: 'M12.25 18C12.25 17.5858 12.5858 17.25 13 17.25H21C21.4142 17.25 21.75 17.5858 21.75 18V22C21.75 22.4142 21.4142 22.75 21 22.75H13C12.5858 22.75 12.25 22.4142 12.25 22V18Z',
  d20: 'M6 8.5V6H8V7.5H17C17.5523 7.5 18 7.94772 18 8.5V11H16V9.5H7C6.44772 9.5 6 9.05228 6 8.5Z',
  d21: 'M16 18V15H18V18H16Z',
} as const;

export const IconWorkflowSquare02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-02-stroke-rounded IconWorkflowSquare02StrokeRounded"
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

export const IconWorkflowSquare02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-02-duotone-rounded IconWorkflowSquare02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconWorkflowSquare02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-02-twotone-rounded IconWorkflowSquare02TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconWorkflowSquare02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-02-solid-rounded IconWorkflowSquare02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-02-bulk-rounded IconWorkflowSquare02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconWorkflowSquare02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-02-stroke-sharp IconWorkflowSquare02StrokeSharp"
    >
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

export const IconWorkflowSquare02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-02-solid-sharp IconWorkflowSquare02SolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWorkflowSquare02: TheIconSelfPack = {
  name: 'WorkflowSquare02',
  StrokeRounded: IconWorkflowSquare02StrokeRounded,
  DuotoneRounded: IconWorkflowSquare02DuotoneRounded,
  TwotoneRounded: IconWorkflowSquare02TwotoneRounded,
  SolidRounded: IconWorkflowSquare02SolidRounded,
  BulkRounded: IconWorkflowSquare02BulkRounded,
  StrokeSharp: IconWorkflowSquare02StrokeSharp,
  SolidSharp: IconWorkflowSquare02SolidSharp,
};