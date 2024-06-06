import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z',
  d2: 'M13 15C13 16.3807 11.8807 17.5 10.5 17.5C9.11929 17.5 8 16.3807 8 15',
  d3: 'M12.4609 4.98405C12.4771 4.82626 12.4804 4.66723 12.4705 4.50845L12.3476 2.53028C12.3264 2.18962 12.657 1.92903 12.9983 2.01736L17.6108 3.21118C17.9521 3.29951 18.1035 3.68484 17.9088 3.96964L16.7784 5.62342C16.6877 5.75616 16.6081 5.89545 16.5405 6.03991M12.4609 4.98405C12.4443 5.1461 12.414 5.30684 12.3702 5.46466L11.5176 8M12.4609 4.98405L11 4.60593M12.4609 4.98405L16.5405 6.03991M16.5405 6.03991C16.471 6.18829 16.414 6.34212 16.3702 6.49993L15.6587 9M16.5405 6.03991L18 6.41766',
  d4: 'M5 15H19',
  d5: 'M14.008 12L13.999 12',
  d6: 'M17.6099 3.21118L12.9974 2.01736C12.6561 1.92903 12.3255 2.18962 12.3467 2.53028L12.4696 4.50845C12.4795 4.66723 12.4762 4.82626 12.46 4.98405L16.5396 6.03991C16.6072 5.89545 16.6868 5.75616 16.7775 5.62342L17.9079 3.96964C18.1026 3.68484 17.9512 3.29951 17.6099 3.21118Z',
  d7: 'M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15H8C8 16.3807 9.11929 17.5 10.5 17.5C11.8807 17.5 13 16.3807 13 15H19Z',
  d8: 'M10.5 17.5C11.8807 17.5 13 16.3807 13 15H8C8 16.3807 9.11929 17.5 10.5 17.5Z',
  d9: 'M12.4609 4.98405C12.4771 4.82626 12.4804 4.66723 12.4705 4.50845L12.3476 2.53028C12.3264 2.18962 12.657 1.92903 12.9983 2.01736L17.6108 3.21118C17.9521 3.29951 18.1035 3.68484 17.9088 3.96964L16.7784 5.62342C16.6877 5.75616 16.6081 5.89545 16.5405 6.03991M12.4609 4.98405C12.4443 5.1461 12.414 5.30684 12.3702 5.46466L11.5176 8V8.01636C11.677 8.00551 11.8379 8 12 8C13.3411 8 14.5941 8.37713 15.6587 9.03112V9L16.3702 6.49993C16.414 6.34212 16.471 6.18829 16.5405 6.03991M12.4609 4.98405L11 4.60593M12.4609 4.98405L16.5405 6.03991M16.5405 6.03991L18 6.41766',
  d10: 'M8.95 14.25C8.83954 14.25 8.75 14.3395 8.75 14.45V15C8.75 15.9665 9.5335 16.75 10.5 16.75C11.4665 16.75 12.25 15.9665 12.25 15V14.45C12.25 14.3395 12.1605 14.25 12.05 14.25H8.95Z',
  d11: 'M12 7.25C7.71979 7.25 4.25 10.7198 4.25 15C4.25 19.2802 7.71979 22.75 12 22.75C16.2802 22.75 19.75 19.2802 19.75 15C19.75 10.7198 16.2802 7.25 12 7.25ZM6.46277 14.25C6.34217 14.25 6.24876 14.1438 6.26884 14.0249C6.73265 11.279 9.12203 9.1875 11.9999 9.1875C14.8778 9.1875 17.2672 11.279 17.731 14.0249C17.7511 14.1438 17.6577 14.25 17.5371 14.25H13.95C13.8395 14.25 13.75 14.3395 13.75 14.45V15C13.75 16.795 12.2949 18.25 10.5 18.25C8.70507 18.25 7.25 16.795 7.25 15V14.45C7.25 14.3395 7.16046 14.25 7.05 14.25H6.46277Z',
  d12: 'M13.1861 1.29059C12.3882 1.08406 11.5438 1.68903 11.599 2.5761L11.6717 3.74654L11.2508 3.63761C10.7161 3.49923 10.1705 3.82048 10.0321 4.35515C9.89376 4.88982 10.215 5.43543 10.7497 5.57381L11.4785 5.76245L10.8067 7.76024C10.7808 7.83728 10.7676 7.91802 10.7676 7.9993V8.01566C10.7676 8.22342 10.8538 8.42187 11.0056 8.5637C11.1574 8.70553 11.3612 8.77804 11.5685 8.76393C11.7109 8.75423 11.8548 8.7493 11.9999 8.7493C13.1985 8.7493 14.3162 9.08595 15.2661 9.66948C15.4976 9.81164 15.7878 9.81758 16.0248 9.68499C16.2341 9.56795 16.373 9.35909 16.4027 9.12488L16.9562 7.18017L17.7497 7.38554C18.2843 7.52393 18.83 7.20267 18.9683 6.66801C19.1067 6.13334 18.7855 5.58773 18.2508 5.44934L17.8723 5.35138L18.5279 4.39217C19.0309 3.65632 18.617 2.6962 17.7987 2.48441L13.1861 1.29059Z',
  d13: 'M15.0078 12C15.0078 12.5523 14.5621 13 14.0123 13L14.0033 13C13.4535 13 13.0078 12.5523 13.0078 12C13.0078 11.4477 13.4535 11 14.0033 11L14.0123 11C14.5621 11 15.0078 11.4477 15.0078 12Z',
  d14: 'M11.599 2.5761C11.5438 1.68903 12.3882 1.08406 13.1861 1.29058L17.7987 2.48441C18.617 2.6962 19.0309 3.65632 18.5279 4.39217L17.8723 5.35138L18.2508 5.44934C18.7855 5.58773 19.1067 6.13334 18.9683 6.66801C18.83 7.20267 18.2843 7.52393 17.7497 7.38554L16.9562 7.18017L16.5221 8.7054C15.2494 7.78948 13.6877 7.25 12 7.25C11.6455 7.25 11.2966 7.2738 10.9548 7.31988L11.4785 5.76245L10.7497 5.57381C10.215 5.43543 9.89376 4.88982 10.0321 4.35515C10.1705 3.82048 10.7161 3.49923 11.2508 3.63761L11.6717 3.74654L11.599 2.5761Z',
  d15: 'M16.5405 6.03231L18 3.48608L12.4609 1.99976V4.97382M16.5405 6.03231L12.4609 4.97382M16.5405 6.03231L18 6.411M16.5405 6.03231L15.6587 8.99976M12.4609 4.97382L11 4.59476M12.4609 4.97382L11.5176 7.99727',
  d16: 'M12.0044 1.40491C12.1895 1.26297 12.43 1.21519 12.6553 1.27563L18.1943 2.76196C18.4191 2.82227 18.6031 2.98349 18.6925 3.19837C18.7818 3.41324 18.7664 3.65741 18.6506 3.85931L17.6796 5.5533L18.1883 5.68529L17.8116 7.13721L17.0531 6.94041L16.3776 9.21363L14.9398 8.78638L15.6003 6.56346L12.9641 5.87946L12.2336 8.2209L10.8016 7.77414L11.5104 5.50229L10.8116 5.32097L11.1883 3.86905L11.7109 4.00464V2.00001C11.7109 1.76679 11.8194 1.54685 12.0044 1.40491Z',
  d17: 'M15.0081 12C15.0081 12.5523 14.5623 13 14.0125 13H14.0036C13.4538 13 13.0081 12.5523 13.0081 12C13.0081 11.4477 13.4538 11 14.0036 11L14.0125 11C14.5623 11 15.0081 11.4477 15.0081 12Z',
  d18: 'M8.75 14.9998C8.75 15.9663 9.5335 16.7498 10.5 16.7498C11.4665 16.7498 12.25 15.9663 12.25 14.9998H8.75Z',
  d19: 'M12 7.24976C7.71979 7.24976 4.25 10.7195 4.25 14.9998C4.25 19.28 7.71979 22.7498 12 22.7498C16.2802 22.7498 19.75 19.28 19.75 14.9998C19.75 10.7195 16.2802 7.24976 12 7.24976ZM5.75 14.9998C5.75 11.548 8.54822 8.74976 12 8.74976C15.4518 8.74976 18.25 11.548 18.25 14.9998H13.75C13.75 16.7947 12.2949 18.2498 10.5 18.2498C8.70507 18.2498 7.25 16.7947 7.25 14.9998H5.75Z',
};

export const IconPotionStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="potion-stroke-rounded IconPotionStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPotionDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="potion-duotone-rounded IconPotionDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPotionTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="potion-twotone-rounded IconPotionTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPotionSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="potion-solid-rounded IconPotionSolidRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconPotionBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="potion-bulk-rounded IconPotionBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPotionStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="potion-stroke-sharp IconPotionStrokeSharp"
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
      <path 
        d={d.d15} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPotionSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="potion-solid-sharp IconPotionSolidSharp"
    >
      <path 
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

export const iconPackOfPotion: TheIconSelfPack = {
  name: 'Potion',
  StrokeRounded: IconPotionStrokeRounded,
  DuotoneRounded: IconPotionDuotoneRounded,
  TwotoneRounded: IconPotionTwotoneRounded,
  SolidRounded: IconPotionSolidRounded,
  BulkRounded: IconPotionBulkRounded,
  StrokeSharp: IconPotionStrokeSharp,
  SolidSharp: IconPotionSolidSharp,
};