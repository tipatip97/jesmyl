import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.85977 14.4543C9.24591 14.0681 9.72987 13.8394 10.2319 13.7681M10.2319 13.7681C10.9612 13.6646 11.7287 13.8933 12.2896 14.4543C13.2368 15.4014 13.2368 16.937 12.2896 17.8841C11.537 18.6368 10.4127 18.7913 9.50745 18.3478C9.11069 18.1534 8.6065 18.1374 8.29408 18.4498L4.74391 22M10.2319 13.7681C10.2319 13.768 10.2319 13.7682 10.2319 13.7681ZM10.2319 13.7681C10.3354 13.0388 10.1067 12.2713 9.54574 11.7104C8.59861 10.7632 7.06299 10.7632 6.11586 11.7104C5.3632 12.463 5.20866 13.5873 5.65222 14.4925C5.84662 14.8893 5.86259 15.3935 5.55017 15.7059L2 19.2561',
  d2: 'M15.1402 9.54574C14.7541 9.93189 14.2701 10.1606 13.7681 10.2319M13.7681 10.2319C13.0388 10.3354 12.2713 10.1067 11.7104 9.54574C10.7632 8.59861 10.7632 7.063 11.7104 6.11586C12.463 5.3632 13.5873 5.20866 14.4925 5.65222C14.8893 5.84662 15.3935 5.86259 15.7059 5.55017L19.2561 2M13.7681 10.2319C13.6646 10.9612 13.8933 11.7287 14.4543 12.2896C15.4014 13.2368 16.937 13.2368 17.8841 12.2896C18.6368 11.537 18.7913 10.4127 18.3478 9.50745C18.1534 9.11069 18.1374 8.6065 18.4498 8.29408L22 4.74391',
  d3: 'M16 18V20M18 16H20',
  d4: 'M8 6V4M6 8H4',
  d5: 'M11.7104 9.54574C12.2713 10.1067 13.0388 10.3354 13.7681 10.2319C13.6646 10.9612 13.8933 11.7287 14.4543 12.2896C15.4014 13.2368 16.937 13.2368 17.8841 12.2896C18.6368 11.537 18.7913 10.4127 18.3478 9.50745C18.1534 9.11069 18.1374 8.6065 18.4498 8.29408L22 4.74391L19.2561 2L15.7059 5.55017C15.3935 5.86259 14.8893 5.84662 14.4925 5.65222C13.5873 5.20866 12.463 5.3632 11.7104 6.11586C10.7632 7.063 10.7632 8.59861 11.7104 9.54574Z',
  d6: 'M12.2896 14.4543C11.7287 13.8933 10.9612 13.6646 10.2319 13.7681C10.3354 13.0388 10.1067 12.2713 9.54574 11.7104C8.59861 10.7632 7.06299 10.7632 6.11586 11.7104C5.3632 12.463 5.20866 13.5873 5.65222 14.4925C5.84662 14.8893 5.86259 15.3935 5.55017 15.7059L2 19.2561L4.74391 22L8.29408 18.4498C8.6065 18.1374 9.11069 18.1534 9.50745 18.3478C10.4127 18.7913 11.537 18.6368 12.2896 17.8841C13.2368 16.937 13.2368 15.4014 12.2896 14.4543Z',
  d7: 'M5.58553 11.18C6.82556 9.93999 8.83604 9.93999 10.0761 11.18C10.5928 11.6968 10.894 12.3477 10.9802 13.0199C11.6523 13.106 12.3032 13.4072 12.82 13.9239C14.06 15.164 14.06 17.1744 12.82 18.4145C11.8337 19.4007 10.3618 19.6016 9.17745 19.0213C9.07829 18.9727 8.97882 18.9542 8.90668 18.9578C8.8421 18.961 8.82448 18.9801 8.82448 18.9801L5.27424 22.5303C4.98134 22.8232 4.50647 22.8232 4.21358 22.5303L1.46967 19.7864C1.17678 19.4935 1.17678 19.0187 1.46967 18.7258L5.01984 15.1756C5.01984 15.1756 5.03896 15.1579 5.0422 15.0933C5.04581 15.0212 5.02731 14.9217 4.97872 14.8225C4.39842 13.6382 4.5993 12.1663 5.58553 11.18Z',
  d8: 'M19.2561 1.25C19.455 1.25 19.6458 1.32902 19.7864 1.46967L22.5303 4.21358C22.671 4.35423 22.75 4.54499 22.75 4.74391C22.75 4.94282 22.671 5.13358 22.5303 5.27424L18.9802 8.82441C18.9802 8.82441 18.961 8.8421 18.9578 8.90668C18.9542 8.97882 18.9727 9.07829 19.0213 9.17745C19.6016 10.3618 19.4007 11.8337 18.4145 12.82C17.1744 14.06 15.164 14.06 13.9239 12.82C13.4072 12.3032 13.106 11.6523 13.0198 10.9802C12.3477 10.894 11.6968 10.5928 11.18 10.0761C9.93999 8.83604 9.93999 6.82556 11.18 5.58553C12.1663 4.5993 13.6382 4.39842 14.8225 4.97872C14.9217 5.02731 15.0212 5.04581 15.0933 5.0422C15.1579 5.03896 15.1755 5.01992 15.1755 5.01992L18.7258 1.46967C18.8664 1.32902 19.0572 1.25 19.2561 1.25Z',
  d9: 'M16 21C15.4477 21 15 20.5523 15 20V18C15 17.4477 15.4477 17 16 17C16.5523 17 17 17.4477 17 18V20C17 20.5523 16.5523 21 16 21ZM21 16C21 16.5523 20.5523 17 20 17H18C17.4477 17 17 16.5523 17 16C17 15.4477 17.4477 15 18 15H20C20.5523 15 21 15.4477 21 16Z',
  d10: 'M8 3C8.55228 3 9 3.44772 9 4V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V4C7 3.44772 7.44772 3 8 3ZM3 8C3 7.44772 3.44772 7 4 7H6C6.55228 7 7 7.44772 7 8C7 8.55228 6.55228 9 6 9H4C3.44772 9 3 8.55228 3 8Z',
  d11: 'M15.998 17.9877V19.9862M17.9989 15.9893H19.9998',
  d12: 'M7.99395 5.99651V3.99805M5.99307 7.99497H3.99219',
  d13: 'M19.1013 2.00684L15.51 5.60177C14.8803 4.95735 13.3259 4.4082 11.9878 5.44993C10.9072 6.29124 10.8521 7.88854 11.1812 8.52303C11.319 8.92055 11.8165 9.86048 12.9003 10.1724C13.2138 10.2626 13.5503 10.3341 13.8593 10.2968M13.8593 10.2968C14.7765 10.1859 15.4712 9.68531 15.7275 9.40113M13.8593 10.2968C13.5728 11.0058 14.0265 12.736 16.3626 12.9962C17.9071 13.1682 19.6668 11.2651 18.9283 9.40113C18.8519 9.26353 18.7041 8.86623 18.3943 8.52303L22.007 4.87613',
  d14: 'M4.93389 22.002L8.49574 18.3779C9.13064 19.0172 10.6895 19.5537 12.019 18.5011C13.0928 17.651 13.1348 16.0533 12.8005 15.4215C12.6594 15.0251 12.1543 14.0893 11.068 13.7862C10.7537 13.6985 10.4167 13.6298 10.108 13.6696M10.108 13.6696C9.19171 13.788 8.50118 14.2942 8.24722 14.5805M10.108 13.6696C10.3887 12.9583 9.92087 11.2319 7.58267 10.9907C6.03683 10.8313 4.29281 12.7487 5.04649 14.6066C5.124 14.7435 5.27504 15.1396 5.58766 15.4803L2.00488 19.1565',
  d15: 'M15 20.998V17.998H17V20.998H15ZM21 16.998H18V14.998H21V16.998Z',
  d16: 'M9 2.99805V5.99805L7 5.99805V2.99805L9 2.99805ZM3 6.99805H6L6 8.99805H3L3 6.99805Z',
  d17: 'M7.60062 10.999C6.10945 10.999 4.90062 12.2079 4.90062 13.699C4.90062 14.3935 5.16284 15.0268 5.59367 15.5052L2 19.0989L4.90062 21.9996L8.49428 18.4058C8.97271 18.8367 9.60604 19.099 10.3006 19.099C11.7918 19.099 13.0006 17.8902 13.0006 16.399C13.0006 14.9079 11.7918 13.699 10.3006 13.699C10.3006 12.2079 9.09179 10.999 7.60062 10.999Z',
  d18: 'M16.4 12.9996C17.8912 12.9996 19.1 11.7907 19.1 10.2996C19.1 9.60505 18.8378 8.97179 18.407 8.49338L22.0006 4.89964L19.1 1.99902L15.5063 5.59275C15.0279 5.16183 14.3946 4.89955 13.7 4.89955C12.2088 4.89955 11 6.10838 11 7.59955C11 9.09072 12.2088 10.2996 13.7 10.2996C13.7 11.7907 14.9088 12.9996 16.4 12.9996Z',
} as const;

export const IconBone02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bone-02-stroke-rounded IconBone02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBone02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bone-02-duotone-rounded IconBone02DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBone02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bone-02-twotone-rounded IconBone02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBone02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bone-02-solid-rounded IconBone02SolidRounded"
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

export const IconBone02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bone-02-bulk-rounded IconBone02BulkRounded"
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

export const IconBone02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bone-02-stroke-sharp IconBone02StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBone02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bone-02-solid-sharp IconBone02SolidSharp"
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
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBone02: TheIconSelfPack = {
  name: 'Bone02',
  StrokeRounded: IconBone02StrokeRounded,
  DuotoneRounded: IconBone02DuotoneRounded,
  TwotoneRounded: IconBone02TwotoneRounded,
  SolidRounded: IconBone02SolidRounded,
  BulkRounded: IconBone02BulkRounded,
  StrokeSharp: IconBone02StrokeSharp,
  SolidSharp: IconBone02SolidSharp,
};