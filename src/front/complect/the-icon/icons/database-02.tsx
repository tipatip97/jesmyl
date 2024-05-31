import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12',
  d2: 'M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5',
  d3: 'M8 8V10',
  d4: 'M8 15V17',
  d5: 'M12 22C16.4183 22 20 20.6569 20 19V13.0039C10.8 17.0039 5.5 14.3359 4 12.502V19C4 20.6569 7.58172 22 12 22Z',
  d6: 'M20 4.99619C12.8 -0.203811 6.33333 2.82952 4 4.99619V6C6.66667 7.5 13.6 9.6 20 6V4.99619Z',
  d7: 'M3.96527 3.08401C3.43749 3.55194 3 4.19711 3 5V9.98763C3 10.9324 3.15337 11.4637 3.95806 11.9907C4.28325 12.2037 4.64779 12.4055 5.0508 12.5952C7.01354 13.5188 9.6113 14 12 14C14.3887 14 16.9865 13.5188 18.9492 12.5952C19.3522 12.4055 19.7167 12.2037 20.0419 11.9907C20.8466 11.4637 21 10.9324 21 9.98763V5C21 4.19711 20.5625 3.55194 20.0347 3.08401C19.5058 2.61504 18.7974 2.2384 18.008 1.94235C16.4217 1.34749 14.2973 1 12 1C9.70269 1 7.57833 1.34749 5.99202 1.94235C5.20256 2.2384 4.49422 2.61504 3.96527 3.08401ZM5.29209 4.58052C4.9354 4.89676 4.9354 5.10324 5.29209 5.41948C5.55524 5.65279 5.97883 5.9045 6.57313 6.13845C6.692 6.18524 6.88899 6.21525 6.96414 6.32318C7 6.37469 7 6.44357 7 6.58134V8.5C7 9.05228 7.44772 9.5 8 9.5C8.55228 9.5 9 9.05228 9 8.5V7.23948C9 7.02246 9 6.91395 9.0682 6.8542C9.1364 6.79444 9.24582 6.80895 9.46467 6.83796C10.2497 6.94202 11.1029 7 12 7C14.121 7 15.9966 6.67591 17.3057 6.18499C17.964 5.93815 18.4272 5.66834 18.7079 5.41948C19.0646 5.10324 19.0646 4.89676 18.7079 4.58052C18.4272 4.33166 17.964 4.06185 17.3057 3.81501C15.9966 3.32409 14.121 3 12 3C9.87903 3 8.0034 3.32409 6.69427 3.81501C6.03602 4.06185 5.57279 4.33166 5.29209 4.58052Z',
  d8: 'M3.09753 13.9412C3.19506 13.883 3.3392 13.9608 3.62747 14.1164C3.81512 14.2177 4.00604 14.3137 4.1992 14.4046C4.97353 14.769 5.81834 15.0695 6.69849 15.3076C6.84458 15.3471 6.91763 15.3669 6.95882 15.4207C7 15.4745 7 15.549 7 15.698V17.5C7 18.0523 7.44772 18.5 8 18.5C8.55228 18.5 9 18.0523 9 17.5V16.2431C9 16.0289 9 15.9218 9.06749 15.8621C9.13499 15.8024 9.24274 15.8157 9.45825 15.8422C10.3155 15.9477 11.1724 15.9998 12 15.9998C14.6113 15.9998 17.5135 15.481 19.8008 14.4046C19.994 14.3137 20.1849 14.2177 20.3725 14.1164C20.6608 13.9608 20.8049 13.883 20.9025 13.9412C21 13.9993 21 14.1584 21 14.4765V18.9998C21 19.8027 20.5625 20.4479 20.0347 20.9158C19.5058 21.3848 18.7974 21.7614 18.008 22.0575C16.4217 22.6523 14.2973 22.9998 12 22.9998C9.70269 22.9998 7.57833 22.6523 5.99202 22.0575C5.20256 21.7614 4.49422 21.3848 3.96527 20.9158C3.43749 20.4479 3 19.8027 3 18.9998V14.4765C3 14.1584 3 13.9993 3.09753 13.9412Z',
  d9: 'M8 8V10.5',
  d10: 'M8 15V17.5',
  d11: 'M6.15891 2.13345C7.70115 1.57577 9.76651 1.25 12 1.25C14.2335 1.25 16.2988 1.57577 17.8411 2.13345C18.6086 2.411 19.2973 2.7641 19.8115 3.20376C20.3247 3.64244 20.75 4.24729 20.75 5V10.9361C20.5293 11.4919 19.8786 12.1613 18.5419 12.7726C16.9193 13.5147 14.6073 14 12 14C9.3927 14 7.08075 13.5147 5.45808 12.7726C4.1214 12.1613 3.47068 11.4919 3.25 10.9361V5C3.25 4.24729 3.67534 3.64244 4.18846 3.20376C4.70271 2.7641 5.39138 2.411 6.15891 2.13345ZM5.47929 4.60674C5.20525 4.84102 5.19531 4.97606 5.19531 5C5.19531 5.02394 5.20525 5.15898 5.47929 5.39326C5.75219 5.62657 6.20255 5.87951 6.84252 6.11093C6.89411 6.12959 6.94661 6.14799 7 6.16612V8.5H9V6.64582C9.90479 6.79153 10.9201 6.875 12.0009 6.875C14.0629 6.875 15.8865 6.57117 17.1592 6.11093C17.7992 5.87951 18.2495 5.62657 18.5225 5.39326C18.7965 5.15898 18.8064 5.02394 18.8064 5C18.8064 4.97606 18.7965 4.84102 18.5225 4.60674C18.2495 4.37343 17.7992 4.12049 17.1592 3.88907C15.8865 3.42883 14.0629 3.125 12.0009 3.125C9.93881 3.125 8.11528 3.42883 6.84252 3.88907C6.20255 4.12049 5.75219 4.37343 5.47929 4.60674Z',
  d12: 'M3.25 13.8218V19C3.25 19.7057 3.63408 20.2883 4.13112 20.7289C4.62904 21.1704 5.30674 21.5337 6.0798 21.8236C7.63146 22.4054 9.72474 22.75 12 22.75C14.2753 22.75 16.3685 22.4054 17.9202 21.8236C18.6933 21.5337 19.371 21.1704 19.8689 20.7289C20.3659 20.2883 20.75 19.7057 20.75 19V13.8218C20.3236 14.1138 19.8567 14.3705 19.3737 14.5914C17.4351 15.478 14.8271 16 12 16C10.9631 16 9.95572 15.9298 9 15.7971V17.5H7V15.4102C6.13391 15.1912 5.33533 14.9157 4.62628 14.5914C4.14334 14.3705 3.6764 14.1138 3.25 13.8218Z',
} as const;

export const IconDatabase02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-02-stroke-rounded IconDatabase02StrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabase02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-02-duotone-rounded IconDatabase02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabase02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-02-twotone-rounded IconDatabase02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabase02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-02-solid-rounded IconDatabase02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabase02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-02-bulk-rounded IconDatabase02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabase02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-02-stroke-sharp IconDatabase02StrokeSharp"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabase02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-02-solid-sharp IconDatabase02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDatabase02: TheIconSelfPack = {
  name: 'Database02',
  StrokeRounded: IconDatabase02StrokeRounded,
  DuotoneRounded: IconDatabase02DuotoneRounded,
  TwotoneRounded: IconDatabase02TwotoneRounded,
  SolidRounded: IconDatabase02SolidRounded,
  BulkRounded: IconDatabase02BulkRounded,
  StrokeSharp: IconDatabase02StrokeSharp,
  SolidSharp: IconDatabase02SolidSharp,
};