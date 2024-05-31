import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 17L6 6',
  d2: 'M11 17.8685C11 17.8685 16.6335 18.3434 17.4885 17.4885C18.3434 16.6336 17.8684 11 17.8684 11',
  d3: 'M17.9239 11.0356C17.9359 11.8841 18.2146 16.9779 17.6197 17.5736M17.6197 17.5736C17.0247 18.1694 11.8549 17.9734 11.0076 17.9614M17.6197 17.5736L6 5.99854',
  d4: 'M17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071Z',
  d5: 'M17.2444 18.7102C17.5251 18.6283 17.9065 18.4847 18.1956 18.1956C18.4847 17.9064 18.6284 17.525 18.7103 17.2443C18.8008 16.934 18.8606 16.583 18.9018 16.2299C18.9846 15.5212 19.0051 14.6893 18.9991 13.9158C18.993 13.1363 18.9594 12.3878 18.9277 11.8361C18.9118 11.5597 18.8962 11.3312 18.8846 11.1712C18.8788 11.092 18.8686 10.9624 18.8651 10.9178L18.865 10.9166C18.8186 10.3662 18.3348 9.95713 17.7845 10.0035C17.2342 10.0499 16.8257 10.5336 16.872 11.0839C16.8751 11.1235 16.8844 11.2405 16.8899 11.3162C16.9009 11.4677 16.9157 11.686 16.931 11.9511C16.9616 12.4824 16.9934 13.1958 16.9991 13.9315C17.0049 14.6732 16.984 15.41 16.9153 15.998C16.8808 16.2933 16.8116 16.603 16.7645 16.7644C16.6031 16.8115 16.2934 16.8808 15.9981 16.9152C15.41 16.9839 14.6732 17.0049 13.9315 16.9991C13.1958 16.9933 12.4825 16.9615 11.9511 16.931C11.686 16.9157 11.4677 16.9008 11.3163 16.8898C11.2406 16.8843 11.124 16.8751 11.0844 16.872C10.5341 16.8257 10.05 17.2342 10.0036 17.7845C9.9572 18.3348 10.3657 18.8185 10.9161 18.8649L10.9183 18.8651C10.9639 18.8687 11.0926 18.8789 11.1713 18.8846C11.3313 18.8962 11.5598 18.9117 11.8362 18.9277C12.3878 18.9594 13.1363 18.9929 13.9159 18.999C14.6894 19.0051 15.5213 18.9845 16.23 18.9017C16.5831 18.8605 16.9341 18.8007 17.2444 18.7102Z',
  d6: 'M5.99902 5.99902L17.6541 17.6541M11.0012 18.001H18.001V10.994',
  d7: 'M15.586 17.0002H11.0001V19.0002H19.0001V11.0002H17.0001V15.5859L6.41421 5L5 6.41421L15.586 17.0002Z',
} as const;

export const IconArrowDownRight01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-right-01-stroke-rounded IconArrowDownRight01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconArrowDownRight01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-right-01-duotone-rounded IconArrowDownRight01DuotoneRounded"
    >
      <path 
        opacity="0.5" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDownRight01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-right-01-twotone-rounded IconArrowDownRight01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconArrowDownRight01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-right-01-solid-rounded IconArrowDownRight01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDownRight01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-right-01-bulk-rounded IconArrowDownRight01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDownRight01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-right-01-stroke-sharp IconArrowDownRight01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDownRight01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-right-01-solid-sharp IconArrowDownRight01SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrowDownRight01: TheIconSelfPack = {
  name: 'ArrowDownRight01',
  StrokeRounded: IconArrowDownRight01StrokeRounded,
  DuotoneRounded: IconArrowDownRight01DuotoneRounded,
  TwotoneRounded: IconArrowDownRight01TwotoneRounded,
  SolidRounded: IconArrowDownRight01SolidRounded,
  BulkRounded: IconArrowDownRight01BulkRounded,
  StrokeSharp: IconArrowDownRight01StrokeSharp,
  SolidSharp: IconArrowDownRight01SolidSharp,
};