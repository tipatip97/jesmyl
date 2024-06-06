import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.5 14.5C9.62137 13.3944 10.9643 12.887 12.5 13.0212',
  d2: 'M18.5 11.4999C17.0073 10.1793 15.2848 9.2742 13.5 9',
  d3: 'M5.5 11.5C6.59299 10.5892 7.778 9.91306 9 9.5',
  d4: 'M22 8.49989C18.0717 5.18273 13.7362 3.92879 9.5 4.73808',
  d5: 'M2 8.5C3.22409 7.46632 4.5 6.5 5.5 6',
  d6: 'M2 2L22 22',
  d7: 'M7.79792 13.7878C9.11706 12.4872 10.7444 11.8639 12.5871 12.0249C13.1372 12.073 13.5443 12.558 13.4962 13.1082C13.4481 13.6583 12.9631 14.0654 12.4129 14.0173C11.1842 13.9099 10.1257 14.3014 9.20208 15.212C8.8088 15.5998 8.17565 15.5953 7.7879 15.202C7.40015 14.8087 7.40464 14.1756 7.79792 13.7878Z',
  d8: 'M12.5117 8.84829C12.5956 8.30241 13.1061 7.92787 13.652 8.01174C15.6661 8.32118 17.5597 9.33277 19.1628 10.7511C19.5764 11.117 19.615 11.749 19.2491 12.1627C18.8831 12.5763 18.2512 12.6149 17.8375 12.249C16.4553 11.0261 14.9037 10.2275 13.3483 9.98854C12.8024 9.90468 12.4279 9.39417 12.5117 8.84829Z',
  d9: 'M9.94737 9.18005C10.1242 9.70325 9.84345 10.2708 9.32025 10.4476C8.22586 10.8175 7.1477 11.4289 6.14021 12.2685C5.71593 12.6221 5.08537 12.5647 4.7318 12.1405C4.37824 11.7162 4.43556 11.0856 4.85984 10.732C6.03834 9.74996 7.33019 9.00913 8.6798 8.55293C9.203 8.37608 9.77051 8.65685 9.94737 9.18005Z',
  d10: 'M9.31253 3.75611C13.8917 2.88131 18.5255 4.25719 22.6454 7.73612C23.0673 8.09244 23.1205 8.72336 22.7642 9.14533C22.4079 9.56729 21.777 9.62051 21.355 9.26419C17.6183 6.10881 13.5811 4.97681 9.68783 5.72058C9.14536 5.82422 8.62158 5.46847 8.51795 4.926C8.41431 4.38352 8.77006 3.85975 9.31253 3.75611Z',
  d11: 'M6.39445 5.55301C6.64144 6.04698 6.44121 6.64766 5.94724 6.89465C5.06228 7.33712 3.86409 8.23497 2.6452 9.26425C2.22324 9.62057 1.59231 9.56736 1.23599 9.1454C0.879668 8.72343 0.93288 8.09251 1.35484 7.73619C2.58414 6.69812 3.93776 5.66332 5.05281 5.10579C5.54679 4.8588 6.14746 5.05903 6.39445 5.55301Z',
  d12: 'M12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16Z',
  d13: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d14: 'M19.5858 21.5L1.5 3.41421L2.91421 2L21 20.0858L19.5858 21.5Z',
  d15: 'M12.4999 5.5C15.9573 5.49998 19.3689 6.77591 22.5 9.25L21.0817 10.6753C18.3024 8.53419 15.3793 7.49999 12.4999 7.5C11.8922 7.5 11.2826 7.54608 10.6727 7.6389L8.97837 5.94456C10.1406 5.64923 11.3176 5.50001 12.4999 5.5Z',
  d16: 'M3.91835 10.6753L2.5 9.25C3.74867 8.26336 5.04194 7.46726 6.36492 6.86665L7.88967 8.3914C6.54724 8.91593 5.21708 9.67476 3.91835 10.6753Z',
  d17: 'M15.0135 16.7733C13.5517 15.7423 11.4483 15.7422 9.98647 16.7732L8.56492 15.3447C9.9804 14.2157 11.8425 13.7976 13.5887 14.0905L15.641 16.1427L15.0135 16.7733Z',
  d18: 'M5.71012 12.4759L7.12988 13.9026C8.51673 12.8631 10.0345 12.2516 11.5613 12.0631L9.86272 10.3644C8.41369 10.7553 7.00379 11.4599 5.71012 12.4759Z',
  d19: 'M17.8819 13.8907L19.2975 12.4682C17.4275 10.9249 15.2547 10.1083 13.0439 10.0101L15.609 12.5752C16.4039 12.8873 17.1683 13.3261 17.8819 13.8907Z',
  d20: 'M12.5 18C11.3954 18 10.5 18.8954 10.5 20C10.5 21.1046 11.3954 22 12.5 22C13.6046 22 14.5 21.1046 14.5 20C14.5 18.8954 13.6046 18 12.5 18Z',
};

export const IconWifiOff01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-off-01-stroke-rounded IconWifiOff01StrokeRounded"
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
      <circle 
        cx="12" 
        cy="18" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiOff01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-off-01-duotone-rounded IconWifiOff01DuotoneRounded"
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
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="18" 
        r="1.5" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="18" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiOff01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-off-01-twotone-rounded IconWifiOff01TwotoneRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="18" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiOff01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-off-01-solid-rounded IconWifiOff01SolidRounded"
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiOff01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-off-01-bulk-rounded IconWifiOff01BulkRounded"
    >
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
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiOff01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-off-01-stroke-sharp IconWifiOff01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="18" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiOff01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-off-01-solid-sharp IconWifiOff01SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWifiOff01: TheIconSelfPack = {
  name: 'WifiOff01',
  StrokeRounded: IconWifiOff01StrokeRounded,
  DuotoneRounded: IconWifiOff01DuotoneRounded,
  TwotoneRounded: IconWifiOff01TwotoneRounded,
  SolidRounded: IconWifiOff01SolidRounded,
  BulkRounded: IconWifiOff01BulkRounded,
  StrokeSharp: IconWifiOff01StrokeSharp,
  SolidSharp: IconWifiOff01SolidSharp,
};