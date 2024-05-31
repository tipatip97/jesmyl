import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 5C3.14864 6.79995 2 9.3082 2 12.0825C2 17.5598 6.47715 22 12 22C14.7255 22 17.1962 20.9187 19 19.165',
  d2: 'M15.5 16C14.8828 19.5318 13.6403 22 12 22C9.79086 22 8 17.5228 8 12C8 10.7687 8.08902 9.58934 8.25184 8.5',
  d3: 'M2 12H12',
  d4: 'M7.16204 2.39775C6.79227 2.5844 6.64381 3.03547 6.83046 3.40525C7.01711 3.77503 7.46818 3.92348 7.83796 3.73683L7.16204 2.39775ZM20.2627 16.1619C20.076 16.5317 20.2244 16.9828 20.5941 17.1695C20.9639 17.3562 21.415 17.2078 21.6017 16.8381L20.2627 16.1619ZM16 12H15.25C15.25 12.4142 15.5858 12.75 16 12.75V12ZM8.30261 4.7262C8.1514 5.11183 8.34143 5.54702 8.72705 5.69824C9.11268 5.84945 9.54787 5.65942 9.69909 5.2738L8.30261 4.7262ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM7.83796 3.73683C9.08814 3.10579 10.5014 2.75 12 2.75V1.25C10.2613 1.25 8.61705 1.66333 7.16204 2.39775L7.83796 3.73683ZM21.25 12C21.25 13.4986 20.894 14.9118 20.2627 16.1619L21.6017 16.8381C22.3363 15.3831 22.75 13.7389 22.75 12H21.25ZM12 2.75C12.2796 2.75 12.6219 2.88858 13.0121 3.30118C13.4038 3.71536 13.7911 4.35495 14.1321 5.20748C14.8124 6.90837 15.25 9.30957 15.25 12H16.75C16.75 9.16759 16.2921 6.56878 15.5248 4.65039C15.1419 3.69327 14.6673 2.86839 14.1019 2.27052C13.535 1.67106 12.825 1.25 12 1.25V2.75ZM9.69909 5.2738C10.0345 4.41855 10.4545 3.76449 10.8831 3.33637C11.3161 2.90388 11.7049 2.75 12 2.75V1.25C11.1762 1.25 10.4284 1.67044 9.82303 2.27511C9.21329 2.88415 8.69322 3.73009 8.30261 4.7262L9.69909 5.2738ZM16 12.75H22V11.25H16V12.75Z',
  d5: 'M2 2L22.0004 22.0004',
  d6: 'M2 12.0008C2 17.5237 6.47715 22.0008 12 22.0008C14.7255 22.0008 17.1962 20.9105 19 19.1422L5 4.85938C3.14864 6.6743 2 9.20341 2 12.0008Z',
  d7: 'M4.86096 3.77344C3.07966 5.33394 1.80999 7.46849 1.33789 9.88991C1.24347 10.3742 1.19626 10.6164 1.34722 10.7999C1.49818 10.9834 1.76037 10.9834 2.28475 10.9834H5.99473C6.4489 10.9834 6.67599 10.9834 6.82072 10.8491C6.96545 10.7147 6.98312 10.4814 7.01844 10.0148C7.11415 8.75062 7.30022 7.55627 7.56309 6.47556L4.86096 3.77344Z',
  d8: 'M9.27388 8.18636C9.17741 8.74321 9.10103 9.33049 9.04775 9.94222C9.00584 10.4233 8.98489 10.6638 9.13447 10.8272C9.28404 10.9906 9.53259 10.9906 10.0297 10.9906H12.0781L9.27388 8.18636Z',
  d9: 'M14.0938 13.0063L14.9664 13.8789C14.8334 15.5309 14.5458 17.2062 13.9249 18.7501C13.5864 19.5917 13.2087 20.2051 12.8411 20.5917C12.4756 20.9761 12.1909 21.0683 11.9996 21.0683C11.8084 21.0683 11.5237 20.9761 11.1581 20.5917C10.7906 20.2051 10.4129 19.5917 10.0744 18.7501C9.57762 17.515 9.20811 15.8955 9.04775 14.0546C9.00584 13.5735 8.98489 13.333 9.13447 13.1696C9.28404 13.0062 9.53259 13.0062 10.0297 13.0062C11.3844 13.0062 12.7391 13.0026 14.0938 13.0063Z',
  d10: 'M16.7858 15.6983L20.2203 19.1328C18.7223 20.8717 16.6864 22.1305 14.3723 22.648C13.9697 22.7381 13.7684 22.7831 13.7322 22.7162C13.6959 22.6492 13.8543 22.4944 14.171 22.1848C14.9132 21.4591 15.4143 20.5071 15.7947 19.552C16.2327 18.4525 16.5711 17.1418 16.7858 15.6983Z',
  d11: 'M2.28479 13.0133H5.99473C6.44889 13.0133 6.67599 13.0133 6.82072 13.1477C6.96545 13.282 6.98312 13.5153 7.01844 13.9819C7.17915 16.1047 7.5946 18.0305 8.20067 19.552C8.58091 20.5066 9.08159 21.458 9.82312 22.1835C10.1398 22.4934 10.2981 22.6483 10.2618 22.7152C10.2256 22.7821 10.0242 22.737 9.62158 22.6467C5.43809 21.7085 2.1648 18.3476 1.33793 14.1068C1.2435 13.6225 1.19628 13.3804 1.34724 13.1968C1.4982 13.0133 1.7604 13.0133 2.28479 13.0133Z',
  d12: 'M14.8 10.8856L9.83077 5.91641C9.90801 5.68299 9.9894 5.46005 10.0745 5.24839C10.413 4.4068 10.7907 3.79337 11.1583 3.40682C11.5238 3.0224 11.8085 2.93019 11.9998 2.93019C12.191 2.93019 12.4757 3.0224 12.8413 3.40682C13.2088 3.79337 13.5865 4.4068 13.925 5.24839C14.4218 6.48351 14.7913 8.10301 14.9517 9.94395C14.9936 10.425 15.0145 10.6655 14.8649 10.8289C14.8451 10.8506 14.8236 10.8693 14.8 10.8856Z',
  d13: 'M21.3961 17.4818L17.1233 13.2089C17.1384 13.1871 17.1555 13.1674 17.1748 13.1494C17.3195 13.015 17.5466 13.015 18.0008 13.015H21.7154C22.2398 13.015 22.5019 13.015 22.6529 13.1986C22.8039 13.3821 22.7566 13.6243 22.6622 14.1086C22.4268 15.3162 21.9929 16.4525 21.3961 17.4818Z',
  d14: 'M8.24687 4.33251L6.50195 2.58759C7.458 2.02319 8.50763 1.60149 9.62181 1.35162C10.0246 1.2613 10.226 1.21614 10.2622 1.28307C10.2985 1.34999 10.1401 1.50495 9.82336 1.81486C9.11096 2.51187 8.62171 3.41847 8.24687 4.33251Z',
  d15: 'M22.6529 10.8016C22.502 10.9852 22.2398 10.9852 21.7154 10.9852H18.0008C17.5466 10.9852 17.3195 10.9852 17.1748 10.8508C17.0301 10.7164 17.0124 10.4831 16.9771 10.0166C16.8164 7.89382 16.4009 5.96801 15.7949 4.44646C15.4144 3.49129 14.9133 2.5393 14.1711 1.81363C13.8543 1.5039 13.6958 1.34903 13.7321 1.28209C13.7683 1.21516 13.9697 1.26019 14.3724 1.35026C18.5589 2.28656 21.835 5.6487 22.6623 9.89164C22.7567 10.3759 22.8039 10.6181 22.6529 10.8016Z',
  d16: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7076 21.2933C23.0981 21.6839 23.0981 22.317 22.7076 22.7076C22.317 23.0981 21.6839 23.0981 21.2933 22.7076L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d17: 'M12 2C17.5228 2 22 6.47715 22 12M12 2C10.3814 2 8.85259 2.38456 7.5 3.06729M12 2C14.2091 2 16 6.47715 16 12H22M12 2C10.881 2 9.72682 3.14864 9.00085 5M22 12C22 13.6187 21.6151 15.1474 20.9322 16.5',
  d18: 'M21.3368 22.75L1.25098 2.66421L2.66519 1.25L22.751 21.3358L21.3368 22.75Z',
  d19: 'M14.9912 10.9929C14.8975 8.72021 14.491 6.71622 13.9071 5.25243C13.5716 4.41137 13.1973 3.79832 12.833 3.41201C12.4707 3.02782 12.1886 2.93567 11.999 2.93567C11.8095 2.93567 11.5273 3.02782 11.165 3.41201C10.8007 3.79832 10.4264 4.41137 10.0909 5.25243C9.97105 5.55299 9.85864 5.87633 9.75488 6.22008L14.5277 10.9929H14.9912Z',
  d20: 'M12.833 20.588C13.1973 20.2017 13.5716 19.5886 13.9071 18.7476C14.3279 17.6927 14.6565 16.3574 14.8424 14.8431L13.0064 13.0071H9.00681C9.10058 15.2798 9.50707 17.2838 10.0909 18.7476C10.4264 19.5886 10.8007 20.2017 11.165 20.588C11.5273 20.9722 11.8095 21.0643 11.999 21.0643C12.1886 21.0643 12.4707 20.9722 12.833 20.588Z',
  d21: 'M17.0014 13.0071H22.749C22.593 14.7038 22.0465 16.2871 21.2006 17.6658L16.9809 13.4461C16.989 13.3006 16.9958 13.1543 17.0014 13.0071Z',
  d22: 'M13.292 22.75C13.665 22.5537 13.9997 22.2824 14.2924 21.972C14.8893 21.3391 15.3805 20.4772 15.772 19.4957C16.1113 18.6451 16.3904 17.6672 16.5981 16.5988L19.644 19.6447C17.9757 21.3225 15.7619 22.4544 13.292 22.75Z',
  d23: 'M22.749 10.9929H17.0014C16.9068 8.50805 16.4647 6.24088 15.772 4.50434C15.3805 3.52283 14.8893 2.66095 14.2924 2.02797C13.9997 1.71759 13.665 1.44629 13.2919 1.25C18.3168 1.8514 22.2819 5.91402 22.749 10.9929Z',
  d24: 'M6.99667 10.9929H1.24902C1.48657 8.41035 2.62851 6.0906 4.35431 4.35504L7.40003 7.40076C7.18369 8.51374 7.04494 9.72497 6.99667 10.9929Z',
  d25: 'M9.7057 2.02797C9.99839 1.71759 10.333 1.44629 10.7061 1.25C9.11263 1.44072 7.62574 1.9795 6.32318 2.78838L8.17338 4.63858C8.19076 4.59349 8.2083 4.54874 8.22601 4.50434C8.6175 3.52283 9.10878 2.66095 9.7057 2.02797Z',
  d26: 'M1.24902 13.0071H6.99667C7.09128 15.492 7.53337 17.7591 8.22601 19.4957C8.6175 20.4772 9.10878 21.3391 9.7057 21.972C9.99839 22.2824 10.333 22.5537 10.7061 22.75C5.68122 22.1486 1.71619 18.086 1.24902 13.0071Z',
  d27: 'M10.9921 10.9929H9.00681C9.03301 10.3578 9.08364 9.74366 9.15573 9.15646L10.9921 10.9929Z',
} as const;

export const IconNoInternetStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="no-internet-stroke-rounded IconNoInternetStrokeRounded"
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
        strokeLinecap="round" 
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
        fill="var(--icon-fill)" 
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

export const IconNoInternetDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="no-internet-duotone-rounded IconNoInternetDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
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
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
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

export const IconNoInternetTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="no-internet-twotone-rounded IconNoInternetTwotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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

export const IconNoInternetSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="no-internet-solid-rounded IconNoInternetSolidRounded"
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoInternetBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="no-internet-bulk-rounded IconNoInternetBulkRounded"
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoInternetStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="no-internet-stroke-sharp IconNoInternetStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
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
        d={d.d17} 
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

export const IconNoInternetSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="no-internet-solid-sharp IconNoInternetSolidSharp"
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
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNoInternet: TheIconSelfPack = {
  name: 'NoInternet',
  StrokeRounded: IconNoInternetStrokeRounded,
  DuotoneRounded: IconNoInternetDuotoneRounded,
  TwotoneRounded: IconNoInternetTwotoneRounded,
  SolidRounded: IconNoInternetSolidRounded,
  BulkRounded: IconNoInternetBulkRounded,
  StrokeSharp: IconNoInternetStrokeSharp,
  SolidSharp: IconNoInternetSolidSharp,
};