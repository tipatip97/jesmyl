import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 9.3C3 7.5 5.06126 5.7 7.68468 5.7L16.9574 5.7C19.2 5.7 21 4.35 21 3',
  d2: 'M16.502 6L15.6072 18.3139C15.5177 19.7653 16.5097 20.9999 17.7654 20.9999C18.6967 20.9999 19.5236 20.3093 19.8181 19.2855L20.1016 18.2999',
  d3: 'M10 6C9.86667 9.0625 9.6 14.75 9.2 16.5C8.8 18.25 8 20 6 20',
  d4: 'M3 9.3C3 7.5 5.06126 5.7 7.68468 5.7H16.9574C19.2 5.7 21 4.35 21 3',
  d5: 'M21 2C21.5523 2 22 2.44772 22 3C22 4.12641 21.2687 5.06859 20.3894 5.6781C19.4837 6.30588 18.2724 6.7 16.9574 6.7L7.68468 6.7C6.59922 6.7 5.64865 7.07323 4.98348 7.60569C4.30509 8.14873 4 8.7855 4 9.3C4 9.85228 3.55228 10.3 3 10.3C2.44772 10.3 2 9.85228 2 9.3C2 8.0145 2.72554 6.85127 3.73363 6.04431C4.75495 5.22677 6.14673 4.7 7.68468 4.7L16.9574 4.7C17.885 4.7 18.695 4.41912 19.25 4.0344C19.8313 3.63141 20 3.22359 20 3C20 2.44772 20.4477 2 21 2Z',
  d6: 'M16.574 5.00267C17.1249 5.0427 17.539 5.52168 17.4989 6.07252L16.6046 18.3805C16.5435 19.4098 17.2323 19.9999 17.765 19.9999C18.1691 19.9999 18.6613 19.6881 18.8567 19.0091L19.1402 18.0235C19.2928 17.4927 19.8469 17.1862 20.3776 17.3389C20.9084 17.4916 21.2149 18.0456 21.0622 18.5764L20.7787 19.5619C20.385 20.9306 19.2236 21.9999 17.765 21.9999C15.7872 21.9999 14.4934 20.1229 14.6087 18.2525L14.6094 18.2415L14.6094 18.2415L15.5042 5.92757C15.5442 5.37674 16.0232 4.96265 16.574 5.00267Z',
  d7: 'M10.0435 5.00096C10.5953 5.02499 11.0231 5.49175 10.9991 6.04351C10.9324 7.57544 10.832 9.77253 10.6978 11.808C10.5661 13.8076 10.3963 15.7542 10.1749 16.7228C9.96409 17.645 9.625 18.686 8.99543 19.5123C8.3303 20.3853 7.34969 21 6 21C5.44772 21 5 20.5523 5 20C5 19.4477 5.44772 19 6 19C6.65031 19 7.0697 18.7397 7.40457 18.3002C7.775 17.814 8.03591 17.1051 8.22514 16.2772C8.40373 15.4959 8.56726 13.7237 8.70216 11.6765C8.83471 9.66501 8.93431 7.4871 9.00095 5.95652C9.02497 5.40476 9.49173 4.97694 10.0435 5.00096Z',
  d8: 'M19.25 3.5344C19.8313 3.13141 20 2.72359 20 2.5H22C22 3.62641 21.2687 4.56859 20.3894 5.1781C19.4837 5.80588 18.2724 6.2 16.9574 6.2L7.68468 6.2C6.59922 6.2 5.64865 6.57323 4.98348 7.10569C4.30509 7.64873 4 8.2855 4 8.8H2C2 7.5145 2.72554 6.35127 3.73363 5.54431C4.75495 4.72677 6.14673 4.2 7.68468 4.2L16.9574 4.2C17.885 4.2 18.695 3.91912 19.25 3.5344Z',
  d9: 'M14.6094 17.7417L15.5042 5.42773L17.4989 5.57268L16.6046 17.8806C16.5435 18.91 17.2323 19.5001 17.765 19.5001C18.1691 19.5001 18.6613 19.1883 18.8567 18.5092L19.1402 17.5237L21.0622 18.0766L20.7787 19.0621C20.385 20.4307 19.2236 21.5001 17.765 21.5001C15.7872 21.5001 14.4934 19.623 14.6087 17.7526L14.6094 17.7417L14.6094 17.7417Z',
  d10: 'M8.70216 11.176C8.83471 9.16454 8.93431 6.98663 9.00095 5.45605L10.9991 5.54305C10.9324 7.07497 10.832 9.27206 10.6978 11.3075C10.5661 13.3071 10.3963 15.2537 10.1749 16.2224C9.96409 17.1445 9.625 18.1855 8.99543 19.0118C8.3303 19.8848 7.34969 20.4996 6 20.4996V18.4996C6.65031 18.4996 7.0697 18.2393 7.40457 17.7998C7.775 17.3136 8.03591 16.6046 8.22514 15.7767C8.40373 14.9954 8.56726 13.2232 8.70216 11.176Z',
};

export const IconPiStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pi-stroke-rounded IconPiStrokeRounded"
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

export const IconPiDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pi-duotone-rounded IconPiDuotoneRounded"
    >
      <path 
        d={d.d4} 
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

export const IconPiTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pi-twotone-rounded IconPiTwotoneRounded"
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

export const IconPiSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pi-solid-rounded IconPiSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPiBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pi-bulk-rounded IconPiBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPiStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pi-stroke-sharp IconPiStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPiSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pi-solid-sharp IconPiSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPi: TheIconSelfPack = {
  name: 'Pi',
  StrokeRounded: IconPiStrokeRounded,
  DuotoneRounded: IconPiDuotoneRounded,
  TwotoneRounded: IconPiTwotoneRounded,
  SolidRounded: IconPiSolidRounded,
  BulkRounded: IconPiBulkRounded,
  StrokeSharp: IconPiStrokeSharp,
  SolidSharp: IconPiSolidSharp,
};