import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 2H12C9.17157 2 7.75736 2 6.87868 2.94627C6 3.89254 6 5.41554 6 8.46154V9.53846C6 12.5845 6 14.1075 6.87868 15.0537C7.75736 16 9.17157 16 12 16H16C18.8284 16 20.2426 16 21.1213 15.0537C22 14.1075 22 12.5845 22 9.53846V8.46154C22 5.41554 22 3.89254 21.1213 2.94627C20.2426 2 18.8284 2 16 2Z',
  d2: 'M18 16.6082C17.9879 18.9537 17.8914 20.2239 17.123 21.0525C16.2442 22 14.8298 22 12.0011 22H8.00065C5.17192 22 3.75755 22 2.87878 21.0525C2 20.1049 2 18.5799 2 15.5298V14.4515C2 11.4014 2 9.87638 2.87878 8.92885C3.52015 8.2373 4.44682 8.05047 6.00043 8',
  d3: 'M16.0585 1.25C17.423 1.24998 18.5286 1.24996 19.3993 1.37603C20.31 1.50789 21.0719 1.79079 21.6709 2.43593C22.2627 3.07319 22.5154 3.87028 22.6344 4.8236C22.75 5.74987 22.75 6.93067 22.75 8.40963V8.40968V9.59033V9.59037C22.75 11.0693 22.75 12.2501 22.6344 13.1764C22.5154 14.1297 22.2627 14.9268 21.6709 15.5641C21.0719 16.2092 20.31 16.4921 19.3993 16.624C18.5286 16.75 17.423 16.75 16.0584 16.75H11.9416C10.577 16.75 9.47144 16.75 8.60071 16.624C7.68997 16.4921 6.92815 16.2092 6.32909 15.5641C5.73735 14.9268 5.48463 14.1297 5.36561 13.1764C5.24997 12.2501 5.24998 11.0693 5.25 9.59033V9.59032V8.40968V8.40967C5.24998 6.93069 5.24997 5.74988 5.36561 4.8236C5.48463 3.87028 5.73735 3.07319 6.32909 2.43593C6.92815 1.79079 7.68997 1.50789 8.60071 1.37603C9.47143 1.24996 10.577 1.24998 11.9415 1.25H11.9416H16.0584H16.0585Z',
  d4: 'M7.08324 8.1873C7.10068 8.72205 6.67976 9.16963 6.1431 9.187C4.62769 9.23605 4.11421 9.4284 3.78943 9.77734C3.55957 10.0243 3.38871 10.391 3.29377 11.1497C3.19623 11.9292 3.19445 12.9658 3.19445 14.4686V15.5133C3.19445 17.0161 3.19623 18.0528 3.29377 18.8322C3.38871 19.5909 3.55957 19.9576 3.78943 20.2046C4.00964 20.4412 4.32244 20.6106 4.99495 20.7078C5.7034 20.8101 6.65154 20.8125 8.05619 20.8125H11.9455C13.3502 20.8125 14.2983 20.8101 15.0067 20.7078C15.6792 20.6106 15.9921 20.4412 16.2123 20.2046C16.4141 19.9877 16.5695 19.6796 16.6688 19.099C16.7718 18.4962 16.7996 17.6963 16.8056 16.5529C16.8083 16.0179 17.2459 15.5864 17.7828 15.5892C18.3197 15.592 18.7528 16.0279 18.75 16.5629C18.7441 17.6917 18.7192 18.6432 18.5856 19.4244C18.4483 20.2278 18.1832 20.9362 17.6379 21.5221C17.0038 22.2034 16.2019 22.4929 15.2857 22.6252C14.4214 22.7501 13.3313 22.75 12.0185 22.75H7.98322C6.67034 22.75 5.58025 22.7501 4.71599 22.6252C3.79982 22.4929 2.9979 22.2034 2.36375 21.5221C1.73924 20.8511 1.48292 20.0202 1.36427 19.072C1.24995 18.1585 1.24997 17.0004 1.25 15.5781V14.4038C1.24997 12.9815 1.24995 11.8234 1.36427 10.9099C1.48292 9.96172 1.73924 9.1308 2.36375 8.45983C3.28608 7.46888 4.57446 7.29925 6.07997 7.25052C6.61663 7.23315 7.06581 7.65256 7.08324 8.1873Z',
  d5: 'M5.25214 7.29688C4.10141 7.39365 3.11209 7.65698 2.36375 8.46099C1.73924 9.13196 1.48293 9.96289 1.36427 10.9111C1.24996 11.8246 1.24998 12.9827 1.25 14.4049V15.5793C1.24998 17.0015 1.24996 18.1596 1.36427 19.0731C1.48293 20.0214 1.73924 20.8523 2.36375 21.5232C2.9979 22.2046 3.79982 22.4941 4.71599 22.6264C5.58025 22.7512 6.67034 22.7512 7.98323 22.7512H12.0185C13.3313 22.7512 14.4214 22.7512 15.2857 22.6264C16.2019 22.4941 17.0038 22.2046 17.6379 21.5232C18.1832 20.9374 18.4483 20.2289 18.5856 19.4255C18.714 18.6746 18.742 17.7664 18.7492 16.6945C18.1825 16.7372 17.5358 16.7477 16.8043 16.7503C16.7962 17.7899 16.7658 18.5325 16.6688 19.1002C16.5695 19.6807 16.4141 19.9889 16.2123 20.2057C15.9921 20.4423 15.6792 20.6118 15.0067 20.7089C14.2983 20.8113 13.3502 20.8137 11.9455 20.8137H8.05619C6.65154 20.8137 5.7034 20.8113 4.99495 20.7089C4.32245 20.6118 4.00964 20.4423 3.78943 20.2057C3.55958 19.9588 3.38871 19.5921 3.29377 18.8334C3.19623 18.0539 3.19445 17.0173 3.19445 15.5144V14.4698C3.19445 12.967 3.19623 11.9303 3.29377 11.1508C3.38871 10.3922 3.55958 10.0255 3.78943 9.7785C4.03985 9.50945 4.40245 9.3335 5.25 9.24455V8.41085C5.25 8.01885 5.24999 7.64779 5.25214 7.29688Z',
  d6: 'M6 16L6 2L22 2.00912L22 16H6Z',
  d7: 'M6 8.00456L2 8L2 22H18L18 16.0046',
  d8: 'M5.46982 1.46952C5.61057 1.32885 5.80144 1.24989 6.00043 1.25L22.0004 1.25912C22.4145 1.25935 22.75 1.59507 22.75 2.00912V16C22.75 16.4142 22.4142 16.75 22 16.75H6C5.80109 16.75 5.61032 16.671 5.46967 16.5303C5.32902 16.3897 5.25 16.1989 5.25 16V2C5.25 1.80101 5.32908 1.61018 5.46982 1.46952Z',
  d9: 'M1.53515 7.53335C1.71772 7.35164 1.96529 7.24971 2.22333 7.25L6.11222 7.25442L6.11 9.19191L3.19445 9.1886L3.19444 20.8125H16.8056L16.8056 15.9732H18.75L18.75 21.7812C18.75 22.3163 18.3147 22.75 17.7778 22.75H2.22222C1.96437 22.75 1.71708 22.6479 1.53476 22.4663C1.35243 22.2846 1.25 22.0382 1.25 21.7812L1.25 8.21875C1.25 7.96163 1.35258 7.71506 1.53515 7.53335Z',
};

export const IconChangeScreenModeStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="change-screen-mode-stroke-rounded IconChangeScreenModeStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconChangeScreenModeDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="change-screen-mode-duotone-rounded IconChangeScreenModeDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconChangeScreenModeTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="change-screen-mode-twotone-rounded IconChangeScreenModeTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconChangeScreenModeSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="change-screen-mode-solid-rounded IconChangeScreenModeSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChangeScreenModeBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="change-screen-mode-bulk-rounded IconChangeScreenModeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChangeScreenModeStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="change-screen-mode-stroke-sharp IconChangeScreenModeStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChangeScreenModeSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="change-screen-mode-solid-sharp IconChangeScreenModeSolidSharp"
    >
      <path 
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

export const iconPackOfChangeScreenMode: TheIconSelfPack = {
  name: 'ChangeScreenMode',
  StrokeRounded: IconChangeScreenModeStrokeRounded,
  DuotoneRounded: IconChangeScreenModeDuotoneRounded,
  TwotoneRounded: IconChangeScreenModeTwotoneRounded,
  SolidRounded: IconChangeScreenModeSolidRounded,
  BulkRounded: IconChangeScreenModeBulkRounded,
  StrokeSharp: IconChangeScreenModeStrokeSharp,
  SolidSharp: IconChangeScreenModeSolidSharp,
};