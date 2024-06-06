import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.4776 9.00915C17.485 9.00911 17.4925 9.00909 17.5 9.00909C19.9853 9.00909 22 11.0269 22 13.5159C22 15.8512 20.2265 17.7716 17.9548 18M17.4776 9.00915C17.4924 8.8442 17.5 8.67716 17.5 8.50834C17.5 5.46617 15.0376 3 12 3C9.12324 3 6.76233 5.21197 6.52042 8.03032M17.4776 9.00915C17.3753 10.1453 16.9286 11.182 16.2428 12.0136M6.52042 8.03032C3.98398 8.27205 2 10.4116 2 13.0152C2 15.4378 3.71776 17.536 6 18M6.52042 8.03032C6.67826 8.01527 6.83823 8.00758 7 8.00758C8.12582 8.00758 9.16474 8.38023 10.0005 9.00909',
  d2: 'M9.5 18.5034C9.5 17.2482 10.5532 16.0077 11.2924 15.2917C11.6939 14.9028 12.3061 14.9028 12.7076 15.2917C13.4468 16.0077 14.5 17.2482 14.5 18.5034C14.5 19.7341 13.5533 21 12 21C10.4467 21 9.5 19.7341 9.5 18.5034Z',
  d3: 'M12 3C15.0376 3 17.5 5.46243 17.5 8.5C17.5 8.66856 17.4924 8.83536 17.4776 9.00005L17.5 9C19.9853 9 22 11.0147 22 13.5C22 15.9853 19.9853 18 17.5 18H14.9985C14.9499 16.5656 13.7186 15.1591 12.8491 14.3403C12.3674 13.8866 11.6326 13.8866 11.1509 14.3403C10.2814 15.1591 9.0501 16.5656 9.00149 18H7C4.23858 18 2 15.7614 2 13C2 10.4003 3.98398 8.26407 6.52042 8.0227C6.76233 5.20862 9.12324 3 12 3Z',
  d4: 'M9 18.0873C9 16.6229 10.2638 15.1757 11.1509 14.3403C11.6326 13.8866 12.3674 13.8866 12.8491 14.3403C13.7362 15.1757 15 16.6229 15 18.0873C15 19.5231 13.864 21 12 21C10.136 21 9 19.5231 9 18.0873Z',
  d5: 'M8.5 18.4212C8.5 16.7475 9.97444 15.0936 11.0093 14.1389C11.5714 13.6204 12.4286 13.6204 12.9907 14.1389C14.0256 15.0936 15.5 16.7475 15.5 18.4212C15.5 20.0622 14.1746 21.75 12 21.75C9.82538 21.75 8.5 20.0622 8.5 18.4212Z',
  d6: 'M5.89293 7.16541C5.86687 7.28518 5.77394 7.37979 5.65475 7.40836C3.1278 8.01425 1.25 10.2875 1.25 13C1.25 16.1756 3.82436 18.75 7 18.75C7.00646 18.75 7.01155 18.7445 7.0111 18.7381C7.00372 18.6326 7 18.5269 7 18.4212C7 17.1598 7.5458 16.0318 8.12106 15.1746C8.70882 14.2988 9.42793 13.557 9.99225 13.0364C11.1288 11.9879 12.8712 11.9879 14.0078 13.0364C14.5721 13.557 15.2912 14.2988 15.8789 15.1746C16.4542 16.0318 17 17.1598 17 18.4212C17 18.4234 17 18.4256 17 18.4277C16.9997 18.602 17.1364 18.75 17.3106 18.75H17.5C20.3995 18.75 22.75 16.3995 22.75 13.5C22.75 10.941 20.9191 8.80958 18.4958 8.34431C18.3526 8.31682 18.2444 8.196 18.2341 8.05055C18.0037 4.80855 15.3006 2.25 12 2.25C9.00614 2.25 6.50451 4.35458 5.89293 7.16541Z',
  d7: 'M12 15C11.2608 15.7161 9.5 17.2482 9.5 18.5034C9.5 19.7341 10.4467 21 12 21C13.5533 21 14.5 19.7341 14.5 18.5034C14.5 17.2482 12.7392 15.7161 12 15Z',
  d8: 'M5.853 7.36454C3.22664 7.89643 1.25 10.217 1.25 13C1.25 16.1756 3.82436 18.75 7 18.75H7.25683C7.25229 18.6677 7.25 18.5856 7.25 18.5037C7.25 17.6823 7.53043 16.9769 7.80115 16.4691C8.08 15.946 8.43141 15.4791 8.75517 15.0965C9.27896 14.4774 10.629 13.1888 10.9682 12.8673L12 11.8896L13.0318 12.8673C13.371 13.1888 14.721 14.4774 15.2448 15.0965C15.5686 15.4791 15.92 15.946 16.1989 16.4691C16.4696 16.9769 16.75 17.6823 16.75 18.5037C16.75 18.5856 16.7477 18.6677 16.7432 18.75H17.5C20.3995 18.75 22.75 16.3995 22.75 13.5C22.75 10.8541 20.7927 8.66534 18.2469 8.30273C18.1428 4.94224 15.3858 2.25 12 2.25C8.93585 2.25 6.38731 4.45456 5.853 7.36454Z',
  d9: 'M12 13.9561C12.366 14.3028 13.6423 15.5247 14.0997 16.0653C14.3852 16.4026 14.6645 16.7793 14.8752 17.1746C15.0832 17.5648 15.25 18.0206 15.25 18.5036C15.25 20.0853 14.028 21.7502 12 21.7502C9.97196 21.7502 8.75 20.0853 8.75 18.5036C8.75 18.0206 8.91683 17.5648 9.12483 17.1746C9.33554 16.7793 9.61482 16.4026 9.90025 16.0653C10.3577 15.5247 11.634 14.3028 12 13.9561Z',
};

export const IconCloudBigRainStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-big-rain-stroke-rounded IconCloudBigRainStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCloudBigRainDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-big-rain-duotone-rounded IconCloudBigRainDuotoneRounded"
    >
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudBigRainTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-big-rain-twotone-rounded IconCloudBigRainTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="0.44" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudBigRainSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-big-rain-solid-rounded IconCloudBigRainSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudBigRainBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-big-rain-bulk-rounded IconCloudBigRainBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudBigRainStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-big-rain-stroke-sharp IconCloudBigRainStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudBigRainSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-big-rain-solid-sharp IconCloudBigRainSolidSharp"
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

export const iconPackOfCloudBigRain: TheIconSelfPack = {
  name: 'CloudBigRain',
  StrokeRounded: IconCloudBigRainStrokeRounded,
  DuotoneRounded: IconCloudBigRainDuotoneRounded,
  TwotoneRounded: IconCloudBigRainTwotoneRounded,
  SolidRounded: IconCloudBigRainSolidRounded,
  BulkRounded: IconCloudBigRainBulkRounded,
  StrokeSharp: IconCloudBigRainStrokeSharp,
  SolidSharp: IconCloudBigRainSolidSharp,
};