import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 3.5V2',
  d2: 'M12 3.5C11.0608 3.5 7.52791 7.29323 6.97182 12.2037M12 3.5C12.9392 3.5 16.4721 7.29322 17.0282 12.2037M12 3.5C16.9367 3.5 21.0545 6.93552 22 11.5C20.6123 12.7 18.1073 12.4691 17.0282 12.2037M12 3.5C7.06333 3.5 2.94545 6.93552 2 11.5C3.38792 12.7 5.89285 12.4691 6.97182 12.2037M6.97182 12.2037C8.4559 13.0288 10.1718 13.5 12 13.5C13.8282 13.5 15.5441 13.0288 17.0282 12.2037',
  d3: 'M12 13.5V20.5C12 21.3284 11.3284 22 10.5 22C9.67157 22 9 21.3284 9 20.5V20',
  d4: 'M17.5 15.875C16.6716 15.875 16 16.4626 16 17.1875C16 17.9124 16.6716 18.5 17.5 18.5C18.3284 18.5 19 19.0876 19 19.8125C19 20.5374 18.3284 21.125 17.5 21.125M17.5 15.875C18.1531 15.875 18.7087 16.2402 18.9146 16.75M17.5 15.875V15M17.5 21.125C16.8469 21.125 16.2913 20.7598 16.0854 20.25M17.5 21.125V22',
  d5: 'M12 3.5C11.0608 3.5 7.52791 7.29323 6.97182 12.2037C5.89285 12.4691 3.38792 12.7 2 11.5C2.94545 6.93552 7.06333 3.5 12 3.5C16.9367 3.5 21.0545 6.93552 22 11.5C20.6123 12.7 18.1073 12.4691 17.0282 12.2037C16.4721 7.29322 12.9392 3.5 12 3.5Z',
  d6: 'M6.97266 12.2037C8.45673 13.0288 10.1726 13.5 12.0008 13.5C13.829 13.5 15.5449 13.0288 17.029 12.2037C16.4729 7.29322 12.9401 3.5 12.0008 3.5C11.0616 3.5 7.52874 7.29323 6.97266 12.2037Z',
  d7: 'M12 1C12.5523 1 13 1.44772 13 2V3.5C13 4.05228 12.5523 4.5 12 4.5C11.4477 4.5 11 4.05228 11 3.5V2C11 1.44772 11.4477 1 12 1Z',
  d8: 'M3.13971 11.0539C3.55779 11.2522 4.0817 11.3665 4.6649 11.4034C5.17304 11.4355 5.67067 11.4052 6.08361 11.351C6.48597 9.00464 7.48528 6.95169 8.51727 5.44526C8.60709 5.31414 8.69754 5.18661 8.78829 5.06286C6.05158 6.0593 3.93586 8.29158 3.13971 11.0539ZM12 2.5C6.5935 2.5 2.06328 6.26429 1.02081 11.2972C0.947265 11.6522 1.07169 12.0193 1.34599 12.2565C2.2789 13.0631 3.50881 13.3343 4.53869 13.3994C5.39111 13.4533 6.21058 13.3727 6.82353 13.2579C8.37338 14.0519 10.135 14.5 12 14.5C13.865 14.5 15.6267 14.0519 17.1765 13.2579C17.7895 13.3727 18.609 13.4533 19.4615 13.3994C20.4914 13.3343 21.7213 13.0631 22.6541 12.2564C22.9284 12.0192 23.0528 11.6522 22.9792 11.2972C21.9368 6.26429 17.4066 2.5 12 2.5ZM12 4.56283C11.8906 4.63511 11.7459 4.74729 11.5718 4.90681C11.1653 5.27916 10.6669 5.84618 10.1672 6.57557C9.26755 7.88888 8.41307 9.65583 8.06372 11.638C9.2558 12.1904 10.5896 12.5 12 12.5C13.4105 12.5 14.7443 12.1904 15.9363 11.638C15.587 9.65583 14.7325 7.88888 13.8328 6.57557C13.3331 5.84618 12.8347 5.27916 12.4283 4.90681C12.2541 4.74729 12.1094 4.63511 12 4.56283ZM17.9164 11.3509C17.5141 9.00464 16.5148 6.95169 15.4828 5.44526C15.393 5.31414 15.3025 5.18661 15.2118 5.06286C17.9485 6.05931 20.0642 8.2916 20.8604 11.054C20.4424 11.2522 19.9185 11.3665 19.3353 11.4034C18.8271 11.4355 18.3294 11.4052 17.9164 11.3509Z',
  d9: 'M12 12.5C12.5523 12.5 13 12.9477 13 13.5V20.5C13 21.8807 11.8807 23 10.5 23C9.11929 23 8 21.8807 8 20.5V20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20V20.5C10 20.7761 10.2239 21 10.5 21C10.7761 21 11 20.7761 11 20.5V13.5C11 12.9477 11.4477 12.5 12 12.5Z',
  d10: 'M17.5 14.25C17.9142 14.25 18.25 14.5858 18.25 15V15.2427C18.8596 15.4397 19.3696 15.8739 19.6101 16.4691C19.7652 16.8532 19.5796 17.2903 19.1956 17.4454C18.8115 17.6005 18.3744 17.415 18.2192 17.0309C18.1418 16.8392 17.8864 16.625 17.5 16.625C16.9886 16.625 16.75 16.9678 16.75 17.1875C16.75 17.4072 16.9886 17.75 17.5 17.75C18.6454 17.75 19.75 18.5825 19.75 19.8125C19.75 20.7676 19.084 21.483 18.25 21.7551V22C18.25 22.4142 17.9142 22.75 17.5 22.75C17.0858 22.75 16.75 22.4142 16.75 22V21.7573C16.1404 21.5603 15.6304 21.1261 15.3899 20.5309C15.2348 20.1468 15.4204 19.7097 15.8044 19.5546C16.1885 19.3995 16.6256 19.585 16.7808 19.9691C16.8582 20.1608 17.1136 20.375 17.5 20.375C18.0114 20.375 18.25 20.0322 18.25 19.8125C18.25 19.5928 18.0114 19.25 17.5 19.25C16.3546 19.25 15.25 18.4175 15.25 17.1875C15.25 16.2324 15.916 15.517 16.75 15.2449V15C16.75 14.5858 17.0858 14.25 17.5 14.25Z',
  d11: 'M18 15.5C16.8954 15.5 16 16.1716 16 17C16 17.8284 16.8954 18.5 18 18.5C19.1046 18.5 20 19.1716 20 20C20 20.8284 19.1046 21.5 18 21.5M18 15.5C18.8708 15.5 19.6116 15.9174 19.8862 16.5M18 15.5V14M18 21.5C17.1292 21.5 16.3884 21.0826 16.1138 20.5M18 21.5V23',
  d12: 'M12 3.5V1',
  d13: 'M12 3C16.9706 3 21 6.47715 21 12H3C3 6.47715 7.02944 3 12 3Z',
  d14: 'M12 3C14.2091 3 16 6.47715 16 12H8C8 6.47715 9.79086 3 12 3Z',
  d15: 'M12 12V20.5C12 21.3284 11.3284 22 10.5 22C9.67157 22 9 21.3284 9 20.5V20',
  d16: 'M13 1V3.5H11V1H13Z',
  d17: 'M22 12.5V13.5H2V12.5C2 6.38449 6.51841 2.5 12 2.5C17.4816 2.5 22 6.38449 22 12.5ZM8.74975 5.103C6.20096 6.11938 4.3715 8.37306 4.05036 11.5H7.26958C7.36462 9.11005 7.80155 7.0993 8.49127 5.61319C8.57266 5.43783 8.65885 5.26746 8.74975 5.103ZM15.2502 5.103C15.3411 5.26746 15.4273 5.43783 15.5087 5.61319C16.1985 7.0993 16.6354 9.11005 16.7304 11.5H19.9496C19.6285 8.37306 17.799 6.11938 15.2502 5.103Z',
  d18: 'M13 12.5V20.5C13 21.8807 11.8807 23 10.5 23C9.11929 23 8 21.8807 8 20.5V20H10V20.5C10 20.7761 10.2239 21 10.5 21C10.7761 21 11 20.7761 11 20.5V12.5H13Z',
  d19: 'M17.25 14.8336C16.8358 14.9281 16.4543 15.1005 16.1358 15.3393C15.6318 15.7173 15.25 16.2968 15.25 17C15.25 17.7032 15.6318 18.2827 16.1358 18.6607C16.6396 19.0385 17.3011 19.25 18 19.25C18.4057 19.25 18.7441 19.3743 18.9642 19.5393C19.1841 19.7042 19.25 19.8748 19.25 20C19.25 20.1252 19.1841 20.2958 18.9642 20.4607C18.7441 20.6257 18.4057 20.75 18 20.75C17.3316 20.75 16.9095 20.429 16.7922 20.1803L15.4354 20.8197C15.7653 21.5197 16.4613 21.9848 17.25 22.1655V23H18.75V22.1664C19.1642 22.0719 19.5457 21.8995 19.8642 21.6607C20.3682 21.2827 20.75 20.7032 20.75 20C20.75 19.2968 20.3682 18.7173 19.8642 18.3393C19.3604 17.9615 18.6989 17.75 18 17.75C17.5943 17.75 17.2559 17.6257 17.0358 17.4607C16.8159 17.2958 16.75 17.1252 16.75 17C16.75 16.8748 16.8159 16.7042 17.0358 16.5393C17.2559 16.3743 17.5943 16.25 18 16.25C18.6684 16.25 19.0905 16.571 19.2078 16.8197L20.5646 16.1803C20.2347 15.4803 19.5387 15.0152 18.75 14.8345V14H17.25V14.8336Z',
} as const;

export const IconUmbrellaDollarStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="umbrella-dollar-stroke-rounded IconUmbrellaDollarStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUmbrellaDollarDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="umbrella-dollar-duotone-rounded IconUmbrellaDollarDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUmbrellaDollarTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="umbrella-dollar-twotone-rounded IconUmbrellaDollarTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUmbrellaDollarSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="umbrella-dollar-solid-rounded IconUmbrellaDollarSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconUmbrellaDollarBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="umbrella-dollar-bulk-rounded IconUmbrellaDollarBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUmbrellaDollarStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="umbrella-dollar-stroke-sharp IconUmbrellaDollarStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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

export const IconUmbrellaDollarSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="umbrella-dollar-solid-sharp IconUmbrellaDollarSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUmbrellaDollar: TheIconSelfPack = {
  name: 'UmbrellaDollar',
  StrokeRounded: IconUmbrellaDollarStrokeRounded,
  DuotoneRounded: IconUmbrellaDollarDuotoneRounded,
  TwotoneRounded: IconUmbrellaDollarTwotoneRounded,
  SolidRounded: IconUmbrellaDollarSolidRounded,
  BulkRounded: IconUmbrellaDollarBulkRounded,
  StrokeSharp: IconUmbrellaDollarStrokeSharp,
  SolidSharp: IconUmbrellaDollarSolidSharp,
};