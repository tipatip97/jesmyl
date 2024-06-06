import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17 19.5034C17 18.2482 18.0532 17.0077 18.7924 16.2917C19.1939 15.9028 19.8061 15.9028 20.2076 16.2917C20.9468 17.0077 22 18.2482 22 19.5034C22 20.7341 21.0533 22 19.5 22C17.9467 22 17 20.7341 17 19.5034Z',
  d2: 'M21.9999 12C17.8993 12 14.3751 14.4682 12.832 18',
  d3: 'M21.9984 8C15.6563 8 10.2992 12.217 8.57812 18',
  d4: 'M21.9993 4C13.4329 4 6.26423 9.98405 4.44531 18',
  d5: 'M2 10C2.87815 10 3.72986 10.1132 4.54134 10.3258',
  d6: 'M2 6C3.86605 6 5.64683 6.36509 7.27481 7.02772',
  d7: 'M2 2C5.17533 2 8.15863 2.82221 10.7486 4.26534',
  d8: 'M19.5176 16L17.7168 17.7851C16.7498 18.7603 16.7665 20.3305 17.7335 21.2892C18.7173 22.2479 20.3012 22.2314 21.2683 21.2727C22.252 20.2975 22.2353 18.7272 21.2683 17.7686L19.5176 16Z',
  d9: 'M18.2706 15.753C18.9629 15.0823 20.0371 15.0823 20.7294 15.753C21.1223 16.1335 21.6145 16.668 22.013 17.2914C22.4062 17.9066 22.75 18.6736 22.75 19.5034C22.75 21.0851 21.528 22.75 19.5 22.75C17.472 22.75 16.25 21.0851 16.25 19.5034C16.25 18.6736 16.5938 17.9066 16.987 17.2914C17.3855 16.668 17.8777 16.1335 18.2706 15.753Z',
  d10: 'M1.25 2.22221C1.25 1.68527 1.68754 1.25 2.22728 1.25C5.50118 1.25 8.57993 2.09375 11.2527 3.57532C11.7242 3.83667 11.8935 4.42876 11.6308 4.8978C11.3681 5.36684 10.7729 5.5352 10.3014 5.27386C7.91197 3.94938 5.15972 3.19442 2.22728 3.19442C1.68754 3.19442 1.25 2.75914 1.25 2.22221ZM21.7721 5.13883C13.8667 5.13883 7.24886 10.6326 5.57007 17.9927C5.45063 18.5163 4.92711 18.8445 4.40076 18.7256C3.87441 18.6068 3.54454 18.086 3.66397 17.5624C5.54034 9.33612 12.9341 3.19442 21.7721 3.19442C22.3118 3.19442 22.7494 3.62969 22.7494 4.16662C22.7494 4.70356 22.3118 5.13883 21.7721 5.13883ZM1.25 6.11104C1.25 5.5741 1.68754 5.13883 2.22728 5.13883C4.17938 5.13883 6.04467 5.51894 7.75065 6.20973C8.25056 6.41215 8.49086 6.97941 8.28738 7.47672C8.0839 7.97404 7.51369 8.2131 7.01378 8.01067C5.53779 7.41301 3.92246 7.08325 2.22728 7.08325C1.68754 7.08325 1.25 6.64798 1.25 6.11104ZM21.7712 9.02766C16.0174 9.02766 11.1546 12.8335 9.59259 18.0549C9.43863 18.5695 8.89446 18.8625 8.37715 18.7094C7.85984 18.5562 7.56528 18.0148 7.71924 17.5002C9.52116 11.4771 15.1291 7.08325 21.7712 7.08325C22.3109 7.08325 22.7485 7.51852 22.7485 8.05546C22.7485 8.59239 22.3109 9.02766 21.7712 9.02766ZM1.25 9.99987C1.25 9.46294 1.68754 9.02766 2.22728 9.02766C3.16977 9.02766 4.08534 9.14856 4.95853 9.37613C5.48064 9.5122 5.79302 10.0436 5.65624 10.563C5.51945 11.0824 4.98531 11.3931 4.4632 11.2571C3.75031 11.0713 3.00117 10.9721 2.22728 10.9721C1.68754 10.9721 1.25 10.5368 1.25 9.99987ZM21.7727 12.9165C18.1675 12.9165 15.0668 15.0745 13.7087 18.1668C13.4926 18.6588 12.9165 18.8834 12.4219 18.6684C11.9273 18.4534 11.7015 17.8803 11.9176 17.3883C13.5756 13.6133 17.363 10.9721 21.7727 10.9721C22.3125 10.9721 22.75 11.4074 22.75 11.9443C22.75 12.4812 22.3125 12.9165 21.7727 12.9165Z',
  d11: 'M1.25 2.22221C1.25 1.68527 1.68754 1.25 2.22728 1.25C5.50118 1.25 8.57993 2.09375 11.2527 3.57532C11.7242 3.83667 11.8935 4.42876 11.6308 4.8978C11.3681 5.36684 10.7729 5.5352 10.3014 5.27386C7.91197 3.94938 5.15972 3.19442 2.22728 3.19442C1.68754 3.19442 1.25 2.75914 1.25 2.22221ZM21.7712 9.02766C16.0174 9.02766 11.1546 12.8335 9.59259 18.0549C9.43863 18.5695 8.89446 18.8625 8.37715 18.7094C7.85984 18.5562 7.56528 18.0148 7.71924 17.5002C9.52116 11.4771 15.1291 7.08325 21.7712 7.08325C22.3109 7.08325 22.7485 7.51852 22.7485 8.05546C22.7485 8.59239 22.3109 9.02766 21.7712 9.02766ZM1.25 9.99987C1.25 9.46294 1.68754 9.02766 2.22728 9.02766C3.16977 9.02766 4.08534 9.14856 4.95853 9.37613C5.48064 9.5122 5.79302 10.0436 5.65624 10.563C5.51945 11.0824 4.98531 11.3931 4.4632 11.2571C3.75031 11.0713 3.00117 10.9721 2.22728 10.9721C1.68754 10.9721 1.25 10.5368 1.25 9.99987Z',
  d12: 'M21.7721 5.13973C13.8667 5.13973 7.24886 10.6335 5.57007 17.9936C5.45063 18.5172 4.92711 18.8454 4.40076 18.7265C3.87441 18.6077 3.54454 18.0869 3.66397 17.5633C5.54034 9.33702 12.9341 3.19531 21.7721 3.19531C22.3118 3.19531 22.7494 3.63058 22.7494 4.16752C22.7494 4.70446 22.3118 5.13973 21.7721 5.13973ZM1.25 6.11194C1.25 5.575 1.68754 5.13973 2.22728 5.13973C4.17938 5.13973 6.04467 5.51984 7.75065 6.21063C8.25056 6.41305 8.49086 6.9803 8.28738 7.47762C8.0839 7.97494 7.51369 8.214 7.01378 8.01157C5.53779 7.41391 3.92246 7.08414 2.22728 7.08414C1.68754 7.08414 1.25 6.64887 1.25 6.11194ZM21.7727 12.9174C18.1675 12.9174 15.0668 15.0754 13.7087 18.1677C13.4926 18.6597 12.9165 18.8843 12.4219 18.6693C11.9273 18.4543 11.7015 17.8812 11.9176 17.3892C13.5756 13.6142 17.363 10.973 21.7727 10.973C22.3125 10.973 22.75 11.4082 22.75 11.9452C22.75 12.4821 22.3125 12.9174 21.7727 12.9174Z',
  d13: 'M19.5 16C19.5 16 17 17.5 17 19.5034C17 20.7341 17.9467 22 19.5 22C21.0533 22 22 20.7341 22 19.5034C22 17.5 19.5 16 19.5 16Z',
  d14: 'M19 14.834C19.0809 14.8872 19.8495 15.3623 19.9821 15.4595C20.2456 15.6528 20.5996 15.9358 20.9573 16.2937C21.6376 16.9744 22.5 18.0951 22.5 19.5035C22.5 21.2022 21.1863 23.0001 19 23.0001C16.8137 23.0001 15.5 21.2022 15.5 19.5035C15.5 18.0951 16.3624 16.9744 17.0427 16.2937C17.4004 15.9358 17.7544 15.6528 18.0179 15.4595C18.1505 15.3623 18.9191 14.8872 19 14.834Z',
  d15: 'M21.5003 13C17.8113 13 14.6384 15.2197 13.2487 18.4004L11.416 17.5996C13.1125 13.7167 16.988 11 21.5003 11V13Z',
  d16: 'M21.4978 9C15.6103 9 10.6344 12.9146 9.03605 18.2852L7.11914 17.7148C8.96296 11.5194 14.7013 7 21.4978 7V9Z',
  d17: 'M21.4999 5C13.4107 5 6.63895 10.6508 4.92112 18.2213L2.9707 17.7787C4.8907 9.31728 12.4564 3 21.4999 3V5Z',
  d18: 'M3.78792 11.2931C3.05845 11.102 2.29189 11 1.5 11V9C2.46441 9 3.40127 9.12435 4.29476 9.35842L3.78792 11.2931Z',
  d19: 'M6.39781 7.95394C4.8875 7.33919 3.2346 7 1.5 7V5C3.4975 5 5.40616 5.39098 7.15181 6.10151L6.39781 7.95394Z',
  d20: 'M9.76186 5.13889C7.31688 3.77655 4.50063 3 1.5 3V1C4.85003 1 8.00037 1.86787 10.7353 3.39179L9.76186 5.13889Z',
};

export const IconSoilMoistureGlobalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-moisture-global-stroke-rounded IconSoilMoistureGlobalStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilMoistureGlobalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-moisture-global-duotone-rounded IconSoilMoistureGlobalDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilMoistureGlobalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-moisture-global-twotone-rounded IconSoilMoistureGlobalTwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilMoistureGlobalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-moisture-global-solid-rounded IconSoilMoistureGlobalSolidRounded"
    >
      <path 
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

export const IconSoilMoistureGlobalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-moisture-global-bulk-rounded IconSoilMoistureGlobalBulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilMoistureGlobalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-moisture-global-stroke-sharp IconSoilMoistureGlobalStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilMoistureGlobalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-moisture-global-solid-sharp IconSoilMoistureGlobalSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSoilMoistureGlobal: TheIconSelfPack = {
  name: 'SoilMoistureGlobal',
  StrokeRounded: IconSoilMoistureGlobalStrokeRounded,
  DuotoneRounded: IconSoilMoistureGlobalDuotoneRounded,
  TwotoneRounded: IconSoilMoistureGlobalTwotoneRounded,
  SolidRounded: IconSoilMoistureGlobalSolidRounded,
  BulkRounded: IconSoilMoistureGlobalBulkRounded,
  StrokeSharp: IconSoilMoistureGlobalStrokeSharp,
  SolidSharp: IconSoilMoistureGlobalSolidSharp,
};