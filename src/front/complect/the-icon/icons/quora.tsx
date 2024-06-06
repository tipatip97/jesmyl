import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.1481 22.0001C20.037 22.0001 21 19.6776 21 16.8126C20.037 17.8497 17.3671 20.0195 16.1852 15.775C14.7407 10.5876 10.5 11.5 8 14C11.8519 14 12.3827 14.8974 13.2963 17.8501C14.2593 20.9625 15.7037 22.0001 17.1481 22.0001Z',
  d2: 'M6.5154 11C6.5052 10.8351 6.5 10.6684 6.5 10.5C6.5 7.18629 8.51472 4.5 11 4.5C13.4853 4.5 15.5 7.18629 15.5 10.5C15.5 11.3922 15.262 12.2389 15 13',
  d3: 'M13.2413 18.6619C12.5301 18.882 11.778 19 11 19C6.58172 19 3 15.1944 3 10.5C3 5.80558 6.58172 2 11 2C15.4183 2 19 5.80558 19 10.5C19 11.7477 18.747 12.9326 18.2925 14',
  d4: 'M13.5479 18.5852C13.4367 18.6182 13.3339 18.6436 13.2413 18.6619C12.5301 18.882 11.778 19 11 19C6.58172 19 3 15.1944 3 10.5C3 5.80558 6.58172 2 11 2C15.4183 2 19 5.80558 19 10.5C19 11.7477 18.747 12.9326 18.2925 14C17.8094 15.1316 17.1757 16.0183 16.509 16.7015C16.392 16.433 16.2834 16.1244 16.1852 15.7716C14.7407 10.5842 10.5 11.4966 8 13.9966C11.8519 13.9966 12.3827 14.894 13.2963 17.8467C13.3769 18.1072 13.4609 18.3531 13.5479 18.5852Z',
  d5: 'M17.1481 21.9966C20.037 21.9966 21 19.6742 21 16.8092C20.037 17.8462 17.3671 20.0161 16.1852 15.7716C14.7407 10.5842 10.5 11.4966 8 13.9966C11.8519 13.9966 12.3827 14.894 13.2963 17.8467C14.2593 20.9591 15.7037 21.9967 17.1481 21.9966Z',
  d6: 'M17.1481 22.0006C20.037 22.0005 21 19.6781 21 16.8131C20.037 17.8501 17.3671 20.02 16.1852 15.7755C14.7407 10.5881 10.5 11.5005 8 14.0005C11.8519 14.0005 12.3827 14.8979 13.2963 17.8506C14.2593 20.963 15.7037 22.0006 17.1481 22.0006Z',
  d7: 'M17.6378 22.5046C20.3903 22.5046 21.6083 20.637 21.9334 18.0988C22.0115 17.489 22.0506 17.1841 21.8795 17.0834C21.7085 16.9828 21.4192 17.1821 20.8408 17.5808C19.4625 18.5306 17.5372 18.9585 16.5406 15.3461C15.2218 10.566 11.857 10.2901 9.10645 11.8485C8.33235 12.287 7.9453 12.5063 8.00624 12.8499C8.06718 13.1935 8.58474 13.2861 9.61988 13.4714C11.8926 13.8782 12.4387 15.0891 13.249 17.7324C14.3462 21.3115 15.992 22.5046 17.6378 22.5046Z',
  d8: 'M15.7126 11.2777C16.6698 12.2108 17.3762 13.5287 17.8277 15.2004C17.9152 15.5242 18.3232 15.574 18.4898 15.2829C19.2908 13.8828 19.75 12.2435 19.75 10.5C19.75 5.43485 15.8747 1.25 11 1.25C6.12532 1.25 2.25 5.43485 2.25 10.5C2.25 15.5652 6.12532 19.75 11 19.75C11.1755 19.75 11.3498 19.7446 11.5226 19.7339C11.8453 19.7139 12.0401 19.3813 11.9349 19.0756C11.6745 18.3185 11.4771 17.5409 11.1803 16.7962C11.1077 16.6139 10.928 16.5028 10.7326 16.4845C8.39315 16.2646 6.5 13.6695 6.5 10.5C6.5 7.1863 8.51472 4.50001 11 4.50001C13.4853 4.50001 15.5 7.1863 15.5 10.5C15.5 10.8028 15.4752 11.0463 15.7126 11.2777Z',
  d9: 'M17.3981 22.2501C20.287 22.2501 21.25 19.9276 21.25 17.0626C20.287 18.0997 17.6171 20.2695 16.4352 16.025C14.9907 10.8376 10.75 11.75 8.25 14.25C12.1019 14.25 12.6327 15.1474 13.5463 18.1001C14.5093 21.2125 15.9537 22.2501 17.3981 22.2501Z',
  d10: 'M15.8742 12.4144C15.9564 11.9607 16 11.4869 16 10.9995C16 7.6858 13.9853 4.99951 11.5 4.99951C9.01472 4.99951 7 7.6858 7 10.9995C7 14.3132 9.01472 16.9995 11.5 16.9995C11.6117 16.9995 11.7224 16.9941 11.832 16.9834C11.9848 17.3421 12.1501 17.8197 12.3512 18.4695C12.5382 19.0741 12.7474 19.6236 12.9789 20.1186C12.4988 20.2046 12.0047 20.2495 11.5 20.2495C6.62532 20.2495 2.75 16.0647 2.75 10.9995C2.75 5.93436 6.62532 1.74951 11.5 1.74951C16.3747 1.74951 20.25 5.93436 20.25 10.9995C20.25 13.2632 19.476 15.3511 18.1846 16.9682C18.0213 16.7392 17.8214 16.3469 17.6384 15.6896C17.253 14.3054 16.6618 13.2074 15.8742 12.4144Z',
};

export const IconQuoraStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quora-stroke-rounded IconQuoraStrokeRounded"
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
        strokeLinecap="round" 
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

export const IconQuoraDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quora-duotone-rounded IconQuoraDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQuoraTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quora-twotone-rounded IconQuoraTwotoneRounded"
    >
      <path 
        d={d.d6} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQuoraSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quora-solid-rounded IconQuoraSolidRounded"
    >
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

export const IconQuoraBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quora-bulk-rounded IconQuoraBulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconQuoraStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quora-stroke-sharp IconQuoraStrokeSharp"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQuoraSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quora-solid-sharp IconQuoraSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfQuora: TheIconSelfPack = {
  name: 'Quora',
  StrokeRounded: IconQuoraStrokeRounded,
  DuotoneRounded: IconQuoraDuotoneRounded,
  TwotoneRounded: IconQuoraTwotoneRounded,
  SolidRounded: IconQuoraSolidRounded,
  BulkRounded: IconQuoraBulkRounded,
  StrokeSharp: IconQuoraStrokeSharp,
  SolidSharp: IconQuoraSolidSharp,
};