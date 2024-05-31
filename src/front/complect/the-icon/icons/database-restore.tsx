import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 10.8418C6.60158 11.0226 7.27434 11.1716 8 11.2817',
  d2: 'M6 17.8418C6.60158 18.0226 7.27434 18.1716 8 18.2817',
  d3: 'M19.842 13L20.4127 15.3449L19.4647 14.7618C18.7894 14.2569 17.9501 13.9576 17.0404 13.9576C14.809 13.9576 13 15.7579 13 17.9788C13 20.1996 14.809 22 17.0404 22C18.9951 22 20.6256 20.6185 21 18.783',
  d4: 'M19 5V10M3 5V19C3 20.6569 6.58172 22 11 22C11.0849 22 11.1694 21.9995 11.2537 21.9985',
  d5: 'M3 12C3 13.616 6.40729 14.9336 10.6748 14.9976',
  d6: 'M19 5C19 6.65685 15.4183 8 11 8C6.58172 8 3 6.65685 3 5V19C3 20.6569 6.58172 22 11 22C12.5295 22 13.9588 21.839 15.1739 21.5598C13.8831 20.8963 13 19.5513 13 18C13 15.7909 14.7909 14 17 14C17.7286 14 18.4117 14.1948 19 14.5351V5Z',
  d7: 'M2 5C2 4.19711 2.43749 3.55194 2.96527 3.08401C3.49422 2.61504 4.20256 2.2384 4.99202 1.94235C6.57833 1.34749 8.70269 1 11 1C13.2973 1 15.4217 1.34749 17.008 1.94235C17.7974 2.2384 18.5058 2.61504 19.0347 3.08401C19.5625 3.55194 20 4.19711 20 5V9.98763C20 10.0333 19.9996 10.0781 19.9989 10.1219C19.9959 10.2876 19.9945 10.3704 19.9431 10.4263C19.8917 10.4822 19.7934 10.4923 19.5967 10.5124C18.9826 10.5753 18.401 10.8669 17.985 11.3266C17.9032 11.4169 17.8623 11.4621 17.8187 11.4792C17.7751 11.4964 17.719 11.4916 17.6067 11.4819C17.4199 11.4659 17.231 11.4577 17.0404 11.4577C15.0435 11.4577 13.2497 12.3522 12.0481 13.7655C11.9557 13.8742 11.9095 13.9285 11.8524 13.956C11.7953 13.9836 11.7298 13.9858 11.599 13.9901C11.3982 13.9967 11.1984 14 11 14C8.6113 14 6.01354 13.5188 4.0508 12.5952C3.64779 12.4055 3.28325 12.2037 2.95806 11.9907C2.15337 11.4637 2 10.9324 2 9.98763V5ZM5.57313 6.13845C4.97883 5.9045 4.55524 5.65279 4.29209 5.41948C3.9354 5.10324 3.9354 4.89676 4.29209 4.58052C4.57279 4.33166 5.03602 4.06185 5.69427 3.81501C7.0034 3.32409 8.87903 3 11 3C13.121 3 14.9966 3.32409 16.3057 3.81501C16.964 4.06185 17.4272 4.33166 17.7079 4.58052C18.0646 4.89676 18.0646 5.10324 17.7079 5.41948C17.4272 5.66834 16.964 5.93815 16.3057 6.18499C14.9966 6.67591 13.121 7 11 7C10.1029 7 9.24969 6.94202 8.46467 6.83796C7.48782 6.70847 6.52272 6.51225 5.57313 6.13845ZM6.21587 10.1237C5.81919 10.0045 5.40095 10.2294 5.2817 10.6261C5.16246 11.0228 5.38736 11.441 5.78404 11.5602C6.42365 11.7525 7.13136 11.9087 7.8874 12.0234C8.29692 12.0856 8.6793 11.804 8.74146 11.3945C8.80362 10.9849 8.52203 10.6026 8.11251 10.5404C7.41722 10.4349 6.77942 10.2932 6.21587 10.1237Z',
  d8: 'M10.6635 16.5223C10.7204 16.2736 10.7488 16.1493 10.6912 16.0746C10.6336 15.9999 10.5104 15.9959 10.2641 15.9879C7.84409 15.9091 5.38708 15.4342 3.1992 14.4046C3.00604 14.3137 2.81512 14.2177 2.62747 14.1164C2.3392 13.9608 2.19506 13.883 2.09753 13.9412C2 13.9993 2 14.1584 2 14.4765V18.9998C2 19.8027 2.43749 20.4479 2.96527 20.9158C3.49422 21.3848 4.20256 21.7614 4.99202 22.0575C6.57833 22.6523 8.70269 22.9998 11 22.9998C11.277 22.9998 11.5514 22.9948 11.8227 22.9848C12.219 22.9703 12.4171 22.9631 12.4672 22.8473C12.5174 22.7315 12.3782 22.5719 12.1 22.2526C11.1041 21.1097 10.5 19.6168 10.5 17.9789C10.5 17.4778 10.5565 16.9903 10.6635 16.5223ZM6.21587 17.1237C5.81919 17.0045 5.40095 17.2294 5.2817 17.6261C5.16246 18.0228 5.38736 18.441 5.78404 18.5602C6.42365 18.7525 7.13136 18.9087 7.8874 19.0234C8.29692 19.0856 8.6793 18.804 8.74146 18.3945C8.80362 17.9849 8.52203 17.6026 8.11251 17.5404C7.41722 17.4349 6.77942 17.2932 6.21587 17.1237Z',
  d9: 'M19.6056 12.0286C19.0689 12.1592 18.7398 12.7001 18.8704 13.2367L18.8873 13.306C18.3149 13.0813 17.6917 12.9578 17.0404 12.9578C14.2612 12.9578 12 15.2014 12 17.979C12 20.7566 14.2612 23.0002 17.0404 23.0002C19.4765 23.0002 21.5117 21.2782 21.9798 18.9831C22.0902 18.442 21.741 17.9138 21.1998 17.8034C20.6587 17.6931 20.1305 18.0423 20.0202 18.5834C19.7396 19.9593 18.5137 21.0002 17.0404 21.0002C15.3567 21.0002 14 19.6431 14 17.979C14 16.3149 15.3567 14.9578 17.0404 14.9578C17.7271 14.9578 18.3577 15.183 18.8659 15.563C18.8901 15.5811 18.9151 15.598 18.9408 15.6139L19.8888 16.1969C20.2341 16.4093 20.6734 16.3922 21.0011 16.1537C21.3288 15.9152 21.4802 15.5025 21.3844 15.1087L20.8137 12.7638C20.6831 12.2271 20.1422 11.898 19.6056 12.0286Z',
  d10: 'M6.21611 10.1257C5.81943 10.0065 5.40119 10.2314 5.28195 10.628C5.1627 11.0247 5.38761 11.443 5.78428 11.5622C6.42389 11.7545 7.1316 11.9106 7.88764 12.0254C8.29716 12.0875 8.67954 11.8059 8.7417 11.3964C8.80387 10.9869 8.52228 10.6045 8.11276 10.5424C7.41746 10.4368 6.77966 10.2951 6.21611 10.1257Z',
  d11: 'M6.21611 17.1257C5.81943 17.0065 5.40119 17.2314 5.28195 17.628C5.1627 18.0247 5.38761 18.443 5.78428 18.5622C6.42389 18.7545 7.1316 18.9106 7.88764 19.0254C8.29716 19.0875 8.67954 18.8059 8.7417 18.3964C8.80387 17.9869 8.52228 17.6045 8.11276 17.5424C7.41746 17.4368 6.77966 17.2951 6.21611 17.1257Z',
  d12: 'M11 15C6.58172 15 3 13.6569 3 12',
  d13: 'M10 11.4768C8.91806 11.4262 7.90321 11.2946 7 11.0986M10 18.4768C8.91806 18.4262 7.90321 18.2946 7 18.0986',
  d14: 'M11 22C6.58172 22 3 20.6569 3 19V5M19 5V11',
  d15: 'M20.4127 13V15.3449L19.4647 14.7618C18.7894 14.2569 17.9501 13.9576 17.0404 13.9576C14.809 13.9576 13 15.7579 13 17.9788C13 20.1996 14.809 22 17.0404 22C18.9951 22 20.6256 20.6185 21 18.783',
  d16: 'M18.077 15.142C18.7266 15.142 19.3231 15.355 19.8039 15.7144C19.8268 15.7315 19.8504 15.7476 19.8747 15.7626L20.7716 16.3142C21.0635 16.4937 21.4296 16.5013 21.7287 16.3341C22.0278 16.1669 22.2132 15.8511 22.2132 15.5084V13.2901H20.3212V13.8084C19.6519 13.4521 18.8873 13.25 18.077 13.25C15.4479 13.25 13.3088 15.3724 13.3088 18C13.3088 20.6276 15.4479 22.75 18.077 22.75C20.3815 22.75 22.3068 21.121 22.7496 18.9499L20.8958 18.5718C20.6304 19.8733 19.4708 20.858 18.077 20.858C16.4843 20.858 15.2008 19.5742 15.2008 18C15.2008 16.4258 16.4843 15.142 18.077 15.142Z',
  d17: 'M18.4969 11.7639C18.358 11.7547 18.218 11.75 18.077 11.75C16.2725 11.75 14.6409 12.5123 13.4951 13.7349C12.4255 13.9045 11.2463 14 10.0002 14C7.37896 14 5.05359 13.5774 3.42168 12.9312C2.60314 12.6071 2.00896 12.2463 1.63575 11.8969C1.43425 11.7083 1.31609 11.5424 1.25024 11.4011V5C1.25024 4.24729 1.67558 3.64244 2.1887 3.20375C2.70296 2.7641 3.39162 2.411 4.15915 2.13345C5.7014 1.57577 7.76675 1.25 10.0002 1.25C12.2337 1.25 14.2991 1.57577 15.8413 2.13345C16.6089 2.411 17.2975 2.7641 17.8118 3.20375C18.3249 3.64244 18.7502 4.24729 18.7502 5V11.4011C18.7003 11.5082 18.6204 11.6294 18.4969 11.7639ZM3.47866 4.60674C3.20463 4.84102 3.19469 4.97606 3.19469 5C3.19469 5.02394 3.20463 5.15898 3.47866 5.39326C3.75156 5.62657 4.20193 5.87951 4.84189 6.11093C6.11466 6.57117 7.93819 6.875 10.0002 6.875C12.0623 6.875 13.8858 6.57117 15.1586 6.11093C15.7986 5.87951 16.2489 5.62657 16.5218 5.39326C16.7959 5.15898 16.8058 5.02394 16.8058 5C16.8058 4.97606 16.7959 4.84102 16.5218 4.60674C16.2489 4.37343 15.7986 4.12049 15.1586 3.88907C13.8858 3.42883 12.0623 3.125 10.0002 3.125C7.93819 3.125 6.11466 3.42883 4.84189 3.88907C4.20193 4.12049 3.75156 4.37343 3.47866 4.60674ZM6.1604 9.5C7.0191 9.68627 7.95798 9.81347 9.0022 9.8623V11.3623C8.00622 11.3157 7.02433 11.2006 6.1604 11.0315V9.5Z',
  d18: 'M13.6575 22.4321C12.5427 22.6373 11.3012 22.75 10.0002 22.75C7.72498 22.75 5.6317 22.4054 4.08005 21.8236C3.30699 21.5337 2.62928 21.1704 2.13137 20.7289C1.63433 20.2883 1.25024 19.7057 1.25024 19V14.1072C1.67385 14.3597 2.14409 14.5848 2.64563 14.7834C4.57953 15.5492 7.18029 16 10.0002 16C10.7406 16 11.4658 15.9689 12.1678 15.9093C11.9354 16.5624 11.8088 17.266 11.8088 18C11.8088 19.7359 12.5168 21.3018 13.6575 22.4321ZM9.00024 18.3623C7.95602 18.3135 7.01715 18.1863 6.15845 18V19.5315C7.02238 19.7006 8.00427 19.8157 9.00024 19.8623V18.3623Z',
} as const;

export const IconDatabaseRestoreStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-restore-stroke-rounded IconDatabaseRestoreStrokeRounded"
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

export const IconDatabaseRestoreDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-restore-duotone-rounded IconDatabaseRestoreDuotoneRounded"
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

export const IconDatabaseRestoreTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-restore-twotone-rounded IconDatabaseRestoreTwotoneRounded"
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

export const IconDatabaseRestoreSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-restore-solid-rounded IconDatabaseRestoreSolidRounded"
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

export const IconDatabaseRestoreBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-restore-bulk-rounded IconDatabaseRestoreBulkRounded"
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

export const IconDatabaseRestoreStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-restore-stroke-sharp IconDatabaseRestoreStrokeSharp"
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
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseRestoreSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-restore-solid-sharp IconDatabaseRestoreSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDatabaseRestore: TheIconSelfPack = {
  name: 'DatabaseRestore',
  StrokeRounded: IconDatabaseRestoreStrokeRounded,
  DuotoneRounded: IconDatabaseRestoreDuotoneRounded,
  TwotoneRounded: IconDatabaseRestoreTwotoneRounded,
  SolidRounded: IconDatabaseRestoreSolidRounded,
  BulkRounded: IconDatabaseRestoreBulkRounded,
  StrokeSharp: IconDatabaseRestoreStrokeSharp,
  SolidSharp: IconDatabaseRestoreSolidSharp,
};