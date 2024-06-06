import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.3 2.75143C5.26076 2.94471 4.49591 3.28657 3.89124 3.89124C3.28657 4.49591 2.94471 5.26076 2.75143 6.3M17.7 2.75143C18.7392 2.94471 19.5041 3.28657 20.1088 3.89124C20.7134 4.49591 21.0553 5.26076 21.2486 6.3M13.9 2.50495C13.3156 2.5 12.6839 2.5 12 2.5C11.3161 2.5 10.6844 2.5 10.1 2.50495M21.495 10.1C21.5 10.6844 21.5 11.3161 21.5 12C21.5 12.6839 21.5 13.3156 21.495 13.9001M2.50495 10.1C2.5 10.6844 2.5 11.3161 2.5 12C2.5 12.6839 2.5 13.3156 2.50496 13.9001M2.75143 17.7C2.94471 18.7392 3.28657 19.5041 3.89124 20.1088C4.49591 20.7134 5.26076 21.0553 6.3 21.2486M21.2486 17.7C21.0553 18.7392 20.7134 19.5041 20.1088 20.1088C19.5041 20.7134 18.7392 21.0553 17.7 21.2486M13.9 21.495C13.3156 21.5 12.6839 21.5 12 21.5C11.3162 21.5 10.6845 21.5 10.1002 21.495',
  d2: 'M9.15 12H14.85M19.6 12H21.5M2.5 12H4.4M12 9.15V14.85M12 2.5V4.4M12 19.6V21.5',
  d3: 'M3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124Z',
  d4: 'M11.9972 1.5H12.0028C12.6846 1.5 13.3198 1.5 13.9085 1.50499C14.4607 1.50967 14.9046 1.96117 14.9 2.51343C14.8953 3.0657 14.4438 3.5096 13.8915 3.50492C13.3122 3.50001 12.6849 3.5 12 3.5C11.3151 3.5 10.6878 3.50001 10.1085 3.50492C9.55619 3.5096 9.1047 3.0657 9.10002 2.51343C9.09534 1.96117 9.53924 1.50967 10.0915 1.50499C10.6802 1.5 11.3154 1.5 11.9972 1.5ZM7.28314 2.56858C7.38413 3.11155 7.02582 3.63358 6.48285 3.73457C5.57153 3.90406 5.0166 4.1801 4.59835 4.59835C4.1801 5.0166 3.90406 5.57153 3.73457 6.48285C3.63358 7.02582 3.11155 7.38413 2.56858 7.28314C2.0256 7.18216 1.6673 6.66013 1.76828 6.11715C1.98536 4.94998 2.39304 3.97523 3.18414 3.18414C3.97523 2.39304 4.94998 1.98536 6.11715 1.76828C6.66013 1.6673 7.18216 2.0256 7.28314 2.56858ZM16.7169 2.56858C16.8178 2.0256 17.3399 1.6673 17.8828 1.76828C19.05 1.98536 20.0248 2.39304 20.8159 3.18414C21.607 3.97523 22.0146 4.94998 22.2317 6.11715C22.3327 6.66013 21.9744 7.18216 21.4314 7.28314C20.8884 7.38413 20.3664 7.02582 20.2654 6.48285C20.0959 5.57154 19.8199 5.0166 19.4016 4.59835C18.9834 4.1801 18.4285 3.90406 17.5172 3.73457C16.9742 3.63358 16.6159 3.11155 16.7169 2.56858ZM2.51343 9.10004C3.0657 9.10472 3.5096 9.55621 3.50492 10.1085C3.50001 10.6878 3.5 11.3151 3.5 12C3.5 12.685 3.50001 13.3122 3.50492 13.8916C3.5096 14.4439 3.0657 14.8954 2.51343 14.9C1.96117 14.9047 1.50967 14.4608 1.50499 13.9086C1.5 13.3199 1.5 12.6847 1.5 12.0028V11.9972C1.5 11.3154 1.5 10.6802 1.50499 10.0915C1.50967 9.53926 1.96117 9.09535 2.51343 9.10004ZM21.4866 9.10004C22.0388 9.09535 22.4903 9.53926 22.495 10.0915C22.5 10.6803 22.5 11.3157 22.5 11.9977V12.0023C22.5 12.6844 22.5 13.3197 22.495 13.9086C22.4903 14.4608 22.0388 14.9047 21.4866 14.9C20.9343 14.8954 20.4904 14.4439 20.4951 13.8916C20.5 13.3122 20.5 12.685 20.5 12C20.5 11.3151 20.5 10.6878 20.4951 10.1085C20.4904 9.55621 20.9343 9.10472 21.4866 9.10004ZM2.56858 16.7169C3.11155 16.6159 3.63358 16.9742 3.73457 17.5172C3.90406 18.4285 4.1801 18.9834 4.59835 19.4016C5.0166 19.8199 5.57153 20.0959 6.48285 20.2654C7.02582 20.3664 7.38413 20.8884 7.28314 21.4314C7.18216 21.9744 6.66013 22.3327 6.11715 22.2317C4.94998 22.0146 3.97523 21.607 3.18414 20.8159C2.39304 20.0248 1.98536 19.05 1.76828 17.8828C1.6673 17.3399 2.0256 16.8178 2.56858 16.7169ZM21.4314 16.7169C21.9744 16.8178 22.3327 17.3399 22.2317 17.8828C22.0146 19.05 21.607 20.0248 20.8159 20.8159C20.0248 21.607 19.05 22.0146 17.8828 22.2317C17.3399 22.3327 16.8178 21.9744 16.7169 21.4314C16.6159 20.8884 16.9742 20.3664 17.5172 20.2654C18.4285 20.0959 18.9834 19.8199 19.4016 19.4016C19.8199 18.9834 20.0959 18.4285 20.2654 17.5172C20.3664 16.9742 20.8884 16.6159 21.4314 16.7169ZM9.10019 21.4866C9.10487 20.9343 9.55637 20.4904 10.1086 20.4951C10.688 20.5 11.3151 20.5 12 20.5C12.6849 20.5 13.3122 20.5 13.8915 20.4951C14.4438 20.4904 14.8953 20.9343 14.9 21.4866C14.9046 22.0388 14.4607 22.4903 13.9085 22.495C13.3199 22.5 12.6848 22.5 12.0031 22.5H11.9977C11.3157 22.5 10.6804 22.5 10.0917 22.495C9.53941 22.4903 9.09551 22.0388 9.10019 21.4866Z',
  d5: 'M12 1.5C12.5523 1.5 13 1.94772 13 2.5V4.4C13 4.95228 12.5523 5.4 12 5.4C11.4477 5.4 11 4.95228 11 4.4V2.5C11 1.94772 11.4477 1.5 12 1.5ZM12 8.15C12.5523 8.15 13 8.59772 13 9.15V11H14.85C15.4023 11 15.85 11.4477 15.85 12C15.85 12.5523 15.4023 13 14.85 13H13V14.85C13 15.4023 12.5523 15.85 12 15.85C11.4477 15.85 11 15.4023 11 14.85V13H9.15C8.59772 13 8.15 12.5523 8.15 12C8.15 11.4477 8.59772 11 9.15 11H11V9.15C11 8.59772 11.4477 8.15 12 8.15ZM1.5 12C1.5 11.4477 1.94772 11 2.5 11H4.4C4.95228 11 5.4 11.4477 5.4 12C5.4 12.5523 4.95228 13 4.4 13H2.5C1.94772 13 1.5 12.5523 1.5 12ZM18.6 12C18.6 11.4477 19.0477 11 19.6 11H21.5C22.0523 11 22.5 11.4477 22.5 12C22.5 12.5523 22.0523 13 21.5 13H19.6C19.0477 13 18.6 12.5523 18.6 12ZM12 18.6C12.5523 18.6 13 19.0477 13 19.6V21.5C13 22.0523 12.5523 22.5 12 22.5C11.4477 22.5 11 22.0523 11 21.5V19.6C11 19.0477 11.4477 18.6 12 18.6Z',
  d6: 'M3 17.001L3 21.001H7M21 17.001V21.001H17M21 7.00098V3.00098L17 3.00098M3 7.00098L3 3.00098L7 3.00098M3 15.001L3 9.00098M21 9.00098V15.001M9 3.00098L15 3.00098M15 21.001H9',
  d7: 'M3 12H7M17 12H21M12 15.0008L12 12M12 12L12 9.00078M12 12H9M12 12L15 12M12 7L12 3M12 21V17',
  d8: 'M20 4.00098H17V2.00098L21 2.00098C21.2652 2.00098 21.5196 2.10633 21.7071 2.29387C21.8946 2.48141 22 2.73576 22 3.00098V7.00098H20V4.00098ZM15 4.00098L9 4.00098V2.00098L15 2.00098V4.00098ZM4 4.00098L7 4.00098V2.00098L3 2.00098C2.73478 2.00098 2.48043 2.10633 2.29289 2.29387C2.10536 2.48141 2 2.73576 2 3.00098L2 7.00098H4V4.00098ZM20 15.001V9.00098H22V15.001H20ZM4 9.00098L4 15.001H2L2 9.00098H4ZM20 20.001V17.001H22V21.001C22 21.5533 21.5523 22.001 21 22.001H17V20.001H20ZM4 20.001L4 17.001H2L2 21.001C2 21.5533 2.44772 22.001 3 22.001H7V20.001H4ZM9 20.001H15V22.001H9V20.001Z',
  d9: 'M13 3L13 7L11 7L11 3L13 3ZM11 13L11 15.0008L13 15.0008L13 13L15 13V11L13 11L13 9.00078L11 9.00078L11 11H9V13H11ZM21 13H17V11H21V13ZM7 13H3V11H7V13ZM13 17V21H11V17H13Z',
} as const;

export const IconBorderNone01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="border-none-01-stroke-rounded IconBorderNone01StrokeRounded"
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

export const IconBorderNone01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="border-none-01-duotone-rounded IconBorderNone01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBorderNone01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="border-none-01-twotone-rounded IconBorderNone01TwotoneRounded"
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

export const IconBorderNone01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="border-none-01-solid-rounded IconBorderNone01SolidRounded"
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

export const IconBorderNone01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="border-none-01-bulk-rounded IconBorderNone01BulkRounded"
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

export const IconBorderNone01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="border-none-01-stroke-sharp IconBorderNone01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBorderNone01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="border-none-01-solid-sharp IconBorderNone01SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfBorderNone01: TheIconSelfPack = {
  name: 'BorderNone01',
  StrokeRounded: IconBorderNone01StrokeRounded,
  DuotoneRounded: IconBorderNone01DuotoneRounded,
  TwotoneRounded: IconBorderNone01TwotoneRounded,
  SolidRounded: IconBorderNone01SolidRounded,
  BulkRounded: IconBorderNone01BulkRounded,
  StrokeSharp: IconBorderNone01StrokeSharp,
  SolidSharp: IconBorderNone01SolidSharp,
};