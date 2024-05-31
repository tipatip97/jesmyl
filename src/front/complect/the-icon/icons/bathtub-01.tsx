import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 20L5 21M18 20L19 21',
  d2: 'M3 12V13C3 16.2998 3 17.9497 4.02513 18.9749C5.05025 20 6.70017 20 10 20H14C17.2998 20 18.9497 20 19.9749 18.9749C21 17.9497 21 16.2998 21 13V12',
  d3: 'M2 12H22',
  d4: 'M4 12V5.5234C4 4.12977 5.12977 3 6.5234 3C7.64166 3 8.62654 3.73598 8.94339 4.80841L9 5',
  d5: 'M8 6L10.5 4',
  d6: 'M21 13V12H3V13C3 16.2998 3 17.9497 4.02513 18.9749C5.05025 20 6.70017 20 10 20H14C17.2998 20 18.9497 20 19.9749 18.9749C21 17.9497 21 16.2998 21 13Z',
  d7: 'M4 12V5.5234C4 4.12977 5.12977 3 6.5234 3C7.64166 3 8.62654 3.73598 8.94339 4.80841L9 5M8 6L10.5 4',
  d8: 'M6.70711 19.7929C7.09763 20.1834 7.09763 20.8166 6.70711 21.2071L5.70711 22.2071C5.31658 22.5976 4.68342 22.5976 4.29289 22.2071C3.90237 21.8166 3.90237 21.1834 4.29289 20.7929L5.29289 19.7929C5.68342 19.4024 6.31658 19.4024 6.70711 19.7929ZM17.2929 19.7929C17.6834 19.4024 18.3166 19.4024 18.7071 19.7929L19.7071 20.7929C20.0976 21.1834 20.0976 21.8166 19.7071 22.2071C19.3166 22.5976 18.6834 22.5976 18.2929 22.2071L17.2929 21.2071C16.9024 20.8166 16.9024 20.1834 17.2929 19.7929Z',
  d9: 'M2 13.5H2.25V13.5557C2.24998 15.1583 2.24997 16.4373 2.38483 17.4404C2.52415 18.4767 2.81966 19.3301 3.4948 20.0052C4.16994 20.6803 5.02335 20.9758 6.05961 21.1152C7.0627 21.25 8.34166 21.25 9.94426 21.25H14.0557C15.6583 21.25 16.9373 21.25 17.9404 21.1152C18.9767 20.9758 19.8301 20.6803 20.5052 20.0052C21.1803 19.3301 21.4758 18.4767 21.6152 17.4404C21.75 16.4373 21.75 15.1583 21.75 13.5557V13.5H22C22.5523 13.5 23 13.0523 23 12.5C23 11.9477 22.5523 11.5 22 11.5H2C1.44772 11.5 1 11.9477 1 12.5C1 13.0523 1.44772 13.5 2 13.5Z',
  d10: 'M6.5234 4.5C5.68205 4.5 5 5.18205 5 6.0234V12.5C5 13.0523 4.55228 13.5 4 13.5C3.44772 13.5 3 13.0523 3 12.5V6.0234C3 4.07748 4.57748 2.5 6.5234 2.5C7.72016 2.5 8.80751 3.1037 9.44933 4.05991L9.87531 3.71913C10.3066 3.37412 10.9359 3.44404 11.2809 3.8753C11.6259 4.30657 11.556 4.93586 11.1247 5.28087L8.62469 7.28087C8.19343 7.62588 7.56414 7.55596 7.21913 7.12469C6.87412 6.69343 6.94404 6.06414 7.37531 5.71913L7.87464 5.31967C7.61619 4.82307 7.09907 4.5 6.5234 4.5Z',
  d11: 'M19.5773 20.6631L19.7071 20.7929C20.0976 21.1834 20.0976 21.8166 19.7071 22.2071C19.3166 22.5976 18.6834 22.5976 18.2929 22.2071L17.2929 21.2071C17.2852 21.1994 17.2776 21.1916 17.2702 21.1836C17.5061 21.1659 17.7293 21.1435 17.9404 21.1152C18.5487 21.0334 19.0941 20.8978 19.5773 20.6631ZM6.72983 21.1836C6.72241 21.1916 6.71484 21.1994 6.70711 21.2071L5.70711 22.2071C5.31658 22.5976 4.68342 22.5976 4.29289 22.2071C3.90237 21.8166 3.90237 21.1834 4.29289 20.7929L4.42268 20.6631C4.90592 20.8978 5.45126 21.0334 6.05961 21.1152C6.27066 21.1435 6.49392 21.1659 6.72983 21.1836Z',
  d12: 'M3 11.5V6.0234C3 4.07748 4.57748 2.5 6.5234 2.5C7.72016 2.5 8.80751 3.1037 9.44933 4.05991L9.87531 3.71913C10.3066 3.37412 10.9359 3.44404 11.2809 3.8753C11.6259 4.30657 11.556 4.93586 11.1247 5.28087L8.62469 7.28087C8.19343 7.62588 7.56414 7.55596 7.21913 7.12469C6.87412 6.69343 6.94404 6.06414 7.37531 5.71913L7.87464 5.31967C7.61619 4.82307 7.09907 4.5 6.5234 4.5C5.68205 4.5 5 5.18205 5 6.0234V11.5H3Z',
  d13: 'M6 19L5 21M18 19L19 21',
  d14: 'M4 11V15C4 17.2091 5.79086 19 8 19H16C18.2091 19 20 17.2091 20 15V11',
  d15: 'M2 11H22',
  d16: 'M4 11V5.5234C4 4.12977 5.12977 3 6.5234 3C7.64166 3 8.62654 3.73598 8.94339 4.80841L9 5',
  d17: 'M4.10547 20.8558L5.10547 18.8558L6.89432 19.7502L5.89432 21.7502L4.10547 20.8558ZM18.1055 21.7502L17.1055 19.7502L18.8943 18.8558L19.8943 20.8558L18.1055 21.7502Z',
  d18: 'M21 11.25V15.25C21 18.0114 18.7614 20.25 16 20.25H8C5.23858 20.25 3 18.0114 3 15.25V11.25H21Z',
  d19: 'M22 12.25H2V10.25H22V12.25Z',
  d20: 'M6.5234 4.25C5.68205 4.25 5 4.93205 5 5.7734V11.25H3V5.7734C3 3.82748 4.57748 2.25 6.5234 2.25C8.08481 2.25 9.45999 3.27764 9.90241 4.77506L9.95902 4.96665L8.04098 5.53335L7.98438 5.34175L8.94339 5.05841L7.98438 5.34175C7.79309 4.69432 7.19851 4.25 6.5234 4.25Z',
  d21: 'M11.1249 5.03085L8.62488 7.03085L7.37549 5.46912L9.87549 3.46912L11.1249 5.03085Z',
} as const;

export const IconBathtub01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bathtub-01-stroke-rounded IconBathtub01StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBathtub01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bathtub-01-duotone-rounded IconBathtub01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBathtub01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bathtub-01-twotone-rounded IconBathtub01TwotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBathtub01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bathtub-01-solid-rounded IconBathtub01SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBathtub01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bathtub-01-bulk-rounded IconBathtub01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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

export const IconBathtub01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bathtub-01-stroke-sharp IconBathtub01StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBathtub01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bathtub-01-solid-sharp IconBathtub01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBathtub01: TheIconSelfPack = {
  name: 'Bathtub01',
  StrokeRounded: IconBathtub01StrokeRounded,
  DuotoneRounded: IconBathtub01DuotoneRounded,
  TwotoneRounded: IconBathtub01TwotoneRounded,
  SolidRounded: IconBathtub01SolidRounded,
  BulkRounded: IconBathtub01BulkRounded,
  StrokeSharp: IconBathtub01StrokeSharp,
  SolidSharp: IconBathtub01SolidSharp,
};