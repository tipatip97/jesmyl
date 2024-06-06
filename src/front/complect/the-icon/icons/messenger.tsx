import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 14L8.9954 11.6055C9.63153 10.8422 9.9496 10.4605 10.3333 10.4605C10.7171 10.4605 11.0351 10.8422 11.6713 11.6055L12.3287 12.3945C12.9649 13.1578 13.2829 13.5395 13.6667 13.5395C14.0504 13.5395 14.3685 13.1578 15.0046 12.3945L17 10',
  d2: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z',
  d3: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 13.4809 1.54987 14.8937 2.09292 16.1795C2.23537 16.5168 2.33141 16.7447 2.39555 16.9198C2.46098 17.0985 2.47017 17.1631 2.47132 17.1798C2.47782 17.2737 2.45405 17.4013 2.2919 18.0074L1.27549 21.8061C1.20625 22.0649 1.28027 22.3409 1.46967 22.5303C1.65907 22.7197 1.9351 22.7937 2.19385 22.7245L5.99263 21.7081C6.59866 21.5459 6.72634 21.5222 6.82024 21.5287C6.8369 21.5298 6.90153 21.539 7.08017 21.6045C7.25532 21.6686 7.48325 21.7646 7.82054 21.9071C9.10632 22.4501 10.5191 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM13.7007 14.6585C14.0649 14.6585 14.3662 14.5347 14.6095 14.3766C14.692 14.3231 14.7332 14.2963 14.8836 14.147C15.0341 13.9977 15.1033 13.8932 15.2419 13.6844L17.932 9.62858C18.0414 9.4637 18.0165 9.24149 17.8735 9.10638C17.7252 8.96626 17.4975 8.96434 17.347 9.10193L14.3658 11.8271C13.9948 12.1662 13.4374 12.1344 13.1193 11.7428L12.4485 10.9169L12.4115 10.8714L12.4115 10.8713C12.1192 10.5114 11.8385 10.1657 11.577 9.91841C11.2963 9.65286 10.8769 9.34157 10.2993 9.34157C9.9351 9.34157 9.63379 9.46537 9.39047 9.62342C9.30803 9.67698 9.2668 9.70375 9.11637 9.85306C8.96594 10.0024 8.89668 10.1068 8.75815 10.3156L6.06793 14.3714C5.95856 14.5363 5.98347 14.7585 6.12648 14.8936C6.27476 15.0337 6.50243 15.0357 6.65294 14.8981L9.63424 12.1729C10.0052 11.8338 10.5626 11.8656 10.8807 12.2572L11.5516 13.0831L11.5885 13.1287C11.8808 13.4887 12.1615 13.8343 12.423 14.0816C12.7038 14.3472 13.1231 14.6585 13.7007 14.6585Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C10.5191 22.75 9.10632 22.4501 7.82055 21.9071C7.48325 21.7646 7.25532 21.6686 7.08018 21.6045C6.90153 21.539 6.8369 21.5298 6.82024 21.5287C6.72634 21.5222 6.59866 21.5459 5.99263 21.7081L2.19386 22.7245C1.9351 22.7937 1.65907 22.7197 1.46967 22.5303C1.28027 22.3409 1.20626 22.0649 1.27549 21.8061L2.2919 18.0074C2.45406 17.4013 2.47782 17.2737 2.47132 17.1798C2.47017 17.1631 2.46098 17.0985 2.39555 16.9198C2.33141 16.7447 2.23537 16.5168 2.09292 16.1795C1.54987 14.8937 1.25 13.4809 1.25 12Z',
  d5: 'M14.6095 14.3766C14.3662 14.5347 14.0649 14.6585 13.7007 14.6585C13.1231 14.6585 12.7038 14.3472 12.423 14.0816C12.1615 13.8343 11.8809 13.4887 11.5885 13.1287L11.5885 13.1287L11.5516 13.0831L10.8807 12.2572C10.5626 11.8656 10.0052 11.8338 9.63424 12.1729L6.65294 14.8981C6.50243 15.0357 6.27476 15.0337 6.12648 14.8936C5.98347 14.7585 5.95856 14.5363 6.06793 14.3714L8.75816 10.3156C8.89668 10.1068 8.96594 10.0024 9.11637 9.85306C9.26681 9.70375 9.30803 9.67698 9.39048 9.62342C9.63379 9.46537 9.9351 9.34157 10.2993 9.34157C10.8769 9.34157 11.2963 9.65286 11.577 9.91841C11.8385 10.1657 12.1192 10.5114 12.4115 10.8713L12.4115 10.8713L12.4485 10.9169L13.1193 11.7428C13.4374 12.1344 13.9948 12.1662 14.3658 11.8271L17.347 9.10193C17.4975 8.96434 17.7252 8.96626 17.8735 9.10638C18.0165 9.24149 18.0414 9.4637 17.932 9.62858L15.2419 13.6844C15.1033 13.8932 15.0341 13.9977 14.8836 14.147C14.7332 14.2963 14.692 14.3231 14.6095 14.3766Z',
  d6: 'M6.99998 14L9.99998 10.5L13.5 13.5L17 10',
  d7: 'M12 22.002C17.5239 22.002 22.002 17.5239 22.002 12C22.002 6.47607 17.5239 1.99805 12 1.99805C6.47605 1.99805 1.99803 6.47607 1.99803 12C1.99803 13.8889 2.432 15.4979 3.34202 17.005L2.00254 21.9852C2.00054 21.9926 2.00735 21.9995 2.0148 21.9974L6.97042 20.666C8.48342 21.5862 10.0997 22.002 12 22.002Z',
  d8: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 13.8443 1.71503 15.5819 2.53465 17.1001L1.27549 21.8061C1.20626 22.0649 1.28027 22.3409 1.46967 22.5303C1.65907 22.7197 1.9351 22.7937 2.19386 22.7245L6.89988 21.4653C8.41806 22.285 10.1557 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM14.2066 14.2072L17.7066 10.7072L16.2924 9.29297L13.4472 12.1382L10.6503 9.74082C10.2309 9.3814 9.59964 9.42996 9.24022 9.84928L6.24022 13.3493L7.75873 14.6509L10.1079 11.9101L12.8487 14.2593C13.2454 14.5994 13.8371 14.5767 14.2066 14.2072Z',
};

export const IconMessengerStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="messenger-stroke-rounded IconMessengerStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessengerDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="messenger-duotone-rounded IconMessengerDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessengerTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="messenger-twotone-rounded IconMessengerTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessengerSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="messenger-solid-rounded IconMessengerSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessengerBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="messenger-bulk-rounded IconMessengerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessengerStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="messenger-stroke-sharp IconMessengerStrokeSharp"
    >
      <path 
        d={d.d6} 
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

export const IconMessengerSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="messenger-solid-sharp IconMessengerSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMessenger: TheIconSelfPack = {
  name: 'Messenger',
  StrokeRounded: IconMessengerStrokeRounded,
  DuotoneRounded: IconMessengerDuotoneRounded,
  TwotoneRounded: IconMessengerTwotoneRounded,
  SolidRounded: IconMessengerSolidRounded,
  BulkRounded: IconMessengerBulkRounded,
  StrokeSharp: IconMessengerStrokeSharp,
  SolidSharp: IconMessengerSolidSharp,
};