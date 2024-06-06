import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 10.8418C5.60158 11.0226 6.27434 11.1716 7 11.2817',
  d2: 'M5 17.8418C5.60158 18.0226 6.27434 18.1716 7 18.2817',
  d3: 'M12 15.4996L13.1363 16.965C13.708 14.8316 15.9014 13.5656 18.0352 14.1373C19.1275 14.4299 19.9925 15.1473 20.5 16.064M22 20.4984L20.8637 19.035C20.2919 21.1684 18.0986 22.4344 15.9647 21.8627C14.8978 21.5769 14.0477 20.8858 13.5359 19.9995',
  d4: 'M18 5V11.0082M2 5V19.0191C2 20.5511 5.05369 21.8152 9 22',
  d5: 'M2 12C2 13.5418 5.05369 14.814 9 15',
  d6: 'M18 5C18 6.65685 14.4183 8 10 8C5.58172 8 2 6.65685 2 5V19C2 20.6569 5.58172 22 10 22C11.8296 22 13.5157 21.7697 14.8634 21.3822C13.7435 20.6732 13 19.4235 13 18C13 15.7909 14.7909 14 17 14C17.3453 14 17.6804 14.0438 18 14.126V5Z',
  d7: 'M1.5 5C1.5 4.19711 1.93749 3.55194 2.46527 3.08401C2.99422 2.61504 3.70256 2.2384 4.49202 1.94235C6.07833 1.34749 8.20269 1 10.5 1C12.7973 1 14.9217 1.34749 16.508 1.94235C17.2974 2.2384 18.0058 2.61504 18.5347 3.08401C19.0625 3.55194 19.5 4.19711 19.5 5V9.98763C19.5 10.748 19.4007 11.2406 18.9424 11.6786C18.8442 11.7724 18.7952 11.8193 18.7161 11.8381C18.6371 11.857 18.5559 11.8323 18.3935 11.7829C18.3237 11.7617 18.2533 11.7416 18.1823 11.7225C16.1232 11.171 14.0319 11.6726 12.4779 12.8948C12.352 12.9938 12.2891 13.0433 12.2285 13.0591C12.168 13.0749 12.0785 13.0608 11.8996 13.0326C11.1108 12.9086 10.2917 13.175 9.72742 13.7373C9.60275 13.8616 9.54042 13.9237 9.4795 13.9464C9.41858 13.9691 9.34735 13.9642 9.20489 13.9542C7.2036 13.814 5.16298 13.3539 3.5508 12.5952C3.14779 12.4055 2.78325 12.2037 2.45806 11.9907C1.65337 11.4637 1.5 10.9324 1.5 9.98763V5ZM5.07313 6.13845C4.47883 5.9045 4.05524 5.65279 3.79209 5.41948C3.4354 5.10324 3.4354 4.89676 3.79209 4.58052C4.07279 4.33166 4.53602 4.06185 5.19427 3.81501C6.5034 3.32409 8.37903 3 10.5 3C12.621 3 14.4966 3.32409 15.8057 3.81501C16.464 4.06185 16.9272 4.33166 17.2079 4.58052C17.5646 4.89676 17.5646 5.10324 17.2079 5.41948C16.9272 5.66834 16.464 5.93815 15.8057 6.18499C14.4966 6.67591 12.621 7 10.5 7C9.6029 7 8.74969 6.94202 7.96467 6.83796C6.98782 6.70847 6.02272 6.51225 5.07313 6.13845ZM5.71587 10.1237C5.31919 10.0045 4.90095 10.2294 4.7817 10.6261C4.66246 11.0228 4.88736 11.441 5.28404 11.5602C5.92365 11.7525 6.63136 11.9087 7.3874 12.0234C7.79692 12.0856 8.1793 11.804 8.24146 11.3945C8.30362 10.9849 8.02203 10.6026 7.61251 10.5404C6.91722 10.4349 6.27942 10.2932 5.71587 10.1237Z',
  d8: 'M9.07378 16.1048C9.055 16.0293 9.0456 15.9915 9.0208 15.9706C8.996 15.9497 8.95915 15.947 8.88543 15.9417C6.75404 15.7862 4.62262 15.3098 2.6992 14.4046C2.50604 14.3137 2.31512 14.2177 2.12747 14.1164C1.8392 13.9608 1.69506 13.883 1.59753 13.9412C1.5 13.9993 1.5 14.1584 1.5 14.4765V18.9998C1.5 19.8027 1.93749 20.4479 2.46527 20.9158C2.99422 21.3848 3.70256 21.7614 4.49202 22.0575C6.07833 22.6523 8.20269 22.9998 10.5 22.9998C10.7714 22.9998 11.0403 22.995 11.3063 22.9854C11.7017 22.9713 11.8993 22.9642 11.9497 22.8487C12 22.7332 11.8617 22.5734 11.5852 22.2536C11.3153 21.9415 11.0762 21.6052 10.871 21.2499C10.5293 20.6581 10.457 19.9846 10.6162 19.3716C10.7189 18.9756 10.7703 18.7776 10.7459 18.6624C10.7215 18.5471 10.6308 18.433 10.4495 18.2048C10.1519 17.8305 9.76637 17.3437 9.52448 17.0317C9.30454 16.7481 9.1552 16.432 9.07378 16.1048ZM5.71587 17.1237C5.31919 17.0045 4.90095 17.2294 4.7817 17.6261C4.66246 18.0228 4.88736 18.441 5.28404 18.5602C5.92365 18.7525 6.63136 18.9087 7.3874 19.0234C7.79692 19.0856 8.1793 18.804 8.24146 18.3945C8.30362 17.9849 8.02203 17.6026 7.61251 17.5404C6.91722 17.4349 6.27942 17.2932 5.71587 17.1237Z',
  d9: 'M12.44 15.0802C13.6191 13.4421 15.7289 12.6184 17.7941 13.1716C19.1592 13.5373 20.2414 14.4355 20.8749 15.58C21.1424 16.0632 20.9675 16.6717 20.4843 16.9392C20.0012 17.2067 19.3926 17.0318 19.1251 16.5486C18.7437 15.8595 18.096 15.323 17.2765 15.1034C15.6759 14.6747 14.031 15.6244 13.6022 17.2241C13.5039 17.591 13.2062 17.8705 12.8339 17.9455C12.4615 18.0206 12.0788 17.8782 11.8461 17.578L10.7098 16.1127C10.3714 15.6762 10.4508 15.048 10.8873 14.7096C11.3237 14.3712 11.9519 14.4506 12.2903 14.8871L12.44 15.0802ZM20.1658 18.055C19.7936 18.1302 19.4961 18.4096 19.3978 18.7764C18.9691 20.3761 17.3241 21.3258 15.7235 20.897C14.923 20.6826 14.2865 20.1657 13.9019 19.4996C13.6257 19.0214 13.0141 18.8576 12.5358 19.1338C12.0576 19.4099 11.8937 20.0216 12.1699 20.4998C12.809 21.6065 13.8726 22.4717 15.206 22.8289C17.2715 23.3822 19.3818 22.5581 20.5607 20.9194L20.7102 21.1119C21.0489 21.5482 21.6772 21.6272 22.1134 21.2885C22.5496 20.9497 22.6286 20.3215 22.2899 19.8853L21.1536 18.4219C20.9207 18.122 20.538 17.9799 20.1658 18.055Z',
  d10: 'M5.71611 10.1257C5.31943 10.0065 4.90119 10.2314 4.78195 10.628C4.6627 11.0247 4.88761 11.443 5.28428 11.5622C5.92389 11.7545 6.6316 11.9106 7.38764 12.0254C7.79716 12.0875 8.17954 11.8059 8.2417 11.3964C8.30387 10.9869 8.02228 10.6045 7.61276 10.5424C6.91746 10.4368 6.27966 10.2951 5.71611 10.1257Z',
  d11: 'M5.71611 17.1257C5.31943 17.0065 4.90119 17.2314 4.78195 17.628C4.6627 18.0247 4.88761 18.443 5.28428 18.5622C5.92389 18.7545 6.6316 18.9106 7.38764 19.0254C7.79716 19.0875 8.17954 18.8059 8.2417 18.3964C8.30387 17.9869 8.02228 17.6045 7.61276 17.5424C6.91746 17.4368 6.27966 17.2951 5.71611 17.1257Z',
  d12: 'M10 15C5.58172 15 2 13.6569 2 12',
  d13: 'M9 11.4768C7.91806 11.4262 6.90321 11.2946 6 11.0986M9 18.4768C7.91806 18.4262 6.90321 18.2946 6 18.0986',
  d14: 'M10 22C5.58172 22 2 20.6569 2 19V5M18 5V11',
  d15: 'M13.3936 15.226C14.5135 13.67 16.5177 12.8875 18.4794 13.413C19.7762 13.7603 20.8041 14.6136 21.4059 15.7007L19.7438 16.6208C19.3815 15.9663 18.7662 15.4566 17.9878 15.2481C16.4673 14.8408 14.9048 15.7429 14.4975 17.2625C14.4041 17.611 14.1214 17.8765 13.7677 17.9478C13.414 18.0191 13.0504 17.8838 12.8293 17.5987L11.75 16.2067L13.2513 15.0426L13.3936 15.226ZM20.7324 18.0518C20.3788 18.1232 20.0962 18.3886 20.0028 18.737C19.5955 20.2566 18.033 21.1588 16.5125 20.7515C15.7521 20.5477 15.1475 20.0567 14.7822 19.4241L13.137 20.3741C13.7441 21.4253 14.7544 22.2473 16.021 22.5866C17.983 23.1122 19.9876 22.3293 21.1074 20.7727L21.2495 20.9556L22.75 19.7904L21.6706 18.4003C21.4494 18.1155 21.0859 17.9804 20.7324 18.0518Z',
  d16: 'M18.4043 11.8589C16.6467 11.5265 14.8983 11.9714 13.5414 12.9703L12.3429 13.8839C11.5984 13.9593 10.8134 14 10 14C7.37871 14 5.05335 13.5774 3.42144 12.9312C2.6029 12.6071 2.00872 12.2463 1.63551 11.8969C1.434 11.7083 1.31585 11.5424 1.25 11.4011V5C1.25 4.24729 1.67534 3.64244 2.18846 3.20375C2.70271 2.7641 3.39138 2.411 4.15891 2.13345C5.70115 1.57577 7.76651 1.25 10 1.25C12.2335 1.25 14.2988 1.57577 15.8411 2.13345C16.6086 2.411 17.2973 2.7641 17.8115 3.20375C18.3247 3.64244 18.75 4.24729 18.75 5V11.4011C18.6886 11.5329 18.5818 11.6859 18.4043 11.8589ZM3.47842 4.60674C3.20438 4.84102 3.19444 4.97606 3.19444 5C3.19444 5.02394 3.20438 5.15898 3.47842 5.39326C3.75132 5.62657 4.20168 5.87951 4.84165 6.11093C6.11441 6.57117 7.93794 6.875 10 6.875C12.0621 6.875 13.8856 6.57117 15.1583 6.11093C15.7983 5.87951 16.2487 5.62657 16.5216 5.39326C16.7956 5.15898 16.8056 5.02394 16.8056 5C16.8056 4.97606 16.7956 4.84102 16.5216 4.60674C16.2487 4.37343 15.7983 4.12049 15.1583 3.88907C13.8856 3.42883 12.0621 3.125 10 3.125C7.93794 3.125 6.11441 3.42883 4.84165 3.88907C4.20168 4.12049 3.75132 4.37343 3.47842 4.60674ZM6.16016 9.5C7.01886 9.68627 7.95773 9.81347 9.00195 9.8623V11.3623C8.00598 11.3157 7.02409 11.2006 6.16016 11.0315V9.5Z',
  d17: 'M12.9603 22.5459C12.0339 22.6786 11.0358 22.75 10 22.75C7.72474 22.75 5.63146 22.4054 4.0798 21.8236C3.30674 21.5337 2.62904 21.1704 2.13112 20.7289C1.63408 20.2883 1.25 19.7057 1.25 19V14.1072C1.67361 14.3597 2.14385 14.5848 2.64539 14.7834C4.50797 15.521 6.98913 15.9663 9.68893 15.9982L11.643 18.5182C11.8318 18.7616 12.0608 18.9627 12.3158 19.1161L11.087 19.8257L11.8371 21.1246C12.1389 21.6472 12.5168 22.127 12.9603 22.5459ZM9 18.3623C7.95578 18.3135 7.0169 18.1863 6.1582 18V19.5315C7.02214 19.7006 8.00402 19.8157 9 19.8623V18.3623Z',
};

export const IconDatabaseSync01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-sync-01-stroke-rounded IconDatabaseSync01StrokeRounded"
    >
      <ellipse 
        cx="10" 
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
        strokeLinejoin="round" 
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

export const IconDatabaseSync01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-sync-01-duotone-rounded IconDatabaseSync01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <ellipse 
        cx="10" 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseSync01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-sync-01-twotone-rounded IconDatabaseSync01TwotoneRounded"
    >
      <ellipse 
        cx="10" 
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
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
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

export const IconDatabaseSync01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-sync-01-solid-rounded IconDatabaseSync01SolidRounded"
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

export const IconDatabaseSync01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-sync-01-bulk-rounded IconDatabaseSync01BulkRounded"
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

export const IconDatabaseSync01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-sync-01-stroke-sharp IconDatabaseSync01StrokeSharp"
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
        cx="10" 
        cy="5" 
        rx="8" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></ellipse>
      <path 
        d={d.d14} 
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
    </TheIconWrapper>
  );
};

export const IconDatabaseSync01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-sync-01-solid-sharp IconDatabaseSync01SolidSharp"
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

export const iconPackOfDatabaseSync01: TheIconSelfPack = {
  name: 'DatabaseSync01',
  StrokeRounded: IconDatabaseSync01StrokeRounded,
  DuotoneRounded: IconDatabaseSync01DuotoneRounded,
  TwotoneRounded: IconDatabaseSync01TwotoneRounded,
  SolidRounded: IconDatabaseSync01SolidRounded,
  BulkRounded: IconDatabaseSync01BulkRounded,
  StrokeSharp: IconDatabaseSync01StrokeSharp,
  SolidSharp: IconDatabaseSync01SolidSharp,
};