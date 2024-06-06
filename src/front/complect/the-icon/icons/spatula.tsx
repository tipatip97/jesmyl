import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.9883 2.3804L17.7472 2.93078C19.0221 3.85525 20.1429 4.97492 21.0683 6.24847L21.6192 7.00668C22.1959 7.80028 22.1094 8.89493 21.4153 9.58834L16.8845 14.1145C16.41 14.5885 15.7289 14.7927 15.0716 14.6579L13.0341 14.2402C12.3768 14.1054 11.6957 14.3095 11.2212 14.7835L4.64801 21.3501C4.25619 21.7598 3.37487 22.4818 2.42256 21.5305C1.5593 20.6681 2.22016 19.7259 2.63037 19.3344L9.20354 12.7679C9.67802 12.2939 9.88238 11.6135 9.74747 10.9568L9.32928 8.92141C9.19437 8.26476 9.39873 7.58432 9.87321 7.11031L14.404 2.58413C15.0981 1.89071 16.1939 1.80433 16.9883 2.3804Z',
  d2: 'M15.2207 10.686L17.3751 8.53168',
  d3: 'M13.375 8.84143L15.5294 6.68707',
  d4: 'M10.5171 15.4498L4.3668 21.5943C3.82536 22.1352 2.94752 22.1352 2.40608 21.5943C1.86464 21.0534 1.86464 20.1763 2.40608 19.6354L8.55637 13.4909C9.16034 12.8875 9.46233 12.5858 9.62897 12.2178C9.71998 12.0169 9.78045 11.8035 9.80838 11.5847C9.85952 11.184 9.76064 10.769 9.56288 9.93881C9.36512 9.10866 9.26623 8.69356 9.31737 8.29293C9.3453 8.07413 9.40577 7.86072 9.49678 7.65976C9.66342 7.2918 9.96541 6.99009 10.5694 6.38668L13.3197 3.63892C14.3512 2.60846 14.8669 2.09322 15.6504 2.01231C16.4339 1.93139 16.9246 2.25217 17.9061 2.89373C19.1762 3.72397 20.206 4.76202 21.0568 6.05587C21.7314 7.08176 22.0687 7.59471 21.9883 8.37872C21.9079 9.16273 21.38 9.6902 20.324 10.7452L17.628 13.4387C17.024 14.0421 16.722 14.3438 16.3537 14.5103C16.1526 14.6012 15.9389 14.6616 15.7199 14.6895C15.3189 14.7406 14.9035 14.6418 14.0725 14.4442C13.2416 14.2466 12.8261 14.1479 12.4251 14.199C12.2061 14.2269 11.9925 14.2873 11.7914 14.3782C11.4231 14.5447 11.1211 14.8464 10.5171 15.4498Z',
  d5: 'M15.54 6.64453L13.3018 8.7865M17.3931 8.49768L15.1549 10.6637',
  d6: 'M15.2207 10.6861L17.3751 8.53174',
  d7: 'M13.375 8.84137L15.5294 6.68701',
  d8: 'M21.7602 5.75993C20.8549 4.38331 19.5701 3.085 18.2108 2.1964C17.3281 1.61819 16.6246 1.15734 15.5733 1.26591C15.0117 1.32391 14.5606 1.54365 14.1271 1.86988C13.7289 2.16949 13.3104 2.58768 12.8238 3.07381L12.8238 3.07387L12.8238 3.07389L9.95358 5.9413C9.43318 6.46043 9.03782 6.85483 8.81358 7.34999C8.69175 7.61899 8.6108 7.90467 8.57341 8.19758C8.50457 8.7368 8.63437 9.27985 8.80517 9.99444C9.01644 10.8813 9.09414 11.2565 9.06442 11.4893C9.04595 11.634 9.00596 11.7751 8.94576 11.9081C8.84889 12.122 8.67148 12.3154 8.02628 12.96L1.876 19.1045C1.04133 19.9384 1.04133 21.2906 1.876 22.1245C2.71027 22.958 4.06261 22.958 4.89688 22.1245L11.0472 15.98C11.6923 15.3355 11.8859 15.1581 12.1003 15.0613C12.2335 15.0011 12.3749 14.9611 12.5199 14.9426C12.7534 14.9128 13.1292 14.9905 14.0167 15.2016L14.0168 15.2016L14.0168 15.2016C14.7322 15.3723 15.2754 15.5018 15.8147 15.4331C16.1077 15.3958 16.3935 15.315 16.6626 15.1933C17.1581 14.9694 17.5528 14.5744 18.0725 14.0544L20.8881 11.2414C21.3871 10.7429 21.8143 10.3162 22.1198 9.91284C22.4513 9.47537 22.6764 9.02029 22.7344 8.45484C22.8424 7.40183 22.3626 6.67399 21.7602 5.75993ZM15.78 6.93655C16.0729 6.64365 16.0729 6.16878 15.78 5.87589C15.4871 5.58299 15.0122 5.58299 14.7194 5.87589L12.5654 8.02987C12.2725 8.32276 12.2725 8.79763 12.5654 9.09053C12.8583 9.38342 13.3331 9.38342 13.626 9.09053L15.78 6.93655ZM18.1285 9.28387C18.4214 8.99098 18.4214 8.51611 18.1285 8.22321C17.8356 7.93032 17.3607 7.93032 17.0678 8.22321L14.9138 10.3772C14.621 10.6701 14.621 11.145 14.9138 11.4378C15.2067 11.7307 15.6816 11.7307 15.9745 11.4378L18.1285 9.28387Z',
  d9: 'M18.2108 2.19644C19.5701 3.08503 20.8549 4.38334 21.7602 5.75997C22.3626 6.67402 22.8424 7.40187 22.7344 8.45487C22.6764 9.02032 22.4513 9.4754 22.1198 9.91288C21.8143 10.3162 21.3871 10.743 20.8881 11.2414L18.0725 14.0545C17.5528 14.5745 17.1581 14.9694 16.6626 15.1933C16.3935 15.315 16.1077 15.3958 15.8147 15.4332C15.2754 15.5019 14.7322 15.3723 14.0168 15.2016L14.0167 15.2016C13.1292 14.9906 12.7534 14.9129 12.5199 14.9426C12.3749 14.9611 12.2335 15.0011 12.1003 15.0613C11.8859 15.1582 11.6923 15.3355 11.0472 15.98L4.89688 22.1245C4.06261 22.958 2.71027 22.958 1.876 22.1245C1.04133 21.2907 1.04133 19.9384 1.876 19.1045L8.02628 12.96C8.67148 12.3154 8.84889 12.122 8.94576 11.9081C9.00596 11.7752 9.04595 11.634 9.06442 11.4894C9.09414 11.2566 9.01644 10.8813 8.80517 9.99447C8.63437 9.27988 8.50457 8.73684 8.57341 8.19761C8.6108 7.9047 8.69175 7.61902 8.81358 7.35002C9.03782 6.85486 9.43318 6.46046 9.95358 5.94133L12.8238 3.07392L12.8238 3.0739C13.3103 2.58774 13.7289 2.16953 14.1271 1.86991C14.5606 1.54368 15.0117 1.32394 15.5733 1.26594C16.6246 1.15737 17.3281 1.61822 18.2108 2.19644Z',
  d10: 'M15.78 5.87592C16.0729 6.16881 16.0729 6.64369 15.78 6.93658L13.626 9.09056C13.3331 9.38345 12.8583 9.38345 12.5654 9.09056C12.2725 8.79767 12.2725 8.32279 12.5654 8.0299L14.7194 5.87592C15.0122 5.58303 15.4871 5.58303 15.78 5.87592ZM18.1285 8.22325C18.4214 8.51614 18.4214 8.99101 18.1285 9.28391L15.9745 11.4379C15.6816 11.7308 15.2067 11.7308 14.9138 11.4379C14.621 11.145 14.621 10.6701 14.9138 10.3772L17.0678 8.22324C17.3607 7.93035 17.8356 7.93035 18.1285 8.22325Z',
  d11: 'M18.0341 8.00868L15.0277 11.0129M16.0298 6.00586L13.0234 9.01009',
  d12: 'M9.05407 12.9802L2.41144 19.6741C1.8675 20.2205 1.87267 21.1049 2.42295 21.6449C2.9675 22.1793 3.84136 22.1751 4.38067 21.6354L10.687 15.3378L12.003 14.0093H16.0295L21.9736 8.05944C22.0128 8.02029 22.0127 7.95685 21.9735 7.91778L16.1132 2.07709C16.0741 2.03814 16.0109 2.0381 15.9717 2.077L10.0097 8.00474V12.009L9.05407 12.9802Z',
  d13: 'M16.5303 1.46967C16.2374 1.17678 15.7626 1.17678 15.4697 1.46967L9.25 7.68934V11.6905L1.876 19.1048L1.87499 19.1058C1.04133 19.9398 1.04167 21.2913 1.876 22.1249C2.71 22.9581 4.06171 22.9584 4.89605 22.1257L4.89688 22.1249L12.3095 14.75H16.3107L22.5303 8.53033C22.8232 8.23744 22.8232 7.76256 22.5303 7.46967L16.5303 1.46967ZM15.4688 5.46973L12.4688 8.46973L13.5294 9.53039L16.5294 6.53039L15.4688 5.46973ZM17.4688 7.46973L14.4688 10.4697L15.5294 11.5304L18.5294 8.53039L17.4688 7.46973Z',
};

export const IconSpatulaStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spatula-stroke-rounded IconSpatulaStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpatulaDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spatula-duotone-rounded IconSpatulaDuotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpatulaTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spatula-twotone-rounded IconSpatulaTwotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpatulaSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spatula-solid-rounded IconSpatulaSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpatulaBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spatula-bulk-rounded IconSpatulaBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSpatulaStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spatula-stroke-sharp IconSpatulaStrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconSpatulaSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spatula-solid-sharp IconSpatulaSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSpatula: TheIconSelfPack = {
  name: 'Spatula',
  StrokeRounded: IconSpatulaStrokeRounded,
  DuotoneRounded: IconSpatulaDuotoneRounded,
  TwotoneRounded: IconSpatulaTwotoneRounded,
  SolidRounded: IconSpatulaSolidRounded,
  BulkRounded: IconSpatulaBulkRounded,
  StrokeSharp: IconSpatulaStrokeSharp,
  SolidSharp: IconSpatulaSolidSharp,
};