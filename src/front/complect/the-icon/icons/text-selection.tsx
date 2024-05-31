import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.99805 3.02225C5.19567 2.97012 6.26974 2.90526 6.99805 4.51545M6.99805 4.51545C7.5553 3.26352 8.38724 2.90739 10.998 3.02225M6.99805 4.51545V18.9498M6.99805 18.9498C7.22903 20.6879 8.13369 21.1036 10.998 20.9407M6.99805 18.9498C6.69453 20.7315 5.77238 21.1739 2.99805 20.9407M3.99805 11.9815H9.99805',
  d2: 'M20.9709 15.9633V20.4429M20.9709 15.9633C21.0181 15.1438 21.0198 14.5197 20.9211 14.0102C20.6885 12.8092 19.4298 12.0855 18.2119 11.9383C17.0462 11.7974 16.1105 12.0966 15.164 13.4716M20.9709 15.9633L18.1316 15.9633C17.6954 15.9633 17.2554 15.9842 16.8351 16.1007C14.2664 16.8126 14.4547 20.4042 17.031 20.8468C17.3171 20.896 17.6093 20.9171 17.899 20.9042C18.5756 20.874 19.1999 20.5482 19.7356 20.1351C20.3632 19.6513 20.9709 18.9758 20.9709 17.9542V15.9633Z',
  d3: 'M15.1152 18.5C15.1152 17.1193 16.2345 16 17.6152 16H21.1152V17.5714C21.1152 19.465 19.5802 21 17.6866 21C16.2983 21 15.1152 19.9186 15.1152 18.5Z',
  d4: 'M21.0851 16.0551V20.5347M21.0851 16.0551C21.1323 15.2356 21.134 14.6115 21.0353 14.102C20.8027 12.901 19.544 12.1773 18.3261 12.0301C17.1604 11.8892 16.2247 12.1884 15.2782 13.5634M21.0851 16.0551H18.2458C17.8096 16.0551 17.3696 16.076 16.9493 16.1925C14.3806 16.9044 14.5689 20.496 17.1452 20.9386C17.4313 20.9878 17.7235 21.0089 18.0132 20.996C18.6898 20.9658 19.3141 20.64 19.8498 20.2269C20.4774 19.7431 21.0851 19.0676 21.0851 18.046V16.0551Z',
  d5: 'M3.11523 3.0242C5.31285 2.97207 6.38692 2.90721 7.11523 4.5174M7.11523 4.5174C7.67248 3.26547 8.50442 2.90934 11.1152 3.0242M7.11523 4.5174V18.9518M7.11523 18.9518C7.34621 20.6899 8.25087 21.1056 11.1152 20.9427M7.11523 18.9518C6.81171 20.7335 5.88956 21.1759 3.11523 20.9427M4.11523 11.9835H10.1152',
  d6: 'M20.9416 16.0311V20.5311M20.9416 16.0311C20.9888 15.208 21.0403 14.5862 20.9416 14.0744C20.709 12.8679 19.8531 12.0352 18.1871 11.9777C16.9222 11.934 15.9714 12.0563 15.1689 13.4978M20.9416 16.0311L18.1174 15.9701C17.6812 15.9701 17.1767 15.9842 16.7564 16.1012C14.328 16.7773 14.4252 20.4922 17.0016 20.9369C17.2878 20.9863 17.5799 21.0075 17.8697 20.9945C18.5463 20.9643 19.1705 20.637 19.7063 20.222C20.2284 19.7617 20.9416 19.0574 20.9416 18.0311V16.0311Z',
  d7: 'M3 3.02225C5.19762 2.97012 6.27169 2.90526 7 4.51545M7 4.51545C7.55725 3.26352 8.3892 2.90739 11 3.02225M7 4.51545V18.9498M7 18.9498C7.23098 20.6879 8.13564 21.1036 11 20.9407M7 18.9498C6.69648 20.7315 5.77433 21.1739 3 20.9407M4 11.9815H10',
  d8: 'M17.9243 11C17.9492 11 17.9744 11 18 11C18.0256 11 18.0508 11 18.0757 11C18.4657 10.9998 18.7734 10.9997 19.0475 11.0431C20.5451 11.2803 21.7197 12.4549 21.9569 13.9525C22.0003 14.2267 22.0002 14.5343 22 14.9243C22 14.9492 22 14.9745 22 15V15.9991L22 17.5715L22 17.5735V20.5C22 21.0523 21.5523 21.5 21 21.5C20.6832 21.5 20.4008 21.3527 20.2176 21.1229C19.4793 21.6739 18.5635 22 17.5714 22C15.6759 22 14 20.5149 14 18.5C14 16.567 15.567 15 17.5 15H20C20 14.4973 19.9969 14.3624 19.9815 14.2654C19.8799 13.6236 19.3765 13.1202 18.7347 13.0185C18.6376 13.0031 18.5027 13 18 13C17.4973 13 17.3624 13.0031 17.2653 13.0185C16.7519 13.0998 16.3265 13.4384 16.1251 13.9C15.9042 14.4062 15.3148 14.6375 14.8086 14.4166C14.3024 14.1957 14.0711 13.6063 14.292 13.1001C14.7615 12.0241 15.753 11.2331 16.9525 11.0431C17.2266 10.9997 17.5343 10.9998 17.9243 11ZM20 17H17.5C16.6716 17 16 17.6716 16 18.5C16 19.3224 16.6904 20 17.5714 20C18.9122 20 19.9992 18.9136 20 17.573L20 17.5715L20 17Z',
  d9: 'M5.0613 4.06431C4.59879 4.00213 3.97108 4 3 4C2.44772 4 2 3.55229 2 3C2 2.44772 2.44772 2 3 2C3.02202 2 3.04396 2 3.06583 2C3.95232 1.99995 4.71613 1.99991 5.32779 2.08215C5.9322 2.16341 6.51352 2.33871 7 2.76506C7.48648 2.33871 8.0678 2.16341 8.67221 2.08215C9.28387 1.99991 10.0477 1.99995 10.9342 2L11 2C11.5523 2 12 2.44772 12 3C12 3.55229 11.5523 4 11 4C10.0289 4 9.40121 4.00213 8.9387 4.06431C8.50496 4.12263 8.36902 4.21677 8.29289 4.2929C8.21677 4.36902 8.12262 4.50497 8.06431 4.93871C8.00212 5.40122 8 6.02893 8 7V11H10C10.5523 11 11 11.4477 11 12C11 12.5523 10.5523 13 10 13H8V17C8 17.0166 8 17.0331 8 17.0495C8.00009 17.9925 8.00319 18.6067 8.06431 19.0613C8.12262 19.495 8.21677 19.631 8.29289 19.7071C8.36902 19.7832 8.50496 19.8774 8.9387 19.9357C9.40121 19.9979 10.0289 20 11 20C11.5523 20 12 20.4477 12 21C12 21.5523 11.5523 22 11 22L10.9342 22C10.0477 22.0001 9.28387 22.0001 8.67221 21.9179C8.0678 21.8366 7.48648 21.6613 7 21.235C6.51352 21.6613 5.9322 21.8366 5.32779 21.9179C4.71613 22.0001 3.9523 22.0001 3.06581 22L3 22C2.44772 22 2 21.5523 2 21C2 20.4477 2.44772 20 3 20C3.97108 20 4.59879 19.9979 5.0613 19.9357C5.49504 19.8774 5.63098 19.7832 5.70711 19.7071C5.78323 19.631 5.87738 19.495 5.93569 19.0613C5.99697 18.6055 5.99993 17.9893 6 17.0422C6 17.0282 6 17.0141 6 17V13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H6V7C6 6.02893 5.99788 5.40122 5.93569 4.93871C5.87738 4.50497 5.78323 4.36902 5.70711 4.2929C5.63098 4.21677 5.49504 4.12263 5.0613 4.06431Z',
  d10: 'M15.4993 14.5501C15.4992 13.6932 16.0078 11.991 18.2524 12.0269C20.497 12.0628 21.0713 14.1041 20.9801 14.988V16.0824M20.9801 16.0824H17.31C16.6766 16.1376 14.7915 16.7051 15.0306 19.1699C15.1878 19.7856 15.8206 21.0127 17.2565 21.1967C18.5759 21.3657 19.2321 20.7323 19.5693 20.522C20.0375 20.2302 20.9349 19.3158 20.9801 18.106M20.9801 16.0824V18.106M20.9801 18.106V21.9558',
  d11: 'M11.0147 2.95801H6.9712M6.9712 2.95801H3.01592M6.9712 2.95801V11.9758M6.9712 11.9758H7.01463M6.9712 11.9758H4.05349M7.01463 11.9758H9.97576M7.01463 11.9758L7.00071 21.0495M7.00071 21.0495H11.0151M7.00071 21.0495H2.98633',
  d12: 'M14.002 14.5C14.002 12.567 15.569 11 17.502 11H17.752C19.823 11 21.502 12.6789 21.502 14.75L21.502 22H19.502V21.2753C18.8046 21.7335 17.9701 22 17.0734 22C15.1778 22 13.502 20.5149 13.502 18.5C13.502 16.567 15.069 15 17.002 15H19.502V14.75C19.502 13.7835 18.7185 13 17.752 13H17.502C16.6735 13 16.002 13.6716 16.002 14.5H14.002ZM19.502 17H17.002C16.1735 17 15.502 17.6716 15.502 18.5C15.502 19.3223 16.1924 20 17.0734 20C18.4146 20 19.502 18.9127 19.502 17.5714V17Z',
  d13: 'M5.50196 4.00002L2.50195 4L2.50196 2H10.502L10.502 4L7.50196 4.00002V11H9.50196V13H7.50196V20H10.502V22H2.50196V20H5.50196V13H3.50196V11H5.50196V4.00002Z',
} as const;

export const IconTextSelectionStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-selection-stroke-rounded IconTextSelectionStrokeRounded"
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

export const IconTextSelectionDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-selection-duotone-rounded IconTextSelectionDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconTextSelectionTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-selection-twotone-rounded IconTextSelectionTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextSelectionSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-selection-solid-rounded IconTextSelectionSolidRounded"
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

export const IconTextSelectionBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-selection-bulk-rounded IconTextSelectionBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextSelectionStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-selection-stroke-sharp IconTextSelectionStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextSelectionSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-selection-solid-sharp IconTextSelectionSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTextSelection: TheIconSelfPack = {
  name: 'TextSelection',
  StrokeRounded: IconTextSelectionStrokeRounded,
  DuotoneRounded: IconTextSelectionDuotoneRounded,
  TwotoneRounded: IconTextSelectionTwotoneRounded,
  SolidRounded: IconTextSelectionSolidRounded,
  BulkRounded: IconTextSelectionBulkRounded,
  StrokeSharp: IconTextSelectionStrokeSharp,
  SolidSharp: IconTextSelectionSolidSharp,
};