import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.9982 2C8.99043 2 7.04018 4.01899 4.73371 4.7549C3.79589 5.05413 3.32697 5.20374 3.1372 5.41465C2.94743 5.62556 2.89186 5.93375 2.78072 6.55013C1.59143 13.146 4.1909 19.244 10.3903 21.6175C11.0564 21.8725 11.3894 22 12.0015 22C12.6135 22 12.9466 21.8725 13.6126 21.6175C19.8116 19.2439 22.4086 13.146 21.219 6.55013C21.1078 5.93364 21.0522 5.6254 20.8624 5.41449C20.6726 5.20358 20.2037 5.05405 19.2659 4.75499C16.9585 4.01915 15.0061 2 11.9982 2Z',
  d2: 'M12 2V22M21 12H3',
  d3: 'M13.9697 2.29389C15.9473 2.88145 17.503 4.19278 19.2659 4.75499C20.2037 5.05405 20.6726 5.20358 20.8624 5.41449C21.0522 5.62539 21.1078 5.93363 21.219 6.5501L21.219 6.55013C21.5584 8.43228 21.5896 10.2739 21.3167 12H11.9982V4C11.9982 3.03125 11.9982 2.54688 12.4002 2.24694C12.8022 1.94701 13.1914 2.06264 13.9697 2.29389Z',
  d4: 'M11.9982 22C11.3882 21.9996 11.0552 21.872 10.3903 21.6175C5.95992 19.9213 3.3681 16.3229 2.68375 12H11.9982V22Z',
  d5: 'M7.7461 2.43599C8.92312 1.82562 10.299 1.25 11.9982 1.25C13.6974 1.25 15.0739 1.82562 16.2515 2.43595C16.6183 2.62608 16.9531 2.81088 17.2692 2.98531C18.0233 3.40152 18.6706 3.75874 19.3906 3.98858C19.8215 4.12612 20.2214 4.25378 20.5032 4.36426C20.7634 4.46629 21.1189 4.62189 21.3783 4.91041C21.6082 5.16611 21.7222 5.44948 21.7943 5.70217C21.8582 5.92633 21.913 6.23073 21.9616 6.50052C23.1863 13.2977 20.5112 19.7868 13.9235 22.3115C13.2913 22.554 12.7801 22.75 12.0015 22.75C11.2228 22.75 10.7115 22.554 10.0793 22.3116C3.49156 19.7869 0.813658 13.2981 2.03813 6.50058C2.08667 6.23083 2.14144 5.92648 2.20536 5.70234C2.2774 5.44967 2.39138 5.16633 2.62122 4.91064C2.88059 4.62211 3.23608 4.46646 3.49627 4.3644C3.77803 4.25388 4.178 4.12616 4.60895 3.98853C5.32854 3.75871 5.97521 3.4016 6.72876 2.98546L6.7288 2.98544C7.0447 2.81099 7.37938 2.62616 7.7461 2.43599ZM7.83444 4.61037C7.01856 5.06102 6.1182 5.55833 5.20293 5.85064C4.88738 5.95142 4.58904 6.05341 4.36164 6.13518C4.22766 6.18336 4.16066 6.20745 4.109 6.26785C4.05733 6.32825 4.04452 6.39501 4.01888 6.52855C4.00231 6.61492 3.98336 6.71908 3.96023 6.84745C3.72061 8.17769 3.64754 9.47627 3.73711 10.7156C3.75511 10.9647 3.76411 11.0893 3.85048 11.1696C3.93686 11.25 4.06553 11.25 4.32287 11.25H10.65C10.9328 11.25 11.0743 11.25 11.1621 11.1621C11.25 11.0743 11.25 10.9328 11.25 10.65V3.94301C11.25 3.61765 11.25 3.45497 11.1336 3.36489C11.0173 3.27481 10.8702 3.31289 10.576 3.38904C9.91104 3.56113 9.28282 3.84063 8.64477 4.1715C8.38658 4.30539 8.11552 4.45511 7.83444 4.61037ZM19.7642 13.4806C19.8619 13.1548 19.9108 12.9919 19.8209 12.8709C19.7309 12.75 19.5548 12.75 19.2026 12.75H13.35C13.0672 12.75 12.9257 12.75 12.8379 12.8379C12.75 12.9257 12.75 13.0672 12.75 13.35V20.1555C12.75 20.2268 12.75 20.2625 12.756 20.292C12.7875 20.4474 12.9432 20.5544 13.0995 20.5282C13.1292 20.5233 13.1614 20.5109 13.2258 20.4863C16.6042 19.1915 18.8122 16.6534 19.7642 13.4806Z',
  d6: 'M21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H12.75V21C12.75 21.4142 12.4142 21.75 12 21.75C11.0421 21.4906 8.83316 20.7682 7.66017 19.9543C6.19393 18.9369 2.25 13.9204 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H11.25V3C11.25 2.58579 11.5858 2.25 12 2.25C12.6979 2.44606 14.5246 3.01175 16.2481 3.70597C18.4026 4.57374 21.3052 5.6809 21.4249 6.51875C21.5206 7.18903 21.6815 10.4522 21.75 12Z',
  d7: 'M11.9982 1.25C10.299 1.25 8.92312 1.82562 7.7461 2.43599C7.37937 2.62617 7.04467 2.811 6.72876 2.98546C5.97521 3.4016 5.32854 3.75871 4.60895 3.98853C4.178 4.12616 3.77803 4.25388 3.49627 4.3644C3.23608 4.46646 2.88059 4.62211 2.62122 4.91064C2.39138 5.16633 2.2774 5.44967 2.20536 5.70234C2.14144 5.92648 2.08667 6.23083 2.03813 6.50058C0.813658 13.2981 3.49156 19.7869 10.0793 22.3116C10.7115 22.554 11.2228 22.75 12.0015 22.75C12.7801 22.75 13.2913 22.554 13.9235 22.3115C20.5112 19.7868 23.1863 13.2977 21.9616 6.50052C21.913 6.23073 21.8582 5.92633 21.7943 5.70217C21.7222 5.44948 21.6082 5.16611 21.3783 4.91041C21.1189 4.62189 20.7634 4.46629 20.5032 4.36426C20.2214 4.25378 19.8215 4.12612 19.3906 3.98858C18.6706 3.75874 18.0233 3.40152 17.2692 2.98531C16.9531 2.81088 16.6183 2.62608 16.2515 2.43595C15.0739 1.82562 13.6974 1.25 11.9982 1.25ZM5.20293 5.85064C6.1182 5.55833 7.01856 5.06102 7.83444 4.61037C8.11552 4.45511 8.38658 4.30539 8.64477 4.1715C9.71691 3.61553 10.7613 3.20459 11.9987 3.20459C13.2362 3.20459 14.2812 3.6156 15.3541 4.17167C15.6124 4.30557 15.8836 4.45529 16.1649 4.61053C16.9813 5.0612 17.8821 5.55849 18.7977 5.85076C19.2688 6.00115 19.7015 6.15424 19.9171 6.23875C19.9509 6.35733 19.9826 6.52693 20.0404 6.8475C21.1385 12.9422 18.7426 18.3719 13.2258 20.4863C12.5777 20.7346 12.402 20.7955 12.0019 20.7955C11.6017 20.7955 11.4261 20.7347 10.7779 20.4863C5.26039 18.3718 2.86243 12.9418 3.96023 6.84745C4.01797 6.52694 4.04966 6.35737 4.08347 6.23882C4.29901 6.15428 4.7318 6.00111 5.20293 5.85064Z',
  d8: 'M12.0351 2V21.9883M21.068 11.9941H3.00211',
  d9: 'M3.00244 4.94156C6.3154 5.16725 8.45159 2.00988 12.0758 2.00988C15.6456 1.94284 17.3923 4.98373 21.0521 4.98373C23.014 14.3852 18.9325 20.2908 12.1056 21.9971C5.77726 20.581 1.02229 14.6147 3.00244 4.94156Z',
  d10: 'M7.20656 2.79902C8.50972 2.08716 10.0423 1.25 12.0018 1.25C13.9703 1.25 15.5048 2.08892 16.809 2.802L16.8676 2.83402C18.2328 3.58017 19.3598 4.17877 20.7762 4.17877H21.5499L21.7268 4.93178C23.7714 13.6338 19.687 21.1011 12.2066 22.706L12.0017 22.75L11.7969 22.706C4.31647 21.1011 0.232189 13.6338 2.27677 4.93178L2.45369 4.17877H3.22735C4.64612 4.17877 5.77689 3.57969 7.14281 2.83384L7.20656 2.79902ZM4.02589 6.08417C3.66703 7.91918 3.61196 9.6549 3.82001 11.2497H11.2518V3.25879C10.1584 3.42473 9.19605 3.93714 8.0789 4.54715L8.00969 4.58495C6.89155 5.1958 5.60491 5.89868 4.02589 6.08417ZM19.9009 12.7497C18.9399 16.6046 16.3265 19.4394 12.7518 20.5471V12.7497H19.9009Z',
};

export const IconMicrosoftAdminStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="microsoft-admin-stroke-rounded IconMicrosoftAdminStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMicrosoftAdminDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="microsoft-admin-duotone-rounded IconMicrosoftAdminDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMicrosoftAdminTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="microsoft-admin-twotone-rounded IconMicrosoftAdminTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMicrosoftAdminSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="microsoft-admin-solid-rounded IconMicrosoftAdminSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMicrosoftAdminBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="microsoft-admin-bulk-rounded IconMicrosoftAdminBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMicrosoftAdminStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="microsoft-admin-stroke-sharp IconMicrosoftAdminStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMicrosoftAdminSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="microsoft-admin-solid-sharp IconMicrosoftAdminSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMicrosoftAdmin: TheIconSelfPack = {
  name: 'MicrosoftAdmin',
  StrokeRounded: IconMicrosoftAdminStrokeRounded,
  DuotoneRounded: IconMicrosoftAdminDuotoneRounded,
  TwotoneRounded: IconMicrosoftAdminTwotoneRounded,
  SolidRounded: IconMicrosoftAdminSolidRounded,
  BulkRounded: IconMicrosoftAdminBulkRounded,
  StrokeSharp: IconMicrosoftAdminStrokeSharp,
  SolidSharp: IconMicrosoftAdminSolidSharp,
};