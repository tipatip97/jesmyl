import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 3C8.5 10.7143 14.9167 13.2857 19 21',
  d2: 'M15 15C18.7587 12.75 19 8.78846 19 7C19 4.33333 18.3333 3 18.3333 3',
  d3: 'M5.72689 21.0002C5.72689 21.0002 5 19.6433 5 16.9294C5 15.1704 5.24577 11.3456 8.96186 9.02393',
  d4: 'M19 7.00002C19 4.33335 18.3333 3.00002 18.3333 3.00002L5 3C6.01637 5.24017 7.27871 7.04666 8.65843 8.67134L8.96186 9.02344C5.24577 11.3451 5 15.1699 5 16.9289C5 19.6428 5.72689 20.9997 5.72689 20.9997L19 21C17.7744 18.6846 16.3386 16.8324 14.8345 15.1655L15 15C18.7587 12.75 19 8.78848 19 7.00002Z',
  d5: 'M5.72689 20.9997C5.72689 20.9997 5 19.6428 5 16.9289C5 15.1699 5.24577 11.3451 8.96186 9.02344',
  d6: 'M4.58708 2.08959C5.09002 1.8614 5.68271 2.08414 5.9109 2.58708C7.57988 6.26564 9.94167 8.72689 12.4913 11.2958C12.5942 11.3995 12.6974 11.5034 12.8009 11.6075C15.2502 14.0722 17.8484 16.6867 19.8841 20.5324C20.1424 21.0205 19.9562 21.6257 19.4681 21.8841C18.9799 22.1424 18.3748 21.9562 18.1164 21.4681C16.2226 17.8902 13.8109 15.4623 11.3377 12.9725C11.2491 12.8833 11.1605 12.7941 11.0717 12.7047C8.51716 10.1307 5.92061 7.44914 4.08959 3.41341C3.8614 2.91047 4.08414 2.31778 4.58708 2.08959Z',
  d7: 'M14.142 15.5135C13.8583 15.0396 14.0125 14.4255 14.4864 14.1418C17.7499 12.1883 18 8.74472 18 6.99985C18 5.75076 17.844 4.83218 17.6965 4.24238C17.6227 3.94716 17.5662 3.70693 17.4354 3.43991C17.1939 2.94732 17.3946 2.3512 17.8861 2.10542C18.3801 1.85843 18.9808 2.05866 19.2278 2.55263C19.4876 3.0724 19.5439 3.38587 19.6368 3.75731C19.8227 4.50085 20 5.58227 20 6.99985C20 8.83189 19.7675 13.3114 15.5136 15.8579C15.0398 16.1415 14.4256 15.9873 14.142 15.5135Z',
  d8: 'M9.80995 8.49372C10.1026 8.96211 9.9601 9.57904 9.49171 9.87166C6.2459 11.8995 6 15.2334 6 16.9291C6 18.1956 6.16948 19.1264 6.3294 19.7235C6.40946 20.0224 6.55856 20.4013 6.61236 20.5352C6.86725 21.0207 6.68341 21.6219 6.19909 21.8814C5.71225 22.1422 5.10619 21.9589 4.8454 21.4721C4.62171 21.0545 4.49915 20.6204 4.39749 20.2409C4.19397 19.481 4 18.3764 4 16.9291C4 15.1066 4.24565 10.7909 8.43201 8.17548C8.9004 7.88285 9.51733 8.02533 9.80995 8.49372Z',
  d9: 'M17.4386 3.39692C17.4387 3.39726 17.4389 3.39761 18.3333 2.94846C19.2278 2.4993 19.2279 2.49966 19.2281 2.50002L19.2293 2.50236L19.231 2.50592L19.2352 2.51456L19.2463 2.53787C19.2548 2.5561 19.2655 2.5797 19.2781 2.60867C19.3034 2.66661 19.3362 2.74602 19.3738 2.84689C19.4492 3.04868 19.5439 3.33615 19.6368 3.7092C19.8227 4.45596 20 5.54207 20 6.9658C20 8.68382 19.7973 12.72 16.3076 15.3294C17.5863 16.835 18.8129 18.5247 19.8838 20.5566L18.1162 21.4963C16.2223 17.9029 13.8107 15.4646 11.3375 12.964C11.2489 12.8744 11.1602 12.7847 11.0715 12.6949C10.3134 11.9278 9.55153 11.1511 8.80712 10.3321C6.2102 12.3825 6 15.3635 6 16.938C6 18.2101 6.16948 19.1449 6.3294 19.7445C6.40946 20.0447 6.48743 20.262 6.54122 20.3965C6.56813 20.4638 6.58901 20.5104 6.60112 20.5363C6.60718 20.5493 6.61104 20.5571 6.61236 20.5598L6.60978 20.5549L6.60911 20.5536C6.60893 20.5532 6.60838 20.5522 5.72689 21.0265C4.8454 21.5007 4.8452 21.5004 4.845 21.5L4.84373 21.4976L4.84181 21.4939L4.8372 21.4851L4.82509 21.4612C4.81576 21.4426 4.80401 21.4185 4.79019 21.3888C4.76254 21.3296 4.72664 21.2484 4.6854 21.1454C4.60291 20.9391 4.49915 20.6454 4.39749 20.2642C4.19397 19.501 4 18.3916 4 16.938C4 15.255 4.2077 11.4548 7.4958 8.81176C6.2269 7.25038 5.05226 5.49495 4.08934 3.3634L5.91066 2.53348C7.57963 6.22799 9.94142 8.69991 12.491 11.28C12.5939 11.3841 12.6971 11.4884 12.8006 11.593C13.5154 12.3153 14.2428 13.0505 14.9652 13.8254C17.7749 11.8264 18 8.62834 18 6.9658C18 5.7113 17.844 4.78873 17.6965 4.19638C17.6227 3.89987 17.5508 3.68518 17.5012 3.55219C17.4763 3.48567 17.457 3.43954 17.4458 3.41378C17.4402 3.40091 17.4366 3.39312 17.4354 3.39042L17.4376 3.39504L17.4386 3.39692ZM17.4354 3.39042C17.4347 3.38908 17.4348 3.38923 17.4354 3.39042V3.39042ZM6.61236 20.5598C6.61301 20.561 6.61302 20.5611 6.61236 20.5598V20.5598Z',
};

export const IconAlphabetHebrewStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-hebrew-stroke-rounded IconAlphabetHebrewStrokeRounded"
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

export const IconAlphabetHebrewDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-hebrew-duotone-rounded IconAlphabetHebrewDuotoneRounded"
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
        d={d.d2} 
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

export const IconAlphabetHebrewTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-hebrew-twotone-rounded IconAlphabetHebrewTwotoneRounded"
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

export const IconAlphabetHebrewSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-hebrew-solid-rounded IconAlphabetHebrewSolidRounded"
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

export const IconAlphabetHebrewBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-hebrew-bulk-rounded IconAlphabetHebrewBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetHebrewStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-hebrew-stroke-sharp IconAlphabetHebrewStrokeSharp"
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

export const IconAlphabetHebrewSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-hebrew-solid-sharp IconAlphabetHebrewSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAlphabetHebrew: TheIconSelfPack = {
  name: 'AlphabetHebrew',
  StrokeRounded: IconAlphabetHebrewStrokeRounded,
  DuotoneRounded: IconAlphabetHebrewDuotoneRounded,
  TwotoneRounded: IconAlphabetHebrewTwotoneRounded,
  SolidRounded: IconAlphabetHebrewSolidRounded,
  BulkRounded: IconAlphabetHebrewBulkRounded,
  StrokeSharp: IconAlphabetHebrewStrokeSharp,
  SolidSharp: IconAlphabetHebrewSolidSharp,
};