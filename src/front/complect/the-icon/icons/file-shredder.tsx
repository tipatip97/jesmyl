import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12L2 12',
  d2: 'M3.5 12.1819C3.5 9.21871 3.5 7.73713 3.96894 6.55382C4.72281 4.65149 6.31714 3.15095 8.33836 2.44142C9.59563 2.00007 11.1698 2.00007 14.3182 2.00007C16.1173 2.00007 17.0168 2.00007 17.7352 2.25227C18.8902 2.65771 19.8012 3.51516 20.232 4.60221C20.5 5.27839 20.5 6.12501 20.5 7.81825L20.5 12.0001',
  d3: 'M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2',
  d4: 'M6 15L6 17M10 15V22M14 15V18M18 15V20',
  d5: 'M9.49879 8.49792C5.89879 8.49792 3.5 8.49792 3.5 12H20.5V7.82643C20.5 6.13079 20.5 5.28297 20.232 4.60583C19.8012 3.51725 18.8902 2.65858 17.7352 2.25256C17.0168 2 16.1172 2 14.3182 2C13.9881 2 13.6753 2 13.3783 2.00051C9.49879 2.00051 10.5332 5.05948 10.5499 6.55167C10.5909 8.19467 9.8002 8.49792 9.49879 8.49792Z',
  d6: 'M3.5 12.1797C3.5 9.21652 3.5 7.73493 3.96894 6.55162C4.72281 4.64929 6.31714 3.14875 8.33836 2.43922C9.59563 1.99787 11.1698 1.99787 14.3182 1.99787C16.1173 1.99787 17.0168 1.99787 17.7352 2.25007C18.8902 2.65552 19.8012 3.51297 20.232 4.60001C20.5 5.27619 20.5 6.12281 20.5 7.81605L20.5 11.9979',
  d7: 'M4.75881 10.8789H19.3026V7.68894C19.3026 6.86107 19.3021 6.28659 19.2721 5.83653C19.2427 5.39502 19.1878 5.14011 19.11 4.94603C18.7997 4.17159 18.1337 3.53941 17.2614 3.23658C16.7582 3.06192 16.0914 3.04816 14.2572 3.04816C13.9591 3.04816 13.6023 3.04933 13.2642 3.05085C12.926 3.05238 12.3726 3.05487 11.9105 3.32378C11.6057 3.50109 11.385 3.70298 11.2583 3.92357C11.0409 4.30198 10.9167 4.74064 10.9167 5.20833C10.9167 5.35546 10.9231 5.51364 10.9314 5.69124L10.9345 5.75706L10.9345 5.7571C10.9417 5.91195 10.9497 6.08064 10.9532 6.2487C10.961 6.62879 10.949 7.07233 10.8343 7.50048C10.6109 8.33445 9.95945 8.98586 9.12548 9.20932C8.69733 9.32404 8.25379 9.33605 7.8737 9.32815C7.70556 9.32466 7.53697 9.31674 7.38206 9.30946L7.31624 9.30638C7.13864 9.29814 6.98046 9.29167 6.83333 9.29167C6.38666 9.29167 5.96647 9.40503 5.59996 9.60455C5.37251 9.72837 5.15109 9.97148 4.97816 10.2625C4.86658 10.4502 4.79934 10.6679 4.75881 10.8789ZM21.25 10.8789V7.65621C21.25 6.86874 21.25 6.23086 21.2153 5.71014C21.1795 5.17367 21.1039 4.69543 20.9208 4.23841C20.3922 2.91943 19.2841 1.90033 17.9072 1.42235C17.0482 1.12415 16.0155 1.12451 14.4607 1.12505L13.5134 1.12512L13.5 1.125L13.4649 1.12515C10.9565 1.12685 9.40174 1.15668 8.1118 1.60449C5.8915 2.37527 4.11806 4.01359 3.27491 6.11761C2.99393 6.81878 2.86942 7.57195 2.80918 8.47517L2.76456 10.8789H2C1.44772 10.8789 1 11.3266 1 11.8789C1 12.4312 1.44772 12.8789 2 12.8789H22C22.5523 12.8789 23 12.4312 23 11.8789C23 11.3266 22.5523 10.8789 22 10.8789H21.25Z',
  d8: 'M6 13.8789C6.55228 13.8789 7 14.3266 7 14.8789V16.8789C7 17.4312 6.55228 17.8789 6 17.8789C5.44772 17.8789 5 17.4312 5 16.8789V14.8789C5 14.3266 5.44772 13.8789 6 13.8789ZM10 13.8789C10.5523 13.8789 11 14.3266 11 14.8789V21.8789C11 22.4312 10.5523 22.8789 10 22.8789C9.44772 22.8789 9 22.4312 9 21.8789V14.8789C9 14.3266 9.44772 13.8789 10 13.8789ZM14 13.8789C14.5523 13.8789 15 14.3266 15 14.8789V17.8789C15 18.4312 14.5523 18.8789 14 18.8789C13.4477 18.8789 13 18.4312 13 17.8789V14.8789C13 14.3266 13.4477 13.8789 14 13.8789ZM18 13.8789C18.5523 13.8789 19 14.3266 19 14.8789V19.8789C19 20.4312 18.5523 20.8789 18 20.8789C17.4477 20.8789 17 20.4312 17 19.8789V14.8789C17 14.3266 17.4477 13.8789 18 13.8789Z',
  d9: 'M23 11.8789C23 12.4312 22.5523 12.8789 22 12.8789L2 12.8789C1.44772 12.8789 1 12.4312 1 11.8789C1 11.3266 1.44772 10.8789 2 10.8789L22 10.8789C22.5523 10.8789 23 11.3266 23 11.8789Z',
  d10: 'M3.72368 12.625C4.26144 12.625 4.69737 12.1945 4.69737 11.6635C4.69735 11.3964 4.69754 10.7346 4.97816 10.2625C5.15109 9.97148 5.37251 9.72837 5.59996 9.60455C5.96647 9.40503 6.38666 9.29167 6.83333 9.29167C6.98046 9.29167 7.13864 9.29814 7.31624 9.30638L7.38206 9.30946C7.53697 9.31674 7.70556 9.32466 7.8737 9.32815C8.25379 9.33605 8.69733 9.32404 9.12548 9.20932C9.95945 8.98586 10.6109 8.33445 10.8343 7.50048C10.949 7.07233 10.961 6.62879 10.9532 6.2487C10.9497 6.08064 10.9417 5.91195 10.9345 5.7571L10.9345 5.75706L10.9314 5.69124C10.9231 5.51364 10.9167 5.35546 10.9167 5.20833C10.9167 4.74064 11.0409 4.30198 11.2583 3.92357C11.385 3.70298 11.6057 3.50109 11.9105 3.32378C12.3726 3.05487 12.926 3.05238 13.2642 3.05085C13.6023 3.04933 13.9591 3.04816 14.2572 3.04816C16.0914 3.04816 16.7582 3.06192 17.2614 3.23658C18.1337 3.53941 18.7997 4.17159 19.11 4.94603C19.1878 5.14011 19.2427 5.39502 19.2721 5.83653C19.3021 6.28659 19.3026 6.86107 19.3026 7.68894V11.6635C19.3026 12.1945 19.7386 12.625 20.2763 12.625C20.8141 12.625 21.25 12.1945 21.25 11.6635V7.65621C21.25 6.86874 21.25 6.23086 21.2153 5.71014C21.1795 5.17367 21.1039 4.69543 20.9208 4.23841C20.3922 2.91943 19.2841 1.90033 17.9072 1.42235C17.0482 1.12415 16.0155 1.12451 14.4607 1.12505L13.5134 1.12512L13.5 1.125L13.4649 1.12515C10.9565 1.12685 9.40174 1.15668 8.1118 1.60449C5.8915 2.37527 4.11806 4.01359 3.27491 6.11761C2.99393 6.81878 2.86942 7.57195 2.80918 8.47517L2.75 11.6635C2.75 12.1945 3.18593 12.625 3.72368 12.625Z',
  d11: 'M22 13H2',
  d12: 'M6 15V17M10 15V22M14 15V18M18 15V20',
  d13: 'M20.5 13.0052V2.01293C20.5 2.00741 20.4955 2.00293 20.49 2.00293H10.5L3.5 9.0019V13.0034M4.023 9.0019H10.5V2.64029',
  d14: 'M22.75 14.5L1.25 14.5V12.5L22.75 12.5V14.5Z',
  d15: 'M21.25 2.72727C21.25 2.18754 20.8141 1.75 20.2763 1.75H10.1362L2.75 9.16338V13.5H4.69727V10.5455H11.5131L11.5131 3.70459H19.3025V13.5H21.25V2.72727Z',
  d16: 'M5 17.5V15.5H7V17.5H5ZM9 22.25V15.5H11V22.25H9ZM13 18.5V15.5H15V18.5H13ZM17 20.5V15.5H19V20.5H17Z',
};

export const IconFileShredderStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-shredder-stroke-rounded IconFileShredderStrokeRounded"
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

export const IconFileShredderDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-shredder-duotone-rounded IconFileShredderDuotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconFileShredderTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-shredder-twotone-rounded IconFileShredderTwotoneRounded"
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

export const IconFileShredderSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-shredder-solid-rounded IconFileShredderSolidRounded"
    >
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

export const IconFileShredderBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-shredder-bulk-rounded IconFileShredderBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
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

export const IconFileShredderStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-shredder-stroke-sharp IconFileShredderStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconFileShredderSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-shredder-solid-sharp IconFileShredderSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFileShredder: TheIconSelfPack = {
  name: 'FileShredder',
  StrokeRounded: IconFileShredderStrokeRounded,
  DuotoneRounded: IconFileShredderDuotoneRounded,
  TwotoneRounded: IconFileShredderTwotoneRounded,
  SolidRounded: IconFileShredderSolidRounded,
  BulkRounded: IconFileShredderBulkRounded,
  StrokeSharp: IconFileShredderStrokeSharp,
  SolidSharp: IconFileShredderSolidSharp,
};