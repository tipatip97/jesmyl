import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.1193 2.99756C6.55993 3.45035 2.99902 7.29809 2.99902 11.9777C2.99902 16.9619 7.03855 21.0024 12.0216 21.0024C16.7 21.0024 20.5468 17.4407 20.9996 12.8802',
  d2: 'M20.5581 3.49381L11.0488 13.059M20.5581 3.49381C20.064 2.99905 16.7356 3.04517 16.032 3.05518M20.5581 3.49381C21.0521 3.98857 21.0061 7.3215 20.9961 8.02611',
  d3: 'M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z',
  d4: 'M11.12 3C6.5608 3.45267 3 7.29936 3 11.9777C3 16.9606 7.03941 21 12.0223 21C16.7006 21 20.5473 17.4392 21 12.88',
  d5: 'M20.5562 3.44437L11.0469 13.0096M20.5562 3.44437C20.0621 2.94961 16.7337 2.99573 16.0301 3.00574M20.5562 3.44437C21.0502 3.93913 21.0042 7.27206 20.9942 7.97667',
  d6: 'M11.12 3.00244C6.5608 3.45511 3 7.3018 3 11.9801C3 16.963 7.03941 21.0024 12.0223 21.0024C16.7006 21.0024 20.5473 17.4416 21 12.8824',
  d7: 'M20.5562 3.44193L11.0469 13.0071M20.5562 3.44193C20.0621 2.94717 16.7337 2.99329 16.0301 3.0033M20.5562 3.44193C21.0502 3.93669 21.0042 7.26962 20.9942 7.97423',
  d8: 'M12.1152 2.90115C12.1697 3.45073 11.7684 3.94049 11.2188 3.99506C7.166 4.39745 4 7.81845 4 11.9777C4 16.4083 7.59169 20 12.0223 20C16.1815 20 19.6025 16.834 20.0049 12.7811C20.0595 12.2315 20.5492 11.8302 21.0988 11.8848C21.6484 11.9394 22.0497 12.4291 21.9951 12.9787C21.4922 18.0444 17.2198 22 12.0223 22C6.48712 22 2 17.5128 2 11.9777C2 6.78018 5.9556 2.50779 11.0212 2.00484C11.5708 1.95028 12.0606 2.35157 12.1152 2.90115Z',
  d9: 'M20.3023 2.11815C19.2561 1.93287 17.5062 2.00814 16.6278 2.05969C15.4682 2.12775 14.9931 3.51657 15.7786 4.3021L17.0302 5.55371L14.3003 8.26282C14.2412 8.32154 14.1907 8.38574 14.149 8.45379L10.2945 12.2913C9.90307 12.681 9.90167 13.3142 10.2913 13.7055C10.681 14.0969 11.3142 14.0983 11.7055 13.7087L15.6707 9.76105C15.6916 9.7434 15.712 9.72476 15.7317 9.70515L18.4671 6.99058L19.698 8.22141C20.4836 9.007 21.8724 8.53179 21.9404 7.37214C21.9919 6.49371 22.067 4.74418 21.882 3.69821C21.8141 3.31484 21.6424 2.97543 21.3948 2.70812L21.3861 2.69873C21.1066 2.40101 20.7322 2.19428 20.3023 2.11815Z',
  d10: 'M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3',
  d11: 'M11.0059 13.0041L20.4712 3.53012M21.0006 8.99185L21.0008 3H15.0116',
  d12: 'M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12H22C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2V4Z',
  d13: 'M15.0001 2H22.0001V9H20.0001V5.41421L11.7072 13.7071L10.293 12.2929L18.5859 4H15.0001V2Z',
};

export const IconLinkCircle02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-circle-02-stroke-rounded IconLinkCircle02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLinkCircle02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-circle-02-duotone-rounded IconLinkCircle02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLinkCircle02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-circle-02-twotone-rounded IconLinkCircle02TwotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLinkCircle02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-circle-02-solid-rounded IconLinkCircle02SolidRounded"
    >
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

export const IconLinkCircle02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-circle-02-bulk-rounded IconLinkCircle02BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconLinkCircle02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-circle-02-stroke-sharp IconLinkCircle02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLinkCircle02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-circle-02-solid-sharp IconLinkCircle02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfLinkCircle02: TheIconSelfPack = {
  name: 'LinkCircle02',
  StrokeRounded: IconLinkCircle02StrokeRounded,
  DuotoneRounded: IconLinkCircle02DuotoneRounded,
  TwotoneRounded: IconLinkCircle02TwotoneRounded,
  SolidRounded: IconLinkCircle02SolidRounded,
  BulkRounded: IconLinkCircle02BulkRounded,
  StrokeSharp: IconLinkCircle02StrokeSharp,
  SolidSharp: IconLinkCircle02SolidSharp,
};