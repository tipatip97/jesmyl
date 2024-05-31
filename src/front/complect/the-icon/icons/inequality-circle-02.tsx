import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C6.4772 22 2 17.5228 2 12C2 6.47715 6.4772 2 12 2C17.5229 2 22 6.47715 22 12C22 17.5228 17.5229 22 12 22Z',
  d2: 'M10.0201 7.5L15.8641 12.6714C16.2001 13.08 15.8711 13.5 15.4201 13.5H8.00415',
  d3: 'M16.0195 16.5H7.99773',
  d4: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d5: 'M10.0111 7.5L15.8551 12.6714C16.1911 13.08 15.8621 13.5 15.4111 13.5H7.99512',
  d6: 'M16.0111 16.5H7.98926',
  d7: 'M10.0114 7.5L15.8554 12.6714C16.1914 13.08 15.8624 13.5 15.4114 13.5H7.99543M16.011 16.5H7.98926',
  d8: 'M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25ZM9.33874 7.75017C8.92444 7.38496 8.88464 6.75305 9.24985 6.33875C9.61505 5.92445 10.247 5.88465 10.6613 6.24986L16.4995 11.3963L16.512 11.4075C17.0231 11.8735 17.1159 12.5585 16.8676 13.105C16.6256 13.6377 16.0852 14 15.4505 14H8C7.44771 14 7 13.5523 7 13C7 12.4477 7.44771 12 8 12H14.1599L9.33874 7.75017ZM16 16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H8C7.44771 18 7 17.5523 7 17C7 16.4477 7.44771 16 8 16H16Z',
  d9: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12Z',
  d10: 'M9.24985 6.33875C8.88464 6.75305 8.92444 7.38496 9.33874 7.75017L14.1599 12H8C7.44771 12 7 12.4477 7 13C7 13.5523 7.44771 14 8 14H15.4505C16.0852 14 16.6256 13.6377 16.8676 13.105C17.1159 12.5585 17.0231 11.8735 16.512 11.4075L16.4995 11.3963L10.6613 6.24986C10.247 5.88465 9.61505 5.92445 9.24985 6.33875ZM17 17C17 16.4477 16.5523 16 16 16H8C7.44771 16 7 16.4477 7 17C7 17.5523 7.44771 18 8 18H16C16.5523 18 17 17.5523 17 17Z',
  d11: 'M16 16H8M8 13H15.9994L10 8',
  d12: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.36034 7.76782L13.2381 10.9996H8.00056V12.9996H15.9999C16.421 12.9996 16.7969 12.7359 16.9402 12.3401C17.0835 11.9442 16.9636 11.501 16.6402 11.2314L10.6408 6.23145L9.36034 7.76782ZM16.9402 16.9996H8.00056V14.9996H16.9402V16.9996Z',
} as const;

export const IconInequalityCircle02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inequality-circle-02-stroke-rounded IconInequalityCircle02StrokeRounded"
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

export const IconInequalityCircle02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inequality-circle-02-duotone-rounded IconInequalityCircle02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconInequalityCircle02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inequality-circle-02-twotone-rounded IconInequalityCircle02TwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconInequalityCircle02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inequality-circle-02-solid-rounded IconInequalityCircle02SolidRounded"
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

export const IconInequalityCircle02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inequality-circle-02-bulk-rounded IconInequalityCircle02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconInequalityCircle02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inequality-circle-02-stroke-sharp IconInequalityCircle02StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInequalityCircle02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inequality-circle-02-solid-sharp IconInequalityCircle02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfInequalityCircle02: TheIconSelfPack = {
  name: 'InequalityCircle02',
  StrokeRounded: IconInequalityCircle02StrokeRounded,
  DuotoneRounded: IconInequalityCircle02DuotoneRounded,
  TwotoneRounded: IconInequalityCircle02TwotoneRounded,
  SolidRounded: IconInequalityCircle02SolidRounded,
  BulkRounded: IconInequalityCircle02BulkRounded,
  StrokeSharp: IconInequalityCircle02StrokeSharp,
  SolidSharp: IconInequalityCircle02SolidSharp,
};