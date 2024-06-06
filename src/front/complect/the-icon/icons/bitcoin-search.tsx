import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.5 17.5L22 22',
  d2: 'M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z',
  d3: 'M9.125 14L9.125 8M11 8V6.5M11 15.5V14M9.125 11H12.875M12.875 11C13.4963 11 14 11.5037 14 12.125V12.875C14 13.4963 13.4963 14 12.875 14H8M12.875 11C13.4963 11 14 10.4963 14 9.875V9.125C14 8.50368 13.4963 8 12.875 8H8',
  d4: 'M16.6842 16.6842C17.0658 16.3025 17.6846 16.3025 18.0663 16.6842L22.464 21.0819C22.8456 21.4636 22.8456 22.0823 22.464 22.464C22.0823 22.8456 21.4636 22.8456 21.0819 22.464L16.6842 18.0663C16.3025 17.6846 16.3025 17.0658 16.6842 16.6842Z',
  d5: 'M1.25 11.0232C1.25 5.62589 5.6254 1.25049 11.0227 1.25049C16.4201 1.25049 20.7955 5.62589 20.7955 11.0232C20.7955 16.4205 16.4201 20.7959 11.0227 20.7959C5.6254 20.7959 1.25 16.4205 1.25 11.0232ZM11.0227 3.20503C6.70486 3.20503 3.20455 6.70535 3.20455 11.0232C3.20455 15.3411 6.70486 18.8414 11.0227 18.8414C15.3406 18.8414 18.8409 15.3411 18.8409 11.0232C18.8409 6.70535 15.3406 3.20503 11.0227 3.20503Z',
  d6: 'M11.0229 5.64795C11.5626 5.64795 12.0001 6.08549 12.0001 6.62522V7.11386H12.8552C14.0022 7.11386 14.932 8.04363 14.932 9.19056V9.92352C14.932 10.3273 14.8167 10.7041 14.6174 11.023C14.8167 11.3418 14.932 11.7186 14.932 12.1224V12.8553C14.932 14.0023 14.0022 14.932 12.8552 14.932H12.0001V15.4207C12.0001 15.9604 11.5626 16.3979 11.0229 16.3979C10.4831 16.3979 10.0456 15.9604 10.0456 15.4207V14.932H8.09104C7.55131 14.932 7.11377 14.4945 7.11377 13.9548C7.11377 13.415 7.55131 12.9775 8.09104 12.9775H8.2132L8.2132 9.0684H8.09104C7.55131 9.0684 7.11377 8.63086 7.11377 8.09113C7.11377 7.5514 7.55131 7.11386 8.09104 7.11386H10.0456V6.62522C10.0456 6.08549 10.4831 5.64795 11.0229 5.64795ZM10.1677 9.0684V10.0457H12.8552C12.9227 10.0457 12.9774 9.99098 12.9774 9.92352V9.19056C12.9774 9.1231 12.9227 9.0684 12.8552 9.0684H10.1677ZM12.8552 12.0002H10.1677V12.9775H12.8552C12.9227 12.9775 12.9774 12.9228 12.9774 12.8553V12.1224C12.9774 12.0549 12.9227 12.0002 12.8552 12.0002Z',
  d7: 'M1.25 11.0227C1.25 5.6254 5.6254 1.25 11.0227 1.25C16.4201 1.25 20.7955 5.6254 20.7955 11.0227C20.7955 16.4201 16.4201 20.7955 11.0227 20.7955C5.6254 20.7955 1.25 16.4201 1.25 11.0227ZM11.0227 3.20455C6.70486 3.20455 3.20455 6.70486 3.20455 11.0227C3.20455 15.3406 6.70486 18.8409 11.0227 18.8409C15.3406 18.8409 18.8409 15.3406 18.8409 11.0227C18.8409 6.70486 15.3406 3.20455 11.0227 3.20455Z',
  d8: 'M11.0229 5.64746C11.5626 5.64746 12.0001 6.085 12.0001 6.62473V7.11337H12.8552C14.0022 7.11337 14.932 8.04314 14.932 9.19007V9.92303C14.932 10.3268 14.8167 10.7036 14.6174 11.0225C14.8167 11.3413 14.932 11.7181 14.932 12.1219V12.8548C14.932 14.0018 14.0022 14.9316 12.8552 14.9316H12.0001V15.4202C12.0001 15.9599 11.5626 16.3975 11.0229 16.3975C10.4831 16.3975 10.0456 15.9599 10.0456 15.4202V14.9316H8.09104C7.55131 14.9316 7.11377 14.494 7.11377 13.9543C7.11377 13.4145 7.55131 12.977 8.09104 12.977H8.2132L8.2132 9.06792H8.09104C7.55131 9.06792 7.11377 8.63038 7.11377 8.09064C7.11377 7.55091 7.55131 7.11337 8.09104 7.11337H10.0456V6.62473C10.0456 6.085 10.4831 5.64746 11.0229 5.64746ZM10.1677 9.06792V10.0452H12.8552C12.9227 10.0452 12.9774 9.9905 12.9774 9.92303V9.19007C12.9774 9.12261 12.9227 9.06792 12.8552 9.06792H10.1677ZM12.8552 11.9997H10.1677V12.977H12.8552C12.9227 12.977 12.9774 12.9223 12.9774 12.8548V12.1219C12.9774 12.0544 12.9227 11.9997 12.8552 11.9997Z',
  d9: 'M17.2075 18.5891C17.7129 18.1756 18.176 17.7124 18.5896 17.207L22.4634 21.0808C22.845 21.4625 22.845 22.0813 22.4634 22.4629C22.0817 22.8446 21.463 22.8446 21.0813 22.4629L17.2075 18.5891Z',
  d10: 'M21.3675 22.7506L16.6836 18.0666L18.0657 16.6846L22.7496 21.3685L21.3675 22.7506Z',
  d11: 'M1.25 11.0228C1.25 5.62541 5.62541 1.25 11.0228 1.25C16.4201 1.25 20.7955 5.62541 20.7955 11.0228C20.7955 16.4201 16.4201 20.7955 11.0228 20.7955C5.62541 20.7955 1.25 16.4201 1.25 11.0228ZM11.0228 3.20455C6.70488 3.20455 3.20455 6.70488 3.20455 11.0228C3.20455 15.3406 6.70488 18.841 11.0228 18.841C15.3406 18.841 18.841 15.3406 18.841 11.0228C18.841 6.70488 15.3406 3.20455 11.0228 3.20455Z',
  d12: 'M11.9997 5.64746V7.11338H12.8548C14.0017 7.11338 14.9315 8.04315 14.9315 9.19009V9.92304C14.9315 10.3268 14.8163 10.7036 14.6169 11.0225C14.8163 11.3413 14.9315 11.7182 14.9315 12.1219V12.8549C14.9315 14.0018 14.0017 14.9316 12.8548 14.9316H11.9997V16.3975H10.0451V14.9316H7.11328V12.977H8.21272L8.21272 9.06793H7.11328V7.11338H10.0451V5.64746H11.9997ZM10.1673 9.06793V10.0452H12.8548C12.9222 10.0452 12.9769 9.99051 12.9769 9.92304V9.19009C12.9769 9.12262 12.9222 9.06793 12.8548 9.06793H10.1673ZM12.8548 11.9998H10.1673V12.977H12.8548C12.9222 12.977 12.9769 12.9223 12.9769 12.8549V12.1219C12.9769 12.0544 12.9222 11.9998 12.8548 11.9998Z',
};

export const IconBitcoinSearchStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-search-stroke-rounded IconBitcoinSearchStrokeRounded"
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

export const IconBitcoinSearchDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-search-duotone-rounded IconBitcoinSearchDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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

export const IconBitcoinSearchTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-search-twotone-rounded IconBitcoinSearchTwotoneRounded"
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

export const IconBitcoinSearchSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-search-solid-rounded IconBitcoinSearchSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinSearchBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-search-bulk-rounded IconBitcoinSearchBulkRounded"
    >
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinSearchStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-search-stroke-sharp IconBitcoinSearchStrokeSharp"
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
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinSearchSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-search-solid-sharp IconBitcoinSearchSolidSharp"
    >
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

export const iconPackOfBitcoinSearch: TheIconSelfPack = {
  name: 'BitcoinSearch',
  StrokeRounded: IconBitcoinSearchStrokeRounded,
  DuotoneRounded: IconBitcoinSearchDuotoneRounded,
  TwotoneRounded: IconBitcoinSearchTwotoneRounded,
  SolidRounded: IconBitcoinSearchSolidRounded,
  BulkRounded: IconBitcoinSearchBulkRounded,
  StrokeSharp: IconBitcoinSearchStrokeSharp,
  SolidSharp: IconBitcoinSearchSolidSharp,
};