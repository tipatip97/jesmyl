import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 15C6.58172 15 3 13.6569 3 12',
  d2: 'M19 5V11.5M3 5V19C3 20.6569 6.58172 22 11 22C11.1679 22 11.3346 21.9981 11.5 21.9942',
  d3: 'M7 8V10',
  d4: 'M7 15V17',
  d5: 'M17 16.6667V18M17 18V19.3333M17 18H18.3333M17 18H15.6667M21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 15.7909 14.7909 14 17 14C19.2091 14 21 15.7909 21 18Z',
  d6: 'M19 4.99619C11.8 -0.203811 5.33333 2.82952 3 4.99619V6C5.66667 7.5 12.6 9.6 19 6V4.99619Z',
  d7: 'M15.1714 21.5585C13.9568 21.8374 12.5285 21.9981 11 21.9981C6.58172 21.9981 3 20.6549 3 18.9981V12.5C4.31438 14.107 8.54646 16.3544 15.7635 14.1948C14.1595 14.7156 13 16.2224 13 18C13 19.5503 13.8819 20.8945 15.1714 21.5585Z',
  d8: 'M19 14.5351V13.0019C17.9181 13.4723 16.8902 13.8504 15.9161 14.1486C16.2608 14.0518 16.6243 14 17 14C17.7286 14 18.4117 14.1948 19 14.5351Z',
  d9: 'M2.71527 3.08401C2.18749 3.55194 1.75 4.19711 1.75 5V9.98763C1.75 10.9324 1.90337 11.4637 2.70806 11.9907C3.03325 12.2037 3.39779 12.4055 3.8008 12.5952C5.76354 13.5188 8.3613 14 10.75 14C11.5557 14 12.3852 13.9453 13.206 13.8373C13.4536 13.8047 13.5774 13.7884 13.6934 13.7421C13.8095 13.6958 13.9491 13.5945 14.2283 13.3918C15.2173 12.6736 16.4342 12.25 17.75 12.25C18.2028 12.25 18.4044 12.2445 18.7919 11.9907C19.5966 11.4637 19.75 10.9324 19.75 9.98763V5C19.75 4.19711 19.3125 3.55194 18.7847 3.08401C18.2558 2.61504 17.5474 2.2384 16.758 1.94235C15.1717 1.34749 13.0473 1 10.75 1C8.45269 1 6.32833 1.34749 4.74202 1.94235C3.95256 2.2384 3.24422 2.61504 2.71527 3.08401ZM4.04209 5.41948C4.30524 5.65279 4.72883 5.9045 5.32313 6.13845C5.35413 6.15065 5.39043 6.16171 5.42851 6.17331C5.53644 6.20619 5.65859 6.24339 5.71414 6.32318C5.75 6.37469 5.75 6.44357 5.75 6.58134V8.5C5.75 9.05228 6.19772 9.5 6.75 9.5C7.30228 9.5 7.75 9.05228 7.75 8.5V7.23948C7.75 7.02246 7.75 6.91395 7.8182 6.8542C7.8864 6.79444 7.99582 6.80895 8.21467 6.83796C8.99969 6.94202 9.8529 7 10.75 7C12.871 7 14.7466 6.67591 16.0557 6.18499C16.714 5.93815 17.1772 5.66834 17.4579 5.41948C17.8146 5.10324 17.8146 4.89676 17.4579 4.58052C17.1772 4.33166 16.714 4.06185 16.0557 3.81501C14.7466 3.32409 12.871 3 10.75 3C8.62903 3 6.7534 3.32409 5.44427 3.81501C4.78602 4.06185 4.32279 4.33166 4.04209 4.58052C3.6854 4.89676 3.6854 5.10324 4.04209 5.41948Z',
  d10: 'M11.8842 15.9679C12.0286 15.9599 12.1009 15.9559 12.133 15.9987C12.1651 16.0415 12.1405 16.111 12.0914 16.25C11.8703 16.8755 11.75 17.5487 11.75 18.25C11.75 19.7466 12.298 21.1153 13.2042 22.1663C13.4589 22.4616 13.5862 22.6093 13.5414 22.722C13.4965 22.8347 13.3158 22.8531 12.9544 22.8899C12.2471 22.962 11.508 22.9998 10.75 22.9998C8.45269 22.9998 6.32833 22.6523 4.74202 22.0575C3.95256 21.7614 3.24422 21.3848 2.71527 20.9158C2.18749 20.4479 1.75 19.8027 1.75 18.9998V14.4765C1.75 14.1584 1.75 13.9993 1.84753 13.9412C1.94506 13.883 2.0892 13.9608 2.37747 14.1164C2.56512 14.2177 2.75604 14.3137 2.9492 14.4046C3.72353 14.769 4.56834 15.0695 5.44849 15.3076C5.59458 15.3471 5.66763 15.3669 5.70882 15.4207C5.75 15.4745 5.75 15.549 5.75 15.698V17.5C5.75 18.0523 6.19772 18.5 6.75 18.5C7.30228 18.5 7.75 18.0523 7.75 17.5V16.2431C7.75 16.0289 7.75 15.9218 7.81749 15.8621C7.88499 15.8024 7.99275 15.8157 8.20825 15.8422C9.0655 15.9477 9.92236 15.9998 10.75 15.9998C11.123 15.9998 11.502 15.9892 11.8842 15.9679Z',
  d11: 'M22.25 18.25C22.25 20.7353 20.2353 22.75 17.75 22.75C15.2647 22.75 13.25 20.7353 13.25 18.25C13.25 15.7647 15.2647 13.75 17.75 13.75C20.2353 13.75 22.25 15.7647 22.25 18.25ZM18.5 16.75C18.5 16.3358 18.1642 16 17.75 16C17.3358 16 17 16.3358 17 16.75V17.5H16.25C15.8358 17.5 15.5 17.8358 15.5 18.25C15.5 18.6642 15.8358 19 16.25 19H17V19.75C17 20.1642 17.3358 20.5 17.75 20.5C18.1642 20.5 18.5 20.1642 18.5 19.75V19H19.25C19.6642 19 20 18.6642 20 18.25C20 17.8358 19.6642 17.5 19.25 17.5H18.5V16.75Z',
  d12: 'M11.0118 14.985C6.58809 14.985 3.00195 13.6436 3.00195 11.9888',
  d13: 'M19.0217 4.99756V11.4894M3.00195 4.99756V18.98C3.00195 20.6348 6.58809 21.9762 11.0118 21.9762C11.1799 21.9762 11.3468 21.9743 11.5124 21.9704',
  d14: 'M11.0118 7.99393C15.4355 7.99393 19.0217 6.65247 19.0217 4.9977C19.0217 3.34292 15.4355 2.00146 11.0118 2.00146C6.58809 2.00146 3.00195 3.34292 3.00195 4.9977C3.00195 6.65247 6.58809 7.99393 11.0118 7.99393Z',
  d15: 'M7.00684 7.99365V10.4905',
  d16: 'M7.00684 14.9849V17.4817',
  d17: 'M17.0139 15.9915V19.9692M15.0296 17.9976H19.0329M20.9979 17.9821C20.9979 20.2006 19.2062 21.9989 16.996 21.9989C14.7858 21.9989 12.9941 20.2006 12.9941 17.9821C12.9941 15.7637 14.7858 13.9653 16.996 13.9653C19.2062 13.9653 20.9979 15.7637 20.9979 17.9821Z',
  d18: 'M17 13.25C14.3766 13.25 12.25 15.3766 12.25 18C12.25 20.6234 14.3766 22.75 17 22.75C19.6234 22.75 21.75 20.6234 21.75 18C21.75 15.3766 19.6234 13.25 17 13.25ZM16.25 16V17.25H15V18.75H16.25V20H17.75V18.75H19V17.25H17.75V16H16.25Z',
  d19: 'M11 1.25C8.76651 1.25 6.70115 1.57577 5.15891 2.13345C4.39138 2.411 3.70271 2.7641 3.18846 3.20376C2.67534 3.64244 2.25 4.24729 2.25 5V10.9361C2.47068 11.4919 3.1214 12.1613 4.45808 12.7726C6.08075 13.5147 8.3927 14 11 14C11.5416 14 12.0704 13.9791 12.5829 13.9392C13.6795 12.7471 15.2525 12 17 12C17.5438 12 18.0708 12.0724 18.5717 12.208C19.2322 11.7676 19.5959 11.3242 19.75 10.9361V5C19.75 4.24729 19.3247 3.64244 18.8115 3.20376C18.2973 2.7641 17.6086 2.411 16.8411 2.13345C15.2988 1.57577 13.2335 1.25 11 1.25ZM4.19531 5C4.19531 4.97606 4.20525 4.84102 4.47929 4.60674C4.75219 4.37343 5.20255 4.12049 5.84252 3.88907C7.11528 3.42883 8.93881 3.125 11.0009 3.125C13.0629 3.125 14.8865 3.42883 16.1592 3.88907C16.7992 4.12049 17.2495 4.37343 17.5225 4.60674C17.7965 4.84102 17.8064 4.97606 17.8064 5C17.8064 5.02394 17.7965 5.15898 17.5225 5.39326C17.2495 5.62657 16.7992 5.87951 16.1592 6.11093C14.8865 6.57117 13.0629 6.875 11.0009 6.875C9.92006 6.875 8.90479 6.79153 8 6.64582V8.5H6V6.16612C5.94661 6.14799 5.89411 6.12959 5.84252 6.11093C5.20255 5.87951 4.75219 5.62657 4.47929 5.39326C4.20525 5.15898 4.19531 5.02394 4.19531 5Z',
  d20: 'M11.3423 15.9974C11.1206 16.6237 11 17.2978 11 18C11 19.8695 11.855 21.5393 13.1954 22.6397C12.4925 22.7119 11.7563 22.75 11 22.75C8.72474 22.75 6.63146 22.4054 5.0798 21.8236C4.30674 21.5337 3.62904 21.1704 3.13112 20.7289C2.63408 20.2883 2.25 19.7057 2.25 19V13.8218C2.6764 14.1138 3.14334 14.3705 3.62628 14.5914C4.33533 14.9157 5.13391 15.1912 6 15.4102V17.5H8V15.7971C8.95572 15.9298 9.96312 16 11 16C11.1145 16 11.2286 15.9991 11.3423 15.9974Z',
} as const;

export const IconDatabaseAddStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-add-stroke-rounded IconDatabaseAddStrokeRounded"
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
      />
      <ellipse 
        cx="11" 
        cy="5" 
        rx="8" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseAddDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-add-duotone-rounded IconDatabaseAddDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      </g>
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
      <ellipse 
        cx="11" 
        cy="5" 
        rx="8" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseAddTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-add-twotone-rounded IconDatabaseAddTwotoneRounded"
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
      />
      <ellipse 
        cx="11" 
        cy="5" 
        rx="8" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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

export const IconDatabaseAddSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-add-solid-rounded IconDatabaseAddSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconDatabaseAddBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-add-bulk-rounded IconDatabaseAddBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseAddStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-add-stroke-sharp IconDatabaseAddStrokeSharp"
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
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseAddSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-add-solid-sharp IconDatabaseAddSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDatabaseAdd: TheIconSelfPack = {
  name: 'DatabaseAdd',
  StrokeRounded: IconDatabaseAddStrokeRounded,
  DuotoneRounded: IconDatabaseAddDuotoneRounded,
  TwotoneRounded: IconDatabaseAddTwotoneRounded,
  SolidRounded: IconDatabaseAddSolidRounded,
  BulkRounded: IconDatabaseAddBulkRounded,
  StrokeSharp: IconDatabaseAddStrokeSharp,
  SolidSharp: IconDatabaseAddSolidSharp,
};