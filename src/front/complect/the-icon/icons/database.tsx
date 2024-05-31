import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 10.8418C7.60158 11.0226 8.27434 11.1716 9 11.2817',
  d2: 'M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12',
  d3: 'M7 17.8418C7.60158 18.0226 8.27434 18.1716 9 18.2817',
  d4: 'M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5',
  d5: 'M12 8C16.4183 8 20 6.65685 20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5C4 6.65685 7.58172 8 12 8Z',
  d6: 'M3 5C3 4.19711 3.43749 3.55194 3.96527 3.08401C4.49422 2.61504 5.20256 2.2384 5.99202 1.94235C7.57833 1.34749 9.70269 1 12 1C14.2973 1 16.4217 1.34749 18.008 1.94235C18.7974 2.2384 19.5058 2.61504 20.0347 3.08401C20.5625 3.55194 21 4.19711 21 5V9.98763C21 10.9324 20.8466 11.4637 20.0419 11.9907C19.7167 12.2037 19.3522 12.4055 18.9492 12.5952C16.9865 13.5188 14.3887 14 12 14C9.6113 14 7.01354 13.5188 5.0508 12.5952C4.64779 12.4055 4.28325 12.2037 3.95806 11.9907C3.15337 11.4637 3 10.9324 3 9.98763V5ZM6.57313 6.13845C5.97883 5.9045 5.55524 5.65279 5.29209 5.41948C4.9354 5.10324 4.9354 4.89676 5.29209 4.58052C5.57279 4.33166 6.03602 4.06185 6.69427 3.81501C8.0034 3.32409 9.87903 3 12 3C14.121 3 15.9966 3.32409 17.3057 3.81501C17.964 4.06185 18.4272 4.33166 18.7079 4.58052C19.0646 4.89676 19.0646 5.10324 18.7079 5.41948C18.4272 5.66834 17.964 5.93815 17.3057 6.18499C15.9966 6.67591 14.121 7 12 7C11.1029 7 10.2497 6.94202 9.46467 6.83796C8.48782 6.70847 7.52272 6.51225 6.57313 6.13845ZM7.21611 10.1257C6.81943 10.0065 6.40119 10.2314 6.28195 10.628C6.1627 11.0247 6.38761 11.443 6.78428 11.5622C7.42389 11.7545 8.1316 11.9106 8.88764 12.0254C9.29716 12.0875 9.67954 11.8059 9.7417 11.3964C9.80387 10.9869 9.52228 10.6045 9.11276 10.5424C8.41746 10.4368 7.77966 10.2951 7.21611 10.1257Z',
  d7: 'M3.62747 14.1164C3.3392 13.9608 3.19506 13.883 3.09753 13.9412C3 13.9993 3 14.1584 3 14.4765V18.9998C3 19.8027 3.43749 20.4479 3.96527 20.9158C4.49422 21.3848 5.20256 21.7614 5.99202 22.0575C7.57833 22.6523 9.70269 22.9998 12 22.9998C14.2973 22.9998 16.4217 22.6523 18.008 22.0575C18.7974 21.7614 19.5058 21.3848 20.0347 20.9158C20.5625 20.4479 21 19.8027 21 18.9998V14.4765C21 14.1584 21 13.9993 20.9025 13.9412C20.8049 13.883 20.6608 13.9608 20.3725 14.1164C20.1849 14.2177 19.994 14.3137 19.8008 14.4046C17.5135 15.481 14.6113 15.9998 12 15.9998C9.346 15.9998 6.60931 15.5388 4.1992 14.4046C4.00604 14.3137 3.81512 14.2177 3.62747 14.1164ZM7.21611 17.1257C6.81943 17.0065 6.40119 17.2314 6.28195 17.628C6.1627 18.0247 6.38761 18.443 6.78428 18.5622C7.42389 18.7545 8.1316 18.9106 8.88764 19.0254C9.29716 19.0875 9.67954 18.8059 9.7417 18.3964C9.80387 17.9869 9.52228 17.6045 9.11276 17.5424C8.41746 17.4368 7.77966 17.2951 7.21611 17.1257Z',
  d8: 'M3.96527 3.08401C3.43749 3.55194 3 4.19711 3 5V9.98763C3 10.9324 3.15337 11.4637 3.95806 11.9907C4.28325 12.2037 4.64779 12.4055 5.0508 12.5952C7.01354 13.5188 9.6113 14 12 14C14.3887 14 16.9865 13.5188 18.9492 12.5952C19.3522 12.4055 19.7167 12.2037 20.0419 11.9907C20.8466 11.4637 21 10.9324 21 9.98763V5C21 4.19711 20.5625 3.55194 20.0347 3.08401C19.5058 2.61504 18.7974 2.2384 18.008 1.94235C16.4217 1.34749 14.2973 1 12 1C9.70269 1 7.57833 1.34749 5.99202 1.94235C5.20256 2.2384 4.49422 2.61504 3.96527 3.08401ZM5.29209 4.58052C4.9354 4.89676 4.9354 5.10324 5.29209 5.41948C5.55524 5.65279 5.97883 5.9045 6.57313 6.13845C7.52272 6.51225 8.48782 6.70847 9.46467 6.83796C10.2497 6.94202 11.1029 7 12 7C14.121 7 15.9966 6.67591 17.3057 6.18499C17.964 5.93815 18.4272 5.66834 18.7079 5.41948C19.0646 5.10324 19.0646 4.89676 18.7079 4.58052C18.4272 4.33166 17.964 4.06185 17.3057 3.81501C15.9966 3.32409 14.121 3 12 3C9.87903 3 8.0034 3.32409 6.69427 3.81501C6.03602 4.06185 5.57279 4.33166 5.29209 4.58052Z',
  d9: 'M6.28195 10.628C6.40119 10.2314 6.81943 10.0065 7.21611 10.1257C7.77966 10.2951 8.41746 10.4368 9.11276 10.5424C9.52228 10.6045 9.80387 10.9869 9.7417 11.3964C9.67954 11.8059 9.29716 12.0875 8.88764 12.0254C8.1316 11.9106 7.42389 11.7545 6.78428 11.5622C6.38761 11.443 6.1627 11.0247 6.28195 10.628Z',
  d10: 'M3.09753 13.9412C3.19506 13.883 3.3392 13.9608 3.62747 14.1164C3.81512 14.2177 4.00604 14.3137 4.1992 14.4046C6.60931 15.5388 9.346 15.9998 12 15.9998C14.6113 15.9998 17.5135 15.481 19.8008 14.4046C19.994 14.3137 20.1849 14.2177 20.3725 14.1164C20.6608 13.9608 20.8049 13.883 20.9025 13.9412C21 13.9993 21 14.1584 21 14.4765V18.9998C21 19.8027 20.5625 20.4479 20.0347 20.9158C19.5058 21.3848 18.7974 21.7614 18.008 22.0575C16.4217 22.6523 14.2973 22.9998 12 22.9998C9.70269 22.9998 7.57833 22.6523 5.99202 22.0575C5.20256 21.7614 4.49422 21.3848 3.96527 20.9158C3.43749 20.4479 3 19.8027 3 18.9998V14.4765C3 14.1584 3 13.9993 3.09753 13.9412Z',
  d11: 'M6.28195 17.628C6.40119 17.2314 6.81943 17.0065 7.21611 17.1257C7.77966 17.2951 8.41746 17.4368 9.11276 17.5424C9.52228 17.6045 9.80387 17.9869 9.7417 18.3964C9.67954 18.8059 9.29716 19.0875 8.88764 19.0254C8.1316 18.9106 7.42389 18.7545 6.78428 18.5622C6.38761 18.443 6.1627 18.0247 6.28195 17.628Z',
  d12: 'M11 11.6887C9.91806 11.6381 8.90321 11.5065 8 11.3105',
  d13: 'M11 18.6887C9.91806 18.6381 8.90321 18.5065 8 18.3105',
  d14: 'M12 1.25C9.76651 1.25 7.70115 1.57577 6.15891 2.13345C5.39138 2.411 4.70271 2.7641 4.18846 3.20376C3.67534 3.64244 3.25 4.24729 3.25 5V11.4011C3.31585 11.5424 3.434 11.7083 3.63551 11.8969C4.00872 12.2463 4.6029 12.6071 5.42144 12.9312C7.05335 13.5774 9.37871 14 12 14C14.6213 14 16.9466 13.5774 18.5786 12.9312C19.3971 12.6071 19.9913 12.2463 20.3645 11.8969C20.566 11.7083 20.6842 11.5424 20.75 11.4011V5C20.75 4.24729 20.3247 3.64244 19.8115 3.20376C19.2973 2.7641 18.6086 2.411 17.8411 2.13345C16.2988 1.57577 14.2335 1.25 12 1.25ZM5.19444 5C5.19444 4.97606 5.20438 4.84102 5.47842 4.60674C5.75132 4.37343 6.20168 4.12049 6.84165 3.88907C8.11441 3.42883 9.93794 3.125 12 3.125C14.0621 3.125 15.8856 3.42883 17.1583 3.88907C17.7983 4.12049 18.2487 4.37343 18.5216 4.60674C18.7956 4.84102 18.8056 4.97606 18.8056 5C18.8056 5.02394 18.7956 5.15898 18.5216 5.39326C18.2487 5.62657 17.7983 5.87951 17.1583 6.11093C15.8856 6.57117 14.0621 6.875 12 6.875C9.93794 6.875 8.11441 6.57117 6.84165 6.11093C6.20168 5.87951 5.75132 5.62657 5.47842 5.39326C5.20438 5.15898 5.19444 5.02394 5.19444 5ZM11.002 9.8623C9.95773 9.81347 9.01886 9.68627 8.16016 9.5V11.0315C9.02409 11.2006 10.006 11.3157 11.002 11.3623V9.8623Z',
  d15: 'M19.3546 14.7834C19.8562 14.5848 20.3264 14.3597 20.75 14.1072V19C20.75 19.7057 20.3659 20.2883 19.8689 20.7289C19.371 21.1704 18.6933 21.5337 17.9202 21.8236C16.3685 22.4054 14.2753 22.75 12 22.75C9.72474 22.75 7.63146 22.4054 6.0798 21.8236C5.30674 21.5337 4.62904 21.1704 4.13112 20.7289C3.63408 20.2883 3.25 19.7057 3.25 19V14.1072C3.67361 14.3597 4.14385 14.5848 4.64539 14.7834C6.57929 15.5492 9.18005 16 12 16C14.82 16 17.4207 15.5492 19.3546 14.7834ZM8.1582 18C9.0169 18.1863 9.95578 18.3135 11 18.3623V19.8623C10.004 19.8157 9.02214 19.7006 8.1582 19.5315V18Z',
} as const;

export const IconDatabaseStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-stroke-rounded IconDatabaseStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-duotone-rounded IconDatabaseDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-twotone-rounded IconDatabaseTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-solid-rounded IconDatabaseSolidRounded"
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

export const IconDatabaseBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-bulk-rounded IconDatabaseBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-stroke-sharp IconDatabaseStrokeSharp"
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
        d={d.d13} 
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
    </TheIconWrapper>
  );
};

export const IconDatabaseSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-solid-sharp IconDatabaseSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfDatabase: TheIconSelfPack = {
  name: 'Database',
  StrokeRounded: IconDatabaseStrokeRounded,
  DuotoneRounded: IconDatabaseDuotoneRounded,
  TwotoneRounded: IconDatabaseTwotoneRounded,
  SolidRounded: IconDatabaseSolidRounded,
  BulkRounded: IconDatabaseBulkRounded,
  StrokeSharp: IconDatabaseStrokeSharp,
  SolidSharp: IconDatabaseSolidSharp,
};