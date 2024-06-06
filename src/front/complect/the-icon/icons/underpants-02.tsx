import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21.9359 12.8119L20.9746 8.18614C20.6575 6.66014 20.4989 5.89714 19.9475 5.44857C19.3962 5 18.6169 5 17.0583 5H6.94174C5.38314 5 4.60384 5 4.05247 5.44857C3.50109 5.89714 3.34253 6.66014 3.02541 8.18614L2.06412 12.8119C1.86911 13.7503 2.08272 14.7586 3.20996 14.9718C3.87746 15.0981 4.5865 14.9574 5.26274 15.0369C6.77164 15.2142 8.12412 16.0187 8.96376 17.2382C9.69923 18.5906 10.405 19 12 19C13.595 19 14.3008 18.5906 15.0362 17.2382C15.8759 16.0187 17.2284 15.2142 18.7373 15.0369C19.4135 14.9574 20.1225 15.0981 20.79 14.9718C21.9173 14.7586 22.1309 13.7503 21.9359 12.8119Z',
  d2: 'M16 16L13.8914 8M8 16L10.1086 8',
  d3: 'M3.5 8H20.5',
  d4: 'M12 19C13.595 19 14.3008 18.5906 15.0362 17.2382C15.3078 16.8437 15.6331 16.4927 16 16.1922L14 8H10.161L8 16C8.1425 16.1588 8.53476 16.6288 8.96376 17.2382C9.69923 18.5906 10.405 19 12 19Z',
  d5: 'M2.06412 12.8119L3.02541 8.18614L3.06413 8H10.161L8 16L7.94022 16.144C7.18369 15.543 6.25718 15.1538 5.26274 15.0369C4.5865 14.9574 3.87746 15.0981 3.20996 14.9718C2.08272 14.7586 1.86911 13.7503 2.06412 12.8119Z',
  d6: 'M21.9359 12.8119L20.9746 8.18614L20.9359 8H14L16 16.1922C16.7673 15.5639 17.7165 15.1569 18.7373 15.0369C19.4135 14.9574 20.1225 15.0981 20.79 14.9718C21.9173 14.7586 22.1309 13.7503 21.9359 12.8119Z',
  d7: 'M17.1037 4.25H17.1037H17.1037H6.89625H6.89622H6.89619C6.15567 4.24998 5.53263 4.24996 5.02833 4.31162C4.49331 4.37704 4.00534 4.52004 3.57912 4.86679C3.1529 5.21354 2.91361 5.66221 2.7407 6.17273C2.70325 6.2833 2.66771 6.40067 2.63336 6.52467C2.54309 6.85052 2.49796 7.01344 2.588 7.13182C2.67804 7.2502 2.85321 7.2502 3.20354 7.2502H10.0901C10.1016 7.24993 10.1131 7.24993 10.1246 7.2502H13.8734C13.885 7.24993 13.8965 7.24993 13.9079 7.2502H20.7964C21.1467 7.2502 21.3219 7.2502 21.4119 7.13182C21.502 7.01344 21.4568 6.85052 21.3666 6.52467C21.3322 6.40067 21.2967 6.2833 21.2592 6.17273C21.0863 5.66221 20.847 5.21354 20.4208 4.86679C19.9946 4.52004 19.5066 4.37704 18.9716 4.31162C18.4673 4.24996 17.8443 4.24998 17.1037 4.25ZM21.9571 9.22812C21.9095 8.99922 21.8858 8.88477 21.8031 8.81749C21.7203 8.7502 21.6035 8.7502 21.3697 8.7502H15.7238C15.3511 8.7502 15.1648 8.7502 15.0748 8.87232C14.9849 8.99444 15.0402 9.17239 15.1509 9.52831L17.0322 15.5804C17.1274 15.8867 17.175 16.0398 17.2872 16.0973C17.3993 16.1548 17.5679 16.0987 17.9053 15.9864C18.2004 15.8881 18.5083 15.819 18.8248 15.7818C19.0726 15.7526 19.4211 15.7624 19.7446 15.7716C19.7454 15.7716 19.7459 15.7716 19.7464 15.7716C19.747 15.7716 19.7473 15.7716 19.7478 15.7717C19.7851 15.7724 20.5182 15.7866 20.9294 15.7088C21.7319 15.557 22.2771 15.0909 22.548 14.4595C22.7996 13.8733 22.786 13.2167 22.6702 12.6593L21.9571 9.22812ZM15.7649 17.5098C15.8721 17.3681 15.9257 17.2973 15.9382 17.2258C15.9507 17.1544 15.9269 17.0777 15.8792 16.9245L13.4693 9.17209C13.4061 8.96873 13.3745 8.86705 13.2952 8.80863C13.2158 8.7502 13.1093 8.7502 12.8964 8.7502H11.1017C10.8887 8.7502 10.7822 8.7502 10.7029 8.80863C10.6235 8.86705 10.5919 8.96873 10.5287 9.17209L8.11937 16.9227C8.0717 17.0761 8.04787 17.1527 8.06038 17.2242C8.07289 17.2957 8.12654 17.3666 8.23384 17.5083C8.26492 17.5494 8.29529 17.591 8.32491 17.6332C8.7164 18.3452 9.15451 18.9102 9.78311 19.275C10.4186 19.6437 11.1499 19.75 12 19.75C12.8501 19.75 13.5814 19.6437 14.2168 19.275C14.8454 18.9102 15.2835 18.3452 15.675 17.6333C15.7043 17.5915 15.7343 17.5504 15.7649 17.5098ZM6.09322 15.9859C6.43044 16.098 6.59905 16.1541 6.71115 16.0966C6.82325 16.0391 6.87083 15.886 6.96599 15.5799L8.84717 9.52831C8.95781 9.17239 9.01313 8.99444 8.92321 8.87232C8.83329 8.7502 8.64693 8.7502 8.27421 8.7502H2.63027C2.39648 8.7502 2.27958 8.7502 2.19688 8.81749C2.11417 8.88477 2.09039 8.99922 2.04282 9.22812L1.32977 12.6593C1.21394 13.2167 1.20037 13.8733 1.45194 14.4595C1.72285 15.0909 2.26804 15.557 3.07052 15.7088C3.49249 15.7886 3.91038 15.781 4.25332 15.7716C4.25346 15.7716 4.25353 15.7716 4.25358 15.7716C4.25364 15.7716 4.25361 15.7716 4.25362 15.7716C4.25936 15.7715 4.92798 15.7527 5.17516 15.7818C5.49112 15.8189 5.79856 15.8879 6.09322 15.9859Z',
  d8: 'M17.1037 4.25C17.8442 4.24998 18.4673 4.24996 18.9716 4.31162C19.5066 4.37704 19.9946 4.52004 20.4208 4.86679C20.847 5.21354 21.0863 5.66221 21.2592 6.17273C21.4222 6.65394 21.549 7.26399 21.6996 7.98905L22.6702 12.6593C22.786 13.2167 22.7996 13.8733 22.548 14.4595C22.2771 15.0909 21.7319 15.5569 20.9294 15.7088C20.5073 15.7886 19.7463 15.7716 19.7463 15.7716C19.4224 15.7624 19.073 15.7526 18.8248 15.7818C17.5367 15.9332 16.3901 16.6137 15.675 17.6333C15.2835 18.3452 14.8454 18.9102 14.2168 19.275C13.5814 19.6437 12.8501 19.75 12 19.75C11.1499 19.75 10.4186 19.6437 9.78311 19.275C9.15451 18.9102 8.7164 18.3452 8.32491 17.6332C7.60979 16.6137 6.46323 15.9332 5.17516 15.7818C4.92692 15.7526 4.25359 15.7716 4.25359 15.7716C3.9106 15.781 3.4926 15.7886 3.07052 15.7088C2.26804 15.5569 1.72285 15.0909 1.45194 14.4595C1.20037 13.8733 1.21394 13.2167 1.32977 12.6593L2.30031 7.98904C2.45096 7.26398 2.57772 6.65394 2.7407 6.17273C2.91361 5.66221 3.1529 5.21354 3.57912 4.86679C4.00534 4.52004 4.49331 4.37704 5.02833 4.31162C5.53263 4.24996 6.15569 4.24998 6.89622 4.25H6.89625H17.1037H17.1037Z',
  d9: 'M2.14209 8.7502L2.30027 7.98904L2.30027 7.98904C2.35459 7.72759 2.40581 7.48109 2.45673 7.2502H10.092C10.1035 7.24993 10.115 7.24993 10.1265 7.2502H13.8753C13.8869 7.24993 13.8984 7.24993 13.9098 7.2502H21.5431C21.594 7.48109 21.6452 7.72759 21.6996 7.98905L21.8577 8.7502H14.9109L17.2468 16.2647C16.7671 16.5136 16.3375 16.846 15.9812 17.2464L13.3401 8.7502H10.6618L8.02014 17.248C7.66402 16.8474 7.23441 16.5148 6.75475 16.2656L9.09096 8.7502H2.14209Z',
  d10: 'M20.0001 5H4.00012L2.00215 14.9899C2.00104 14.9954 2.00474 15.0008 2.01031 15.0017L8.00012 16L9.99716 18.9955C9.99901 18.9983 10.0021 19 10.0055 19H13.9948C13.9981 19 14.0012 18.9983 14.0031 18.9955L16.0001 16L21.9899 15.0017C21.9955 15.0008 21.9992 14.9954 21.9981 14.9899L20.0001 5Z',
  d11: 'M22.6173 15.426C22.7326 15.2589 22.7753 15.0521 22.7354 14.8529L21.5148 8.74996H14.91L17.3311 16.5385L22.1233 15.7398C22.3236 15.7064 22.5019 15.5932 22.6173 15.426Z',
  d12: 'M16.009 17.3386L13.3392 8.74996H10.6608L7.991 17.3386L9.37597 19.416C9.51507 19.6247 9.74924 19.75 10 19.75H14C14.2508 19.75 14.4849 19.6247 14.624 19.416L16.009 17.3386Z',
  d13: 'M6.6689 16.5385L1.8767 15.7398C1.67636 15.7064 1.49813 15.5932 1.38275 15.426C1.26738 15.2589 1.22474 15.0521 1.26457 14.8529L2.48516 8.74996H9.09003L6.6689 16.5385Z',
  d14: 'M2.78516 7.24996H10.0911C10.1026 7.24969 10.1141 7.24969 10.1256 7.24996H13.8744C13.8859 7.24969 13.8974 7.24969 13.9089 7.24996H21.2148L20.6149 4.25H3.38515L2.78516 7.24996Z',
};

export const IconUnderpants02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="underpants-02-stroke-rounded IconUnderpants02StrokeRounded"
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

export const IconUnderpants02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="underpants-02-duotone-rounded IconUnderpants02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconUnderpants02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="underpants-02-twotone-rounded IconUnderpants02TwotoneRounded"
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

export const IconUnderpants02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="underpants-02-solid-rounded IconUnderpants02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUnderpants02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="underpants-02-bulk-rounded IconUnderpants02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconUnderpants02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="underpants-02-stroke-sharp IconUnderpants02StrokeSharp"
    >
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
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUnderpants02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="underpants-02-solid-sharp IconUnderpants02SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUnderpants02: TheIconSelfPack = {
  name: 'Underpants02',
  StrokeRounded: IconUnderpants02StrokeRounded,
  DuotoneRounded: IconUnderpants02DuotoneRounded,
  TwotoneRounded: IconUnderpants02TwotoneRounded,
  SolidRounded: IconUnderpants02SolidRounded,
  BulkRounded: IconUnderpants02BulkRounded,
  StrokeSharp: IconUnderpants02StrokeSharp,
  SolidSharp: IconUnderpants02SolidSharp,
};