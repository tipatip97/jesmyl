import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.0079 7.00648L18.0016 7.00013',
  d2: 'M20.8284 9.82843C19.2663 11.3905 16.7337 11.3905 15.1716 9.82843C13.6095 8.26633 13.6095 5.73367 15.1716 4.17157C16.7337 2.60948 19.2663 2.60948 20.8284 4.17157C22.3905 5.73367 22.3905 8.26633 20.8284 9.82843Z',
  d3: 'M2.83987 20.2031C3.9597 21.2656 5.77529 21.2656 6.89512 20.2031C7.48089 19.6473 7.76025 18.9108 7.7332 18.1827C7.72646 18.0014 7.78437 17.8202 7.91493 17.6963L10.661 15.0907C10.8334 14.9272 11.0887 14.8998 11.3071 14.9902C12.3445 15.4194 13.6057 15.3298 14.6155 15.105C15.1172 14.9933 15.1194 14.3649 14.672 14.1221C14.066 13.7932 13.4955 13.3832 12.978 12.8922C12.3251 12.2727 11.8081 11.5731 11.4271 10.8266C11.023 10.0349 9.85237 9.70148 9.19682 10.3235L2.83987 16.3553C1.72004 17.4178 1.72004 19.1405 2.83987 20.2031Z',
  d4: 'M14 8.5L11.5 10.5M16 11L13.5 13',
  d5: 'M18.0079 7.00795L18.0016 7.0016',
  d6: 'M18.0079 7.006L18.0016 6.99964',
  d7: 'M14.6412 3.64124C16.4962 1.78625 19.5038 1.78625 21.3588 3.64124C23.2137 5.49623 23.2137 8.50377 21.3588 10.3588C19.5038 12.2137 16.4962 12.2137 14.6412 10.3588C12.7863 8.50377 12.7863 5.49623 14.6412 3.64124Z',
  d8: 'M18.708 7.70803C18.3187 8.09732 17.6876 8.09732 17.2983 7.70803L17.292 7.7017C16.9027 7.31241 16.9027 6.68125 17.292 6.29197C17.6813 5.90268 18.3124 5.90268 18.7017 6.29197L18.708 6.2983C19.0973 6.68759 19.0973 7.31875 18.708 7.70803Z',
  d9: 'M10.5854 9.31615C11.1939 9.46583 11.7817 9.87102 12.0951 10.4852C12.4373 11.1555 12.9029 11.7866 13.4942 12.3477C13.9631 12.7925 14.4801 13.1641 15.0298 13.4625C15.4975 13.7163 15.7671 14.1964 15.7492 14.6896C15.7299 15.2176 15.3762 15.7036 14.7784 15.8366C13.733 16.0693 12.3255 16.1941 11.0947 15.7126L8.48381 18.1899C8.50845 19.1192 8.14575 20.0498 7.41135 20.7467C6.00214 22.0838 3.73285 22.0838 2.32364 20.7467C0.892121 19.3884 0.892121 17.169 2.32364 15.8107L8.68059 9.77895C9.23421 9.25365 9.9719 9.16523 10.5854 9.31615Z',
  d10: 'M14.5857 8.03151C14.8444 8.35495 14.792 8.82692 14.4685 9.08568L11.9685 11.0857C11.6451 11.3444 11.1731 11.292 10.9144 10.9685C10.6556 10.6451 10.7081 10.1731 11.0315 9.91438L13.5315 7.91438C13.855 7.65562 14.3269 7.70806 14.5857 8.03151ZM16.5857 10.5315C16.8444 10.855 16.792 11.3269 16.4685 11.5857L13.9685 13.5857C13.6451 13.8444 13.1731 13.792 12.9144 13.4685C12.6556 13.1451 12.7081 12.6731 13.0315 12.4144L15.5315 10.4144C15.855 10.1556 16.3269 10.2081 16.5857 10.5315Z',
  d11: 'M18.0043 6.99854L17.998 6.99219',
  d12: 'M20.8266 9.8158C19.2631 11.375 16.7283 11.375 15.1648 9.8158C13.6013 8.25659 13.6013 5.72861 15.1648 4.1694C16.7283 2.6102 19.2631 2.6102 20.8266 4.1694C22.39 5.72861 22.39 8.25659 20.8266 9.8158Z',
  d13: 'M13.9924 8.49023L11.4902 10.4865M16.4946 10.4865L13.492 12.9819',
  d14: 'M3.18242 16.0009L9.94601 9.55791C9.9869 9.51896 10.052 9.5215 10.0897 9.56352L14.4272 14.397C14.4627 14.4366 14.4608 14.4975 14.4216 14.5336C13.1685 15.6882 11.2029 15.3991 10.4607 15.0055L7.71785 17.7578C7.71785 18.3992 7.54559 19.094 7.45946 19.3612C6.99063 20.287 5.31225 21.7555 3.32629 20.5482C1.877 19.6672 1.85137 18.3041 2.15757 17.375C2.3391 16.8242 2.76202 16.4014 3.18242 16.0009Z',
  d15: 'M21.3588 3.64124C19.5038 1.78625 16.4962 1.78625 14.6412 3.64124C12.7863 5.49623 12.7863 8.50377 14.6412 10.3588C16.4962 12.2137 19.5038 12.2137 21.3588 10.3588C23.2137 8.50377 23.2137 5.49623 21.3588 3.64124ZM18.7071 6.29289C18.3166 5.90237 17.6834 5.90237 17.2929 6.29289C16.9024 6.68342 16.9024 7.31658 17.2929 7.70711L17.2992 7.71346C17.6898 8.10398 18.3229 8.10398 18.7135 7.71346C19.104 7.32293 19.104 6.68977 18.7135 6.29924L18.7071 6.29289Z',
  d16: 'M10.0495 8.75033C10.2524 8.75824 10.4434 8.84807 10.5789 8.99929L15.0586 13.9993C15.1989 14.1559 15.267 14.3642 15.2464 14.5734C15.2257 14.7826 15.1182 14.9736 14.95 15.0998L14.7316 15.2635C13.5604 16.1419 12.0396 16.3713 10.677 15.9038L8.4752 18.1055C8.4248 19.0948 8.12985 20.0654 7.41135 20.7471C6.00214 22.0843 3.73285 22.0843 2.32364 20.7471C0.89244 19.3892 0.892121 17.1705 2.32268 15.8121L2.32364 15.8112L9.5024 8.95729C9.64925 8.81709 9.84667 8.74241 10.0495 8.75033Z',
  d17: 'M10.875 9.71912L13.375 7.71912L14.6244 9.28085L12.1244 11.2809L10.875 9.71912ZM12.8595 12.2318L15.8595 9.73176L17.1399 11.2682L14.1399 13.7682L12.8595 12.2318Z',
};

export const IconPizzaCutterStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pizza-cutter-stroke-rounded IconPizzaCutterStrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPizzaCutterDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pizza-cutter-duotone-rounded IconPizzaCutterDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
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

export const IconPizzaCutterTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pizza-cutter-twotone-rounded IconPizzaCutterTwotoneRounded"
    >
      <path 
        opacity="0.5" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPizzaCutterSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pizza-cutter-solid-rounded IconPizzaCutterSolidRounded"
    >
      <path 
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

export const IconPizzaCutterBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pizza-cutter-bulk-rounded IconPizzaCutterBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPizzaCutterStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pizza-cutter-stroke-sharp IconPizzaCutterStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPizzaCutterSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pizza-cutter-solid-sharp IconPizzaCutterSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfPizzaCutter: TheIconSelfPack = {
  name: 'PizzaCutter',
  StrokeRounded: IconPizzaCutterStrokeRounded,
  DuotoneRounded: IconPizzaCutterDuotoneRounded,
  TwotoneRounded: IconPizzaCutterTwotoneRounded,
  SolidRounded: IconPizzaCutterSolidRounded,
  BulkRounded: IconPizzaCutterBulkRounded,
  StrokeSharp: IconPizzaCutterStrokeSharp,
  SolidSharp: IconPizzaCutterSolidSharp,
};