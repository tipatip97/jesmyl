import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.99633 9.50142C6.99633 10.3273 6.32513 10.9969 5.49716 10.9969C4.66918 10.9969 3.99799 10.3273 3.99799 9.50142C3.99799 8.67551 4.66918 8.00598 5.49716 8.00598C6.32513 8.00598 6.99633 8.67551 6.99633 9.50142Z',
  d2: 'M8.96601 3.00049L9.82455 8.77188C9.85337 8.96567 9.86785 9.16131 9.86785 9.35722V9.43799C9.86785 9.64711 9.84586 9.85565 9.80225 10.0602L9.75243 10.2938C9.7354 10.3737 9.70859 10.4512 9.6726 10.5246L6.99213 15.9895M10.4244 8.75483L15.9424 11.0595L16.5009 11.3019C16.839 11.4486 17.0969 11.7343 17.2078 12.0851L20.0021 20.9995M9.50955 11.9602L14.6344 13.9713M14.6344 13.9713L12.0186 20.8737M14.6344 13.9713L16.8166 11.8065',
  d3: 'M6.99813 9.49951C6.99813 10.3279 6.32698 10.9995 5.49907 10.9995C4.67115 10.9995 4 10.3279 4 9.49951C4 8.67108 4.67115 7.99951 5.49907 7.99951C6.32698 7.99951 6.99813 8.67108 6.99813 9.49951Z',
  d4: 'M9.80755 9.96898C9.87527 9.55147 9.85395 9.12851 9.77613 8.49951L16.1323 11.1424C16.432 11.267 16.693 11.4609 16.8967 11.7039L14.6177 13.9995L9.09839 11.7938C9.50792 10.9672 9.72375 10.4857 9.80755 9.96898Z',
  d5: 'M8.97082 3.00049L9.82883 8.77188C9.85763 8.96567 9.8721 9.16131 9.8721 9.35722V9.43799C9.8721 9.64711 9.85012 9.85565 9.80654 10.0602L9.75675 10.2938C9.73973 10.3737 9.71294 10.4512 9.67697 10.5246L6.99817 15.9895M10.4283 8.75483L15.9429 11.0595L16.501 11.3019C16.8389 11.4486 17.0966 11.7343 17.2075 12.0851L20 20.9995M9.51402 11.9602L14.6357 13.9713M14.6357 13.9713L12.0215 20.8737M14.6357 13.9713L16.8165 11.8065',
  d6: 'M6.99804 9.5C6.99804 10.3284 6.32691 11 5.49902 11C4.67113 11 4 10.3284 4 9.5C4 8.67157 4.67113 8 5.49902 8C6.32691 8 6.99804 8.67157 6.99804 9.5Z',
  d7: 'M8.97064 3.00049L9.82862 8.77188C9.85742 8.96567 9.87189 9.16131 9.87189 9.35722V9.43799C9.87189 9.64711 9.84991 9.85565 9.80633 10.0602L9.75655 10.2938C9.73952 10.3737 9.71273 10.4512 9.67677 10.5246L6.99805 15.9895M10.4281 8.75483L15.9425 11.0595L16.5006 11.3019C16.8385 11.4486 17.0962 11.7343 17.207 12.0851L19.9995 20.9995M9.51383 11.9602L14.6353 13.9713M14.6353 13.9713L12.0212 20.8737M14.6353 13.9713L16.8161 11.8065',
  d8: 'M3.125 9.5C3.125 8.25736 4.13236 7.25 5.375 7.25C6.61764 7.25 7.625 8.25736 7.625 9.5C7.625 10.7426 6.61764 11.75 5.375 11.75C4.13236 11.75 3.125 10.7426 3.125 9.5Z',
  d9: 'M8.7338 2.01018C9.28053 1.93207 9.78706 2.31197 9.86517 2.85871L10.5704 7.79734L16.3995 10.2195C16.8493 10.4064 17.241 10.6974 17.5467 11.0619C17.7966 11.3598 17.9892 11.7069 18.1091 12.0865L20.8288 20.699C20.9951 21.2256 20.703 21.7874 20.1764 21.9537C19.6497 22.12 19.0879 21.8279 18.9216 21.3013L16.4457 13.4607L15.3611 14.5524L12.8115 21.3513C12.6176 21.8684 12.0412 22.1304 11.5241 21.9365C11.007 21.7425 10.745 21.1661 10.9389 20.649L13.2201 14.5657L9.4611 13.0644L7.76965 16.4473C7.52266 16.9413 6.92198 17.1415 6.42801 16.8946C5.93403 16.6476 5.7338 16.0469 5.98079 15.5529L8.08151 11.3503C8.49945 10.5073 8.64386 10.1552 8.69998 9.80941C8.74411 9.53748 8.7384 9.23052 8.6632 8.62298L7.88527 3.14155C7.80716 2.59481 8.18706 2.08828 8.7338 2.01018Z',
  d10: 'M7 9.68555C7 10.5139 6.32843 11.1855 5.5 11.1855C4.67157 11.1855 4 10.5139 4 9.68555C4 8.85712 4.67157 8.18555 5.5 8.18555C6.32843 8.18555 7 8.85712 7 9.68555Z',
  d11: 'M9.00806 3.18945L9.72068 8.19816C9.82603 9.30153 10.0516 10.0412 9.45684 11.2323L6.99634 16.1855M10.1289 8.82617L13.5547 10.248L16.2723 11.3902C16.2945 11.3996 16.3162 11.4105 16.3366 11.4231C16.9881 11.8235 17.2303 12.2391 17.4648 13.1621L20 21.1855M9.72657 12.2207L14.1758 14.0098M16.3797 12.3969L14.6703 14.1345L12.0078 21.1816',
  d12: 'M3.25043 9.35608C3.25043 8.11344 4.25779 7.10608 5.50043 7.10608C6.74307 7.10608 7.75043 8.11344 7.75043 9.35608C7.75043 10.5987 6.74307 11.6061 5.50043 11.6061C4.25779 11.6061 3.25043 10.5987 3.25043 9.35608Z',
  d13: 'M8.90454 7.48824L8.25795 2.96213L9.74287 2.75L10.3903 7.28169C10.4181 7.47689 10.4442 7.65904 10.4677 7.82932L16.4288 10.3063C16.841 10.4777 17.2002 10.7444 17.4804 11.0785C17.7095 11.3516 17.886 11.6698 17.9959 12.0177L20.7495 20.7947L19.3191 21.2464L16.6848 12.8472L15.2711 14.2703L12.7027 21.25L11.2982 20.7233L13.6653 14.2802L9.4655 12.6029L7.67123 16.1915L6.32959 15.5207L8.212 11.7558C8.29074 11.5984 8.36363 11.4526 8.43069 11.3173C8.84659 10.4783 9.00889 10.094 9.07194 9.7054C9.12197 9.39707 9.11237 9.06111 9.0365 8.4482C9.00307 8.1782 8.95864 7.86699 8.90454 7.48824Z',
};

export const IconWorkoutGymnasticsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-gymnastics-stroke-rounded IconWorkoutGymnasticsStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutGymnasticsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-gymnastics-duotone-rounded IconWorkoutGymnasticsDuotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutGymnasticsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-gymnastics-twotone-rounded IconWorkoutGymnasticsTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconWorkoutGymnasticsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-gymnastics-solid-rounded IconWorkoutGymnasticsSolidRounded"
    >
      <path 
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

export const IconWorkoutGymnasticsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-gymnastics-bulk-rounded IconWorkoutGymnasticsBulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutGymnasticsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-gymnastics-stroke-sharp IconWorkoutGymnasticsStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutGymnasticsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-gymnastics-solid-sharp IconWorkoutGymnasticsSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWorkoutGymnastics: TheIconSelfPack = {
  name: 'WorkoutGymnastics',
  StrokeRounded: IconWorkoutGymnasticsStrokeRounded,
  DuotoneRounded: IconWorkoutGymnasticsDuotoneRounded,
  TwotoneRounded: IconWorkoutGymnasticsTwotoneRounded,
  SolidRounded: IconWorkoutGymnasticsSolidRounded,
  BulkRounded: IconWorkoutGymnasticsBulkRounded,
  StrokeSharp: IconWorkoutGymnasticsStrokeSharp,
  SolidSharp: IconWorkoutGymnasticsSolidSharp,
};