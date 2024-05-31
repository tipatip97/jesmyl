import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 10.8418C6.60158 11.0226 7.27434 11.1716 8 11.2817',
  d2: 'M3 12C3 13.5299 6.05369 14.7923 10 14.9768',
  d3: 'M6 17.8418C6.60158 18.0226 7.27434 18.1716 8 18.2817',
  d4: 'M11 22C6.58172 22 3 20.6569 3 19V5M19 5V11',
  d5: 'M17 20.7143V22M17 20.7143C15.8432 20.7143 14.8241 20.1461 14.2263 19.2833M17 20.7143C18.1568 20.7143 19.1759 20.1461 19.7737 19.2833M17 14.2857C18.1569 14.2857 19.1761 14.854 19.7738 15.7169M17 14.2857C15.8431 14.2857 14.8239 14.854 14.2262 15.7169M17 14.2857V13M21 14.9286L19.7738 15.7169M13.0004 20.0714L14.2263 19.2833M13 14.9286L14.2262 15.7169M20.9996 20.0714L19.7737 19.2833M19.7738 15.7169C20.1273 16.2271 20.3333 16.8403 20.3333 17.5C20.3333 18.1597 20.1272 18.773 19.7737 19.2833M14.2262 15.7169C13.8727 16.2271 13.6667 16.8403 13.6667 17.5C13.6667 18.1597 13.8728 18.773 14.2263 19.2833',
  d6: 'M19 5C19 6.65685 15.4183 8 11 8C6.58172 8 3 6.65685 3 5V19C3 20.6569 6.58172 22 11 22C13.7996 22 16.2633 21.4607 17.6928 20.6441C17.4691 20.6897 17.2371 20.7137 16.9993 20.7137C15.8426 20.7137 14.8234 20.1455 14.2257 19.2828C13.8721 18.7725 13.666 18.1592 13.666 17.4994C13.666 16.8398 13.8721 16.2266 14.2255 15.7163C14.8233 14.8534 15.8425 14.2852 16.9993 14.2852C17.75 14.2852 18.4428 14.5245 19 14.9282V5Z',
  d7: 'M2 5C2 4.19711 2.43749 3.55194 2.96527 3.08401C3.49422 2.61504 4.20256 2.2384 4.99202 1.94235C6.57833 1.34749 8.70269 1 11 1C13.2973 1 15.4217 1.34749 17.008 1.94235C17.7974 2.2384 18.5058 2.61504 19.0347 3.08401C19.5625 3.55194 20 4.19711 20 5V9.98763C20 10.6889 19.9155 11.1623 19.5429 11.5753C19.4158 11.7162 19.3522 11.7867 19.2457 11.8025C19.1391 11.8183 19.022 11.7478 18.7879 11.6068C18.4118 11.3803 17.9711 11.25 17.5 11.25C16.4699 11.25 15.5853 11.8731 15.2025 12.7629C15.1775 12.8211 15.1649 12.8501 15.1537 12.8686C15.1296 12.9077 15.1104 12.9285 15.0731 12.9553C15.0556 12.9679 15.0302 12.9811 14.9796 13.0075C14.9251 13.0358 14.8979 13.05 14.8759 13.0574C14.8292 13.0732 14.7991 13.0766 14.75 13.0717C14.727 13.0694 14.6938 13.0608 14.6275 13.0436C13.7521 12.8166 12.8035 13.0816 12.1739 13.7563C12.0664 13.8715 12.0127 13.9291 11.9587 13.9538C11.9048 13.9785 11.8405 13.981 11.7119 13.986C11.4731 13.9953 11.2355 14 11 14C8.6113 14 6.01354 13.5188 4.0508 12.5952C3.64779 12.4055 3.28325 12.2037 2.95806 11.9907C2.15337 11.4637 2 10.9324 2 9.98763V5ZM5.57313 6.13845C4.97883 5.9045 4.55524 5.65279 4.29209 5.41948C3.9354 5.10324 3.9354 4.89676 4.29209 4.58052C4.57279 4.33166 5.03602 4.06185 5.69427 3.81501C7.0034 3.32409 8.87903 3 11 3C13.121 3 14.9966 3.32409 16.3057 3.81501C16.964 4.06185 17.4272 4.33166 17.7079 4.58052C18.0646 4.89676 18.0646 5.10324 17.7079 5.41948C17.4272 5.66834 16.964 5.93815 16.3057 6.18499C14.9966 6.67591 13.121 7 11 7C10.1029 7 9.24969 6.94202 8.46467 6.83796C7.48782 6.70847 6.52272 6.51225 5.57313 6.13845ZM6.21587 10.1237C5.81919 10.0045 5.40095 10.2294 5.2817 10.6261C5.16246 11.0228 5.38736 11.441 5.78404 11.5602C6.42365 11.7525 7.13136 11.9087 7.8874 12.0234C8.29692 12.0856 8.6793 11.804 8.74146 11.3945C8.80362 10.9849 8.52203 10.6026 8.11251 10.5404C7.41722 10.4349 6.77942 10.2932 6.21587 10.1237Z',
  d8: 'M11.7089 16.4654C11.6018 16.2197 11.5483 16.0968 11.4732 16.0478C11.398 15.9987 11.2848 15.9991 11.0583 15.9997C11.0389 15.9998 11.0194 15.9998 11 15.9998C8.346 15.9998 5.60931 15.5388 3.1992 14.4046C3.00604 14.3137 2.81512 14.2177 2.62747 14.1164C2.3392 13.9608 2.19506 13.883 2.09753 13.9412C2 13.9993 2 14.1584 2 14.4765V18.9998C2 19.8027 2.43749 20.4479 2.96527 20.9158C3.49422 21.3848 4.20256 21.7614 4.99202 22.0575C6.57833 22.6523 8.70269 22.9998 11 22.9998C12.3606 22.9998 13.6606 22.8779 14.824 22.6549C14.8724 22.6456 14.8967 22.641 14.9098 22.6341C14.968 22.6035 14.9811 22.5242 14.9357 22.4766C14.9255 22.4659 14.9037 22.4535 14.86 22.4288C14.8505 22.4234 14.8458 22.4207 14.8412 22.4187C14.8215 22.41 14.8012 22.4078 14.78 22.4123C14.7752 22.4134 14.7695 22.4152 14.7582 22.4188C13.7141 22.7514 12.5356 22.3649 11.9073 21.4027C11.331 20.5203 11.384 19.4089 11.9555 18.5964C12.0399 18.4764 12.0821 18.4165 12.0959 18.3667C12.1098 18.3169 12.1052 18.2509 12.0961 18.1188C12.0877 17.9968 12.0834 17.8739 12.0834 17.75C12.0834 17.6263 12.0877 17.5034 12.0961 17.3816C12.1052 17.2495 12.1098 17.1834 12.0959 17.1337C12.082 17.0839 12.0398 17.0239 11.9554 16.904C11.858 16.7656 11.7757 16.6185 11.7089 16.4654ZM6.21587 17.1237C5.81919 17.0045 5.40095 17.2294 5.2817 17.6261C5.16246 18.0228 5.38736 18.441 5.78404 18.5602C6.42365 18.7525 7.13136 18.9087 7.8874 19.0234C8.29692 19.0856 8.6793 18.804 8.74146 18.3945C8.80362 17.9849 8.52203 17.6026 8.11251 17.5404C7.41722 17.4349 6.77942 17.2932 6.21587 17.1237Z',
  d9: 'M17.5001 12.75C18.0524 12.75 18.5001 13.1977 18.5001 13.75V14.0199C19.0994 14.1754 19.6436 14.4674 20.0951 14.8609L20.4533 14.627C20.9157 14.325 21.5354 14.4551 21.8374 14.9175C22.1394 15.3799 22.0093 15.9995 21.5469 16.3015L21.213 16.5196C21.345 16.9061 21.4168 17.3201 21.4168 17.75C21.4168 18.18 21.345 18.594 21.2129 18.9806L21.5466 19.1985C22.009 19.5005 22.139 20.1201 21.837 20.5825C21.535 21.0449 20.9153 21.175 20.4529 20.873L20.095 20.6392C19.6434 21.0327 19.0994 21.3246 18.5001 21.4801V21.75C18.5001 22.3023 18.0524 22.75 17.5001 22.75C16.9478 22.75 16.5001 22.3023 16.5001 21.75V21.4801C15.9009 21.3246 15.3568 21.0327 14.9053 20.6392L14.5473 20.873C14.0849 21.175 13.4652 21.0449 13.1632 20.5825C12.8612 20.1201 12.9913 19.5005 13.4537 19.1985L13.7873 18.9806C13.6552 18.594 13.5834 18.18 13.5834 17.75C13.5834 17.3201 13.6552 16.9061 13.7872 16.5196L13.4533 16.3015C12.9909 15.9995 12.8609 15.3799 13.1629 14.9175C13.4649 14.4551 14.0845 14.325 14.5469 14.627L14.9051 14.8609C15.3567 14.4674 15.9008 14.1754 16.5001 14.0199V13.75C16.5001 13.1977 16.9478 12.75 17.5001 12.75ZM17.5001 15.8929C16.8267 15.8929 16.2406 16.2277 15.8992 16.7284C15.6989 17.0222 15.5834 17.3722 15.5834 17.75C15.5834 18.1279 15.6989 18.4779 15.8993 18.7717C16.2407 19.2724 16.8268 19.6071 17.5001 19.6071C18.1735 19.6071 18.7595 19.2724 19.1009 18.7717C19.3013 18.4779 19.4168 18.1279 19.4168 17.75C19.4168 17.3722 19.3014 17.0222 19.101 16.7284C18.7596 16.2277 18.1735 15.8929 17.5001 15.8929Z',
  d10: 'M6.21611 10.1257C5.81943 10.0065 5.40119 10.2314 5.28195 10.628C5.1627 11.0247 5.38761 11.443 5.78428 11.5622C6.42389 11.7545 7.1316 11.9106 7.88764 12.0254C8.29716 12.0875 8.67954 11.8059 8.7417 11.3964C8.80387 10.9869 8.52228 10.6045 8.11276 10.5424C7.41746 10.4368 6.77966 10.2951 6.21611 10.1257Z',
  d11: 'M6.21611 17.1257C5.81943 17.0065 5.40119 17.2314 5.28195 17.628C5.1627 18.0247 5.38761 18.443 5.78428 18.5622C6.42389 18.7545 7.1316 18.9106 7.88764 19.0254C8.29716 19.0875 8.67954 18.8059 8.7417 18.3964C8.80387 17.9869 8.52228 17.6045 8.11276 17.5424C7.41746 17.4368 6.77966 17.2951 6.21611 17.1257Z',
  d12: 'M11 15C6.58172 15 3 13.6569 3 12',
  d13: 'M10 11.4768C8.91806 11.4262 7.90321 11.2946 7 11.0986M10 18.4768C8.91806 18.4262 7.90321 18.2946 7 18.0986',
  d14: 'M17 20.7143V22.5M17 20.7143C15.8432 20.7143 14.8241 20.1461 14.2263 19.2833M17 20.7143C18.1568 20.7143 19.1759 20.1461 19.7737 19.2833M17 14.2857C18.1569 14.2857 19.1761 14.854 19.7738 15.7169M17 14.2857C15.8431 14.2857 14.8239 14.854 14.2262 15.7169M17 14.2857V12.5M21.5 14.5L19.7738 15.7169M12.5 20.5L14.2263 19.2833M12.5 14.5L14.2262 15.7169M21.5 20.5L19.7737 19.2833M19.7738 15.7169C20.1273 16.2271 20.3333 16.8403 20.3333 17.5C20.3333 18.1597 20.1272 18.773 19.7737 19.2833M14.2262 15.7169C13.8727 16.2271 13.6667 16.8403 13.6667 17.5C13.6667 18.1597 13.8728 18.773 14.2263 19.2833',
  d15: 'M16.5643 14.2335C15.8836 14.39 15.267 14.7136 14.7651 15.1597L13.8283 14.4993L12.75 16.0289L13.6982 16.6973C13.5348 17.1249 13.4451 17.588 13.4451 18.0713C13.4451 18.5546 13.5348 19.0177 13.6983 19.4454L12.7501 20.1137L13.8282 21.6434L14.7652 20.983C15.2671 21.429 15.8836 21.7527 16.5643 21.9091V22.75H18.4357V21.9091C19.1164 21.7527 19.7329 21.429 20.2348 20.983L21.1718 21.6434L22.2499 20.1137L21.3017 19.4454C21.4652 19.0177 21.5549 18.5546 21.5549 18.0713C21.5549 17.588 21.4652 17.1249 21.3018 16.6973L22.25 16.0289L21.1717 14.4993L20.2349 15.1597C19.733 14.7136 19.1164 14.39 18.4357 14.2335V13.3926H16.5643V14.2335ZM17.5 15.9993C16.7281 15.9993 16.0603 16.3775 15.6736 16.9356C15.4466 17.2634 15.3166 17.6526 15.3166 18.0713C15.3166 18.49 15.4466 18.8793 15.6737 19.2071C16.0604 19.7652 16.7282 20.1433 17.5 20.1433C18.2718 20.1433 18.9396 19.7652 19.3263 19.2071C19.5534 18.8793 19.6834 18.49 19.6834 18.0713C19.6834 17.6526 19.5534 17.2634 19.3264 16.9356C18.9397 16.3775 18.2719 15.9993 17.5 15.9993Z',
  d16: 'M4.65891 2.13345C6.20115 1.57577 8.26651 1.25 10.5 1.25C12.7335 1.25 14.7988 1.57577 16.3411 2.13345C17.1086 2.411 17.7973 2.7641 18.3115 3.20376C18.8247 3.64244 19.25 4.24729 19.25 5V11.4011C19.1847 11.5413 19.0678 11.7057 18.8691 11.8926H15.0647V13.1781C14.9654 13.2256 14.8678 13.2759 14.7719 13.3289L13.467 12.409L12.3988 13.9243C11.7883 13.9737 11.1534 14 10.5 14C7.87871 14 5.55335 13.5774 3.92144 12.9312C3.1029 12.6071 2.50872 12.2463 2.13551 11.8969C1.934 11.7083 1.81585 11.5424 1.75 11.4011V5C1.75 4.24729 2.17534 3.64244 2.68846 3.20376C3.20271 2.7641 3.89138 2.411 4.65891 2.13345ZM3.97842 4.60674C3.70438 4.84102 3.69444 4.97606 3.69444 5C3.69444 5.02394 3.70438 5.15898 3.97842 5.39326C4.25132 5.62657 4.70168 5.87951 5.34165 6.11093C6.61441 6.57117 8.43794 6.875 10.5 6.875C12.5621 6.875 14.3856 6.57117 15.6583 6.11093C16.2983 5.87951 16.7487 5.62657 17.0216 5.39326C17.2956 5.15898 17.3056 5.02394 17.3056 5C17.3056 4.97606 17.2956 4.84102 17.0216 4.60674C16.7487 4.37343 16.2983 4.12049 15.6583 3.88907C14.3856 3.42883 12.5621 3.125 10.5 3.125C8.43794 3.125 6.61441 3.42883 5.34165 3.88907C4.70168 4.12049 4.25132 4.37343 3.97842 4.60674ZM6.66016 9.5C7.51886 9.68627 8.45773 9.81347 9.50195 9.8623V11.3623C8.50598 11.3157 7.52409 11.2006 6.66016 11.0315V9.5Z',
  d17: 'M10.9381 15.9964C10.7927 15.9988 10.6466 16 10.5 16C7.68005 16 5.07929 15.5492 3.14539 14.7834C2.64385 14.5848 2.17361 14.3597 1.75 14.1072V19C1.75 19.7057 2.13408 20.2883 2.63112 20.7289C3.12904 21.1704 3.80674 21.5337 4.5798 21.8236C6.13146 22.4054 8.22474 22.75 10.5 22.75C11.2564 22.75 11.9927 22.7119 12.6957 22.6397L10.6603 19.7517L11.9965 18.81C11.9629 18.5682 11.9455 18.3215 11.9455 18.0713C11.9455 17.8211 11.9629 17.5744 11.9965 17.3327L10.6602 16.3906L10.9381 15.9964ZM9.5 18.3623C8.45578 18.3135 7.5169 18.1863 6.6582 18V19.5315C7.52214 19.7006 8.50402 19.8157 9.5 19.8623V18.3623Z',
} as const;

export const IconDatabaseSettingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-setting-stroke-rounded IconDatabaseSettingStrokeRounded"
    >
      <ellipse 
        cx="11" 
        cy="5" 
        rx="8" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseSettingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-setting-duotone-rounded IconDatabaseSettingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <ellipse 
        cx="11" 
        cy="5" 
        rx="8" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseSettingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-setting-twotone-rounded IconDatabaseSettingTwotoneRounded"
    >
      <ellipse 
        cx="11" 
        cy="5" 
        rx="8" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseSettingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-setting-solid-rounded IconDatabaseSettingSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconDatabaseSettingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-setting-bulk-rounded IconDatabaseSettingBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
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

export const IconDatabaseSettingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-setting-stroke-sharp IconDatabaseSettingStrokeSharp"
    >
      <path 
        d={d.d12} 
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
      <ellipse 
        cx="11" 
        cy="5" 
        rx="8" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></ellipse>
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseSettingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-setting-solid-sharp IconDatabaseSettingSolidSharp"
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

export const iconPackOfDatabaseSetting: TheIconSelfPack = {
  name: 'DatabaseSetting',
  StrokeRounded: IconDatabaseSettingStrokeRounded,
  DuotoneRounded: IconDatabaseSettingDuotoneRounded,
  TwotoneRounded: IconDatabaseSettingTwotoneRounded,
  SolidRounded: IconDatabaseSettingSolidRounded,
  BulkRounded: IconDatabaseSettingBulkRounded,
  StrokeSharp: IconDatabaseSettingStrokeSharp,
  SolidSharp: IconDatabaseSettingSolidSharp,
};