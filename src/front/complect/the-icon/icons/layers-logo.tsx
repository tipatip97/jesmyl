import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.87868 20.1213C10.7574 21 12.1716 21 15 21C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15C21 12.1716 21 10.7574 20.1213 9.87868C19.2426 9 17.8284 9 15 9C12.1716 9 10.7574 9 9.87868 9.87868C9 10.7574 9 12.1716 9 15C9 17.8284 9 19.2426 9.87868 20.1213Z',
  d2: 'M17.9239 9C17.828 8.02491 17.6112 7.36857 17.1213 6.87868C16.2426 6 14.8284 6 12 6C9.17157 6 7.75736 6 6.87868 6.87868C6 7.75736 6 9.17157 6 12C6 14.8284 6 16.2426 6.87868 17.1213C7.36857 17.6112 8.02491 17.828 9 17.9239',
  d3: 'M14.9239 6C14.828 5.02491 14.6112 4.36857 14.1213 3.87868C13.2426 3 11.8284 3 9 3C6.17157 3 4.75736 3 3.87868 3.87868C3 4.75736 3 6.17157 3 9C3 11.8284 3 13.2426 3.87868 14.1213C4.36857 14.6112 5.02491 14.828 6 14.9239',
  d4: 'M6.87868 6.87857C7.75736 5.99989 9.17157 5.99989 12 5.99989L14.9239 6C14.828 5.02491 14.6112 4.36857 14.1213 3.87868C13.2426 3 11.8284 3 9 3C6.17157 3 4.75736 3 3.87868 3.87868C3 4.75736 3 6.17157 3 9C3 11.8284 3 13.2426 3.87868 14.1213C4.36857 14.6112 5.02491 14.828 6 14.9239V11.9999C6 9.17146 6 7.75725 6.87868 6.87857Z',
  d5: 'M10.6287 20.8713C11.5074 21.75 12.9216 21.75 15.75 21.75C18.5784 21.75 19.9926 21.75 20.8713 20.8713C21.75 19.9926 21.75 18.5784 21.75 15.75C21.75 12.9216 21.75 11.5074 20.8713 10.6287C19.9926 9.75 18.5784 9.75 15.75 9.75C12.9216 9.75 11.5074 9.75 10.6287 10.6287C9.75 11.5074 9.75 12.9216 9.75 15.75C9.75 18.5784 9.75 19.9926 10.6287 20.8713Z',
  d6: 'M14.1122 4.77033C13.503 4.74995 12.8262 4.74997 12.0852 4.75C10.7436 4.74995 9.44223 4.7499 8.54163 4.87099C7.58608 4.99946 6.7051 5.2845 5.9948 5.9948C5.2845 6.7051 4.99945 7.58608 4.87098 8.54163C4.7499 9.44223 4.74995 10.7436 4.75 12.0852C4.74997 12.8262 4.74994 13.503 4.77033 14.1122C4.05211 13.9945 3.53355 13.7762 3.12868 13.3713C2.25 12.4926 2.25 11.0784 2.25 8.25C2.25 5.42157 2.25 4.00736 3.12868 3.12868C4.00736 2.25 5.42157 2.25 8.25 2.25C11.0784 2.25 12.4926 2.25 13.3713 3.12868C13.7762 3.53355 13.9945 4.05211 14.1122 4.77033Z',
  d7: 'M17.8622 8.52033C17.253 8.49995 16.5762 8.49997 15.8352 8.5C14.4936 8.49995 13.1922 8.4999 12.2916 8.62099C11.3361 8.74946 10.4551 9.0345 9.7448 9.7448C9.0345 10.4551 8.74945 11.3361 8.62098 12.2916C8.4999 13.1922 8.49994 14.4936 8.5 15.8352C8.49997 16.5762 8.49994 17.253 8.52033 17.8622C7.80211 17.7445 7.28354 17.5262 6.87868 17.1213C6 16.2426 6 14.8284 6 12C6 9.17157 6 7.75736 6.87868 6.87868C7.75736 6 9.17157 6 12 6C14.8284 6 16.2426 6 17.1213 6.87868C17.5262 7.28355 17.7445 7.80211 17.8622 8.52033Z',
  d8: 'M6.87908 17.1213C7.75776 18 9.17198 18 12.0004 18C14.8288 18 16.243 18 17.1217 17.1213C18.0004 16.2426 18.0004 14.8284 18.0004 12C18.0004 9.17157 18.0004 7.75736 17.1217 6.87868C16.243 6 14.8288 6 12.0004 6C9.17198 6 7.75776 6 6.87908 6.87868C6.0004 7.75736 6.0004 9.17157 6.0004 12C6.0004 14.8284 6.0004 16.2426 6.87908 17.1213Z',
  d9: 'M6.02519 14.2248C4.60606 14.1677 3.73843 13.9811 3.12868 13.3713C2.25 12.4926 2.25 11.0784 2.25 8.25C2.25 5.42157 2.25 4.00736 3.12868 3.12868C4.00736 2.25 5.42157 2.25 8.25 2.25C11.0784 2.25 12.4926 2.25 13.3713 3.12868C13.9811 3.73843 14.1677 4.60605 14.2248 6.02519C13.5989 6 12.8657 6 12 6C9.17157 6 7.75736 6 6.87868 6.87868C6 7.75736 6 9.17157 6 12C6 12.8657 6 13.5989 6.02519 14.2248Z',
  d10: 'M21 9H9V21H21V9Z',
  d11: 'M15 6V3H3V15H6',
  d12: 'M18 9V6H6V18H9',
  d13: 'M20.7504 9.75H10.7504C10.1981 9.75 9.75038 10.1977 9.75038 10.75V20.75C9.75038 21.3023 10.1981 21.75 10.7504 21.75H20.7504C21.3027 21.75 21.7504 21.3023 21.7504 20.75V10.75C21.7504 10.1977 21.3027 9.75 20.7504 9.75Z',
  d14: 'M10.7507 8.5C9.50811 8.5 8.50075 9.50736 8.50075 10.75V18H7.00075C6.44846 18 6.00075 17.5523 6.00075 17V7C6.00075 6.44771 6.44846 6 7.00075 6H17.0007C17.553 6 18.0007 6.44772 18.0007 7V8.5H10.7507Z',
  d15: 'M7.00075 4.75C5.75811 4.75 4.75075 5.75736 4.75075 7V14.25H3.25075C2.69846 14.25 2.25075 13.8023 2.25075 13.25V3.25C2.25075 2.69771 2.69846 2.25 3.25075 2.25H13.2507C13.803 2.25 14.2507 2.69772 14.2507 3.25V4.75H7.00075Z',
};

export const IconLayersLogoStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-logo-stroke-rounded IconLayersLogoStrokeRounded"
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

export const IconLayersLogoDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-logo-duotone-rounded IconLayersLogoDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
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

export const IconLayersLogoTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-logo-twotone-rounded IconLayersLogoTwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLayersLogoSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-logo-solid-rounded IconLayersLogoSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayersLogoBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-logo-bulk-rounded IconLayersLogoBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayersLogoStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-logo-stroke-sharp IconLayersLogoStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLayersLogoSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-logo-solid-sharp IconLayersLogoSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLayersLogo: TheIconSelfPack = {
  name: 'LayersLogo',
  StrokeRounded: IconLayersLogoStrokeRounded,
  DuotoneRounded: IconLayersLogoDuotoneRounded,
  TwotoneRounded: IconLayersLogoTwotoneRounded,
  SolidRounded: IconLayersLogoSolidRounded,
  BulkRounded: IconLayersLogoBulkRounded,
  StrokeSharp: IconLayersLogoStrokeSharp,
  SolidSharp: IconLayersLogoSolidSharp,
};