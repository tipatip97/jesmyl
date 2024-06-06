import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.9767 19.5C19.4017 17.8876 21 15.1305 21 12C21 7.02944 16.9706 3 12 3C11.3126 3 10.6432 3.07706 10 3.22302M16.9767 19.5V16M16.9767 19.5H20.5M7 4.51555C4.58803 6.13007 3 8.87958 3 12C3 16.9706 7.02944 21 12 21C12.6874 21 13.3568 20.9229 14 20.777M7 4.51555V8M7 4.51555H3.5',
  d2: 'M7 4.51562C4.58803 6.13015 3 8.87966 3 12.0001C3 16.9706 7.02944 21.0001 12 21.0001C12.6874 21.0001 13.3568 20.923 14 20.7771M7 4.51562V8.00008M7 4.51562H3.5',
  d3: 'M16.9767 19.5C19.4017 17.8876 21 15.1305 21 12C21 7.02944 16.9706 3 12 3C11.3126 3 10.6432 3.07706 10 3.22302M16.9767 19.5V16M16.9767 19.5H20.5',
  d4: 'M12 4C11.3876 4 10.7924 4.06863 10.2213 4.19823C9.68269 4.32044 9.147 3.9829 9.02479 3.4443C8.90258 2.90571 9.24012 2.37002 9.77871 2.24781C10.4941 2.08549 11.2377 2 12 2C17.5228 2 22 6.47715 22 12C22 14.482 21.0953 16.7526 19.5994 18.5H20.5C21.0523 18.5 21.5 18.9477 21.5 19.5C21.5 20.0523 21.0523 20.5 20.5 20.5H16.9767C16.4244 20.5 15.9767 20.0523 15.9767 19.5V16C15.9767 15.4477 16.4244 15 16.9767 15C17.529 15 17.9767 15.4477 17.9767 16V17.3181C19.2361 15.904 20 14.0411 20 12C20 7.58172 16.4183 4 12 4ZM2.5 4.51555C2.5 3.96326 2.94772 3.51555 3.5 3.51555H7C7.55228 3.51555 8 3.96326 8 4.51555V8C8 8.55228 7.55228 9 7 9C6.44772 9 6 8.55228 6 8V6.70816C4.75451 8.11907 4 9.97153 4 12C4 16.4183 7.58172 20 12 20C12.6124 20 13.2076 19.9314 13.7787 19.8018C14.3173 19.6796 14.853 20.0171 14.9752 20.5557C15.0974 21.0943 14.7599 21.63 14.2213 21.7522C13.5059 21.9145 12.7623 22 12 22C6.47715 22 2 17.5228 2 12C2 9.52533 2.89933 7.26091 4.3873 5.51555H3.5C2.94772 5.51555 2.5 5.06783 2.5 4.51555Z',
  d5: 'M2.5 4.51562C2.5 3.96334 2.94772 3.51562 3.5 3.51562H7C7.55228 3.51562 8 3.96334 8 4.51562V8.00008C8 8.55236 7.55228 9.00008 7 9.00008C6.44772 9.00008 6 8.55236 6 8.00008V6.70824C4.75451 8.11915 4 9.97161 4 12.0001C4 16.4184 7.58172 20.0001 12 20.0001C12.6124 20.0001 13.2076 19.9314 13.7787 19.8019C14.3173 19.6796 14.853 20.0172 14.9752 20.5558C15.0974 21.0944 14.7599 21.6301 14.2213 21.7523C13.5059 21.9146 12.7623 22.0001 12 22.0001C6.47715 22.0001 2 17.5229 2 12.0001C2 9.5254 2.89933 7.26098 4.3873 5.51562H3.5C2.94772 5.51562 2.5 5.06791 2.5 4.51562Z',
  d6: 'M12.0002 4C11.3878 4 10.7926 4.06863 10.2215 4.19823C9.68291 4.32044 9.14722 3.9829 9.02501 3.4443C8.9028 2.90571 9.24034 2.37002 9.77893 2.24781C10.4943 2.08549 11.2379 2 12.0002 2C17.5231 2 22.0002 6.47715 22.0002 12C22.0002 14.482 21.0955 16.7526 19.5996 18.5H20.5002C21.0525 18.5 21.5002 18.9477 21.5002 19.5C21.5002 20.0523 21.0525 20.5 20.5002 20.5H16.9769C16.4246 20.5 15.9769 20.0523 15.9769 19.5V16C15.9769 15.4477 16.4246 15 16.9769 15C17.5292 15 17.9769 15.4477 17.9769 16V17.3181C19.2363 15.904 20.0002 14.0411 20.0002 12C20.0002 7.58172 16.4185 4 12.0002 4Z',
  d7: 'M10.6987 3.10599C20.8498 2.19061 23.8294 13.7662 18.1773 18.5793M17.0069 16.0258L16.9334 19.5816L20.5066 19.5185M13.3003 21.0155C3.19806 21.8187 0.169588 10.3553 5.82166 5.54221M6.99207 8.09576L7.06564 4.53989H3.45235',
  d8: 'M12 4C11.3876 4 10.7924 4.06863 10.2213 4.19823L9.77871 2.24781C10.4941 2.08549 11.2377 2 12 2C17.5228 2 22 6.47715 22 12C22 14.482 21.0953 16.7526 19.5994 18.5H21.5V20.5H15.9767V15H17.9767V17.3181C19.2361 15.904 20 14.0411 20 12C20 7.58172 16.4183 4 12 4ZM2.5 3.51555H8V9H6V6.70816C4.75451 8.11907 4 9.97153 4 12C4 16.4183 7.58172 20 12 20C12.6124 20 13.2076 19.9314 13.7787 19.8018L14.2213 21.7522C13.5059 21.9145 12.7623 22 12 22C6.47715 22 2 17.5228 2 12C2 9.52533 2.89933 7.26091 4.3873 5.51555H2.5V3.51555Z',
};

export const IconExchange01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-01-stroke-rounded IconExchange01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconExchange01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-01-duotone-rounded IconExchange01DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="9" 
        fill="var(--icon-fill)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconExchange01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-01-twotone-rounded IconExchange01TwotoneRounded"
    >
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

export const IconExchange01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-01-solid-rounded IconExchange01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconExchange01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-01-bulk-rounded IconExchange01BulkRounded"
    >
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

export const IconExchange01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-01-stroke-sharp IconExchange01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconExchange01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-01-solid-sharp IconExchange01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfExchange01: TheIconSelfPack = {
  name: 'Exchange01',
  StrokeRounded: IconExchange01StrokeRounded,
  DuotoneRounded: IconExchange01DuotoneRounded,
  TwotoneRounded: IconExchange01TwotoneRounded,
  SolidRounded: IconExchange01SolidRounded,
  BulkRounded: IconExchange01BulkRounded,
  StrokeSharp: IconExchange01StrokeSharp,
  SolidSharp: IconExchange01SolidSharp,
};