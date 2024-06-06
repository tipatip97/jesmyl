import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 12.3735C9.14883 11.5048 10.5209 11 11.9946 11C13.4729 11 14.849 11.508 16 12.3818M14.1743 14.7179C13.5182 14.3376 12.7779 14.1237 11.9946 14.1237C11.2152 14.1237 10.4784 14.3355 9.82477 14.7122',
  d2: 'M12 17.5H12.0064',
  d3: 'M7 6H7.00635',
  d4: 'M11 6H11.0064',
  d5: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d6: 'M7 6H7.00634M10.9937 6H11',
  d7: 'M11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.75211 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75ZM7.39691 11.5759C8.70458 10.5871 10.2853 10 11.9946 10C13.7093 10 15.2946 10.5908 16.6047 11.5853C17.0446 11.9192 17.1305 12.5465 16.7966 12.9864C16.4626 13.4263 15.8353 13.5122 15.3954 13.1783C14.4034 12.4252 13.2366 12 11.9946 12C10.7565 12 9.5932 12.4226 8.6032 13.1712C8.16267 13.5043 7.53553 13.4172 7.20242 12.9767C6.86932 12.5362 6.95639 11.909 7.39691 11.5759ZM9.3255 13.8458C10.1222 13.3866 11.03 13.1237 11.9946 13.1237C12.9641 13.1237 13.8762 13.3893 14.6758 13.8527C15.1536 14.1297 15.3164 14.7416 15.0395 15.2194C14.7625 15.6972 14.1507 15.86 13.6729 15.5831C13.1602 15.2859 12.5918 15.1237 11.9946 15.1237C11.4004 15.1237 10.8348 15.2843 10.3242 15.5786C9.84564 15.8544 9.23418 15.69 8.95841 15.2115C8.68264 14.733 8.84699 14.1215 9.3255 13.8458ZM11.0001 17.5C11.0001 16.9477 11.4478 16.5 12.0001 16.5H12.0064C12.5587 16.5 13.0064 16.9477 13.0064 17.5C13.0064 18.0523 12.5587 18.5 12.0064 18.5H12.0001C11.4478 18.5 11.0001 18.0523 11.0001 17.5ZM11 5C10.4477 5 10 5.44772 10 6C10 6.55228 10.4477 7 11 7H11.0064C11.5586 7 12.0064 6.55228 12.0064 6C12.0064 5.44772 11.5586 5 11.0064 5H11ZM7 5C6.44772 5 6 5.44772 6 6C6 6.55229 6.44772 7 7 7H7.00635C7.55864 7 8.00635 6.55229 8.00635 6C8.00635 5.44772 7.55864 5 7.00635 5H7Z',
  d8: 'M11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.75212 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75Z',
  d9: 'M7.39692 11.5759C8.70458 10.5871 10.2853 10 11.9946 10C13.7093 10 15.2946 10.5908 16.6047 11.5853C17.0446 11.9192 17.1305 12.5465 16.7966 12.9864C16.4626 13.4263 15.8353 13.5122 15.3954 13.1783C14.4034 12.4252 13.2366 12 11.9946 12C10.7565 12 9.5932 12.4226 8.6032 13.1712C8.16268 13.5043 7.53553 13.4172 7.20242 12.9767C6.86932 12.5362 6.95639 11.909 7.39692 11.5759ZM9.3255 13.8458C10.1222 13.3866 11.03 13.1237 11.9946 13.1237C12.9641 13.1237 13.8762 13.3893 14.6758 13.8527C15.1536 14.1297 15.3164 14.7416 15.0395 15.2194C14.7625 15.6972 14.1507 15.86 13.6729 15.5831C13.1602 15.2859 12.5918 15.1237 11.9946 15.1237C11.4004 15.1237 10.8348 15.2843 10.3242 15.5786C9.84564 15.8544 9.23418 15.69 8.95841 15.2115C8.68264 14.733 8.84699 14.1215 9.3255 13.8458Z',
  d10: 'M11.0001 17.5C11.0001 16.9477 11.4478 16.5 12.0001 16.5H12.0064C12.5587 16.5 13.0064 16.9477 13.0064 17.5C13.0064 18.0523 12.5587 18.5 12.0064 18.5H12.0001C11.4478 18.5 11.0001 18.0523 11.0001 17.5Z',
  d11: 'M6 6C6 5.44772 6.44772 5 7 5H7.00635C7.55864 5 8.00635 5.44772 8.00635 6C8.00635 6.55229 7.55864 7 7.00635 7H7C6.44772 7 6 6.55229 6 6Z',
  d12: 'M10 6C10 5.44772 10.4477 5 11 5H11.0064C11.5586 5 12.0064 5.44772 12.0064 6C12.0064 6.55228 11.5586 7 11.0064 7H11C10.4477 7 10 6.55228 10 6Z',
  d13: 'M21 3V21H3V3H21Z',
  d14: 'M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V21C21.75 21.4142 21.4142 21.75 21 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V3ZM7.39844 11.5759C8.7061 10.5871 10.2868 10 11.9961 10C13.7109 10 15.2962 10.5908 16.6062 11.5853L15.397 13.1783C14.4049 12.4252 13.2381 12 11.9961 12C10.7581 12 9.59473 12.4226 8.60472 13.1712L7.39844 11.5759ZM9.32702 13.8458C10.1237 13.3866 11.0316 13.1237 11.9961 13.1237C12.9656 13.1237 13.8778 13.3893 14.6773 13.8527L13.6744 15.5831C13.1617 15.2859 12.5933 15.1237 11.9961 15.1237C11.4019 15.1237 10.8363 15.2843 10.3257 15.5786L9.32702 13.8458ZM12 16.5C11.4477 16.5 11 16.9477 11 17.5C11 18.0523 11.4477 18.5 12 18.5H12.0064C12.5586 18.5 13.0064 18.0523 13.0064 17.5C13.0064 16.9477 12.5586 16.5 12.0064 16.5H12ZM6 5H8.00635V7H6V5ZM12.0064 5H10V7H12.0064V5Z',
};

export const IconWirelessStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wireless-stroke-rounded IconWirelessStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconWirelessDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wireless-duotone-rounded IconWirelessDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWirelessTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wireless-twotone-rounded IconWirelessTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWirelessSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wireless-solid-rounded IconWirelessSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWirelessBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wireless-bulk-rounded IconWirelessBulkRounded"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWirelessStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wireless-stroke-sharp IconWirelessStrokeSharp"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWirelessSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wireless-solid-sharp IconWirelessSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWireless: TheIconSelfPack = {
  name: 'Wireless',
  StrokeRounded: IconWirelessStrokeRounded,
  DuotoneRounded: IconWirelessDuotoneRounded,
  TwotoneRounded: IconWirelessTwotoneRounded,
  SolidRounded: IconWirelessSolidRounded,
  BulkRounded: IconWirelessBulkRounded,
  StrokeSharp: IconWirelessStrokeSharp,
  SolidSharp: IconWirelessSolidSharp,
};