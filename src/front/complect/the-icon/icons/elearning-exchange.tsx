import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.45898 9C3.7364 4.94289 7.53608 2 12.0248 2C17.223 2 21.4971 5.94668 22 11L20 10.5929',
  d2: 'M21.541 15C20.2636 19.0571 16.4639 22 11.9752 22C6.77707 22 2.50297 18.0533 2 13L4.00005 13.4071',
  d3: 'M9.00198 13.5279V15.5197C9.00198 15.8464 9.15779 16.1573 9.43401 16.3301C10.2776 16.8578 10.9193 17.0125 12.0054 17.046C13.0061 17.0729 13.6336 16.9156 14.5679 16.3316C14.8481 16.1564 15.0089 15.8427 15.0089 15.5113V13.5279M17.0112 11.0149V14.0304M7.04924 10.8436C7.41086 10.0796 9.65363 8.74957 11.7009 8.09253C11.8984 8.02914 12.1106 8.03542 12.3053 8.10674C14.1154 8.76943 16.1288 9.77168 16.8597 10.5853C17.2414 11.01 16.8682 11.552 16.4068 11.8874C15.4704 12.5682 14.4364 13.0978 12.3491 13.8996C12.1282 13.9844 11.8828 13.9873 11.6608 13.9049C9.52012 13.1101 7.51902 12.0842 7.06587 11.1817C7.01245 11.0752 6.9983 10.9512 7.04924 10.8436Z',
  d4: 'M12.125 22C17.6478 22 22.125 17.5228 22.125 12C22.125 6.47715 17.6478 2 12.125 2C6.60215 2 2.125 6.47715 2.125 12C2.125 17.5228 6.60215 22 12.125 22ZM9.33654 9.21978L10.5224 8.60989C11.313 8.2033 11.7083 8 12.125 8C12.5417 8 12.937 8.2033 13.7276 8.60989L14.9135 9.21978C15.8588 9.70597 16.5011 10.0363 16.8403 10.3802C17.1524 10.6967 16.9279 11.1647 16.5869 11.4497L15.125 12.6713V15.4949C15.125 16.1446 14.058 17 12.125 17C10.192 17 9.12499 16.1446 9.12499 15.4949V12.6713L7.66313 11.4497C7.32209 11.1647 7.0976 10.6967 7.40969 10.3802C7.74887 10.0363 8.39116 9.70598 9.33654 9.21978Z',
  d5: 'M2.58398 9C3.8614 4.94289 7.66108 2 12.1498 2C17.348 2 21.6221 5.94668 22.125 11L20.125 10.5929',
  d6: 'M9.1094 13.4791V15.4709C9.1094 15.7976 9.26521 16.1085 9.54143 16.2813C10.385 16.809 11.0267 16.9637 12.1128 16.9972C13.1135 17.0241 13.741 16.8668 14.6753 16.2828C14.9555 16.1076 15.1163 15.7939 15.1163 15.4625V13.4791M17.1186 10.9661V13.9816M7.15666 10.7948C7.51828 10.0308 9.76105 8.70074 11.8083 8.0437C12.0058 7.98031 12.218 7.98659 12.4127 8.05791C14.2228 8.7206 16.2362 9.72285 16.9671 10.5365C17.3488 10.9612 16.9756 11.5032 16.5142 11.8386C15.5778 12.5194 14.5438 13.049 12.4565 13.8508C12.2356 13.9356 11.9902 13.9385 11.7682 13.8561C9.62754 13.0613 7.62644 12.0354 7.17329 11.1329C7.11987 11.0264 7.10572 10.9024 7.15666 10.7948Z',
  d7: 'M21.666 15C20.3886 19.0571 16.5889 22 12.1002 22C6.90207 22 2.62797 18.0533 2.125 13L4.12505 13.4071',
  d8: 'M8.9844 13.479V15.4709C8.9844 15.7976 9.14021 16.1085 9.41643 16.2813C10.2601 16.809 10.9017 16.9637 11.9879 16.9971C12.9885 17.0241 13.616 16.8668 14.5503 16.2828C14.8305 16.1076 14.9913 15.7938 14.9913 15.4624V13.479M16.9936 10.9661V13.9816M7.03166 10.7948C7.39328 10.0308 9.63605 8.70074 11.6833 8.0437C11.8808 7.98031 12.093 7.9866 12.2877 8.05791C14.0978 8.7206 16.1112 9.72285 16.8422 10.5365C17.2238 10.9612 16.8506 11.5032 16.3892 11.8386C15.4529 12.5194 14.4189 13.049 12.3316 13.8507C12.1106 13.9356 11.8652 13.9385 11.6433 13.8561C9.50254 13.0613 7.50144 12.0354 7.0483 11.1329C6.99488 11.0264 6.98072 10.9024 7.03166 10.7948Z',
  d9: 'M16.25 12.8557V14C16.25 14.4142 16.5858 14.75 17 14.75C17.4142 14.75 17.75 14.4142 17.75 14V11C17.75 10.3211 17.3305 9.87047 16.8902 9.54806C16.4735 9.24285 15.8766 8.93597 15.1871 8.58142L15.1315 8.55281L13.9184 7.92895L13.9184 7.92895C13.5463 7.73756 13.2246 7.5721 12.9438 7.45781C12.6434 7.33554 12.3401 7.25 12 7.25C11.6599 7.25 11.3566 7.33554 11.0562 7.45781C10.7754 7.5721 10.4537 7.73756 10.0816 7.92895L10.0816 7.92895L10.0816 7.92895L10.0544 7.94292L8.86853 8.55281L8.8129 8.58142C8.12337 8.93597 7.52655 9.24285 7.10977 9.54806C6.66949 9.87047 6.25 10.3211 6.25 11C6.25 11.6789 6.66949 12.1295 7.10977 12.4519C7.40822 12.6705 7.79898 12.8899 8.25 13.1271V15.4954C8.25 16.2175 8.79925 16.7924 9.39865 17.1403C10.0424 17.5139 10.9279 17.7505 12 17.7505C13.0721 17.7505 13.9576 17.5139 14.6014 17.1403C15.2008 16.7924 15.75 16.2175 15.75 15.4954V13.1271C15.9265 13.0342 16.0939 12.9441 16.25 12.8557ZM13.9184 14.0711L14.25 13.9005V15.4807C14.2499 15.4797 14.2498 15.4792 14.2496 15.4791C14.249 15.479 14.2478 15.4813 14.2455 15.4859C14.2296 15.5184 14.1587 15.6629 13.8484 15.843C13.4754 16.0594 12.8609 16.2505 12 16.2505C11.1391 16.2505 10.5246 16.0594 10.1516 15.843C9.84131 15.6629 9.77042 15.5184 9.75447 15.4859C9.75219 15.4813 9.75104 15.479 9.75046 15.4791C9.75022 15.4792 9.75008 15.4797 9.75 15.4807V13.9005L10.0816 14.0711C10.4537 14.2624 10.7754 14.4279 11.0562 14.5422C11.3566 14.6645 11.6599 14.75 12 14.75C12.3401 14.75 12.6434 14.6645 12.9438 14.5422C13.2246 14.4279 13.5463 14.2624 13.9184 14.0711L13.9184 14.0711Z',
  d10: 'M12.0251 3C7.98399 3 4.56274 5.64901 3.41309 9.30032C3.24722 9.82711 2.68572 10.1197 2.15893 9.95384C1.63214 9.78797 1.33955 9.22647 1.50542 8.69968C2.9106 4.23678 7.08869 1 12.0251 1C17.7403 1 22.4418 5.33935 22.9954 10.901C23.0269 11.217 22.9063 11.5292 22.6706 11.7421C22.4349 11.955 22.1121 12.0433 21.8009 11.9799L19.8008 11.5728C19.2596 11.4627 18.9102 10.9347 19.0204 10.3935C19.1305 9.85231 19.6585 9.50288 20.1997 9.61303L20.7597 9.727C19.7504 5.85862 16.2233 3 12.0251 3Z',
  d11: 'M11.9749 21C16.016 21 19.4373 18.351 20.5869 14.6997C20.7528 14.1729 21.3143 13.8803 21.8411 14.0462C22.3679 14.212 22.6605 14.7735 22.4946 15.3003C21.0894 19.7632 16.9113 23 11.9749 23C6.2597 23 1.55816 18.6606 1.0046 13.099C0.973144 12.783 1.09369 12.4708 1.32939 12.2579C1.56508 12.045 1.88789 11.9567 2.19912 12.0201L4.19917 12.4271C4.74036 12.5373 5.08979 13.0653 4.97964 13.6065C4.8695 14.1477 4.34149 14.4971 3.8003 14.387L3.2403 14.273C4.2496 18.1414 7.77667 21 11.9749 21Z',
  d12: 'M3.12759 16.6114C1.16104 12.8506 1.76719 8.09708 4.94283 4.93254C8.6204 1.26784 14.4364 1.037 18.3673 4.24499L15.8897 5.3039M20.8724 7.3886C22.839 11.1494 22.2328 15.9029 19.0572 19.0675C15.3796 22.7322 9.56364 22.963 5.63272 19.755L8.10753 18.6989',
  d13: 'M18.0607 13.4759L17.989 9.99982M17.989 9.99982L11.966 7.01959C11.9632 7.01821 11.9599 7.01821 11.9571 7.0196L6.03094 9.96224C6.02363 9.96587 6.02352 9.97627 6.03075 9.98006L8.53385 11.2903M17.989 9.99982L15.4656 11.2903M15.4656 11.2903L11.9616 12.9836L8.53385 11.2903M15.4656 11.2903V15.0478L11.9666 17.0176C11.9635 17.0194 11.9597 17.0193 11.9566 17.0175L8.53385 14.986V11.2903',
  d14: 'M11.6646 6.32918C11.8757 6.22361 12.1243 6.22361 12.3354 6.32918L18.3354 9.32918C18.5895 9.45622 18.75 9.71592 18.75 10V13.5H17.25V11.2135L16.25 11.7135V15.4352L12.3721 17.6512C12.1413 17.7831 11.8579 17.7829 11.6272 17.6508L7.75002 15.4296L7.75 11.7135L5.66459 10.6708C5.4105 10.5438 5.25 10.2841 5.25 10C5.25 9.71592 5.4105 9.45622 5.66459 9.32918L11.6646 6.32918ZM12.3354 13.6709L14.75 12.4636V14.5649L12.0005 16.136L9.25001 14.5603L9.25 12.4636L11.6646 13.6709C11.8757 13.7765 12.1243 13.7765 12.3354 13.6709Z',
  d15: 'M16.1799 4.23145C12.8492 2.46158 8.60885 2.97933 5.79293 5.7854C2.99977 8.56879 2.46673 12.7483 4.19514 16.0538L2.4631 16.9594C0.347793 12.9141 0.999492 7.80276 4.41328 4.40091C8.36446 0.463542 14.6132 0.214361 18.8404 3.66409C19.1053 3.8803 19.238 4.21927 19.1901 4.55788C19.1423 4.89649 18.921 5.18547 18.6065 5.31987L16.1853 6.35471L15.4171 4.55743L16.1799 4.23145ZM18.2069 18.2146C21 15.4312 21.5331 11.2517 19.8047 7.94624L21.5367 7.04055C23.652 11.0859 23.0003 16.1972 19.5865 19.5991C15.6353 23.5365 9.38655 23.7856 5.15942 20.3359C4.89441 20.1196 4.76176 19.7805 4.80968 19.4419C4.8576 19.1032 5.07912 18.8142 5.39373 18.6799L7.81229 17.6478L8.57948 19.4455L7.82104 19.7691C11.1516 21.5383 15.3913 21.0204 18.2069 18.2146Z',
};

export const IconElearningExchangeStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="elearning-exchange-stroke-rounded IconElearningExchangeStrokeRounded"
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

export const IconElearningExchangeDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="elearning-exchange-duotone-rounded IconElearningExchangeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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

export const IconElearningExchangeTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="elearning-exchange-twotone-rounded IconElearningExchangeTwotoneRounded"
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconElearningExchangeSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="elearning-exchange-solid-rounded IconElearningExchangeSolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconElearningExchangeBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="elearning-exchange-bulk-rounded IconElearningExchangeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconElearningExchangeStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="elearning-exchange-stroke-sharp IconElearningExchangeStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconElearningExchangeSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="elearning-exchange-solid-sharp IconElearningExchangeSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfElearningExchange: TheIconSelfPack = {
  name: 'ElearningExchange',
  StrokeRounded: IconElearningExchangeStrokeRounded,
  DuotoneRounded: IconElearningExchangeDuotoneRounded,
  TwotoneRounded: IconElearningExchangeTwotoneRounded,
  SolidRounded: IconElearningExchangeSolidRounded,
  BulkRounded: IconElearningExchangeBulkRounded,
  StrokeSharp: IconElearningExchangeStrokeSharp,
  SolidSharp: IconElearningExchangeSolidSharp,
};