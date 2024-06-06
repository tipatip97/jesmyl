import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.76722 18.8486L12 14L14.2328 18.8486C14.8804 20.2549 15.2042 20.958 14.8612 21.4656C14.8518 21.4795 14.8421 21.4932 14.8321 21.5067C14.4659 22 13.6439 22 12 22C10.3561 22 9.53409 22 9.16795 21.5067C9.15792 21.4932 9.14821 21.4795 9.13882 21.4656C8.79585 20.958 9.11964 20.2549 9.76722 18.8486Z',
  d2: 'M4 18.001C2.74418 16.3295 2 14.2516 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2516 21.2558 16.3295 20 18.001',
  d3: 'M7.52779 16C6.57771 14.9385 6 13.5367 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 13.5367 17.4223 14.9385 16.4722 16',
  d4: 'M12 9.25C10.4812 9.25 9.25 10.4812 9.25 12C9.25 13.0497 9.83817 13.9621 10.7029 14.4255L8.82798 18.4971C8.53063 19.1426 8.2605 19.729 8.12012 20.2184C7.96872 20.7464 7.89387 21.4096 8.31007 22.0255C8.32774 22.0516 8.34598 22.0774 8.36477 22.1027C8.79121 22.6772 9.42588 22.8558 9.97082 22.9293C10.495 23.0001 11.1683 23.0001 11.9323 23H12.0673C12.8313 23.0001 13.5046 23.0001 14.0288 22.9293C14.5737 22.8558 15.2084 22.6772 15.6349 22.1027C15.6536 22.0774 15.6719 22.0516 15.6895 22.0255C16.1058 21.4096 16.0309 20.7464 15.8795 20.2184C15.7391 19.729 15.469 19.1426 15.1717 18.4971L13.2968 14.4257C14.1617 13.9623 14.75 13.0499 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25Z',
  d5: 'M12 3C7.02944 3 3 7.02944 3 12C3 14.0276 3.66932 15.8961 4.79949 17.4003C5.13124 17.8418 5.04222 18.4687 4.60067 18.8005C4.15913 19.1322 3.53225 19.0432 3.20051 18.6017C1.81903 16.7629 1 14.4757 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 14.4757 22.181 16.7629 20.7995 18.6017C20.4678 19.0432 19.8409 19.1322 19.3993 18.8005C18.9578 18.4687 18.8688 17.8418 19.2005 17.4003C20.3307 15.8961 21 14.0276 21 12C21 7.02944 16.9706 3 12 3Z',
  d6: 'M12 7C9.23858 7 7 9.23858 7 12C7 13.2812 7.48059 14.4478 8.27292 15.3331C8.64125 15.7446 8.60623 16.3768 8.1947 16.7451C7.78317 17.1135 7.15098 17.0784 6.78265 16.6669C5.67482 15.4291 5 13.7922 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 13.7922 18.3252 15.4291 17.2173 16.6669C16.849 17.0784 16.2168 17.1135 15.8053 16.7451C15.3938 16.3768 15.3588 15.7446 15.7271 15.3331C16.5194 14.4478 17 13.2812 17 12C17 9.23858 14.7614 7 12 7Z',
  d7: 'M8.5 22L12.0004 14L15.5004 22H8.5Z',
  d8: 'M3 12.25C3 7.27944 7.02944 3.25 12 3.25C16.9706 3.25 21 7.27944 21 12.25C21 14.2261 20.3643 16.0509 19.2858 17.5348L20.8746 18.7498C22.2104 16.9287 23 14.6802 23 12.25C23 6.17487 18.0751 1.25 12 1.25C5.92487 1.25 1 6.17487 1 12.25C1 14.6802 1.78926 16.9289 3.12504 18.75L4.71413 17.5348C3.6357 16.0509 3 14.226 3 12.25Z',
  d9: 'M7 12.25C7 9.48858 9.23858 7.25 12 7.25C14.7614 7.25 17 9.48858 17 12.25C17 13.3115 16.6701 14.2942 16.1064 15.1035L17.6963 16.3193C18.5165 15.1727 19 13.7669 19 12.25C19 8.38401 15.866 5.25 12 5.25C8.13401 5.25 5 8.38401 5 12.25C5 13.7669 5.48345 15.1726 6.30371 16.3192L7.89352 15.1035C7.32984 14.2942 7 13.3114 7 12.25Z',
  d10: 'M12 9.25C10.3431 9.25 9 10.5931 9 12.25C9 13.9069 10.3431 15.25 12 15.25C13.6569 15.25 15 13.9069 15 12.25C15 10.5931 13.6569 9.25 12 9.25Z',
  d11: 'M12.0004 13.25C12.2983 13.25 12.5681 13.4264 12.6875 13.6994L16.1875 21.6994C16.2889 21.9313 16.2666 22.1987 16.128 22.4105C15.9895 22.6223 15.7535 22.75 15.5004 22.75H8.5C8.24689 22.75 8.01085 22.6223 7.87232 22.4105C7.73378 22.1987 7.71143 21.9312 7.8129 21.6994L11.3133 13.6994C11.4327 13.4264 11.7024 13.25 12.0004 13.25Z',
};

export const IconInternetAntenna01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-01-stroke-rounded IconInternetAntenna01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconInternetAntenna01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-01-duotone-rounded IconInternetAntenna01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="2" 
        fill="var(--icon-fill)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconInternetAntenna01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-01-twotone-rounded IconInternetAntenna01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconInternetAntenna01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-01-solid-rounded IconInternetAntenna01SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconInternetAntenna01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-01-bulk-rounded IconInternetAntenna01BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconInternetAntenna01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-01-stroke-sharp IconInternetAntenna01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconInternetAntenna01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-01-solid-sharp IconInternetAntenna01SolidSharp"
    >
      <path 
        d={d.d8} 
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
    </TheIconWrapper>
  );
};

export const iconPackOfInternetAntenna01: TheIconSelfPack = {
  name: 'InternetAntenna01',
  StrokeRounded: IconInternetAntenna01StrokeRounded,
  DuotoneRounded: IconInternetAntenna01DuotoneRounded,
  TwotoneRounded: IconInternetAntenna01TwotoneRounded,
  SolidRounded: IconInternetAntenna01SolidRounded,
  BulkRounded: IconInternetAntenna01BulkRounded,
  StrokeSharp: IconInternetAntenna01StrokeSharp,
  SolidSharp: IconInternetAntenna01SolidSharp,
};