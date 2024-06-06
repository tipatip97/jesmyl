import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 14C16 14.8284 16.6716 15.5 17.5 15.5C18.3284 15.5 19 14.8284 19 14C19 13.1716 18.3284 12.5 17.5 12.5C16.6716 12.5 16 13.1716 16 14Z',
  d2: 'M18.9 8C18.9656 7.67689 19 7.34247 19 7C19 4.23858 16.7614 2 14 2C11.2386 2 9 4.23858 9 7C9 7.34247 9.03443 7.67689 9.10002 8',
  d3: 'M7 7.99324H16C18.8284 7.99324 20.2426 7.99324 21.1213 8.87234C22 9.75145 22 11.1663 22 13.9961V15.9971C22 18.8269 22 20.2418 21.1213 21.1209C20.2426 22 18.8284 22 16 22H10C6.22876 22 4.34315 22 3.17157 20.8279C2 19.6557 2 17.7692 2 13.9961V11.9952C2 8.22211 2 6.33558 3.17157 5.16344C4.11466 4.2199 5.52043 4.03589 8 4H10',
  d4: 'M22 14.0147V16.0111C22 18.8343 22 20.2459 21.1213 21.1229C20.2426 22 18.8284 22 16 22H10C6.22876 22 4.34315 22 3.17157 20.8306C2 19.6612 2 17.779 2 14.0147L2.00005 11.642C2.00065 10.0104 2.00095 9.19468 2.58669 8.61024C3.17243 8.02579 4.02407 8.02579 5.72735 8.02579H18C18.5809 7.94506 20.0184 8.00745 21.1213 8.90285C22 9.77991 22 11.1915 22 14.0147ZM17.5 15.5C16.6716 15.5 16 14.8284 16 14C16 13.1716 16.6716 12.5 17.5 12.5C18.3284 12.5 19 13.1716 19 14C19 14.8284 18.3284 15.5 17.5 15.5Z',
  d5: 'M14 2C16.7614 2 19 4.23858 19 7C19 7.34247 18.9656 7.67689 18.9 8H9.10002C9.03443 7.67689 9 7.34247 9 7C9 4.23858 11.2386 2 14 2Z',
  d6: 'M7.78893 3.38559C7.87779 3.52105 7.77748 3.75199 7.57686 4.21386C7.49964 4.39164 7.42958 4.57324 7.36705 4.75832L7.36704 4.75832C7.29287 4.97783 7.25578 5.08759 7.17737 5.14385C7.09897 5.20012 6.99012 5.20012 6.77242 5.20012H4.18137C3.64164 5.20012 3.2041 5.63664 3.2041 6.17512C3.2041 6.71359 3.64164 7.15011 4.18137 7.15011L15.9776 7.15011C16.8093 7.13744 18.6295 7.14287 19.2563 7.2659C20.1631 7.38753 20.9639 7.6527 21.6051 8.2924C22.2462 8.9321 22.512 9.73104 22.6339 10.6357C22.7501 11.4973 22.75 12.586 22.75 13.9063V15.9939C22.75 17.3141 22.7501 18.4028 22.6339 19.2645C22.512 20.1691 22.2462 20.9681 21.6051 21.6078C20.9639 22.2475 20.1631 22.5126 19.2563 22.6343C18.3926 22.7501 17.3014 22.7501 15.978 22.75H9.97398C8.19196 22.7501 6.75559 22.7501 5.6259 22.5986C4.45303 22.4412 3.4655 22.1047 2.68118 21.3222C1.89687 20.5397 1.55952 19.5545 1.40183 18.3843C1.24995 17.2573 1.24997 15.8243 1.25 14.0464V6.17513C1.25 4.5597 2.56262 3.25014 4.18182 3.25014L6.99624 3.25013C7.46547 3.25013 7.70008 3.25012 7.78893 3.38559ZM17.5 12.9999C18.6046 12.9999 19.5 13.8953 19.5 14.9999C19.5 16.1044 18.6046 16.9999 17.5 16.9999C16.3954 16.9999 15.5 16.1044 15.5 14.9999C15.5 13.8953 16.3954 12.9999 17.5 12.9999Z',
  d7: 'M19.4557 6.03151C19.563 6.0463 19.6555 5.95355 19.6339 5.84742C19.1001 3.22413 16.7803 1.25 13.9994 1.25C11.3264 1.25 9.07932 3.07399 8.43503 5.54525C8.38746 5.72772 8.52962 5.90006 8.7182 5.90006L15.9679 5.90006C16.3968 5.89365 17.0712 5.89192 17.7232 5.90742C18.3197 5.92161 19.0159 5.95164 19.4557 6.03151Z',
  d8: 'M7.57686 4.21374C7.77748 3.75186 7.87779 3.52092 7.78894 3.38546C7.70009 3.25 7.46547 3.25 6.99624 3.25L4.18182 3.25001C2.56262 3.25001 1.25 4.55957 1.25 6.175V14.0463C1.24998 15.8241 1.24996 17.2572 1.40184 18.3842C1.55952 19.5543 1.89687 20.5396 2.68119 21.3221C3.4655 22.1046 4.45303 22.4411 5.6259 22.5984C6.75559 22.75 8.19196 22.7499 9.97398 22.7499H15.978C17.3014 22.75 18.3927 22.75 19.2563 22.6341C20.1631 22.5125 20.9639 22.2473 21.6051 21.6076C22.2463 20.9679 22.512 20.169 22.6339 19.2644C22.7501 18.4027 22.75 17.314 22.75 15.9937V13.9062C22.75 12.5859 22.7501 11.4972 22.6339 10.6355C22.512 9.73091 22.2463 8.93197 21.6051 8.29227C20.9639 7.65257 20.1631 7.3874 19.2563 7.26578C18.6295 7.14275 16.8093 7.13732 15.9776 7.14998L4.18138 7.14998C3.64164 7.14998 3.2041 6.71346 3.2041 6.17499C3.2041 5.63651 3.64164 5.19999 4.18138 5.19999H6.77242C6.99012 5.19999 7.09897 5.19999 7.17738 5.14373C7.25578 5.08746 7.29287 4.9777 7.36705 4.75819C7.42959 4.57312 7.49965 4.39151 7.57686 4.21374Z',
  d9: 'M19.5 15C19.5 13.8954 18.6046 13 17.5 13C16.3954 13 15.5 13.8954 15.5 15C15.5 16.1046 16.3954 17 17.5 17C18.6046 17 19.5 16.1046 19.5 15Z',
  d10: 'M7 8.00005H22V22H2.00005L2 4H10',
  d11: 'M8.0892 3.25H2.22222C1.96437 3.25 1.71708 3.34658 1.53476 3.51848C1.35243 3.69039 1.25 3.92355 1.25 4.16666L1.25001 7.99637L1.25 8L1.25004 22C1.25004 22.4142 1.58583 22.75 2.00004 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22V8C22.75 7.58579 22.4142 7.25 22 7.25H3.19445L3.19445 5.08332H7.26669C7.45293 4.42798 7.73215 3.81181 8.0892 3.25ZM17.5 11.75C18.7426 11.75 19.75 12.7574 19.75 14C19.75 15.2426 18.7426 16.25 17.5 16.25C16.2574 16.25 15.25 15.2426 15.25 14C15.25 12.7574 16.2574 11.75 17.5 11.75Z',
  d12: 'M14 1.25C11.1654 1.25 8.80992 3.30105 8.33663 6H19.6633C19.19 3.30105 16.8345 1.25 14 1.25Z',
};

export const IconWallet02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-02-stroke-rounded IconWallet02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWallet02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-02-duotone-rounded IconWallet02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWallet02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-02-twotone-rounded IconWallet02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWallet02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-02-solid-rounded IconWallet02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconWallet02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-02-bulk-rounded IconWallet02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWallet02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-02-stroke-sharp IconWallet02StrokeSharp"
    >
      <path 
        d={d.d1} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWallet02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-02-solid-sharp IconWallet02SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfWallet02: TheIconSelfPack = {
  name: 'Wallet02',
  StrokeRounded: IconWallet02StrokeRounded,
  DuotoneRounded: IconWallet02DuotoneRounded,
  TwotoneRounded: IconWallet02TwotoneRounded,
  SolidRounded: IconWallet02SolidRounded,
  BulkRounded: IconWallet02BulkRounded,
  StrokeSharp: IconWallet02StrokeSharp,
  SolidSharp: IconWallet02SolidSharp,
};