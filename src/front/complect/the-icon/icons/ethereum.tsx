import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19 12L13.2404 14.5785C12.6289 14.8595 12.3232 15 12 15C11.6768 15 11.3711 14.8595 10.7596 14.5785L5 12M19 12C19 11.4678 18.6945 10.9997 18.0834 10.0636L14.5797 4.69611C13.4064 2.8987 12.8197 2 12 2C11.1803 2 10.5936 2.8987 9.42033 4.69611L5.91663 10.0636C5.30554 10.9997 5 11.4678 5 12M19 12C19 12.5322 18.6945 13.0003 18.0834 13.9364L14.5797 19.3039C13.4064 21.1013 12.8197 22 12 22C11.1803 22 10.5936 21.1013 9.42033 19.3039L5.91663 13.9364C5.30554 13.0003 5 12.5322 5 12',
  d2: 'M9.42033 4.69611L5.91663 10.0636L5.91662 10.0636C5.30554 10.9997 5 11.4678 5 12L10.7596 14.5785C11.3711 14.8595 11.6768 15 12 15C12.3232 15 12.6289 14.8595 13.2404 14.5785L19 12C19 11.4678 18.6945 10.9997 18.0834 10.0636L18.0834 10.0636L14.5797 4.69611C13.4064 2.8987 12.8197 2 12 2C11.1803 2 10.5936 2.8987 9.42033 4.69611Z',
  d3: 'M9.42033 4.69611L5.91663 10.0636L5.91662 10.0636C5.30554 10.9997 5 11.4678 5 12C5 12.5322 5.30554 13.0003 5.91663 13.9364L9.42033 19.3039C10.5936 21.1013 11.1803 22 12 22C12.8197 22 13.4064 21.1013 14.5797 19.3039L18.0834 13.9364L18.0834 13.9364C18.6945 13.0003 19 12.5322 19 12C19 11.4678 18.6945 10.9997 18.0834 10.0636L18.0834 10.0636L14.5797 4.69611C13.4064 2.8987 12.8197 2 12 2C11.1803 2 10.5936 2.8987 9.42033 4.69611Z',
  d4: 'M19 12L13.2404 14.5785C12.6289 14.8595 12.3232 15 12 15C11.6768 15 11.3711 14.8595 10.7596 14.5785L5 12',
  d5: 'M12 1.25C11.2626 1.25 10.7192 1.67162 10.2705 2.1783C9.83633 2.66854 9.36939 3.38 8.80769 4.23586L5.23094 9.68529C4.94145 10.1263 4.69199 10.5063 4.51971 10.8434C4.51274 10.8571 4.50585 10.8707 4.49905 10.8844L11.0679 13.8972C11.746 14.2071 11.879 14.2502 12.0002 14.2502C12.1214 14.2502 12.2542 14.2072 12.932 13.8974L19.5011 10.8845C19.4942 10.8708 19.4873 10.8571 19.4803 10.8434C19.308 10.5063 19.0586 10.1263 18.7691 9.68532L15.1923 4.23584C14.6306 3.37999 14.1637 2.66853 13.7295 2.1783C13.2808 1.67162 12.7375 1.25 12 1.25Z',
  d6: 'M19.75 12.4222L13.4566 15.3086C12.9486 15.5418 12.4948 15.7502 12.0002 15.7502C11.5056 15.7502 11.0518 15.5418 10.5438 15.3086L4.25 12.422C4.30209 12.6791 4.3985 12.9194 4.51971 13.1566C4.69199 13.4937 4.94145 13.8737 5.23093 14.3147L8.80771 19.7642C9.36941 20.62 9.83633 21.3315 10.2705 21.8217C10.7192 22.3284 11.2626 22.75 12 22.75C12.7375 22.75 13.2808 22.3284 13.7295 21.8217C14.1637 21.3315 14.6306 20.62 15.1923 19.7642L18.7691 14.3147C19.0586 13.8737 19.308 13.4937 19.4803 13.1566C19.6015 12.9195 19.6979 12.6792 19.75 12.4222Z',
  d7: 'M19.75 12.4221L13.4566 15.3085C12.9486 15.5417 12.4948 15.7501 12.0002 15.7501C11.5056 15.7501 11.0518 15.5417 10.5438 15.3085L4.25 12.4219C4.30209 12.679 4.3985 12.9193 4.51971 13.1565C4.69199 13.4936 4.94145 13.8736 5.23093 14.3146L8.80771 19.7641C9.36941 20.6199 9.83633 21.3314 10.2705 21.8216C10.7192 22.3283 11.2626 22.7499 12 22.7499C12.7375 22.7499 13.2808 22.3283 13.7295 21.8216C14.1637 21.3314 14.6306 20.6199 15.1923 19.7641L18.7691 14.3146C19.0586 13.8736 19.308 13.4936 19.4803 13.1565C19.6015 12.9194 19.6979 12.6791 19.75 12.4221Z',
  d8: 'M12 1.25C11.2626 1.25 10.7192 1.67162 10.2705 2.1783C9.83631 2.66854 9.36937 3.38 8.80766 4.23586L5.23091 9.68529C4.94143 10.1263 4.69197 10.5063 4.51969 10.8434C4.51272 10.8571 4.50583 10.8707 4.49902 10.8844L11.0679 13.8972C11.746 14.2071 11.879 14.2502 12.0002 14.2502C12.1213 14.2502 12.2542 14.2072 12.932 13.8974L19.501 10.8845C19.4942 10.8708 19.4873 10.8571 19.4803 10.8434C19.308 10.5063 19.0586 10.1263 18.7691 9.68532L15.1923 4.23584C14.6306 3.37999 14.1637 2.66853 13.7295 2.1783C13.2808 1.67162 12.7374 1.25 12 1.25Z',
  d9: 'M5 12L12 2L19 12M5 12L12 22L19 12M5 12L12 15L19 12',
  d10: 'M12.6043 1.5699C12.4663 1.36941 12.2408 1.25 12.0001 1.25C11.7594 1.25 11.5339 1.36941 11.3959 1.5699L4.78817 11.1692L12.0003 14.1891L19.2121 11.1693L12.6043 1.5699ZM19.25 12.7756L12.2811 15.6937C12.1012 15.769 11.8994 15.769 11.7195 15.6937L4.75 12.7754L11.3959 22.4301C11.5339 22.6306 11.7594 22.75 12.0001 22.75C12.2408 22.75 12.4663 22.6306 12.6043 22.4301L19.25 12.7756Z',
} as const;

export const IconEthereumStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ethereum-stroke-rounded IconEthereumStrokeRounded"
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

export const IconEthereumDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ethereum-duotone-rounded IconEthereumDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconEthereumTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ethereum-twotone-rounded IconEthereumTwotoneRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconEthereumSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ethereum-solid-rounded IconEthereumSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEthereumBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ethereum-bulk-rounded IconEthereumBulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEthereumStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ethereum-stroke-sharp IconEthereumStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEthereumSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ethereum-solid-sharp IconEthereumSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEthereum: TheIconSelfPack = {
  name: 'Ethereum',
  StrokeRounded: IconEthereumStrokeRounded,
  DuotoneRounded: IconEthereumDuotoneRounded,
  TwotoneRounded: IconEthereumTwotoneRounded,
  SolidRounded: IconEthereumSolidRounded,
  BulkRounded: IconEthereumBulkRounded,
  StrokeSharp: IconEthereumStrokeSharp,
  SolidSharp: IconEthereumSolidSharp,
};