import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.2801 18.5714L20.8981 18.7376C21.3715 18.8649 21.6083 18.9286 21.804 18.7786C21.8041 18.7785 21.8043 18.7784 21.8044 18.7784C22 18.6283 22 18.4188 22 18V18C22 15.7909 20.2091 14 18 14C17.1234 14 16.3126 14.282 15.6535 14.7602M15.7143 17.4286L15.1017 17.2633C14.6289 17.1357 14.3926 17.0719 14.1968 17.2212C14.1963 17.2216 14.1956 17.2221 14.1952 17.2225C14 17.3726 14 17.5817 14 18V18C14 20.2091 15.7909 22 18 22C18.8474 22 19.6333 21.7365 20.2801 21.2869',
  d2: 'M22 12V9.21749C22 7.27787 22 6.30807 21.4142 5.7055C20.8284 5.10294 19.8856 5.10294 18 5.10294H15.9214C15.004 5.10294 14.9964 5.10116 14.1715 4.68834L10.8399 3.02114C9.44884 2.32504 8.75332 1.97699 8.01238 2.00118C7.27143 2.02537 6.59877 2.41808 5.25345 3.20351L4.02558 3.92037C3.03739 4.49729 2.54329 4.78576 2.27164 5.26564C2 5.74553 2 6.32993 2 7.49873V15.7157C2 17.2514 2 18.0193 2.34226 18.4467C2.57001 18.731 2.88916 18.9222 3.242 18.9856C3.77226 19.0808 4.42148 18.7018 5.71987 17.9437C6.60156 17.429 7.45011 16.8944 8.50487 17.0394C9.38869 17.1608 10.21 17.7185 11 18.1138',
  d3: 'M8 2L8 17',
  d4: 'M15 5V11.5',
  d5: 'M4.02558 3.92037L5.25345 3.20351C6.59128 2.42246 7.26392 2.02976 8 2.00162L8.01238 2.00118C8.75332 1.97699 9.44884 2.32504 10.8399 3.02114L14.1715 4.68834C14.5766 4.89106 14.7846 4.99467 15 5.04761C15.2232 5.10248 15.4545 5.10294 15.9214 5.10294H18C19.8856 5.10294 20.8284 5.10294 21.4142 5.7055C22 6.30807 22 7.27787 22 9.21749V17.362C22 17.4445 21.9934 17.5253 21.9806 17.604C21.7818 15.5807 20.0755 14 18 14C15.7909 14 14 15.7909 14 18C14 18.1189 14.0052 18.2365 14.0153 18.3528L11 18.1138C10.8135 18.0205 10.6253 17.9181 10.4349 17.8146L10.4349 17.8146C9.81874 17.4795 9.18005 17.1322 8.50487 17.0394C7.49945 16.9012 6.68141 17.3805 5.84342 17.8714L5.71987 17.9437C4.42151 18.7018 3.77226 19.0808 3.242 18.9856C2.88916 18.9222 2.57001 18.731 2.34226 18.4467C2 18.0193 2 17.2514 2 15.7157V7.49873C2 6.32993 2 5.74553 2.27164 5.26564C2.54329 4.78576 3.03739 4.49729 4.02558 3.92037Z',
  d6: 'M18.6861 14.1272C17.5789 13.576 16.2881 13.5907 15.2368 14.4192C14.803 14.7611 14.1742 14.6865 13.8324 14.2527C13.4905 13.819 13.5651 13.1902 13.9989 12.8484C15.7532 11.4659 17.8936 11.4985 19.5775 12.3368C21.2429 13.166 22.5702 14.8331 22.7225 16.871L22.7265 16.9237C22.7445 17.1587 22.7686 17.4749 22.7284 17.7531C22.6704 18.1536 22.4769 18.5457 22.0617 18.8185C21.5996 19.1221 21.1237 19.0927 20.7544 18.9797C20.4766 18.8946 20.176 18.7351 19.9248 18.6017L19.9248 18.6017L19.0248 18.1249C18.5368 17.8663 18.3507 17.2611 18.6092 16.7731C18.8678 16.285 19.473 16.099 19.961 16.3575L20.6955 16.7466C20.5114 15.6222 19.7282 14.646 18.6861 14.1272Z',
  d7: 'M14.5745 15.8807L15.4745 16.3575C15.9626 16.6161 16.1486 17.2213 15.8901 17.7093C15.6316 18.1973 15.0263 18.3834 14.5383 18.1249L13.8104 17.7392C14.0018 18.8523 14.7838 19.8298 15.8179 20.3571C16.921 20.9197 18.1816 20.9109 19.1871 20.1164C19.6205 19.774 20.2493 19.8478 20.5917 20.2811C20.9341 20.7145 20.8604 21.3433 20.427 21.6857C18.6964 23.0531 16.5718 22.9867 14.9093 22.1388C13.264 21.2998 11.9422 19.6367 11.7813 17.6164L11.777 17.5636C11.758 17.3297 11.7322 17.0134 11.7716 16.7347C11.8284 16.3322 12.022 15.9403 12.436 15.6668C12.8975 15.3619 13.3737 15.3897 13.7445 15.5029C14.0228 15.5878 14.3236 15.7475 14.5745 15.8807Z',
  d8: 'M8.75 17.1838C8.75 17.3864 8.75 17.4877 8.7977 17.5618C8.84539 17.636 8.94451 17.6811 9.14275 17.7714C9.36402 17.8723 9.6448 18.0102 10.0237 18.1986C10.1652 18.269 10.3285 18.148 10.31 17.991C10.3 17.9066 10.2916 17.8216 10.2848 17.736L10.2807 17.6858L10.278 17.6529C10.2599 17.4347 10.2218 16.974 10.2851 16.5254C10.3918 15.7701 10.7783 14.9638 11.608 14.4157C11.6923 14.3601 11.7768 14.31 11.8612 14.2651C12.007 14.1876 12.0799 14.1488 12.1086 14.0974C12.1373 14.046 12.132 13.9619 12.1214 13.7938C12.0715 13.0017 12.3987 12.1991 13.0692 11.6707C13.3812 11.4249 13.7024 11.2139 14.03 11.0356C14.1392 10.9761 14.1939 10.9464 14.2219 10.8991C14.25 10.8519 14.25 10.7923 14.25 10.6731V4.07979C14.25 3.89894 14.25 3.80852 14.205 3.73592C14.16 3.66332 14.0791 3.62306 13.9171 3.54254L11.1426 2.16295C10.4736 1.8303 9.92553 1.55778 9.45232 1.3752C9.16028 1.26252 9.01425 1.20618 8.88544 1.29069L8.87522 1.2977C8.75 1.38746 8.75 1.55645 8.75 1.89444L8.75 17.1838Z',
  d9: 'M22.75 11.8782C22.75 12.3478 22.75 12.5827 22.6301 12.6351C22.5103 12.6875 22.3294 12.5202 21.9676 12.1857C21.4458 11.7032 20.8614 11.3015 20.2448 10.9945C19.0513 10.4003 17.6461 10.1191 16.2378 10.3105C16.0039 10.3424 15.8869 10.3583 15.8185 10.2985C15.75 10.2387 15.75 10.1261 15.75 9.90076L15.75 4.33964C15.75 4.24511 15.8268 4.16857 15.9214 4.16857L18.0529 4.16857C18.9506 4.16854 19.7008 4.16851 20.2966 4.25039C20.9275 4.33708 21.4955 4.52797 21.9503 4.99278C22.4028 5.45531 22.5866 6.0292 22.6704 6.66607C22.7501 7.27181 22.75 8.03568 22.75 8.95563V11.8782Z',
  d10: 'M7.25 1.95737C7.25 1.62984 7.25 1.46607 7.13415 1.37599C7.1208 1.36561 7.10282 1.3541 7.08779 1.34634C6.95744 1.27893 6.81999 1.34242 6.54509 1.46938C6.08426 1.68221 5.55431 1.98964 4.90724 2.36503L3.6187 3.11251C3.15062 3.38402 2.75247 3.61497 2.44084 3.84C2.10848 4.07999 1.82705 4.3455 1.61998 4.70898C1.4134 5.07159 1.32728 5.45023 1.28746 5.86053C1.24997 6.2469 1.24999 6.71323 1.25 7.26437V15.5035C1.24999 16.2326 1.24998 16.8354 1.29639 17.3069C1.34327 17.783 1.44676 18.2613 1.75833 18.6479C2.09802 19.0693 2.57688 19.3558 3.11024 19.451C3.60335 19.539 4.0707 19.3911 4.5015 19.1966C4.92742 19.0043 5.49919 18.6726 6.11822 18.3135C6.40134 18.1492 6.6546 18.0023 6.89091 17.8802C7.07195 17.7867 7.16247 17.7399 7.20624 17.668C7.25 17.5962 7.25 17.5016 7.25 17.3124L7.25 1.95737Z',
  d11: 'M20 18L21.874 19C21.9562 18.6804 22 18.3453 22 18C22 15.7909 20.2091 14 18 14C17.1234 14 16.3126 14.282 15.6535 14.7602M16 18L14.126 17C14.0438 17.3196 14 17.6547 14 18C14 20.2091 15.7909 22 18 22C18.8474 22 19.6333 21.7365 20.2801 21.2869',
  d12: 'M22 11.9998V5H15L8.01175 2.00098L2 5.08297V19L8.01175 17L11 18.2827',
  d13: 'M15 5V12',
  d14: 'M18 15.15C17.3742 15.15 16.7981 15.3506 16.3287 15.6911L15.213 14.1533C15.9959 13.5852 16.9602 13.25 18 13.25C20.6234 13.25 22.75 15.3766 22.75 18C22.75 18.4086 22.6982 18.8064 22.6003 19.1868C22.5277 19.469 22.3295 19.7023 22.0627 19.8196C21.796 19.9369 21.4901 19.9253 21.233 19.7881L19.4528 18.8381L20.3472 17.1619L20.7859 17.3959C20.5088 16.1121 19.3667 15.15 18 15.15ZM13.9373 16.1804C14.204 16.0631 14.5099 16.0747 14.767 16.2119L16.5472 17.1619L15.6528 18.8381L15.2141 18.6041C15.4912 19.8879 16.6333 20.85 18 20.85C18.605 20.85 19.1635 20.6625 19.6239 20.3425L20.7083 21.9027C19.9398 22.4368 19.005 22.75 18 22.75C15.3766 22.75 13.25 20.6234 13.25 18C13.25 17.5914 13.3018 17.1936 13.3997 16.8132C13.4723 16.531 13.6705 16.2977 13.9373 16.1804Z',
  d15: 'M11.9308 19.4987L8.75 18.1333L8.75 1.25L14.25 3.61034V12.9995C12.7319 14.1398 11.75 15.9552 11.75 18C11.75 18.5166 11.8127 19.0186 11.9308 19.4987Z',
  d16: 'M22.75 13.9378V4.74835C22.75 4.33413 22.4142 3.99835 22 3.99835H15.75V12.1672C16.4481 11.8978 17.2068 11.75 18 11.75C19.901 11.75 21.6037 12.5987 22.75 13.9378Z',
  d17: 'M1.65785 4.16391L7.25 1.29703L7.25 18.044L2.23675 19.7118C2.00807 19.7879 1.75676 19.7495 1.56129 19.6085C1.36582 19.4675 1.25 19.2412 1.25 19.0002V4.83131C1.25 4.54995 1.40747 4.29226 1.65785 4.16391Z',
} as const;

export const IconMapsRefreshStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-refresh-stroke-rounded IconMapsRefreshStrokeRounded"
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

export const IconMapsRefreshDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-refresh-duotone-rounded IconMapsRefreshDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconMapsRefreshTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-refresh-twotone-rounded IconMapsRefreshTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMapsRefreshSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-refresh-solid-rounded IconMapsRefreshSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconMapsRefreshBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-refresh-bulk-rounded IconMapsRefreshBulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
    </TheIconWrapper>
  );
};

export const IconMapsRefreshStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-refresh-stroke-sharp IconMapsRefreshStrokeSharp"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconMapsRefreshSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-refresh-solid-sharp IconMapsRefreshSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfMapsRefresh: TheIconSelfPack = {
  name: 'MapsRefresh',
  StrokeRounded: IconMapsRefreshStrokeRounded,
  DuotoneRounded: IconMapsRefreshDuotoneRounded,
  TwotoneRounded: IconMapsRefreshTwotoneRounded,
  SolidRounded: IconMapsRefreshSolidRounded,
  BulkRounded: IconMapsRefreshBulkRounded,
  StrokeSharp: IconMapsRefreshStrokeSharp,
  SolidSharp: IconMapsRefreshSolidSharp,
};