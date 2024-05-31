import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.9869 3.875C16.0545 3.125 15.8921 2 14.7565 2C13.3371 2 9.82353 7 7 7',
  d2: 'M8.01476 3.875C7.93872 3.125 8.12143 2 9.3989 2C10.9957 2 14.8235 7 18 7',
  d3: 'M4 10H20',
  d4: 'M21.863 15.0024C21.4147 12.9368 19.4727 10.4981 20.1725 8.38201C20.3978 7.70069 19.8861 7 19.1631 7H4.82864C4.10627 7 3.59628 7.70208 3.82496 8.38173C4.53702 10.4979 2.58784 12.9411 2.13769 15.0065C1.51926 17.8441 3.02182 20.7941 5.88585 21.3928C9.75734 22.2021 14.2396 22.2024 18.1116 21.3937C20.9776 20.7951 22.4795 17.8424 21.863 15.0024Z',
  d5: 'M5.88585 21.3928C9.75734 22.2021 14.2396 22.2024 18.1116 21.3937C20.9776 20.7951 22.4795 17.8424 21.863 15.0024C21.5255 13.4474 20.3416 11.681 20.0754 10H3.92806C3.66513 11.6825 2.47659 13.4516 2.13769 15.0065C1.51926 17.8441 3.02182 20.7941 5.88585 21.3928Z',
  d6: 'M13.7573 1.5649C14.0306 1.40753 14.3802 1.25 14.7565 1.25C15.1696 1.25 15.5431 1.35432 15.8565 1.56559C16.1663 1.77437 16.3713 2.05635 16.5031 2.34044C16.7565 2.88624 16.7731 3.50674 16.7339 3.94232C16.6967 4.35486 16.3321 4.65915 15.9196 4.62197C15.507 4.58479 15.2027 4.22022 15.2399 3.80768C15.2682 3.49326 15.2374 3.17626 15.1426 2.97206C15.1004 2.88115 15.0561 2.835 15.0181 2.80941C14.9839 2.7863 14.9112 2.75 14.7565 2.75C14.759 2.75 14.7602 2.74998 14.7602 2.75012C14.7604 2.75121 14.6846 2.76184 14.5058 2.86479C14.3203 2.9716 14.0921 3.13736 13.8177 3.3618C13.672 3.48094 13.5219 3.60923 13.3667 3.74533C13.437 3.80246 13.5072 3.8593 13.5772 3.91566C14.3474 4.53534 15.1345 5.12833 15.9092 5.56561C16.6914 6.0071 17.3928 6.25 18 6.25C18.4142 6.25 18.75 6.58579 18.75 7C18.75 7.41421 18.4142 7.75 18 7.75C17.0189 7.75 16.0507 7.3679 15.1719 6.87189C14.2856 6.37167 13.4203 5.71466 12.6369 5.08434C12.5008 4.97478 12.3679 4.86679 12.2383 4.76077C12.1289 4.85923 12.0171 4.9594 11.9026 5.061C11.1925 5.69107 10.4057 6.35088 9.60155 6.85442C8.80837 7.35106 7.91448 7.75 7 7.75C6.58579 7.75 6.25 7.41421 6.25 7C6.25 6.58579 6.58579 6.25 7 6.25C7.49729 6.25 8.10142 6.02394 8.80551 5.58308C9.49859 5.14912 10.2084 4.55893 10.907 3.939C10.9588 3.89311 11.0106 3.84688 11.0625 3.80041C10.8766 3.65207 10.6972 3.51266 10.5235 3.384C10.22 3.15926 9.9637 2.99073 9.75144 2.88067C9.52676 2.76418 9.42015 2.75 9.39889 2.75C9.19203 2.75 9.07912 2.79452 9.01848 2.83086C8.95828 2.86692 8.90765 2.91998 8.86405 3.00346C8.7643 3.19444 8.73004 3.49463 8.76093 3.79935C8.80271 4.21145 8.50251 4.57939 8.09041 4.62117C7.67831 4.66296 7.31036 4.36275 7.26858 3.95065C7.22344 3.50537 7.24251 2.86806 7.53447 2.30904C7.68673 2.01752 7.91655 1.74245 8.24752 1.54414C8.57804 1.34611 8.96703 1.25 9.39889 1.25C9.77685 1.25 10.1392 1.39207 10.4419 1.54902C10.757 1.7124 11.0866 1.93449 11.4161 2.1785C11.66 2.35911 11.9207 2.56475 12.1908 2.78306C12.4269 2.57304 12.6547 2.37516 12.868 2.2007C13.1667 1.95639 13.4679 1.73152 13.7573 1.5649Z',
  d7: 'M4.82894 6.25C3.60253 6.25 2.71941 7.44694 3.11442 8.62091C3.15199 8.73256 3.17996 8.84691 3.199 8.96417C3.22474 9.12279 3.35454 9.25 3.51524 9.25L20.4854 9.25C20.6466 9.25 20.7766 9.12202 20.8017 8.96277C20.8202 8.84483 20.8477 8.72981 20.8849 8.61749C21.2734 7.44259 20.3888 6.25 19.1634 6.25L4.82894 6.25ZM20.8158 10.75C20.9457 10.75 21.0605 10.8337 21.1037 10.9562C21.1581 11.1106 21.2183 11.2691 21.2836 11.432C21.4197 11.7712 21.561 12.0917 21.7065 12.4219L21.7066 12.4219C21.8033 12.6413 21.9019 12.865 22.0021 13.1013C22.2402 13.6627 22.4687 14.2554 22.5963 14.8433C23.2814 17.9997 21.6243 21.4262 18.2652 22.1278C14.2921 22.9577 9.70536 22.9574 5.73269 22.127C2.37628 21.4254 0.717578 18.0018 1.40519 14.8468C1.53334 14.2589 1.76271 13.6658 2.00145 13.1042C2.10078 12.8706 2.19865 12.6489 2.29466 12.4315C2.44176 12.0985 2.58447 11.7753 2.72134 11.434C2.78692 11.2705 2.84733 11.1114 2.90186 10.9565C2.94502 10.8339 3.05981 10.75 3.18979 10.75L20.8158 10.75Z',
  d8: 'M20.8158 10.75C20.9457 10.75 21.0605 10.8337 21.1037 10.9562C21.3617 11.6879 21.6995 12.3877 22.0021 13.1013C22.2402 13.6627 22.4687 14.2554 22.5963 14.8433C23.2814 17.9997 21.6243 21.4262 18.2652 22.1278C14.2921 22.9577 9.70536 22.9574 5.73269 22.127C2.37628 21.4254 0.717578 18.0018 1.40519 14.8468C1.53334 14.2589 1.76271 13.6658 2.00145 13.1042C2.30512 12.3899 2.64388 11.6893 2.90186 10.9565C2.94502 10.8339 3.05981 10.75 3.18979 10.75H20.8158Z',
  d9: 'M4.82939 6.25C3.60298 6.25 2.71986 7.44694 3.11487 8.62091C3.15244 8.73256 3.18041 8.84691 3.19944 8.96417C3.22519 9.12279 3.35499 9.25 3.51569 9.25H20.4858C20.647 9.25 20.7771 9.12202 20.8021 8.96277C20.8207 8.84483 20.8482 8.72981 20.8853 8.61749C21.2739 7.44259 20.3892 6.25 19.1639 6.25H4.82939Z',
  d10: 'M16.0094 3.87579C16.077 3.12528 15.9146 1.99951 14.779 1.99951C13.3596 1.99951 9.84599 7.00293 7.02246 7.00293',
  d11: 'M8.03722 3.87579C7.96118 3.12528 8.14389 1.99951 9.42136 1.99951C11.0182 1.99951 14.846 7.00293 18.0225 7.00293',
  d12: 'M4.02246 10.0049H20.0225',
  d13: 'M19.9676 6.99023H4.01501L4.01499 10.0028C3.59346 12.4073 1.961 13.8835 2.00071 16.5721C2.02261 18.0551 2.74266 19.4835 3.89148 20.4203C4.77225 21.1385 5.66152 21.4128 7.08353 21.63C8.35779 21.8247 10.2878 22.0451 12.1214 21.9926C18.5359 21.8092 20.6341 21.0878 21.7159 18.0392C22.1362 16.8547 22.0508 15.7234 21.7159 14.3974C21.1612 13.0206 20.0421 10.756 19.9676 9.9783V6.99023Z',
  d14: 'M2.41649 12.2372C2.65871 11.7116 2.87775 11.2188 3.03716 10.75H20.9652C21.1251 11.218 21.3442 11.7098 21.5861 12.2343L21.6784 12.4339C22.0315 13.1959 22.4213 14.037 22.5963 14.8433C23.2814 17.9997 21.6243 21.4262 18.2652 22.1278C14.2921 22.9577 9.70536 22.9574 5.73269 22.127C2.37628 21.4254 0.717578 18.0018 1.40519 14.8468C1.58037 14.0431 1.96906 13.2037 2.32136 12.4429L2.41649 12.2372Z',
  d15: 'M7.00195 6.25H3.2503V9.25H20.7503V6.25H18.002C17.3948 6.25 16.6934 6.0071 15.9112 5.56561C15.1364 5.12833 14.3494 4.53535 13.5792 3.91566C13.5091 3.8593 13.4389 3.80246 13.3687 3.74533C13.5239 3.60923 13.6739 3.48093 13.8196 3.3618C14.094 3.13736 14.3223 2.9716 14.5077 2.86479C14.6648 2.77436 14.7424 2.75516 14.7588 2.75109L14.7622 2.75012L14.7609 2.75C14.9139 2.75038 14.986 2.78642 15.0201 2.80941C15.0581 2.835 15.1024 2.88115 15.1446 2.97206C15.2394 3.17626 15.2702 3.49326 15.2419 3.80768L16.7358 3.94232C16.7751 3.50674 16.7585 2.88624 16.5051 2.34044C16.3732 2.05635 16.1682 1.77437 15.8585 1.56559C15.5451 1.35432 15.1716 1.25 14.7585 1.25C14.3822 1.25 14.0325 1.40753 13.7592 1.5649C13.4699 1.73152 13.1687 1.95639 12.87 2.2007C12.6566 2.37516 12.4288 2.57304 12.1928 2.78305C11.9226 2.56475 11.662 2.35911 11.4181 2.1785C11.0885 1.93449 10.7589 1.7124 10.4438 1.54902C10.1411 1.39207 9.7788 1.25 9.40085 1.25C8.96898 1.25 8.58 1.34611 8.24948 1.54414C7.9185 1.74245 7.68868 2.01752 7.53642 2.30904C7.24446 2.86806 7.22539 3.50537 7.27054 3.95065L8.76289 3.79935C8.73199 3.49463 8.76626 3.19444 8.866 3.00346C8.90961 2.91998 8.96023 2.86692 9.02043 2.83086C9.08108 2.79452 9.19398 2.75 9.40085 2.75C9.4221 2.75 9.52871 2.76418 9.75339 2.88067C9.96566 2.99072 10.2219 3.15926 10.5254 3.384C10.6992 3.51266 10.8785 3.65207 11.0645 3.80041C11.0126 3.84688 10.9607 3.89311 10.909 3.939C10.2103 4.55893 9.50054 5.14911 8.80747 5.58308C8.10337 6.02394 7.49924 6.25 7.00195 6.25ZM11.9054 5.06097C11.4543 5.4612 10.9723 5.87342 10.4746 6.24998H14.1858C13.6485 5.88069 13.1282 5.47732 12.6397 5.08432C12.5036 4.97476 12.3707 4.86677 12.2411 4.76074C12.1317 4.8592 12.0199 4.95938 11.9054 5.06097Z',
} as const;

export const IconPurse01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="purse-01-stroke-rounded IconPurse01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPurse01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="purse-01-duotone-rounded IconPurse01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconPurse01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="purse-01-twotone-rounded IconPurse01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconPurse01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="purse-01-solid-rounded IconPurse01SolidRounded"
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

export const IconPurse01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="purse-01-bulk-rounded IconPurse01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPurse01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="purse-01-stroke-sharp IconPurse01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconPurse01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="purse-01-solid-sharp IconPurse01SolidSharp"
    >
      <path 
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

export const iconPackOfPurse01: TheIconSelfPack = {
  name: 'Purse01',
  StrokeRounded: IconPurse01StrokeRounded,
  DuotoneRounded: IconPurse01DuotoneRounded,
  TwotoneRounded: IconPurse01TwotoneRounded,
  SolidRounded: IconPurse01SolidRounded,
  BulkRounded: IconPurse01BulkRounded,
  StrokeSharp: IconPurse01StrokeSharp,
  SolidSharp: IconPurse01SolidSharp,
};