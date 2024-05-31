import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 11H17.1351C18.6001 11 19.3326 11 19.7749 11.7353C20.2172 12.4706 19.9567 12.9393 19.4357 13.8769C18.4017 15.738 16.3955 17 14.0901 17C12.5456 17 11.1353 16.4335 10.0618 15.5',
  d2: 'M8 11V4C8 3.05719 8 2.58579 7.70711 2.29289C7.41421 2 6.94281 2 6 2C5.05719 2 4.58579 2 4.29289 2.29289C4 2.58579 4 3.05719 4 4V11C4 11.9428 4 12.4142 4.29289 12.7071C4.58579 13 5.05719 13 6 13C6.94281 13 7.41421 13 7.70711 12.7071C8 12.4142 8 11.9428 8 11Z',
  d3: 'M7 7L10 7',
  d4: 'M16 17C15 18 16 21 17.9996 22H4C5 21 6.7 17.8 5.5 13',
  d5: 'M17.1361 11H8.00098V12C8.00098 12.5523 7.55326 13 7.00098 13H5.50098C6.70098 17.8 5.00098 21 4.00098 22H18.0006C16.001 21 15.001 18 16.001 17L16.4486 16.5339C17.7234 16.0061 18.7776 15.0632 19.4367 13.8769C19.9577 12.9393 20.2182 12.4706 19.7759 11.7353C19.3336 11 18.6011 11 17.1361 11Z',
  d6: 'M8.00098 11V4C8.00098 3.05719 8.00098 2.58579 7.70809 2.29289C7.41519 2 6.94379 2 6.00098 2C5.05817 2 4.58677 2 4.29387 2.29289C4.00098 2.58579 4.00098 3.05719 4.00098 4V11C4.00098 11.9428 4.00098 12.4142 4.29387 12.7071C4.58677 13 5.05817 13 6.00098 13C6.94379 13 7.41519 13 7.70809 12.7071C8.00098 12.4142 8.00098 11.9428 8.00098 11Z',
  d7: 'M7.00098 7H10.001',
  d8: 'M8.00098 11H17.1361C18.6011 11 19.3336 11 19.7759 11.7353C20.2182 12.4706 19.9577 12.9393 19.4367 13.8769C18.4027 15.738 16.3965 17 14.0911 17C12.5466 17 11.1363 16.4335 10.0628 15.5',
  d9: 'M16.001 17C15.001 18 16.001 21 18.0006 22H4.00098C5.00098 21 6.70098 17.8 5.50098 13',
  d10: 'M17.9996 22H4C5 21 6.7 17.8 5.5 13',
  d11: 'M6.07061 1.12501C6.08872 1.12501 6.10686 1.12501 6.12501 1.12501C6.14317 1.12501 6.16131 1.12501 6.17942 1.12501C6.60349 1.12492 7.01562 1.12484 7.35553 1.17054C7.73874 1.22206 8.17601 1.34759 8.53923 1.7108C8.90244 2.07402 9.02797 2.51129 9.07949 2.89449C9.12519 3.23441 9.1251 3.64653 9.12502 4.0706C9.12502 4.08872 9.12501 4.10686 9.12501 4.12501V11.125C9.12501 11.1432 9.12502 11.1613 9.12502 11.1794C9.1251 11.6035 9.12519 12.0156 9.07949 12.3555C9.02797 12.7387 8.90244 13.176 8.53923 13.5392C8.17601 13.9024 7.73874 14.028 7.35553 14.0795C7.01562 14.1252 6.60349 14.1251 6.17942 14.125C6.16131 14.125 6.14317 14.125 6.12501 14.125C6.10686 14.125 6.08872 14.125 6.0706 14.125C5.64654 14.1251 5.23441 14.1252 4.89449 14.0795C4.51129 14.028 4.07402 13.9024 3.7108 13.5392C3.34759 13.176 3.22206 12.7387 3.17054 12.3555C3.12484 12.0156 3.12492 11.6035 3.12501 11.1794C3.12501 11.1613 3.12501 11.1432 3.12501 11.125V4.12501C3.12501 4.10686 3.12501 4.08872 3.12501 4.07061C3.12492 3.64654 3.12484 3.23441 3.17054 2.89449C3.22206 2.51129 3.34759 2.07402 3.7108 1.7108C4.07402 1.34759 4.51129 1.22206 4.89449 1.17054C5.23441 1.12484 5.64654 1.12492 6.07061 1.12501ZM5.15371 3.15371C5.15338 3.15608 5.15304 3.15851 5.15271 3.16099C5.12714 3.35118 5.12501 3.62534 5.12501 4.12501V11.125C5.12501 11.6247 5.12714 11.8988 5.15271 12.089C5.15304 12.0915 5.15338 12.0939 5.15371 12.0963C5.15608 12.0967 5.15851 12.097 5.16099 12.0973C5.35118 12.1229 5.62534 12.125 6.12501 12.125C6.62469 12.125 6.89885 12.1229 7.08904 12.0973C7.09152 12.097 7.09394 12.0967 7.09632 12.0963C7.09665 12.0939 7.09699 12.0915 7.09732 12.089C7.12289 11.8988 7.12501 11.6247 7.12501 11.125V4.12501C7.12501 3.62534 7.12289 3.35118 7.09732 3.16099C7.09699 3.15851 7.09665 3.15608 7.09632 3.15371C7.09394 3.15337 7.09152 3.15304 7.08904 3.15271C6.89885 3.12714 6.62469 3.12501 6.12501 3.12501C5.62534 3.12501 5.35118 3.12714 5.16099 3.15271C5.15851 3.15304 5.15608 3.15337 5.15371 3.15371Z',
  d12: 'M6.125 7.125C6.125 6.57272 6.57272 6.125 7.125 6.125L10.125 6.125C10.6773 6.125 11.125 6.57272 11.125 7.125C11.125 7.67729 10.6773 8.125 10.125 8.125L7.125 8.125C6.57272 8.125 6.125 7.67728 6.125 7.125Z',
  d13: 'M20.2164 14.3662C19.9506 14.8445 19.5392 15.2255 19.0515 15.4738C17.8854 16.0674 16.6164 16.3751 15.2149 16.3751C13.8136 16.3751 12.9154 16.2368 12.2609 16.0149C11.6228 15.7985 11.1718 15.4879 10.6787 15.0591C10.3661 14.7873 9.89238 14.8204 9.62058 15.1329C9.34878 15.4455 9.38183 15.9192 9.6944 16.191C10.2749 16.6958 10.8938 17.1352 11.7793 17.4354C12.6485 17.7302 13.7276 17.8751 15.2149 17.8751C15.6782 17.8751 16.1291 17.8461 16.568 17.7891C16.5259 17.8827 16.4909 18.0196 16.4839 18.2143C16.4726 18.5319 16.5412 18.9323 16.7022 19.3617C17.0288 20.2326 17.6706 21.0594 18.4601 21.4542C18.7712 21.6098 18.9345 21.9589 18.8545 22.2974C18.7746 22.6359 18.4724 22.875 18.1246 22.875H4.12502C3.82168 22.875 3.5482 22.6923 3.43211 22.412C3.31603 22.1318 3.38019 21.8092 3.59469 21.5947C4.39741 20.792 6.03738 17.8668 4.89742 13.3069C4.8414 13.0829 4.89174 12.8455 5.03387 12.6635C5.176 12.4814 5.39407 12.375 5.62502 12.375H7.12502C7.26309 12.375 7.37502 12.2631 7.37502 12.125V11.125C7.37502 10.7108 7.71081 10.375 8.12502 10.375L17.3305 10.375C18.0021 10.3749 18.6216 10.3748 19.1233 10.4841C19.7136 10.6129 20.1988 10.9021 20.5426 11.4737C20.8507 11.9859 20.9463 12.484 20.8225 13.0232C20.7232 13.4552 20.4472 13.9513 20.2164 14.3662Z',
  d14: 'M8 11H20C20 14.3137 17.3137 17 14 17C12.9071 17 11.8825 16.7078 11 16.1973',
  d15: 'M8 13V2H4V13H8Z',
  d16: 'M6 7L11 7',
  d17: 'M16.5 16.5C14.5 18.5 16 21 17.9996 22H6V13',
  d18: 'M11 7.75L6 7.75L6 6.25L11 6.25L11 7.75Z',
  d19: 'M5.25 22V13.75H4C3.58579 13.75 3.25 13.4142 3.25 13V2C3.25 1.58579 3.58579 1.25 4 1.25H8C8.41421 1.25 8.75 1.58579 8.75 2V10.25H20.7497V11C20.7497 14.7279 17.7276 17.75 13.9997 17.75C12.7715 17.75 11.6177 17.4213 10.6241 16.8465L9.87305 18.1449C11.0888 18.8482 12.5007 19.25 13.9997 19.25C14.8096 19.25 15.5923 19.1333 16.3318 18.9158C16.3564 19.0668 16.3975 19.2157 16.4522 19.3617C16.7488 20.1528 17.4717 20.8975 18.335 21.3292C18.6461 21.4848 18.8094 21.8338 18.7295 22.1723C18.6496 22.5109 18.3474 22.75 17.9996 22.75H6C5.58579 22.75 5.25 22.4142 5.25 22ZM4.75 12.25V2.75H7.25V12.25H4.75Z',
} as const;

export const IconToilet01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="toilet-01-stroke-rounded IconToilet01StrokeRounded"
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

export const IconToilet01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="toilet-01-duotone-rounded IconToilet01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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

export const IconToilet01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="toilet-01-twotone-rounded IconToilet01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconToilet01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="toilet-01-solid-rounded IconToilet01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconToilet01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="toilet-01-bulk-rounded IconToilet01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconToilet01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="toilet-01-stroke-sharp IconToilet01StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconToilet01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="toilet-01-solid-sharp IconToilet01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfToilet01: TheIconSelfPack = {
  name: 'Toilet01',
  StrokeRounded: IconToilet01StrokeRounded,
  DuotoneRounded: IconToilet01DuotoneRounded,
  TwotoneRounded: IconToilet01TwotoneRounded,
  SolidRounded: IconToilet01SolidRounded,
  BulkRounded: IconToilet01BulkRounded,
  StrokeSharp: IconToilet01StrokeSharp,
  SolidSharp: IconToilet01SolidSharp,
};