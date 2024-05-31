import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.5 3C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C21 19.2175 21 16.9783 21 12.5C21 12.1715 21 11.855 20.9995 11.55',
  d2: 'M5 21C9.20998 16.2487 13.9412 9.9475 21 14.6734',
  d3: 'M22 6H14',
  d4: 'M3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088L4.58365 21.3991C4.84455 21.0865 5.10737 20.7684 5.37249 20.4476L5.37254 20.4475C9.52909 15.4169 14.2504 9.7027 20.9974 14.0538C21 13.568 21 13.051 21 12.5C21 8.02166 21 5.78249 19.6088 4.39124C18.2175 3 15.9783 3 11.5 3C7.02166 3 4.78249 3 3.39124 4.39124Z',
  d5: 'M11.4255 2L11.5 2C12.0523 2 12.5 2.44772 12.5 3C12.5 3.55229 12.0523 4 11.5 4C9.23256 4 7.63258 4.00212 6.42121 4.16499C5.2386 4.32399 4.5772 4.6195 4.09835 5.09835C3.6195 5.5772 3.32399 6.2386 3.16499 7.42121C3.00212 8.63258 3 10.2326 3 12.5C3 14.7674 3.00212 16.3674 3.16499 17.5788C3.32399 18.7614 3.6195 19.4228 4.09835 19.9017C4.5772 20.3805 5.2386 20.676 6.42121 20.835C7.63258 20.9979 9.23256 21 11.5 21C13.7674 21 15.3674 20.9979 16.5788 20.835C17.7614 20.676 18.4228 20.3805 18.9017 19.9017C19.3805 19.4228 19.676 18.7614 19.835 17.5788C19.9979 16.3674 20 14.7674 20 12.5C20 12.1713 20 11.8557 19.9995 11.5518C19.9985 10.9995 20.4454 10.551 20.9977 10.55C21.5499 10.549 21.9985 10.9959 21.9995 11.5482C22 11.8542 22 12.1717 22 12.5V12.5744C22 14.7504 22 16.4851 21.8172 17.8453C21.6284 19.2497 21.2283 20.4035 20.3159 21.3159C19.4035 22.2283 18.2497 22.6284 16.8453 22.8172C15.4851 23 13.7504 23 11.5744 23H11.4256C9.24959 23 7.51485 23 6.15471 22.8172C4.75033 22.6284 3.59653 22.2283 2.68414 21.3159C1.77175 20.4035 1.37164 19.2497 1.18282 17.8453C0.999958 16.4852 0.999977 14.7504 1 12.5745V12.4255C0.999977 10.2496 0.999958 8.51485 1.18282 7.15471C1.37164 5.75033 1.77175 4.59653 2.68414 3.68414C3.59653 2.77175 4.75033 2.37164 6.15471 2.18282C7.51485 1.99996 9.24957 1.99998 11.4255 2Z',
  d6: 'M21.5559 13.8424C19.6586 12.5721 17.8489 11.9996 16.1134 12C14.3825 12.0004 12.8193 12.5709 11.4111 13.4286C9.01414 14.8887 6.9156 17.291 5.06493 19.4095C4.79884 19.7141 4.53787 20.0128 4.28187 20.3021L3 21.5L4.18678 22.3179C5.05368 22.6842 6.06852 22.8444 7.23537 22.9223C8.39753 23 9.79916 23 11.4679 22.9999H11.5741C13.75 23 15.4848 23 16.8449 22.8171C18.2493 22.6283 19.4031 22.2282 20.3155 21.3158C21.803 19.8283 21.967 17.7255 21.9995 14.6841L22.0053 14.1433L21.5559 13.8424Z',
  d7: 'M13 6C13 5.44772 13.4477 5 14 5H22C22.5523 5 23 5.44772 23 6C23 6.55228 22.5523 7 22 7H14C13.4477 7 13 6.55228 13 6Z',
  d8: 'M20 9V21H2V3H11',
  d9: 'M4 21L14 12L20 16',
  d10: 'M22 5H14',
  d11: 'M3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V9H20V14.1314L14.9397 10.7578L4 19.7085V4H12V2H3Z',
  d12: 'M14 5H22V7H14V5Z',
} as const;

export const IconImageRemove01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-remove-01-stroke-rounded IconImageRemove01StrokeRounded"
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

export const IconImageRemove01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-remove-01-duotone-rounded IconImageRemove01DuotoneRounded"
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

export const IconImageRemove01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-remove-01-twotone-rounded IconImageRemove01TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageRemove01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-remove-01-solid-rounded IconImageRemove01SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageRemove01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-remove-01-bulk-rounded IconImageRemove01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageRemove01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-remove-01-stroke-sharp IconImageRemove01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageRemove01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-remove-01-solid-sharp IconImageRemove01SolidSharp"
    >
      <path 
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

export const iconPackOfImageRemove01: TheIconSelfPack = {
  name: 'ImageRemove01',
  StrokeRounded: IconImageRemove01StrokeRounded,
  DuotoneRounded: IconImageRemove01DuotoneRounded,
  TwotoneRounded: IconImageRemove01TwotoneRounded,
  SolidRounded: IconImageRemove01SolidRounded,
  BulkRounded: IconImageRemove01BulkRounded,
  StrokeSharp: IconImageRemove01StrokeSharp,
  SolidSharp: IconImageRemove01SolidSharp,
};