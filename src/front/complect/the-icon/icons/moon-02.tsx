import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z',
  d2: 'M21.5 14.0784C20.503 18.3324 16.6849 21.5 12.1269 21.5C6.8101 21.5 2.5 17.1899 2.5 11.8731C2.5 7.31513 5.66765 3.49698 9.92163 2.5',
  d3: 'M10.5163 2.04299C10.6958 2.27652 10.722 2.59348 10.5832 2.85329C9.99927 3.94693 9.66792 5.1961 9.66792 6.52489C9.66792 10.8367 13.1633 14.3321 17.4751 14.3321C18.8039 14.3321 20.0531 14.0008 21.1467 13.4168C21.4065 13.2781 21.7235 13.3043 21.957 13.4837C22.1906 13.6632 22.2974 13.9628 22.2302 14.2495C21.1556 18.835 17.0409 22.25 12.1269 22.25C6.39589 22.25 1.75 17.6041 1.75 11.8732C1.75 6.95909 5.16505 2.84448 9.7505 1.76982C10.0373 1.70261 10.3368 1.80947 10.5163 2.04299Z',
  d4: 'M22 14.1878C20.7372 14.8621 19.2949 15.2443 17.7633 15.2443C12.7885 15.2443 8.75571 11.2115 8.75571 6.23669C8.75571 4.70512 9.13795 3.26282 9.81225 2C5.33437 3.04945 2 7.06856 2 11.8664C2 17.4631 6.53695 22 12.1336 22C16.9314 22 20.9505 18.6656 22 14.1878Z',
} as const;

export const IconMoon02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-02-stroke-rounded IconMoon02StrokeRounded"
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

export const IconMoon02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-02-duotone-rounded IconMoon02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconMoon02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-02-twotone-rounded IconMoon02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMoon02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-02-solid-rounded IconMoon02SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoon02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-02-bulk-rounded IconMoon02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoon02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-02-stroke-sharp IconMoon02StrokeSharp"
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

export const IconMoon02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-02-solid-sharp IconMoon02SolidSharp"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoon02: TheIconSelfPack = {
  name: 'Moon02',
  StrokeRounded: IconMoon02StrokeRounded,
  DuotoneRounded: IconMoon02DuotoneRounded,
  TwotoneRounded: IconMoon02TwotoneRounded,
  SolidRounded: IconMoon02SolidRounded,
  BulkRounded: IconMoon02BulkRounded,
  StrokeSharp: IconMoon02StrokeSharp,
  SolidSharp: IconMoon02SolidSharp,
};