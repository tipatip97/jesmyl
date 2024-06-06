import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.5088 22C9.57782 22 9.11235 22 8.72528 21.9231C7.13574 21.6075 5.89317 20.3671 5.57699 18.7804C5.5 18.394 5.5 17.9293 5.5 17V11.5C5.5 9.61438 5.5 8.67157 6.08681 8.08579C6.67362 7.5 7.61808 7.5 9.507 7.5H11.5105C13.3994 7.5 14.3439 7.5 14.9307 8.08579C15.3355 8.48987 15.4611 9.06385 15.5 10',
  d2: 'M13.625 20.5L13.625 14.5M15.5 14.5V13M15.5 22V20.5M13.625 17.5H17.375M17.375 17.5C17.9963 17.5 18.5 18.0037 18.5 18.625V19.375C18.5 19.9963 17.9963 20.5 17.375 20.5H12.5M17.375 17.5C17.9963 17.5 18.5 16.9963 18.5 16.375V15.625C18.5 15.0037 17.9963 14.5 17.375 14.5H12.5',
  d3: 'M14 7.5V5.5C14 4.09554 14 3.39331 13.6629 2.88886C13.517 2.67048 13.3295 2.48298 13.1111 2.33706C12.6067 2 11.9045 2 10.5 2C9.09554 2 8.39331 2 7.88886 2.33706C7.67048 2.48298 7.48298 2.67048 7.33706 2.88886C7 3.39331 7 4.09554 7 5.5V7.5',
  d4: 'M10 4.5H11',
  d5: 'M11.5105 7.5H9.50701C7.61808 7.5 6.67362 7.5 6.08681 8.08579C5.5 8.67157 5.5 9.61438 5.5 11.5V17C5.5 17.9293 5.5 18.394 5.57699 18.7804C5.89317 20.3671 7.13574 21.6075 8.72528 21.9231C9.11235 22 9.57782 22 10.5088 22C13.2777 21.9574 15.5 19.7006 15.5 16.9313V10C15.4611 9.06385 15.3355 8.48987 14.9307 8.08579C14.3439 7.5 13.3994 7.5 11.5105 7.5Z',
  d6: 'M15.5 12.25C15.9142 12.25 16.25 12.5858 16.25 13V13.75H17.375C18.4105 13.75 19.25 14.5895 19.25 15.625V16.375C19.25 16.7971 19.1105 17.1866 18.8751 17.5C19.1105 17.8134 19.25 18.2029 19.25 18.625V19.375C19.25 20.4105 18.4105 21.25 17.375 21.25H16.25V22C16.25 22.4142 15.9142 22.75 15.5 22.75C15.0858 22.75 14.75 22.4142 14.75 22V21.25H12.5C12.0858 21.25 11.75 20.9142 11.75 20.5C11.75 20.0858 12.0858 19.75 12.5 19.75H12.875L12.875 15.25H12.5C12.0858 15.25 11.75 14.9142 11.75 14.5C11.75 14.0858 12.0858 13.75 12.5 13.75H14.75V13C14.75 12.5858 15.0858 12.25 15.5 12.25ZM14.375 15.25V16.75H17.375C17.5821 16.75 17.75 16.5821 17.75 16.375V15.625C17.75 15.4179 17.5821 15.25 17.375 15.25H14.375ZM17.375 18.25H14.375L14.375 19.75H17.375C17.5821 19.75 17.75 19.5821 17.75 19.375V18.625C17.75 18.4179 17.5821 18.25 17.375 18.25Z',
  d7: 'M10.5384 1.25C11.2079 1.24998 11.7667 1.24997 12.219 1.29598C12.6925 1.34415 13.1318 1.44886 13.5278 1.71346C13.8281 1.9141 14.0859 2.17191 14.2865 2.47218C14.5511 2.86818 14.6559 3.30755 14.704 3.78102C14.75 4.23335 14.75 4.79206 14.75 5.46163V5.46166L14.75 7.5C14.75 7.91422 14.4142 8.25 14 8.25C13.5858 8.25 13.25 7.91422 13.25 7.5V5.5C13.25 4.78216 13.2491 4.30023 13.2117 3.93283C13.1756 3.57796 13.1118 3.41399 13.0393 3.30554C12.9481 3.16905 12.831 3.05186 12.6945 2.96066C12.586 2.8882 12.422 2.82438 12.0672 2.78828C11.6998 2.75091 11.2178 2.75 10.5 2.75C9.78216 2.75 9.30023 2.75091 8.93283 2.78828C8.57796 2.82438 8.41399 2.8882 8.30554 2.96066C8.16905 3.05186 8.05186 3.16905 7.96066 3.30554C7.8882 3.41399 7.82438 3.57796 7.78828 3.93283C7.75091 4.30023 7.75 4.78216 7.75 5.5V7.5C7.75 7.91422 7.41421 8.25 7 8.25C6.58579 8.25 6.25 7.91422 6.25 7.5V5.46166V5.46163C6.24998 4.79206 6.24997 4.23335 6.29598 3.78102C6.34415 3.30755 6.44886 2.86818 6.71346 2.47218C6.9141 2.17191 7.17191 1.9141 7.47218 1.71346C7.86818 1.44886 8.30755 1.34415 8.78102 1.29598C9.23335 1.24997 9.86877 1.24998 10.5383 1.25H10.5384Z',
  d8: 'M9.25 4.5C9.25 4.08579 9.58579 3.75 10 3.75H11C11.4142 3.75 11.75 4.08579 11.75 4.5C11.75 4.91421 11.4142 5.25 11 5.25H10C9.58579 5.25 9.25 4.91421 9.25 4.5Z',
  d9: 'M11.5625 6.75H11.5625H11.5625H9.45508H9.45506H9.45503C8.55487 6.74997 7.80451 6.74995 7.20887 6.82989C6.58036 6.91424 6.013 7.09976 5.55696 7.555C5.10075 8.01041 4.91467 8.57732 4.83008 9.20535C4.74996 9.80022 4.74999 10.5495 4.75002 11.4479L4.75002 17L4.75001 17.0954C4.74988 17.9333 4.7498 18.4669 4.84147 18.9269C5.21706 20.8118 6.69278 22.2842 8.57922 22.6588C9.03969 22.7502 9.74667 22.7501 10.5864 22.75H10.5865H10.5865C11.2256 22.7501 11.6876 22.7502 12.0749 22.7099C11.0355 22.5112 10.25 21.5973 10.25 20.5C10.25 19.6672 10.7025 18.94 11.375 18.551V16.449C10.7025 16.06 10.25 15.3328 10.25 14.5C10.25 13.2574 11.2574 12.25 12.5 12.25H13.378C13.6869 11.3761 14.5203 10.75 15.5 10.75C15.7606 10.75 16.0109 10.7943 16.2438 10.8758L16.2427 9.8262C16.1963 8.9386 16.0548 8.14817 15.4606 7.555C15.0045 7.09976 14.4372 6.91424 13.8087 6.82989C13.213 6.74995 12.4627 6.74997 11.5625 6.75Z',
  d10: 'M10.5384 1.25C9.86879 1.24999 9.23335 1.24997 8.78102 1.29599C8.30755 1.34415 7.86818 1.44886 7.47218 1.71346C7.17191 1.9141 6.9141 2.17191 6.71346 2.47218C6.44886 2.86818 6.34415 3.30755 6.29599 3.78102C6.24997 4.23334 6.24999 4.79205 6.25 5.46161V7.08251C6.54641 6.95084 6.86868 6.87555 7.20887 6.82989C7.37696 6.80733 7.55738 6.79114 7.75 6.77952V5.5C7.75 4.78216 7.75091 4.30023 7.78828 3.93283C7.82438 3.57796 7.8882 3.41399 7.96067 3.30554C8.05186 3.16905 8.16905 3.05186 8.30554 2.96067C8.41399 2.8882 8.57796 2.82438 8.93283 2.78828C9.30023 2.75091 9.78216 2.75 10.5 2.75C11.2178 2.75 11.6998 2.75091 12.0672 2.78828C12.422 2.82438 12.586 2.8882 12.6945 2.96067C12.831 3.05186 12.9481 3.16905 13.0393 3.30554C13.1118 3.41399 13.1756 3.57796 13.2117 3.93283C13.2491 4.30023 13.25 4.78216 13.25 5.5V6.77848C13.4492 6.79017 13.6355 6.80665 13.8087 6.82989C14.1422 6.87465 14.4584 6.94789 14.75 7.07479L14.75 5.46166C14.75 4.7921 14.75 4.23335 14.704 3.78102C14.6559 3.30755 14.5511 2.86818 14.2865 2.47218C14.0859 2.17191 13.8281 1.9141 13.5278 1.71346C13.1318 1.44886 12.6925 1.34415 12.219 1.29599C11.7667 1.24997 11.2079 1.24999 10.5384 1.25Z',
  d11: 'M15.5 11V7.5H5.5V17C5.5 19.7614 7.73858 22 10.5 22',
  d12: 'M14 7.5V2H7V7.5',
  d13: 'M9.5 4.5H11.5',
  d14: 'M16.25 12.25V13.75H17.375C18.4105 13.75 19.25 14.5895 19.25 15.625V16.375C19.25 16.7971 19.1105 17.1866 18.8751 17.5C19.1105 17.8134 19.25 18.2029 19.25 18.625V19.375C19.25 20.4105 18.4105 21.25 17.375 21.25H16.25V22.75H14.75V21.25H11.75V19.75H12.875L12.875 15.25H11.75V13.75H14.75V12.25H16.25ZM14.375 15.25V16.75H17.375C17.5821 16.75 17.75 16.5821 17.75 16.375V15.625C17.75 15.4179 17.5821 15.25 17.375 15.25H14.375ZM17.375 18.25H14.375L14.375 19.75H17.375C17.5821 19.75 17.75 19.5821 17.75 19.375V18.625C17.75 18.4179 17.5821 18.25 17.375 18.25Z',
  d15: 'M6.25 2C6.25 1.58579 6.58579 1.25 7 1.25H14C14.4142 1.25 14.75 1.58579 14.75 2V7.5C14.75 7.91421 14.4142 8.25 14 8.25C13.5858 8.25 13.25 7.91421 13.25 7.5V2.75H7.75V7.5C7.75 7.91421 7.41421 8.25 7 8.25C6.58579 8.25 6.25 7.91421 6.25 7.5V2Z',
  d16: 'M11.5 5.25H9.5V3.75H11.5V5.25Z',
  d17: 'M16.25 10.75H13.25V12.25H10.25V22.7447C7.19035 22.6138 4.75 20.0919 4.75 17V6.75H16.25V10.75Z',
};

export const IconBitcoinFlashdiskStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-flashdisk-stroke-rounded IconBitcoinFlashdiskStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinFlashdiskDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-flashdisk-duotone-rounded IconBitcoinFlashdiskDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinFlashdiskTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-flashdisk-twotone-rounded IconBitcoinFlashdiskTwotoneRounded"
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

export const IconBitcoinFlashdiskSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-flashdisk-solid-rounded IconBitcoinFlashdiskSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinFlashdiskBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-flashdisk-bulk-rounded IconBitcoinFlashdiskBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBitcoinFlashdiskStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-flashdisk-stroke-sharp IconBitcoinFlashdiskStrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinFlashdiskSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-flashdisk-solid-sharp IconBitcoinFlashdiskSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoinFlashdisk: TheIconSelfPack = {
  name: 'BitcoinFlashdisk',
  StrokeRounded: IconBitcoinFlashdiskStrokeRounded,
  DuotoneRounded: IconBitcoinFlashdiskDuotoneRounded,
  TwotoneRounded: IconBitcoinFlashdiskTwotoneRounded,
  SolidRounded: IconBitcoinFlashdiskSolidRounded,
  BulkRounded: IconBitcoinFlashdiskBulkRounded,
  StrokeSharp: IconBitcoinFlashdiskStrokeSharp,
  SolidSharp: IconBitcoinFlashdiskSolidSharp,
};