import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.5002 15L9.50016 20M14.5002 20L9.50016 15',
  d2: 'M18.5 13C14.7324 9 9.5 9 5.5 13',
  d3: 'M2 8C8.31579 2.66669 15.6842 2.66668 22 7.99989',
  d4: 'M8.79289 14.2929C9.18342 13.9024 9.81658 13.9024 10.2071 14.2929L12 16.0858L13.7929 14.2929C14.1834 13.9024 14.8166 13.9024 15.2071 14.2929C15.5976 14.6834 15.5976 15.3166 15.2071 15.7071L13.4142 17.5L15.2071 19.2929C15.5976 19.6834 15.5976 20.3166 15.2071 20.7071C14.8166 21.0976 14.1834 21.0976 13.7929 20.7071L12 18.9142L10.2071 20.7071C9.81658 21.0976 9.18342 21.0976 8.79289 20.7071C8.40237 20.3166 8.40237 19.6834 8.79289 19.2929L10.5858 17.5L8.79289 15.7071C8.40237 15.3166 8.40237 14.6834 8.79289 14.2929Z',
  d5: 'M12 3C15.695 2.99998 19.3379 4.44312 22.6452 7.23585C23.0672 7.59217 23.1204 8.22309 22.7641 8.64506C22.4077 9.06703 21.7768 9.12024 21.3548 8.76393C18.3463 6.22345 15.1472 4.99999 12 5C8.85288 5.00001 5.65374 6.2235 2.6452 8.76403C2.22324 9.12035 1.59231 9.06714 1.23599 8.64518C0.879668 8.22322 0.93288 7.59229 1.35484 7.23597C4.6621 4.44319 8.30506 3.00002 12 3ZM12.0872 9C14.677 9 17.1807 10.1408 19.228 12.3144C19.6066 12.7164 19.5877 13.3493 19.1857 13.7279C18.7836 14.1066 18.1508 14.0877 17.7721 13.6856C16.0517 11.8592 14.0555 11 12.0872 11C10.1149 11 8.05119 11.863 6.20713 13.7071C5.8166 14.0976 5.18344 14.0976 4.79291 13.7071C4.40239 13.3166 4.40239 12.6834 4.79291 12.2929C6.94886 10.137 9.50133 9 12.0872 9Z',
  d6: 'M13.4143 16.7929L15.2072 18.5858L13.793 20L12.0001 18.2071L10.2072 20L8.79297 18.5858L10.5859 16.7929L8.79297 15L10.2072 13.5858L12.0001 15.3787L13.793 13.5858L15.2072 15L13.4143 16.7929Z',
  d7: 'M22 7.71401C18.8671 5.26354 15.4562 3.99998 11.9999 4C8.54366 4.00002 5.1329 5.26356 2 7.71401L3.31491 9.22465C6.12597 7.0501 9.08526 6.00001 11.9999 6C14.9146 5.99999 17.8739 7.05004 20.6849 9.22454L22 7.71401Z',
  d8: 'M17.7105 12.6411L19.0236 11.1329C14.916 7.60646 9.27455 7.63752 4.97802 11.1353L6.29179 12.6447C9.86432 9.77147 14.3903 9.79996 17.7105 12.6411Z',
} as const;

export const IconWifiDisconnected02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-02-stroke-rounded IconWifiDisconnected02StrokeRounded"
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

export const IconWifiDisconnected02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-02-duotone-rounded IconWifiDisconnected02DuotoneRounded"
    >
      <path 
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

export const IconWifiDisconnected02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-02-twotone-rounded IconWifiDisconnected02TwotoneRounded"
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

export const IconWifiDisconnected02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-02-solid-rounded IconWifiDisconnected02SolidRounded"
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

export const IconWifiDisconnected02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-02-bulk-rounded IconWifiDisconnected02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiDisconnected02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-02-stroke-sharp IconWifiDisconnected02StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconWifiDisconnected02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-02-solid-sharp IconWifiDisconnected02SolidSharp"
    >
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWifiDisconnected02: TheIconSelfPack = {
  name: 'WifiDisconnected02',
  StrokeRounded: IconWifiDisconnected02StrokeRounded,
  DuotoneRounded: IconWifiDisconnected02DuotoneRounded,
  TwotoneRounded: IconWifiDisconnected02TwotoneRounded,
  SolidRounded: IconWifiDisconnected02SolidRounded,
  BulkRounded: IconWifiDisconnected02BulkRounded,
  StrokeSharp: IconWifiDisconnected02StrokeSharp,
  SolidSharp: IconWifiDisconnected02SolidSharp,
};