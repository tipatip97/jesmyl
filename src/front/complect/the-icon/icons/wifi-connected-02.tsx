import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.5 11.5C14.7324 8.16667 9.5 8.16667 5.5 11.5',
  d2: 'M2 8C8.31579 2.66669 15.6842 2.66668 22 7.99989',
  d3: 'M9 18.0001C9 18.0001 10 18.0001 11 20.0001C11 20.0001 13.4766 16.1017 16 14.501',
  d4: 'M5.5 11.5C9.5 8.16667 14.7324 8.16667 18.5 11.5L22 7.99989C15.6842 2.66668 8.31579 2.66669 2 8L5.5 11.5Z',
  d5: 'M9 17.9991C9 17.9991 10 17.9991 11 19.9991C11 19.9991 13.4766 16.1007 16 14.5',
  d6: 'M12 3C15.695 2.99998 19.3379 4.44312 22.6452 7.23585C23.0672 7.59217 23.1204 8.22309 22.7641 8.64506C22.4077 9.06703 21.7768 9.12024 21.3548 8.76393C18.3463 6.22345 15.1472 4.99999 12 5C8.85288 5.00001 5.65374 6.2235 2.6452 8.76403C2.22324 9.12035 1.59231 9.06714 1.23599 8.64518C0.879668 8.22322 0.93288 7.59229 1.35484 7.23597C4.6621 4.44319 8.30506 3.00002 12 3ZM4.85984 10.7318C9.21913 7.09903 15.0058 7.07336 19.1626 10.751C19.5763 11.117 19.6149 11.749 19.249 12.1626C18.883 12.5763 18.251 12.6149 17.8374 12.249C14.459 9.25997 9.78091 9.2343 6.14021 12.2682C5.71593 12.6218 5.08536 12.5645 4.7318 12.1402C4.37824 11.7159 4.43556 11.0853 4.85984 10.7318Z',
  d7: 'M16.5357 15.3446C17.002 15.0487 17.1403 14.4308 16.8444 13.9645C16.5486 13.4981 15.9307 13.3599 15.4643 13.6557C14.055 14.5497 12.7197 16.0351 11.7712 17.2274C11.4951 17.5744 11.2458 17.9043 11.0304 18.1986C10.7416 17.8528 10.454 17.6 10.1797 17.4172C9.9053 17.2342 9.65446 17.1283 9.4466 17.0689C9.26415 17.0168 9.13486 16.9996 9 16.9992C8.44771 16.9992 8 17.4469 8 17.9992C8 18.5199 8.39799 18.9477 8.90638 18.9949C8.92901 19.0025 8.98598 19.025 9.0703 19.0813C9.26956 19.2141 9.66489 19.5651 10.1056 20.4464C10.2668 20.7688 10.5889 20.9795 10.9489 20.9979C11.3087 21.0163 11.6508 20.8395 11.8441 20.5354L11.8447 20.5344L11.9451 20.3806C12.014 20.2766 12.1163 20.1245 12.2473 19.9361C12.5098 19.5588 12.8853 19.0394 13.3363 18.4725C14.2569 17.3154 15.4216 16.0513 16.5357 15.3446Z',
  d8: 'M9 18.0001L11 20.0001L16 14.501',
  d9: 'M22 6.71401C18.8671 4.26354 15.4562 2.99998 11.9999 3C8.54366 3.00002 5.1329 4.26356 2 6.71401L3.31491 8.22465C6.12597 6.0501 9.08526 5.00001 11.9999 5C14.9146 4.99999 17.8739 6.05004 20.6849 8.22454L22 6.71401Z',
  d10: 'M17.7105 11.6411L19.0236 10.1329C14.916 6.60646 9.27455 6.63752 4.97802 10.1353L6.29179 11.6447C9.86432 8.77147 14.3903 8.79996 17.7105 11.6411Z',
  d11: 'M16.74 14.7254L11.0345 21.0003L8.29297 18.2588L9.70718 16.8446L10.9657 18.1031L15.2602 13.3799L16.74 14.7254Z',
} as const;

export const IconWifiConnected02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-connected-02-stroke-rounded IconWifiConnected02StrokeRounded"
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

export const IconWifiConnected02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-connected-02-duotone-rounded IconWifiConnected02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiConnected02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-connected-02-twotone-rounded IconWifiConnected02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiConnected02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-connected-02-solid-rounded IconWifiConnected02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiConnected02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-connected-02-bulk-rounded IconWifiConnected02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiConnected02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-connected-02-stroke-sharp IconWifiConnected02StrokeSharp"
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiConnected02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-connected-02-solid-sharp IconWifiConnected02SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfWifiConnected02: TheIconSelfPack = {
  name: 'WifiConnected02',
  StrokeRounded: IconWifiConnected02StrokeRounded,
  DuotoneRounded: IconWifiConnected02DuotoneRounded,
  TwotoneRounded: IconWifiConnected02TwotoneRounded,
  SolidRounded: IconWifiConnected02SolidRounded,
  BulkRounded: IconWifiConnected02BulkRounded,
  StrokeSharp: IconWifiConnected02StrokeSharp,
  SolidSharp: IconWifiConnected02SolidSharp,
};