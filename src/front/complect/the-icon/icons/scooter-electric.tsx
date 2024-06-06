import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.51383 18H13.2887C14.0213 18 14.3876 18 14.6328 17.8445C14.878 17.689 15.0854 17.2491 15.5002 16.3693C15.735 15.8712 16.0361 15.411 16.3921 15M16.3921 15L4 16M16.3921 15C17.0623 14.2264 17.9273 13.6269 18.913 13.2759C19.4501 13.0846 19.7186 12.9889 19.8093 12.8143C19.8999 12.6397 19.8331 12.3991 19.6995 11.918L18.1691 6.4088C17.9184 5.50632 17.7931 5.05508 17.5225 4.72715C17.3256 4.4885 17.076 4.29879 16.7934 4.17293C16.405 4 15.9366 4 15 4',
  d2: 'M11.4626 7L10.0686 8.81238C9.91919 9.0066 10.0263 9.28605 10.2699 9.33776L11.7301 9.64772C11.9899 9.70285 12.0889 10.0122 11.9073 10.2011L10.1777 12',
  d3: 'M13.2887 18H6.51383L4 16L16.3921 15C16.0361 15.411 15.735 15.8712 15.5002 16.3693C15.0854 17.2491 14.878 17.689 14.6328 17.8445C14.3876 18 14.0213 18 13.2887 18Z',
  d4: 'M6.51562 18H13.2905C14.0231 18 14.3894 18 14.6346 17.8445C14.8798 17.689 15.0872 17.2491 15.502 16.3693C16.1788 14.9336 17.4054 13.8135 18.9148 13.2759C19.4518 13.0846 19.7204 12.9889 19.811 12.8143C19.9017 12.6397 19.8349 12.3991 19.7012 11.918L18.1709 6.4088C17.9202 5.50632 17.7949 5.05508 17.5243 4.72715C17.3274 4.4885 17.0778 4.29879 16.7951 4.17293C16.4068 4 15.9384 4 15.0018 4',
  d5: 'M16 15L4 16',
  d6: 'M15.0003 5.00238C15.4837 5.00238 15.7905 5.00305 16.0263 5.02108C16.4727 5.05521 16.7661 5.28867 16.9132 5.69522C16.9937 5.9176 17.0765 6.21303 17.2059 6.67882L18.7362 12.1881C18.7693 12.3072 18.6869 12.2973 18.5777 12.3362C17.4439 12.7401 16.4475 13.4253 15.6709 14.3083L3.61305 15.5024L3.5332 16.5894C3.5332 16.5894 4.61339 16.5024 5.11339 17.0024C5.62183 17.5109 6.04704 18.5894 6.04704 18.5894C6.17977 18.695 6.34437 18.7525 6.51398 18.7525L13.3201 18.7525C13.6596 18.7525 13.9635 18.7525 14.2116 18.73C14.7953 18.6769 15.2182 18.371 15.6144 17.9682C15.8635 17.715 16.1498 17.3394 16.405 16.7981C16.6006 16.3833 16.8514 15.9998 17.1482 15.6571C17.7071 15.012 18.4281 14.5126 19.2488 14.2203C19.4883 14.135 19.7307 14.0532 19.9604 13.9433C20.1538 13.8507 20.496 13.6647 20.6971 13.2774C20.8868 12.912 20.8618 12.5544 20.8269 12.3299C20.7956 12.1284 20.7313 11.8972 20.6736 11.6901L19.1237 6.1102C19.0063 5.68746 18.9035 5.31744 18.7939 5.01457C18.6767 4.69075 18.53 4.37896 18.2941 4.0931C17.9988 3.73512 17.6244 3.45056 17.2004 3.26178C16.5162 2.9571 15.7317 3.00238 15.0003 3.00238C14.448 3.00238 14.0003 3.45009 14.0003 4.00238C14.0003 4.55466 14.448 5.00238 15.0003 5.00238Z',
  d7: 'M19.75 17.3333C19.2437 17.3333 18.8333 17.7437 18.8333 18.25C18.8333 18.7563 19.2437 19.1667 19.75 19.1667C20.2563 19.1667 20.6667 18.7563 20.6667 18.25C20.6667 17.7437 20.2563 17.3333 19.75 17.3333ZM17 18.25C17 16.7312 18.2312 15.5 19.75 15.5C21.2688 15.5 22.5 16.7312 22.5 18.25C22.5 19.7688 21.2688 21 19.75 21C18.2312 21 17 19.7688 17 18.25Z',
  d8: 'M12.0714 6.2074C12.5092 6.54411 12.5911 7.17196 12.2544 7.60973L11.5091 8.57875L11.9369 8.66956C12.9319 8.88076 13.3753 10.1163 12.6273 10.8942L10.8977 12.6931C10.515 13.0913 9.88192 13.1037 9.4838 12.7209C9.08568 12.3381 9.07325 11.7051 9.45603 11.307L10.3499 10.3773L10.0614 10.316C9.12959 10.1182 8.65746 9.00574 9.27508 8.20275L10.6691 6.39037C11.0058 5.9526 11.6337 5.87068 12.0714 6.2074Z',
  d9: 'M3.75 17.3333C3.24374 17.3333 2.83333 17.7437 2.83333 18.25C2.83333 18.7563 3.24374 19.1667 3.75 19.1667C4.25626 19.1667 4.66667 18.7563 4.66667 18.25C4.66667 17.7437 4.25626 17.3333 3.75 17.3333ZM1 18.25C1 16.7312 2.23122 15.5 3.75 15.5C5.26878 15.5 6.5 16.7312 6.5 18.25C6.5 19.7688 5.26878 21 3.75 21C2.23122 21 1 19.7688 1 18.25Z',
  d10: 'M6.51383 18.0002L15 18C15 15.2386 17.2386 13 20 13L17 4H14M16 15L4 16.0002',
  d11: 'M10.999 6L8.99902 9.5H11.999L9.99902 13',
  d12: 'M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18C5 17.4477 4.55228 17 4 17ZM1 18C1 16.3431 2.34315 15 4 15C5.65685 15 7 16.3431 7 18C7 19.6569 5.65685 21 4 21C2.34315 21 1 19.6569 1 18Z',
  d13: 'M20 17C19.4477 17 19 17.4477 19 18C19 18.5523 19.4477 19 20 19C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17ZM17 18C17 16.3431 18.3431 15 20 15C21.6569 15 23 16.3431 23 18C23 19.6569 21.6569 21 20 21C18.3431 21 17 19.6569 17 18Z',
  d14: 'M16.2793 5H14.0001V3H17.0001C17.4305 3 17.8126 3.27543 17.9487 3.68377L20.9487 12.6838C21.0504 12.9887 20.9992 13.3239 20.8113 13.5847C20.6233 13.8455 20.3215 14 20.0001 14C17.7909 14 16.0001 15.7909 16.0001 18C16.0001 18.5523 15.5524 19 15.0001 19L6.51391 19.0002L3.91699 15.0037L15.4935 14.0388C16.3115 13.1088 17.4128 12.4342 18.6625 12.1496L16.2793 5Z',
  d15: 'M10.1313 5.50391L11.8678 6.49618L10.7227 8.50005H13.7227L10.8678 13.4962L9.1313 12.5039L10.2764 10.5H7.27637L10.1313 5.50391Z',
};

export const IconScooterElectricStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-electric-stroke-rounded IconScooterElectricStrokeRounded"
    >
      <circle 
        cx="4" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconScooterElectricDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-electric-duotone-rounded IconScooterElectricDuotoneRounded"
    >
      <circle 
        cx="20" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
      <circle 
        cx="4" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconScooterElectricTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-electric-twotone-rounded IconScooterElectricTwotoneRounded"
    >
      <circle 
        cx="4" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconScooterElectricSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-electric-solid-rounded IconScooterElectricSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconScooterElectricBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-electric-bulk-rounded IconScooterElectricBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconScooterElectricStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-electric-stroke-sharp IconScooterElectricStrokeSharp"
    >
      <circle 
        cx="4" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
      />
    </TheIconWrapper>
  );
};

export const IconScooterElectricSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-electric-solid-sharp IconScooterElectricSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfScooterElectric: TheIconSelfPack = {
  name: 'ScooterElectric',
  StrokeRounded: IconScooterElectricStrokeRounded,
  DuotoneRounded: IconScooterElectricDuotoneRounded,
  TwotoneRounded: IconScooterElectricTwotoneRounded,
  SolidRounded: IconScooterElectricSolidRounded,
  BulkRounded: IconScooterElectricBulkRounded,
  StrokeSharp: IconScooterElectricStrokeSharp,
  SolidSharp: IconScooterElectricSolidSharp,
};