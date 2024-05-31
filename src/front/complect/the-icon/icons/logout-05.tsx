import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 6.5C4.15875 8.14796 3 10.3344 3 12.9999C3 17.9705 7.02944 21.9999 12 21.9999C16.9706 21.9999 21 17.9705 21 12.9999C21 10.3344 19.8412 8.14796 18 6.5',
  d2: 'M12 2V11M12 2C11.2998 2 9.99153 3.9943 9.5 4.5M12 2C12.7002 2 14.0085 3.9943 14.5 4.5',
  d3: 'M13.0059 11C13.0059 11.5523 12.5581 12 12.0059 12C11.4536 12 11.0059 11.5523 11.0059 11L11.0059 5.74996L10.4116 5.74998C10.236 5.75011 10.0203 5.75026 9.84387 5.72819L9.84053 5.72777C9.71408 5.71201 9.13804 5.64017 8.86368 5.07457C8.58872 4.50775 8.89065 4.00761 8.95597 3.8994L9.29511 3.43092C9.58975 3.05509 9.99545 2.54063 10.3759 2.14962C10.5657 1.95451 10.783 1.75328 11.0139 1.59443C11.2191 1.45323 11.5693 1.24996 12 1.24996C12.4307 1.24996 12.7809 1.45323 12.9861 1.59443C13.217 1.75328 13.4343 1.95451 13.6241 2.14962C14.0046 2.54063 14.4102 3.05508 14.7049 3.43091L15.044 3.89941C15.1093 4.00761 15.4113 4.50775 15.1363 5.07457C14.862 5.64017 14.2859 5.71201 14.1595 5.72777L14.1561 5.72819C13.9797 5.75026 13.764 5.75011 13.5884 5.74998L13.0059 5.74996L13.0059 11Z',
  d4: 'M6.87651 6.07358C7.23562 6.47335 7.20148 7.08748 6.80024 7.44529C5.18313 8.88735 4.2 10.7587 4.2 13.0357C4.2 17.3277 7.69218 20.8071 12 20.8071C16.3078 20.8071 19.8 17.3277 19.8 13.0357C19.8 10.7587 18.8169 8.88735 17.1998 7.44529C16.7985 7.08748 16.7644 6.47335 17.1235 6.07358C17.4826 5.67381 18.099 5.63979 18.5002 5.99759C20.4736 7.7573 21.75 10.134 21.75 13.0357C21.75 18.4008 17.3848 22.75 12 22.75C6.61522 22.75 2.25 18.4008 2.25 13.0357C2.25 10.134 3.52644 7.7573 5.49976 5.99759C5.901 5.63979 6.51739 5.67381 6.87651 6.07358Z',
  d5: 'M12 12L12 2.74558M15 5.00021L12 2L9 5.00021',
  d6: 'M6.66691 7.24515C5.00833 8.72962 4 10.656 4 13C4 17.4182 7.58172 21 12 21C16.4183 21 20 17.4182 20 13C20 10.656 18.9917 8.72962 17.3331 7.24515L18.6669 5.75488C20.6908 7.56634 22 10.013 22 13C22 18.5228 17.5228 23 12 23C6.47715 23 2 18.5228 2 13C2 10.013 3.30917 7.56634 5.33309 5.75488L6.66691 7.24515Z',
  d7: 'M12.0001 1L15.7072 4.7074L14.293 6.12156L13.0001 4.8286L13.0001 12.4143H11.0001L11.0001 4.8286L9.70723 6.12156L8.29297 4.7074L12.0001 1Z',
} as const;

export const IconLogout05StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-05-stroke-rounded IconLogout05StrokeRounded"
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

export const IconLogout05DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-05-duotone-rounded IconLogout05DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="13" 
        r="9" 
        fill="var(--icon-fill)"></circle>
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

export const IconLogout05TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-05-twotone-rounded IconLogout05TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconLogout05SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-05-solid-rounded IconLogout05SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLogout05BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-05-bulk-rounded IconLogout05BulkRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLogout05StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-05-stroke-sharp IconLogout05StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLogout05SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-05-solid-sharp IconLogout05SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfLogout05: TheIconSelfPack = {
  name: 'Logout05',
  StrokeRounded: IconLogout05StrokeRounded,
  DuotoneRounded: IconLogout05DuotoneRounded,
  TwotoneRounded: IconLogout05TwotoneRounded,
  SolidRounded: IconLogout05SolidRounded,
  BulkRounded: IconLogout05BulkRounded,
  StrokeSharp: IconLogout05StrokeSharp,
  SolidSharp: IconLogout05SolidSharp,
};