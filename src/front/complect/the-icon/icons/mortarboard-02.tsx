import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 8C2 9.34178 10.0949 13 11.9861 13C13.8772 13 21.9722 9.34178 21.9722 8C21.9722 6.65822 13.8772 3 11.9861 3C10.0949 3 2 6.65822 2 8Z',
  d2: 'M5.99414 11L6.23925 16.6299C6.24415 16.7426 6.25634 16.8555 6.28901 16.9635C6.38998 17.2973 6.57608 17.6006 6.86 17.8044C9.08146 19.3985 14.8901 19.3985 17.1115 17.8044C17.3956 17.6006 17.5816 17.2973 17.6826 16.9635C17.7152 16.8555 17.7274 16.7426 17.7324 16.6299L17.9774 11',
  d3: 'M20.4734 9.5V16.5M20.4734 16.5C19.6814 17.9463 19.3312 18.7212 18.9755 20C18.8983 20.455 18.9596 20.6843 19.2732 20.8879C19.4006 20.9706 19.5537 21 19.7055 21H21.2259C21.3876 21 21.5507 20.9663 21.6838 20.8745C21.9753 20.6735 22.0503 20.453 21.9713 20C21.6595 18.8126 21.2623 18.0008 20.4734 16.5Z',
  d4: 'M2.00195 8C2.00195 9.34178 10.1082 13 12.002 13C13.8958 13 22.002 9.34178 22.002 8C22.002 6.65822 13.8958 3 12.002 3C10.1082 3 2.00195 6.65822 2.00195 8Z',
  d5: 'M20.502 16.5078C20.1938 17.2882 19.4037 18.3736 19.0734 19.764C18.8354 20.7661 19.1889 21.0006 20.1866 21.0006H20.8174C21.8151 21.0006 22.1686 20.7661 21.9306 19.764C21.6003 18.3736 20.8102 17.2882 20.502 16.5078Z',
  d6: 'M6.00195 11L6.2474 16.6299C6.25231 16.7426 6.26451 16.8555 6.29723 16.9635C6.39834 17.2973 6.5847 17.6006 6.86902 17.8044C9.09357 19.3985 14.9104 19.3985 17.1349 17.8044C17.4193 17.6006 17.6056 17.2973 17.7067 16.9635C17.7394 16.8555 17.7516 16.7426 17.7566 16.6299L18.002 11',
  d7: 'M20.4793 9.49951V16.5006M20.4793 16.5006C19.6883 17.9471 19.3385 18.7221 18.9832 20.0011C18.9061 20.4562 18.9673 20.6855 19.2805 20.8891C19.4078 20.9718 19.5607 21.0012 19.7123 21.0012H21.2309C21.3923 21.0012 21.5552 20.9675 21.6882 20.8757C21.9793 20.6747 22.0542 20.4541 21.9753 20.0011C21.6639 18.8135 21.2672 18.0016 20.4793 16.5006Z',
  d8: 'M2 8C2 9.34178 10.1062 13 12 13C13.8938 13 22 9.34178 22 8C22 6.65822 13.8938 3 12 3C10.1062 3 2 6.65822 2 8Z',
  d9: 'M6 11L6.24545 16.6299C6.25036 16.7426 6.26256 16.8555 6.29528 16.9635C6.39639 17.2973 6.58275 17.6006 6.86707 17.8044C9.09162 19.3985 14.9084 19.3985 17.1329 17.8044C17.4173 17.6006 17.6036 17.2973 17.7047 16.9635C17.7374 16.8555 17.7496 16.7426 17.7546 16.6299L18 11',
  d10: 'M21.25 9.5C21.25 9.08579 20.9142 8.75 20.5 8.75C20.0858 8.75 19.75 9.08579 19.75 9.5H21.25ZM19.0714 19.7634L19.8011 19.9368L19.0714 19.7634ZM21.9286 19.7634L22.6583 19.5901L21.9286 19.7634ZM19.75 9.5V16.5072H21.25V9.5H19.75ZM19.8011 19.9368C19.946 19.327 20.1952 18.7697 20.4619 18.2478C20.7062 17.7696 21.0263 17.2164 21.1976 16.7827L19.8024 16.2317C19.6655 16.5784 19.4364 16.9581 19.1261 17.5653C18.8382 18.1288 18.5272 18.8095 18.3417 19.5901L19.8011 19.9368ZM22.6583 19.5901C22.4728 18.8095 22.1618 18.1288 21.8739 17.5653C21.5636 16.9581 21.3345 16.5784 21.1976 16.2317L19.8024 16.7827C19.9737 17.2164 20.2938 17.7696 20.5381 18.2478C20.8048 18.7697 21.054 19.327 21.1989 19.9368L22.6583 19.5901ZM20.8154 20.25H20.1846V21.75H20.8154V20.25ZM18.3417 19.5901C18.2184 20.1094 18.1443 20.7964 18.6335 21.287C18.8626 21.5168 19.1451 21.6247 19.3939 21.6799C19.6419 21.7349 19.914 21.75 20.1846 21.75V20.25C19.9563 20.25 19.8101 20.2358 19.7186 20.2155C19.628 20.1954 19.6499 20.1821 19.6957 20.228C19.7534 20.2858 19.7542 20.3398 19.7514 20.3095C19.747 20.2626 19.7504 20.1504 19.8011 19.9368L18.3417 19.5901ZM21.1989 19.9368C21.2496 20.1504 21.253 20.2626 21.2486 20.3095C21.2458 20.3398 21.2466 20.2858 21.3043 20.228C21.3501 20.1821 21.372 20.1954 21.2814 20.2155C21.1899 20.2358 21.0437 20.25 20.8154 20.25V21.75C21.086 21.75 21.3581 21.7349 21.6061 21.6799C21.8549 21.6247 22.1374 21.5168 22.3665 21.287C22.8557 20.7964 22.7816 20.1094 22.6583 19.5901L21.1989 19.9368Z',
  d11: 'M10.8414 2.43303C11.2599 2.32641 11.6671 2.25 12 2.25C12.3329 2.25 12.7401 2.32641 13.1586 2.43303C13.5904 2.54303 14.0852 2.69885 14.6121 2.88569C15.6665 3.25958 16.8817 3.76934 18.0337 4.32021C19.1824 4.86949 20.2909 5.47047 21.1227 6.03058C21.5359 6.30877 21.9063 6.59377 22.1819 6.87321C22.3198 7.01303 22.4517 7.16908 22.5529 7.33906C22.6512 7.50418 22.75 7.73169 22.75 8C22.75 8.26832 22.6512 8.49582 22.5529 8.66094C22.4517 8.83092 22.3198 8.98697 22.1819 9.12679C21.9063 9.40623 21.5359 9.69123 21.1227 9.96942C20.2909 10.5295 19.1824 11.1305 18.0337 11.6798C16.8817 12.2307 15.6665 12.7404 14.6121 13.1143C14.0852 13.3012 13.5904 13.457 13.1586 13.567C12.7401 13.6736 12.3329 13.75 12 13.75C11.6671 13.75 11.2599 13.6736 10.8414 13.567C10.4096 13.457 9.91478 13.3012 9.38788 13.1143C8.33348 12.7404 7.11825 12.2307 5.96626 11.6798C4.81761 11.1305 3.70909 10.5295 2.87728 9.96942C2.46413 9.69123 2.09374 9.40623 1.81808 9.12679C1.68016 8.98697 1.54826 8.83092 1.44706 8.66094C1.34876 8.49582 1.25 8.26832 1.25 8C1.25 7.73169 1.34876 7.50418 1.44706 7.33906C1.54826 7.16908 1.68016 7.01303 1.81808 6.87321C2.09374 6.59377 2.46413 6.30877 2.87728 6.03058C3.70909 5.47047 4.81761 4.86949 5.96626 4.32021C7.11825 3.76934 8.33348 3.25958 9.38788 2.88569C9.91478 2.69885 10.4096 2.54303 10.8414 2.43303Z',
  d12: 'M15.1144 14.5285C14.5599 14.7251 14.0193 14.8963 13.5298 15.021C13.0795 15.1357 12.5257 15.2504 12.0009 15.2504C11.4761 15.2504 10.9223 15.1357 10.472 15.021C9.98249 14.8963 9.44193 14.7251 8.88747 14.5285C8.01475 14.219 7.04728 13.8249 6.09414 13.3936C5.75043 13.238 5.35907 13.4974 5.3755 13.8743L5.49708 16.663C5.50321 16.8036 5.51961 16.9872 5.5784 17.1813C5.71567 17.6345 5.98296 18.0933 6.43112 18.4145C7.10092 18.8944 7.98982 19.2227 8.93433 19.4335C9.88858 19.6465 10.9493 19.7504 12.0009 19.7504C13.0525 19.7504 14.1133 19.6465 15.0675 19.4335C16.012 19.2227 16.9009 18.8944 17.5707 18.4145C18.0189 18.0933 18.2862 17.6345 18.4234 17.1813C18.4822 16.9872 18.4986 16.8036 18.5048 16.663L18.6263 13.8743C18.6428 13.4974 18.2514 13.238 17.9077 13.3936C16.9546 13.8249 15.9871 14.219 15.1144 14.5285Z',
  d13: 'M20.4998 8.75C20.914 8.75 21.2498 9.08579 21.2498 9.5V16.3564C21.3339 16.5459 21.4435 16.7511 21.5771 17.0011L21.5771 17.0011C21.6656 17.1667 21.7646 17.3519 21.8736 17.5653C22.1616 18.1288 22.4726 18.8095 22.658 19.5901C22.7814 20.1094 22.8555 20.7964 22.3663 21.287C22.1372 21.5168 21.8547 21.6247 21.6059 21.6799C21.3579 21.7349 21.0858 21.75 20.8152 21.75H20.1843C19.9138 21.75 19.6416 21.7349 19.3936 21.6799C19.1449 21.6247 18.8624 21.5168 18.6332 21.287C18.1441 20.7964 18.2181 20.1094 18.3415 19.5901C18.5269 18.8095 18.8379 18.1288 19.1259 17.5653C19.2349 17.352 19.3339 17.1667 19.4224 17.0012L19.4224 17.0011L19.4224 17.001C19.556 16.7511 19.6657 16.5459 19.7498 16.3564V9.5C19.7498 9.08579 20.0856 8.75 20.4998 8.75Z',
  d14: 'M7.00107 10.5L7 16L12 18.5L16.9989 16V10.5',
  d15: 'M19.9739 8.99522L11.9394 13.0197L2.00551 8.00939C1.99816 8.00569 1.99817 7.99511 2.00552 7.99142L11.9394 2.99902L21.9964 7.9913C22.0038 7.995 22.0038 8.00571 21.9963 8.00936L19.9739 8.99522ZM19.9739 8.99522V17.0229M19.9739 17.0229L17.9852 20.9864C17.9819 20.9931 17.9867 21.001 17.9941 21.001H21.8866C21.894 21.001 21.8988 20.9932 21.8956 20.9865L19.9739 17.0229Z',
  d16: 'M22.3354 7.41771C22.5895 7.54475 22.75 7.80445 22.75 8.08853C22.75 8.3726 22.5895 8.6323 22.3354 8.75935L12 13.9271L1.66459 8.75935C1.4105 8.6323 1.25 8.3726 1.25 8.08853C1.25 7.80445 1.4105 7.54475 1.66459 7.41771L12 2.25L22.3354 7.41771Z',
  d17: 'M6.25116 10.5L7.75116 10.5003L7.75018 15.5367L12.0001 17.6616L16.249 15.5367V10.5001H17.749V16.4636L12.0001 19.3387L6.25 16.4636L6.25116 10.5Z',
  d18: 'M19.25 16.8229V9H20.75V16.8229L22.6708 20.6646C22.7871 20.8971 22.7746 21.1732 22.638 21.3943C22.5013 21.6154 22.2599 21.75 22 21.75H18C17.7401 21.75 17.4987 21.6154 17.362 21.3943C17.2254 21.1732 17.2129 20.8971 17.3292 20.6646L19.25 16.8229Z',
};

export const IconMortarboard02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mortarboard-02-stroke-rounded IconMortarboard02StrokeRounded"
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

export const IconMortarboard02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mortarboard-02-duotone-rounded IconMortarboard02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMortarboard02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mortarboard-02-twotone-rounded IconMortarboard02TwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMortarboard02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mortarboard-02-solid-rounded IconMortarboard02SolidRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMortarboard02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mortarboard-02-bulk-rounded IconMortarboard02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMortarboard02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mortarboard-02-stroke-sharp IconMortarboard02StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMortarboard02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mortarboard-02-solid-sharp IconMortarboard02SolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMortarboard02: TheIconSelfPack = {
  name: 'Mortarboard02',
  StrokeRounded: IconMortarboard02StrokeRounded,
  DuotoneRounded: IconMortarboard02DuotoneRounded,
  TwotoneRounded: IconMortarboard02TwotoneRounded,
  SolidRounded: IconMortarboard02SolidRounded,
  BulkRounded: IconMortarboard02BulkRounded,
  StrokeSharp: IconMortarboard02StrokeSharp,
  SolidSharp: IconMortarboard02SolidSharp,
};