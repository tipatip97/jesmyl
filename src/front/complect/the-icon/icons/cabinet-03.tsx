import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.5 18V21M18.5 18V21',
  d2: 'M21 3H3V13C3 15.357 3 16.5355 3.82376 17.2678C4.64752 18 5.97335 18 8.625 18H15.375C18.0267 18 19.3525 18 20.1762 17.2678C21 16.5355 21 15.357 21 13V3Z',
  d3: 'M2 3H22',
  d4: 'M3 10.5L21 10.5',
  d5: 'M10 13.5L10.1554 13.5777C10.5758 13.7879 10.786 13.893 11.0126 13.9465C11.2393 14 11.4743 14 11.9443 14H12.0557C12.5257 14 12.7607 14 12.9874 13.9465C13.214 13.893 13.4242 13.7879 13.8446 13.5777L14 13.5',
  d6: 'M10 6.5L10.1554 6.57771C10.5758 6.7879 10.786 6.893 11.0126 6.9465C11.2393 7 11.4743 7 11.9443 7H12.0557C12.5257 7 12.7607 7 12.9874 6.9465C13.214 6.893 13.4242 6.7879 13.8446 6.57771L14 6.5',
  d7: 'M8.625 18H15.375H15.375C18.0267 18 19.3525 18 20.1762 17.2678C21 16.5355 21 15.357 21 13V13V10.5H3V13C3 15.357 3 16.5355 3.82376 17.2678C4.64752 18 5.97335 18 8.62499 18H8.625Z',
  d8: 'M5.5 17C6.05228 17 6.5 17.4477 6.5 18V21C6.5 21.5523 6.05228 22 5.5 22C4.94772 22 4.5 21.5523 4.5 21V18C4.5 17.4477 4.94772 17 5.5 17ZM18.5 17C19.0523 17 19.5 17.4477 19.5 18V21C19.5 21.5523 19.0523 22 18.5 22C17.9477 22 17.5 21.5523 17.5 21V18C17.5 17.4477 17.9477 17 18.5 17Z',
  d9: 'M1 3C1 2.44772 1.44772 2 2 2H22C22.5523 2 23 2.44772 23 3C23 3.55228 22.5523 4 22 4H2C1.44772 4 1 3.55228 1 3Z',
  d10: 'M21.15 11.25C21.4328 11.25 21.5743 11.25 21.6621 11.3379C21.75 11.4257 21.75 11.5672 21.75 11.85V13.0592C21.75 14.1873 21.7501 15.1184 21.6386 15.8553C21.5204 16.6367 21.2635 17.3048 20.6745 17.8283C20.0982 18.3406 19.3843 18.5535 18.5501 18.6532C17.7396 18.75 16.7083 18.75 15.4242 18.75H8.57577C7.29174 18.75 6.26039 18.75 5.44993 18.6532C4.61574 18.5535 3.9018 18.3406 3.32549 17.8283C2.73651 17.3048 2.47959 16.6367 2.36141 15.8553C2.24994 15.1184 2.24997 14.1873 2.25 13.0593V13.0592V11.85C2.25 11.5672 2.25 11.4257 2.33787 11.3379C2.42574 11.25 2.56716 11.25 2.85 11.25L21.15 11.25ZM3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 9.15C2.25 9.43284 2.25 9.57426 2.33787 9.66213C2.42574 9.75 2.56716 9.75 2.85 9.75L21.15 9.75C21.4328 9.75 21.5743 9.75 21.6621 9.66213C21.75 9.57426 21.75 9.43284 21.75 9.15L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM9.32934 14.1648C9.51459 13.7943 9.96509 13.6441 10.3356 13.8293L10.491 13.9071C10.9415 14.1323 11.0629 14.1879 11.1851 14.2167C11.3073 14.2456 11.4407 14.2502 11.9444 14.2502H12.0559C12.5596 14.2502 12.693 14.2456 12.8152 14.2167C12.9374 14.1879 13.0588 14.1323 13.5093 13.9071L13.6648 13.8293C14.0352 13.6441 14.4857 13.7943 14.671 14.1648C14.8562 14.5352 14.7061 14.9857 14.3356 15.171L14.1802 15.2487L14.1187 15.2795C13.758 15.46 13.4733 15.6026 13.1598 15.6766C12.8464 15.7506 12.528 15.7504 12.1246 15.7502L12.0559 15.7502H11.9444L11.8757 15.7502C11.4724 15.7504 11.1539 15.7506 10.8405 15.6766C10.527 15.6026 10.2423 15.46 9.88164 15.2795L9.82017 15.2487L9.66475 15.171C9.29427 14.9857 9.1441 14.5352 9.32934 14.1648ZM10.3356 5.82934C9.96509 5.6441 9.51459 5.79427 9.32934 6.16475C9.1441 6.53524 9.29427 6.98574 9.66475 7.17098L9.82017 7.24869L9.88164 7.27946C10.2423 7.46003 10.527 7.6026 10.8405 7.6766C11.1539 7.7506 11.4724 7.75042 11.8757 7.75019H11.8757L11.9444 7.75016H12.0559L12.1246 7.75019H12.1247C12.528 7.75042 12.8464 7.7506 13.1598 7.6766C13.4733 7.6026 13.758 7.46003 14.1187 7.27946L14.1802 7.24869L14.3356 7.17098C14.7061 6.98574 14.8562 6.53524 14.671 6.16475C14.4857 5.79427 14.0352 5.6441 13.6648 5.82934L13.5093 5.90705C13.0588 6.13232 12.9374 6.18787 12.8152 6.21673C12.693 6.24558 12.5596 6.25016 12.0559 6.25016H11.9444C11.4407 6.25016 11.3073 6.24558 11.1851 6.21673C11.0629 6.18787 10.9415 6.13232 10.491 5.90705L10.3356 5.82934Z',
  d11: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 9.15C2.25 9.43284 2.25 9.57426 2.33787 9.66213C2.42574 9.75 2.56716 9.75 2.85 9.75H21.15C21.4328 9.75 21.5743 9.75 21.6621 9.66213C21.75 9.57426 21.75 9.43284 21.75 9.15V3C21.75 2.58579 21.4142 2.25 21 2.25H3Z',
  d12: 'M21.15 11.25C21.4328 11.25 21.5743 11.25 21.6621 11.3379C21.75 11.4257 21.75 11.5672 21.75 11.85V13.0592C21.75 14.1873 21.7501 15.1184 21.6386 15.8553C21.5204 16.6367 21.2635 17.3048 20.6745 17.8283C20.0982 18.3406 19.3843 18.5535 18.5501 18.6532C17.7396 18.75 16.7083 18.75 15.4242 18.75H8.57577C7.29174 18.75 6.26039 18.75 5.44993 18.6532C4.61574 18.5535 3.9018 18.3406 3.32549 17.8283C2.73651 17.3048 2.47959 16.6367 2.36141 15.8553C2.24994 15.1184 2.24997 14.1873 2.25 13.0592L2.25 11.85C2.25 11.5672 2.25 11.4257 2.33787 11.3379C2.42574 11.25 2.56716 11.25 2.85 11.25H21.15Z',
  d13: 'M10.3356 13.8291C9.96509 13.6439 9.51459 13.7941 9.32934 14.1645C9.1441 14.535 9.29427 14.9855 9.66475 15.1708L9.82017 15.2485L9.88164 15.2792C10.2423 15.4598 10.527 15.6024 10.8405 15.6764C11.1539 15.7504 11.4724 15.7502 11.8757 15.75L11.9444 15.7499H12.0559L12.1246 15.75C12.528 15.7502 12.8464 15.7504 13.1598 15.6764C13.4733 15.6024 13.758 15.4598 14.1187 15.2792L14.1802 15.2485L14.3356 15.1708C14.7061 14.9855 14.8562 14.535 14.671 14.1645C14.4857 13.7941 14.0352 13.6439 13.6648 13.8291L13.5093 13.9068C13.0588 14.1321 12.9374 14.1877 12.8152 14.2165C12.693 14.2454 12.5596 14.2499 12.0559 14.2499H11.9444C11.4407 14.2499 11.3073 14.2454 11.1851 14.2165C11.0629 14.1877 10.9415 14.1321 10.491 13.9068L10.3356 13.8291ZM10.3356 5.82913C9.96509 5.64389 9.51459 5.79406 9.32934 6.16454C9.1441 6.53502 9.29427 6.98553 9.66475 7.17077L9.82017 7.24848L9.88164 7.27924C10.2423 7.45982 10.527 7.60238 10.8405 7.67638C11.1539 7.75038 11.4724 7.7502 11.8757 7.74998L11.9444 7.74995H12.0559L12.1246 7.74998C12.528 7.7502 12.8464 7.75038 13.1598 7.67638C13.4733 7.60238 13.758 7.45982 14.1187 7.27924L14.1802 7.24848L14.3356 7.17077C14.7061 6.98553 14.8562 6.53502 14.671 6.16454C14.4857 5.79406 14.0352 5.64389 13.6648 5.82913L13.5093 5.90684C13.0588 6.1321 12.9374 6.18766 12.8152 6.21651C12.693 6.24536 12.5596 6.24995 12.0559 6.24995H11.9444C11.4407 6.24995 11.3073 6.24536 11.1851 6.21651C11.0629 6.18766 10.9415 6.1321 10.491 5.90684L10.3356 5.82913Z',
  d14: 'M4.5 18.4651C4.7963 18.5544 5.11333 18.6131 5.44993 18.6533C5.76578 18.691 6.11517 18.7141 6.5 18.7281V21.0001C6.5 21.5524 6.05228 22.0001 5.5 22.0001C4.94772 22.0001 4.5 21.5524 4.5 21.0001V18.4651Z',
  d15: 'M19.5 18.4651V21.0001C19.5 21.5524 19.0523 22.0001 18.5 22.0001C17.9477 22.0001 17.5 21.5524 17.5 21.0001V18.7281C17.8848 18.7141 18.2342 18.691 18.5501 18.6533C18.8867 18.6131 19.2037 18.5544 19.5 18.4651Z',
  d16: 'M5.5 18.5V21.5M18.5 18.5V21.5',
  d17: 'M3 18.5V2.5H21V18.5H3Z',
  d18: 'M10 14.5H14',
  d19: 'M10 6.5H14',
  d20: 'M4.5 21.75V18.75H6.5V21.75H4.5ZM17.5 21.75V18.75H19.5V21.75H17.5Z',
  d21: 'M21.75 11.7495L2.25 11.7495L2.25 19C2.25 19.4142 2.58579 19.75 3 19.75L21 19.75C21.4142 19.75 21.75 19.4142 21.75 19V11.7495ZM21 2.25L3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 10.2495L21.75 10.2495L21.75 3C21.75 2.80109 21.671 2.61032 21.5303 2.46967C21.3897 2.32902 21.1989 2.25 21 2.25ZM14 16.5H10V15L14 15V16.5ZM10 7H14V5.5H10V7Z',
} as const;

export const IconCabinet03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-03-stroke-rounded IconCabinet03StrokeRounded"
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
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCabinet03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-03-duotone-rounded IconCabinet03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCabinet03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-03-twotone-rounded IconCabinet03TwotoneRounded"
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
        strokeLinejoin="round" 
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCabinet03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-03-solid-rounded IconCabinet03SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCabinet03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-03-bulk-rounded IconCabinet03BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCabinet03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-03-stroke-sharp IconCabinet03StrokeSharp"
    >
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
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCabinet03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-03-solid-sharp IconCabinet03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCabinet03: TheIconSelfPack = {
  name: 'Cabinet03',
  StrokeRounded: IconCabinet03StrokeRounded,
  DuotoneRounded: IconCabinet03DuotoneRounded,
  TwotoneRounded: IconCabinet03TwotoneRounded,
  SolidRounded: IconCabinet03SolidRounded,
  BulkRounded: IconCabinet03BulkRounded,
  StrokeSharp: IconCabinet03StrokeSharp,
  SolidSharp: IconCabinet03SolidSharp,
};