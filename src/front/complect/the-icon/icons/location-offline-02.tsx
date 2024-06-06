import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.5 17.6461C16.2676 18.9628 14.8763 20.1884 13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C4.02067 6.59797 4.46666 5.63512 5 5',
  d2: 'M7 3.48631C8.46914 2.53477 10.213 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C21.6603 10.5221 20.8796 13.1643 19.2612 15.5',
  d3: 'M2 2L22 22',
  d4: 'M12.0011 22C12.6044 22 13.1841 21.773 13.6177 21.367C14.8763 20.1884 16.3359 18.885 17.5684 17.5684L5 5C4.46666 5.63512 4.02067 6.59797 3.68627 7.37966C1.09076 13.4469 6.41302 17.626 10.3845 21.367C10.8182 21.773 11.3978 22 12.0011 22Z',
  d5: 'M2.99714 7.08468C1.57518 10.4086 2.34496 13.2373 3.94771 15.6595C5.26177 17.6454 7.17835 19.4178 8.90742 21.0168L8.90824 21.0175C9.23754 21.3221 9.56043 21.6207 9.87066 21.9129L9.87231 21.9145C10.4473 22.4528 11.2112 22.75 12.0015 22.75C12.7919 22.75 13.5558 22.4528 14.1308 21.9144C14.4243 21.6396 14.7286 21.3592 15.039 21.0732C15.9118 20.2691 16.8334 19.4199 17.7027 18.5208C17.891 18.3261 17.9852 18.2287 17.9842 18.1059C17.9831 17.9831 17.886 17.886 17.6918 17.6918L5.03439 5.03439C4.82029 4.82029 4.71323 4.71323 4.57776 4.72198C4.44229 4.73073 4.35385 4.84553 4.17695 5.07514C3.70675 5.68545 3.30801 6.35798 2.99714 7.08468Z',
  d6: 'M20.0582 15.6609C21.6591 13.2362 22.4261 10.4045 21.0059 7.08468C19.478 3.51303 15.8277 1.25 12.0015 1.25C10.2695 1.25 8.57342 1.71376 7.094 2.55275C6.80849 2.71466 6.66573 2.79562 6.64576 2.94294C6.62579 3.09025 6.74678 3.21125 6.98877 3.45323L19.2678 15.7322C19.4424 15.9069 19.5298 15.9942 19.6341 16.006C19.6756 16.0107 19.7207 16.0061 19.7604 15.9932C19.8602 15.9608 19.9262 15.8608 20.0582 15.6609Z',
  d7: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d8: 'M20.0582 15.6609C21.659 13.2362 22.4261 10.4045 21.0059 7.08468C19.478 3.51303 15.8276 1.25 12.0015 1.25C10.2694 1.25 8.57335 1.71376 7.09393 2.55275C6.80841 2.71466 6.66566 2.79562 6.64568 2.94294C6.62571 3.09025 6.7467 3.21125 6.98869 3.45323L19.2677 15.7322C19.4424 15.9069 19.5297 15.9942 19.634 16.006C19.6755 16.0107 19.7206 16.0061 19.7603 15.9932C19.8602 15.9608 19.9262 15.8608 20.0582 15.6609Z',
  d9: 'M2.99714 7.08585C1.57518 10.4098 2.34496 13.2385 3.94771 15.6607C5.26177 17.6466 7.17835 19.419 8.90742 21.018L8.90824 21.0187C9.23754 21.3232 9.56043 21.6218 9.87066 21.9141L9.87231 21.9156C10.4473 22.454 11.2112 22.7512 12.0015 22.7512C12.7919 22.7512 13.5558 22.454 14.1308 21.9156C14.4243 21.6407 14.7286 21.3604 15.039 21.0744C15.9118 20.2702 16.8334 19.4211 17.7027 18.522C17.891 18.3273 17.9852 18.2299 17.9842 18.1071C17.9831 17.9843 17.886 17.8872 17.6918 17.693L5.03439 5.03556C4.82029 4.82146 4.71323 4.71441 4.57776 4.72315C4.44229 4.7319 4.35385 4.8467 4.17695 5.07631C3.70675 5.68662 3.30801 6.35915 2.99714 7.08585Z',
  d10: 'M19.2993 16.122C20.3041 14.661 21 12.9465 21 11C21 6.02944 16.9706 2 12 2C10.0714 2 8.2845 2.60662 6.81966 3.63946M17.8632 17.8638C15.2661 20.5484 12 22 12 22C12 22 3 18 3 11C3 8.77058 3.81062 6.73048 5.1532 5.15839',
  d11: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d12: 'M10.2203 21.8483C10.6562 22.0977 11.0206 22.2874 11.2779 22.4156L12 22.75L12.7221 22.4156C12.9794 22.2874 13.3438 22.0977 13.7796 21.8483C14.6496 21.3505 15.813 20.6101 16.9801 19.6407C17.4432 19.2561 17.9123 18.8307 18.3664 18.3656L14.2846 14.2838C13.6369 14.7353 12.8494 15 12 15C9.79086 15 8 13.2091 8 11C8 10.1506 8.26474 9.36307 8.71621 8.71537L4.619 4.61816C3.14283 6.3213 2.25 8.54074 2.25 10.968C2.25 14.7912 4.71077 17.7227 7.01986 19.6407C8.18703 20.6101 9.35038 21.3505 10.2203 21.8483Z',
  d13: 'M21.75 10.968C21.75 5.60091 17.3848 1.25 12 1.25C9.9542 1.25 8.05556 1.87802 6.48756 2.95118L10.7391 7.20277C11.1355 7.07122 11.5595 7 12 7C14.2091 7 16 8.79086 16 11C16 11.4405 15.9288 11.8645 15.7972 12.2609L19.9643 16.428C21.0117 14.8889 21.75 13.0622 21.75 10.968Z',
};

export const IconLocationOffline02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-02-stroke-rounded IconLocationOffline02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconLocationOffline02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-02-duotone-rounded IconLocationOffline02DuotoneRounded"
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

export const IconLocationOffline02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-02-twotone-rounded IconLocationOffline02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconLocationOffline02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-02-solid-rounded IconLocationOffline02SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationOffline02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-02-bulk-rounded IconLocationOffline02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationOffline02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-02-stroke-sharp IconLocationOffline02StrokeSharp"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconLocationOffline02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-02-solid-sharp IconLocationOffline02SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfLocationOffline02: TheIconSelfPack = {
  name: 'LocationOffline02',
  StrokeRounded: IconLocationOffline02StrokeRounded,
  DuotoneRounded: IconLocationOffline02DuotoneRounded,
  TwotoneRounded: IconLocationOffline02TwotoneRounded,
  SolidRounded: IconLocationOffline02SolidRounded,
  BulkRounded: IconLocationOffline02BulkRounded,
  StrokeSharp: IconLocationOffline02StrokeSharp,
  SolidSharp: IconLocationOffline02SolidSharp,
};