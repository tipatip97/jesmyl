import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.4173 15.7133C23.368 10.7038 22.3007 5.73508 19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801L11.9998 4.84158M19.4173 15.7133C18.469 16.9156 17.2317 18.1204 15.6605 19.2834C14.1143 20.4278 13.3412 21 12 21C10.6588 21 9.88572 20.4278 8.33953 19.2834C0.22172 13.2749 1.01807 6.15293 4.53744 3.99415C7.21909 2.34923 9.55962 3.01211 10.9656 4.06801L11.9998 4.84158M19.4173 15.7133L13.8921 9.44479C13.6659 9.1882 13.2873 9.13296 12.9972 9.31424L10.8111 10.6806C10.0418 11.1614 9.04334 11.0532 8.3949 10.4187C7.53837 9.58062 7.62479 8.17769 8.5777 7.45106L11.9998 4.84158',
  d2: 'M15.6605 19.2834C17.2317 18.1204 18.469 16.9156 19.4173 15.7133L13.8921 9.44479C13.6659 9.1882 13.2873 9.13296 12.9972 9.31424L10.8111 10.6806C10.0418 11.1614 9.04334 11.0532 8.3949 10.4187C7.53837 9.58062 7.62479 8.17769 8.5777 7.45106L11.9998 4.84158L10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.22172 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834Z',
  d3: 'M19.4632 3.99415C16.7816 2.34923 14.4411 3.01211 13.035 4.06801L12.0005 4.84158L8.57837 7.45106C7.62546 8.17769 7.53905 9.58062 8.39558 10.4187C9.04402 11.0532 10.0425 11.1614 10.8118 10.6806L12.9979 9.31424C13.2879 9.13296 13.6666 9.1882 13.8927 9.44479L19.418 15.7133C23.3687 10.7038 22.3014 5.73508 19.4632 3.99415Z',
  d4: 'M19.4173 15.7133C18.469 16.9156 17.2317 18.1204 15.6605 19.2834C14.1143 20.4278 13.3412 21 12 21C10.6588 21 9.88572 20.4278 8.33953 19.2834C0.22172 13.2749 1.01807 6.15293 4.53744 3.99415C7.21909 2.34923 9.55962 3.01211 10.9656 4.06801L11.9998 4.84158',
  d5: 'M12.4256 3.48642C14.073 2.25279 16.795 1.52145 19.8056 3.36358C23.2609 5.47781 24.0947 11.0675 20.0178 16.2243C19.8382 16.4514 19.5669 16.5873 19.277 16.5952C18.9872 16.6031 18.7088 16.4822 18.5171 16.2653L13.2818 10.3404L11.3567 11.5406C10.2222 12.2479 8.74976 12.0887 7.79351 11.1554C6.53039 9.92249 6.65782 7.8587 8.06308 6.78978L11.4152 4.24002L12.4247 3.48706L12.4256 3.48642Z',
  d6: 'M11.5771 3.48706C11.5768 3.4869 11.5773 3.48722 11.5771 3.48706L12.5864 4.24017C12.8318 4.4233 12.9769 4.71066 12.9783 5.01639C12.9797 5.32212 12.8373 5.6108 12.5936 5.79619L9.24881 8.34037C8.79133 8.68836 8.74984 9.36023 9.16106 9.7616C9.47237 10.0654 9.95171 10.1173 10.3211 9.887L12.4578 8.55486C13.1468 8.12527 14.0463 8.25617 14.5836 8.86424L19.984 14.9759C20.2961 15.3292 20.3105 15.8545 20.0182 16.2243C19.032 17.4717 17.758 18.7053 16.1603 19.885C16.1181 19.9162 16.0763 19.9471 16.0348 19.9777C14.6371 21.0107 13.6369 21.75 12.0011 21.75C10.3653 21.75 9.36507 21.0107 7.96742 19.9777C7.92594 19.9471 7.8841 19.9162 7.84189 19.885C3.71744 16.8398 1.7418 13.4235 1.33127 10.3701C0.923295 7.33572 2.08327 4.65643 4.19617 3.36358C7.20689 1.52137 9.92972 2.25334 11.5771 3.48706ZM10.3791 5.0284C9.2751 4.21332 7.43305 3.67056 5.21827 5.02575C3.89135 5.83767 2.94223 7.68263 3.26871 10.1109C3.59264 12.5201 5.19499 15.5047 9.00485 18.3177C10.563 19.4681 11.0637 19.8 12.0011 19.8C12.9385 19.8 13.4392 19.4681 14.9974 18.3177C16.1937 17.4344 17.1731 16.5331 17.9635 15.6382L13.2822 10.3404L11.3571 11.5406C10.2226 12.2479 8.75018 12.0887 7.79394 11.1554C6.53081 9.92249 6.65824 7.8587 8.0635 6.78978L10.3791 5.0284Z',
  d7: 'M11.9996 4.7597C11.9996 4.7597 14.8657 1.60383 18.8574 3.74469C22.2602 5.56975 23.4401 11.1406 19.6424 15.8521M11.9996 4.7597C11.9996 4.7597 9.13332 1.60382 5.14162 3.74468C0.306905 6.33768 -0.0402651 16.492 11.9996 21C15.5653 19.6649 18.0445 17.8346 19.6424 15.8521M11.9996 4.7597L8.73041 7.2052C7.76836 7.92486 7.5576 9.28132 8.25592 10.259C8.94913 11.2295 10.2874 11.4747 11.2797 10.8132L13.9995 9L19.6424 15.8521',
  d8: 'M20.2329 16.32C18.5434 18.4037 15.9646 20.2747 12.3437 21.6224L12.001 21.75L11.6582 21.6224C5.54062 19.3454 2.39949 15.5674 1.51256 11.8556C0.638737 8.19873 1.99644 4.60255 4.83534 3.08898C7.09408 1.88473 9.08765 2.16411 10.4977 2.76532C11.1897 3.06037 11.7358 3.42904 12.1094 3.72343L10.4058 4.90434C10.2073 4.78164 9.9799 4.65918 9.72705 4.55137C8.76074 4.13936 7.40249 3.92558 5.75936 4.80163C3.87233 5.8077 2.69738 8.40484 3.41463 11.4065C4.10437 14.293 6.58796 17.5623 12.001 19.6718C14.7943 18.5831 16.8071 17.184 18.1933 15.6953L20.2329 16.32Z',
  d9: 'M13.5055 2.76532C14.9156 2.1641 16.9091 1.88474 19.1678 3.08899C23.1884 5.23255 24.2122 11.4141 20.2343 16.32L19.4655 17.2053L13.7644 10.3476L11.8409 11.6223C10.4319 12.5561 8.53177 12.2099 7.5475 10.8401C6.55598 9.46016 6.85524 7.54558 8.22122 6.52981L11.8939 3.72344C12.2675 3.42905 12.8136 3.06037 13.5055 2.76532Z',
};

export const IconServiceStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="service-stroke-rounded IconServiceStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconServiceDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="service-duotone-rounded IconServiceDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconServiceTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="service-twotone-rounded IconServiceTwotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconServiceSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="service-solid-rounded IconServiceSolidRounded"
    >
      <path 
        d={d.d5} 
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

export const IconServiceBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="service-bulk-rounded IconServiceBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconServiceStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="service-stroke-sharp IconServiceStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconServiceSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="service-solid-sharp IconServiceSolidSharp"
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

export const iconPackOfService: TheIconSelfPack = {
  name: 'Service',
  StrokeRounded: IconServiceStrokeRounded,
  DuotoneRounded: IconServiceDuotoneRounded,
  TwotoneRounded: IconServiceTwotoneRounded,
  SolidRounded: IconServiceSolidRounded,
  BulkRounded: IconServiceBulkRounded,
  StrokeSharp: IconServiceStrokeSharp,
  SolidSharp: IconServiceSolidSharp,
};