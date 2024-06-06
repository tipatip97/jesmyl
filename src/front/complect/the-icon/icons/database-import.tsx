import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 10.8418C7.60158 11.0226 8.27434 11.1716 9 11.2817',
  d2: 'M12 15C7.58172 15 4 13.6569 4 12',
  d3: 'M7 17.8418C7.60158 18.0226 8.27434 18.1716 9 18.2817',
  d4: 'M12 22C7.58172 22 4 20.6569 4 19V5M20 5V12',
  d5: 'M20 19.3265L18.8258 20.8131C18.2008 21.6044 17.8883 22 17.5 22C17.1117 22 16.7992 21.6044 16.1742 20.8131L15 19.3265M17.5 21.9128V14',
  d6: 'M12 8C16.4183 8 20 6.65685 20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5C4 6.65685 7.58172 8 12 8Z',
  d7: 'M2.5 5C2.5 4.19711 2.93749 3.55194 3.46527 3.08401C3.99422 2.61504 4.70256 2.2384 5.49202 1.94235C7.07833 1.34749 9.20269 1 11.5 1C13.7973 1 15.9217 1.34749 17.508 1.94235C18.2974 2.2384 19.0058 2.61504 19.5347 3.08401C20.0625 3.55194 20.5 4.19711 20.5 5V9.98763C20.5 10.3551 20.4768 10.6601 20.4011 10.9265C20.3461 11.1199 20.3187 11.2165 20.2171 11.2494C20.1155 11.2823 20.011 11.2 19.802 11.0353C19.3765 10.7 18.8396 10.5 18.2559 10.5C16.8752 10.5 15.7559 11.6193 15.7559 13V13.0344C15.7559 13.2638 15.7559 13.3785 15.6885 13.4612C15.6212 13.544 15.5115 13.5667 15.2921 13.6121C14.0512 13.8688 12.7471 14 11.5 14C9.1113 14 6.51354 13.5188 4.5508 12.5952C4.14779 12.4055 3.78325 12.2037 3.45806 11.9907C2.65337 11.4637 2.5 10.9324 2.5 9.98763V5ZM6.07313 6.13845C5.47883 5.9045 5.05524 5.65279 4.79209 5.41948C4.4354 5.10324 4.4354 4.89676 4.79209 4.58052C5.07279 4.33166 5.53602 4.06185 6.19427 3.81501C7.5034 3.32409 9.37903 3 11.5 3C13.621 3 15.4966 3.32409 16.8057 3.81501C17.464 4.06185 17.9272 4.33166 18.2079 4.58052C18.5646 4.89676 18.5646 5.10324 18.2079 5.41948C17.9272 5.66834 17.464 5.93815 16.8057 6.18499C15.4966 6.67591 13.621 7 11.5 7C10.6029 7 9.74969 6.94202 8.96467 6.83796C7.98782 6.70847 7.02272 6.51225 6.07313 6.13845ZM6.71587 10.1237C6.31919 10.0045 5.90095 10.2294 5.7817 10.6261C5.66246 11.0228 5.88736 11.441 6.28404 11.5602C6.92365 11.7525 7.63136 11.9087 8.3874 12.0234C8.79692 12.0856 9.1793 11.804 9.24146 11.3945C9.30362 10.9849 9.02203 10.6026 8.61251 10.5404C7.91722 10.4349 7.27942 10.2932 6.71587 10.1237Z',
  d8: 'M15.7559 15.8046C15.7559 15.6909 15.7559 15.6341 15.7194 15.6041C15.6829 15.5741 15.6268 15.5852 15.5145 15.6073C14.1789 15.8706 12.8032 15.9998 11.5 15.9998C8.846 15.9998 6.10931 15.5388 3.6992 14.4046C3.50604 14.3137 3.31512 14.2177 3.12747 14.1164C2.8392 13.9608 2.69506 13.883 2.59753 13.9412C2.5 13.9993 2.5 14.1584 2.5 14.4765V18.9998C2.5 19.8027 2.93749 20.4479 3.46527 20.9158C3.99422 21.3848 4.70256 21.7614 5.49202 22.0575C7.07833 22.6523 9.20269 22.9998 11.5 22.9998C12.8945 22.9998 14.2253 22.8718 15.4107 22.6381C15.6346 22.5939 15.7099 22.3099 15.5508 22.1464C15.1059 21.6891 14.6761 21.1418 14.3884 20.7748C14.2212 20.5617 14.0572 20.3477 13.916 20.1162C13.8161 19.9524 13.1302 18.8276 13.7641 17.5208C14.2465 16.5264 15.1178 16.1984 15.5908 16.0882C15.672 16.0693 15.7125 16.0599 15.7342 16.0326C15.7559 16.0053 15.7559 15.9655 15.7559 15.8861V15.8046ZM6.71587 17.1237C6.31919 17.0045 5.90095 17.2294 5.7817 17.6261C5.66246 18.0228 5.88736 18.441 6.28404 18.5602C6.92365 18.7525 7.63136 18.9087 8.3874 19.0234C8.79692 19.0856 9.1793 18.804 9.24146 18.3945C9.30362 17.9849 9.02203 17.6026 8.61251 17.5404C7.91722 17.4349 7.27942 17.2932 6.71587 17.1237Z',
  d9: 'M19.2559 13C19.2559 12.4477 18.8081 12 18.2559 12C17.7036 12 17.2559 12.4477 17.2559 13L17.2559 17.5L16.6616 17.5C16.4713 17.4999 16.2797 17.4986 16.0905 17.5222C15.9641 17.538 15.388 17.6098 15.1137 18.1754C14.8387 18.7423 15.1407 19.2424 15.206 19.3506C15.3124 19.527 15.4419 19.6875 15.5688 19.8493C15.8635 20.2252 16.2454 20.7094 16.6259 21.1004C17.0572 21.5437 17.5963 22 18.25 22C18.9037 22 19.4428 21.5437 19.8741 21.1004C20.2546 20.7094 20.6365 20.2252 20.9312 19.8493C21.0581 19.6875 21.1875 19.527 21.294 19.3506C21.3593 19.2424 21.6613 18.7422 21.3863 18.1754C21.199 17.7893 20.8203 17.5735 20.4061 17.5218C20.2297 17.4997 20.014 17.4999 19.8384 17.5L19.2559 17.5L19.2559 13Z',
  d10: 'M6.71611 10.1218C6.31943 10.0025 5.90119 10.2274 5.78195 10.6241C5.6627 11.0208 5.88761 11.439 6.28428 11.5583C6.92389 11.7506 7.6316 11.9067 8.38764 12.0215C8.79716 12.0836 9.17954 11.802 9.2417 11.3925C9.30387 10.983 9.02228 10.6006 8.61276 10.5385C7.91746 10.4329 7.27966 10.2912 6.71611 10.1218Z',
  d11: 'M6.71611 17.1218C6.31943 17.0025 5.90119 17.2274 5.78195 17.6241C5.6627 18.0208 5.88761 18.439 6.28428 18.5583C6.92389 18.7506 7.6316 18.9067 8.38764 19.0215C8.79716 19.0836 9.17954 18.802 9.2417 18.3925C9.30387 17.983 9.02228 17.6006 8.61276 17.5385C7.91746 17.4329 7.27966 17.2912 6.71611 17.1218Z',
  d12: 'M11.001 11.4768C9.91904 11.4262 8.90419 11.2946 8.00098 11.0986M11.001 18.4768C9.91904 18.4262 8.90419 18.2946 8.00098 18.0986',
  d13: 'M20 19L17 22L14 19M17 13.9998V21.4186',
  d14: 'M18.0429 22.75L21.75 19.0429L20.3358 17.6287L19.0429 18.9216V13.3356H17.0429V18.9216L15.75 17.6287L14.3358 19.0429L18.0429 22.75Z',
  d15: 'M5.15879 2.13345C6.70103 1.57577 8.76639 1.25 10.9999 1.25C13.2334 1.25 15.2987 1.57577 16.841 2.13345C17.6085 2.411 18.2972 2.7641 18.8114 3.20376C19.3245 3.64244 19.7499 4.24729 19.7499 5V11.4011C19.6913 11.5269 19.5913 11.672 19.428 11.8354H15.5431V13.5377C14.217 13.8288 12.6684 14 10.9999 14C8.37859 14 6.05323 13.5774 4.42132 12.9312C3.60277 12.6071 3.00859 12.2463 2.63539 11.8969C2.43388 11.7083 2.31573 11.5424 2.24988 11.4011V5C2.24988 4.24729 2.67522 3.64244 3.18834 3.20376C3.70259 2.7641 4.39126 2.411 5.15879 2.13345ZM4.47829 4.60674C4.20426 4.84102 4.19432 4.97606 4.19432 5C4.19432 5.02394 4.20426 5.15898 4.47829 5.39326C4.7512 5.62657 5.20156 5.87951 5.84153 6.11093C7.11429 6.57117 8.93782 6.875 10.9999 6.875C13.0619 6.875 14.8855 6.57117 16.1582 6.11093C16.7982 5.87951 17.2486 5.62657 17.5215 5.39326C17.7955 5.15898 17.8054 5.02394 17.8054 5C17.8054 4.97606 17.7955 4.84102 17.5215 4.60674C17.2486 4.37343 16.7982 4.12049 16.1582 3.88907C14.8855 3.42883 13.0619 3.125 10.9999 3.125C8.93782 3.125 7.11429 3.42883 5.84153 3.88907C5.20156 4.12049 4.7512 4.37343 4.47829 4.60674ZM7.16003 9.5C8.01873 9.68627 8.95761 9.81347 10.0018 9.8623V11.3623C9.00585 11.3157 8.02397 11.2006 7.16003 11.0315V9.5Z',
  d16: 'M15.5431 15.5823C14.1565 15.8523 12.6141 16 10.9999 16C8.17992 16 5.57916 15.5492 3.64527 14.7834C3.14373 14.5848 2.67348 14.3597 2.24988 14.1072V19C2.24988 19.7057 2.63396 20.2883 3.131 20.7289C3.62892 21.1704 4.30662 21.5337 5.07968 21.8236C6.63134 22.4054 8.72461 22.75 10.9999 22.75C12.6143 22.75 14.1372 22.5765 15.4399 22.2679L12.2147 19.0427L15.5431 15.7142V15.5823ZM9.99988 18.3623C8.95566 18.3135 8.01678 18.1863 7.15808 18V19.5315C8.02201 19.7006 9.0039 19.8157 9.99988 19.8623V18.3623Z',
};

export const IconDatabaseImportStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-import-stroke-rounded IconDatabaseImportStrokeRounded"
    >
      <ellipse 
        cx="12" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseImportDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-import-duotone-rounded IconDatabaseImportDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <ellipse 
        cx="12" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseImportTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-import-twotone-rounded IconDatabaseImportTwotoneRounded"
    >
      <ellipse 
        cx="12" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseImportSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-import-solid-rounded IconDatabaseImportSolidRounded"
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

export const IconDatabaseImportBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-import-bulk-rounded IconDatabaseImportBulkRounded"
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

export const IconDatabaseImportStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-import-stroke-sharp IconDatabaseImportStrokeSharp"
    >
      <ellipse 
        cx="12" 
        cy="5" 
        rx="8" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></ellipse>
      <path 
        d={d.d2} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseImportSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-import-solid-sharp IconDatabaseImportSolidSharp"
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

export const iconPackOfDatabaseImport: TheIconSelfPack = {
  name: 'DatabaseImport',
  StrokeRounded: IconDatabaseImportStrokeRounded,
  DuotoneRounded: IconDatabaseImportDuotoneRounded,
  TwotoneRounded: IconDatabaseImportTwotoneRounded,
  SolidRounded: IconDatabaseImportSolidRounded,
  BulkRounded: IconDatabaseImportBulkRounded,
  StrokeSharp: IconDatabaseImportStrokeSharp,
  SolidSharp: IconDatabaseImportSolidSharp,
};