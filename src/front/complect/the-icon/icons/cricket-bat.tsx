import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 14.4733C7 14.9338 7 15.1641 7.08576 15.3711C7.17152 15.5782 7.33434 15.741 7.65998 16.0666L7.93335 16.34C8.25899 16.6657 8.42181 16.8285 8.62886 16.9142C8.83591 17 9.06617 17 9.52669 17H10.38C11.0708 17 11.4162 17 11.7267 16.8714C12.0373 16.7427 12.2815 16.4985 12.77 16.01L20.5434 8.23666C21.2858 7.49425 21.657 7.12305 21.8285 6.70896C22.0572 6.15683 22.0572 5.53647 21.8285 4.98435C21.657 4.57025 21.2858 4.19905 20.5434 3.45665C19.8009 2.71425 19.4297 2.34305 19.0157 2.17152C18.4635 1.94283 17.8432 1.94283 17.291 2.17152C16.8769 2.34305 16.5057 2.71425 15.7633 3.45665L7.98997 11.23C7.50151 11.7185 7.25728 11.9627 7.12864 12.2733C7 12.5838 7 12.9292 7 13.62V14.4733Z',
  d2: 'M6.92517 15L2.42971 19.4955C1.85676 20.0684 1.85676 20.9973 2.42971 21.5703C3.00266 22.1432 3.93159 22.1432 4.50454 21.5703L9 17.0748',
  d3: 'M6.5 20L4 17.5',
  d4: 'M2.42971 19.4955L6.92517 15L9 17.0748L4.50454 21.5703C3.93159 22.1432 3.00266 22.1432 2.42971 21.5703C1.85676 20.9973 1.85676 20.0684 2.42971 19.4955Z',
  d5: 'M7 14.4733C7 14.9338 7 15.1641 7.08576 15.3711C7.17152 15.5782 7.33434 15.741 7.65998 16.0666L7.93335 16.34C8.25899 16.6657 8.42181 16.8285 8.62886 16.9142C8.83591 17 9.06617 17 9.52669 17H10.38C11.0708 17 11.4162 17 11.7267 16.8714C12.0373 16.7427 12.2815 16.4985 12.77 16.01L20.5434 8.23666C21.2858 7.49425 21.657 7.12305 21.8285 6.70896C22.0572 6.15683 22.0572 5.53647 21.8285 4.98435C21.657 4.57025 21.2858 4.19905 20.5434 3.45665C19.801 2.71425 19.4297 2.34305 19.0157 2.17152C18.4635 1.94283 17.8432 1.94283 17.291 2.17152C16.8769 2.34305 16.5057 2.71425 15.7633 3.45665L7.98997 11.23C7.50151 11.7185 7.25729 11.9627 7.12864 12.2733C7 12.5838 7 12.9292 7 13.62V14.4733Z',
  d6: 'M7.4555 14.4697C7.74839 14.7626 7.74839 15.2374 7.4555 15.5303L5.27325 17.7126L6.28741 18.7268L8.46967 16.5445C8.76256 16.2516 9.23744 16.2516 9.53033 16.5445C9.82322 16.8374 9.82322 17.3123 9.53033 17.6052L5.03487 22.1006C4.16903 22.9665 2.76522 22.9665 1.89938 22.1006C1.03354 21.2348 1.03354 19.831 1.89938 18.9651L6.39484 14.4697C6.68774 14.1768 7.16261 14.1768 7.4555 14.4697ZM5.22675 19.7874L4.21259 18.7732L2.96004 20.0258C2.67999 20.3058 2.67999 20.7599 2.96004 21.04C3.2401 21.32 3.69415 21.32 3.97421 21.04L5.22675 19.7874Z',
  d7: 'M19.3027 1.47861C18.5668 1.1738 17.7399 1.1738 17.004 1.47861C16.6904 1.60854 16.4235 1.80261 16.1573 2.03481C15.9005 2.25877 15.6069 2.55239 15.2512 2.90815L7.38099 10.7782C6.96996 11.1882 6.62292 11.5344 6.43573 11.9863C6.24855 12.4382 6.24917 12.9283 6.24991 13.5089L6.24986 14.5604C6.24897 14.9318 6.24806 15.3086 6.39285 15.6582C6.53765 16.0077 6.80473 16.2735 7.06797 16.5355L7.46451 16.932C7.72649 17.1953 7.99228 17.4624 8.34185 17.6071C8.69141 17.7519 9.06821 17.751 9.4396 17.7501L10.4911 17.7501C11.0717 17.7508 11.5618 17.7514 12.0137 17.5643C12.4656 17.3771 12.8118 17.03 13.2218 16.619L21.0919 8.74881C21.4476 8.39306 21.7412 8.09945 21.9652 7.84269C22.1974 7.57649 22.3915 7.30964 22.5214 6.99597C22.8262 6.26007 22.8262 5.43323 22.5214 4.69733C22.3915 4.38367 22.1974 4.11682 21.9652 3.85061C21.7412 3.59385 21.4113 3.2639 21.0555 2.90815L21.0555 2.90814C20.6998 2.55238 20.4061 2.25877 20.1494 2.03481C19.8832 1.80261 19.6163 1.60854 19.3027 1.47861Z',
  d8: 'M21.75 18.5C21.75 16.7051 20.2949 15.25 18.5 15.25C16.7051 15.25 15.25 16.7051 15.25 18.5C15.25 20.2949 16.7051 21.75 18.5 21.75C20.2949 21.75 21.75 20.2949 21.75 18.5Z',
  d9: 'M7.77876 17.2354C7.94745 17.3856 8.12914 17.519 8.34185 17.6071C8.67437 17.7449 9.03153 17.7508 9.38523 17.7502L5.03487 22.1006C4.16903 22.9664 2.76522 22.9664 1.89938 22.1006C1.03354 21.2348 1.03354 19.831 1.89938 18.9651L6.24975 14.6147C6.24922 14.9685 6.25512 15.3256 6.39285 15.6581C6.48096 15.8708 6.61435 16.0525 6.76459 16.2212L5.27325 17.7126L6.28741 18.7267L7.77876 17.2354ZM4.21259 18.7732L5.22675 19.7874L3.97421 21.0399C3.69415 21.32 3.2401 21.32 2.96004 21.0399C2.67999 20.7599 2.67999 20.3058 2.96004 20.0258L4.21259 18.7732Z',
  d10: 'M22 7L17 2L7 12V15L9 17H11.5L22 7Z',
  d11: 'M16.4692 1.46967C16.7621 1.17678 17.237 1.17678 17.5299 1.46967L22.5299 6.46967C22.6728 6.61256 22.752 6.80708 22.7495 7.00914C22.747 7.21121 22.6631 7.40374 22.5168 7.5431L12.0168 17.5431C11.8774 17.6759 11.6922 17.75 11.4996 17.75H9.38603L5.03536 22.1007C4.16952 22.9665 2.76571 22.9665 1.89987 22.1007C1.03403 21.2348 1.03403 19.831 1.89987 18.9652L6.24957 14.6155V12C6.24957 11.8011 6.32859 11.6103 6.46924 11.4697L16.4692 1.46967ZM6.96264 16.0237L7.97681 17.0379L6.2879 18.7268L5.27374 17.7126L6.96264 16.0237ZM4.21307 18.7733L2.96053 20.0258C2.68047 20.3059 2.68047 20.76 2.96053 21.04C3.24058 21.3201 3.69464 21.3201 3.9747 21.04L5.22724 19.7875L4.21307 18.7733Z',
  d12: 'M21.7487 18.5C21.7487 16.7051 20.2936 15.25 18.4987 15.25C16.7037 15.25 15.2487 16.7051 15.2487 18.5C15.2487 20.2949 16.7037 21.75 18.4987 21.75C20.2936 21.75 21.7487 20.2949 21.7487 18.5Z',
};

export const IconCricketBatStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cricket-bat-stroke-rounded IconCricketBatStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="2.5" 
        cy="2.5" 
        r="2.5" 
        transform="matrix(1 0 0 1 21 16)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconCricketBatDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cricket-bat-duotone-rounded IconCricketBatDuotoneRounded"
    >
      <path 
        d={d.d4} 
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="2.5" 
        cy="2.5" 
        r="2.5" 
        transform="matrix(1 0 0 1 21 16)" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="2.5" 
        cy="2.5" 
        r="2.5" 
        transform="matrix(1 0 0 1 21 16)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconCricketBatTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cricket-bat-twotone-rounded IconCricketBatTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="2.5" 
        cy="2.5" 
        r="2.5" 
        transform="matrix(1 0 0 1 21 16)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconCricketBatSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cricket-bat-solid-rounded IconCricketBatSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconCricketBatBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cricket-bat-bulk-rounded IconCricketBatBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCricketBatStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cricket-bat-stroke-sharp IconCricketBatStrokeSharp"
    >
      <path 
        d={d.d10} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="2.5" 
        cy="2.5" 
        r="2.5" 
        transform="matrix(1 0 0 1 21 16)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconCricketBatSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cricket-bat-solid-sharp IconCricketBatSolidSharp"
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

export const iconPackOfCricketBat: TheIconSelfPack = {
  name: 'CricketBat',
  StrokeRounded: IconCricketBatStrokeRounded,
  DuotoneRounded: IconCricketBatDuotoneRounded,
  TwotoneRounded: IconCricketBatTwotoneRounded,
  SolidRounded: IconCricketBatSolidRounded,
  BulkRounded: IconCricketBatBulkRounded,
  StrokeSharp: IconCricketBatStrokeSharp,
  SolidSharp: IconCricketBatSolidSharp,
};