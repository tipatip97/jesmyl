import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.5 4.5L22 2',
  d2: 'M2.06697 19.4071C1.99688 18.9866 1.96184 18.7763 2.06329 18.6134C2.16473 18.4506 2.3689 18.3893 2.77723 18.2668L7 17L5.73317 21.2228C5.61067 21.6311 5.54942 21.8353 5.38656 21.9367C5.2237 22.0382 5.01345 22.0031 4.59294 21.933L3.14369 21.6915C2.79801 21.6339 2.62517 21.6051 2.51005 21.49C2.39493 21.3748 2.36612 21.202 2.30851 20.8563L2.06697 19.4071Z',
  d3: 'M15 6L18 9',
  d4: 'M8.82023 15.9304L18.6643 9.44706C20.2341 8.41317 20.4597 6.19872 19.1306 4.86948C17.8015 3.54024 15.5873 3.76583 14.5535 5.33581L8.07079 15.1809C7.79101 15.6058 8.40284 16.2053 8.82023 15.9304Z',
  d5: 'M7 17L8 16',
  d6: 'M8.40533 15.5947C8.69822 15.8876 8.69822 16.3624 8.40533 16.6553L7.53903 17.5216L6.32653 21.5633L6.31747 21.5935L6.31747 21.5935C6.26435 21.7709 6.2062 21.9649 6.13541 22.1243C6.05194 22.3122 5.91556 22.5379 5.6581 22.6983C5.40064 22.8587 5.1379 22.8816 4.93246 22.8736C4.75819 22.8669 4.55835 22.8335 4.37576 22.803L4.34464 22.7978L2.89538 22.5563L2.86915 22.5519C2.71965 22.5271 2.55218 22.4992 2.40943 22.4584C2.23981 22.41 2.03507 22.3256 1.85471 22.1453C1.67435 21.9649 1.58999 21.7602 1.54155 21.5906C1.50077 21.4478 1.47293 21.2804 1.44808 21.1309L1.44371 21.1046L1.20217 19.6554L1.19697 19.6242L1.19697 19.6242C1.16646 19.4416 1.13308 19.2418 1.12636 19.0675C1.11843 18.8621 1.14131 18.5994 1.30169 18.3419C1.46206 18.0844 1.6878 17.9481 1.87569 17.8646C2.03506 17.7938 2.22915 17.7356 2.40648 17.6825L2.40648 17.6825L2.43671 17.6735L6.47837 16.461L7.34467 15.5947C7.63756 15.3018 8.11243 15.3018 8.40533 15.5947Z',
  d7: 'M22.5821 1.41789C22.9726 1.80842 22.9726 2.44158 22.5821 2.83211L20.0821 5.33211C19.6916 5.72263 19.0584 5.72263 18.6679 5.33211C18.2774 4.94158 18.2774 4.30842 18.6679 3.91789L21.1679 1.41789C21.5584 1.02737 22.1916 1.02737 22.5821 1.41789Z',
  d8: 'M14.7289 4.07698C14.5182 4.22921 14.4128 4.30532 14.4018 4.44342C14.3907 4.58153 14.493 4.68378 14.6975 4.88829L19.1112 9.30197C19.3157 9.50651 19.418 9.60878 19.5561 9.59771C19.6942 9.58664 19.7703 9.48125 19.9225 9.27048C20.9529 7.84367 20.8689 5.79813 19.5352 4.46422C18.2012 3.13016 16.1556 3.04628 14.7289 4.07698Z',
  d9: 'M17.6944 11.0261C17.9786 10.8389 18.1207 10.7453 18.1352 10.6035C18.1496 10.4618 18.0293 10.3414 17.7886 10.1007L13.899 6.21109C13.6583 5.9704 13.5379 5.85005 13.3962 5.8645C13.2544 5.87894 13.1608 6.02109 12.9736 6.30538L7.31858 14.8935C6.90795 15.5171 7.21662 16.1649 7.53033 16.4758C7.84101 16.7837 8.48829 17.0892 9.10694 16.6818L17.6944 11.0261Z',
  d10: 'M22.5821 1.41789C22.9726 1.80842 22.9726 2.44158 22.5821 2.83211L20.1469 5.26733C19.985 4.98095 19.7814 4.71046 19.5352 4.46422C19.2892 4.2182 19.019 4.0147 18.7329 3.85287L21.1679 1.41789C21.5584 1.02737 22.1916 1.02737 22.5821 1.41789ZM8.21167 16.849C7.93006 16.7862 7.68725 16.6313 7.53033 16.4758C7.37113 16.318 7.21323 16.0735 7.14997 15.7894L6.47837 16.461L2.43671 17.6735L2.40647 17.6825C2.22914 17.7356 2.03505 17.7938 1.87569 17.8646C1.6878 17.9481 1.46206 18.0844 1.30169 18.3419C1.14131 18.5994 1.11843 18.8621 1.12636 19.0675C1.13308 19.2418 1.16647 19.4417 1.19697 19.6242L1.20217 19.6554L1.44371 21.1046C1.50638 21.4806 1.57314 21.8637 1.85471 22.1453C2.13629 22.4269 2.51936 22.4936 2.89538 22.5563L4.34464 22.7978L4.37585 22.803L4.37587 22.803C4.55843 22.8335 4.75823 22.8669 4.93246 22.8736C5.1379 22.8816 5.40064 22.8587 5.6581 22.6983C5.91556 22.5379 6.05194 22.3122 6.13541 22.1243C6.20623 21.9649 6.26439 21.7707 6.31752 21.5934L6.31752 21.5933L6.32653 21.5633L7.53903 17.5216L8.21167 16.849Z',
  d11: 'M19 5L22 2',
  d12: 'M2 19L6.5 17.5L5.00056 22H2V19Z',
  d13: 'M14 6L18 10',
  d14: 'M7.50049 16.5L18.1643 9.94706C19.7342 8.91317 19.9597 6.69872 18.6306 5.36948C17.3015 4.04024 15.0873 4.26583 14.0535 5.83581L7.50049 16.5Z',
  d15: 'M6.5 17.5L7.5 16.5',
  d16: 'M19.8879 5.17173L22.499 2.56066L21.4384 1.5L18.827 4.11133C17.3607 3.14179 15.391 3.34316 14.1512 4.58975L19.4107 9.84977C20.6578 8.60937 20.8588 6.63833 19.8879 5.17173Z',
  d17: 'M7.15956 15.7798L13.2723 5.83214L18.1684 10.7287L8.21638 16.8443L7.40696 17.6537L5.79205 22.5002H1.50085V18.2097L6.34406 16.5953L7.15956 15.7798Z',
};

export const IconDartStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dart-stroke-rounded IconDartStrokeRounded"
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

export const IconDartDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dart-duotone-rounded IconDartDuotoneRounded"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconDartTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dart-twotone-rounded IconDartTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconDartSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dart-solid-rounded IconDartSolidRounded"
    >
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

export const IconDartBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dart-bulk-rounded IconDartBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconDartStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dart-stroke-sharp IconDartStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDartSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dart-solid-sharp IconDartSolidSharp"
    >
      <path 
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

export const iconPackOfDart: TheIconSelfPack = {
  name: 'Dart',
  StrokeRounded: IconDartStrokeRounded,
  DuotoneRounded: IconDartDuotoneRounded,
  TwotoneRounded: IconDartTwotoneRounded,
  SolidRounded: IconDartSolidRounded,
  BulkRounded: IconDartBulkRounded,
  StrokeSharp: IconDartStrokeSharp,
  SolidSharp: IconDartSolidSharp,
};