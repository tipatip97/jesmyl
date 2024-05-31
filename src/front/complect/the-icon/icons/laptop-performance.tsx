import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 14.5V6.5C20 4.61438 20 3.67157 19.4142 3.08579C18.8284 2.5 17.8856 2.5 16 2.5H8C6.11438 2.5 5.17157 2.5 4.58579 3.08579C4 3.67157 4 4.61438 4 6.5V14.5',
  d2: 'M8 8.39353H8.16179C8.97315 8.39353 9.37883 8.39353 9.68856 8.56772C9.99828 8.7419 10.1375 9.04836 10.416 9.66128L10.7525 10.4019C10.9355 10.8046 11.027 11.006 11.1746 10.9998C11.3223 10.9935 11.3869 10.7855 11.5162 10.3695L12.6732 6.64732C12.8063 6.21926 12.8728 6.00523 13.0219 6C13.171 5.99477 13.2605 6.20332 13.4394 6.62043L13.642 7.0928C13.9115 7.72097 14.0462 8.03506 14.3589 8.2143C14.6715 8.39353 15.0846 8.39353 15.9108 8.39353H16',
  d3: 'M3.49762 15.5154L4.01953 14.5H19.9518L20.5023 15.5154C21.9452 18.177 22.3046 19.5077 21.7561 20.5039C21.2077 21.5 19.7536 21.5 16.8454 21.5L7.15462 21.5C4.24642 21.5 2.79231 21.5 2.24387 20.5039C1.69543 19.5077 2.05474 18.177 3.49762 15.5154Z',
  d4: 'M20 6.5V14.5H4V6.5C4 4.61438 4 3.67157 4.58579 3.08579C5.17157 2.5 6.11438 2.5 8 2.5H16C17.8856 2.5 18.8284 2.5 19.4142 3.08579C20 3.67157 20 4.61438 20 6.5Z',
  d5: 'M5.92221 1.83215C6.53387 1.74991 7.29769 1.74995 8.18417 1.75H15.8156C16.7021 1.74995 17.4659 1.74991 18.0775 1.83215C18.7331 1.92028 19.3614 2.11902 19.8711 2.62868C20.3807 3.13835 20.5795 3.7667 20.6676 4.42221C20.7498 5.03387 20.7498 5.79769 20.7498 6.68417L20.7498 14.25L20.7498 14.2913C20.7511 14.3426 20.7573 14.3679 20.7796 14.4141L20.7896 14.4338L21.1655 15.1653C21.8895 16.5014 22.3771 17.5653 22.6026 18.4487C22.8346 19.3577 22.8073 20.1495 22.413 20.8656C21.9723 21.6661 21.1848 21.9782 20.3015 22.1165C19.4479 22.2501 18.3095 22.25 16.913 22.25H16.913H16.913H11.9999H7.08676H7.08674H7.08672C5.69027 22.25 4.55188 22.2501 3.69825 22.1165C2.81497 21.9782 2.02749 21.6661 1.58675 20.8656C1.1925 20.1495 1.16515 19.3577 1.39719 18.4487C1.62267 17.5653 2.11021 16.5014 2.83421 15.1653L3.21015 14.4338L3.22019 14.4141C3.2425 14.3679 3.24862 14.3426 3.24991 14.2913L3.25 14.25L3.25 6.68417C3.24995 5.79769 3.24991 5.03387 3.33215 4.42221C3.42028 3.7667 3.61902 3.13835 4.12868 2.62868C4.63835 2.11902 5.2667 1.92028 5.92221 1.83215ZM5.25 6.75V13.15C5.25 13.4328 5.25 13.5743 5.33787 13.6621C5.42574 13.75 5.56716 13.75 5.85 13.75H11.9999H18.1497C18.4326 13.75 18.574 13.75 18.6619 13.6621C18.7497 13.5743 18.7497 13.4328 18.7497 13.15V6.75C18.7497 5.77892 18.7476 5.15121 18.6854 4.6887C18.6271 4.25496 18.533 4.11902 18.4569 4.04289C18.3807 3.96677 18.2448 3.87262 17.811 3.81431C17.3485 3.75212 16.7208 3.75 15.7497 3.75H8.25C7.27892 3.75 6.65121 3.75212 6.1887 3.81431C5.75496 3.87262 5.61902 3.96677 5.54289 4.04289C5.46677 4.11902 5.37262 4.25496 5.31431 4.6887C5.25212 5.15121 5.25 5.77892 5.25 6.75Z',
  d6: 'M14.3418 6.47668L14.5611 6.98781C14.7058 7.32533 14.7788 7.4905 14.8443 7.60096C14.865 7.61921 14.9316 7.65748 15.0331 7.66449C15.2228 7.68179 15.4793 7.68276 15.9108 7.68276H16C16.5523 7.68276 17 8.13047 17 8.68276C17 9.23504 16.5523 9.68276 16 9.68276L15.8719 9.68276C15.4923 9.68279 15.143 9.68282 14.8514 9.65622C14.535 9.62736 14.1931 9.56115 13.8615 9.37106C13.547 9.19077 13.3339 8.95234 13.1724 8.69962L12.4589 10.9952C12.4063 11.1651 12.3372 11.3883 12.2522 11.5636C12.1712 11.7307 11.8828 12.2599 11.217 12.2881C10.5692 12.3156 10.2328 11.8354 10.1355 11.684C10.0305 11.5206 9.93419 11.3081 9.85916 11.1425L9.50557 10.3642C9.356 10.035 9.28061 9.87359 9.21373 9.76556C9.1805 9.70804 9.07307 9.69821 9.02351 9.70049C8.83724 9.6837 8.58566 9.68276 8.16179 9.68276H8C7.44772 9.68276 7 9.23504 7 8.68276C7 8.13047 7.44772 7.68276 8 7.68276L8.20014 7.68275H8.20015C8.57284 7.68272 8.91604 7.6827 9.20306 7.70857C9.51479 7.73667 9.8511 7.80106 10.1787 7.98533C10.5209 8.17777 10.7448 8.43911 10.9143 8.71285C10.9497 8.77004 10.9842 8.83039 11.0179 8.89294L11.7308 6.59935L11.7308 6.59933C11.7852 6.42378 11.8553 6.19728 11.9408 6.02009C12.0187 5.85848 12.309 5.31363 12.9868 5.28984C13.6491 5.26659 13.9812 5.76991 14.0726 5.91935C14.175 6.08686 14.2683 6.30473 14.3418 6.47667L14.3418 6.47668Z',
  d7: 'M20 14.5V2.5L4 2.5V14.5',
  d8: 'M2 21.5L4.01911 14.5H19.9514L21.9996 21.5H2Z',
  d9: 'M7.49805 8.39353H9.49924L10.9992 10.9999L13.0212 6L14.4992 8.39353H16.498',
  d10: 'M22.7124 21.0056L20.7954 14.3038V1.75H3.20418V14.3038L1.2876 21.0057C1.20337 21.3002 1.26242 21.6172 1.4471 21.8617C1.63177 22.1062 1.92064 22.25 2.2273 22.25H21.7727C22.0794 22.25 22.3682 22.1062 22.5529 21.8617C22.7376 21.6171 22.7966 21.3002 22.7124 21.0056ZM18.8422 3.70239V13.4643H5.16016V3.70239H18.8422Z',
  d11: 'M12.9368 5.00358C13.3124 4.97178 13.674 5.15388 13.872 5.47459L15.057 7.39354H16.498V9.39354H14.4992C14.1525 9.39354 13.8306 9.21396 13.6484 8.91896L13.2079 8.20564L11.9263 11.3748C11.7829 11.7294 11.4498 11.9712 11.0682 11.9975C10.6865 12.0239 10.3233 11.8303 10.1325 11.4987L8.92097 9.39354H7.49805V7.39354H9.49924C9.857 7.39354 10.1875 7.58466 10.366 7.89474L10.8419 8.72168L12.0941 5.62511C12.2354 5.27567 12.5612 5.03538 12.9368 5.00358Z',
} as const;

export const IconLaptopPerformanceStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-performance-stroke-rounded IconLaptopPerformanceStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLaptopPerformanceDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-performance-duotone-rounded IconLaptopPerformanceDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconLaptopPerformanceTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-performance-twotone-rounded IconLaptopPerformanceTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconLaptopPerformanceSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-performance-solid-rounded IconLaptopPerformanceSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopPerformanceBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-performance-bulk-rounded IconLaptopPerformanceBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopPerformanceStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-performance-stroke-sharp IconLaptopPerformanceStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopPerformanceSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-performance-solid-sharp IconLaptopPerformanceSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfLaptopPerformance: TheIconSelfPack = {
  name: 'LaptopPerformance',
  StrokeRounded: IconLaptopPerformanceStrokeRounded,
  DuotoneRounded: IconLaptopPerformanceDuotoneRounded,
  TwotoneRounded: IconLaptopPerformanceTwotoneRounded,
  SolidRounded: IconLaptopPerformanceSolidRounded,
  BulkRounded: IconLaptopPerformanceBulkRounded,
  StrokeSharp: IconLaptopPerformanceStrokeSharp,
  SolidSharp: IconLaptopPerformanceSolidSharp,
};