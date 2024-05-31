import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.5 8H20.196C20.8208 8 21.1332 8 21.3619 8.10084C22.3736 8.5469 21.9213 9.67075 21.7511 10.4784C21.7205 10.6235 21.621 10.747 21.4816 10.8132C20.9446 11.068 20.6384 11.4914 20.4665 12M7.5 8H3.80397C3.17922 8 2.86684 8 2.63812 8.10084C1.6264 8.5469 2.07874 9.67075 2.24894 10.4784C2.27952 10.6235 2.37896 10.747 2.51841 10.8132C3.09673 11.0876 3.50177 11.6081 3.60807 12.2134L4.20066 15.5878C4.46138 17.0725 4.55052 19.1942 5.8516 20.2402C6.8062 21 8.18162 21 10.9325 21H11.5',
  d2: 'M14 19C14 19 15 19 16 21C16 21 19.1765 16 22 15',
  d3: 'M6.5 11L10 3M15 3L17.5 8',
  d4: 'M19.7993 15.5878L20.3919 12.2134C20.4982 11.6081 20.9033 11.0876 21.4816 10.8132C21.621 10.747 21.7205 10.6235 21.7511 10.4784C21.9213 9.67075 22.3736 8.5469 21.3619 8.10084C21.1332 8 20.8208 8 20.196 8H11.5H7.5H3.80397C3.17922 8 2.86684 8 2.63812 8.10084C1.6264 8.5469 2.07874 9.67075 2.24894 10.4784C2.27952 10.6235 2.37896 10.747 2.51841 10.8132C3.09673 11.0876 3.50177 11.6081 3.60807 12.2134L4.20066 15.5878C4.46138 17.0725 4.55052 19.1942 5.8516 20.2402C6.8062 21 8.18162 21 10.9325 21H13.0675C15.8184 21 17.1938 21 18.1484 20.2402C19.4495 19.1943 19.5386 17.0725 19.7993 15.5878Z',
  d5: 'M6.5 11L10 3',
  d6: 'M15 3L17.5 8',
  d7: 'M3.65516 7.25L20.0949 7.25H20.0949C20.3869 7.24999 20.643 7.24998 20.8535 7.26435C21.0735 7.27936 21.309 7.31297 21.5394 7.41459C21.9272 7.58554 22.2238 7.84738 22.4089 8.19165C22.5871 8.52281 22.6299 8.87028 22.6246 9.16755C22.6192 9.46288 22.5651 9.75163 22.5112 9.99262C22.4808 10.1287 22.3771 10.5616 22.3618 10.6252L22.3603 10.6317L22.3582 10.6412C22.2751 11.0224 22.0166 11.3302 21.6781 11.4908C21.4062 11.6198 21.1729 12.0093 21.0438 12.3473C20.9745 12.5288 20.9398 12.6195 20.8979 12.6633C20.856 12.7071 20.7804 12.7398 20.6292 12.8053C19.6608 13.2247 18.7996 13.8644 18.0979 14.4798C17.4072 15.0856 16.6137 15.947 16.0081 16.6496L16.0081 16.6496C15.8532 16.8293 15.7757 16.9192 15.6793 16.941C15.5828 16.9628 15.4634 16.9103 15.2245 16.8052C15.0551 16.7307 14.8908 16.6723 14.7337 16.6274L14.7317 16.6269C14.5945 16.5877 14.2877 16.5 13.875 16.5C12.4943 16.5 11.375 17.6193 11.375 19C11.375 20.1207 12.1116 21.0681 13.1277 21.3861L13.1323 21.3875C13.1664 21.3982 13.1863 21.4043 13.2103 21.4326C13.3149 21.5556 13.2277 21.7499 13.0663 21.7499L10.7598 21.75C9.42483 21.75 8.35671 21.75 7.50578 21.6499C6.62715 21.5465 5.88909 21.3281 5.25955 20.8271L5.25667 20.8248C4.41862 20.151 4.01701 19.17 3.78458 18.2651C3.62783 17.6549 3.52861 16.9808 3.44396 16.4057L2.74437 12.3431C2.68215 11.9888 2.44139 11.6661 2.07188 11.4908C1.73343 11.3302 1.47487 11.0224 1.39181 10.6412L1.38972 10.6317L1.38818 10.6252C1.37293 10.5616 1.26921 10.1287 1.23876 9.99262C1.18486 9.75163 1.13076 9.46287 1.12543 9.16755C1.12007 8.87028 1.16292 8.5228 1.34105 8.19165C1.52624 7.84738 1.82281 7.58554 2.21055 7.41459C2.44103 7.31297 2.67647 7.27936 2.89649 7.26435C3.10704 7.24998 3.36316 7.24999 3.65514 7.25H3.65516ZM9.875 11.25C9.46079 11.25 9.125 11.5858 9.125 12C9.125 12.4142 9.46079 12.75 9.875 12.75L13.875 12.75C14.2892 12.75 14.625 12.4142 14.625 12C14.625 11.5858 14.2892 11.25 13.875 11.25L9.875 11.25Z',
  d8: 'M10.2761 2.0841C10.7821 2.30546 11.0128 2.89509 10.7914 3.40107L7.29141 11.4011C7.07004 11.9071 6.48041 12.1378 5.97443 11.9164C5.46845 11.695 5.23773 11.1054 5.4591 10.5994L8.9591 2.59943C9.18046 2.09345 9.77009 1.86273 10.2761 2.0841Z',
  d9: 'M14.428 2.10579C14.922 1.8588 15.5227 2.05903 15.7696 2.55301L18.2696 7.55301C18.5166 8.04698 18.3164 8.64766 17.8224 8.89465C17.3285 9.14164 16.7278 8.94141 16.4808 8.44743L13.9808 3.44743C13.7338 2.95345 13.934 2.35278 14.428 2.10579Z',
  d10: 'M22.8176 14.6664C23.002 15.187 22.7294 15.7585 22.2088 15.9429C21.6752 16.1319 21.0587 16.5388 20.4057 17.1115C19.763 17.6751 19.1378 18.3521 18.5841 19.0159C18.0322 19.6774 17.5635 20.3111 17.2324 20.7801C17.0672 21.0141 16.807 21.4044 16.7191 21.5365C16.5258 21.8406 16.1837 22.0174 15.8239 21.999C15.4639 21.9805 15.1418 21.7698 14.9806 21.4475C14.5399 20.5661 14.1446 20.2152 13.9453 20.0823C13.861 20.0261 13.804 20.0036 13.7814 19.9959C13.273 19.9487 12.875 19.521 12.875 19.0003C12.875 18.448 13.3227 18.0003 13.875 18.0003C14.0742 18.0003 14.2184 18.0405 14.3216 18.07C14.5295 18.1294 14.7803 18.2353 15.0547 18.4182C15.329 18.6011 15.6166 18.8538 15.9054 19.1997C16.2206 18.7689 16.609 18.2613 17.0483 17.7347C17.6416 17.0235 18.34 16.2629 19.087 15.6078C19.8236 14.9618 20.663 14.3686 21.5412 14.0576C22.0618 13.8733 22.6332 14.1458 22.8176 14.6664Z',
  d11: 'M20.0949 7.25H3.65516C3.36317 7.24999 3.10704 7.24998 2.89649 7.26435C2.67647 7.27936 2.44103 7.31297 2.21055 7.41459C1.82281 7.58554 1.52624 7.84738 1.34105 8.19165C1.16292 8.5228 1.12007 8.87028 1.12543 9.16755C1.13076 9.46287 1.18486 9.75163 1.23876 9.99262C1.26921 10.1287 1.37293 10.5616 1.38818 10.6252C1.38898 10.6285 1.38938 10.6302 1.38972 10.6317C1.39007 10.6332 1.39065 10.6359 1.39181 10.6412C1.47487 11.0224 1.73343 11.3302 2.07188 11.4908C2.44139 11.6661 2.68215 11.9888 2.74437 12.3431L3.44396 16.4057C3.52861 16.9808 3.62783 17.6549 3.78458 18.2651C4.01701 19.17 4.41862 20.151 5.25667 20.8248L5.25955 20.8271C5.88909 21.3281 6.62715 21.5465 7.50578 21.6499C8.35671 21.75 9.42483 21.75 10.7598 21.75L13.0663 21.7499C13.2277 21.7499 13.3149 21.5556 13.2103 21.4326C13.1852 21.4031 13.1647 21.3977 13.1277 21.3861C12.1116 21.0681 11.375 20.1207 11.375 19C11.375 17.6193 12.4943 16.5 13.875 16.5C14.2877 16.5 14.5945 16.5877 14.7317 16.6269L14.7337 16.6274C14.8908 16.6723 15.0551 16.7307 15.2245 16.8052C15.4634 16.9103 15.5828 16.9628 15.6793 16.941C15.7757 16.9192 15.8532 16.8293 16.0081 16.6496C16.6137 15.947 17.4072 15.0856 18.0979 14.4798C18.7996 13.8644 19.6608 13.2247 20.6292 12.8053C20.7804 12.7398 20.856 12.7071 20.8979 12.6633C20.9398 12.6195 20.9745 12.5288 21.0438 12.3473C21.1729 12.0093 21.4062 11.6198 21.6781 11.4908C22.0166 11.3302 22.2751 11.0224 22.3582 10.6412C22.3593 10.6359 22.3599 10.6332 22.3603 10.6317C22.3606 10.6302 22.361 10.6285 22.3618 10.6252C22.3771 10.5616 22.4808 10.1287 22.5112 9.99262C22.5651 9.75163 22.6192 9.46288 22.6246 9.16755C22.6299 8.87028 22.5871 8.52281 22.4089 8.19165C22.2238 7.84738 21.9272 7.58554 21.5394 7.41459C21.309 7.31297 21.0735 7.27936 20.8535 7.26435C20.643 7.24998 20.3869 7.24999 20.0949 7.25Z',
  d12: 'M9.125 12C9.125 11.5858 9.46079 11.25 9.875 11.25L13.875 11.25C14.2892 11.25 14.625 11.5858 14.625 12C14.625 12.4142 14.2892 12.75 13.875 12.75L9.875 12.75C9.46079 12.75 9.125 12.4142 9.125 12Z',
  d13: 'M15.7696 2.55301C15.5227 2.05903 14.922 1.8588 14.428 2.10579C13.934 2.35278 13.7338 2.95345 13.9808 3.44743L15.8822 7.25024H18.1183L15.7696 2.55301Z',
  d14: 'M6.49902 10.5L9.99902 2.5M14.999 2.5L17.499 7.5',
  d15: 'M13.999 19.5L15.999 21.5L21.999 15.5',
  d16: 'M11.9967 20.4784L5.49856 20.4863C5.49383 20.4863 5.48975 20.483 5.48877 20.4784L3.48519 11.0107L2.00098 10.5095V7.55863C2.00098 7.55311 2.00545 7.54863 2.01098 7.54863H7.3802M10.9772 7.51367H21.9866C21.9921 7.51367 21.9966 7.51815 21.9966 7.52367V10.5129L20.4889 11.0218L20.1092 12.9987',
  d17: 'M22.7502 16.0426L16.043 22.7497L13.3359 20.0426L14.7502 18.6284L16.043 19.9213L21.3359 14.6284L22.7502 16.0426Z',
  d18: 'M18.3955 6.25H22.0001C22.4143 6.25 22.7501 6.58579 22.7501 7V10.5406L21.1453 11.0755L20.7126 13.1299L16.0423 17.8002L14.7494 16.5073L11.2139 20.0429L11.921 20.75H5.50008C5.14542 20.75 4.83924 20.5016 4.76617 20.1545L2.85482 11.0756L1.24902 10.5407V7C1.24902 6.58579 1.58481 6.25 1.99902 6.25H6.91776L9.08496 1.29639L10.9173 2.09803L9.10079 6.25H16.1595L14.1067 2.14443L15.8955 1.25L18.3955 6.25ZM9.49902 10.25H14.499V11.75H9.49902V10.25Z',
} as const;

export const IconShoppingBasketDone03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-03-stroke-rounded IconShoppingBasketDone03StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketDone03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-03-duotone-rounded IconShoppingBasketDone03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketDone03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-03-twotone-rounded IconShoppingBasketDone03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketDone03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-03-solid-rounded IconShoppingBasketDone03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketDone03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-03-bulk-rounded IconShoppingBasketDone03BulkRounded"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketDone03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-03-stroke-sharp IconShoppingBasketDone03StrokeSharp"
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
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketDone03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-03-solid-sharp IconShoppingBasketDone03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingBasketDone03: TheIconSelfPack = {
  name: 'ShoppingBasketDone03',
  StrokeRounded: IconShoppingBasketDone03StrokeRounded,
  DuotoneRounded: IconShoppingBasketDone03DuotoneRounded,
  TwotoneRounded: IconShoppingBasketDone03TwotoneRounded,
  SolidRounded: IconShoppingBasketDone03SolidRounded,
  BulkRounded: IconShoppingBasketDone03BulkRounded,
  StrokeSharp: IconShoppingBasketDone03StrokeSharp,
  SolidSharp: IconShoppingBasketDone03SolidSharp,
};