import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 5.63247C19.8635 4.81397 18.4095 4.81397 17.273 5.63247C16.5877 6.13474 15.6685 6.11614 14.9833 5.61388C13.8468 4.79537 12.3928 4.79537 11.273 5.61388C10.571 6.11614 9.68524 6.11614 9 5.61388',
  d2: 'M3 9.37672C4.16839 10.1953 5.66323 10.1953 6.83162 9.37672C7.53608 8.87443 8.46392 8.87443 9.16838 9.37672C10.3368 10.1953 11.8488 10.2139 13 9.39531',
  d3: 'M21 14.6233C19.8635 13.8047 18.4095 13.8047 17.273 14.6233C16.5877 15.1256 15.6852 15.1256 15 14.6233C13.8635 13.8047 12.3928 13.7861 11.273 14.6047C10.571 15.107 9.68524 15.107 9 14.6047',
  d4: 'M3 18.3767C4.16839 19.1953 5.66323 19.1953 6.83162 18.3767C7.53608 17.8744 8.46392 17.8744 9.16838 18.3767C10.3368 19.1953 11.8488 19.2139 13 18.3953',
  d5: 'M14.396 6.42333C15.4159 7.16837 16.8094 7.20935 17.8601 6.44194C18.6471 5.87682 19.629 5.87748 20.4155 6.44393C20.8637 6.76669 21.4886 6.66504 21.8114 6.21689C22.1341 5.76873 22.0325 5.14378 21.5843 4.82102C20.0988 3.75113 18.174 3.75113 16.6885 4.82102L16.6817 4.8259L16.6817 4.82593C16.3637 5.05901 15.9233 5.06307 15.5744 4.80733L15.5676 4.80239L15.5676 4.80242C14.0863 3.73561 12.1609 3.72928 10.6878 4.80294C10.3303 5.05689 9.91926 5.04787 9.5911 4.80733C9.14566 4.48084 8.51988 4.57726 8.19338 5.0227C7.86689 5.46814 7.96331 6.09392 8.40875 6.42042C9.45006 7.18368 10.8092 7.17533 11.8548 6.42713L11.8631 6.42124L11.863 6.4212C12.6279 5.86214 13.6064 5.85635 14.396 6.42333Z',
  d6: 'M9.74505 8.55965C10.5805 9.14331 11.6289 9.14322 12.4206 8.58032C12.8707 8.26028 13.495 8.36572 13.8151 8.81582C14.1351 9.26593 14.0297 9.89025 13.5796 10.2103C12.0697 11.2838 10.0956 11.2472 8.59469 10.1957L8.59467 10.1957L8.58792 10.1909C8.23085 9.93634 7.76932 9.93634 7.41225 10.1909L7.41227 10.191L7.40548 10.1957C5.89263 11.2556 3.93915 11.2556 2.42631 10.1957C1.97398 9.87882 1.86419 9.25525 2.18107 8.80292C2.49796 8.3506 3.12154 8.2408 3.57386 8.55769C4.39686 9.13427 5.43166 9.13491 6.25514 8.55964C7.30522 7.81343 8.69497 7.81344 9.74505 8.55965Z',
  d7: 'M14.4127 15.4328C15.4481 16.1891 16.8247 16.1891 17.8601 15.4328C18.6471 14.8676 19.629 14.8683 20.4155 15.4347C20.8636 15.7575 21.4886 15.6559 21.8114 15.2077C22.1341 14.7596 22.0325 14.1346 21.5844 13.8119C20.0988 12.7419 18.174 12.7419 16.6885 13.8119L16.6817 13.8167L16.6817 13.8168C16.3484 14.0611 15.9244 14.0611 15.5911 13.8168L15.5844 13.8118L15.5844 13.8119C14.1127 12.7519 12.1704 12.7132 10.6877 13.7938C10.3303 14.0477 9.91928 14.0387 9.59112 13.7982C9.14569 13.4717 8.51991 13.5681 8.1934 14.0135C7.86689 14.4589 7.9633 15.0847 8.40873 15.4112C9.45005 16.1745 10.8092 16.1662 11.8548 15.4179L11.8631 15.412L11.863 15.412C12.6185 14.8598 13.6135 14.8588 14.4127 15.4328Z',
  d8: 'M9.74505 17.5597C10.5805 18.1433 11.6289 18.1432 12.4206 17.5803C12.8707 17.2603 13.495 17.3657 13.8151 17.8158C14.1351 18.2659 14.0297 18.8902 13.5796 19.2103C12.0697 20.2838 10.0956 20.2472 8.59469 19.1957L8.59467 19.1957L8.58792 19.1909C8.23085 18.9363 7.76932 18.9363 7.41225 19.1909L7.41227 19.191L7.40548 19.1957C5.89263 20.2556 3.93915 20.2556 2.42631 19.1957C1.97398 18.8788 1.86419 18.2553 2.18107 17.8029C2.49796 17.3506 3.12154 17.2408 3.57386 17.5577C4.39686 18.1343 5.43166 18.1349 6.25514 17.5596C7.30522 16.8134 8.69497 16.8134 9.74505 17.5597Z',
  d9: 'M14.3078 6.42333C15.3277 7.16837 16.7212 7.20935 17.7718 6.44194C18.5588 5.87682 19.5408 5.87748 20.3273 6.44393L21.4961 4.82102C20.0105 3.75113 18.0858 3.75113 16.6003 4.82102L16.5935 4.8259L16.5935 4.82593C16.2755 5.05901 15.835 5.06307 15.4861 4.80733L15.4794 4.80239L15.4794 4.80242C13.9981 3.73561 12.0727 3.72928 10.5995 4.80294C10.242 5.05689 9.83102 5.04787 9.50286 4.80733L8.32051 6.42042C9.36182 7.18368 10.7209 7.17533 11.7666 6.42713L11.7748 6.42124L11.7748 6.4212C12.5396 5.86214 13.5182 5.85635 14.3078 6.42333Z',
  d10: 'M9.81874 8.55965C10.6542 9.14331 11.7026 9.14322 12.4943 8.58032L13.6533 10.2103C12.1434 11.2838 10.1693 11.2472 8.66838 10.1957L8.66162 10.1909C8.30455 9.93634 7.84301 9.93634 7.48594 10.1909L7.47917 10.1957C5.96633 11.2556 4.01284 11.2556 2.5 10.1957L3.64756 8.55769C4.47056 9.13427 5.50536 9.13491 6.32883 8.55964C7.37891 7.81343 8.76867 7.81344 9.81874 8.55965Z',
  d11: 'M14.3284 15.4328C15.3638 16.1891 16.7404 16.1891 17.7757 15.4328C18.5627 14.8676 19.5446 14.8683 20.3311 15.4347L21.5 13.8119C20.0144 12.7419 18.0897 12.7419 16.6041 13.8119L16.5973 13.8167L16.5974 13.8168C16.264 14.0611 15.8401 14.0611 15.5068 13.8168L15.5 13.8118L15.5 13.8119C14.0284 12.7519 12.086 12.7132 10.6034 13.7938C10.2459 14.0477 9.83492 14.0387 9.50676 13.7982L8.32437 15.4112C9.3657 16.1745 10.7248 16.1662 11.7705 15.4179L11.7787 15.412L11.7787 15.412C12.5341 14.8598 13.5292 14.8588 14.3284 15.4328Z',
  d12: 'M9.81874 17.5597C10.6542 18.1433 11.7026 18.1432 12.4943 17.5803L13.6533 19.2103C12.1434 20.2838 10.1693 20.2472 8.66838 19.1957L8.66162 19.1909C8.30455 18.9363 7.84301 18.9363 7.48594 19.1909L7.47917 19.1957C5.96633 20.2556 4.01284 20.2556 2.5 19.1957L3.64756 17.5577C4.47056 18.1343 5.50536 18.1349 6.32883 17.5596C7.37891 16.8134 8.76867 16.8134 9.81874 17.5597Z',
};

export const IconSlowWindsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="slow-winds-stroke-rounded IconSlowWindsStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSlowWindsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="slow-winds-duotone-rounded IconSlowWindsDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSlowWindsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="slow-winds-twotone-rounded IconSlowWindsTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconSlowWindsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="slow-winds-solid-rounded IconSlowWindsSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSlowWindsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="slow-winds-bulk-rounded IconSlowWindsBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSlowWindsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="slow-winds-stroke-sharp IconSlowWindsStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSlowWindsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="slow-winds-solid-sharp IconSlowWindsSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSlowWinds: TheIconSelfPack = {
  name: 'SlowWinds',
  StrokeRounded: IconSlowWindsStrokeRounded,
  DuotoneRounded: IconSlowWindsDuotoneRounded,
  TwotoneRounded: IconSlowWindsTwotoneRounded,
  SolidRounded: IconSlowWindsSolidRounded,
  BulkRounded: IconSlowWindsBulkRounded,
  StrokeSharp: IconSlowWindsStrokeSharp,
  SolidSharp: IconSlowWindsSolidSharp,
};