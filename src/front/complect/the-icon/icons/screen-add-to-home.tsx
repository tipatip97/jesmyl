import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.06899 5C7.20477 4.13105 7.46172 3.5086 7.94804 3.02513C8.97918 2 10.6388 2 13.958 2C17.2773 2 18.9369 2 19.968 3.02513C20.9991 4.05025 20.9991 5.70017 20.9991 9V15C20.9991 18.2998 20.9991 19.9497 19.968 20.9749C18.9369 22 17.2773 22 13.958 22C10.6388 22 8.97918 22 7.94804 20.9749C7.29268 20.3233 7.05384 19.4194 6.9668 18',
  d2: 'M14 19H14.009',
  d3: 'M6.44344 7.95215H9.92289C10.3586 7.96711 11.0175 8.49825 11.0175 8.9086V12.5141M2.99902 15.9521L10.2668 8.74919',
  d4: 'M20.6901 14.5566V8.55664C20.6901 5.25681 20.6901 3.60689 19.6618 2.58177C18.6336 1.55664 16.9787 1.55664 13.6688 1.55664C10.3589 1.55664 8.70398 1.55664 7.67574 2.58177C7.19079 3.06524 6.93456 3.68769 6.79917 4.55664L6.69727 17.5566C6.78406 18.976 7.02223 19.8799 7.67574 20.5315C8.70398 21.5566 10.3589 21.5566 13.6688 21.5566C16.9787 21.5566 18.6336 21.5566 19.6618 20.5315C20.6901 19.5063 20.6901 17.8564 20.6901 14.5566Z',
  d5: 'M6.79917 4.55664C6.93456 3.68769 7.19079 3.06524 7.67574 2.58177C8.70398 1.55664 10.3589 1.55664 13.6688 1.55664C16.9787 1.55664 18.6336 1.55664 19.6618 2.58177C20.6901 3.60689 20.6901 5.25681 20.6901 8.55664V14.5566C20.6901 17.8564 20.6901 19.5063 19.6618 20.5315C18.6336 21.5566 16.9787 21.5566 13.6688 21.5566C10.3589 21.5566 8.70398 21.5566 7.67574 20.5315C7.02223 19.8799 6.78406 18.976 6.69727 17.5566',
  d6: 'M6.13308 7.55664H9.61073C10.0462 7.5716 10.7048 8.10274 10.7048 8.51309V12.1186M2.69043 15.5566L9.95447 8.35368',
  d7: 'M13.6943 18.5566H13.7033',
  d8: 'M7.10778 5C7.24319 4.13105 7.49946 3.5086 7.98448 3.02513C9.01287 2 10.668 2 13.9784 2C17.2888 2 18.944 2 19.9723 3.02513C21.0007 4.05025 21.0007 5.70017 21.0007 9V15C21.0007 18.2998 21.0007 19.9497 19.9723 20.9749C18.944 22 17.2888 22 13.9784 22C10.668 22 9.01287 22 7.98448 20.9749C7.33087 20.3233 7.09267 19.4194 7.00586 18',
  d9: 'M6.44217 8H9.92036C10.3559 8.01497 11.0146 8.5461 11.0146 8.95645V12.5619M2.99902 16L10.6553 8.35114',
  d10: 'M14.0039 19H14.0129',
  d11: 'M9.59506 12.4541C9.45469 12.345 9.30231 12.1924 9.17821 12.0681L8.76215 11.652L3.95711 16.4571C3.56658 16.8476 2.93342 16.8476 2.54289 16.4571C2.15237 16.0665 2.15237 15.4334 2.54289 15.0429L7.34793 10.2378L6.93187 9.82175C6.80759 9.69765 6.65499 9.54527 6.54584 9.4049L6.54376 9.40224C6.4655 9.30168 6.10898 8.84356 6.31491 8.24962C6.52129 7.65439 7.08843 7.51424 7.21114 7.48391L7.21571 7.48278C7.38913 7.43978 7.60482 7.41381 7.78223 7.39245L7.82039 7.38784C8.29448 7.33043 8.90696 7.25813 9.45245 7.25065C9.72464 7.24692 10.0206 7.25825 10.2962 7.30921C10.5412 7.3545 10.9325 7.4584 11.237 7.76292C11.5416 8.06745 11.6455 8.45881 11.6908 8.70379C11.7417 8.97939 11.753 9.27531 11.7493 9.54751C11.7418 10.093 11.6695 10.7055 11.6121 11.1796L11.6075 11.2177C11.5861 11.3951 11.5602 11.6108 11.5172 11.7842L11.516 11.7888C11.4857 11.9115 11.3456 12.4787 10.7503 12.685C10.1564 12.891 9.69828 12.5345 9.59772 12.4562L9.59506 12.4541Z',
  d12: 'M13.9689 1.25H14.0303H14.0303H14.0303C15.6389 1.24998 16.9221 1.24997 17.9284 1.38478C18.9676 1.524 19.8232 1.81919 20.5002 2.49386C21.1777 3.16889 21.4744 4.02251 21.6143 5.05927C21.7497 6.06252 21.7496 7.34165 21.7496 8.94408V15.056C21.7496 16.6584 21.7497 17.9375 21.6143 18.9407C21.4744 19.9775 21.1777 20.8311 20.5002 21.5061C19.8232 22.1808 18.9676 22.476 17.9284 22.6152C16.9221 22.75 15.6389 22.75 14.0303 22.75H13.9689C12.3603 22.75 11.0771 22.75 10.0708 22.6152C9.03165 22.476 8.17608 22.1808 7.49901 21.5061C6.82158 20.8311 6.52484 19.9775 6.38496 18.9407C6.29412 18.2675 6.26424 17.47 6.25442 16.5339C6.25313 16.4106 6.25248 16.3489 6.27534 16.2929C6.29819 16.2369 6.34204 16.1931 6.42971 16.1054L8.44402 14.0911C8.6058 13.9293 8.68669 13.8484 8.7802 13.8321C8.87371 13.8158 8.99494 13.873 9.2374 13.9872C9.69911 14.2047 10.4078 14.3913 11.2413 14.1023C12.6137 13.6264 12.924 12.3461 12.9692 12.1597L13.2488 9.56807C13.2531 9.24992 13.2417 8.844 13.1654 8.43109C13.1029 8.09344 12.9279 7.33286 12.2973 6.70226C11.6667 6.07167 10.9061 5.89663 10.5685 5.83421C10.1556 5.75786 9.74966 5.74643 9.43151 5.7508L6.83991 6.0304C6.7194 6.0596 6.65915 6.07421 6.63389 6.07596C6.45416 6.08845 6.32988 5.98222 6.31423 5.80274C6.31203 5.77752 6.31579 5.7315 6.3233 5.63945C6.33985 5.43658 6.36013 5.24328 6.38496 5.05927C6.52484 4.02251 6.82157 3.16889 7.49901 2.49386C8.17608 1.81919 9.03165 1.524 10.0708 1.38478C11.0771 1.24997 12.3603 1.24998 13.9689 1.25H13.9689H13.9689ZM13 19C13 18.4477 13.4457 18 13.9955 18H14.0045C14.5543 18 15 18.4477 15 19C15 19.5523 14.5543 20 14.0045 20H13.9955C13.4457 20 13 19.5523 13 19Z',
  d13: 'M14.0303 1.25H13.9689H13.9689C12.3603 1.24998 11.0771 1.24997 10.0708 1.38478C9.03165 1.524 8.17608 1.81919 7.49901 2.49386C6.82157 3.16889 6.52484 4.02251 6.38496 5.05927C6.36013 5.24328 6.33985 5.43658 6.3233 5.63945C6.31579 5.7315 6.31203 5.77752 6.31423 5.80274C6.32988 5.98222 6.45416 6.08845 6.63389 6.07596C6.65915 6.0742 6.7194 6.0596 6.83991 6.0304L9.43151 5.75079C9.74966 5.74643 10.1556 5.75786 10.5685 5.83421C10.9061 5.89663 11.6667 6.07167 12.2973 6.70226C12.9279 7.33286 13.1029 8.09344 13.1654 8.43109C13.2417 8.844 13.2531 9.24991 13.2488 9.56807L12.9692 12.1597C12.924 12.3461 12.6137 13.6264 11.2413 14.1023C10.4078 14.3913 9.69911 14.2047 9.2374 13.9872C8.99494 13.873 8.87371 13.8158 8.7802 13.8321C8.68669 13.8484 8.6058 13.9293 8.44402 14.0911L6.42971 16.1054C6.34204 16.1931 6.29819 16.2369 6.27534 16.2929C6.25248 16.3489 6.25313 16.4106 6.25442 16.5339C6.26424 17.47 6.29412 18.2675 6.38496 18.9407C6.52484 19.9775 6.82158 20.8311 7.49901 21.5061C8.17608 22.1808 9.03165 22.476 10.0708 22.6152C11.0771 22.75 12.3603 22.75 13.9689 22.75H14.0303C15.6389 22.75 16.9221 22.75 17.9284 22.6152C18.9676 22.476 19.8232 22.1808 20.5002 21.5061C21.1777 20.8311 21.4744 19.9775 21.6143 18.9407C21.7497 17.9375 21.7496 16.6584 21.7496 15.056V8.94408C21.7496 7.34165 21.7497 6.06252 21.6143 5.05927C21.4744 4.02251 21.1777 3.16889 20.5002 2.49386C19.8232 1.81919 18.9676 1.524 17.9284 1.38478C16.9221 1.24997 15.6389 1.24998 14.0303 1.25H14.0303Z',
  d14: 'M13.9955 18C13.4457 18 13 18.4477 13 19C13 19.5523 13.4457 20 13.9955 20H14.0045C14.5543 20 15 19.5523 15 19C15 18.4477 14.5543 18 14.0045 18H13.9955Z',
  d15: 'M6.99609 5V2H20.9829V22H6.99609V17',
  d16: 'M13.9893 19H13.9983',
  d17: 'M2.9834 16.0069L10.5025 8.4615M6.42272 7.97852H10.9838V12.5644',
  d18: 'M6.38763 7H11.9591V12.5714H9.95906V10.4142L3.66617 16.7071L2.25195 15.2929L8.54485 9H6.38763V7Z',
  d19: 'M6.4677 1.46969C6.60836 1.32902 6.79913 1.25 6.99805 1.25H20.9992C21.4134 1.25 21.7492 1.58579 21.7492 2V22C21.7492 22.4142 21.4134 22.75 20.9992 22.75H6.99919C6.58499 22.75 6.24921 22.4142 6.24919 22L6.24884 15.8904L8.3179 13.8214H13.2073V5.75H6.24826L6.24805 2.00004C6.24804 1.80112 6.32705 1.61035 6.4677 1.46969ZM15.0109 18H13.002V20H15.0109V18Z',
};

export const IconScreenAddToHomeStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="screen-add-to-home-stroke-rounded IconScreenAddToHomeStrokeRounded"
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

export const IconScreenAddToHomeDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="screen-add-to-home-duotone-rounded IconScreenAddToHomeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconScreenAddToHomeTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="screen-add-to-home-twotone-rounded IconScreenAddToHomeTwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconScreenAddToHomeSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="screen-add-to-home-solid-rounded IconScreenAddToHomeSolidRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconScreenAddToHomeBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="screen-add-to-home-bulk-rounded IconScreenAddToHomeBulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconScreenAddToHomeStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="screen-add-to-home-stroke-sharp IconScreenAddToHomeStrokeSharp"
    >
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
        strokeLinecap="square" 
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

export const IconScreenAddToHomeSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="screen-add-to-home-solid-sharp IconScreenAddToHomeSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfScreenAddToHome: TheIconSelfPack = {
  name: 'ScreenAddToHome',
  StrokeRounded: IconScreenAddToHomeStrokeRounded,
  DuotoneRounded: IconScreenAddToHomeDuotoneRounded,
  TwotoneRounded: IconScreenAddToHomeTwotoneRounded,
  SolidRounded: IconScreenAddToHomeSolidRounded,
  BulkRounded: IconScreenAddToHomeBulkRounded,
  StrokeSharp: IconScreenAddToHomeStrokeSharp,
  SolidSharp: IconScreenAddToHomeSolidSharp,
};