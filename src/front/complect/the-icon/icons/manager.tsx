import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 22V17C20 15.1144 20 14.1716 19.4142 13.5858C18.8284 13 17.8856 13 16 13L12 22L8 13C6.11438 13 5.17157 13 4.58579 13.5858C4 14.1716 4 15.1144 4 17V22',
  d2: 'M12 15L11.5 19L12 20.5L12.5 19L12 15ZM12 15L11 13H13L12 15Z',
  d3: 'M15.5 6.5V5.5C15.5 3.567 13.933 2 12 2C10.067 2 8.5 3.567 8.5 5.5V6.5C8.5 8.433 10.067 10 12 10C13.933 10 15.5 8.433 15.5 6.5Z',
  d4: 'M20 17V22H12H4V17C4 15.1144 4 14.1716 4.58579 13.5858C5.17157 13 6.11438 13 8 13L12 22L16 13C17.8856 13 18.8284 13 19.4142 13.5858C20 14.1716 20 15.1144 20 17Z',
  d5: 'M7.948 12.25L8 12.25C8.29639 12.25 8.56499 12.4246 8.68536 12.6954L12 20.1533L15.3146 12.6954C15.435 12.4246 15.7036 12.25 16 12.25L16.052 12.25C16.9505 12.25 17.6997 12.2499 18.2945 12.3299C18.9223 12.4143 19.4891 12.6 19.9445 13.0555C20.4 13.5109 20.5857 14.0777 20.6701 14.7055C20.7501 15.3003 20.75 16.0495 20.75 16.948V18.7505C20.75 20.6361 20.75 21.5789 20.1642 22.1647C19.5784 22.7505 18.6356 22.7505 16.75 22.7505H7.25C5.36438 22.7505 4.42158 22.7505 3.83579 22.1647C3.25 21.5789 3.25 20.6361 3.25 18.7505V16.948C3.24997 16.0495 3.24995 15.3003 3.32991 14.7055C3.41432 14.0777 3.59999 13.5109 4.05546 13.0555C4.51093 12.6 5.07773 12.4143 5.70552 12.3299C6.3003 12.2499 7.04954 12.25 7.948 12.25Z',
  d6: 'M10.362 12.6057C10.4987 12.3846 10.7401 12.25 11 12.25H13C13.2599 12.25 13.5013 12.3846 13.638 12.6057C13.7746 12.8268 13.7871 13.1029 13.6708 13.3354L12.7724 15.1323L13.2442 18.907C13.2581 19.0181 13.2469 19.1309 13.2115 19.2372L12.7115 20.7372C12.6094 21.0434 12.3228 21.25 12 21.25C11.6772 21.25 11.3906 21.0434 11.2885 20.7372L10.7885 19.2372C10.7531 19.1309 10.7419 19.0181 10.7558 18.907L11.2276 15.1323L10.3292 13.3354C10.2129 13.1029 10.2254 12.8268 10.362 12.6057Z',
  d7: 'M7.75 5.5C7.75 3.15279 9.65279 1.25 12 1.25C14.3472 1.25 16.25 3.15279 16.25 5.5V6.5C16.25 8.84721 14.3472 10.75 12 10.75C9.65279 10.75 7.75 8.84721 7.75 6.5V5.5Z',
  d8: 'M10.9071 17.6963L12 20.1553L13.0929 17.6963L12.7724 15.1323L13.6708 13.3354C13.7871 13.1029 13.7746 12.8268 13.638 12.6057C13.5013 12.3846 13.2599 12.25 13 12.25H11C10.7401 12.25 10.4987 12.3846 10.362 12.6057C10.2254 12.8268 10.2129 13.1029 10.3292 13.3354L11.2276 15.1323L10.9071 17.6963Z',
  d9: 'M20 22V14.5L16.5 13H16L12.5 22H11.5L8 13H7.5L4 14.5V22',
  d10: 'M7.34606 12.25H8.51305L12 21.2164L15.4869 12.25H16.6539L20.75 14.0055V22.75H3.25V14.0055L7.34606 12.25Z',
  d11: 'M9.78613 12.25H14.2132L12.772 15.1323L13.265 19.0758L11.9997 22L10.7343 19.0758L11.2273 15.1323L9.78613 12.25Z',
};

export const IconManagerStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="manager-stroke-rounded IconManagerStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconManagerDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="manager-duotone-rounded IconManagerDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconManagerTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="manager-twotone-rounded IconManagerTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconManagerSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="manager-solid-rounded IconManagerSolidRounded"
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconManagerBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="manager-bulk-rounded IconManagerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconManagerStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="manager-stroke-sharp IconManagerStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconManagerSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="manager-solid-sharp IconManagerSolidSharp"
    >
      <path 
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfManager: TheIconSelfPack = {
  name: 'Manager',
  StrokeRounded: IconManagerStrokeRounded,
  DuotoneRounded: IconManagerDuotoneRounded,
  TwotoneRounded: IconManagerTwotoneRounded,
  SolidRounded: IconManagerSolidRounded,
  BulkRounded: IconManagerBulkRounded,
  StrokeSharp: IconManagerStrokeSharp,
  SolidSharp: IconManagerSolidSharp,
};