import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 17L2 17M19 17L22 17',
  d2: 'M8.00232 7C8.00232 6.15611 7.91895 5.18211 8.75232 4.70096C9.10039 4.5 9.5677 4.5 10.5023 4.5L13.5023 4.5C14.4369 4.5 14.9042 4.5 15.2523 4.70096C16.0857 5.18211 16.0023 6.15611 16.0023 7C16.0023 7.84389 16.0857 8.81789 15.2523 9.29904C14.9042 9.5 14.4369 9.5 13.5023 9.5H10.5023C9.5677 9.5 9.10039 9.5 8.75232 9.29904C7.91895 8.81789 8.00232 7.84389 8.00232 7Z',
  d3: 'M5.00232 17C5.00232 16.1561 4.91895 15.1821 5.75232 14.701C6.10039 14.5 6.5677 14.5 7.50232 14.5L16.5023 14.5C17.4369 14.5 17.9042 14.5 18.2523 14.701C19.0857 15.1821 19.0023 16.1561 19.0023 17C19.0023 17.8439 19.0857 18.8179 18.2523 19.299C17.9042 19.5 17.4369 19.5 16.5023 19.5H7.50232C6.5677 19.5 6.10039 19.5 5.75232 19.299C4.91895 18.8179 5.00232 17.8439 5.00232 17Z',
  d4: 'M8 7L2 7M16 7L22 7',
  d5: 'M1 17C1 16.4477 1.44772 16 2 16L5 16C5.55228 16 6 16.4477 6 17C6 17.5523 5.55228 18 5 18L2 18C1.44772 18 1 17.5523 1 17ZM18 17C18 16.4477 18.4477 16 19 16L22 16C22.5523 16 23 16.4477 23 17C23 17.5523 22.5523 18 22 18L19 18C18.4477 18 18 17.5523 18 17Z',
  d6: 'M7.2515 7.18318C7.25214 7.11802 7.25275 7.05664 7.25275 7C7.25275 6.94335 7.25214 6.88198 7.2515 6.81682C7.24799 6.46075 7.24336 5.99173 7.33032 5.56477C7.44299 5.01157 7.72349 4.42918 8.37775 4.05144C8.68496 3.87407 9.01092 3.80801 9.3401 3.77818C9.65139 3.74997 10.0307 3.74998 10.4705 3.75L13.535 3.75C13.9748 3.74998 14.3541 3.74997 14.6654 3.77818C14.9946 3.80802 15.3205 3.87407 15.6278 4.05144C16.282 4.42918 16.5625 5.01157 16.6752 5.56477C16.7621 5.99173 16.7575 6.46075 16.754 6.81682L16.754 6.81686C16.7534 6.882 16.7528 6.94336 16.7528 7C16.7528 7.05663 16.7534 7.11799 16.754 7.18314L16.754 7.18318C16.7575 7.53925 16.7621 8.00827 16.6752 8.43523C16.5625 8.98842 16.282 9.57082 15.6278 9.94856C15.3205 10.1259 14.9946 10.192 14.6654 10.2218C14.3541 10.25 13.9748 10.25 13.535 10.25L13.535 10.25L10.4705 10.25L10.4705 10.25C10.0307 10.25 9.65138 10.25 9.3401 10.2218C9.01092 10.192 8.68496 10.1259 8.37775 9.94856C7.72349 9.57082 7.44299 8.98842 7.33032 8.43523C7.24336 8.00827 7.24799 7.53925 7.2515 7.18318Z',
  d7: 'M4.2515 17.1832C4.25214 17.118 4.25275 17.0566 4.25275 17C4.25275 16.9434 4.25214 16.882 4.2515 16.8168C4.24799 16.4607 4.24336 15.9917 4.33032 15.5648C4.44299 15.0116 4.72349 14.4292 5.37775 14.0514C5.68496 13.8741 6.01092 13.808 6.3401 13.7782C6.65139 13.75 7.03073 13.75 7.47052 13.75L16.535 13.75C16.9748 13.75 17.3541 13.75 17.6654 13.7782C17.9946 13.808 18.3205 13.8741 18.6278 14.0514C19.282 14.4292 19.5625 15.0116 19.6752 15.5648C19.7621 15.9917 19.7575 16.4607 19.754 16.8168L19.754 16.8169C19.7534 16.882 19.7528 16.9434 19.7528 17C19.7528 17.0566 19.7534 17.118 19.754 17.1831L19.754 17.1832C19.7575 17.5393 19.7621 18.0083 19.6752 18.4352C19.5625 18.9884 19.282 19.5708 18.6278 19.9486C18.3205 20.1259 17.9946 20.192 17.6654 20.2218C17.3541 20.25 16.9748 20.25 16.535 20.25L16.535 20.25L7.47053 20.25L7.47047 20.25C7.03071 20.25 6.65138 20.25 6.3401 20.2218C6.01092 20.192 5.68496 20.1259 5.37775 19.9486C4.72349 19.5708 4.44299 18.9884 4.33032 18.4352C4.24336 18.0083 4.24799 17.5393 4.2515 17.1832Z',
  d8: 'M1 7C1 6.44771 1.44772 6 2 6L8 6C8.55228 6 9 6.44771 9 7C9 7.55228 8.55228 8 8 8L2 8C1.44772 8 1 7.55228 1 7ZM15 7C15 6.44771 15.4477 6 16 6L22 6C22.5523 6 23 6.44771 23 7C23 7.55228 22.5523 8 22 8L16 8C15.4477 8 15 7.55228 15 7Z',
  d9: 'M7.25275 7C7.25275 7.05664 7.25214 7.11802 7.2515 7.18318C7.24916 7.42056 7.24632 7.70815 7.27046 8L2 8C1.44772 8 1 7.55229 1 7C1 6.44772 1.44772 6 2 6H7.27046C7.24632 6.29185 7.24916 6.57943 7.2515 6.81682C7.25214 6.88198 7.25275 6.94335 7.25275 7Z',
  d10: 'M16.735 8C16.7592 7.70815 16.7563 7.42056 16.754 7.18318C16.7534 7.11805 16.7528 7.05662 16.7528 7C16.7528 6.94338 16.7534 6.88203 16.754 6.8169C16.7563 6.57952 16.7592 6.29185 16.735 6H22C22.5523 6 23 6.44772 23 7C23 7.55228 22.5523 8 22 8L16.735 8Z',
  d11: 'M4.25275 17C4.25275 17.0566 4.25214 17.118 4.2515 17.1832C4.24916 17.4206 4.24632 17.7081 4.27046 18H2C1.44772 18 1 17.5523 1 17C1 16.4477 1.44772 16 2 16H4.27046C4.24632 16.2919 4.24916 16.5794 4.2515 16.8168C4.25214 16.882 4.25275 16.9434 4.25275 17Z',
  d12: 'M19.735 18C19.7592 17.7081 19.7563 17.4206 19.754 17.1832C19.7534 17.118 19.7528 17.0566 19.7528 17C19.7528 16.9434 19.7534 16.882 19.754 16.8169C19.7563 16.5795 19.7592 16.2919 19.735 16H22C22.5523 16 23 16.4477 23 17C23 17.5523 22.5523 18 22 18H19.735Z',
  d13: 'M16.002 4.5H8.00195V9.5H16.002V4.5Z',
  d14: 'M19.002 14.5H5.00195V19.5H19.002V14.5Z',
  d15: 'M22 18L19 18L19 16L22 16L22 18ZM2 16L5 16L5 18L2 18L2 16Z',
  d16: 'M7.47162 3.96967C7.61228 3.82902 7.80304 3.75 8.00195 3.75H16.002C16.4162 3.75 16.752 4.08579 16.752 4.5V9.5C16.752 9.91421 16.4162 10.25 16.002 10.25H8.00195C7.58774 10.25 7.25195 9.91421 7.25195 9.5V4.5C7.25195 4.30109 7.33097 4.11032 7.47162 3.96967Z',
  d17: 'M4.25195 14.5C4.25195 14.0858 4.58774 13.75 5.00195 13.75H19.002C19.4162 13.75 19.752 14.0858 19.752 14.5V19.5C19.752 19.9142 19.4162 20.25 19.002 20.25H5.00195C4.58774 20.25 4.25195 19.9142 4.25195 19.5V14.5Z',
  d18: 'M22 8L16 8L16 6L22 6L22 8ZM2 6L8 6L8 8L2 8L2 6Z',
};

export const IconDistributeVerticalCenterStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-center-stroke-rounded IconDistributeVerticalCenterStrokeRounded"
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

export const IconDistributeVerticalCenterDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-center-duotone-rounded IconDistributeVerticalCenterDuotoneRounded"
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

export const IconDistributeVerticalCenterTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-center-twotone-rounded IconDistributeVerticalCenterTwotoneRounded"
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

export const IconDistributeVerticalCenterSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-center-solid-rounded IconDistributeVerticalCenterSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const IconDistributeVerticalCenterBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-center-bulk-rounded IconDistributeVerticalCenterBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDistributeVerticalCenterStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-center-stroke-sharp IconDistributeVerticalCenterStrokeSharp"
    >
      <path 
        d={d.d1} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDistributeVerticalCenterSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-center-solid-sharp IconDistributeVerticalCenterSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDistributeVerticalCenter: TheIconSelfPack = {
  name: 'DistributeVerticalCenter',
  StrokeRounded: IconDistributeVerticalCenterStrokeRounded,
  DuotoneRounded: IconDistributeVerticalCenterDuotoneRounded,
  TwotoneRounded: IconDistributeVerticalCenterTwotoneRounded,
  SolidRounded: IconDistributeVerticalCenterSolidRounded,
  BulkRounded: IconDistributeVerticalCenterBulkRounded,
  StrokeSharp: IconDistributeVerticalCenterStrokeSharp,
  SolidSharp: IconDistributeVerticalCenterSolidSharp,
};