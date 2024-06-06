import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.9985 7.99951C15.4168 7.99951 18.9985 6.65637 18.9985 4.99951C18.9985 3.34266 15.4168 1.99951 10.9985 1.99951C6.58026 1.99951 2.99854 3.34266 2.99854 4.99951C2.99854 6.65637 6.58026 7.99951 10.9985 7.99951Z',
  d2: 'M5.99854 10.8413C6.60012 11.0221 7.27288 11.1711 7.99854 11.2812',
  d3: 'M10.9985 14.9995C6.58025 14.9995 2.99854 13.6564 2.99854 11.9995',
  d4: 'M5.99854 17.8413C6.60012 18.0221 7.27288 18.1711 7.99854 18.2812',
  d5: 'M10.9985 21.9995C6.58025 21.9995 2.99854 20.6564 2.99854 18.9995V4.99951M18.9985 4.99951V10.4995',
  d6: 'M15.7424 16.3781C15.7424 16.3181 15.7507 15.553 15.752 15.1186C15.7533 14.7217 15.7184 14.3389 15.908 13.9887C16.6184 12.5757 18.6584 12.7196 19.1624 14.159C19.2498 14.396 19.255 14.7717 19.2524 15.1186C19.2492 15.5619 19.2584 16.3781 19.2584 16.3781M15.7424 16.3781C14.6626 16.3781 14.2186 17.1577 14.0986 17.6375C13.9786 18.1173 13.9786 19.8566 14.0506 20.5763C14.2905 21.4759 14.8904 21.8477 15.4783 21.9677C16.0182 22.0157 18.2978 21.9977 18.9577 21.9977C19.9175 22.0157 20.6374 21.6558 20.9373 20.5763C20.9973 20.2164 21.0573 18.2373 20.9073 17.6375C20.5894 16.6779 19.8583 16.3781 19.2584 16.3781M15.7424 16.3781H19.2584',
  d7: 'M19 5C19 6.65685 15.4183 8 11 8C6.58172 8 3 6.65685 3 5V19C3 20.6569 6.58172 22 11 22C12.3496 22 13.6211 21.8747 14.7363 21.6534C14.4702 21.4508 14.2601 21.1708 14.1332 20.8425C14 20.498 14 20.0611 14 19.1875C14 18.3139 14 17.877 14.1332 17.5325C14.3108 17.073 14.6515 16.708 15.0803 16.5177C15.4019 16.375 15.8096 16.375 16.625 16.375H18.375C18.6162 16.375 18.8218 16.375 19 16.3787V5Z',
  d8: 'M11 8C15.4183 8 19 6.65685 19 5C19 3.34315 15.4183 2 11 2C6.58172 2 3 3.34315 3 5C3 6.65685 6.58172 8 11 8Z',
  d9: 'M6 10.8418C6.60158 11.0226 7.27434 11.1716 8 11.2817',
  d10: 'M11 15C6.58172 15 3 13.6569 3 12',
  d11: 'M6 17.8418C6.60158 18.0226 7.27434 18.1716 8 18.2817',
  d12: 'M11 22C6.58172 22 3 20.6569 3 19V5M19 5V10.5',
  d13: 'M15.7409 16.3771C15.7409 16.3171 15.7492 15.552 15.7505 15.1176C15.7518 14.7207 15.7169 14.3379 15.9065 13.9877C16.6169 12.5747 18.6569 12.7186 19.1609 14.158C19.2483 14.395 19.2535 14.7707 19.2509 15.1176C19.2477 15.5609 19.2569 16.3771 19.2569 16.3771M15.7409 16.3771C14.6611 16.3771 14.2171 17.1567 14.0971 17.6365C13.9771 18.1163 13.9771 19.8556 14.0491 20.5753C14.289 21.4749 14.8889 21.8467 15.4768 21.9667C16.0167 22.0147 18.2963 21.9967 18.9562 21.9967C19.916 22.0147 20.6359 21.6548 20.9358 20.5753C20.9958 20.2154 21.0558 18.2363 20.9058 17.6365C20.5879 16.6769 19.8568 16.3771 19.2569 16.3771M15.7409 16.3771H19.2569',
  d14: 'M2.25 5C2.25 4.19711 2.68749 3.55194 3.21527 3.08401C3.74422 2.61504 4.45256 2.2384 5.24202 1.94235C6.82833 1.34749 8.95269 1 11.25 1C13.5473 1 15.6717 1.34749 17.258 1.94235C18.0474 2.2384 18.7558 2.61504 19.2847 3.08401C19.8125 3.55194 20.25 4.19711 20.25 5V9.98763C20.25 10.4811 20.2082 10.8617 20.0535 11.1879C19.9881 11.3259 19.9554 11.3948 19.8715 11.4208C19.7876 11.4468 19.7042 11.3982 19.5372 11.3011C18.9319 10.9487 18.2309 10.75 17.5 10.75C15.7401 10.75 14.1536 11.9019 13.6588 13.5776C13.6177 13.7166 13.5972 13.7861 13.5509 13.8249C13.5045 13.8637 13.4387 13.871 13.3071 13.8855C12.6174 13.9615 11.9254 14 11.25 14C8.8613 14 6.26354 13.5188 4.3008 12.5952C3.89779 12.4055 3.53325 12.2037 3.20806 11.9907C2.40337 11.4637 2.25 10.9324 2.25 9.98763V5ZM5.82313 6.13845C5.22883 5.9045 4.80524 5.65279 4.54209 5.41948C4.1854 5.10324 4.1854 4.89676 4.54209 4.58052C4.82279 4.33166 5.28602 4.06185 5.94427 3.81501C7.2534 3.32409 9.12903 3 11.25 3C13.371 3 15.2466 3.32409 16.5557 3.81501C17.214 4.06185 17.6772 4.33166 17.9579 4.58052C18.3146 4.89676 18.3146 5.10324 17.9579 5.41948C17.6772 5.66834 17.214 5.93815 16.5557 6.18499C15.2466 6.67591 13.371 7 11.25 7C10.3529 7 9.49969 6.94202 8.71467 6.83796C7.73782 6.70847 6.77272 6.51225 5.82313 6.13845ZM6.46587 10.1237C6.06919 10.0045 5.65095 10.2294 5.5317 10.6261C5.41246 11.0228 5.63736 11.441 6.03404 11.5602C6.67365 11.7525 7.38136 11.9087 8.1374 12.0234C8.54692 12.0856 8.9293 11.804 8.99146 11.3945C9.05362 10.9849 8.77203 10.6026 8.36251 10.5404C7.66722 10.4349 7.02942 10.2932 6.46587 10.1237Z',
  d15: 'M12.0575 16.6632C12.192 16.3302 12.2592 16.1636 12.1982 16.075C12.1372 15.9865 11.9691 15.9897 11.6329 15.9961C11.5046 15.9986 11.377 15.9998 11.25 15.9998C8.596 15.9998 5.85931 15.5388 3.4492 14.4046C3.25604 14.3137 3.06512 14.2177 2.87747 14.1164C2.5892 13.9608 2.44506 13.883 2.34753 13.9412C2.25 13.9993 2.25 14.1584 2.25 14.4765V18.9998C2.25 19.8027 2.68749 20.4479 3.21527 20.9158C3.74422 21.3848 4.45256 21.7614 5.24202 22.0575C6.82833 22.6523 8.95269 22.9998 11.25 22.9998C11.505 22.9998 11.7579 22.9955 12.0081 22.9871C12.35 22.9756 12.5209 22.9698 12.5756 22.8697C12.6303 22.7695 12.534 22.6077 12.3412 22.284C12.2217 22.0832 12.119 21.8723 12.0346 21.6539C11.8502 21.1769 11.7946 20.7239 11.7712 20.3564C11.7221 19.5855 11.7221 18.7897 11.7712 18.0186C11.7946 17.6511 11.8502 17.1981 12.0346 16.7211C12.0421 16.7018 12.0497 16.6825 12.0575 16.6632ZM6.46587 17.1237C6.06919 17.0045 5.65095 17.2294 5.5317 17.6261C5.41246 18.0228 5.63736 18.441 6.03404 18.5602C6.67365 18.7525 7.38136 18.9087 8.1374 19.0234C8.54692 19.0856 8.9293 18.804 8.99146 18.3945C9.05362 17.9849 8.77203 17.6026 8.36251 17.5404C7.66722 17.4349 7.02942 17.2932 6.46587 17.1237Z',
  d16: 'M20 15.7492V14.6875C20 13.3158 18.8548 12.25 17.5 12.25C16.1452 12.25 15 13.3158 15 14.6875V15.7492C14.9249 15.772 14.8502 15.7993 14.7761 15.8322C14.1559 16.1074 13.6789 16.6277 13.4337 17.262C13.3278 17.536 13.2871 17.8173 13.2682 18.1139C13.25 18.3994 13.25 18.7471 13.25 19.1639V19.2111C13.25 19.6278 13.25 19.9756 13.2682 20.2611C13.2871 20.5577 13.3278 20.839 13.4337 21.113C13.6789 21.7474 14.1559 22.2676 14.7761 22.5428C15.0484 22.6637 15.3272 22.7093 15.6128 22.7302C15.8844 22.75 16.2134 22.75 16.5989 22.75H18.4011C18.7866 22.75 19.1156 22.75 19.3872 22.7302C19.6728 22.7093 19.9516 22.6637 20.2239 22.5428C20.8441 22.2676 21.3211 21.7474 21.5663 21.113C21.6722 20.839 21.7129 20.5577 21.7318 20.2611C21.75 19.9756 21.75 19.6279 21.75 19.2111V19.1639C21.75 18.7472 21.75 18.3994 21.7318 18.1139C21.7129 17.8173 21.6722 17.536 21.5663 17.262C21.3211 16.6277 20.8441 16.1074 20.2239 15.8322C20.1498 15.7993 20.0751 15.772 20 15.7492ZM16.5 14.6875C16.5 14.1952 16.9218 13.75 17.5 13.75C18.0782 13.75 18.5 14.1952 18.5 14.6875V15.625H16.5V14.6875Z',
  d17: 'M6.46611 10.1257C6.06943 10.0065 5.65119 10.2314 5.53195 10.628C5.4127 11.0247 5.63761 11.443 6.03428 11.5622C6.67389 11.7545 7.3816 11.9106 8.13764 12.0254C8.54716 12.0875 8.92954 11.8059 8.9917 11.3964C9.05387 10.9869 8.77228 10.6045 8.36276 10.5424C7.66746 10.4368 7.02966 10.2951 6.46611 10.1257Z',
  d18: 'M6.46611 17.1257C6.06943 17.0065 5.65119 17.2314 5.53195 17.628C5.4127 18.0247 5.63761 18.443 6.03428 18.5622C6.67389 18.7545 7.3816 18.9106 8.13764 19.0254C8.54716 19.0875 8.92954 18.8059 8.9917 18.3964C9.05387 17.9869 8.77228 17.6045 8.36276 17.5424C7.66746 17.4368 7.02966 17.2951 6.46611 17.1257Z',
  d19: 'M10 11.4768C8.91806 11.4262 7.90321 11.2946 7 11.0986M10 18.4768C8.91806 18.4262 7.90321 18.2946 7 18.0986',
  d20: 'M19.5 16.5V15C19.5 13.8954 18.6046 13 17.5 13C16.3954 13 15.5 13.8954 15.5 15V16.5M14 16.5H21V22H14V16.5Z',
  d21: 'M18 12.25C16.4812 12.25 15.25 13.4812 15.25 15V15.75H13.75V22.75H22.25V15.75H20.75V15C20.75 13.4812 19.5188 12.25 18 12.25ZM16.75 15V15.75H19.25V15C19.25 14.3096 18.6904 13.75 18 13.75C17.3096 13.75 16.75 14.3096 16.75 15Z',
  d22: 'M4.65891 2.13345C6.20115 1.57577 8.26651 1.25 10.5 1.25C12.7335 1.25 14.7988 1.57577 16.3411 2.13345C17.1086 2.411 17.7973 2.7641 18.3115 3.20376C18.8247 3.64244 19.25 4.24729 19.25 5V10.9368C18.8548 10.8154 18.435 10.75 18 10.75C16.0901 10.75 14.4745 12.0098 13.9387 13.7437C12.8841 13.9078 11.7243 14 10.5 14C7.87871 14 5.55335 13.5774 3.92144 12.9312C3.1029 12.6071 2.50872 12.2463 2.13551 11.8969C1.934 11.7083 1.81585 11.5424 1.75 11.4011V5C1.75 4.24729 2.17534 3.64244 2.68846 3.20376C3.20271 2.7641 3.89138 2.411 4.65891 2.13345ZM3.97842 4.60674C3.70438 4.84102 3.69444 4.97606 3.69444 5C3.69444 5.02394 3.70438 5.15898 3.97842 5.39326C4.25132 5.62657 4.70168 5.87951 5.34165 6.11093C6.61441 6.57117 8.43794 6.875 10.5 6.875C12.5621 6.875 14.3856 6.57117 15.6583 6.11093C16.2983 5.87951 16.7487 5.62657 17.0216 5.39326C17.2956 5.15898 17.3056 5.02394 17.3056 5C17.3056 4.97606 17.2956 4.84102 17.0216 4.60674C16.7487 4.37343 16.2983 4.12049 15.6583 3.88907C14.3856 3.42883 12.5621 3.125 10.5 3.125C8.43794 3.125 6.61441 3.42883 5.34165 3.88907C4.70168 4.12049 4.25132 4.37343 3.97842 4.60674ZM6.66016 9.5C7.51886 9.68627 8.45773 9.81347 9.50195 9.8623V11.3623C8.50598 11.3157 7.52409 11.2006 6.66016 11.0315V9.5Z',
  d23: 'M12.25 15.9412C11.6792 15.98 11.0945 16 10.5 16C7.68005 16 5.07929 15.5492 3.14539 14.7834C2.64385 14.5848 2.17361 14.3597 1.75 14.1072V19C1.75 19.7057 2.13408 20.2883 2.63112 20.7289C3.12904 21.1704 3.80674 21.5337 4.5798 21.8236C6.13146 22.4054 8.22474 22.75 10.5 22.75C11.0981 22.75 11.6836 22.7262 12.25 22.6805V15.9412ZM9.5 18.3623C8.45578 18.3135 7.5169 18.1863 6.6582 18V19.5315C7.52214 19.7006 8.50402 19.8157 9.5 19.8623V18.3623Z',
};

export const IconDatabaseLockedStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-locked-stroke-rounded IconDatabaseLockedStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseLockedDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-locked-duotone-rounded IconDatabaseLockedDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseLockedTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-locked-twotone-rounded IconDatabaseLockedTwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseLockedSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-locked-solid-rounded IconDatabaseLockedSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconDatabaseLockedBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-locked-bulk-rounded IconDatabaseLockedBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      </g>
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseLockedStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-locked-stroke-sharp IconDatabaseLockedStrokeSharp"
    >
      <ellipse 
        cx="11" 
        cy="5" 
        rx="8" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></ellipse>
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
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
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseLockedSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-locked-solid-sharp IconDatabaseLockedSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDatabaseLocked: TheIconSelfPack = {
  name: 'DatabaseLocked',
  StrokeRounded: IconDatabaseLockedStrokeRounded,
  DuotoneRounded: IconDatabaseLockedDuotoneRounded,
  TwotoneRounded: IconDatabaseLockedTwotoneRounded,
  SolidRounded: IconDatabaseLockedSolidRounded,
  BulkRounded: IconDatabaseLockedBulkRounded,
  StrokeSharp: IconDatabaseLockedStrokeSharp,
  SolidSharp: IconDatabaseLockedSolidSharp,
};