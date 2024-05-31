import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 13H13',
  d2: 'M12 9V3',
  d3: 'M20.1526 20.9174C22.0143 20.3289 22.5597 16.7547 21.3708 12.9344C20.1819 9.11398 17.709 6.49405 15.8474 7.08259C14.6972 7.44619 14.6438 8.86174 13.6968 9.378C13.473 9.5 13.1595 9.5 12.5324 9.5H11.4676C10.8405 9.5 10.527 9.5 10.3032 9.378C9.35625 8.86174 9.30278 7.44619 8.15264 7.08259C6.29102 6.49405 3.8181 9.11398 2.62922 12.9344C1.44035 16.7547 1.98573 20.3289 3.84736 20.9174C5.20631 21.347 6.891 20.067 8.16417 17.8583C9.01333 16.3851 9.39787 16 11.1039 16H12.8961C14.6021 16 14.9867 16.3851 15.8358 17.8583C17.109 20.067 18.7937 21.347 20.1526 20.9174Z',
  d4: 'M8.37873 6.36936C7.02066 5.94002 5.64883 6.72389 4.59325 7.84221C3.49947 9.00101 2.53388 10.7186 1.91311 12.7134C1.2923 14.7083 1.11193 16.6734 1.35294 18.2529C1.58549 19.7769 2.26581 21.2059 3.62129 21.6344C4.61429 21.9483 5.62349 21.6043 6.47738 20.9869C7.33805 20.3646 8.1422 19.4001 8.81396 18.2347C9.2493 17.4795 9.48125 17.1697 9.73226 17.0003C9.95432 16.8504 10.2856 16.7519 11.1039 16.7519H12.8961C13.7145 16.7519 14.0457 16.8504 14.2678 17.0003C14.5188 17.1697 14.7507 17.4795 15.1861 18.2347C15.8578 19.4001 16.662 20.3646 17.5226 20.9869C18.3765 21.6043 19.3857 21.9483 20.3787 21.6344C21.7342 21.2059 22.4145 19.7769 22.6471 18.2529C22.8881 16.6734 22.7077 14.7083 22.0869 12.7134C21.4661 10.7186 20.5005 9.00101 19.4068 7.84221C18.3512 6.72389 16.9794 5.94002 15.6213 6.36936C14.7527 6.64395 14.3284 7.32497 14.0511 7.79195C13.7604 8.28194 13.579 8.5876 13.3429 8.71857C13.1962 8.73068 12.8586 8.75189 12.5324 8.75189H11.4677C11.1414 8.75189 10.8038 8.73068 10.6571 8.71857C10.421 8.5876 10.2397 8.28194 9.94897 7.79195C9.67162 7.32497 9.24731 6.64395 8.37873 6.36936ZM11 12C10.4477 12 10 12.4477 10 13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13C14 12.4477 13.5523 12 13 12H11Z',
  d5: 'M12 2.25C12.5523 2.25 13 2.69772 13 3.25V9.25C13 9.80228 12.5523 10.25 12 10.25C11.4477 10.25 11 9.80228 11 9.25V3.25C11 2.69772 11.4477 2.25 12 2.25Z',
  d6: 'M4.59325 7.84221C5.64883 6.72389 7.02066 5.94002 8.37873 6.36936C9.24731 6.64395 9.67162 7.32497 9.94897 7.79195C10.2397 8.28194 10.421 8.5876 10.6571 8.71857C10.8038 8.73068 11.1414 8.75189 11.4677 8.75189H12.5324C12.8586 8.75189 13.1962 8.73068 13.3429 8.71857C13.579 8.5876 13.7604 8.28194 14.0511 7.79195C14.3284 7.32497 14.7527 6.64395 15.6213 6.36936C16.9794 5.94002 18.3512 6.72389 19.4068 7.84221C20.5005 9.00101 21.4661 10.7186 22.0869 12.7134C22.7077 14.7083 22.8881 16.6734 22.6471 18.2529C22.4145 19.7769 21.7342 21.2059 20.3787 21.6344C19.3857 21.9483 18.3765 21.6043 17.5226 20.9869C16.662 20.3646 15.8578 19.4001 15.1861 18.2347C14.7507 17.4795 14.5188 17.1697 14.2678 17.0003C14.0457 16.8504 13.7145 16.7519 12.8961 16.7519H11.1039C10.2856 16.7519 9.95432 16.8504 9.73226 17.0003C9.48125 17.1697 9.2493 17.4795 8.81396 18.2347C8.1422 19.4001 7.33805 20.3646 6.47738 20.9869C5.62349 21.6043 4.61429 21.9483 3.62129 21.6344C2.26581 21.2059 1.58549 19.7769 1.35294 18.2529C1.11193 16.6734 1.2923 14.7083 1.91311 12.7134C2.53388 10.7186 3.49947 9.00101 4.59325 7.84221Z',
  d7: 'M10 13C10 12.4477 10.4477 12 11 12H13C13.5523 12 14 12.4477 14 13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13Z',
  d8: 'M13 3.25C13 2.69772 12.5523 2.25 12 2.25C11.4477 2.25 11 2.69772 11 3.25V8.74001C11.1424 8.74671 11.3064 8.75189 11.4677 8.75189H12.5324C12.6936 8.75189 12.8576 8.74671 13 8.74001V3.25Z',
  d9: 'M10.5 13H13.5',
  d10: 'M20.1526 20.9233C22.0143 20.3345 22.5597 16.7589 21.3708 12.9369C20.1819 9.11488 17.709 6.49384 15.8474 7.08262C14.6972 7.44638 13.6968 9.379 13.6968 9.379H10.3032C10.3032 9.379 9.30278 7.44638 8.15264 7.08262C6.29102 6.49384 3.8181 9.11488 2.62922 12.9369C1.44035 16.7589 1.98573 20.3345 3.84736 20.9233C5.20631 21.3531 8 20.012 9.5 16.0038H14.5C16 20.012 18.7937 21.3531 20.1526 20.9233Z',
  d11: 'M12.75 2.74878V8.12968H13.262C13.3808 7.93432 13.5432 7.6831 13.7394 7.41979C13.9539 7.13188 14.2188 6.81595 14.5216 6.54065C14.8191 6.27017 15.1905 6.00444 15.6212 5.86821C16.9795 5.43863 18.3514 6.22296 19.4069 7.34168C20.5006 8.50094 21.4662 10.2192 22.0869 12.2148C22.7077 14.2105 22.8881 16.1763 22.6471 17.7563C22.4146 19.2808 21.7343 20.7103 20.3788 21.1391C19.3766 21.456 18.0865 21.0863 16.9326 20.231C15.8383 19.4199 14.7725 18.1138 13.9909 16.2545H10.0091C9.22755 18.1138 8.16168 19.4199 7.0674 20.231C5.91353 21.0863 4.62342 21.456 3.6212 21.1391C2.26567 20.7103 1.58546 19.2808 1.35294 17.7563C1.11194 16.1763 1.29229 14.2105 1.91308 12.2148C2.53383 10.2192 3.49939 8.50094 4.59314 7.34168C5.64865 6.22296 7.02056 5.43863 8.37882 5.86821C8.80955 6.00444 9.18097 6.27017 9.47845 6.54065C9.78123 6.81595 10.0461 7.13188 10.2607 7.41979C10.4568 7.6831 10.6193 7.93432 10.738 8.12968H11.25V2.74878H12.75ZM10.5 13.2507H13.5V11.7507H10.5V13.2507Z',
} as const;

export const IconGameController01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-01-stroke-rounded IconGameController01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconGameController01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-01-duotone-rounded IconGameController01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconGameController01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-01-twotone-rounded IconGameController01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconGameController01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-01-solid-rounded IconGameController01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGameController01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-01-bulk-rounded IconGameController01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconGameController01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-01-stroke-sharp IconGameController01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGameController01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-01-solid-sharp IconGameController01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGameController01: TheIconSelfPack = {
  name: 'GameController01',
  StrokeRounded: IconGameController01StrokeRounded,
  DuotoneRounded: IconGameController01DuotoneRounded,
  TwotoneRounded: IconGameController01TwotoneRounded,
  SolidRounded: IconGameController01SolidRounded,
  BulkRounded: IconGameController01BulkRounded,
  StrokeSharp: IconGameController01StrokeSharp,
  SolidSharp: IconGameController01SolidSharp,
};