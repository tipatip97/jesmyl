import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 10.8418C6.60158 11.0226 7.27434 11.1716 8 11.2817',
  d2: 'M11 15C6.58172 15 3 13.6569 3 12',
  d3: 'M6 17.8418C6.60158 18.0226 7.27434 18.1716 8 18.2817',
  d4: 'M11 22C6.58172 22 3 20.6569 3 19V5M19 5V12',
  d5: 'M19 16.6735L17.8258 15.1869C17.2008 14.3956 16.8883 14 16.5 14C16.1117 14 15.7992 14.3956 15.1742 15.1869L14 16.6735M16.5 14.0872V22',
  d6: 'M11 8C15.4183 8 19 6.65685 19 5V19C19 20.6569 15.4183 22 11 22C6.58172 22 3 20.6569 3 19V5C3 6.65685 6.58172 8 11 8Z',
  d7: 'M2.5 5C2.5 4.19711 2.93749 3.55194 3.46527 3.08401C3.99422 2.61504 4.70256 2.2384 5.49202 1.94235C7.07833 1.34749 9.20269 1 11.5 1C13.7973 1 15.9217 1.34749 17.508 1.94235C18.2974 2.2384 19.0058 2.61504 19.5347 3.08401C20.0625 3.55194 20.5 4.19711 20.5 5V9.98763C20.5 10.2975 20.4835 10.5629 20.4329 10.7982C20.3932 10.9833 20.3733 11.0758 20.2789 11.1167C20.1845 11.1576 20.0844 11.0974 19.8841 10.977C19.44 10.71 18.8915 10.5 18.25 10.5C16.9106 10.5 15.9768 11.4158 15.5508 11.8536C15.1059 12.3109 14.6761 12.8582 14.3884 13.2252C14.2709 13.375 14.1549 13.5252 14.0474 13.6817C13.9925 13.7616 13.965 13.8015 13.9282 13.8238C13.8913 13.8461 13.8466 13.8516 13.7571 13.8624C13.0014 13.9537 12.2407 14 11.5 14C9.1113 14 6.51354 13.5188 4.5508 12.5952C4.14779 12.4055 3.78325 12.2037 3.45806 11.9907C2.65337 11.4637 2.5 10.9324 2.5 9.98763V5ZM6.07313 6.13845C5.47883 5.9045 5.05524 5.65279 4.79209 5.41948C4.4354 5.10324 4.4354 4.89676 4.79209 4.58052C5.07279 4.33166 5.53602 4.06185 6.19427 3.81501C7.5034 3.32409 9.37903 3 11.5 3C13.621 3 15.4966 3.32409 16.8057 3.81501C17.464 4.06185 17.9272 4.33166 18.2079 4.58052C18.5646 4.89676 18.5646 5.10324 18.2079 5.41948C17.9272 5.66834 17.464 5.93815 16.8057 6.18499C15.4966 6.67591 13.621 7 11.5 7C10.6029 7 9.74969 6.94202 8.96467 6.83796C7.98782 6.70847 7.02272 6.51225 6.07313 6.13845ZM6.71587 10.1237C6.31919 10.0045 5.90095 10.2294 5.7817 10.6261C5.66246 11.0228 5.88736 11.441 6.28404 11.5602C6.92365 11.7525 7.63136 11.9087 8.3874 12.0234C8.79692 12.0856 9.1793 11.804 9.24146 11.3945C9.30362 10.9849 9.02203 10.6026 8.61251 10.5404C7.91722 10.4349 7.27942 10.2932 6.71587 10.1237Z',
  d8: 'M13.66 16.2357C13.5966 16.0653 13.565 15.9801 13.5082 15.944C13.4514 15.9079 13.3696 15.9147 13.2061 15.9283C12.63 15.9761 12.0583 15.9998 11.5 15.9998C8.846 15.9998 6.10931 15.5388 3.6992 14.4046C3.50604 14.3137 3.31512 14.2177 3.12747 14.1164C2.8392 13.9608 2.69506 13.883 2.59753 13.9412C2.5 13.9993 2.5 14.1584 2.5 14.4765V18.9998C2.5 19.8027 2.93749 20.4479 3.46527 20.9158C3.99422 21.3848 4.70256 21.7614 5.49202 22.0575C7.07833 22.6523 9.20269 22.9998 11.5 22.9998C12.99 22.9998 14.4072 22.8536 15.652 22.5886C15.8951 22.5369 16.0167 22.511 16.0604 22.4284C16.1041 22.3458 16.0494 22.2117 15.94 21.9434C15.8213 21.6523 15.7559 21.3338 15.7559 21L15.7559 18.4515C15.7559 18.2222 15.7559 18.1076 15.7012 18.0299C15.6464 17.9522 15.52 17.9069 15.2671 17.8165C14.7862 17.6446 14.1504 17.2756 13.7641 16.4792C13.7244 16.3973 13.6898 16.316 13.66 16.2357ZM6.71587 17.1237C6.31919 17.0045 5.90095 17.2294 5.7817 17.6261C5.66246 18.0228 5.88736 18.441 6.28404 18.5602C6.92365 18.7525 7.63136 18.9087 8.3874 19.0234C8.79692 19.0856 9.1793 18.804 9.24146 18.3945C9.30362 17.9849 9.02203 17.6026 8.61251 17.5404C7.91722 17.4349 7.27942 17.2932 6.71587 17.1237Z',
  d9: 'M19.2559 21C19.2559 21.5523 18.8081 22 18.2559 22C17.7036 22 17.2559 21.5523 17.2559 21L17.2559 16.5L16.6616 16.5C16.4713 16.5001 16.2797 16.5014 16.0905 16.4778C15.9641 16.462 15.388 16.3902 15.1137 15.8246C14.8387 15.2577 15.1407 14.7576 15.206 14.6494C15.3124 14.473 15.4419 14.3125 15.5688 14.1507C15.8635 13.7748 16.2454 13.2906 16.6259 12.8996C17.0572 12.4563 17.5963 12 18.25 12C18.9037 12 19.4428 12.4563 19.8741 12.8996C20.2546 13.2906 20.6365 13.7748 20.9312 14.1507C21.0581 14.3125 21.1875 14.473 21.294 14.6494C21.3593 14.7576 21.6613 15.2578 21.3863 15.8246C21.199 16.2107 20.8203 16.4265 20.4061 16.4782C20.2297 16.5003 20.014 16.5001 19.8384 16.5L19.2559 16.5L19.2559 21Z',
  d10: 'M6.71611 10.1257C6.31943 10.0065 5.90119 10.2314 5.78195 10.628C5.6627 11.0247 5.88761 11.443 6.28428 11.5622C6.92389 11.7545 7.6316 11.9106 8.38764 12.0254C8.79716 12.0875 9.17954 11.8059 9.2417 11.3964C9.30387 10.9869 9.02228 10.6045 8.61276 10.5424C7.91746 10.4368 7.27966 10.2951 6.71611 10.1257Z',
  d11: 'M6.71611 17.1257C6.31943 17.0065 5.90119 17.2314 5.78195 17.628C5.6627 18.0247 5.88761 18.443 6.28428 18.5622C6.92389 18.7545 7.6316 18.9106 8.38764 19.0254C8.79716 19.0875 9.17954 18.8059 9.2417 18.3964C9.30387 17.9869 9.02228 17.6045 8.61276 17.5424C7.91746 17.4368 7.27966 17.2951 6.71611 17.1257Z',
  d12: 'M10 11.4768C8.91806 11.4262 7.90321 11.2946 7 11.0986M10 18.4768C8.91806 18.4262 7.90321 18.2946 7 18.0986',
  d13: 'M19 17L16 14L13 17M16 22.0002V14.6884',
  d14: 'M18.0429 13.3359L21.75 17.043L20.3358 18.4573L19.0429 17.1644V22.7503H17.0429V17.1644L15.75 18.4573L14.3358 17.043L18.0429 13.3359Z',
  d15: 'M5.15879 2.13345C6.70103 1.57577 8.76639 1.25 10.9999 1.25C13.2334 1.25 15.2987 1.57577 16.841 2.13345C17.6085 2.411 18.2972 2.7641 18.8114 3.20376C19.3245 3.64244 19.7499 4.24729 19.7499 5V11.4011C19.684 11.5424 19.5659 11.7083 19.3644 11.8969C19.263 11.9918 19.1454 12.0875 19.0114 12.1831L18.0431 11.2148L15.7723 13.4857C14.3967 13.8083 12.7654 14 10.9999 14C8.37859 14 6.05323 13.5774 4.42132 12.9312C3.60277 12.6071 3.00859 12.2463 2.63539 11.8969C2.43388 11.7083 2.31573 11.5424 2.24988 11.4011V5C2.24988 4.24729 2.67522 3.64244 3.18834 3.20376C3.70259 2.7641 4.39126 2.411 5.15879 2.13345ZM4.47829 4.60674C4.20426 4.84102 4.19432 4.97606 4.19432 5C4.19432 5.02394 4.20426 5.15898 4.47829 5.39326C4.7512 5.62657 5.20156 5.87951 5.84153 6.11093C7.11429 6.57117 8.93782 6.875 10.9999 6.875C13.0619 6.875 14.8855 6.57117 16.1582 6.11093C16.7982 5.87951 17.2486 5.62657 17.5215 5.39326C17.7955 5.15898 17.8054 5.02394 17.8054 5C17.8054 4.97606 17.7955 4.84102 17.5215 4.60674C17.2486 4.37343 16.7982 4.12049 16.1582 3.88907C14.8855 3.42883 13.0619 3.125 10.9999 3.125C8.93782 3.125 7.11429 3.42883 5.84153 3.88907C5.20156 4.12049 4.7512 4.37343 4.47829 4.60674ZM7.16003 9.5C8.01873 9.68627 8.95761 9.81347 10.0018 9.8623V11.3623C9.00585 11.3157 8.02397 11.2006 7.16003 11.0315V9.5Z',
  d16: 'M13.3665 15.8915C12.6028 15.9628 11.8104 16 10.9999 16C8.17992 16 5.57916 15.5492 3.64527 14.7834C3.14373 14.5848 2.67348 14.3597 2.24988 14.1072V19C2.24988 19.7057 2.63396 20.2883 3.131 20.7289C3.62892 21.1704 4.30662 21.5337 5.07968 21.8236C6.63134 22.4054 8.72461 22.75 10.9999 22.75C12.6572 22.75 14.2179 22.5672 15.5431 22.243V20.3717L12.2147 17.0433L13.3665 15.8915ZM9.99988 18.3623C8.95566 18.3135 8.01678 18.1863 7.15808 18V19.5315C8.02201 19.7006 9.0039 19.8157 9.99988 19.8623V18.3623Z',
} as const;

export const IconDatabaseExportStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-export-stroke-rounded IconDatabaseExportStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseExportDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-export-duotone-rounded IconDatabaseExportDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseExportTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-export-twotone-rounded IconDatabaseExportTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseExportSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-export-solid-rounded IconDatabaseExportSolidRounded"
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

export const IconDatabaseExportBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-export-bulk-rounded IconDatabaseExportBulkRounded"
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

export const IconDatabaseExportStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-export-stroke-sharp IconDatabaseExportStrokeSharp"
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

export const IconDatabaseExportSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-export-solid-sharp IconDatabaseExportSolidSharp"
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

export const iconPackOfDatabaseExport: TheIconSelfPack = {
  name: 'DatabaseExport',
  StrokeRounded: IconDatabaseExportStrokeRounded,
  DuotoneRounded: IconDatabaseExportDuotoneRounded,
  TwotoneRounded: IconDatabaseExportTwotoneRounded,
  SolidRounded: IconDatabaseExportSolidRounded,
  BulkRounded: IconDatabaseExportBulkRounded,
  StrokeSharp: IconDatabaseExportStrokeSharp,
  SolidSharp: IconDatabaseExportSolidSharp,
};