import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 19.5C2 18.3215 2 17.7322 2.43934 17.3661C2.87868 17 3.58579 17 5 17C6.41421 17 7.12132 17 7.56066 17.3661C8 17.7322 8 18.3215 8 19.5C8 20.6785 8 21.2678 7.56066 21.6339C7.12132 22 6.41421 22 5 22C3.58579 22 2.87868 22 2.43934 21.6339C2 21.2678 2 20.6785 2 19.5Z',
  d2: 'M16 19.5C16 18.3215 16 17.7322 16.4393 17.3661C16.8787 17 17.5858 17 19 17C20.4142 17 21.1213 17 21.5607 17.3661C22 17.7322 22 18.3215 22 19.5C22 20.6785 22 21.2678 21.5607 21.6339C21.1213 22 20.4142 22 19 22C17.5858 22 16.8787 22 16.4393 21.6339C16 21.2678 16 20.6785 16 19.5Z',
  d3: 'M19 17C19 14.518 18.2562 14 14.6923 14H9.30769C5.74379 14 5 14.518 5 17',
  d4: 'M12 6.5L13 5M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z',
  d5: 'M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z',
  d6: 'M12 6.5L13 5',
  d7: 'M5.04283 16.25C5.71342 16.25 6.27896 16.25 6.72942 16.3004C7.1991 16.3531 7.65703 16.4701 8.04081 16.79C8.44434 17.1262 8.61268 17.5575 8.68552 18.009C8.75015 18.4096 8.75008 18.9033 8.75001 19.446L8.75001 19.5L8.75001 19.554C8.75008 20.0967 8.75015 20.5905 8.68552 20.991C8.61268 21.4425 8.44434 21.8738 8.04081 22.2101C7.65703 22.5299 7.1991 22.647 6.72942 22.6996C6.27895 22.75 5.71341 22.75 5.04281 22.75H5.0428H4.95722H4.95721C4.28661 22.75 3.72107 22.75 3.27059 22.6996C2.80092 22.647 2.34298 22.5299 1.95921 22.2101C1.55568 21.8738 1.38734 21.4425 1.3145 20.991C1.24987 20.5905 1.24993 20.0967 1.25 19.554L1.25 19.554L1.25001 19.5L1.25 19.446L1.25 19.446C1.24993 18.9033 1.24987 18.4096 1.3145 18.009C1.38734 17.5575 1.55568 17.1262 1.95921 16.79C2.34298 16.4701 2.80092 16.3531 3.27059 16.3004C3.72106 16.25 4.2866 16.25 4.95719 16.25H4.95722H5.0428H5.04283Z',
  d8: 'M19.0428 16.25C19.7134 16.25 20.279 16.25 20.7294 16.3004C21.1991 16.3531 21.657 16.4701 22.0408 16.79C22.4443 17.1262 22.6127 17.5575 22.6855 18.009C22.7501 18.4096 22.7501 18.9033 22.75 19.446L22.75 19.5L22.75 19.554C22.7501 20.0967 22.7501 20.5905 22.6855 20.991C22.6127 21.4425 22.4443 21.8738 22.0408 22.2101C21.657 22.5299 21.1991 22.647 20.7294 22.6996C20.279 22.75 19.7134 22.75 19.0428 22.75H19.0428H18.9572H18.9572C18.2866 22.75 17.7211 22.75 17.2706 22.6996C16.8009 22.647 16.343 22.5299 15.9592 22.2101C15.5557 21.8738 15.3873 21.4425 15.3145 20.991C15.2499 20.5905 15.2499 20.0967 15.25 19.554L15.25 19.554L15.25 19.5L15.25 19.446L15.25 19.446C15.2499 18.9033 15.2499 18.4096 15.3145 18.009C15.3873 17.5575 15.5557 17.1262 15.9592 16.79C16.343 16.4701 16.8009 16.3531 17.2706 16.3004C17.7211 16.25 18.2866 16.25 18.9572 16.25H18.9572H19.0428H19.0428Z',
  d9: 'M6.97986 13.1312C7.62694 13.0322 8.40211 13 9.30769 13H14.6923C15.5979 13 16.3731 13.0322 17.0201 13.1312C17.6633 13.2296 18.2608 13.4051 18.7541 13.7486C19.8334 14.5003 20 15.7391 20 17C20 17.5523 19.5523 18 19 18C18.4477 18 18 17.5523 18 17C18 15.7789 17.7947 15.5177 17.6111 15.3899C17.473 15.2936 17.2163 15.1845 16.7177 15.1082C16.2229 15.0325 15.5687 15 14.6923 15H9.30769C8.43133 15 7.77706 15.0325 7.28233 15.1082C6.78373 15.1845 6.52703 15.2936 6.38888 15.3899C6.20526 15.5177 6 15.7789 6 17C6 17.5523 5.55228 18 5 18C4.44772 18 4 17.5523 4 17C4 15.7391 4.16664 14.5003 5.24589 13.7486C5.73917 13.4051 6.33666 13.2296 6.97986 13.1312Z',
  d10: 'M12 1.25C9.1005 1.25 6.75 3.6005 6.75 6.5C6.75 9.3995 9.1005 11.75 12 11.75C14.8995 11.75 17.25 9.3995 17.25 6.5C17.25 3.6005 14.8995 1.25 12 1.25ZM13.8322 5.55481C14.1385 5.09528 14.0143 4.47441 13.5548 4.16806C13.0953 3.8617 12.4744 3.98588 12.1681 4.44541L11.1681 5.94541C10.8617 6.40493 10.9859 7.0258 11.4454 7.33216C11.9049 7.63851 12.5258 7.51434 12.8322 7.05481L13.8322 5.55481Z',
  d11: 'M6.75 6.5C6.75 3.6005 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5C17.25 9.3995 14.8995 11.75 12 11.75C9.1005 11.75 6.75 9.3995 6.75 6.5Z',
  d12: 'M13.5548 4.16806C14.0143 4.47441 14.1385 5.09528 13.8322 5.55481L12.8322 7.05481C12.5258 7.51434 11.9049 7.63851 11.4454 7.33216C10.9859 7.0258 10.8617 6.40493 11.1681 5.94541L12.1681 4.44541C12.4744 3.98588 13.0953 3.8617 13.5548 4.16806Z',
  d13: 'M9.30763 13C8.40205 13 7.62688 13.0322 6.9798 13.1312C6.3366 13.2296 5.73911 13.4051 5.24583 13.7486C4.3805 14.3513 4.10186 15.2671 4.02539 16.2564C4.3085 16.25 4.61952 16.25 4.95716 16.25H5.04277C5.40428 16.25 5.73527 16.25 6.03415 16.2579C6.10011 15.6579 6.25059 15.4861 6.38882 15.3899C6.52697 15.2936 6.78367 15.1845 7.28227 15.1082C7.777 15.0325 8.43127 15 9.30763 15H14.6922C15.5686 15 16.2229 15.0325 16.7176 15.1082C17.2162 15.1845 17.4729 15.2936 17.6111 15.3899C17.7493 15.4861 17.8998 15.6579 17.9657 16.2579C18.2646 16.25 18.5956 16.25 18.9572 16.25H19.0428C19.3804 16.25 19.6914 16.25 19.9745 16.2564C19.898 15.2671 19.6194 14.3513 18.754 13.7486C18.2608 13.4051 17.6633 13.2296 17.0201 13.1312C16.373 13.0322 15.5978 13 14.6922 13H9.30763Z',
  d14: 'M22 22V17H16V22H22Z',
  d15: 'M8 22V17H2V22H8Z',
  d16: 'M19 17V14H5.00105L5 17',
  d17: 'M11.5 7L13.5 5M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z',
  d18: 'M15.25 17C15.25 16.5858 15.5858 16.25 16 16.25H22C22.4142 16.25 22.75 16.5858 22.75 17V22C22.75 22.4142 22.4142 22.75 22 22.75H16C15.5858 22.75 15.25 22.4142 15.25 22V17Z',
  d19: 'M1.25 17C1.25 16.5858 1.58579 16.25 2 16.25H8C8.41421 16.25 8.75 16.5858 8.75 17V22C8.75 22.4142 8.41421 22.75 8 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V17Z',
  d20: 'M4.00105 13.9997C4.00124 13.4475 4.4489 13 5.00105 13H19C19.5523 13 20 13.4477 20 14V17H18V15H6.0007L6 17.0003L4 16.9997L4.00105 13.9997Z',
  d21: 'M12 1.25C9.1005 1.25 6.75 3.6005 6.75 6.5C6.75 9.3995 9.1005 11.75 12 11.75C14.8995 11.75 17.25 9.3995 17.25 6.5C17.25 3.6005 14.8995 1.25 12 1.25ZM12.2072 7.70718L14.2072 5.70718L12.793 4.29297L10.793 6.29297L12.2072 7.70718Z',
} as const;

export const IconTimeManagementStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-management-stroke-rounded IconTimeManagementStrokeRounded"
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

export const IconTimeManagementDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-management-duotone-rounded IconTimeManagementDuotoneRounded"
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

export const IconTimeManagementTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-management-twotone-rounded IconTimeManagementTwotoneRounded"
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

export const IconTimeManagementSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-management-solid-rounded IconTimeManagementSolidRounded"
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

export const IconTimeManagementBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-management-bulk-rounded IconTimeManagementBulkRounded"
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

export const IconTimeManagementStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-management-stroke-sharp IconTimeManagementStrokeSharp"
    >
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
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTimeManagementSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-management-solid-sharp IconTimeManagementSolidSharp"
    >
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

export const iconPackOfTimeManagement: TheIconSelfPack = {
  name: 'TimeManagement',
  StrokeRounded: IconTimeManagementStrokeRounded,
  DuotoneRounded: IconTimeManagementDuotoneRounded,
  TwotoneRounded: IconTimeManagementTwotoneRounded,
  SolidRounded: IconTimeManagementSolidRounded,
  BulkRounded: IconTimeManagementBulkRounded,
  StrokeSharp: IconTimeManagementStrokeSharp,
  SolidSharp: IconTimeManagementSolidSharp,
};