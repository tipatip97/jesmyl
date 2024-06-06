import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.6001 11.923C11.6727 2.46869 17.9891 2.35967 20.5132 3.48695C21.6405 6.01105 21.5314 12.3274 12.0772 17.4C11.9791 16.8364 11.4339 15.3599 10.037 13.9631C8.64022 12.5663 7.16374 12.021 6.6001 11.923Z',
  d2: 'M13.3501 16.95C15.1886 17.85 15.3849 19.4638 15.6396 21C15.6396 21 19.4902 18.1535 17.0271 14.25',
  d3: 'M7.04996 10.7269C6.14996 8.88844 4.53615 8.69215 3 8.43746C3 8.43746 5.8465 4.58682 9.74997 7.04993',
  d4: 'M6.01808 14.9115C5.50625 15.4233 4.63613 16.9076 5.25033 18.7503C7.09293 19.3645 8.57725 18.4943 9.08909 17.9825',
  d5: 'M17.3008 8.4502C17.3008 7.4837 16.5173 6.7002 15.5508 6.7002C14.5843 6.7002 13.8008 7.4837 13.8008 8.4502C13.8008 9.41669 14.5843 10.2002 15.5508 10.2002C16.5173 10.2002 17.3008 9.41669 17.3008 8.4502Z',
  d6: 'M21.4589 2.54105C18.6544 1.28853 11.6363 1.40966 6 11.9144C6.62626 12.0233 8.26679 12.6292 9.81881 14.1812C11.3708 15.7332 11.9767 17.3737 12.0856 18C22.5903 12.3637 22.7115 5.3456 21.4589 2.54105ZM16 6C17.1046 6 18 6.89543 18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6Z',
  d7: 'M6 11.9144C11.6363 1.40966 18.6544 1.28853 21.4589 2.54105C22.7115 5.3456 22.5903 12.3637 12.0856 18C11.9767 17.3737 11.3708 15.7332 9.81881 14.1812C8.26679 12.6292 6.62626 12.0233 6 11.9144Z',
  d8: 'M13.5 17.5C15.5428 18.5 15.7609 20.2931 16.0439 21.9999C16.0439 21.9999 20.3223 18.8372 17.5856 14.5',
  d9: 'M6.49995 10.5858C5.49995 8.54303 3.70683 8.32493 2 8.04194C2 8.04194 5.16277 3.76346 9.49995 6.50024',
  d10: 'M5.35342 15.2342C4.78472 15.8029 3.81792 17.4522 4.50037 19.4995C6.5477 20.182 8.19694 19.2152 8.76564 18.6465',
  d11: 'M18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10C17.1046 10 18 9.10457 18 8Z',
  d12: 'M21.9152 2.42838C21.8416 2.27939 21.721 2.15877 21.572 2.08517C19.8973 1.25793 17.1101 0.78918 14.059 1.92164C10.9916 3.06013 7.74047 5.78394 5.07765 11.1983C4.97579 11.4054 4.97406 11.6477 5.07295 11.8562C5.17183 12.0648 5.36052 12.2168 5.58534 12.269C6.09522 12.3874 7.71571 13.0456 9.33524 14.6651C10.9548 16.2847 11.613 17.9052 11.7314 18.415C11.7836 18.6399 11.9356 18.8285 12.1441 18.9274C12.3527 19.0263 12.595 19.0246 12.8021 18.9227C18.2164 16.2599 20.9402 13.0088 22.0787 9.94142C23.2112 6.8903 22.7424 4.10306 21.9152 2.42838ZM18.0273 5.97293C19.012 6.95767 19.012 8.55425 18.0273 9.53899C17.0425 10.5237 15.446 10.5237 14.4612 9.53899C13.4765 8.55425 13.4765 6.95767 14.4612 5.97293C15.446 4.98819 17.0425 4.98819 18.0273 5.97293ZM1.88528 8.52783C1.61913 8.48463 1.3961 8.30304 1.29985 8.05117C1.2036 7.79931 1.24868 7.51525 1.41819 7.30556L1.41993 7.30295C1.52968 7.09849 1.88528 6.78461 2.04972 6.65296C2.44027 6.29572 3.01158 5.84195 3.72785 5.46987C4.5481 5.04377 5.5651 4.72491 6.70316 4.77954C7.1263 4.79985 7.33786 4.81001 7.41386 4.97959C7.48986 5.14917 7.34266 5.33114 7.04825 5.69507L7.04824 5.69508C6.26599 6.66205 5.51087 7.77066 4.79385 9.0348C4.64442 9.29826 4.56971 9.42998 4.45053 9.46393C4.33136 9.49787 4.19434 9.42304 3.9203 9.27339C3.2612 8.91344 2.56731 8.63854 1.88528 8.52783ZM15.4708 22.1134C15.514 22.3796 15.6956 22.6026 15.9475 22.6989C16.1994 22.7951 16.4834 22.75 16.6931 22.5805L16.6957 22.5788C16.9002 22.469 17.2141 22.1134 17.3457 21.949C17.7029 21.5584 18.1567 20.9871 18.5288 20.2709C18.9549 19.4506 19.2738 18.4336 19.2191 17.2955C19.1988 16.8724 19.1886 16.6608 19.0191 16.5848C18.8495 16.5088 18.6675 16.656 18.3036 16.9504L18.3036 16.9504C17.3366 17.7327 16.228 18.4878 14.9638 19.2048C14.7004 19.3542 14.5687 19.429 14.5347 19.5481C14.5008 19.6673 14.5756 19.8043 14.7253 20.0784C15.0852 20.7375 15.3601 21.4314 15.4708 22.1134ZM6.2401 13.8534C7.81298 14.6398 9.35802 16.185 10.1445 17.7577C10.311 18.0907 10.2105 18.4952 9.90756 18.7116L9.90653 18.7124C9.62551 18.9931 8.79804 19.3018 8.41943 19.421C7.55752 19.6855 6.32724 19.8192 5.1499 19.0976C5.04815 19.0353 4.96259 18.9497 4.90023 18.848C4.17863 17.6706 4.31231 16.4403 4.57686 15.5784C4.69966 15.0573 5.10094 14.3692 5.28624 14.0903C5.5026 13.7874 5.90716 13.6869 6.2401 13.8534Z',
  d13: 'M6.2401 13.8534C7.81298 14.6398 9.35802 16.185 10.1445 17.7577C10.311 18.0907 10.2105 18.4952 9.90756 18.7116L9.90653 18.7124C9.62551 18.9931 8.79804 19.3018 8.41943 19.421C7.55752 19.6855 6.32724 19.8192 5.1499 19.0976C5.04815 19.0353 4.96259 18.9497 4.90023 18.848C4.17863 17.6706 4.31231 16.4403 4.57686 15.5784C4.69966 15.0573 5.10095 14.3692 5.28624 14.0903C5.5026 13.7874 5.90716 13.6869 6.2401 13.8534Z',
  d14: 'M15.4708 22.1134C15.514 22.3796 15.6956 22.6026 15.9475 22.6989C16.1994 22.7951 16.4834 22.75 16.6931 22.5805L16.6957 22.5788C16.9002 22.469 17.2141 22.1134 17.3457 21.949C17.7029 21.5584 18.1567 20.9871 18.5288 20.2709C18.9549 19.4506 19.2738 18.4336 19.2191 17.2955C19.1988 16.8724 19.1886 16.6608 19.0191 16.5848C18.8495 16.5088 18.6675 16.656 18.3036 16.9504C17.3366 17.7327 16.228 18.4878 14.9638 19.2048C14.7004 19.3542 14.5687 19.429 14.5347 19.5481C14.5008 19.6673 14.5756 19.8043 14.7253 20.0784C15.0852 20.7375 15.3601 21.4314 15.4708 22.1134Z',
  d15: 'M1.88528 8.52783C1.61913 8.48463 1.3961 8.30304 1.29985 8.05117C1.2036 7.79931 1.24868 7.51525 1.41819 7.30556L1.41993 7.30295C1.52968 7.09849 1.88528 6.78461 2.04972 6.65296C2.44027 6.29572 3.01158 5.84195 3.72785 5.46987C4.5481 5.04377 5.5651 4.72491 6.70316 4.77954C7.1263 4.79985 7.33786 4.81001 7.41386 4.97959C7.48986 5.14917 7.34265 5.33114 7.04824 5.69508C6.26599 6.66205 5.51087 7.77066 4.79385 9.0348C4.64442 9.29826 4.56971 9.42998 4.45053 9.46393C4.33136 9.49787 4.19434 9.42304 3.9203 9.27339C3.2612 8.91344 2.56731 8.63854 1.88528 8.52783Z',
  d16: 'M21.9152 2.42838C21.8416 2.27939 21.721 2.15877 21.572 2.08517C19.8973 1.25793 17.1101 0.78918 14.059 1.92164C10.9916 3.06013 7.74047 5.78394 5.07765 11.1983C4.97579 11.4054 4.97406 11.6477 5.07295 11.8562C5.17183 12.0648 5.36052 12.2168 5.58534 12.269C6.09522 12.3874 7.71571 13.0456 9.33524 14.6651C10.9548 16.2847 11.613 17.9052 11.7314 18.415C11.7836 18.6399 11.9356 18.8285 12.1441 18.9274C12.3527 19.0263 12.595 19.0246 12.8021 18.9227C18.2164 16.2599 20.9402 13.0088 22.0787 9.94142C23.2112 6.8903 22.7424 4.10306 21.9152 2.42838Z',
  d17: 'M18.0273 5.97293C19.012 6.95767 19.012 8.55425 18.0273 9.53899C17.0425 10.5237 15.446 10.5237 14.4612 9.53899C13.4765 8.55425 13.4765 6.95767 14.4612 5.97293C15.446 4.98819 17.0425 4.98819 18.0273 5.97293Z',
  d18: 'M6.44965 12.0133C11.7514 1.93355 18.353 1.81731 20.9911 3.01916C22.1692 5.71025 22.0553 12.4445 12.1741 17.8527M6.44965 12.0133L12.1741 17.8527M6.44965 12.0133L2.5 8.10648C2.5 8.10648 5.47505 4.00109 9.5548 6.62715M12.1741 17.8527L15.7103 21.5C15.7103 21.5 19.6708 18.5135 17.2209 14.403',
  d19: 'M5.70866 14.4998C5.07677 15.1317 4.00255 16.9642 4.76082 19.239C7.03564 19.9973 8.86813 18.9231 9.50002 18.2912',
  d20: 'M17.5 8.5C17.5 7.39543 16.6046 6.5 15.5 6.5C14.3954 6.5 13.5 7.39543 13.5 8.5C13.5 9.60457 14.3954 10.5 15.5 10.5C16.6046 10.5 17.5 9.60457 17.5 8.5Z',
  d21: 'M10.3106 18.6055L9.56159 19.1075C8.57417 19.7692 6.80876 20.4282 4.72391 19.7337L4.37225 19.6165L4.25503 19.2651C3.56008 17.1814 4.21948 15.4171 4.88157 14.4302L5.38383 13.6816L10.3106 18.6055Z',
  d22: 'M21.3099 2.33304C18.2528 0.941128 11.3452 1.33888 5.97249 11.5476L5.72095 12.0256L12.1506 18.5806L12.643 18.3112C22.6697 12.8266 23.0335 5.79599 21.6816 2.71014L21.5679 2.45053L21.3099 2.33304ZM15.5736 10.9219C14.1927 10.9219 13.0725 9.80297 13.0725 8.42188C13.0725 7.04078 14.1927 5.92188 15.5736 5.92188C16.9545 5.92188 18.0747 7.04078 18.0747 8.42188C18.0747 9.80297 16.9545 10.9219 15.5736 10.9219Z',
  d23: 'M18.0881 19.6351C17.7094 20.3327 17.2498 20.882 16.8885 21.2552C16.7068 21.4429 15.8218 22.1492 15.7053 22.2501L13.0087 19.5183L13.2349 19.3945C15.4426 18.1869 17.2193 16.8928 18.6327 15.5668C19.0475 17.1691 18.6643 18.5737 18.0881 19.6351Z',
  d24: 'M1.75024 8.11294C1.85055 7.99271 2.53416 7.10438 2.72107 6.91694C3.09258 6.54436 3.64052 6.07007 4.33752 5.68221C5.48712 5.04247 7.03772 4.64857 8.79741 5.29347C7.4366 6.76408 6.10971 8.63174 4.87759 10.9729L4.77179 11.1739L1.75024 8.11294Z',
};

export const IconStartUp02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="start-up-02-stroke-rounded IconStartUp02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconStartUp02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="start-up-02-duotone-rounded IconStartUp02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStartUp02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="start-up-02-twotone-rounded IconStartUp02TwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStartUp02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="start-up-02-solid-rounded IconStartUp02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStartUp02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="start-up-02-bulk-rounded IconStartUp02BulkRounded"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStartUp02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="start-up-02-stroke-sharp IconStartUp02StrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStartUp02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="start-up-02-solid-sharp IconStartUp02SolidSharp"
    >
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStartUp02: TheIconSelfPack = {
  name: 'StartUp02',
  StrokeRounded: IconStartUp02StrokeRounded,
  DuotoneRounded: IconStartUp02DuotoneRounded,
  TwotoneRounded: IconStartUp02TwotoneRounded,
  SolidRounded: IconStartUp02SolidRounded,
  BulkRounded: IconStartUp02BulkRounded,
  StrokeSharp: IconStartUp02StrokeSharp,
  SolidSharp: IconStartUp02SolidSharp,
};