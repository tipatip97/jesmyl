import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.5 17.6461C16.2676 18.9628 14.8763 20.1884 13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C4.02067 6.59797 4.46666 5.63512 5 5',
  d2: 'M7 3.48631C8.46914 2.53477 10.213 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C21.6603 10.5221 20.8796 13.1643 19.2612 15.5',
  d3: 'M9 9C8.66525 9.53668 8.5 10.3209 8.5 11C8.5 12.933 10.067 14.5 12 14.5C12.6598 14.5 13.4732 14.3174 14 14',
  d4: 'M11.5 7.53544C11.6633 7.51209 11.8302 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11C15.5 11.1698 15.4879 11.3367 15.4646 11.5',
  d5: 'M2 2L22 22',
  d6: 'M12.0011 22C12.6044 22 13.1841 21.773 13.6177 21.367C14.8763 20.1884 16.3359 18.885 17.5684 17.5684L5 5C4.46666 5.63512 4.02067 6.59797 3.68627 7.37966C1.09076 13.4469 6.41302 17.626 10.3845 21.367C10.8182 21.773 11.3978 22 12.0011 22Z',
  d7: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d8: 'M2.99714 7.08468C1.57518 10.4086 2.34496 13.2373 3.94771 15.6595C5.26177 17.6454 7.17835 19.4178 8.90742 21.0168L8.90824 21.0175C9.23754 21.3221 9.56043 21.6207 9.87066 21.9129L9.87231 21.9145C10.4473 22.4528 11.2112 22.75 12.0015 22.75C12.7919 22.75 13.5558 22.4528 14.1308 21.9144C14.4243 21.6396 14.7286 21.3592 15.039 21.0732C15.9118 20.2691 16.8334 19.4199 17.7027 18.5208C17.891 18.3261 17.9852 18.2287 17.9842 18.1059C17.9831 17.9831 17.886 17.886 17.6918 17.6918L14.6393 14.6393C14.4757 14.4757 14.3939 14.3939 14.2966 14.3791C14.1993 14.3643 14.0845 14.4244 13.8551 14.5447C13.3006 14.8355 12.6695 15 12 15C9.79086 15 8 13.2091 8 11C8 10.3305 8.16449 9.69936 8.45528 9.14489C8.57559 8.91546 8.63575 8.80075 8.62092 8.70342C8.60609 8.60609 8.52429 8.52429 8.36069 8.36069L5.03439 5.03439C4.82029 4.82029 4.71323 4.71323 4.57776 4.72198C4.44229 4.73073 4.35385 4.84553 4.17695 5.07514C3.70675 5.68545 3.30801 6.35798 2.99714 7.08468Z',
  d9: 'M20.0582 15.6609C21.6591 13.2362 22.4261 10.4045 21.0059 7.08468C19.478 3.51303 15.8277 1.25 12.0015 1.25C10.2695 1.25 8.57342 1.71376 7.094 2.55275C6.80849 2.71466 6.66573 2.79562 6.64576 2.94294C6.62579 3.09025 6.74678 3.21125 6.98877 3.45323L10.4766 6.94111C10.5998 7.06426 10.6614 7.12584 10.736 7.14721C10.8106 7.16859 10.9054 7.14667 11.0949 7.10283C11.3857 7.03556 11.6887 7 12 7C14.2091 7 16 8.79086 16 11C16 11.3113 15.9644 11.6143 15.8972 11.9051C15.8533 12.0946 15.8314 12.1894 15.8528 12.264C15.8742 12.3386 15.9357 12.4002 16.0589 12.5233L19.2678 15.7322C19.4424 15.9069 19.5298 15.9942 19.6341 16.006C19.6756 16.0107 19.7207 16.0061 19.7604 15.9932C19.8602 15.9608 19.9262 15.8608 20.0582 15.6609Z',
  d10: 'M2.99714 7.08585C1.57518 10.4098 2.34496 13.2385 3.94771 15.6607C5.26177 17.6466 7.17835 19.419 8.90742 21.018L8.90824 21.0187C9.23754 21.3232 9.56043 21.6218 9.87066 21.9141L9.87231 21.9156C10.4473 22.454 11.2112 22.7512 12.0015 22.7512C12.7919 22.7512 13.5558 22.454 14.1308 21.9156C14.4243 21.6407 14.7286 21.3604 15.039 21.0744C15.9118 20.2702 16.8334 19.4211 17.7027 18.522C17.891 18.3273 17.9852 18.2299 17.9842 18.1071C17.9831 17.9843 17.886 17.8872 17.6918 17.693L14.6393 14.6405C14.4757 14.4769 14.3939 14.3951 14.2966 14.3803C14.1993 14.3654 14.0845 14.4256 13.8551 14.5459C13.3006 14.8367 12.6695 15.0012 12 15.0012C9.79086 15.0012 8 13.2103 8 11.0012C8 10.3316 8.16449 9.70054 8.45528 9.14606C8.57559 8.91663 8.63575 8.80192 8.62092 8.70459C8.60609 8.60726 8.52429 8.52546 8.36069 8.36186L5.03439 5.03556C4.82029 4.82146 4.71323 4.71441 4.57776 4.72315C4.44229 4.7319 4.35385 4.8467 4.17695 5.07631C3.70675 5.68662 3.30801 6.35915 2.99714 7.08585Z',
  d11: 'M20.0582 15.6609C21.659 13.2362 22.4261 10.4045 21.0059 7.08468C19.478 3.51303 15.8276 1.25 12.0015 1.25C10.2694 1.25 8.57335 1.71376 7.09393 2.55275C6.80841 2.71466 6.66566 2.79562 6.64568 2.94294C6.62571 3.09025 6.7467 3.21125 6.98869 3.45323L10.4766 6.94111C10.5997 7.06426 10.6613 7.12584 10.7359 7.14721C10.8105 7.16859 10.9053 7.14667 11.0948 7.10283C11.3857 7.03556 11.6886 7 11.9999 7C14.2091 7 15.9999 8.79086 15.9999 11C15.9999 11.3113 15.9644 11.6143 15.8971 11.9051C15.8532 12.0946 15.8313 12.1894 15.8527 12.264C15.8741 12.3386 15.9357 12.4002 16.0588 12.5233L19.2677 15.7322C19.4424 15.9069 19.5297 15.9942 19.634 16.006C19.6755 16.0107 19.7206 16.0061 19.7603 15.9932C19.8602 15.9608 19.9262 15.8608 20.0582 15.6609Z',
  d12: 'M9 9.25C8.66525 9.78668 8.5 10.5709 8.5 11.25C8.5 13.183 10.067 14.75 12 14.75C12.6598 14.75 13.4732 14.5674 14 14.25',
  d13: 'M11.5 7.78544C11.6633 7.76209 11.8302 7.75 12 7.75C13.933 7.75 15.5 9.317 15.5 11.25C15.5 11.4198 15.4879 11.5867 15.4646 11.75',
  d14: 'M2 2.25L22 22.25',
  d15: 'M19.3003 16.372C20.3051 14.911 21.001 13.1965 21.001 11.25C21.001 6.27944 16.9716 2.25 12.001 2.25C10.0724 2.25 8.28547 2.85662 6.82064 3.88946M17.8642 18.1138C15.2671 20.7984 12.001 22.25 12.001 22.25C12.001 22.25 3.00098 18.25 3.00098 11.25C3.00098 9.02058 3.8116 6.98048 5.15418 5.40839',
  d16: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d17: 'M10.2203 21.8483C10.6562 22.0977 11.0206 22.2874 11.2779 22.4156L12 22.75L12.7221 22.4156C12.9794 22.2874 13.3438 22.0977 13.7796 21.8483C14.6496 21.3505 15.813 20.6101 16.9801 19.6407C17.443 19.2562 17.912 18.831 18.366 18.366L14.2841 14.2841C13.6365 14.7354 12.8492 15 12 15C9.79086 15 8 13.2091 8 11C8 10.1508 8.26461 9.36347 8.71586 8.71586L4.61861 4.61861C3.14267 6.32169 2.25 8.54095 2.25 10.968C2.25 14.7912 4.71077 17.7227 7.01986 19.6407C8.18703 20.6101 9.35038 21.3505 10.2203 21.8483Z',
  d18: 'M21.75 10.968C21.75 5.60091 17.3848 1.25 12 1.25C9.95398 1.25 8.05516 1.87815 6.48706 2.95152L10.7385 7.20298C11.1351 7.07129 11.5592 7 12 7C14.2091 7 16 8.79086 16 11C16 11.4408 15.9287 11.8649 15.797 12.2615L19.964 16.4285C21.0115 14.8893 21.75 13.0624 21.75 10.968Z',
};

export const IconLocationOffline01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-01-stroke-rounded IconLocationOffline01StrokeRounded"
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

export const IconLocationOffline01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-01-duotone-rounded IconLocationOffline01DuotoneRounded"
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

export const IconLocationOffline01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-01-twotone-rounded IconLocationOffline01TwotoneRounded"
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

export const IconLocationOffline01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-01-solid-rounded IconLocationOffline01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const IconLocationOffline01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-01-bulk-rounded IconLocationOffline01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationOffline01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-01-stroke-sharp IconLocationOffline01StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationOffline01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-01-solid-sharp IconLocationOffline01SolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLocationOffline01: TheIconSelfPack = {
  name: 'LocationOffline01',
  StrokeRounded: IconLocationOffline01StrokeRounded,
  DuotoneRounded: IconLocationOffline01DuotoneRounded,
  TwotoneRounded: IconLocationOffline01TwotoneRounded,
  SolidRounded: IconLocationOffline01SolidRounded,
  BulkRounded: IconLocationOffline01BulkRounded,
  StrokeSharp: IconLocationOffline01StrokeSharp,
  SolidSharp: IconLocationOffline01SolidSharp,
};