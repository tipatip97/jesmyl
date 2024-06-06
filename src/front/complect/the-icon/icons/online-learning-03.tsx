import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13 18.9907C12.9216 20.0155 12.727 20.6859 12.2435 21.1774C11.4342 22 10.1316 22 7.5264 22C4.92123 22 3.61865 22 2.80932 21.1774C2 20.3547 2 19.0307 2 16.3827V11.5678C2 8.91975 2 7.59573 2.80932 6.77308C3.30138 6.27293 3.97578 6.07686 5.0144 6',
  d2: 'M7.49199 19H7.50098',
  d3: 'M16.0785 2H13.9215C11.0208 2 9.57048 2 8.70959 2.90325C7.8487 3.8065 7.93917 5.23328 8.12011 8.08683L8.24595 10.0716C8.28754 10.7274 8.30833 11.0553 8.38194 11.3288C8.66622 12.3849 9.53533 13.1897 10.6225 13.4035C10.904 13.4589 11.2373 13.4589 11.904 13.4589C12.8328 13.4589 12.8202 14.2261 12.8202 14.9854C12.8202 15.5745 12.8202 15.869 13.0121 15.9702C13.204 16.0714 13.4526 15.908 13.9499 15.5813L16.9093 13.6366C17.1029 13.5094 17.2769 13.4589 17.5048 13.4589C18.727 13.4589 19.3381 13.4589 19.8333 13.275C21.5492 12.638 21.6918 11.0526 21.7909 9.48995L21.8799 8.08683C22.0608 5.23328 22.1513 3.8065 21.2904 2.90325C20.4295 2 18.9792 2 16.0785 2Z',
  d4: 'M17.5703 10.5L16.9453 9.25M12.5703 10.5L13.1953 9.25M13.1953 9.25L14.9989 5.5L16.9453 9.25M13.1953 9.25L16.9453 9.25',
  d5: 'M5.76236 5.94468C5.79293 6.35777 5.48284 6.71742 5.06975 6.74799C4.07974 6.82125 3.63874 6.99947 3.34396 7.2991C3.09969 7.5474 2.93515 7.90041 2.84469 8.58429C2.75154 9.28851 2.75 10.2229 2.75 11.5678V16.3827C2.75 17.7276 2.75154 18.662 2.84469 19.3662C2.93515 20.0501 3.09969 20.4031 3.34396 20.6514C3.58656 20.898 3.92894 21.063 4.59597 21.1541C5.28585 21.2484 6.20228 21.25 7.5264 21.25C8.85053 21.25 9.76695 21.2484 10.4568 21.1541C11.1239 21.063 11.4662 20.898 11.7088 20.6514C12.001 20.3545 12.1775 19.9096 12.2522 18.9336C12.2838 18.5206 12.6442 18.2113 13.0572 18.2429C13.4702 18.2745 13.7794 18.6349 13.7478 19.0479C13.6657 20.1214 13.453 21.0174 12.7781 21.7034C12.2114 22.2794 11.4978 22.5258 10.6599 22.6403C9.85663 22.7501 8.83727 22.7501 7.58157 22.75H7.47124C6.21554 22.7501 5.19617 22.7501 4.39287 22.6403C3.55499 22.5258 2.84141 22.2794 2.27468 21.7034C1.70963 21.129 1.46952 20.4087 1.35764 19.5629C1.24996 18.7488 1.24998 17.7148 1.25 16.4364V11.5141C1.24998 10.2357 1.24996 9.20169 1.35764 8.3876C1.46952 7.5418 1.70963 6.82148 2.27468 6.24713C2.96403 5.54645 3.87182 5.33254 4.95905 5.25208C5.37214 5.22151 5.73179 5.5316 5.76236 5.94468Z',
  d6: 'M6.26168 5.67625C6.30244 6.22702 5.88898 6.70656 5.3382 6.74732C4.36439 6.81938 4.0012 6.99166 3.77218 7.22444C3.58137 7.41839 3.42942 7.71019 3.34253 8.36708C3.25206 9.0511 3.25 9.96599 3.25 11.3178V16.1327C3.25 17.4845 3.25206 18.3994 3.34253 19.0835C3.42942 19.7403 3.58137 20.0321 3.77218 20.2261C3.96076 20.4178 4.24126 20.5692 4.87982 20.6564C5.54885 20.7479 6.4451 20.75 7.7764 20.75C9.10771 20.75 10.004 20.7479 10.673 20.6564C11.3115 20.5692 11.5921 20.4178 11.7806 20.2261C12.009 19.994 12.1795 19.6243 12.2529 18.6645C12.295 18.1138 12.7756 17.7016 13.3262 17.7437C13.8769 17.7858 14.2892 18.2663 14.2471 18.817C14.1638 19.9067 13.945 20.8779 13.2063 21.6287C12.5856 22.2597 11.8101 22.5196 10.9438 22.638C10.1234 22.7501 9.08943 22.7501 7.84707 22.75H7.70574C6.46338 22.7501 5.42941 22.7501 4.60902 22.638C3.74267 22.5196 2.96722 22.2597 2.34647 21.6287C1.72796 21 1.47525 20.2185 1.3598 19.3457C1.24994 18.5151 1.24997 17.4669 1.25 16.2017V11.2489C1.24997 9.9836 1.24994 8.93545 1.3598 8.10483C1.47525 7.23204 1.72796 6.45051 2.34647 5.82182C3.10157 5.05429 4.08717 4.83443 5.1906 4.75277C5.74138 4.71201 6.22092 5.12547 6.26168 5.67625Z',
  d7: 'M6.75 18.5C6.75 17.9477 7.19571 17.5 7.74553 17.5H7.75447C8.30429 17.5 8.75 17.9477 8.75 18.5C8.75 19.0523 8.30429 19.5 7.75447 19.5H7.74553C7.19571 19.5 6.75 19.0523 6.75 18.5Z',
  d8: 'M16.1343 1.25H16.1343H16.1343H13.8654H13.8654H13.8654C12.4626 1.24998 11.3329 1.24996 10.4497 1.36971C9.53449 1.49379 8.76302 1.75997 8.16654 2.38581C7.56843 3.01335 7.34511 3.79375 7.27615 4.70722C7.20983 5.58576 7.28043 6.69894 7.36784 8.07715L7.49732 10.119L7.50264 10.2032C7.5389 10.7776 7.56406 11.1763 7.65757 11.5237C8.01738 12.8605 9.11466 13.8714 10.4777 14.1394C10.8322 14.2091 11.2343 14.209 11.8204 14.2089L11.9038 14.2089C11.9583 14.2089 11.9936 14.2135 12.0146 14.2178C12.0309 14.2618 12.0492 14.3428 12.0596 14.4823C12.0701 14.6229 12.0701 14.7769 12.0701 14.9677L12.0701 14.9854L12.0701 15.0284C12.07 15.2846 12.0699 15.5553 12.1024 15.772C12.1372 16.0044 12.2425 16.4123 12.662 16.6336C13.0773 16.8526 13.4718 16.7144 13.6829 16.6162C13.8821 16.5234 14.109 16.3742 14.3259 16.2315L14.3259 16.2315L14.3259 16.2315L14.3616 16.2081L17.321 14.2634C17.3679 14.2326 17.3935 14.2232 17.4073 14.2191C17.4213 14.2149 17.448 14.2089 17.5047 14.2089L17.6577 14.2089C18.7311 14.2094 19.4703 14.2098 20.0942 13.9781C21.1737 13.5774 21.785 12.8512 22.1168 12.0027C22.4287 11.2051 22.4909 10.3007 22.5393 9.53741L22.6319 8.07713C22.7193 6.69893 22.7899 5.58576 22.7236 4.70722C22.6546 3.79375 22.4313 3.01335 21.8332 2.38581C21.2367 1.75997 20.4652 1.49379 19.55 1.36971C18.6668 1.24996 17.5371 1.24998 16.1343 1.25ZM16.8994 10.8354C17.0846 11.2059 17.5351 11.356 17.9056 11.1708C18.2761 10.9855 18.4263 10.535 18.241 10.1645L17.6161 8.91451L15.6645 5.15444C15.5336 4.90228 15.2714 4.74572 14.9874 4.75005C14.7033 4.75437 14.446 4.91885 14.3229 5.17489L12.5218 8.91969L11.8994 10.1645C11.7141 10.535 11.8643 10.9855 12.2348 11.1708C12.6053 11.356 13.0558 11.2059 13.241 10.8354L13.6587 9.99996H16.4817L16.8994 10.8354ZM15.7109 8.49996L14.3882 8.49996L15.0243 7.1772L15.7109 8.49996Z',
  d9: 'M16.1343 1.25C17.5371 1.24998 18.6668 1.24996 19.55 1.36971C20.4652 1.49379 21.2367 1.75997 21.8332 2.38581C22.4313 3.01335 22.6546 3.79375 22.7236 4.70722C22.7899 5.58576 22.7193 6.69893 22.6319 8.07713L22.5393 9.53741C22.4909 10.3007 22.4287 11.2051 22.1168 12.0027C21.785 12.8512 21.1737 13.5774 20.0942 13.9781C19.4703 14.2098 18.7311 14.2094 17.6577 14.2089L17.5047 14.2089C17.448 14.2089 17.4213 14.2149 17.4073 14.2191C17.3935 14.2232 17.3679 14.2326 17.321 14.2634L14.3616 16.2081L14.3259 16.2315L14.3259 16.2315C14.109 16.3742 13.8821 16.5234 13.6829 16.6162C13.4718 16.7144 13.0773 16.8526 12.662 16.6336C12.2425 16.4123 12.1372 16.0044 12.1024 15.772C12.0699 15.5553 12.07 15.2846 12.0701 15.0284L12.0701 14.9854L12.0701 14.9677C12.0701 14.7769 12.0701 14.6229 12.0596 14.4823C12.0492 14.3428 12.0309 14.2618 12.0146 14.2178C11.9936 14.2135 11.9583 14.2089 11.9038 14.2089L11.8204 14.2089C11.2343 14.209 10.8322 14.2091 10.4777 14.1394C9.11466 13.8714 8.01738 12.8605 7.65757 11.5237C7.56406 11.1763 7.5389 10.7776 7.50264 10.2032L7.49732 10.119L7.36784 8.07714C7.28043 6.69894 7.20983 5.58576 7.27615 4.70722C7.34511 3.79375 7.56843 3.01335 8.16654 2.38581C8.76302 1.75997 9.53449 1.49379 10.4497 1.36971C11.3329 1.24996 12.4626 1.24998 13.8654 1.25H13.8654H16.1343H16.1343Z',
  d10: 'M17.9056 11.1707C17.5351 11.3559 17.0846 11.2057 16.8993 10.8352L16.4816 9.99984L13.6587 9.99984L13.241 10.8352C13.0557 11.2057 12.6052 11.3559 12.2347 11.1707C11.8643 10.9854 11.7141 10.5349 11.8993 10.1644L12.5218 8.91957L14.3228 5.17476C14.446 4.91873 14.7032 4.75425 14.9873 4.74992C15.2714 4.74559 15.5335 4.90215 15.6644 5.15432L17.616 8.91439L18.241 10.1644C18.4262 10.5349 18.276 10.9854 17.9056 11.1707ZM14.3881 8.49984L15.7109 8.49984L15.0243 7.17708L14.3881 8.49984Z',
  d11: 'M5 6.00586H2V22.0293H13V19.0249',
  d12: 'M7.49219 19.0249H7.50118',
  d13: 'M12.5 10.5122L14.5 5.50488H15.5L17.5 10.5122M16.5 9.01002H13.5',
  d14: 'M21.9892 2.02734L8.01781 2.02767C8.01229 2.02767 8.00781 2.03215 8.00781 2.03769L8.00811 13.4994C8.00811 13.5049 8.01259 13.5094 8.01811 13.5094H12.4854V16.0361C12.4854 16.0443 12.4945 16.049 12.5012 16.0443L16.0511 13.5094H21.9892C21.9947 13.5094 21.9992 13.5049 21.9992 13.4994V2.03736C21.9992 2.03183 21.9947 2.02734 21.9892 2.02734Z',
  d15: 'M1.25 6.22222C1.25 5.68528 1.68173 5.25 2.21429 5.25H6.10714V7.19444H3.17857V20.8056H12.8214V17.9722H14.75V21.7778C14.75 22.3147 14.3183 22.75 13.7857 22.75H2.21429C1.68173 22.75 1.25 22.3147 1.25 21.7778V6.22222Z',
  d16: 'M6.99219 18H8.99219V20H6.99219V18Z',
  d17: 'M8 1.25C7.58579 1.25 7.25 1.58579 7.25 2V13.5C7.25 13.9142 7.58579 14.25 8 14.25H11.75V16C11.75 16.2809 11.907 16.5383 12.1568 16.6669C12.4066 16.7954 12.7073 16.7736 12.9359 16.6103L16.2403 14.25H22.001C22.4152 14.25 22.751 13.9142 22.751 13.5V2C22.751 1.58579 22.4152 1.25 22.001 1.25H8ZM16.0088 4.75L13.9933 4.75L11.8047 10.2215L13.1974 10.7785L13.6088 9.75H16.3933L16.8047 10.7785L18.1974 10.2215L16.0088 4.75ZM15.001 6.26944L15.7933 8.25H14.2088L15.001 6.26944Z',
};

export const IconOnlineLearning03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-03-stroke-rounded IconOnlineLearning03StrokeRounded"
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

export const IconOnlineLearning03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-03-duotone-rounded IconOnlineLearning03DuotoneRounded"
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

export const IconOnlineLearning03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-03-twotone-rounded IconOnlineLearning03TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconOnlineLearning03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-03-solid-rounded IconOnlineLearning03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconOnlineLearning03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-03-bulk-rounded IconOnlineLearning03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconOnlineLearning03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-03-stroke-sharp IconOnlineLearning03StrokeSharp"
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
        strokeLinecap="square" 
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

export const IconOnlineLearning03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-03-solid-sharp IconOnlineLearning03SolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfOnlineLearning03: TheIconSelfPack = {
  name: 'OnlineLearning03',
  StrokeRounded: IconOnlineLearning03StrokeRounded,
  DuotoneRounded: IconOnlineLearning03DuotoneRounded,
  TwotoneRounded: IconOnlineLearning03TwotoneRounded,
  SolidRounded: IconOnlineLearning03SolidRounded,
  BulkRounded: IconOnlineLearning03BulkRounded,
  StrokeSharp: IconOnlineLearning03StrokeSharp,
  SolidSharp: IconOnlineLearning03SolidSharp,
};