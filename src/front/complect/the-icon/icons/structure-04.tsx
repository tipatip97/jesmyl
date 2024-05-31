import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 12C2 9.518 2.518 9 5 9H7C9.482 9 10 9.518 10 12C10 14.482 9.482 15 7 15H5C2.518 15 2 14.482 2 12Z',
  d2: 'M14 7C14 4.518 14.518 4 17 4H19C21.482 4 22 4.518 22 7C22 9.482 21.482 10 19 10H17C14.518 10 14 9.482 14 7Z',
  d3: 'M14 17C14 14.518 14.518 14 17 14H19C21.482 14 22 14.518 22 17C22 19.482 21.482 20 19 20H17C14.518 20 14 19.482 14 17Z',
  d4: 'M14 7L11 12L14 17',
  d5: 'M14.5145 6.14254C14.9881 6.42668 15.1416 7.04094 14.8575 7.51452L12.1662 12L14.8575 16.4855C15.1416 16.9591 14.9881 17.5734 14.5145 17.8575C14.0409 18.1417 13.4267 17.9881 13.1425 17.5145L10.1425 12.5145C9.9525 12.1978 9.9525 11.8022 10.1425 11.4855L13.1425 6.48553C13.4267 6.01195 14.0409 5.85839 14.5145 6.14254Z',
  d6: 'M3.32323 8.38719C3.80098 8.28223 4.36327 8.25 5 8.25H7C7.63673 8.25 8.19902 8.28223 8.67677 8.38719C9.16301 8.49401 9.60828 8.68612 9.96108 9.03892C10.3139 9.39172 10.506 9.83699 10.6128 10.3232C10.7178 10.801 10.75 11.3633 10.75 12C10.75 12.6367 10.7178 13.199 10.6128 13.6768C10.506 14.163 10.3139 14.6083 9.96108 14.9611C9.60828 15.3139 9.16301 15.506 8.67677 15.6128C8.19902 15.7178 7.63673 15.75 7 15.75H5C4.36327 15.75 3.80098 15.7178 3.32323 15.6128C2.83699 15.506 2.39172 15.3139 2.03892 14.9611C1.68612 14.6083 1.49401 14.163 1.38719 13.6768C1.28223 13.199 1.25 12.6367 1.25 12C1.25 11.3633 1.28223 10.801 1.38719 10.3232C1.49401 9.83699 1.68612 9.39172 2.03892 9.03892C2.39172 8.68612 2.83699 8.49401 3.32323 8.38719Z',
  d7: 'M15.3232 3.38719C15.801 3.28223 16.3633 3.25 17 3.25H19C19.6367 3.25 20.199 3.28223 20.6768 3.38719C21.163 3.49401 21.6083 3.68612 21.9611 4.03892C22.3139 4.39172 22.506 4.83699 22.6128 5.32323C22.7178 5.80098 22.75 6.36327 22.75 7C22.75 7.63673 22.7178 8.19902 22.6128 8.67677C22.506 9.16301 22.3139 9.60828 21.9611 9.96108C21.6083 10.3139 21.163 10.506 20.6768 10.6128C20.199 10.7178 19.6367 10.75 19 10.75H17C16.3633 10.75 15.801 10.7178 15.3232 10.6128C14.837 10.506 14.3917 10.3139 14.0389 9.96108C13.6861 9.60828 13.494 9.16301 13.3872 8.67677C13.2822 8.19902 13.25 7.63673 13.25 7C13.25 6.36327 13.2822 5.80098 13.3872 5.32323C13.494 4.83699 13.6861 4.39172 14.0389 4.03892C14.3917 3.68612 14.837 3.49401 15.3232 3.38719Z',
  d8: 'M15.3232 13.3872C15.801 13.2822 16.3633 13.25 17 13.25H19C19.6367 13.25 20.199 13.2822 20.6768 13.3872C21.163 13.494 21.6083 13.6861 21.9611 14.0389C22.3139 14.3917 22.506 14.837 22.6128 15.3232C22.7178 15.801 22.75 16.3633 22.75 17C22.75 17.6367 22.7178 18.199 22.6128 18.6768C22.506 19.163 22.3139 19.6083 21.9611 19.9611C21.6083 20.3139 21.163 20.506 20.6768 20.6128C20.199 20.7178 19.6367 20.75 19 20.75H17C16.3633 20.75 15.801 20.7178 15.3232 20.6128C14.837 20.506 14.3917 20.3139 14.0389 19.9611C13.6861 19.6083 13.494 19.163 13.3872 18.6768C13.2822 18.199 13.25 17.6367 13.25 17C13.25 16.3633 13.2822 15.801 13.3872 15.3232C13.494 14.837 13.6861 14.3917 14.0389 14.0389C14.3917 13.6861 14.837 13.494 15.3232 13.3872Z',
  d9: 'M13.2652 6.32031C13.2542 6.53599 13.2498 6.76248 13.2498 6.99926C13.2498 7.63599 13.282 8.19828 13.387 8.67603C13.4496 8.96121 13.5416 9.23229 13.6781 9.47889L12.166 11.9992L13.6782 14.5195C13.5416 14.7662 13.4496 15.0373 13.387 15.3225C13.282 15.8002 13.2498 16.3625 13.2498 16.9993C13.2498 17.236 13.2542 17.4624 13.2652 17.678C13.2196 17.6285 13.1783 17.5737 13.1423 17.5137L10.666 13.3866C10.7289 12.9759 10.7498 12.5117 10.7498 11.9993C10.7498 11.4868 10.7289 11.0225 10.666 10.6118L13.1423 6.48467C13.1783 6.42467 13.2196 6.3698 13.2652 6.32031Z',
  d10: 'M10 15V9H2V15H10Z',
  d11: 'M22 10V4H14V10H22Z',
  d12: 'M22 20V14H14V20H22Z',
  d13: 'M1.25 9C1.25 8.58579 1.58579 8.25 2 8.25H10C10.4142 8.25 10.75 8.58579 10.75 9V15C10.75 15.4142 10.4142 15.75 10 15.75H2C1.58579 15.75 1.25 15.4142 1.25 15V9Z',
  d14: 'M13.25 4C13.25 3.58579 13.5858 3.25 14 3.25H22C22.4142 3.25 22.75 3.58579 22.75 4V10C22.75 10.4142 22.4142 10.75 22 10.75H14C13.5858 10.75 13.25 10.4142 13.25 10V4Z',
  d15: 'M13.25 14C13.25 13.5858 13.5858 13.25 14 13.25H22C22.4142 13.25 22.75 13.5858 22.75 14V20C22.75 20.4142 22.4142 20.75 22 20.75H14C13.5858 20.75 13.25 20.4142 13.25 20V14Z',
  d16: 'M12.2207 12L15.3192 7.57344L13.6808 6.42651L10.1808 11.4265C9.93974 11.7708 9.93974 12.2291 10.1808 12.5734L13.6808 17.5734L15.3192 16.4265L12.2207 12Z',
} as const;

export const IconStructure04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-04-stroke-rounded IconStructure04StrokeRounded"
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

export const IconStructure04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-04-duotone-rounded IconStructure04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconStructure04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-04-twotone-rounded IconStructure04TwotoneRounded"
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

export const IconStructure04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-04-solid-rounded IconStructure04SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-04-bulk-rounded IconStructure04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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

export const IconStructure04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-04-stroke-sharp IconStructure04StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
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

export const IconStructure04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-04-solid-sharp IconStructure04SolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStructure04: TheIconSelfPack = {
  name: 'Structure04',
  StrokeRounded: IconStructure04StrokeRounded,
  DuotoneRounded: IconStructure04DuotoneRounded,
  TwotoneRounded: IconStructure04TwotoneRounded,
  SolidRounded: IconStructure04SolidRounded,
  BulkRounded: IconStructure04BulkRounded,
  StrokeSharp: IconStructure04StrokeSharp,
  SolidSharp: IconStructure04SolidSharp,
};