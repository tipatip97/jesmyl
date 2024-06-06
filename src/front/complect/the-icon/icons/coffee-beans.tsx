import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 5.64868C10.158 2.80666 6.20842 2.1484 4.17841 4.17841M4.17841 4.17841C2.1484 6.20842 2.80666 10.158 5.64868 13M4.17841 4.17841C4.42346 5.40363 5.72249 8.07432 8.95707 8.95647',
  d2: 'M9.21114 19.7889C11.2975 21.8753 15.3568 21.1987 18.2778 18.2778C21.1987 15.3568 21.8753 11.2975 19.7889 9.21114M9.21114 19.7889C7.12475 17.7025 7.80129 13.6432 10.7222 10.7222C13.6432 7.80129 17.7025 7.12475 19.7889 9.21114M9.21114 19.7889C10.7222 19.2852 13.5829 18.8717 14.8781 14.1225C15.7847 10.7981 18.5296 9.46299 19.7889 9.21114',
  d3: 'M18.2778 18.2778C15.3568 21.1987 11.2975 21.8753 9.21114 19.7889C7.12475 17.7025 7.80129 13.6432 10.7222 10.7222C13.6432 7.80129 17.7025 7.12475 19.7889 9.21114C21.8753 11.2975 21.1987 15.3568 18.2778 18.2778Z',
  d4: 'M19.6292 8.47787C19.782 8.44208 19.8261 8.24902 19.6975 8.15903C18.5015 7.32186 16.9749 7.09373 15.4448 7.34875C13.633 7.65072 11.7498 8.63326 10.1915 10.1915C8.63326 11.7498 7.65072 13.633 7.34875 15.4448C7.14602 16.6612 7.24863 17.8754 7.71985 18.923C7.80352 19.1091 7.84536 19.2021 7.94232 19.2498C8.03929 19.2974 8.14693 19.2717 8.36222 19.2202L9.00576 19.0665C9.16534 19.0138 9.32783 18.9644 9.49279 18.9142C10.1912 18.7017 10.9344 18.4756 11.6903 17.9367C12.596 17.2909 13.5459 16.157 14.1547 13.9248C15.1526 10.2655 18.1674 8.77533 19.6292 8.47787Z',
  d5: 'M21.281 10.0799C21.1978 9.89434 21.1561 9.80158 21.0596 9.75381C20.963 9.70604 20.8556 9.7312 20.6408 9.78152L19.9601 9.94098C19.9521 9.94285 19.9441 9.94458 19.9361 9.94618C18.8746 10.1585 16.4142 11.3405 15.6018 14.3195C14.9153 16.8365 13.7873 18.2838 12.5611 19.158C11.5833 19.8551 10.555 20.1639 9.85028 20.3755C9.70054 20.4204 9.5654 20.461 9.44846 20.5C9.42778 20.5069 9.40681 20.5129 9.3856 20.5179C9.22674 20.5559 9.18148 20.7567 9.31563 20.8499C10.5096 21.6791 12.0302 21.9045 13.5544 21.6505C15.3662 21.3485 17.2494 20.366 18.8077 18.8077C20.366 17.2494 21.3485 15.3662 21.6505 13.5544C21.853 12.3394 21.7508 11.1267 21.281 10.0799Z',
  d6: 'M2.34635 8.40761C2.09853 6.92072 2.31816 5.43541 3.12862 4.26848C3.21747 4.14055 3.40961 4.18627 3.44502 4.33796C3.6033 5.11039 4.18611 6.29679 5.11923 7.39459C5.77707 8.16853 6.63829 8.93349 7.702 9.49422C8.05118 9.6783 8.22577 9.77033 8.25619 9.90522C8.28662 10.0401 8.17118 10.1945 7.9403 10.5034C7.24716 11.4305 6.70425 12.4278 6.33209 13.4497C6.1738 13.8843 6.09466 14.1016 5.93541 14.1379C5.77616 14.1742 5.62035 14.0223 5.30873 13.7184C5.237 13.6484 5.1729 13.585 5.11757 13.5296C3.59899 12.0108 2.6409 10.1749 2.34635 8.40761Z',
  d7: 'M13.4566 6.33012C13.8858 6.17419 14.1004 6.09623 14.1369 5.93722C14.1735 5.77821 14.0246 5.62467 13.7267 5.31761C13.6553 5.24397 13.589 5.1768 13.5293 5.11727C12.0106 3.59887 10.1748 2.64088 8.40762 2.34635C7.2417 2.15203 6.07675 2.24512 5.06551 2.68512C4.88676 2.7629 4.79738 2.80179 4.74826 2.89486C4.69914 2.98794 4.71867 3.08996 4.75774 3.29401C4.81103 3.57229 4.86415 3.81946 4.90808 4.00693C4.90995 4.01491 4.91168 4.02292 4.91329 4.03096C5.00392 4.4841 5.43644 5.4517 6.26214 6.42312C7.01211 7.30546 8.03633 8.13073 9.31792 8.56009C9.46118 8.60808 9.53282 8.63208 9.6103 8.61708C9.68779 8.60208 9.75124 8.548 9.87815 8.43986C10.9772 7.50325 12.1984 6.78723 13.4566 6.33012Z',
  d8: 'M20.0212 8.40813C18.7843 7.36889 17.1167 7.07071 15.4448 7.34936C13.633 7.65133 11.7498 8.63387 10.1915 10.1921C8.63326 11.7504 7.65072 13.6336 7.34875 15.4454C7.12314 16.7991 7.27567 18.1499 7.8935 19.2716C8.37715 19.1939 8.77352 19.1171 9.01304 19.065C9.17058 19.0131 9.33093 18.9644 9.49369 18.9148C10.1921 18.7023 10.9351 18.4763 11.691 17.9374C12.5968 17.2916 13.5466 16.1577 14.1554 13.9255C15.1504 10.2769 18.1506 8.78475 19.6171 8.4812C19.7194 8.45451 19.8546 8.42902 20.0212 8.40813Z',
  d9: 'M21.1749 9.85919C20.49 9.843 20.0905 9.90587 19.9934 9.93325C19.9747 9.93853 19.9558 9.94307 19.9368 9.94688C18.8753 10.1592 16.415 11.3412 15.6025 14.3202C14.9161 16.8372 13.788 18.2845 12.5618 19.1587C11.584 19.8558 10.5557 20.1646 9.85099 20.3762C9.70125 20.4211 9.56612 20.4617 9.44917 20.5007C9.4247 20.5088 9.39983 20.5157 9.37465 20.5213C9.27268 20.544 9.14228 20.5711 8.98849 20.6011C10.2243 21.6332 11.8872 21.9289 13.5544 21.6511C15.3662 21.3491 17.2494 20.3666 18.8077 18.8083C20.366 17.25 21.3485 15.3668 21.6505 13.555C21.8674 12.2534 21.7347 10.9544 21.1749 9.85919Z',
  d10: 'M4.93362 4.00594C4.90623 3.90889 4.84336 3.50934 4.85956 2.82441C5.95476 2.26462 7.25377 2.13194 8.55538 2.34888C10.3672 2.65084 12.2504 3.63338 13.8087 5.19165C14.0705 5.45343 14.316 5.72439 14.5448 6.00263C12.8684 6.40567 11.2139 7.27713 9.77617 8.52943C9.62832 8.48359 9.47648 8.43936 9.32053 8.39683C6.34158 7.58439 5.15955 5.12406 4.94725 4.06254C4.94344 4.0435 4.93889 4.02462 4.93362 4.00594Z',
  d11: 'M8.56409 9.73661C5.17799 8.64832 3.77488 5.79933 3.48157 4.38224C3.45488 4.27997 3.42939 4.14472 3.4085 3.97812C2.36926 5.21504 2.07108 6.88263 2.34973 8.55452C2.6517 10.3663 3.63424 12.2496 5.1925 13.8078C5.45422 14.0695 5.72511 14.315 6.00329 14.5438C6.41002 12.8524 7.29362 11.1833 8.56409 9.73661Z',
} as const;

export const IconCoffeeBeansStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coffee-beans-stroke-rounded IconCoffeeBeansStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCoffeeBeansDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coffee-beans-duotone-rounded IconCoffeeBeansDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconCoffeeBeansTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coffee-beans-twotone-rounded IconCoffeeBeansTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconCoffeeBeansSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coffee-beans-solid-rounded IconCoffeeBeansSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoffeeBeansBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coffee-beans-bulk-rounded IconCoffeeBeansBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoffeeBeansStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coffee-beans-stroke-sharp IconCoffeeBeansStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoffeeBeansSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coffee-beans-solid-sharp IconCoffeeBeansSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCoffeeBeans: TheIconSelfPack = {
  name: 'CoffeeBeans',
  StrokeRounded: IconCoffeeBeansStrokeRounded,
  DuotoneRounded: IconCoffeeBeansDuotoneRounded,
  TwotoneRounded: IconCoffeeBeansTwotoneRounded,
  SolidRounded: IconCoffeeBeansSolidRounded,
  BulkRounded: IconCoffeeBeansBulkRounded,
  StrokeSharp: IconCoffeeBeansStrokeSharp,
  SolidSharp: IconCoffeeBeansSolidSharp,
};