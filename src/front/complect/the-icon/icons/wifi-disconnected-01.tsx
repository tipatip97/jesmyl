import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.5 15.9996C9.36651 15.1331 10.4207 14.642 11.5 14.5264',
  d2: 'M5.5 12.5C8.67327 9.32673 12.6221 8.67087 16 10.5324',
  d3: 'M2 8.5C8.31579 3.16669 15.6842 3.16668 22 8.49989',
  d4: 'M21.0002 13.5L15.0002 19.5M21.0002 19.5L15.0002 13.5',
  d5: 'M8.5 16.0006C9.36651 15.1341 10.4207 14.643 11.5 14.5273',
  d6: 'M12.4943 14.4202C12.5532 14.9693 12.1557 15.4622 11.6066 15.521C10.7615 15.6116 9.91727 15.997 9.20713 16.7071C8.8166 17.0976 8.18344 17.0976 7.79292 16.7071C7.40239 16.3166 7.40239 15.6834 7.79292 15.2929C8.81579 14.27 10.08 13.6732 11.3935 13.5324C11.9426 13.4736 12.4355 13.871 12.4943 14.4202Z',
  d7: 'M4.79291 11.7929C8.23412 8.35168 12.6598 7.54979 16.4827 9.65661C16.9664 9.92318 17.1424 10.5314 16.8758 11.0151C16.6093 11.4988 16.0011 11.6748 15.5174 11.4082C12.5846 9.79196 9.11246 10.3018 6.20713 13.2071C5.8166 13.5976 5.18344 13.5976 4.79291 13.2071C4.40239 12.8166 4.40239 12.1834 4.79291 11.7929Z',
  d8: 'M12 3.5C15.695 3.49998 19.3379 4.94312 22.6452 7.73585C23.0672 8.09217 23.1204 8.72309 22.7641 9.14506C22.4077 9.56703 21.7768 9.62024 21.3548 9.26393C18.3463 6.72345 15.1472 5.49999 12 5.5C8.85288 5.50001 5.65374 6.7235 2.6452 9.26403C2.22324 9.62035 1.59231 9.56714 1.23599 9.14518C0.879668 8.72322 0.93288 8.09229 1.35484 7.73597C4.6621 4.94319 8.30506 3.50002 12 3.5Z',
  d9: 'M14.2929 12.7929C14.6834 12.4024 15.3166 12.4024 15.7071 12.7929L18 15.0858L20.2929 12.7929C20.6834 12.4024 21.3166 12.4024 21.7071 12.7929C22.0976 13.1834 22.0976 13.8166 21.7071 14.2071L19.4142 16.5L21.7071 18.7929C22.0976 19.1834 22.0976 19.8166 21.7071 20.2071C21.3166 20.5976 20.6834 20.5976 20.2929 20.2071L18 17.9142L15.7071 20.2071C15.3166 20.5976 14.6834 20.5976 14.2929 20.2071C13.9024 19.8166 13.9024 19.1834 14.2929 18.7929L16.5858 16.5L14.2929 14.2071C13.9024 13.8166 13.9024 13.1834 14.2929 12.7929Z',
  d10: 'M11.9999 3.5C15.4573 3.49998 18.8689 4.77591 22 7.25L20.5817 8.67531C17.8024 6.53419 14.8793 5.49999 11.9999 5.5C9.1206 5.50001 6.19753 6.53421 3.41835 8.67531L2 7.25C5.1311 4.77594 8.54264 3.50002 11.9999 3.5Z',
  d11: 'M9.48647 14.7732L8.06492 13.3447C9.18886 12.4482 10.5944 12 11.9999 12V14C11.1087 14 10.2174 14.2577 9.48647 14.7732Z',
  d12: 'M6.62988 11.9026L5.21012 10.4759C9.39276 7.19102 14.7903 7.16099 18.7975 10.4682L17.3819 11.8907C14.2061 9.37815 10.0255 9.35741 6.62988 11.9026Z',
  d13: 'M18.7073 16.7929L21.0002 19.0858L19.5859 20.5L17.293 18.2071L15.0002 20.5L13.5859 19.0858L15.8788 16.7929L13.5859 14.5L15.0002 13.0858L17.293 15.3787L19.5859 13.0858L21.0002 14.5L18.7073 16.7929Z',
};

export const IconWifiDisconnected01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-01-stroke-rounded IconWifiDisconnected01StrokeRounded"
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

export const IconWifiDisconnected01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-01-duotone-rounded IconWifiDisconnected01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiDisconnected01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-01-twotone-rounded IconWifiDisconnected01TwotoneRounded"
    >
      <path 
        d={d.d5} 
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
      />
    </TheIconWrapper>
  );
};

export const IconWifiDisconnected01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-01-solid-rounded IconWifiDisconnected01SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconWifiDisconnected01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-01-bulk-rounded IconWifiDisconnected01BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiDisconnected01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-01-stroke-sharp IconWifiDisconnected01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconWifiDisconnected01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-01-solid-sharp IconWifiDisconnected01SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWifiDisconnected01: TheIconSelfPack = {
  name: 'WifiDisconnected01',
  StrokeRounded: IconWifiDisconnected01StrokeRounded,
  DuotoneRounded: IconWifiDisconnected01DuotoneRounded,
  TwotoneRounded: IconWifiDisconnected01TwotoneRounded,
  SolidRounded: IconWifiDisconnected01SolidRounded,
  BulkRounded: IconWifiDisconnected01BulkRounded,
  StrokeSharp: IconWifiDisconnected01StrokeSharp,
  SolidSharp: IconWifiDisconnected01SolidSharp,
};