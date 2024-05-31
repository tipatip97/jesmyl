import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.4706 22C7.47751 22 5.48098 22 4.24049 20.8284C3 19.6569 3 17.7712 3 14L3 10C3 6.22876 3 4.34315 4.24049 3.17157C5.48098 2 7.47752 2 11.4706 2L12.5294 2C16.5225 2 18.519 2 19.7595 3.17157C21 4.34315 21 6.22876 21 10M11.5 22H13',
  d2: 'M8 7H16',
  d3: 'M8 12H13',
  d4: 'M17.5 18.5896L16.5978 21.7428C16.5572 21.9011 16.7139 22.0385 16.8659 21.9778L18.8514 21.1849C18.9468 21.1468 19.0532 21.1468 19.1486 21.1849L21.1531 21.9854C21.3014 22.0446 21.456 21.9149 21.4231 21.7589L20.6589 18.4911M22 15.9951C22 14.341 20.6569 13 19 13C17.3431 13 16 14.341 16 15.9951C16 17.6493 17.3431 18.9902 19 18.9902C20.6569 18.9902 22 17.6493 22 15.9951Z',
  d5: 'M19.7595 3.17157C18.519 2 16.5225 2 12.5294 2H11.4706C7.47752 2 5.48098 2 4.24049 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.24049 20.8284C5.48098 22 7.47751 22 11.4706 22H12.5294C14.2244 22 15.5597 22 16.6301 21.9104L17.5 18.5896C16.6033 18.0717 16 17.1037 16 15.9951C16 14.341 17.3431 13 19 13C19.7684 13 20.4692 13.2884 21 13.7627V10C21 6.22876 21 4.34315 19.7595 3.17157Z',
  d6: 'M10.9167 1.24992H12.0833C14.0342 1.24991 15.5706 1.2499 16.7712 1.40234C18.0001 1.5584 18.9904 1.88567 19.7745 2.62624C20.5647 3.37252 20.9194 4.3246 21.0875 5.50513C21.25 6.64721 21.25 8.10538 21.25 9.94065V9.94066V10.4525C21.25 10.9096 21.25 11.1381 21.1224 11.2277C20.9948 11.3173 20.758 11.2318 20.2844 11.0608C19.7272 10.8596 19.1263 10.7499 18.5 10.7499C15.6041 10.7499 13.25 13.0947 13.25 15.995C13.25 17.149 13.6237 18.2157 14.2544 19.0807C14.3508 19.213 14.3991 19.2792 14.4112 19.3475C14.4233 19.4157 14.4026 19.4883 14.361 19.6335L13.9346 21.1238C13.8713 21.3706 13.8436 21.6244 13.8494 21.8708C13.8602 22.3347 13.8656 22.5667 13.7776 22.657C13.6897 22.7473 13.5039 22.7478 13.1324 22.7489C12.7968 22.7499 12.4473 22.7499 12.0833 22.7499H10.9167C8.96586 22.7499 7.42941 22.7499 6.22885 22.5975C4.99987 22.4414 4.00965 22.1142 3.22552 21.3736C2.43534 20.6273 2.0806 19.6752 1.91255 18.4947C1.74997 17.3526 1.74998 15.8945 1.75 14.0593V14.0592V9.94059V9.94058C1.74998 8.10532 1.74997 6.64721 1.91255 5.50513C2.0806 4.3246 2.43535 3.37251 3.22552 2.62624C4.00965 1.88567 4.99987 1.5584 6.22885 1.40234C7.42941 1.2499 8.96586 1.24991 10.9167 1.24992ZM7.5 6C6.94772 6 6.5 6.44772 6.5 7C6.5 7.55228 6.94772 8 7.5 8H15.5C16.0523 8 16.5 7.55228 16.5 7C16.5 6.44772 16.0523 6 15.5 6H7.5ZM7.5 11C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13H11.5C12.0523 13 12.5 12.5523 12.5 12C12.5 11.4477 12.0523 11 11.5 11H7.5Z',
  d7: 'M21.7337 20.7587C21.6833 20.555 21.605 20.2999 21.5121 19.9971L21.1257 18.7383C21.8177 18.0533 22.25 17.087 22.25 16.0163C22.25 13.9362 20.6204 12.25 18.6103 12.25H18.3897C16.3796 12.25 14.75 13.9362 14.75 16.0163C14.75 17.087 15.1823 18.0533 15.8743 18.7383L15.4879 19.9971C15.395 20.2998 15.3167 20.555 15.2663 20.7587C15.2184 20.9523 15.1692 21.1946 15.2019 21.4369C15.2998 22.1635 15.8841 22.7472 16.6224 22.75C16.8683 22.7509 17.0967 22.6562 17.266 22.5775C17.4465 22.4936 17.6881 22.3624 17.9495 22.2205C18.2106 22.0787 18.2648 22.0526 18.3117 22.0379C18.435 21.9994 18.565 21.9994 18.6883 22.0379C18.7352 22.0526 18.7893 22.0786 19.0504 22.2204C19.3118 22.3624 19.5535 22.4936 19.734 22.5775C19.9033 22.6562 20.1317 22.7509 20.3776 22.75C21.1159 22.7472 21.7002 22.1635 21.7981 21.4369C21.8308 21.1946 21.7816 20.9523 21.7337 20.7587ZM16.5484 21.0983C16.5882 20.9371 16.6547 20.7196 16.7553 20.392L17.0262 19.5092C17.4476 19.6855 17.908 19.7826 18.3896 19.7826H18.6102C19.0918 19.7826 19.5522 19.6855 19.9736 19.5092L20.2445 20.392C20.3451 20.7196 20.4116 20.9371 20.4514 21.0983C20.5109 21.2354 20.5592 21.4732 20.2762 21.3281C20.1373 21.2636 19.9097 21.1403 19.6245 20.9854C19.4271 20.878 19.2542 20.784 19.0703 20.7266C18.6978 20.6104 18.302 20.6104 17.9294 20.7266C17.7456 20.784 17.5727 20.878 17.3753 20.9854C17.0901 21.1403 16.8625 21.2636 16.7236 21.3281C16.4787 21.4531 16.5047 21.227 16.5484 21.0983Z',
  d8: 'M12.0833 1.25H10.9167C8.96586 1.24999 7.42941 1.24998 6.22885 1.40242C4.99987 1.55847 4.00965 1.88575 3.22552 2.62631C2.43535 3.37259 2.0806 4.32468 1.91255 5.50521C1.74997 6.64729 1.74998 8.10541 1.75 9.94067V14.0593C1.74998 15.8946 1.74997 17.3527 1.91255 18.4948C2.0806 19.6753 2.43534 20.6274 3.22552 21.3737C4.00965 22.1142 4.99987 22.4415 6.22885 22.5976C7.42941 22.75 8.96586 22.75 10.9167 22.75H12.0833C12.4473 22.75 12.7968 22.75 13.1324 22.749C13.5039 22.7479 13.6897 22.7474 13.7776 22.6571C13.8656 22.5668 13.8602 22.3348 13.8494 21.8708C13.8436 21.6245 13.8713 21.3707 13.9346 21.1239L14.361 19.6336C14.4026 19.4884 14.4233 19.4158 14.4112 19.3475C14.3991 19.2793 14.3508 19.2131 14.2544 19.0808C13.6237 18.2158 13.25 17.1491 13.25 15.9951C13.25 13.0947 15.6041 10.75 18.5 10.75C19.1263 10.75 19.7272 10.8597 20.2844 11.0609C20.758 11.2319 20.9948 11.3174 21.1224 11.2278C21.25 11.1382 21.25 10.9096 21.25 10.4526V9.94074C21.25 8.10547 21.25 6.64729 21.0875 5.50521C20.9194 4.32468 20.5647 3.37259 19.7745 2.62631C18.9904 1.88575 18.0001 1.55847 16.7712 1.40242C15.5706 1.24998 14.0342 1.24999 12.0833 1.25Z',
  d9: 'M6.5 7C6.5 6.44772 6.94772 6 7.5 6H15.5C16.0523 6 16.5 6.44772 16.5 7C16.5 7.55228 16.0523 8 15.5 8H7.5C6.94772 8 6.5 7.55228 6.5 7ZM6.5 12C6.5 11.4477 6.94772 11 7.5 11H11.5C12.0523 11 12.5 11.4477 12.5 12C12.5 12.5523 12.0523 13 11.5 13H7.5C6.94772 13 6.5 12.5523 6.5 12Z',
  d10: 'M12.5 22H2.5L2.50017 2H20.5V9',
  d11: 'M7.5 7H15.5',
  d12: 'M7.5 12H12.5',
  d13: 'M16.0037 16.7115C16.5474 17.4852 17.4761 17.9912 18.4961 17.9912C19.5779 17.9912 20.5067 17.4221 21.0364 16.568M16.0037 16.7115C15.6623 16.2255 15.4893 15.6338 15.4893 14.9956C15.4893 13.3412 16.8355 12 18.4961 12C20.1567 12 21.5029 13.3412 21.5029 14.9956C21.5029 15.5723 21.3198 16.111 21.0364 16.568M16.0037 16.7115L15.9704 21.8881C15.9699 21.967 16.0567 22.0154 16.1236 21.9735L18.4961 20.4844L20.8407 21.9664C20.907 22.0083 20.9935 21.9611 20.9941 21.8827L21.0364 16.568',
  d14: 'M1.25017 1.99999C1.25018 1.58578 1.58596 1.25 2.00017 1.25H20C20.4142 1.25 20.75 1.58579 20.75 2V10.0488C20.2025 9.85528 19.6135 9.75 19 9.75C16.1023 9.75 13.75 12.0988 13.75 15C13.75 16.2976 14.2206 17.4847 15 18.4006V22.75H2C1.80109 22.75 1.61032 22.671 1.46967 22.5303C1.32902 22.3897 1.25 22.1989 1.25 22L1.25017 1.99999ZM7 8H15V6H7V8ZM7 13H12V11H7V13Z',
  d15: 'M19 11.25C16.9301 11.25 15.25 12.9278 15.25 15C15.25 17.0722 16.9301 18.75 19 18.75C21.0699 18.75 22.75 17.0722 22.75 15C22.75 12.9278 21.0699 11.25 19 11.25Z',
  d16: 'M16.5 22.75V19.0396C17.2263 19.49 18.083 19.75 19 19.75C19.917 19.75 20.7737 19.49 21.5 19.0396V22.75L19 21.25L16.5 22.75Z',
} as const;

export const IconPolicyStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="policy-stroke-rounded IconPolicyStrokeRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPolicyDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="policy-duotone-rounded IconPolicyDuotoneRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPolicyTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="policy-twotone-rounded IconPolicyTwotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPolicySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="policy-solid-rounded IconPolicySolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconPolicyBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="policy-bulk-rounded IconPolicyBulkRounded"
    >
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPolicyStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="policy-stroke-sharp IconPolicyStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPolicySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="policy-solid-sharp IconPolicySolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfPolicy: TheIconSelfPack = {
  name: 'Policy',
  StrokeRounded: IconPolicyStrokeRounded,
  DuotoneRounded: IconPolicyDuotoneRounded,
  TwotoneRounded: IconPolicyTwotoneRounded,
  SolidRounded: IconPolicySolidRounded,
  BulkRounded: IconPolicyBulkRounded,
  StrokeSharp: IconPolicyStrokeSharp,
  SolidSharp: IconPolicySolidSharp,
};