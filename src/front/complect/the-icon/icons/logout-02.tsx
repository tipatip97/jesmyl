import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 3L10.3374 3.23384C7.75867 4.144 6.46928 4.59908 5.73464 5.63742C5 6.67576 5 8.0431 5 10.7778V13.2222C5 15.9569 5 17.3242 5.73464 18.3626C6.46928 19.4009 7.75867 19.856 10.3374 20.7662L11 21',
  d2: 'M21 12L11 12M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5',
  d3: 'M10.3374 3.23384L11 3V21L10.3374 20.7662C7.75867 19.856 6.46928 19.4009 5.73464 18.3626C5 17.3242 5 15.9569 5 13.2222V10.7778C5 8.0431 5 6.67576 5.73464 5.63742C6.46928 4.59908 7.75867 4.144 10.3374 3.23384Z',
  d4: 'M12.193 2.66745C12.3768 3.18825 12.1036 3.75945 11.5828 3.94326L10.9203 4.17711C9.60945 4.63975 8.70506 4.96051 8.03099 5.28754C7.37981 5.60347 7.03566 5.88357 6.80098 6.21526C6.5663 6.54696 6.41671 6.96471 6.33552 7.68392C6.25148 8.42839 6.25 9.38798 6.25 10.778V13.2225C6.25 14.6126 6.25148 15.5722 6.33552 16.3166C6.41671 17.0358 6.5663 17.4536 6.80098 17.7853C7.03566 18.117 7.37981 18.3971 8.031 18.713C8.70506 19.04 9.60945 19.3608 10.9203 19.8234L11.5828 20.0573C12.1036 20.2411 12.3768 20.8123 12.193 21.3331C12.0092 21.8539 11.438 22.1271 10.9172 21.9433L10.1999 21.6901C8.957 21.2515 7.94545 20.8945 7.15799 20.5124C6.33614 20.1137 5.66827 19.6471 5.1683 18.9404C4.66834 18.2338 4.45061 17.4487 4.34814 16.541C4.24996 15.6713 4.24998 14.5986 4.25 13.2806V10.72C4.24998 9.40197 4.24996 8.32928 4.34814 7.45957C4.45061 6.55186 4.66834 5.76676 5.1683 5.06012C5.66827 4.35347 6.33614 3.88686 7.15799 3.48813C7.94545 3.10609 8.957 2.74909 10.1999 2.31045L10.9172 2.05728C11.438 1.87347 12.0092 2.14665 12.193 2.66745Z',
  d5: 'M10.75 13.0059C10.1977 13.0059 9.75 12.5581 9.75 12.0059C9.75 11.4536 10.1977 11.0059 10.75 11.0059L17.25 11.0059L17.25 10.4116C17.2499 10.236 17.2497 10.0203 17.2718 9.84387L17.2722 9.84053C17.288 9.71408 17.3598 9.13804 17.9254 8.86368C18.4923 8.58872 18.9924 8.89065 19.1006 8.95597L19.5691 9.29511C19.9449 9.58975 20.4594 9.99545 20.8504 10.3759C21.0455 10.5657 21.2467 10.783 21.4056 11.0139C21.5468 11.2191 21.75 11.5693 21.75 12C21.75 12.4307 21.5468 12.7809 21.4056 12.9861C21.2467 13.217 21.0455 13.4343 20.8504 13.6241C20.4594 14.0046 19.9449 14.4102 19.5691 14.7049L19.1006 15.044C18.9924 15.1093 18.4922 15.4113 17.9254 15.1363C17.3598 14.862 17.288 14.2859 17.2722 14.1595L17.2718 14.1561C17.2497 13.9797 17.2499 13.764 17.25 13.5884L17.25 13.0059L10.75 13.0059Z',
  d6: 'M10 3L4 6L4 18L10 21',
  d7: 'M10 12H19.2642M16.9998 9L20 12L16.9998 15',
  d8: 'M9.59923 2L10.5 3.80794L5.01418 6.56061L5.01418 17.4394L10.5 20.1921L9.59923 22L3 18.6887L3 5.31135L9.59923 2Z',
  d9: 'M17.2926 8.29287L21 12L17.2926 15.7071L15.8784 14.2929L17.1714 13H9.58574V11H17.1714L15.8784 9.70713L17.2926 8.29287Z',
} as const;

export const IconLogout02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-02-stroke-rounded IconLogout02StrokeRounded"
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

export const IconLogout02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-02-duotone-rounded IconLogout02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconLogout02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-02-twotone-rounded IconLogout02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLogout02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-02-solid-rounded IconLogout02SolidRounded"
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

export const IconLogout02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-02-bulk-rounded IconLogout02BulkRounded"
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

export const IconLogout02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-02-stroke-sharp IconLogout02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLogout02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-02-solid-sharp IconLogout02SolidSharp"
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

export const iconPackOfLogout02: TheIconSelfPack = {
  name: 'Logout02',
  StrokeRounded: IconLogout02StrokeRounded,
  DuotoneRounded: IconLogout02DuotoneRounded,
  TwotoneRounded: IconLogout02TwotoneRounded,
  SolidRounded: IconLogout02SolidRounded,
  BulkRounded: IconLogout02BulkRounded,
  StrokeSharp: IconLogout02StrokeSharp,
  SolidSharp: IconLogout02SolidSharp,
};