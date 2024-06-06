import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 21C12.2792 21 12.5388 20.8728 13.0579 20.6184L17.2304 18.5737C19.0768 17.6688 20 17.2164 20 16.5V7.5M12 21C11.7208 21 11.4612 20.8728 10.9421 20.6184L6.76956 18.5737C4.92319 17.6688 4 17.2164 4 16.5V7.5M12 21V12',
  d2: 'M10.9421 3.38159C11.4612 3.1272 11.7208 3 12 3C12.2792 3 12.5388 3.1272 13.0579 3.38159L17.2304 5.42635C19.0768 6.33116 20 6.78357 20 7.5C20 8.21643 19.0768 8.66884 17.2304 9.57365L13.0579 11.6184C12.5388 11.8728 12.2792 12 12 12C11.7208 12 11.4612 11.8728 10.9421 11.6184L6.76956 9.57365C4.92319 8.66884 4 8.21643 4 7.5C4 6.78357 4.92319 6.33116 6.76956 5.42635L10.9421 3.38159Z',
  d3: 'M13.0579 20.6184L17.2304 18.5737C19.0768 17.6688 20 17.2164 20 16.5V7.5C20 6.78357 19.0768 6.33116 17.2304 5.42635L17.2304 5.42635L13.0579 3.38159C12.5388 3.1272 12.2792 3 12 3C11.7208 3 11.4612 3.1272 10.9421 3.38159L6.76956 5.42635C4.92319 6.33116 4 6.78357 4 7.5C4 8.21643 4.92319 8.66883 6.76956 9.57365L6.76956 9.57365L10.9421 11.6184C11.4612 11.8728 11.7208 12 12 12V21C12.2792 21 12.5388 20.8728 13.0578 20.6184L13.0579 20.6184Z',
  d4: 'M4.22222 6.75C4.75917 6.75 5.19444 7.18327 5.19444 7.71774V16.3624C5.22661 16.3978 5.29796 16.464 5.44429 16.5637C5.82067 16.82 6.41562 17.113 7.34268 17.5652L11.0278 19.3627V12.0726C11.0278 11.5381 11.4631 11.1048 12 11.1048C12.5369 11.1048 12.9722 11.5381 12.9722 12.0726V19.3627L16.6573 17.5652C17.5844 17.113 18.1793 16.82 18.5557 16.5637C18.702 16.464 18.7734 16.3978 18.8056 16.3624V7.71774C18.8056 7.18327 19.2408 6.75 19.7778 6.75C20.3147 6.75 20.75 7.18327 20.75 7.71774V16.4274C20.75 17.2779 20.1645 17.8132 19.6535 18.1612C19.1461 18.5067 18.4203 18.8607 17.5812 19.2699L13.4563 21.282C13.423 21.2983 13.3892 21.3149 13.3549 21.3318C12.9591 21.5268 12.5059 21.75 12 21.75C11.4941 21.75 11.0409 21.5268 10.645 21.3318C10.6108 21.3149 10.577 21.2983 10.5437 21.282L6.4188 19.2699C5.57965 18.8606 4.85393 18.5067 4.34646 18.1612C3.83549 17.8132 3.25 17.2779 3.25 16.4274V7.71774C3.25 7.18327 3.68528 6.75 4.22222 6.75ZM18.8289 16.3317C18.8295 16.3316 18.8277 16.3353 18.8221 16.3428C18.8256 16.3355 18.8284 16.3317 18.8289 16.3317ZM5.17107 16.3317C5.1716 16.3317 5.17442 16.3355 5.17793 16.3428C5.17229 16.3353 5.17054 16.3316 5.17107 16.3317Z',
  d5: 'M10.7083 2.66075C11.1281 2.45371 11.5412 2.25 12 2.25C12.4588 2.25 12.8719 2.45371 13.2917 2.66075L17.6161 4.78013C18.4919 5.20927 19.2243 5.56815 19.7311 5.91479C20.2406 6.26338 20.75 6.75129 20.75 7.5C20.75 8.24871 20.2406 8.73662 19.7311 9.08521C19.2243 9.43185 18.4919 9.79074 17.6161 10.2199L13.2917 12.3393C12.8719 12.5463 12.4588 12.75 12 12.75C11.5412 12.75 11.1281 12.5463 10.7083 12.3393L10.7083 12.3392L6.3839 10.2199C5.5081 9.79073 4.77569 9.43185 4.26894 9.0852C3.75936 8.73662 3.25 8.24871 3.25 7.5C3.25 6.75129 3.75936 6.26338 4.26894 5.91479C4.77569 5.56815 5.50811 5.20926 6.38392 4.78012L10.7083 2.66075Z',
  d6: 'M3.25464 7.62256C3.25157 7.65387 3.25 7.68562 3.25 7.71774V16.4274C3.25 17.2779 3.83549 17.8132 4.34646 18.1612C4.85393 18.5067 5.57965 18.8606 6.4188 19.2699L10.5437 21.282L10.645 21.3318C11.0409 21.5268 11.4941 21.75 12 21.75C12.5059 21.75 12.959 21.5268 13.3549 21.3318L13.4563 21.282L17.5812 19.2699C18.4203 18.8606 19.1461 18.5067 19.6535 18.1612C20.1645 17.8132 20.75 17.2779 20.75 16.4274V7.71774C20.75 7.68562 20.7484 7.65387 20.7454 7.62256C20.6933 8.30256 20.2123 8.75601 19.7311 9.0852C19.4762 9.25956 19.1642 9.43702 18.8056 9.62496V16.3624C18.7734 16.3978 18.702 16.464 18.5557 16.5637C18.1793 16.82 17.5844 17.113 16.6573 17.5652L12.9722 19.3627V12.4931C12.6591 12.6366 12.3423 12.75 12 12.75C11.6577 12.75 11.3409 12.6366 11.0278 12.4931V19.3627L7.34268 17.5652C6.41562 17.113 5.82067 16.82 5.44429 16.5637C5.29796 16.464 5.22661 16.3978 5.19444 16.3624V9.62496C4.83583 9.43702 4.52384 9.25956 4.26894 9.0852C3.78771 8.75601 3.30668 8.30256 3.25464 7.62256ZM18.8289 16.3317C18.8295 16.3316 18.8277 16.3353 18.8221 16.3428C18.8256 16.3354 18.8284 16.3317 18.8289 16.3317ZM5.17107 16.3317C5.1716 16.3317 5.17442 16.3354 5.17793 16.3428C5.17229 16.3353 5.17054 16.3316 5.17107 16.3317Z',
  d7: 'M20 7.5L12 3L4 7.5L12 12L20 7.5Z',
  d8: 'M20 7.5V16.5L12 21L4 16.5V7.5M12 12V20.6287',
  d9: 'M11.6323 2.34632C11.8606 2.21789 12.1394 2.21789 12.3677 2.34632L20.3677 6.84632C20.6039 6.97916 20.75 7.22904 20.75 7.5C20.75 7.77096 20.6039 8.02084 20.3677 8.15368L12.3677 12.6537C12.1394 12.7821 11.8606 12.7821 11.6323 12.6537L3.6323 8.15368C3.39615 8.02084 3.25 7.77096 3.25 7.5C3.25 7.22904 3.39615 6.97916 3.6323 6.84632L11.6323 2.34632Z',
  d10: 'M5.19444 15.8342V7.65283H3.25V16.4028C3.25 16.7541 3.43945 17.078 3.74558 17.2502L11.5234 21.6252C11.8193 21.7917 12.1807 21.7917 12.4766 21.6252L20.2544 17.2502C20.5606 17.078 20.75 16.7541 20.75 16.4028V7.65283H18.8056V15.8342L12.9722 19.1155V12.0278H11.0278V19.1155L5.19444 15.8342Z',
};

export const IconBlockchain01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-01-stroke-rounded IconBlockchain01StrokeRounded"
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

export const IconBlockchain01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-01-duotone-rounded IconBlockchain01DuotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-01-twotone-rounded IconBlockchain01TwotoneRounded"
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

export const IconBlockchain01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-01-solid-rounded IconBlockchain01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBlockchain01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-01-bulk-rounded IconBlockchain01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBlockchain01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-01-stroke-sharp IconBlockchain01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-01-solid-sharp IconBlockchain01SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBlockchain01: TheIconSelfPack = {
  name: 'Blockchain01',
  StrokeRounded: IconBlockchain01StrokeRounded,
  DuotoneRounded: IconBlockchain01DuotoneRounded,
  TwotoneRounded: IconBlockchain01TwotoneRounded,
  SolidRounded: IconBlockchain01SolidRounded,
  BulkRounded: IconBlockchain01BulkRounded,
  StrokeSharp: IconBlockchain01StrokeSharp,
  SolidSharp: IconBlockchain01SolidSharp,
};