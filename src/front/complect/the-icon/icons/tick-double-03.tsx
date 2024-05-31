import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.32612 18.092C6.99877 18.3667 6.71531 18.5029 6.42014 18.5C5.73998 18.4931 5.17341 17.7974 4.04028 16.4061L2.52531 14.5458C1.90142 13.7798 1.82509 12.6392 2.34013 11.7785C2.92845 10.7954 4.05674 10.52 4.93607 11.0133M10.9222 8.5C11.7133 7.66585 12.5575 6.8322 13.4783 5.98679C13.9225 5.57893 14.4762 5.43447 15 5.52681',
  d2: 'M14.1057 16.311C16.3656 13.6916 18.5472 11.9146 21.2876 9.39818C22.1078 8.64496 22.2345 7.3247 21.591 6.3893C20.9072 5.39517 19.6077 5.19647 18.7282 5.98679C16.218 8.24236 14.2651 10.4141 12.4126 12.7354C12.3154 12.8572 12.2668 12.9181 12.2163 12.9524C12.0884 13.0393 11.9285 13.0403 11.7998 12.9548C11.749 12.9211 11.7003 12.8613 11.6029 12.7419L10.6158 11.5311C9.71508 10.4263 8.09956 10.5486 7.34754 11.7785C6.82128 12.6392 6.89927 13.7798 7.53675 14.5458L9.0847 16.4061C10.2425 17.7974 10.8214 18.4931 11.5164 18.5C12.2114 18.5068 12.8428 17.7748 14.1057 16.311Z',
  d3: 'M12.9269 5.25018C13.6012 4.63109 14.4693 4.39582 15.2985 4.54199C15.8424 4.63786 16.2056 5.1565 16.1098 5.7004C16.0139 6.2443 15.4953 6.6075 14.9514 6.51163C14.7329 6.47312 14.4937 6.52677 14.2795 6.7234C13.3759 7.55307 12.5481 8.37053 11.7727 9.18813C11.3927 9.58886 10.7597 9.60563 10.359 9.22559C9.95828 8.84554 9.94151 8.2126 10.3216 7.81187C11.1284 6.96116 11.9889 6.11133 12.9269 5.25018ZM4.57174 11.8854C4.18443 11.6681 3.64533 11.7536 3.32317 12.292C3.01975 12.799 3.07287 13.4812 3.42565 13.9144L4.94062 15.7746C5.52527 16.4925 5.90264 16.9527 6.21253 17.246C6.36026 17.3859 6.45594 17.4514 6.51265 17.4813C6.53239 17.4917 6.54494 17.4965 6.55115 17.4986C6.5555 17.497 6.56171 17.4945 6.57002 17.4907C6.61098 17.472 6.68735 17.4275 6.80819 17.326C7.23123 16.971 7.86199 17.0261 8.21704 17.4491C8.57209 17.8722 8.51697 18.5029 8.09394 18.858C7.68682 19.1997 7.17553 19.5063 6.53506 19.4999C5.81597 19.4927 5.26951 19.1074 4.83751 18.6984C4.42165 18.3047 3.96235 17.7406 3.43159 17.0888L1.87487 15.1773C0.979853 14.0783 0.880323 12.4793 1.60699 11.265C2.46146 9.83712 4.17895 9.37181 5.5503 10.1412C6.03196 10.4114 6.20337 11.0209 5.93314 11.5026C5.66292 11.9842 5.0534 12.1556 4.57174 11.8854ZM6.54303 17.501C6.54304 17.501 6.54351 17.5009 6.54441 17.5007L6.54303 17.501Z',
  d4: 'M18.3519 5.42993C19.5963 4.31168 21.4155 4.63016 22.3339 5.96525C23.1788 7.19349 23.0285 8.93348 21.9198 9.9516C21.26 10.5575 20.6371 11.1168 20.0409 11.6522C18.1291 13.3689 16.4924 14.8386 14.7986 16.8019L14.7653 16.8405C14.1622 17.5396 13.6638 18.1173 13.2269 18.5135C12.7842 18.915 12.2717 19.2572 11.634 19.2509C11.008 19.2448 10.5152 18.918 10.0893 18.5234C9.67703 18.1413 9.21697 17.5884 8.66663 16.927L7.08521 15.0266C6.23892 14.0096 6.14167 12.5183 6.83264 11.3882C7.84718 9.72901 10.0859 9.54199 11.322 11.0582L12.1285 12.0474C13.9492 9.78337 15.885 7.64659 18.3519 5.42993Z',
  d5: 'M8.00195 17.5L7.00195 18.5L2.00195 14L4.50195 11L6.00195 12.25M11.002 9.5L14.502 5.5L16.502 7.5',
  d6: 'M21.9949 8.49244L19.0093 5.50683C19.0053 5.50283 18.9988 5.50295 18.995 5.50708L12.002 12.9995L9.50967 11.0056C9.50542 11.0022 9.49923 11.0029 9.49574 11.007L7.00818 13.9921C7.00474 13.9962 7.00517 14.0024 7.00917 14.006L11.995 18.4932C11.9989 18.4967 12.005 18.4966 12.0087 18.4928L21.9949 8.50659C21.9988 8.50268 21.9988 8.49635 21.9949 8.49244Z',
  d7: 'M18.9871 4.75011C19.1905 4.74661 19.3865 4.82585 19.5303 4.96967L22.5303 7.96967C22.8232 8.26256 22.8232 8.73744 22.5303 9.03033L12.5303 19.0303C12.2483 19.3124 11.7948 19.3243 11.4983 19.0575L6.49829 14.5575C6.19866 14.2878 6.16578 13.8295 6.42384 13.5199L8.92384 10.5199C9.18528 10.2061 9.64965 10.1592 9.96853 10.4143L11.9259 11.9802L18.4517 4.98826C18.5905 4.83957 18.7837 4.75362 18.9871 4.75011Z',
  d8: 'M14.4751 4.75042C14.6825 4.74351 14.8836 4.82289 15.0303 4.96967L17.0303 6.96967L15.9697 8.03033L14.5365 6.59719L11.5644 9.99388L10.4356 9.00612L13.9356 5.00612C14.0723 4.8499 14.2676 4.75732 14.4751 4.75042ZM3.92384 10.5199C4.18902 10.2017 4.66194 10.1587 4.98015 10.4238L6.48015 11.6738L5.51987 12.8262L4.59604 12.0563L3.03837 13.9255L6.97283 17.4665L7.46968 16.9697L8.53034 18.0303L7.53034 19.0303C7.24828 19.3124 6.79478 19.3243 6.49829 19.0575L1.49829 14.5575C1.19866 14.2878 1.16578 13.8295 1.42384 13.5199L3.92384 10.5199Z',
} as const;

export const IconTickDouble03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-double-03-stroke-rounded IconTickDouble03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTickDouble03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-double-03-duotone-rounded IconTickDouble03DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconTickDouble03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-double-03-twotone-rounded IconTickDouble03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconTickDouble03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-double-03-solid-rounded IconTickDouble03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTickDouble03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-double-03-bulk-rounded IconTickDouble03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTickDouble03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-double-03-stroke-sharp IconTickDouble03StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTickDouble03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-double-03-solid-sharp IconTickDouble03SolidSharp"
    >
      <path 
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

export const iconPackOfTickDouble03: TheIconSelfPack = {
  name: 'TickDouble03',
  StrokeRounded: IconTickDouble03StrokeRounded,
  DuotoneRounded: IconTickDouble03DuotoneRounded,
  TwotoneRounded: IconTickDouble03TwotoneRounded,
  SolidRounded: IconTickDouble03SolidRounded,
  BulkRounded: IconTickDouble03BulkRounded,
  StrokeSharp: IconTickDouble03StrokeSharp,
  SolidSharp: IconTickDouble03SolidSharp,
};