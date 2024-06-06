import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.1918 9.44118L17.2265 7.46899C15.8104 6.04799 15.2554 5.28357 14.4886 5.55381C13.5325 5.89077 13.8472 8.01692 13.8472 8.73471C12.3607 8.73471 10.8152 8.60259 9.34985 8.87787C4.51259 9.78664 3 13.7153 3 18C4.3691 17.0302 5.73683 15.997 7.38233 15.5476C9.43637 14.9865 11.7304 15.2542 13.8472 15.2542C13.8472 15.972 13.5325 18.0982 14.4886 18.4351C15.3575 18.7413 15.8104 17.9409 17.2265 16.5199L19.1918 14.5477C20.3973 13.338 21 12.7332 21 11.9945C21 11.2558 20.3973 10.6509 19.1918 9.44118Z',
  d2: 'M21 11.9945C21 11.2558 20.3973 10.6509 19.1918 9.44118L17.2265 7.46899C15.8104 6.04799 15.2554 5.28357 14.4886 5.55381C13.5325 5.89077 13.8472 8.01692 13.8472 8.73471C12.3607 8.73471 10.8152 8.60259 9.34985 8.87787C4.51259 9.78664 3 13.7153 3 18',
  d3: 'M14.2393 4.84645C14.579 4.72674 14.922 4.71822 15.2608 4.82225C15.5757 4.91889 15.8486 5.10113 16.0874 5.29546C16.5392 5.66307 17.0952 6.27477 17.7577 6.93959C18.4247 7.60895 19.0917 8.27833 19.7588 8.94766C20.331 9.52188 20.8124 10.0049 21.1441 10.4393C21.4947 10.8986 21.75 11.3933 21.75 11.9945C21.75 12.5957 21.4947 13.0903 21.1441 13.5496C20.8124 13.984 20.331 14.467 19.7588 15.0413L17.7577 17.0493C17.2162 17.5928 16.7233 18.1986 16.1384 18.6964C15.9031 18.8967 15.6259 19.0885 15.2928 19.1852C14.9371 19.2883 14.5849 19.2642 14.2394 19.1425C13.7272 18.962 13.4428 18.5542 13.2903 18.1796C13.1407 17.8117 13.0832 17.3984 13.0608 17.0336C13.0384 16.6697 13.0484 16.303 13.0627 15.9944C12.2344 15.9758 11.4153 15.9381 10.5934 15.9405C9.52472 15.9436 8.51377 16.016 7.57996 16.2711C6.19418 16.6496 5.01677 17.4867 3.72537 18.4048C3.20917 18.7718 2.25 18.9112 2.25 18C2.25 15.7826 2.63928 13.5774 3.71853 11.7859C4.81541 9.96524 6.58967 8.6333 9.21137 8.14077C10.486 7.90131 11.8445 7.94934 13.0618 7.97463C13.048 7.67021 13.0389 7.31145 13.0608 6.95538C13.0832 6.59054 13.1407 6.1772 13.2903 5.80938C13.4428 5.43471 13.7272 5.02695 14.2393 4.84645Z',
  d4: 'M6.82986 16.0983C5.68627 16.4316 4.86047 17.036 4.02962 17.7232C3.36752 18.2708 3.03647 18.5447 2.74164 18.3925C2.44681 18.2403 2.47894 17.8232 2.5432 16.9892C2.86696 12.787 4.37483 9.13626 9.01201 8.20689C10.3108 7.94659 11.6664 7.99415 13 8.02375V15.7361C10.9425 15.6816 8.78787 15.5277 6.82986 16.0983Z',
  d5: 'M15.2787 5.06975C14.9278 4.96932 14.5725 4.97754 14.2207 5.09313C13.6902 5.26739 13.3957 5.6611 13.2378 6.02285C13.0827 6.37798 13.0233 6.77707 13 7.12933V16.86C13.0233 17.2122 13.0827 17.6113 13.2378 17.9665C13.3957 18.3282 13.6902 18.7219 14.2207 18.8962C14.5786 19.0137 14.9434 19.037 15.3118 18.9374C15.6569 18.8441 15.944 18.6588 16.1877 18.4654C16.7935 17.9848 17.304 17.3999 17.8649 16.8752L19.9376 14.9364C20.5303 14.382 21.0289 13.9156 21.3724 13.4961C21.7356 13.0527 22 12.5751 22 11.9946C22 11.4142 21.7356 10.9366 21.3724 10.4932C21.0289 10.0737 20.5303 9.60732 19.9376 9.05291L17.8649 7.11408C17.1787 6.47219 16.6028 5.88158 16.1349 5.52665C15.8876 5.33902 15.6048 5.16307 15.2787 5.06975Z',
  d6: 'M14.0105 5.51004V8.99847L9.61961 9.02413C6.96559 8.98544 5.08673 9.86713 3.80283 12.0417C2.86458 13.5297 3.00784 15.0448 3.00784 18.01C3.00763 18.0183 3.01687 18.0236 3.02357 18.0187C4.62847 16.8517 6.36249 15.0292 9.69516 15.0292C10.4868 15.0292 11.7789 15.0134 14.0105 15.0134V18.49C14.0105 18.4987 14.0209 18.5033 14.0273 18.4973L20.9968 12.0098C21.0011 12.0059 21.0011 11.9991 20.9968 11.9952L14.0273 5.5027C14.0209 5.49674 14.0105 5.50129 14.0105 5.51004Z',
  d7: 'M13.7001 4.8126C13.9734 4.69333 14.2915 4.74736 14.5101 4.9502L21.5101 11.4447C21.663 11.5865 21.7499 11.7856 21.75 11.9942C21.7501 12.2027 21.6633 12.4019 21.5106 12.5439L14.5106 19.0494C14.292 19.2525 13.9739 19.3068 13.7004 19.1876C13.4268 19.0684 13.25 18.7984 13.25 18.5V15.75H12C9.64662 15.75 8.61578 15.7568 7.65242 16.0354C7.46565 16.0895 7.28114 16.151 7.09932 16.2198C6.16146 16.5749 5.3327 17.188 3.45 18.6C3.22274 18.7705 2.91868 18.7979 2.66459 18.6708C2.4105 18.5438 2.25 18.2841 2.25 18V17.9719C2.25 16.5979 2.25 15.5283 2.30883 14.666C2.36853 13.7911 2.49129 13.0748 2.76381 12.4169C3.4489 10.763 4.76295 9.44891 6.41689 8.76383C7.07482 8.49131 7.79108 8.36854 8.66601 8.30885C9.52832 8.25001 10.5978 8.25001 11.9718 8.25002H13.25V5.50002C13.25 5.20177 13.4267 4.93187 13.7001 4.8126Z',
};

export const IconLinkForwardStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-forward-stroke-rounded IconLinkForwardStrokeRounded"
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

export const IconLinkForwardDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-forward-duotone-rounded IconLinkForwardDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconLinkForwardTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-forward-twotone-rounded IconLinkForwardTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLinkForwardSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-forward-solid-rounded IconLinkForwardSolidRounded"
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

export const IconLinkForwardBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-forward-bulk-rounded IconLinkForwardBulkRounded"
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

export const IconLinkForwardStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-forward-stroke-sharp IconLinkForwardStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLinkForwardSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-forward-solid-sharp IconLinkForwardSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLinkForward: TheIconSelfPack = {
  name: 'LinkForward',
  StrokeRounded: IconLinkForwardStrokeRounded,
  DuotoneRounded: IconLinkForwardDuotoneRounded,
  TwotoneRounded: IconLinkForwardTwotoneRounded,
  SolidRounded: IconLinkForwardSolidRounded,
  BulkRounded: IconLinkForwardBulkRounded,
  StrokeSharp: IconLinkForwardStrokeSharp,
  SolidSharp: IconLinkForwardSolidSharp,
};