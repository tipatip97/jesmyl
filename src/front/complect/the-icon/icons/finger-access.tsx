import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 12C18 8.68628 15.3137 6 12 6C8.68628 6 6 8.68628 6 12C6 15.3136 7 17.5 8.99985 20',
  d2: 'M15 21C9.5 17.5 9 13.6568 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 16.3431 15 18 15C19.6569 15 21 13.6569 21 12C21 7.02942 16.9706 3 12 3C7.02942 3 3 7.02942 3 12C3 12.6874 3.07707 13.3568 3.22303 14',
  d3: 'M12 12C12.5 17 17.5 19 17.5 19',
  d4: 'M12 3C7.02942 3 3 7.02942 3 12C3 12.6874 3.07707 13.3568 3.22303 14L8.99985 20L15 21C9.5 17.5 9 13.6568 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 16.3431 15 18 15C19.6569 15 21 13.6569 21 12C21 7.02942 16.9706 3 12 3Z',
  d5: 'M12 7C9.23856 7 7 9.23856 7 12C7 15.0373 7.88854 17.0099 9.78074 19.3753C10.1257 19.8066 10.0558 20.4359 9.62452 20.7809C9.19324 21.1259 8.56395 21.0559 8.21896 20.6247C6.11146 17.9901 5 15.5899 5 12C5 8.134 8.134 5 12 5C15.866 5 19 8.13399 19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 9.23856 14.7614 7 12 7Z',
  d6: 'M12 4C7.5817 4 4 7.5817 4 12C4 12.6124 4.06864 13.2076 4.19823 13.7787C4.32045 14.3173 3.98291 14.853 3.44432 14.9752C2.90573 15.0974 2.37004 14.7599 2.24782 14.2213C2.08549 13.506 2 12.7623 2 12C2 6.47714 6.47714 2 12 2C17.5229 2 22 6.47714 22 12C22 14.2091 20.2091 16 18 16C15.7909 16 14 14.2091 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 12.7185 10.1066 13.9284 10.8297 15.3572C11.5521 16.7845 12.9205 18.4914 15.5369 20.1563C16.0028 20.4528 16.1402 21.0709 15.8437 21.5369C15.5472 22.0028 14.9291 22.1402 14.4631 21.8437C11.5795 20.0086 9.94793 18.0439 9.04526 16.2604C8.14339 14.4784 8 12.9383 8 12C8 9.79085 9.79085 8 12 8C14.2091 8 16 9.79085 16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 7.5817 16.4183 4 12 4Z',
  d7: 'M12.9951 11.9006C12.9402 11.351 12.4501 10.9501 11.9006 11.005C11.351 11.06 10.9501 11.55 11.005 12.0996C11.3687 15.7357 13.8246 17.9346 15.4478 19.01C15.9008 19.3083 16.3271 19.5449 16.619 19.692C16.7604 19.7633 17.0132 19.8763 17.1132 19.921L17.1282 19.9277C17.6409 20.1328 18.2229 19.8834 18.428 19.3706C18.6331 18.8579 18.3838 18.276 17.8712 18.0708C17.632 17.9502 16.9401 17.599 16.5518 17.3418C15.143 16.4082 13.2716 14.665 12.9951 11.9006Z',
  d8: 'M12 7C9.23856 7 7 9.23856 7 12C7 15.0373 7.88854 17.0099 9.78074 19.3753L10.4054 20.1562L8.84363 21.4056L8.21896 20.6247C6.11146 17.9901 5 15.5899 5 12C5 8.134 8.134 5 12 5C15.866 5 19 8.13399 19 12H17C17 9.23856 14.7614 7 12 7Z',
  d9: 'M12 4C7.5817 4 4 7.5817 4 12C4 12.6124 4.06864 13.2076 4.19823 13.7787L4.41953 14.7539L2.46912 15.1965L2.24782 14.2213C2.08549 13.506 2 12.7623 2 12C2 6.47714 6.47714 2 12 2C17.5229 2 22 6.47714 22 12C22 14.2091 20.2091 16 18 16C15.7909 16 14 14.2091 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 12.7185 10.1066 13.9284 10.8297 15.3572C11.5521 16.7845 12.9205 18.4914 15.5369 20.1563L15.7758 20.3084L14.7088 22L14.4631 21.8437C11.5795 20.0086 9.94793 18.0439 9.04526 16.2604C8.14339 14.4784 8 12.9383 8 12C8 9.79085 9.79085 8 12 8C14.2091 8 16 9.79085 16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 7.5817 16.4183 4 12 4Z',
  d10: 'M12.8963 10.9062L12.9958 11.9013C13.2119 14.0619 14.3974 15.5951 15.5891 16.6165C16.1835 17.126 16.7659 17.4955 17.1986 17.7367C17.4141 17.8568 17.7555 18.0176 17.8742 18.0731L18.8007 18.4437L18.0579 20.3007L17.1294 19.9293L17.1093 19.9199C16.9346 19.8382 16.4756 19.6234 16.2249 19.4836C15.7044 19.1936 15.0056 18.7506 14.2875 18.135C12.8542 16.9065 11.2897 14.9397 11.0058 12.1003L10.9062 11.1053L12.8963 10.9062Z',
};

export const IconFingerAccessStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-access-stroke-rounded IconFingerAccessStrokeRounded"
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

export const IconFingerAccessDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-access-duotone-rounded IconFingerAccessDuotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconFingerAccessTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-access-twotone-rounded IconFingerAccessTwotoneRounded"
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

export const IconFingerAccessSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-access-solid-rounded IconFingerAccessSolidRounded"
    >
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFingerAccessBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-access-bulk-rounded IconFingerAccessBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFingerAccessStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-access-stroke-sharp IconFingerAccessStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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

export const IconFingerAccessSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-access-solid-sharp IconFingerAccessSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFingerAccess: TheIconSelfPack = {
  name: 'FingerAccess',
  StrokeRounded: IconFingerAccessStrokeRounded,
  DuotoneRounded: IconFingerAccessDuotoneRounded,
  TwotoneRounded: IconFingerAccessTwotoneRounded,
  SolidRounded: IconFingerAccessSolidRounded,
  BulkRounded: IconFingerAccessBulkRounded,
  StrokeSharp: IconFingerAccessStrokeSharp,
  SolidSharp: IconFingerAccessSolidSharp,
};